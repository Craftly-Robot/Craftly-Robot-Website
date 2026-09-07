"use client";

import Link from "next/link";
import Hero from "../components/hero/Hero";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./HomePage.css";

export default function HomePage() {
  const revealRef = useScrollReveal();

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

        {/* Product Snapshot — Workspace */}
        <section className="product-snapshot">
          <div className="container">
            <div className="product-snapshot__content reveal">
              <h2 className="product-snapshot__title">Craftly Workspace</h2>
              <p className="product-snapshot__desc">
                Your intelligent workspace for operating modern organizations.
                Connects people, work, communication, and resources in one
                structured environment.
              </p>
              <div className="product-snapshot__features">
                <div className="product-snapshot__feature">
                  <h3>Organizational Structure</h3>
                  <p>Define departments, roles, and reporting chains</p>
                </div>
                <div className="product-snapshot__feature">
                  <h3>Task Management</h3>
                  <p>Assign, track, and complete work with clear ownership</p>
                </div>
                <div className="product-snapshot__feature">
                  <h3>Team Communication</h3>
                  <p>Structured messaging through the reporting hierarchy</p>
                </div>
              </div>
              <Link href="/products/workspace" className="product-snapshot__link">
                Explore Workspace →
              </Link>
            </div>
          </div>
        </section>

        {/* The Vision — Robot → Glass */}
        <section className="vision-preview">
          <div className="container">
            <div className="vision-preview__content reveal">
              <h2 className="vision-preview__title">Building the intelligence</h2>
              <p className="vision-preview__desc">
                Craftly Robot is an agentic AI system for autonomous software
                engineering. Currently in active development.
              </p>
              <div className="vision-preview__roadmap">
                <span className="vision-preview__stage vision-preview__stage--current">
                  Workspace
                </span>
                <span className="vision-preview__arrow">→</span>
                <span className="vision-preview__stage vision-preview__stage--dev">
                  Robot
                </span>
                <span className="vision-preview__arrow">→</span>
                <span className="vision-preview__stage vision-preview__stage--future">
                  Glass
                </span>
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
            <h2 className="use-case-grid__title reveal">Who Craftly is for</h2>
            <div className="use-case-grid__grid">
              <div className="use-case-grid__card reveal reveal-delay-1">
                <h3>For Organizations</h3>
                <p>Manage operations, coordinate teams, track tasks</p>
              </div>
              <div className="use-case-grid__card reveal reveal-delay-2">
                <h3>For Developers</h3>
                <p>Build with AI, agent workflows, code intelligence</p>
              </div>
              <div className="use-case-grid__card reveal reveal-delay-3">
                <h3>For Bangladesh</h3>
                <p>First local AI, made for BD, global ambition</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="home-cta">
          <div className="container">
            <div className="home-cta__content reveal">
              <h2 className="home-cta__title">
                Start building with Craftly today
              </h2>
              <p className="home-cta__desc">
                Free. Open. Available on every platform.
              </p>
              <div className="home-cta__actions">
                <Link href="/download" className="home-cta__btn">
                  Download for macOS
                </Link>
                <Link href="/download" className="home-cta__btn">
                  Download for Windows
                </Link>
                <Link href="/download" className="home-cta__btn">
                  Download for Linux
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
