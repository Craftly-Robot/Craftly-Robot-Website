import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

import CTASection from '../../components/sections/CTASection';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProductPage.css';

const product = products.find((p) => p.id === 'workspace')!;

export default function WorkspacePage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Helmet>
        <title>{product.name} — Craftly</title>
        <meta name="description" content={product.tagline} />
      </Helmet>
      
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">{product.name}</h1>
          <p className="product-hero-clean__desc">{product.description}</p>
          <div className="product-hero-clean__actions">
            <Link to="/download" className="btn-product-download">
              Download
            </Link>
          </div>
        </section>
      </div>

      <div className="product-showcase-large">
        <img 
          src="/assets/Craftly_Workspace/1.png"
          alt="Craftly Workspace Interface"
          className="product-showcase-image"
        />
      </div>

      <section className="explore-features-section">
        <div className="product-showcase-large" style={{ marginBottom: 0 }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <h2 className="explore-features-section__title reveal">Explore the main features</h2>
            <img 
              src="/assets/Craftly_Workspace/8.png"
              alt="Explore main features"
              className="product-showcase-image reveal reveal-delay-1"
              style={{ margin: 0 }}
            />
          </div>
        </div>
      </section>

      <section className="product-features">
        <div className="container">
          <div className="product-features__header reveal">
            <h2 className="text-h2">Capabilities</h2>
            <p className="text-body-lg" style={{ marginTop: 'var(--space-sm)', color: 'var(--color-text-secondary)' }}>
              Everything you need to orchestrate modern operations.
            </p>
          </div>
          <div className="product-features__grid">
            {product.capabilities.map((cap, i) => (
              <div key={cap} className={`feature-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="feature-card__icon">⬡</div>
                <h3 className="feature-card__title">{cap}</h3>
                <p className="feature-card__desc">
                  Advanced intelligent systems for {cap.toLowerCase()}, designed for scale and performance across your entire organization.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
