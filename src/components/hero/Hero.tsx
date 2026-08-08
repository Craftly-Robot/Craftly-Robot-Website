import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import HeroVisual from './HeroVisual';
import './Hero.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="hero" id="hero" aria-labelledby="hero-headline">
      {/* Canvas background */}
      <div className="hero__canvas-wrap" aria-hidden="true">
        <HeroVisual />
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {hero.badge}
          </div>

          <h1 className="hero__headline" id="hero-headline">
            Building the <span className="hero__headline-accent">Intelligent</span>
            {'\n'}Systems of Tomorrow.
          </h1>

          <p className="hero__description">
            {hero.description}
          </p>

          <div className="hero__actions">
            <Link to="/products/workspace" className="hero__btn hero__btn--primary">
              {hero.ctaPrimary}
              <ArrowRight className="hero__btn-arrow" />
            </Link>
            <Link to="/download" className="hero__btn hero__btn--secondary">
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
