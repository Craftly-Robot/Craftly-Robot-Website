import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './HeroVisual.css';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  angle: number;
  baseAngle: number;
  size: number;
  color: string;
}

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const reducedMotion = useReducedMotion();

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = [];
    
    // Grid settings
    const spacing = 30; // distance between particles
    const cols = Math.floor(w / spacing);
    const rows = Math.floor(h / spacing);
    
    // Center the grid
    const startX = (w - (cols * spacing)) / 2;
    const startY = (h - (rows * spacing)) / 2;

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        // slight jitter
        const jitterX = (Math.random() - 0.5) * spacing * 0.5;
        const jitterY = (Math.random() - 0.5) * spacing * 0.5;
        
        const px = startX + i * spacing + jitterX;
        const py = startY + j * spacing + jitterY;

        // Base angle points towards center slightly or just random
        const dx = (w / 2) - px;
        const dy = (h / 2) - py;
        let baseAngle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
        
        if (Math.random() > 0.5) {
            baseAngle += Math.PI / 2; // Create some flow variation
        }

        particles.push({
          x: px,
          y: py,
          baseX: px,
          baseY: py,
          vx: 0,
          vy: 0,
          angle: baseAngle,
          baseAngle: baseAngle,
          size: 2 + Math.random() * 3, // length of the dash
          color: `rgba(180, 180, 180, ${0.1 + Math.random() * 0.15})` // very subtle light gray
        });
      }
    }
    particlesRef.current = particles;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, w, h);

    // Physics constants
    const MOUSE_RADIUS = 150;
    const REPULSION_FORCE = 0.6;
    const SPRING_CONSTANT = 0.03;
    const DAMPING = 0.85; // friction

    const time = performance.now() * 0.001; // for idle drift

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // 1. Mouse Interaction (Repulsion)
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < MOUSE_RADIUS && distance > 0) {
        // The closer the mouse, the stronger the force
        const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
        // Direction is away from mouse
        const dirX = -dx / distance;
        const dirY = -dy / distance;

        p.vx += dirX * force * REPULSION_FORCE;
        p.vy += dirY * force * REPULSION_FORCE;
      }

      // 2. Idle movement (Subtle Perlin-like noise using sine waves)
      // Only apply idle drift strongly if not currently being pushed heavily by mouse
      const idleForce = 0.02;
      p.vx += Math.sin(p.baseX * 0.01 + time) * idleForce;
      p.vy += Math.cos(p.baseY * 0.01 + time) * idleForce;

      // 3. Spring force pulling back to base
      const springX = (p.baseX - p.x) * SPRING_CONSTANT;
      const springY = (p.baseY - p.y) * SPRING_CONSTANT;
      
      p.vx += springX;
      p.vy += springY;

      // 4. Apply velocity and damping
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= DAMPING;
      p.vy *= DAMPING;

      // 5. Calculate render angle
      // It points slightly towards the direction it's moving, blended with base angle
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 0.1) {
        const moveAngle = Math.atan2(p.vy, p.vx);
        // Smoothly interpolate angle
        const angleDiff = moveAngle - p.angle;
        p.angle += angleDiff * 0.1;
      } else {
        // Return to base angle
        const angleDiff = p.baseAngle - p.angle;
        p.angle += angleDiff * 0.05;
      }

      // Render as a tiny dash
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1.2;
      ctx.lineCap = 'round';
      
      ctx.beginPath();
      // Draw line centered on its coordinates
      ctx.moveTo(-p.size / 2, 0);
      ctx.lineTo(p.size / 2, 0);
      ctx.stroke();
      
      ctx.restore();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      // Measure parent element to ensure it fills the Hero container
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const w = rect.width;
      const h = rect.height;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }

      sizeRef.current = { w, h };
      
      // Re-initialize grid strictly to the new size
      initParticles(w, h);
    };

    // Listen to mouse on the window so it tracks correctly even over other elements
    // We adjust coordinates relative to the canvas
    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // Only track if mouse is within a reasonable distance of the canvas
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [reducedMotion, animate, initParticles]);

  if (reducedMotion) {
    return (
      <div className="hero-visual" aria-hidden="true">
        <div style={{
          width: '100%',
          height: '100%',
          background: `radial-gradient(ellipse at 50% 50%, hsla(0, 0%, 90%, 0.1) 0%, transparent 70%)`
        }} />
      </div>
    );
  }

  return (
    <div className="hero-visual" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-visual__canvas" />
    </div>
  );
}
