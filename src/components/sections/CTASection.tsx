import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTASection.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function CTASection() {
  const revealRef = useScrollReveal();

  return (
    <section className="section section--xl home-cta" ref={revealRef}>
      <div className="container container--wide">
        <div className="home-cta__container reveal">
          {/* Subtle monochrome network/particle background using pure CSS gradients */}
          <div className="home-cta__bg" aria-hidden="true">
            <div className="home-cta__bg-grid" />
            <div className="home-cta__bg-glow" />
          </div>
          
          <div className="home-cta__content">
            <h2 className="text-hero-display home-cta__headline reveal reveal-delay-1">
              Build with Craftly.
            </h2>
            <div className="home-cta__actions reveal reveal-delay-2">
              <Link to="/products/workspace" className="home-cta__btn-primary">
                Explore Craftly
                <ArrowRight className="home-cta__btn-arrow" />
              </Link>
              <Link to="/download" className="home-cta__btn-secondary">
                Download Craftly
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
