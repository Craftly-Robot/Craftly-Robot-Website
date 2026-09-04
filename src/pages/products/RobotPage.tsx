import ProductVisual from "../../components/product/ProductVisual";
import { SEO } from "../../components/SEO";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

import CTASection from "../../components/sections/CTASection";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ProductPage.css";
import "./RobotPageOverrides.css";

const product = products.find((p) => p.id === "robot")!;

export default function RobotPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <SEO title={`${product.name}`} description={product.tagline} />

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

      <section className="abstracted-ui-section robot-section-pt">
        <div className="container robot-container-narrow">
          {/* Pair 1 */}
          <div className="abstracted-ui-grid">
            <div className="abstracted-ui-feature reveal">
              <ProductVisual scene="robot-engineering" />
              <h3 className="abstracted-ui-feature__title">
                Autonomous Engineering
              </h3>
              <p className="abstracted-ui-feature__desc">
                Craftly Robot can autonomously plan and execute complex software
                engineering tasks.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <ProductVisual scene="robot-codebase" />
              <h3 className="abstracted-ui-feature__title">
                Codebase Intelligence
              </h3>
              <p className="abstracted-ui-feature__desc">
                Deeply understands your codebase architecture, patterns, and
                dependencies.
              </p>
            </div>
          </div>

          {/* Pair 2 */}
          <div
            className="abstracted-ui-grid"
            className="abstracted-ui-grid robot-mt-2xl"
          >
            <div className="abstracted-ui-feature reveal">
              <ProductVisual scene="robot-refactoring" />
              <h3 className="abstracted-ui-feature__title">
                Smart Refactoring
              </h3>
              <p className="abstracted-ui-feature__desc">
                Safely refactor legacy code with AI agents that verify their own
                work.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <ProductVisual scene="robot-tests" />
              <h3 className="abstracted-ui-feature__title">Test Generation</h3>
              <p className="abstracted-ui-feature__desc">
                Automatically generate comprehensive unit and integration tests
                for your modules.
              </p>
            </div>
          </div>

          {/* Pair 3 */}
          <div
            className="abstracted-ui-grid"
            className="abstracted-ui-grid robot-mt-2xl"
          >
            <div className="abstracted-ui-feature reveal">
              <ProductVisual scene="robot-reviews" />
              <h3 className="abstracted-ui-feature__title">
                Pull Request Reviews
              </h3>
              <p className="abstracted-ui-feature__desc">
                Robot agents review incoming pull requests for security flaws
                and performance issues.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <ProductVisual scene="robot-ci" />
              <h3 className="abstracted-ui-feature__title">
                Continuous Integration
              </h3>
              <p className="abstracted-ui-feature__desc">
                Seamlessly integrates with your CI/CD pipelines to validate code
                instantly.
              </p>
            </div>
          </div>

          {/* Pair 4 */}
          <div
            className="abstracted-ui-grid"
            className="abstracted-ui-grid robot-mt-2xl"
          >
            <div className="abstracted-ui-feature reveal">
              <ProductVisual scene="robot-multiagent" />
              <h3 className="abstracted-ui-feature__title">
                Multi-Agent Coordination
              </h3>
              <p className="abstracted-ui-feature__desc">
                Multiple specialized AI agents work together to solve complex
                engineering problems.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <ProductVisual scene="robot-sync" />
              <h3 className="abstracted-ui-feature__title">
                Real-time Synchronization
              </h3>
              <p className="abstracted-ui-feature__desc">
                Agents sync their state in real-time to avoid merge conflicts
                and duplicated work.
              </p>
            </div>
          </div>

          {/* Pair 5 */}
          <div
            className="abstracted-ui-grid"
            className="abstracted-ui-grid robot-mt-2xl"
          >
            <div className="abstracted-ui-feature reveal">
              <ProductVisual scene="robot-security" />
              <h3 className="abstracted-ui-feature__title">
                Security Scanning
              </h3>
              <p className="abstracted-ui-feature__desc">
                Proactively scan your repositories for vulnerabilities before
                they hit production.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <ProductVisual scene="robot-dependencies" />
              <h3 className="abstracted-ui-feature__title">
                Dependency Management
              </h3>
              <p className="abstracted-ui-feature__desc">
                Automated updates and patches for all your project dependencies.
              </p>
            </div>
          </div>

          {/* Single 6 */}
          <div
            className="product-showcase-large robot-mt-3xl-mb-3xl"
          >
            <div className="robot-center-text">
              <h2 className="explore-features-section__title reveal">
                Architecture Visualization
              </h2>
              <p
                className="abstracted-ui-desc reveal reveal-delay-1 robot-desc-mb-32"
              >
                Visualize your entire software architecture mapped out by
                intelligent agents.
              </p>
              <ProductVisual
                scene="robot-architecture"
                className="reveal reveal-delay-2"
              />
            </div>
          </div>

          {/* Pair 7 */}
          <div
            className="abstracted-ui-grid robot-mt-2xl"
          >
            <div className="abstracted-ui-feature reveal">
              <ProductVisual scene="robot-monitoring" />
              <h3 className="abstracted-ui-feature__title">
                System Monitoring
              </h3>
              <p className="abstracted-ui-feature__desc">
                Keep an eye on system health metrics and agent performance in
                real-time.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <ProductVisual scene="robot-performance" />
              <h3 className="abstracted-ui-feature__title">
                Performance Optimization
              </h3>
              <p className="abstracted-ui-feature__desc">
                Automatically identify bottlenecks and apply performance
                optimizations.
              </p>
            </div>
          </div>

          {/* Single 8 */}
          <div
            className="product-showcase-large robot-mt-3xl-mb-3xl"
          >
            <div className="robot-center-text">
              <h2 className="explore-features-section__title reveal">
                Human in the Loop
              </h2>
              <p
                className="abstracted-ui-desc reveal reveal-delay-1 robot-desc-mb-32"
              >
                Retain full control. Approve major changes and guide the agents
                on complex tasks.
              </p>
              <ProductVisual
                scene="robot-human-review"
                className="reveal reveal-delay-2"
              />
            </div>
          </div>

          {/* Single 9 */}
          <div
            className="product-showcase-large robot-mt-3xl-mb-3xl"
          >
            <div className="robot-center-text">
              <h2 className="explore-features-section__title reveal">
                Deploy Anywhere
              </h2>
              <p
                className="abstracted-ui-desc reveal reveal-delay-1 robot-desc-mb-32"
              >
                Agents can handle deployment steps across any cloud provider or
                bare metal server.
              </p>
              <ProductVisual
                scene="robot-deployment"
                className="reveal reveal-delay-2"
              />
            </div>
          </div>

          {/* Single 10 */}
          <div
            className="product-showcase-large robot-mt-3xl"
          >
            <div className="robot-center-text">
              <h2 className="explore-features-section__title reveal">
                Secure Sandboxing
              </h2>
              <p
                className="abstracted-ui-desc reveal reveal-delay-1 robot-desc-mb-32"
              >
                All agent actions are safely contained in secure sandboxed
                environments.
              </p>
              <ProductVisual
                scene="robot-sandbox"
                className="reveal reveal-delay-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="workspace-options-section robot-mt-4xl"
      >
        <div className="container">
          <div className="workspace-options-grid">
            <div className="workspace-option reveal">
              <div className="workspace-option__icon">
                <svg
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <line x1="9" y1="1" x2="9" y2="4" />
                  <line x1="15" y1="1" x2="15" y2="4" />
                  <line x1="9" y1="20" x2="9" y2="23" />
                  <line x1="15" y1="20" x2="15" y2="23" />
                  <line x1="20" y1="9" x2="23" y2="9" />
                  <line x1="20" y1="14" x2="23" y2="14" />
                  <line x1="1" y1="9" x2="4" y2="9" />
                  <line x1="1" y1="14" x2="4" y2="14" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Agentic AI</h3>
              <p className="workspace-option__desc">
                Craftly Robot understands goals, reasons through tasks, and
                works toward meaningful outcomes. It is being developed to move
                beyond conversation by combining intelligence with tools,
                context, and agentic workflows.
              </p>
            </div>

            <div className="workspace-option reveal reveal-delay-1">
              <div className="workspace-option__icon">
                <svg
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Discover & Connect</h3>
              <p className="workspace-option__desc">
                Robot can discover relevant people, services, and other agents
                within the Craftly network. It uses the requirements of a
                request to identify capabilities that may be relevant and
                connect with the right participants.
              </p>
            </div>

            <div className="workspace-option reveal reveal-delay-2">
              <div className="workspace-option__icon">
                <svg
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <path d="M6 21V9a9 9 0 0 0 9 9" />
                </svg>
              </div>
              <h3 className="workspace-option__title">
                Agent-to-Agent Negotiation
              </h3>
              <p className="workspace-option__desc">
                Robot agents can communicate with one another to exchange
                requirements, check alignment, and coordinate possible
                solutions. This allows complex real world tasks to move from a
                user's request toward practical action while keeping
                consequential decisions under human control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Download Craftly Robot" />
    </div>
  );
}
