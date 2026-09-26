"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Craftly Global Root Error]", error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Application Error — Craftly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#080c14",
          color: "#f8fafc",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            width: "90%",
            textAlign: "center",
            padding: "40px 24px",
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "16px",
          }}
        >
          <h1 style={{ fontSize: "1.75rem", marginBottom: "12px", color: "#f8fafc" }}>
            Application Error
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
            A critical system error occurred. You can attempt to reload the application below.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: "10px 24px",
              fontSize: "0.9rem",
              fontWeight: 600,
              borderRadius: "999px",
              background: "#38bdf8",
              color: "#080c14",
              border: "none",
              cursor: "pointer",
            }}
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
