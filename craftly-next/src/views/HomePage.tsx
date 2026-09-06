import { SEO } from "../components/SEO";
import Hero from "../components/hero/Hero";
import { useScrollReveal } from "../hooks/useScrollReveal";
import ProductShowcase from "../components/sections/ProductShowcase";
import RobotDemo from "../components/sections/RobotDemo";
import DownloadSection from "../components/sections/DownloadSection";
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

      {/* 02-04 — Hero, Media, and Tech Icon Transition */}
      <Hero />

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
