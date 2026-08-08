import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import './CTASection.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section className="section section--lg home-cta" id="cta">
      <div className="home-cta__bg" aria-hidden="true" />
      <div className="container">
        <div className="home-cta__content">
          <h2 className="text-h2 home-cta__headline reveal">
            {siteContent.cta.headline}
          </h2>
          <p className="text-body-lg home-cta__description reveal reveal-delay-1">
            {siteContent.cta.description}
          </p>
          <Link to="/download" className="home-cta__btn reveal reveal-delay-2">
            {siteContent.cta.buttonText}
            <ArrowRight className="product-showcase__cta-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
