import { Helmet } from 'react-helmet-async';
import Hero from '../components/hero/Hero';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProductShowcase from '../components/sections/ProductShowcase';
import DownloadSection from '../components/sections/DownloadSection';
import { products } from '../data/products';
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
        {/* Workspace & Robot Sections */}
        <ProductShowcase product={products[0]} />
        <ProductShowcase product={products[1]} altLayout />

        {/* Final Download CTA */}
        <DownloadSection hideVisual={true} />
      </div>
    </>
  );
}
