"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "../components/hero/Hero";
import TrustBadges from "../components/ui/TrustBadges";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./HomePage.css";

export default function HomePage() {
  const revealRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState<"workspace" | "robot">("workspace");

  return (
    <>
      <Hero />

      <div ref={revealRef}>
        {/* Proof Strip */}
        <section className="proof-strip">
          <div className="container">
            <div className="proof-strip__grid">
              <div className="proof-strip__item reveal">
                <span className="proof-strip__number">3.8.5</span>
                <span className="proof-strip__label">Workspace Version</span>
              </div>
              <div className="proof-strip__item reveal reveal-delay-1">
                <span className="proof-strip__number">5</span>
                <span className="proof-strip__label">Platforms</span>
              </div>
              <div className="proof-strip__item reveal reveal-delay-2">
                <span className="proof-strip__number">68+</span>
                <span className="proof-strip__label">Docs Pages</span>
              </div>
              <div className="proof-strip__item reveal reveal-delay-3">
                <span className="proof-strip__number">2</span>
                <span className="proof-strip__label">Products</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="trust-badges-section">
          <div className="container">
            <TrustBadges />
          </div>
        </section>

        {/* Product Showcase — Tabbed */}
        <section className="product-showcase">
          <div className="container">
            <div className="product-showcase__header reveal">
              <h2 className="product-showcase__title">Two products. One vision.</h2>
              <p className="product-showcase__desc">
                Workspace is the operating system for organizations. Robot is the autonomous
                engineering intelligence. Together, they define the future of work.
              </p>
            </div>

            <div className="product-showcase__tabs reveal">
              <button
                className={`product-showcase__tab ${activeTab === "workspace" ? "product-showcase__tab--active" : ""}`}
                onClick={() => setActiveTab("workspace")}
              >
                <span className="product-showcase__tab-icon">⬡</span>
                Workspace
              </button>
              <button
                className={`product-showcase__tab ${activeTab === "robot" ? "product-showcase__tab--active" : ""}`}
                onClick={() => setActiveTab("robot")}
              >
                <span className="product-showcase__tab-icon">◎</span>
                Robot
              </button>
            </div>

            <div className="product-showcase__panels">
              {activeTab === "workspace" && (
                <div className="product-showcase__panel reveal">
                  <div className="product-showcase__panel-content">
                    <span className="product-showcase__badge product-showcase__badge--live">
                      Available Now
                    </span>
                    <h3 className="product-showcase__panel-title">Craftly Workspace</h3>
                    <p className="product-showcase__panel-desc">
                      Your intelligent workspace for operating modern organizations. Connects
                      people, work, communication, and resources in one structured environment.
                    </p>
                    <div className="product-showcase__features">
                      <div className="product-showcase__feature">
                        <h4>Organizational Structure</h4>
                        <p>Define departments, roles, and reporting chains</p>
                      </div>
                      <div className="product-showcase__feature">
                        <h4>Task Management</h4>
                        <p>Assign, track, and complete work with clear ownership</p>
                      </div>
                      <div className="product-showcase__feature">
                        <h4>Team Communication</h4>
                        <p>Structured messaging through the reporting hierarchy</p>
                      </div>
                    </div>
                    <Link href="/products/workspace" className="product-showcase__link">
                      Explore Workspace →
                    </Link>
                  </div>
                </div>
              )}

              {activeTab === "robot" && (
                <div className="product-showcase__panel reveal">
                  <div className="product-showcase__panel-content">
                    <span className="product-showcase__badge product-showcase__badge--dev">
                      In Development
                    </span>
                    <h3 className="product-showcase__panel-title">Craftly Robot</h3>
                    <p className="product-showcase__panel-desc">
                      An agentic AI system for autonomous software engineering. Currently in active
                      development.
                    </p>
                    <div className="product-showcase__features">
                      <div className="product-showcase__feature">
                        <h4>Autonomous Engineering</h4>
                        <p>AI agents that understand context and execute tasks</p>
                      </div>
                      <div className="product-showcase__feature">
                        <h4>Code Intelligence</h4>
                        <p>Deep understanding of codebases and architecture</p>
                      </div>
                      <div className="product-showcase__feature">
                        <h4>Agent Workflows</h4>
                        <p>Multi-step reasoning and collaborative AI systems</p>
                      </div>
                    </div>
                    <Link href="/products/robot" className="product-showcase__link">
                      Learn about Robot →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* The Vision — Roadmap Timeline */}
        <section className="vision-preview">
          <div className="container">
            <div className="vision-preview__content reveal">
              <h2 className="vision-preview__title">Building the intelligence</h2>
              <p className="vision-preview__desc">
                Craftly is a three-stage vision. Workspace is the foundation. Robot is the
                intelligence. Glass is the future.
              </p>

              <div className="roadmap-timeline">
                <div className="roadmap-timeline__track">
                  <div className="roadmap-timeline__progress roadmap-timeline__progress--33" />
                </div>

                <div className="roadmap-timeline__stages">
                  <div className="roadmap-timeline__stage roadmap-timeline__stage--complete">
                    <div className="roadmap-timeline__marker" />
                    <div className="roadmap-timeline__card">
                      <span className="roadmap-timeline__badge roadmap-timeline__badge--live">
                        Live
                      </span>
                      <h3 className="roadmap-timeline__name">Workspace</h3>
                      <p className="roadmap-timeline__desc">Operating system for organizations</p>
                    </div>
                  </div>

                  <div className="roadmap-timeline__stage roadmap-timeline__stage--progress">
                    <div className="roadmap-timeline__marker" />
                    <div className="roadmap-timeline__card">
                      <span className="roadmap-timeline__badge roadmap-timeline__badge--dev">
                        In Progress
                      </span>
                      <h3 className="roadmap-timeline__name">Robot</h3>
                      <p className="roadmap-timeline__desc">Autonomous AI engineering</p>
                    </div>
                  </div>

                  <div className="roadmap-timeline__stage roadmap-timeline__stage--future">
                    <div className="roadmap-timeline__marker" />
                    <div className="roadmap-timeline__card">
                      <span className="roadmap-timeline__badge roadmap-timeline__badge--future">
                        Planned
                      </span>
                      <h3 className="roadmap-timeline__name">Glass</h3>
                      <p className="roadmap-timeline__desc">The next interface</p>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/vision" className="vision-preview__link">
                The Craftly Plan →
              </Link>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="use-case-grid">
          <div className="container">
            <h2 className="use-case-grid__title reveal">Built for real work</h2>
            <div className="use-case-grid__grid">
              <div className="use-case-grid__card reveal reveal-delay-1">
                <div className="use-case-grid__card-icon">⬡</div>
                <h3>For Organizations</h3>
                <p>
                  Manage operations, coordinate teams, and track tasks across departments. Built for
                  teams of 5 to 5,000.
                </p>
              </div>
              <div className="use-case-grid__card reveal reveal-delay-2">
                <div className="use-case-grid__card-icon">◎</div>
                <h3>For Developers</h3>
                <p>
                  Build with AI agents, code intelligence, and autonomous workflows. Ship faster
                  with less overhead.
                </p>
              </div>
              <div className="use-case-grid__card reveal reveal-delay-3">
                <div className="use-case-grid__card-icon">🇧🇩</div>
                <h3>For Bangladesh</h3>
                <p>
                  Bangladesh&apos;s first AI company. Built locally, designed for global ambition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="home-cta">
          <div className="container">
            <div className="home-cta__content reveal">
              <h2 className="home-cta__title">Start building with Craftly today</h2>
              <p className="home-cta__desc">Free. Open. Available on every platform.</p>
              <div className="home-cta__actions">
                <Link href="/download" className="home-cta__btn home-cta__btn--primary">
                  Download Craftly
                </Link>
                <Link
                  href="/resources/documentation"
                  className="home-cta__btn home-cta__btn--secondary"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
