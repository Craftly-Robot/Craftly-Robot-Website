import { Helmet } from 'react-helmet-async';
import Hero from '../components/hero/Hero';
import { siteContent } from '../data/siteContent';
import { products } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProductShowcase from '../components/sections/ProductShowcase';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import ArchitectureVisualization from '../components/sections/ArchitectureVisualization';
import DevOrgSection from '../components/sections/DevOrgSection';
import CTASection from '../components/sections/CTASection';
import BlogRail from '../components/sections/BlogRail';
import DownloadSection from '../components/sections/DownloadSection';
import './HomePage.css';

export default function HomePage() {
  const revealRef = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Craftly — Intelligent Systems for the Agentic Era</title>
        <meta name="description" content={siteContent.hero.description} />
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

        {/* 11 — Large CTA */}
        <CTASection />

        {/* 12 — Blog Rail */}
        <BlogRail />

        {/* 13 — Final Download */}
        <DownloadSection />
      </div>
    </>
  );
}
