import { Link } from "react-router-dom";
import { products } from "../../data/products";
import HeroParticles from "./HeroParticles";
import ProductVisual from "../product/ProductVisual";
import VideoShowcase from "../ui/VideoShowcase";
import TechSnake from "./TechSnake";
import { useOS } from "../../hooks/useOS";
import "./Hero.css";

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

export default function Hero() {
  const osName = useOS();

  return (
    <section className="hero">
      <HeroParticles />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero__content">
          <HeroTitle />

          <div className="hero__cta-group">
            <Link to="/download" className="hero__btn-primary">
              <MonitorIcon />
              Download for {osName}
            </Link>
            <Link to="/use-cases/operations" className="hero__btn-secondary">
              Explore use cases
            </Link>
          </div>
        </div>

        <div className="hero__media-wrapper">
          {products[0].videoSrc ? (
            <VideoShowcase
              src={products[0].videoSrc}
              poster={products[0].posterSrc}
              altText="Craftly Workspace showcase"
            />
          ) : (
            <ProductVisual variant="overview" />
          )}
        </div>

        <TechSnake />

        <HeroStatement
          text={`Craftly is building a new kind of\ntechnology organization, where\npeople, and intelligent agents work\ntogether.`}
        />
      </div>
    </section>
  );
}

function HeroTitle() {
  return (
    <h1 className="text-hero-display hero__title">
      <span>Hello World From Bangladesh</span>
      <img
        src="/assets/Bangladesh_Flag/Flag-Bangladesh.webp"
        alt="Bangladesh Flag"
        className="hero__flag"
      />
    </h1>
  );
}

function HeroStatement({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <div className="hero__statement reveal">
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
}
