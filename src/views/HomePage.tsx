"use client";

import { SEO } from "../components/SEO";
import Hero from "../components/hero/Hero";
import HeroParticles from "../components/hero/HeroParticles";
import TechSnake from "../components/hero/TechSnake";
import ProductVisual from "../components/product/ProductVisual";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProductShowcase from "../components/sections/ProductShowcase";
import RobotDemo from "../components/sections/RobotDemo";
import DownloadSection from "../components/sections/DownloadSection";
import BrandFilmSection from "../components/sections/BrandFilmSection";
import { products } from "../data/products";
import "./HomePage.css";

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
