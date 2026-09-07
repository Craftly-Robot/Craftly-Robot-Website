"use client";

import Link from "next/link";
import Breadcrumbs from "../../components/ui/Breadcrumbs";

import CTASection from "../../components/sections/CTASection";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ProductPage.css";

export default function RobotPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Breadcrumbs items={[{ label: "Products" }, { label: "Robot" }]} />
      <div className="container">
        <section className="product-hero-clean">
          <div className="vision-stage__badge vision-stage__badge--dev">
            Coming Soon
          </div>
          <h1 className="product-hero-clean__title">Craftly Robot</h1>
          <p className="product-hero-clean__desc">
            An agentic AI system for autonomous software engineering.
            Currently in active development.
          </p>
          <p className="product-hero-clean__desc text-muted-sm">
            Sign up to be notified when it launches.
          </p>
        </section>
      </div>

      {/* What It Does — 3 capabilities */}
      <section className="explore-features-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <h2 className="explore-features-section__title reveal">
              Autonomous software engineering
            </h2>
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="workspace-option__title">Understands Goals</h3>
                <p className="workspace-option__desc">
                  Reads your codebase, understands architecture, and plans
                  changes. Knows what needs to happen before it starts.
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
                <h3 className="workspace-option__title">Coordinates Agents</h3>
                <p className="workspace-option__desc">
                  Multiple specialized agents work together on complex tasks.
                  Each agent handles what it&apos;s best at.
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="workspace-option__title">Stays Under Control</h3>
                <p className="workspace-option__desc">
                  Human approval for consequential actions. You decide what
                  matters. The agents do the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="abstracted-ui-title reveal">The Craftly Plan</h2>
            <p className="abstracted-ui-desc reveal reveal-delay-1">
              Workspace → Robot → Glass. Workspace is the foundation. Robot is
              the intelligence. Glass is the future.
            </p>
            <div className="center-action">
              <Link href="/vision" className="btn-product-download">
                Read the full vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
