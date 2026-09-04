import { SEO } from "../../components/SEO";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

import CTASection from "../../components/sections/CTASection";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ProductPage.css";

const product = products.find((p) => p.id === "workspace")!;

export default function WorkspacePage() {
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

      <div className="product-showcase-large">
        <img
          src="/assets/Craftly_Workspace/craftly-workspace-dashboard.svg"
          alt="Craftly Workspace Interface"
          className="product-showcase-image"
        />
      </div>

      <section className="explore-features-section">
        <div className="product-showcase-large" style={{ marginBottom: 0 }}>
          <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
            <h2 className="explore-features-section__title reveal">
              Explore the main features
            </h2>
            <img
              src="/assets/Craftly_Workspace/8.webp"
              alt="Explore main features"
              className="product-showcase-image reveal reveal-delay-1"
              style={{ margin: 0 }}
            />
          </div>
        </div>
      </section>

      <section className="abstracted-ui-section">
        <div className="product-showcase-large" style={{ marginBottom: 0 }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 className="abstracted-ui-title reveal">An Abstracted UI</h2>
            <p className="abstracted-ui-desc reveal reveal-delay-1">
              Your AI agents' central command center, providing a unified
              platform to launch, monitor, and orchestrate their activities.
            </p>
            <div className="abstracted-ui-grid">
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <img
                  src="/assets/Craftly_Workspace/2.webp"
                  alt="UI detail 1"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Work Management
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Track presence, task submissions, and manage attendance
                  seamlessly from a unified interface.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <img
                  src="/assets/Craftly_Workspace/3.webp"
                  alt="UI detail 2"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Smart Notifications
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Stay updated with workspace decisions, private alerts, and
                  important notifications pushed in real-time.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-3">
                <img
                  src="/assets/Craftly_Workspace/4.webp"
                  alt="UI detail 3"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Team Collaboration
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Communicate efficiently with your team members through
                  integrated chat, ensuring seamless information flow.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-3">
                <img
                  src="/assets/Craftly_Workspace/5.webp"
                  alt="UI detail 4"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Direct Messaging
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Send direct messages, share updates, and coordinate with
                  specific team units instantly.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-4">
                <img
                  src="/assets/Craftly_Workspace/6.webp"
                  alt="UI detail 5"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Custom Workflows
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Design and implement custom workflows tailored to your
                  specific organizational needs.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-4">
                <img
                  src="/assets/Craftly_Workspace/7.webp"
                  alt="UI detail 6"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Resource Allocation
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Allocate and manage resources effectively across different
                  teams and projects.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-1">
                <img
                  src="/assets/Craftly_Workspace/9.webp"
                  alt="Dynamic Subagents"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Dynamic Subagents
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Subagents are defined and instantiated dynamically to tackle
                  parallel parts of complex problems, leading to faster and
                  better results.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-1">
                <img
                  src="/assets/Craftly_Workspace/10.webp"
                  alt="Scheduled Tasks"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Scheduled Tasks
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Automate routine checks with Scheduled Tasks, simply define a
                  cron schedule and the agents start and run autonomously in the
                  background.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <img
                  src="/assets/Craftly_Workspace/11.webp"
                  alt="UI detail 9"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  Performance Analytics
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Monitor the performance and efficiency of your AI agents with
                  comprehensive visual analytics.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <img
                  src="/assets/Craftly_Workspace/12.webp"
                  alt="UI detail 10"
                  className="product-showcase-image"
                  style={{ margin: 0 }}
                />
                <h3 className="abstracted-ui-feature__title">
                  System Integration
                </h3>
                <p className="abstracted-ui-feature__desc">
                  Connect your workspace with external tools and APIs for a
                  fully integrated autonomous ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workspace-options-section">
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
                  <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="M3 8v12a2 2 0 0 0 2 2h12" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Projects</h3>
              <p className="workspace-option__desc">
                Group your conversations into Projects, which can span multiple
                folders and support custom settings and scoped permissions.
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
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Communication</h3>
              <p className="workspace-option__desc">
                Stay connected through structured communication. Communicate
                through your reporting structure, and keep organizational
                conversations clear.
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
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3 className="workspace-option__title">Tasks & Operations</h3>
              <p className="workspace-option__desc">
                Turn organizational commands into execution. Receive official
                tasks through the Notice Board or Command Chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
