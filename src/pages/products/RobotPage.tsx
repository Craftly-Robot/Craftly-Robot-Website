import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

import CTASection from '../../components/sections/CTASection';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProductPage.css';

const product = products.find((p) => p.id === 'robot')!;

export default function RobotPage() {
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

      <section className="abstracted-ui-section" style={{ paddingTop: 'var(--space-xl)' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          {/* Pair 1 */}
          <div className="abstracted-ui-grid">
            <div className="abstracted-ui-feature reveal">
              <img src="/assets/Craftly_Robot/1.1.jpeg" alt="Robot detail 1.1" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Autonomous Engineering</h3>
              <p className="abstracted-ui-feature__desc">Craftly Robot can autonomously plan and execute complex software engineering tasks.</p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <img src="/assets/Craftly_Robot/1.2.jpeg" alt="Robot detail 1.2" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Codebase Intelligence</h3>
              <p className="abstracted-ui-feature__desc">Deeply understands your codebase architecture, patterns, and dependencies.</p>
            </div>
          </div>

          {/* Pair 2 */}
          <div className="abstracted-ui-grid" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="abstracted-ui-feature reveal">
              <img src="/assets/Craftly_Robot/2.1.jpeg" alt="Robot detail 2.1" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Smart Refactoring</h3>
              <p className="abstracted-ui-feature__desc">Safely refactor legacy code with AI agents that verify their own work.</p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <img src="/assets/Craftly_Robot/2.2.jpeg" alt="Robot detail 2.2" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Test Generation</h3>
              <p className="abstracted-ui-feature__desc">Automatically generate comprehensive unit and integration tests for your modules.</p>
            </div>
          </div>

          {/* Pair 3 */}
          <div className="abstracted-ui-grid" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="abstracted-ui-feature reveal">
              <img src="/assets/Craftly_Robot/3.1.jpeg" alt="Robot detail 3.1" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Pull Request Reviews</h3>
              <p className="abstracted-ui-feature__desc">Robot agents review incoming pull requests for security flaws and performance issues.</p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <img src="/assets/Craftly_Robot/3.2.jpeg" alt="Robot detail 3.2" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Continuous Integration</h3>
              <p className="abstracted-ui-feature__desc">Seamlessly integrates with your CI/CD pipelines to validate code instantly.</p>
            </div>
          </div>

          {/* Pair 4 */}
          <div className="abstracted-ui-grid" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="abstracted-ui-feature reveal">
              <img src="/assets/Craftly_Robot/4.1.jpeg" alt="Robot detail 4.1" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Multi-Agent Coordination</h3>
              <p className="abstracted-ui-feature__desc">Multiple specialized AI agents work together to solve complex engineering problems.</p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <img src="/assets/Craftly_Robot/4.2.jpeg" alt="Robot detail 4.2" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Real-time Synchronization</h3>
              <p className="abstracted-ui-feature__desc">Agents sync their state in real-time to avoid merge conflicts and duplicated work.</p>
            </div>
          </div>

          {/* Pair 5 */}
          <div className="abstracted-ui-grid" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="abstracted-ui-feature reveal">
              <img src="/assets/Craftly_Robot/5.1.jpeg" alt="Robot detail 5.1" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Security Scanning</h3>
              <p className="abstracted-ui-feature__desc">Proactively scan your repositories for vulnerabilities before they hit production.</p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <img src="/assets/Craftly_Robot/5.2.jpeg" alt="Robot detail 5.2" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Dependency Management</h3>
              <p className="abstracted-ui-feature__desc">Automated updates and patches for all your project dependencies.</p>
            </div>
          </div>

          {/* Single 6 */}
          <div className="product-showcase-large" style={{ marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-3xl)' }}>
            <div style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="explore-features-section__title reveal">Architecture Visualization</h2>
              <p className="abstracted-ui-desc reveal reveal-delay-1" style={{ marginBottom: '32px' }}>
                Visualize your entire software architecture mapped out by intelligent agents.
              </p>
              <img 
                src="/assets/Craftly_Robot/6.jpeg"
                alt="Robot detail 6"
                className="product-showcase-image reveal reveal-delay-2"
                style={{ margin: '0 auto' }}
              />
            </div>
          </div>

          {/* Pair 7 */}
          <div className="abstracted-ui-grid" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="abstracted-ui-feature reveal">
              <img src="/assets/Craftly_Robot/7.1.jpeg" alt="Robot detail 7.1" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">System Monitoring</h3>
              <p className="abstracted-ui-feature__desc">Keep an eye on system health metrics and agent performance in real-time.</p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <img src="/assets/Craftly_Robot/7.2.jpeg" alt="Robot detail 7.2" className="product-showcase-image" style={{ margin: 0 }} />
              <h3 className="abstracted-ui-feature__title">Performance Optimization</h3>
              <p className="abstracted-ui-feature__desc">Automatically identify bottlenecks and apply performance optimizations.</p>
            </div>
          </div>

          {/* Single 8 */}
          <div className="product-showcase-large" style={{ marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-3xl)' }}>
            <div style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="explore-features-section__title reveal">Human in the Loop</h2>
              <p className="abstracted-ui-desc reveal reveal-delay-1" style={{ marginBottom: '32px' }}>
                Retain full control. Approve major changes and guide the agents on complex tasks.
              </p>
              <img 
                src="/assets/Craftly_Robot/8.jpeg"
                alt="Robot detail 8"
                className="product-showcase-image reveal reveal-delay-2"
                style={{ margin: '0 auto' }}
              />
            </div>
          </div>

          {/* Single 9 */}
          <div className="product-showcase-large" style={{ marginTop: 'var(--space-3xl)', marginBottom: 'var(--space-3xl)' }}>
            <div style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="explore-features-section__title reveal">Deploy Anywhere</h2>
              <p className="abstracted-ui-desc reveal reveal-delay-1" style={{ marginBottom: '32px' }}>
                Agents can handle deployment steps across any cloud provider or bare metal server.
              </p>
              <img 
                src="/assets/Craftly_Robot/9.jpeg"
                alt="Robot detail 9"
                className="product-showcase-image reveal reveal-delay-2"
                style={{ margin: '0 auto' }}
              />
            </div>
          </div>

          {/* Single 10 */}
          <div className="product-showcase-large" style={{ marginTop: 'var(--space-3xl)' }}>
            <div style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="explore-features-section__title reveal">Secure Sandboxing</h2>
              <p className="abstracted-ui-desc reveal reveal-delay-1" style={{ marginBottom: '32px' }}>
                All agent actions are safely contained in secure sandboxed environments.
              </p>
              <img 
                src="/assets/Craftly_Robot/10.jpeg"
                alt="Robot detail 10"
                className="product-showcase-image reveal reveal-delay-2"
                style={{ margin: '0 auto' }}
              />
            </div>
          </div>

        </div>
      </section>

      <section className="workspace-options-section" style={{ marginTop: 'var(--space-4xl)' }}>
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
