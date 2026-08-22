import { useState, useEffect, useRef, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./CTASection.css";

interface CTASectionProps {
  title?: string;
}

export default function CTASection({
  title = "Download Craftly Workspace",
}: CTASectionProps) {
  const revealRef = useScrollReveal();
  const [os, setOs] = useState("Windows");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) setOs("Windows");
    else if (userAgent.includes("mac")) setOs("macOS");
    else if (userAgent.includes("android")) setOs("Android");
    else if (userAgent.includes("iphone") || userAgent.includes("ipad"))
      setOs("iOS");
    else if (userAgent.includes("linux")) setOs("Linux");
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="section section--xl home-cta" ref={revealRef}>
      <div className="container container--wide">
        <div
          className="home-cta__container reveal"
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          {/* Subtle monochrome network/particle background using pure CSS gradients */}
          <div className="home-cta__bg" aria-hidden="true">
            <div className="home-cta__bg-grid" />
            <div className="home-cta__bg-spotlight" />
          </div>

          <div className="home-cta__content">
            <h2 className="home-cta__headline reveal reveal-delay-1">
              {title}
            </h2>
            <div className="home-cta__actions reveal reveal-delay-2">
              {(os === "Windows" || os === "Linux" || os === "Unknown OS") && (
                <>
                  <Link to="/download" className="home-cta__btn-primary">
                    Download for x64
                  </Link>
                  <Link to="/download" className="home-cta__btn-secondary">
                    Download for ARM64
                  </Link>
                </>
              )}
              {os === "macOS" && (
                <>
                  <Link to="/download" className="home-cta__btn-primary">
                    Download for Apple Silicon
                  </Link>
                  <Link to="/download" className="home-cta__btn-secondary">
                    Download for Intel
                  </Link>
                </>
              )}
              {(os === "Android" || os === "iOS") && (
                <Link to="/download" className="home-cta__btn-primary">
                  Download
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
