"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { products } from "../../data/products";
import ImageWithFallback from "../common/ImageWithFallback";
import "./Hero.css";

const HeroParticles = dynamic(() => import("./HeroParticles"), {
  ssr: false,
});

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

export default function Hero({ hideParticles = false }: { hideParticles?: boolean } = {}) {
  const [activeProductId, setActiveProductId] = useState<"workspace" | "robot" | "cloud">("workspace");

  const currentProduct = products.find((p) => p.id === activeProductId) || products[0];

  return (
    <section className="hero">
      {!hideParticles && <HeroParticles />}
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero__content">
          <HeroTitle />

          {/* Segmented Capsule Switcher */}
          <div
            className="hero__product-switcher"
            role="tablist"
            aria-label="Select Craftly product"
          >
            <button
              type="button"
              role="tab"
              id="tab-workspace"
              aria-selected={activeProductId === "workspace"}
              aria-controls="hero-product-tagline"
              className={`hero__switcher-btn ${activeProductId === "workspace" ? "hero__switcher-btn--active" : ""}`}
              onClick={() => setActiveProductId("workspace")}
            >
              Craftly Workspace
            </button>
            <button
              type="button"
              role="tab"
              id="tab-robot"
              aria-selected={activeProductId === "robot"}
              aria-controls="hero-product-tagline"
              className={`hero__switcher-btn ${activeProductId === "robot" ? "hero__switcher-btn--active" : ""}`}
              onClick={() => setActiveProductId("robot")}
            >
              Craftly Robot
            </button>
            <button
              type="button"
              role="tab"
              id="tab-cloud"
              aria-selected={activeProductId === "cloud"}
              aria-controls="hero-product-tagline"
              className={`hero__switcher-btn ${activeProductId === "cloud" ? "hero__switcher-btn--active" : ""}`}
              onClick={() => setActiveProductId("cloud")}
            >
              Craftly Cloud
            </button>
          </div>

          {/* Dynamic Micro-Tagline */}
          <p
            id="hero-product-tagline"
            role="tabpanel"
            aria-labelledby={`tab-${activeProductId}`}
            className="hero__dynamic-tagline"
            key={currentProduct.id}
          >
            {currentProduct.tagline}
          </p>

          <div className="hero__cta-group">
            <Link
              href={activeProductId === "cloud" ? "/products/cloud" : `/download#${activeProductId}`}
              className="hero__btn-primary"
            >
              {activeProductId === "cloud" ? <CloudIcon /> : <MonitorIcon />}
              {activeProductId === "cloud" ? "Launch Craftly Cloud" : `Download ${currentProduct.name}`}
            </Link>
            <Link
              href={currentProduct.route}
              className="hero__btn-secondary"
            >
              Explore {activeProductId === "workspace" ? "Workspace" : activeProductId === "robot" ? "Robot" : "Cloud"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTitle() {
  return (
    <h1 className="text-hero-display hero__title">
      <span>Hello World From Bangladesh</span>
      <ImageWithFallback
        src="/assets/Bangladesh_Flag/Flag-Bangladesh.webp"
        alt="Bangladesh Flag"
        className="hero__flag"
        width={36}
        height={24}
        loading="eager"
      />
    </h1>
  );
}
