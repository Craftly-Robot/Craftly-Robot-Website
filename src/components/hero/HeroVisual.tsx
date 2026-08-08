import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './HeroVisual.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  offsetX: number;
  offsetY: number;
  size: number;
  color: string;
}

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const posRef = useRef({ x: -9999, y: -9999 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const reducedMotion = useReducedMotion();

  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    const count = 1200; // Denser cluster for larger ball
    const radius = 180; // Much larger radius for the swarm
    
    // Google brand colors made faint/pastel to blend with black & white theme
    const colors = [
      'rgba(66, 133, 244, 0.4)', // Faint Blue
      'rgba(234, 67, 53, 0.4)',  // Faint Red
      'rgba(251, 188, 5, 0.4)',  // Faint Yellow
      'rgba(52, 168, 83, 0.4)'   // Faint Green
    ];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Use cube root for more uniform spherical distribution
      const r = Math.pow(Math.random(), 1/3) * radius;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({
        x: -9999,
        y: -9999,
        vx: 0,
        vy: 0,
        offsetX: Math.cos(angle) * r,
        offsetY: Math.sin(angle) * r,
        size: 3 + Math.random() * 2, // Very distinct round dots
        color: color
      });
    }
    particlesRef.current = particles;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    const mouse = mouseRef.current;
    const pos = posRef.current;
    const particles = particlesRef.current;

    ctx.clearRect(0, 0, w, h);

    if (mouse.active) {
      if (pos.x === -9999) {
        pos.x = mouse.x;
        pos.y = mouse.y;
        for (const p of particles) {
          p.x = mouse.x + p.offsetX;
          p.y = mouse.y + p.offsetY;
        }
      }
      
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;

      const time = performance.now() * 0.003;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Chaotic swarm noise
        const noiseX = Math.sin(time + i * 0.2) * 25;
        const noiseY = Math.cos(time + i * 0.2) * 25;

        const targetX = pos.x + p.offsetX + noiseX;
        const targetY = pos.y + p.offsetY + noiseY;

        const dx = targetX - p.x;
        const dy = targetY - p.y;
        
        p.vx += dx * 0.08;
        p.vy += dy * 0.08;

        p.vx *= 0.75;
        p.vy *= 0.75;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      pos.x = -9999;
      pos.y = -9999;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
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
      initParticles();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    window.addEventListener('resize', resize);
    
    // Attach to the parent section so it tracks the whole hero area
    const heroSection = canvas.closest('.hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', onMouseMove as EventListener);
      heroSection.addEventListener('mouseleave', onMouseLeave);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', onMouseMove as EventListener);
        heroSection.removeEventListener('mouseleave', onMouseLeave);
      }
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
