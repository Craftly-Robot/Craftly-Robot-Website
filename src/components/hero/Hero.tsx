"use client";

import Link from "next/link";
import { useOS } from "../../hooks/useOS";
import ProductVisual from "../product/ProductVisual";
import "./Hero.css";

export default function Hero() {
  const osName = useOS();

  return (
    <section className="hero">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero__content">
          <h1 className="hero__title">
            The operating system for intelligent organizations
          </h1>
          <p className="hero__subtitle">
            Craftly connects people, work, and AI agents in one system.
            Built in Bangladesh. Available today.
          </p>

          <div className="hero__cta-group">
            <Link href="/download" className="hero__btn-primary">
              Download for {osName}
            </Link>
            <Link href="/vision" className="hero__btn-secondary">
              See how it works
            </Link>
          </div>
        </div>

        <div className="hero__media-wrapper">
          <ProductVisual variant="overview" />
        </div>
      </div>
    </section>
  );
}
