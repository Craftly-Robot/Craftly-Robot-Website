import { Link } from 'react-router-dom';
import { brandAssets } from '../../utils/brandAssets';
import VideoShowcase from '../ui/VideoShowcase';
import './Hero.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 3.33333L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Conceptual monochrome technology symbols
const TECH_ICONS = [
  { id: 'workspace', icon: '⬡' },
  { id: 'robot', icon: '◈' },
  { id: 'agents', icon: '⟐' },
  { id: 'code', icon: '⟨ ⟩' },
  { id: 'security', icon: '⊞' },
  { id: 'memory', icon: '◉' },
  { id: 'tools', icon: '⊟' },
  { id: 'execution', icon: '⚡' },
  { id: 'verification', icon: '✓' }
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          
          <div className="hero__brand">
            <img src={brandAssets.icon} alt="Craftly" className="hero__brand-icon" style={{ height: '16px', width: 'auto' }} />
            <span>Craftly</span>
          </div>

          <h1 className="text-hero-display hero__title">
            Experience intelligent systems built for the agentic era.
          </h1>

          <div className="hero__cta-group">
            <Link to="/products/workspace" className="hero__btn-primary">
              Explore Craftly
              <ArrowRight />
            </Link>
            <Link to="/products/robot" className="hero__btn-secondary">
              Learn more
            </Link>
          </div>

        </div>

        <div className="hero__media-wrapper">
          <VideoShowcase 
            src="/assets/videos/hero.mp4"
            poster="/assets/posters/hero-poster.webp"
            altText="Craftly intelligent system interfaces"
          />
        </div>

        <div className="hero__tech-row">
          <div className="hero__tech-track">
            {TECH_ICONS.map(tech => (
              <div key={tech.id} className="tech-icon" aria-label={tech.id} title={tech.id}>
                {tech.icon}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
