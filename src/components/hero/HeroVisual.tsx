import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './HeroVisual.css';

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const posRef = useRef({ x: -9999, y: -9999 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const reducedMotion = useReducedMotion();

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    const mouse = mouseRef.current;
    const pos = posRef.current;

    ctx.clearRect(0, 0, w, h);

    if (mouse.active) {
      if (pos.x === -9999) {
        pos.x = mouse.x;
        pos.y = mouse.y;
      }
      // Smooth interpolation (lerp) towards the mouse
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;

      // Draw the ball
      const radius = 250; // Large soft glow
      
      const gradient = ctx.createRadialGradient(
        pos.x, pos.y, 0,
        pos.x, pos.y, radius
      );
      
      // Soft visible gray glowing ball
      gradient.addColorStop(0, 'rgba(120, 120, 120, 0.25)');
      gradient.addColorStop(1, 'rgba(120, 120, 120, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // If mouse leaves, reset so it doesn't jump when re-entering
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
  }, [reducedMotion, animate]);

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
