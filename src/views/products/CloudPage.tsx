"use client";

import Link from "next/link";
import { SEO } from "../../components/SEO";
import { products } from "../../data/products";
import ImageWithFallback from "../../components/common/ImageWithFallback";
import CTASection from "../../components/sections/CTASection";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ProductPage.css";
import "./CloudPage.css";

const product = products.find((p) => p.id === "cloud")!;

export default function CloudPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <SEO title={product.name} description={product.tagline} />

      {/* Hero Section */}
      <div className="container">
        <section className="product-hero-clean">
          <div className="cloud-badge">
            <span className="cloud-badge__dot" />
            Global Edge Runtime • Active in 38 Regions
          </div>

          <h1 className="product-hero-clean__title">{product.name}</h1>
          <p className="product-hero-clean__desc">{product.description}</p>
          <div className="product-hero-clean__actions">
            <Link href="/download" className="btn-product-download">
              Deploy with CLI
            </Link>
            <Link
              href="/resources/documentation"
              className="btn-product-download cloud-actions-secondary"
            >
              Cloud Documentation
            </Link>
          </div>
        </section>
      </div>

      {/* Top Architecture Dashboard Mockup */}
      <div className="product-showcase-large cloud-showcase-container">
        <div className="cloud-showcase-wrapper reveal">
          <ImageWithFallback
            src="/assets/Craftly_Cloud/craftly-cloud-overview.svg"
            alt="Craftly Cloud Global Anycast Topology and Real-time Telemetry"
            width={1394}
            height={1128}
            loading="eager"
            className="cloud-showcase-image"
          />
        </div>
      </div>

      {/* Core Infrastructure Pillars Grid */}
      <section className="abstracted-ui-section" id="features">
        <div className="container cloud-features-container">
          <h2 className="abstracted-ui-title reveal">
            Engineered for Autonomous Intelligence
          </h2>
          <p className="abstracted-ui-desc reveal reveal-delay-1">
            Built from bare metal up to handle high-frequency agent tool execution,
            distributed vector memory, and millisecond state synchronization.
          </p>

          <div className="abstracted-ui-grid">
            {/* Pillar 1 */}
            <div className="abstracted-ui-feature reveal reveal-delay-1">
              <div className="cloud-feature-header">
                <div className="cloud-feature-icon-wrapper cloud-feature-icon-wrapper--blue">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="cloud-feature-stat cloud-feature-stat--emerald">
                  7.2 ms Latency
                </span>
              </div>
              <h3 className="abstracted-ui-feature__title">
                Anycast Global Mesh
              </h3>
              <p className="abstracted-ui-feature__desc">
                BGP Anycast routing routes user and agent traffic to the closest
                edge point of presence in single-digit milliseconds across 38 global hubs.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="abstracted-ui-feature reveal reveal-delay-2">
              <div className="cloud-feature-header">
                <div className="cloud-feature-icon-wrapper cloud-feature-icon-wrapper--purple">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
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
                <span className="cloud-feature-stat cloud-feature-stat--blue">
                  12ms Cold Start
                </span>
              </div>
              <h3 className="abstracted-ui-feature__title">
                MicroVM Agent Sandboxes
              </h3>
              <p className="abstracted-ui-feature__desc">
                Instant container spin-up with isolated kernel spaces. Autonomous
                agents execute code, inspect repos, and run scripts in strictly sandboxed zones.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="abstracted-ui-feature reveal reveal-delay-3">
              <div className="cloud-feature-header">
                <div className="cloud-feature-icon-wrapper cloud-feature-icon-wrapper--emerald">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span className="cloud-feature-stat cloud-feature-stat--purple">
                  Hardware mTLS
                </span>
              </div>
              <h3 className="abstracted-ui-feature__title">
                Zero-Trust Cryptographic Enclaves
              </h3>
              <p className="abstracted-ui-feature__desc">
                End-to-end encryption for agent state, sensitive tokens, and
                enterprise source code with cryptographic attestation at the hardware level.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="abstracted-ui-feature reveal reveal-delay-4">
              <div className="cloud-feature-header">
                <div className="cloud-feature-icon-wrapper cloud-feature-icon-wrapper--amber">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <span className="cloud-feature-stat cloud-feature-stat--amber">
                  99.999% SLA
                </span>
              </div>
              <h3 className="abstracted-ui-feature__title">
                Auto-Healing Cluster Mesh
              </h3>
              <p className="abstracted-ui-feature__desc">
                Fault-tolerant orchestration that re-routes tasks automatically
                in under 15ms if any region undergoes maintenance or network turbulence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer CLI Section */}
      <section className="section cloud-cli-section">
        <div className="container cloud-cli-container">
          <div className="cloud-cli-card reveal">
            <div className="cloud-cli-badge">
              Developer First
            </div>
            <h2 className="cloud-cli-title">
              Deploy Agent Swarms with a Single Command
            </h2>
            <p className="cloud-cli-desc">
              Integrates natively with Craftly Robot and Workspace. Connect your GitHub repository,
              configure your agent policies, and push to production instantly.
            </p>

            <div className="cloud-cli-terminal">
              <div className="cloud-cli-step-title"># 1. Install Craftly Cloud CLI</div>
              <div>
                <span className="cloud-cli-prompt">$</span> npm install -g @craftly/cli
              </div>
              <div className="cloud-cli-step-title cloud-cli-step-title--spaced"># 2. Authenticate</div>
              <div>
                <span className="cloud-cli-prompt">$</span> craftly login
              </div>
              <div className="cloud-cli-step-title cloud-cli-step-title--spaced"># 3. Deploy multi-agent cluster</div>
              <div>
                <span className="cloud-cli-prompt">$</span> craftly cloud deploy --region anycast
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection title="Start Building on Craftly Cloud" />
    </div>
  );
}
