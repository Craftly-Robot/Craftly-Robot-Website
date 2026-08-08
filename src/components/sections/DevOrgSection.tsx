import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import VideoPlaceholder from '../common/VideoPlaceholder';
import './DevOrgSection.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function DevOrgSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="section section--xl dev-org-section" ref={revealRef}>
      <div className="container container--wide">
        <div className="dev-org__grid">
          
          {/* Developers Panel */}
          <Link to="/products/workspace" className="dev-org__panel reveal">
            <div className="dev-org__media">
              <VideoPlaceholder label="Developer SDK Environment" />
            </div>
            <div className="dev-org__content">
              <span className="text-label dev-org__label">For Developers</span>
              <h3 className="text-display dev-org__title">Build the agentic future.</h3>
              <p className="dev-org__desc">
                Access primitive APIs, orchestrate complex multi-agent workflows, and integrate securely into existing codebases with our SDK.
              </p>
              <div className="dev-org__cta">
                Read documentation
                <ArrowRight className="dev-org__cta-arrow" />
              </div>
            </div>
          </Link>

          {/* Organizations Panel */}
          <Link to="/products/robot" className="dev-org__panel reveal reveal-delay-2">
            <div className="dev-org__media">
              <VideoPlaceholder label="Enterprise Dashboard" />
            </div>
            <div className="dev-org__content">
              <span className="text-label dev-org__label">For Organizations</span>
              <h3 className="text-display dev-org__title">Level up your entire team.</h3>
              <p className="dev-org__desc">
                Deploy autonomous agents safely behind your firewall. Govern execution, verify outcomes, and scale productivity instantly.
              </p>
              <div className="dev-org__cta">
                Contact sales
                <ArrowRight className="dev-org__cta-arrow" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
