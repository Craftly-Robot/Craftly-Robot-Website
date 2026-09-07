"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CTASection from "../components/sections/CTASection";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import "./products/ProductPage.css";

export default function VisionPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Breadcrumbs items={[{ label: "Vision" }]} />
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">The Craftly Plan</h1>
          <p className="product-hero-clean__desc">
            Workspace → Robot → Glass. Building the operating system for intelligent organizations.
          </p>
        </section>
      </div>

      {/* Where We Are Today */}
      <section className="explore-features-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <div className="vision-stage reveal">
              <div className="vision-stage__badge">Current</div>
              <h2 className="vision-stage__title">Craftly Workspace</h2>
              <p className="vision-stage__desc">
                Your intelligent workspace for operating modern organizations. Connects people,
                work, communication, and resources in one structured environment.
              </p>
              <p className="vision-stage__version">Version 3.8.5 — Available on 5 platforms</p>
              <Link href="/products/workspace" className="btn-product-download">
                Explore Workspace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Now */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <div className="vision-stage reveal">
              <div className="vision-stage__badge vision-stage__badge--dev">In Development</div>
              <h2 className="vision-stage__title">Craftly Robot</h2>
              <p className="vision-stage__desc">
                An agentic AI system for autonomous software engineering. Understands your goals,
                discovers relevant agents, and helps coordinate real world tasks through
                agent-to-agent communication and human controlled action.
              </p>
              <Link href="/products/robot" className="btn-product-download">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where We're Going */}
      <section className="workspace-options-section">
        <div className="container">
          <div className="vision-stage reveal">
            <div className="vision-stage__badge vision-stage__badge--future">Future Vision</div>
            <h2 className="vision-stage__title">Craftly Glass</h2>
            <p className="vision-stage__desc">
              Our long-term vision for an augmented-reality wearable. Bringing intelligent systems
              closer to the physical world. The final step in connecting people, work, and AI
              agents.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="explore-features-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="explore-features-section__title reveal">
              Bangladesh&apos;s first AI company
            </h2>
            <p className="vision-stage__desc text-lg reveal reveal-delay-1">
              We&apos;re building the future of work in Bangladesh and beyond. Technology should
              help people coordinate, create, and accomplish meaningful work at scale without losing
              sight of the people doing that work.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <h2 className="abstracted-ui-title reveal">Who Craftly is for</h2>
            <div className="abstracted-ui-grid">
              <div className="abstracted-ui-feature reveal reveal-delay-1">
                <h3 className="abstracted-ui-feature__title">For Organizations</h3>
                <p className="abstracted-ui-feature__desc">
                  Run your organization as one connected system. Manage tasks, communication, and
                  resources through structured workflows.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <h3 className="abstracted-ui-feature__title">For Developers</h3>
                <p className="abstracted-ui-feature__desc">
                  Build with intelligent agents. Agent-to-agent negotiation, autonomous coding, and
                  real-world task coordination.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-3">
                <h3 className="abstracted-ui-feature__title">For Bangladesh</h3>
                <p className="abstracted-ui-feature__desc">
                  Bangladesh&apos;s first AI company. Building the future of work in Bangladesh and
                  beyond.
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
