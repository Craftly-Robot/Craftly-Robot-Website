"use client";

import { SEO } from "../../components/SEO";
import { Link } from "../../lib/router-compat";

export default function PressPage() {
  return (
    <>
      <SEO title="Press" description="Craftly in the press — media coverage, announcements, and news." />
      <div className="container">
        <section style={{ paddingBlock: "var(--space-5xl)" }}>
          <h1 className="text-display" style={{ marginBottom: "var(--space-lg)" }}>
            Press
          </h1>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px" }}>
            Media coverage, announcements, and news about Craftly.
          </p>
          <div style={{ marginTop: "var(--space-3xl)" }}>
            <Link
              to="/resources/documentation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "var(--space-xs)",
                color: "var(--color-text-secondary)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              ← Back to Resources
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
