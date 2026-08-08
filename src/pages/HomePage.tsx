import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Hero from '../components/hero/Hero';
import { siteContent } from '../data/siteContent';
import { products } from '../data/products';
import { useCases } from '../data/useCases';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProductShowcase from '../components/sections/ProductShowcase';
import ArchitectureVisualization from '../components/sections/ArchitectureVisualization';
import CTASection from '../components/sections/CTASection';
import './HomePage.css';

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function HomePage() {
  const revealRef = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Craftly — Intelligent Systems for the Agentic Era</title>
        <meta name="description" content={siteContent.hero.description} />
      </Helmet>

      {/* 01 — Hero */}
      <Hero />

      <div ref={revealRef}>
        {/* 02 — Introduction */}
        <section className="section section--lg home-intro" id="intro">
          <div className="container">
            <div className="home-intro__grid">
              <div>
                <span className="text-label reveal">{siteContent.intro.label}</span>
                <h2 className="text-h2 reveal reveal-delay-1">
                  {siteContent.intro.headline}
                </h2>
              </div>
              <div>
                <p className="text-body-lg reveal reveal-delay-2">
                  {siteContent.intro.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Craftly Workspace */}
        <ProductShowcase product={products[0]} />

        {/* 04 — Craftly Robot */}
        <ProductShowcase product={products[1]} altLayout />

        {/* 05 — Use Cases */}
        <section className="section section--lg use-cases-section" id="use-cases">
          <div className="container">
            <span className="text-label reveal">Use Cases</span>
            <h2 className="text-h2 reveal reveal-delay-1" style={{ marginTop: 'var(--space-md)', maxWidth: '560px' }}>
              Intelligence across every dimension.
            </h2>
            <div className="use-cases__grid">
              {useCases.map((uc, i) => (
                <Link
                  key={uc.id}
                  to={uc.route}
                  className={`use-case-card reveal reveal-delay-${i + 1}`}
                >
                  <span className="use-case-card__number">{uc.number}</span>
                  <h3 className="use-case-card__title">{uc.title}</h3>
                  <p className="use-case-card__concept">{uc.concept}</p>
                  <div className="use-case-card__areas">
                    {uc.areas.map((area) => (
                      <span key={area} className="use-case-card__area">{area}</span>
                    ))}
                  </div>
                  <span className="use-case-card__link">
                    Explore
                    <ArrowRight className="product-showcase__cta-arrow" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 06 — Architecture */}
        <ArchitectureVisualization />

        {/* 07 — Final CTA */}
        <CTASection />
      </div>
    </>
  );
}
