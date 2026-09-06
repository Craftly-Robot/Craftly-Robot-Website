"use client";

"use client";

import Link from "next/link";

export default function PressPage() {
  return (
    <>      <div className="container">
        <section style={{ paddingBlock: "var(--space-5xl)" }}>
          <h1 className="text-display" style={{ marginBottom: "var(--space-lg)" }}>
            Press
          </h1>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px" }}>
            Media coverage, announcements, and news about Craftly.
          </p>
          <div style={{ marginTop: "var(--space-3xl)" }}>
            <Link
              href="/resources/documentation"
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
