"use client";

import CTASection from "../../components/sections/CTASection";
import type { Resource } from "../../types";

interface ResourceLayoutProps {
  resource: Resource;
  children?: React.ReactNode;
}

export default function ResourceLayout({ resource, children }: ResourceLayoutProps) {
  return (
    <>
      <div className="container">
        <section className="section section--lg section-content">
          <span
            className="text-label"
            style={{
              opacity: 0,
              animation: "heroFadeUp 0.8s var(--ease-out) forwards",
            }}
          >
            Resource
          </span>
          <h1
            className="text-display"
            style={{
              marginTop: "var(--space-md)",
              opacity: 0,
              animation: "heroFadeUp 0.8s var(--ease-out) 0.1s forwards",
            }}
          >
            {resource.title}
          </h1>
          <p
            className="text-body-lg"
            style={{
              marginTop: "var(--space-lg)",
              color: "var(--color-text-secondary)",
              opacity: 0,
              animation: "heroFadeUp 0.8s var(--ease-out) 0.2s forwards",
            }}
          >
            {resource.description}
          </p>
        </section>

        {children || (
          <section
            className="section"
            style={{
              minHeight: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Content for {resource.title} coming soon.
            </p>
          </section>
        )}
      </div>

      <CTASection />
    </>
  );
}
