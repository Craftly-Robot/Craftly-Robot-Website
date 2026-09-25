"use client";

import dynamic from "next/dynamic";
import { SEO } from "../components/SEO";
import Hero from "../components/hero/Hero";
import TechSnake from "../components/hero/TechSnake";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProductShowcase from "../components/sections/ProductShowcase";
import DownloadSection from "../components/sections/DownloadSection";
import { products } from "../data/products";
import "./HomePage.css";

// Dynamic client-side components to eliminate initial main-thread blocking
const HeroParticles = dynamic(
  () => import("../components/hero/HeroParticles"),
  {
    ssr: false,
    loading: () => <div className="hero-visual" aria-hidden="true" />,
  }
);

const BrandFilmSection = dynamic(
  () => import("../components/sections/BrandFilmSection"),
  { ssr: false }
);

const ProductVisual = dynamic(
  () => import("../components/product/ProductVisual"),
  { ssr: false }
);

const RobotDemo = dynamic(
  () => import("../components/sections/RobotDemo"),
  { ssr: false }
);

export default function HomePage() {
  const revealRef = useScrollReveal();

  return (
    <>
      <SEO
        title="Technology, Intelligence & Organization"
        description="Craftly builds intelligent systems for the agentic era. Explore Craftly Workspace and Craftly Robot — tools for operating modern organizations and autonomous software engineering in Bangladesh."
      />

      {/* 01 & 02 — Hero Stage: Interactive Particle Ocean, Hero Content & Floating Brand Film */}
      <div className="home-hero-stage">
        <HeroParticles />
        <Hero hideParticles />
        <BrandFilmSection />
      </div>

      {/* 03 — Decentralized Model Training: Interactive Command Center Showcase */}
      <section
        className="home-dashboard-section"
        aria-label="Decentralized Model Training Command Center"
      >
        <div className="container">
          <ProductVisual variant="overview" />
        </div>
      </section>

      {/* 04 — Tech Partners / Stack Marquee */}
      <TechSnake />

      <div ref={revealRef}>
        {/* Workspace & Robot Sections */}
        <ProductShowcase product={products[0]} />
        <ProductShowcase
          product={products[1]}
          altLayout
          visual={<RobotDemo />}
        />

        {/* Final Download CTA */}
        <DownloadSection hideVisual={true} />
      </div>
    </>
  );
}
