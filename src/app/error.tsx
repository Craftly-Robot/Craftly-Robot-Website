"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log telemetry or report to monitoring service
    console.error("[Craftly Application Error]", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "540px",
          width: "100%",
          textAlign: "center",
          background: "var(--color-bg-subtle)",
          border: "1px solid var(--color-border)",
          borderRadius: "20px",
          padding: "clamp(32px, 5vw, 48px)",
          boxShadow: "var(--shadow-lg, 0 10px 30px rgba(0,0,0,0.1))",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "rgba(239, 68, 68, 0.12)",
            color: "#ef4444",
            marginBottom: "20px",
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 600,
            color: "var(--color-text)",
            margin: "0 0 12px 0",
            letterSpacing: "-0.02em",
          }}
        >
          Something went wrong
        </h1>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
            margin: "0 0 24px 0",
          }}
        >
          An unexpected error occurred while processing this page. Our telemetry has captured
          the incident.
        </p>

        {error.digest && (
          <div
            style={{
              padding: "8px 12px",
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: "0.78rem",
              color: "var(--color-text-muted)",
              marginBottom: "24px",
              wordBreak: "break-all",
            }}
          >
            Digest: {error.digest}
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: "10px 22px",
              fontSize: "0.88rem",
              fontWeight: 500,
              borderRadius: "999px",
              background: "var(--color-text)",
              color: "var(--color-text-inverse)",
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
          >
            Try Again
          </button>

          <Link
            href="/"
            style={{
              padding: "10px 22px",
              fontSize: "0.88rem",
              fontWeight: 500,
              borderRadius: "999px",
              background: "transparent",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              textDecoration: "none",
              transition: "border-color 0.2s ease",
            }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
