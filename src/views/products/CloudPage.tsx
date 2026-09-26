"use client";

import Link from "next/link";
import { SEO } from "../../components/SEO";
import { products } from "../../data/products";
import ImageWithFallback from "../../components/common/ImageWithFallback";
import CTASection from "../../components/sections/CTASection";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ProductPage.css";

const product = products.find((p) => p.id === "cloud")!;

export default function CloudPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <SEO title={product.name} description={product.tagline} />

      {/* Hero Section */}
      <div className="container">
        <section className="product-hero-clean">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "4px 12px",
              borderRadius: "999px",
              background: "var(--color-bg-subtle)",
              border: "1px solid var(--color-border)",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--color-accent, #3b82f6)",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
              }}
            />
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
              className="btn-product-download"
              style={{
                background: "transparent",
                color: "var(--color-text)",
                border: "1px solid var(--color-border)",
                marginLeft: "12px",
              }}
            >
              Cloud Documentation
            </Link>
          </div>
        </section>
      </div>

      {/* Top Architecture Dashboard Mockup */}
      <div className="product-showcase-large" style={{ padding: "0 20px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--color-border)",
            boxShadow: "var(--shadow-lg, 0 10px 30px rgba(0,0,0,0.15))",
          }}
          className="reveal"
        >
          <ImageWithFallback
            src="/assets/Craftly_Cloud/craftly-cloud-overview.svg"
            alt="Craftly Cloud Global Anycast Topology and Real-time Telemetry"
            width={1394}
            height={1128}
            loading="eager"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>

      {/* Core Infrastructure Pillars Grid */}
      <section className="abstracted-ui-section" id="features">
        <div className="container" style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(59, 130, 246, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#3b82f6",
                  }}
                >
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
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: "rgba(16, 185, 129, 0.12)",
                    color: "#10b981",
                  }}
                >
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(168, 85, 247, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a855f7",
                  }}
                >
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
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: "rgba(59, 130, 246, 0.12)",
                    color: "#3b82f6",
                  }}
                >
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(16, 185, 129, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#10b981",
                  }}
                >
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
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: "rgba(168, 85, 247, 0.12)",
                    color: "#a855f7",
                  }}
                >
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(245, 158, 11, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#f59e0b",
                  }}
                >
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
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: "999px",
                    background: "rgba(245, 158, 11, 0.12)",
                    color: "#f59e0b",
                  }}
                >
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
      <section className="section" style={{ padding: "40px 0" }}>
        <div className="container" style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--color-bg-subtle)",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              padding: "clamp(24px, 4vw, 48px)",
              textAlign: "left",
            }}
            className="reveal"
          >
            <div
              style={{
                display: "inline-block",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "12px",
              }}
            >
              Developer First
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Deploy Agent Swarms with a Single Command
            </h2>
            <p
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "1rem",
                marginBottom: "28px",
                maxWidth: "680px",
                lineHeight: 1.6,
              }}
            >
              Integrates natively with Craftly Robot and Workspace. Connect your GitHub repository,
              configure your agent policies, and push to production instantly.
            </p>

            <div
              style={{
                background: "#080c14",
                borderRadius: "10px",
                border: "1px solid #1e293b",
                padding: "20px 24px",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                fontSize: "0.95rem",
                color: "#f8fafc",
                lineHeight: "1.8",
                overflowX: "auto",
              }}
            >
              <div style={{ color: "#64748b" }}># 1. Install Craftly Cloud CLI</div>
              <div>
                <span style={{ color: "#38bdf8" }}>$</span> npm install -g @craftly/cli
              </div>
              <div style={{ color: "#64748b", marginTop: "10px" }}># 2. Authenticate</div>
              <div>
                <span style={{ color: "#38bdf8" }}>$</span> craftly login
              </div>
              <div style={{ color: "#64748b", marginTop: "10px" }}># 3. Deploy multi-agent cluster</div>
              <div>
                <span style={{ color: "#38bdf8" }}>$</span> craftly cloud deploy --region anycast
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
