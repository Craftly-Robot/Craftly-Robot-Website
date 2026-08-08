import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './HeroVisual.css';

/* ── Types ── */
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  brightness: number;
  type: 'primary' | 'secondary' | 'tertiary';
}

interface Particle {
  x: number;
  y: number;
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  opacity: number;
}

/* ── Constants ── */
const NODE_COUNT = 18;
const PARTICLE_COUNT = 25;
const CONNECTION_DISTANCE = 280;
const MOUSE_INFLUENCE = 120;

const COLORS = {
  primary: 'hsla(222, 84%, 58%, ',
  secondary: 'hsla(260, 60%, 60%, ',
  tertiary: 'hsla(200, 70%, 55%, ',
  line: 'hsla(222, 40%, 45%, ',
  particle: 'hsla(222, 84%, 70%, ',
  grid: 'hsla(228, 15%, 18%, ',
};

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const sizeRef = useRef({ w: 0, h: 0 });
  const reducedMotion = useReducedMotion();

  /* ── Initialize nodes ── */
  const initNodes = useCallback((w: number, h: number) => {
    const nodes: Node[] = [];
    const types: Node['type'][] = ['primary', 'secondary', 'tertiary'];

    for (let i = 0; i < NODE_COUNT; i++) {
      const margin = 80;
      nodes.push({
        x: margin + Math.random() * (w - margin * 2),
        y: margin + Math.random() * (h - margin * 2),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random() * 3,
        baseRadius: 2 + Math.random() * 3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.01,
        brightness: 0.3 + Math.random() * 0.7,
        type: types[i % 3],
      });
    }
    nodesRef.current = nodes;
  }, []);

  /* ── Initialize particles ── */
  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: 0,
        y: 0,
        fromNode: Math.floor(Math.random() * NODE_COUNT),
        toNode: Math.floor(Math.random() * NODE_COUNT),
        progress: Math.random(),
        speed: 0.002 + Math.random() * 0.004,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }
    particlesRef.current = particles;
  }, []);

  /* ── Draw grid ── */
  const drawGrid = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    const spacing = 60;
    ctx.strokeStyle = COLORS.grid + '0.3)';
    ctx.lineWidth = 0.5;

    for (let x = 0; x < w; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    for (let y = 0; y < h; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }, []);

  /* ── Animation loop ── */
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    const nodes = nodesRef.current;
    const particles = particlesRef.current;
    const mouse = mouseRef.current;

    ctx.clearRect(0, 0, w, h);

    // Draw subtle grid
    drawGrid(ctx, w, h);

    // Update and draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
          ctx.strokeStyle = COLORS.line + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Update nodes
    for (const node of nodes) {
      // Movement
      node.x += node.vx;
      node.y += node.vy;

      // Boundary bounce (soft)
      const margin = 40;
      if (node.x < margin || node.x > w - margin) node.vx *= -1;
      if (node.y < margin || node.y > h - margin) node.vy *= -1;
      node.x = Math.max(margin, Math.min(w - margin, node.x));
      node.y = Math.max(margin, Math.min(h - margin, node.y));

      // Mouse influence
      const mdx = mouse.x - node.x;
      const mdy = mouse.y - node.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < MOUSE_INFLUENCE && mDist > 0) {
        const force = (MOUSE_INFLUENCE - mDist) / MOUSE_INFLUENCE * 0.5;
        node.vx -= (mdx / mDist) * force;
        node.vy -= (mdy / mDist) * force;
      }

      // Damping
      node.vx *= 0.99;
      node.vy *= 0.99;

      // Pulse
      node.pulsePhase += node.pulseSpeed;
      node.radius = node.baseRadius + Math.sin(node.pulsePhase) * 1;

      // Draw node
      const colorKey = COLORS[node.type];
      const glowAlpha = node.brightness * (0.5 + Math.sin(node.pulsePhase) * 0.2);

      // Glow
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius * 6
      );
      gradient.addColorStop(0, colorKey + (glowAlpha * 0.3) + ')');
      gradient.addColorStop(1, colorKey + '0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = colorKey + node.brightness + ')';
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    // Update and draw particles
    for (const p of particles) {
      p.progress += p.speed;

      if (p.progress >= 1) {
        p.progress = 0;
        p.fromNode = p.toNode;
        p.toNode = Math.floor(Math.random() * NODE_COUNT);
      }

      const from = nodes[p.fromNode];
      const to = nodes[p.toNode];
      if (!from || !to) continue;

      p.x = from.x + (to.x - from.x) * p.progress;
      p.y = from.y + (to.y - from.y) * p.progress;

      const alpha = p.opacity * Math.sin(p.progress * Math.PI);
      ctx.fillStyle = COLORS.particle + alpha + ')';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [drawGrid]);

  /* ── Setup ── */
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
      if (ctx) ctx.scale(dpr, dpr);

      sizeRef.current = { w, h };

      if (nodesRef.current.length === 0) {
        initNodes(w, h);
        initParticles();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
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
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [reducedMotion, animate, initNodes, initParticles]);

  // Static fallback for reduced motion
  if (reducedMotion) {
    return (
      <div className="hero-visual" aria-hidden="true">
        <div style={{
          width: '100%',
          height: '100%',
          background: `radial-gradient(ellipse at 30% 50%, hsla(222, 84%, 58%, 0.06) 0%, transparent 60%),
                       radial-gradient(ellipse at 70% 30%, hsla(260, 60%, 60%, 0.04) 0%, transparent 50%)`,
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
