"use client";

import Link from "next/link";
import CTASection from "../components/sections/CTASection";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./products/ProductPage.css";

export default function UseCasesPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Breadcrumbs items={[{ label: "Use Cases" }]} />
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">Who Craftly is for</h1>
          <p className="product-hero-clean__desc">
            From organizations running operations to developers building with AI. Craftly is built
            for people who need to coordinate work, communicate clearly, and move fast.
          </p>
        </section>
      </div>

      {/* For Organizations */}
      <section className="explore-features-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <div className="vision-stage reveal">
              <h2 className="vision-stage__title">For Organizations</h2>
              <p className="vision-stage__desc">
                Run your organization as one connected system. Craftly Workspace connects people,
                work, communication, and resources in one structured environment.
              </p>
            </div>
            <div className="abstracted-ui-grid">
              <div className="abstracted-ui-feature reveal reveal-delay-1">
                <h3 className="abstracted-ui-feature__title">Command to Execution</h3>
                <p className="abstracted-ui-feature__desc">
                  Turn organizational commands into execution. Receive official tasks through the
                  Notice Board or Command Chain.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <h3 className="abstracted-ui-feature__title">Task Lifecycle</h3>
                <p className="abstracted-ui-feature__desc">
                  Create, assign, track, and complete tasks with clear ownership and accountability.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-3">
                <h3 className="abstracted-ui-feature__title">Communication Hierarchy</h3>
                <p className="abstracted-ui-feature__desc">
                  Communicate through your reporting structure. Keep organizational conversations
                  clear and structured.
                </p>
              </div>
            </div>
            <div className="center-action">
              <Link href="/products/workspace" className="btn-product-download">
                Explore Workspace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Developers */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content--wide">
            <div className="vision-stage reveal">
              <div className="vision-stage__badge vision-stage__badge--dev">Coming Soon</div>
              <h2 className="vision-stage__title">For Developers</h2>
              <p className="vision-stage__desc">
                Build with intelligent agents. Craftly Robot is being built toward a world where AI
                agents can discover relevant people and services, communicate across boundaries, and
                coordinate real world tasks.
              </p>
            </div>
            <div className="abstracted-ui-grid">
              <div className="abstracted-ui-feature reveal reveal-delay-1">
                <h3 className="abstracted-ui-feature__title">Agent-to-Agent Negotiation</h3>
                <p className="abstracted-ui-feature__desc">
                  Enable intelligent agents to communicate, coordinate, and negotiate without human
                  intervention.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-2">
                <h3 className="abstracted-ui-feature__title">Human Confirmation</h3>
                <p className="abstracted-ui-feature__desc">
                  Keep humans in the loop for consequential actions. Agent proposals require human
                  approval.
                </p>
              </div>
              <div className="abstracted-ui-feature reveal reveal-delay-3">
                <h3 className="abstracted-ui-feature__title">Real-World Coordination</h3>
                <p className="abstracted-ui-feature__desc">
                  Connect digital decisions to physical outcomes. APIs, databases, and external
                  tools.
                </p>
              </div>
            </div>
            <div className="center-action">
              <Link href="/products/robot" className="btn-product-download">
                Explore Robot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Bangladesh */}
      <section className="workspace-options-section">
        <div className="container">
          <div className="vision-stage reveal">
            <h2 className="vision-stage__title">For Bangladesh</h2>
            <p className="vision-stage__desc">
              Bangladesh&apos;s first AI company. We&apos;re building the future of work in
              Bangladesh and beyond. Technology should help people coordinate, create, and
              accomplish meaningful work at scale.
            </p>
          </div>
          <div className="abstracted-ui-grid">
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <h3 className="abstracted-ui-feature__title">First Local AI</h3>
              <p className="abstracted-ui-feature__desc">
                Building AI systems designed for Bangladesh and the region.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-2">
              <h3 className="abstracted-ui-feature__title">Made for BD</h3>
              <p className="abstracted-ui-feature__desc">
                Products built for local organizations, local teams, local work.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-3">
              <h3 className="abstracted-ui-feature__title">Global Ambition</h3>
              <p className="abstracted-ui-feature__desc">
                Building technology that competes on the world stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
