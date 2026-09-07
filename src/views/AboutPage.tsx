"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CTASection from "../components/sections/CTASection";
import "./products/ProductPage.css";

export default function AboutPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">About Craftly</h1>
          <p className="product-hero-clean__desc">
            Bangladesh&apos;s first AI company. Building the operating system
            for intelligent organizations.
          </p>
        </section>
      </div>

      {/* Mission */}
      <section className="explore-features-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="explore-features-section__title reveal">Our Mission</h2>
            <p className="vision-stage__desc reveal reveal-delay-1" style={{ fontSize: "1.125rem" }}>
              Technology should help people coordinate, create, and accomplish
              meaningful work at scale without losing sight of the people doing
              that work.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="abstracted-ui-title reveal">Our Story</h2>
            <p className="abstracted-ui-desc reveal reveal-delay-1">
              Craftly was founded in Bangladesh with a simple belief: the future
              of work is intelligent, connected, and organized. We&apos;re building
              systems that help organizations run better, teams communicate
              clearer, and work move faster.
            </p>
            <p className="abstracted-ui-desc reveal reveal-delay-2">
              Starting with Craftly Workspace — a platform that connects people,
              tasks, communication, and resources in one structured environment.
              Then expanding into autonomous AI with Craftly Robot. And
              ultimately, connecting it all to the physical world with Craftly
              Glass.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="workspace-options-section">
        <div className="container">
          <h2 className="explore-features-section__title section-heading--center reveal">
            What We Believe
          </h2>
          <div className="abstracted-ui-grid">
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <h3 className="abstracted-ui-feature__title">Clarity Over Complexity</h3>
              <p className="abstracted-ui-feature__desc">
                Simple systems that work are better than complex systems that
                confuse. We build for clarity.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-2">
              <h3 className="abstracted-ui-feature__title">People First</h3>
              <p className="abstracted-ui-feature__desc">
                Technology should serve people, not the other way around. We
                build with people in mind.
              </p>
            </div>
            <div className="abstracted-ui-feature reveal reveal-delay-3">
              <h3 className="abstracted-ui-feature__title">Build Honestly</h3>
              <p className="abstracted-ui-feature__desc">
                We say what we&apos;re building and where we are. No overclaiming.
                No vaporware. Just honest progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="abstracted-ui-title reveal">Who We Are</h2>
            <p className="abstracted-ui-desc reveal reveal-delay-1">
              A team of engineers, designers, and builders based in Bangladesh.
              We&apos;re working to build the future of work — intelligent systems
              that help organizations run better.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="workspace-options-section">
        <div className="container">
          <div className="vision-stage reveal">
            <h2 className="vision-stage__title">Get Involved</h2>
            <p className="vision-stage__desc">
              Whether you want to use Craftly, contribute to it, or partner
              with us — we&apos;d love to hear from you.
            </p>
            <div className="section-actions">
              <Link href="/download" className="btn-product-download">
                Download
              </Link>
              <Link href="/resources/documentation" className="btn-product-download btn-product-download--outline">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
