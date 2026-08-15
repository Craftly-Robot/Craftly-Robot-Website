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

      <section className="abstracted-ui-section">
        <div className="product-showcase-large" style={{ marginBottom: 0 }}>
          <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
            <h2 className="abstracted-ui-title reveal">An Abstracted UI</h2>
            <p className="abstracted-ui-desc reveal reveal-delay-1">
              Your AI agents' central command center, providing a unified platform to launch, monitor, and orchestrate their activities.
            </p>
            <div className="abstracted-ui-grid">
              <img src="/assets/Craftly_Workspace/2.png" alt="UI detail 1" className="product-showcase-image reveal reveal-delay-2" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/3.png" alt="UI detail 2" className="product-showcase-image reveal reveal-delay-2" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/4.png" alt="UI detail 3" className="product-showcase-image reveal reveal-delay-3" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/5.png" alt="UI detail 4" className="product-showcase-image reveal reveal-delay-3" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/6.png" alt="UI detail 5" className="product-showcase-image reveal reveal-delay-4" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/7.png" alt="UI detail 6" className="product-showcase-image reveal reveal-delay-4" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/9.png" alt="UI detail 7" className="product-showcase-image reveal reveal-delay-1" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/10.png" alt="UI detail 8" className="product-showcase-image reveal reveal-delay-1" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/11.jpeg" alt="UI detail 9" className="product-showcase-image reveal reveal-delay-2" style={{ margin: 0 }} />
              <img src="/assets/Craftly_Workspace/12.png" alt="UI detail 10" className="product-showcase-image reveal reveal-delay-2" style={{ margin: 0 }} />
            </div>
          </div>
        </div>
      </section>

      <section className="workspace-options-section">
        <div className="container">
          <div className="workspace-options-grid">
            <div className="workspace-option reveal">
              <div className="workspace-option__icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="M3 8v12a2 2 0 0 0 2 2h12" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Projects</h3>
              <p className="workspace-option__desc">Group your conversations into Projects, which can span multiple folders and support custom settings and scoped permissions.</p>
            </div>
            
            <div className="workspace-option reveal reveal-delay-1">
              <div className="workspace-option__icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Communication</h3>
              <p className="workspace-option__desc">Stay connected through structured communication. Communicate through your reporting structure, and keep organizational conversations clear.</p>
            </div>
            
            <div className="workspace-option reveal reveal-delay-2">
              <div className="workspace-option__icon">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Tasks & Operations</h3>
              <p className="workspace-option__desc">Turn organizational commands into execution. Receive official tasks through the Notice Board or Command Chain.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
