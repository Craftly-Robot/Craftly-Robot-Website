"use client";

import Link from "next/link";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import TrustBadges from "../components/ui/TrustBadges";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./products/ProductPage.css";

export default function PricingPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">Simple, transparent pricing</h1>
          <p className="product-hero-clean__desc">
            Craftly is free. No hidden fees. No credit card required.
          </p>
        </section>
      </div>

      <div className="product-showcase-large product-showcase-large--no-margin">
        <div className="section-content--wide">
          <div className="pricing-card reveal">
            <div className="pricing-card__header">
              <h2 className="pricing-card__name">Craftly Workspace</h2>
              <div className="pricing-card__price">
                <span className="pricing-card__amount">Free</span>
                <span className="pricing-card__period">forever</span>
              </div>
            </div>
            <div className="pricing-card__features">
              <div className="pricing-card__feature">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Unlimited tasks and projects</span>
              </div>
              <div className="pricing-card__feature">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Unlimited team members</span>
              </div>
              <div className="pricing-card__feature">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>All platforms (macOS, Windows, Linux, Android, iOS)</span>
              </div>
              <div className="pricing-card__feature">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Full documentation access</span>
              </div>
              <div className="pricing-card__feature">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Community support</span>
              </div>
            </div>
            <div className="pricing-card__actions">
              <Link href="/download" className="btn-product-download">
                Download Now
              </Link>
            </div>
          </div>

          <div className="pricing-faq reveal">
            <h3>Frequently Asked Questions</h3>
            <div className="pricing-faq__item">
              <h4>Is there really no cost?</h4>
              <p>Yes. Craftly Workspace is completely free. We believe essential software for organizations should be accessible to everyone.</p>
            </div>
            <div className="pricing-faq__item">
              <h4>What about Craftly Robot?</h4>
              <p>Craftly Robot is currently in development. Pricing details will be announced before launch.</p>
            </div>
            <div className="pricing-faq__item">
              <h4>Are there any limits?</h4>
              <p>No. Unlimited tasks, projects, team members, and everything else. No artificial limits.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="product-showcase-large product-showcase-large--no-margin">
        <div className="section-content">
          <h2 className="explore-features-section__title reveal">Ready to get started?</h2>
          <div className="center-action">
            <Link href="/download" className="btn-product-download">
              Download Craftly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
