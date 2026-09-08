"use client";

import Link from "next/link";
import ProductVisual from "../../components/product/ProductVisual";
import CTASection from "../../components/sections/CTASection";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ProductPage.css";

export default function WorkspacePage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Breadcrumbs items={[{ label: "Products" }, { label: "Workspace" }]} />
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">Craftly Workspace</h1>
          <p className="product-hero-clean__desc">
            Your intelligent workspace for operating modern organizations. Connects people, work,
            communication, and resources in one structured environment.
          </p>
          <div className="product-hero-clean__actions">
            <Link href="/download" className="btn-product-download">
              Download
            </Link>
          </div>
        </section>
      </div>

      <div className="product-showcase-large">
        <ProductVisual variant="overview" />
      </div>

      {/* Key Features — 4, not 10 */}
      <section className="explore-features-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <h2 className="explore-features-section__title reveal">
              Everything your organization needs
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
                    <path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="M3 8v12a2 2 0 0 0 2 2h12" />
                  </svg>
                </div>
                <h3 className="workspace-option__title">Organizational Structure</h3>
                <p className="workspace-option__desc">
                  Define departments, roles, and reporting chains. Build your organization chart and
                  keep it clear.
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
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <h3 className="workspace-option__title">Task Management</h3>
                <p className="workspace-option__desc">
                  Assign, track, and complete work with clear ownership and accountability. Every
                  task has an owner.
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
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <h3 className="workspace-option__title">Team Communication</h3>
                <p className="workspace-option__desc">
                  Structured messaging through the reporting hierarchy. Keep organizational
                  conversations clear and focused.
                </p>
              </div>

              <div className="workspace-option reveal reveal-delay-3">
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
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="workspace-option__title">Resource Management</h3>
                <p className="workspace-option__desc">
                  Allocate and track resources across teams and projects. Know where everything is
                  and who has it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Step by Step */}
      <section className="how-it-works">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <h2 className="how-it-works__title reveal">How it works</h2>
            <p className="how-it-works__desc reveal">
              Three steps to transform how your organization operates.
            </p>
            <div className="how-it-works__steps">
              <div className="how-it-works__step reveal">
                <div className="how-it-works__step-number">1</div>
                <div className="how-it-works__step-content">
                  <h3>Define your structure</h3>
                  <p>
                    Set up departments, roles, and reporting chains. Mirror your real organization
                    in minutes.
                  </p>
                </div>
              </div>
              <div className="how-it-works__step reveal reveal-delay-1">
                <div className="how-it-works__step-number">2</div>
                <div className="how-it-works__step-content">
                  <h3>Assign and track work</h3>
                  <p>
                    Create tasks, assign owners, and track progress. Every piece of work has clear
                    accountability.
                  </p>
                </div>
              </div>
              <div className="how-it-works__step reveal reveal-delay-2">
                <div className="how-it-works__step-number">3</div>
                <div className="how-it-works__step-content">
                  <h3>Communicate through hierarchy</h3>
                  <p>
                    Messages and updates flow through your reporting structure. No more scattered
                    conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="comparison-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <h2 className="comparison__title reveal">Before Craftly vs After Craftly</h2>
            <div className="comparison__grid">
              <div className="comparison__column comparison__column--before reveal">
                <span className="comparison__badge comparison__badge--before">Before</span>
                <ul className="comparison__list">
                  <li>Scattered tools for tasks, communication, and docs</li>
                  <li>No clear ownership or accountability</li>
                  <li>Meetings to coordinate what a dashboard could show</li>
                  <li>Information lost in chat threads</li>
                </ul>
              </div>
              <div className="comparison__column comparison__column--after reveal reveal-delay-1">
                <span className="comparison__badge comparison__badge--after">After</span>
                <ul className="comparison__list">
                  <li>One workspace for people, tasks, and communication</li>
                  <li>Clear roles, reporting chains, and task ownership</li>
                  <li>Real-time visibility without extra meetings</li>
                  <li>Structured information flows through hierarchy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Teams Use It */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <h2 className="abstracted-ui-title reveal">Built for real work</h2>
            <div className="abstracted-ui-grid">
              <div className="abstracted-ui-feature reveal reveal-delay-1">
                <h3 className="abstracted-ui-feature__title">Operations Teams</h3>
                <p className="abstracted-ui-feature__desc">
                  Run daily operations through structured workflows. From task delegation to
                  resource planning, keep everything moving.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <h3 className="abstracted-ui-feature__title">Project Teams</h3>
                <p className="abstracted-ui-feature__desc">
                  Coordinate people, tasks, and deliverables. Track progress and keep projects on
                  schedule.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-3">
                <h3 className="abstracted-ui-feature__title">Leadership</h3>
                <p className="abstracted-ui-feature__desc">
                  Track performance and make decisions with data. See what&apos;s happening across
                  your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
