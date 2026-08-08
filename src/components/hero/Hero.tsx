import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoShowcase from '../ui/VideoShowcase';
import './Hero.css';

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
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
  const [osName, setOsName] = useState('Windows');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Mac") !== -1) {
      setOsName("macOS");
    } else if (userAgent.indexOf("Linux") !== -1) {
      setOsName("Linux");
    }
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          
          <h1 className="text-hero-display hero__title">
            Experience liftoff with the next-gen agent platform
          </h1>

          <div className="hero__cta-group">
            <Link to="/download" className="hero__btn-primary">
              <MonitorIcon />
              Download for {osName}
            </Link>
            <Link to="/use-cases" className="hero__btn-secondary">
              Explore use cases
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
