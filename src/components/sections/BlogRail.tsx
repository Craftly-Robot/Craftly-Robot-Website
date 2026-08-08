import { Link } from 'react-router-dom';
import { resources } from '../../data/resources';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './BlogRail.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function BlogRail() {
  const revealRef = useScrollReveal();

  return (
    <section className="section section--xl blog-rail-section" ref={revealRef}>
      <div className="container">
        <div className="blog-rail__header reveal">
          <h2 className="text-display blog-rail__title">Latest from Craftly</h2>
          <Link to="/resources/blog" className="blog-rail__view-all">
            View all
            <ArrowRight className="blog-rail__view-arrow" />
          </Link>
        </div>
        
        <div className="blog-rail__track-wrapper reveal reveal-delay-2">
          <div className="blog-rail__track">
            {resources.map((resource, i) => (
              <Link key={resource.id} to={resource.route} className="blog-card">
                <div className="blog-card__thumbnail">
                  {/* Conceptual Thumbnail pattern */}
                  <div className={`blog-card__pattern blog-card__pattern--${i % 3}`} />
                </div>
                <div className="blog-card__content">
                  <div className="blog-card__meta">
                    <span className="blog-card__category">{resource.title}</span>
                    <span className="blog-card__date">Latest Update</span>
                  </div>
                  <h3 className="blog-card__title">{resource.description}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
