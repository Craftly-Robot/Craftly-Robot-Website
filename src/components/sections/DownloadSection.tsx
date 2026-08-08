import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import VideoPlaceholder from '../common/VideoPlaceholder';
import './DownloadSection.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function DownloadSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="section section--xl download-section" ref={revealRef}>
      <div className="container container--wide">
        <div className="download-section__content reveal">
          <div className="download-section__visual">
            <VideoPlaceholder label="Craftly Environment" />
          </div>
          
          <div className="download-section__text">
            <h2 className="text-display download-section__title">
              Download Craftly
            </h2>
            <p className="download-section__desc">
              Experience the power of local autonomous agents. Available for Windows, macOS, and Linux.
            </p>
            
            <div className="download-section__actions">
              <Link to="/download" className="download-section__btn-primary">
                Download Craftly
                <ArrowRight className="download-section__btn-arrow" />
              </Link>
              <Link to="/download" className="download-section__btn-secondary">
                View all downloads
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
