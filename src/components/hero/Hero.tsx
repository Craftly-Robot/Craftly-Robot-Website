"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useOS } from "../../hooks/useOS";
import ProductVisual from "../product/ProductVisual";
import "./Hero.css";

const HeroParticles = dynamic(() => import("./HeroParticles"), {
  ssr: false,
  loading: () => <div className="hero__particles-placeholder" />,
});

export default function Hero() {
  const osName = useOS();

  return (
    <section className="hero">
      <HeroParticles />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero__content">
          <h1 className="hero__title">
            The operating system for intelligent organizations
          </h1>
          <p className="hero__subtitle">
            Craftly connects people, work, and AI agents in one system. Built in
            Bangladesh. Available today.
          </p>

          <div className="hero__cta-group">
            <Link href="/download" className="hero__btn-primary">
              Download for {osName}
            </Link>
            <Link href="/vision" className="hero__btn-secondary">
              See how it works
            </Link>
          </div>

          <div className="hero__trust-signals">
            <span className="hero__trust-signal">
              <span className="hero__trust-icon">🇧🇩</span>
              Built in Bangladesh
            </span>
            <span className="hero__trust-divider" />
            <span className="hero__trust-signal">
              <span className="hero__trust-icon">🔓</span>
              Open Source
            </span>
            <span className="hero__trust-divider" />
            <span className="hero__trust-signal">
              <span className="hero__trust-icon">✦</span>
              Free Forever
            </span>
          </div>
        </div>

        <div className="hero__media-wrapper">
          <ProductVisual variant="overview" />
        </div>
      </div>
    </section>
  );
}
