import { Helmet } from 'react-helmet-async';
import Hero from '../components/hero/Hero';
import { products } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProductShowcase from '../components/sections/ProductShowcase';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import ArchitectureVisualization from '../components/sections/ArchitectureVisualization';
import DevOrgSection from '../components/sections/DevOrgSection';

import BlogRail from '../components/sections/BlogRail';
import DownloadSection from '../components/sections/DownloadSection';
import './HomePage.css';

export default function HomePage() {
  const revealRef = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Craftly — Technology, Intelligence & Organization.</title>
        <meta name="description" content="Craftly builds intelligent systems for the agentic era. Explore Craftly Workspace and Craftly Robot — tools for operating modern organizations and autonomous software engineering in Bangladesh." />
        <meta name="keywords" content="Craftly Robot, Craftly Bangladesh, First scratch trained AI in Bangladesh, Decentralized AI Platform building in Bangladesh, Craftly Workspace, Agent to agent negotiation feature building in Bangladesh, Craftly Plan" />
      </Helmet>

      {/* 02-04 — Hero, Media, and Tech Icon Transition */}
      <Hero />

      <div ref={revealRef}>
        {/* 05 — Craftly Introduction */}
        <section className="section section--xl home-intro" id="intro">
          <div className="container">
            <h2 className="text-display home-intro__statement reveal">
              Craftly is an intelligent technology ecosystem designed to help people and organizations build, operate, and coordinate with AI.
            </h2>
          </div>
        </section>

        {/* 06/07 — Product Ecosystem (Workspace -> Robot) */}
        <ProductShowcase product={products[0]} />
        <ProductShowcase product={products[1]} altLayout />

        {/* 08 — Capabilities */}
        <CapabilitiesSection />

        {/* 09 — Architecture */}
        <ArchitectureVisualization />

        {/* 10 — Developers & Organizations */}
        <DevOrgSection />

        {/* 12 — Blog Rail */}
        <BlogRail />

        {/* 13 — Final Download */}
        <DownloadSection />
      </div>
    </>
  );
}
