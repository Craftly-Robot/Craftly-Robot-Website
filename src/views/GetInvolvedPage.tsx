"use client";

import Link from "next/link";
import { useScrollReveal } from "../hooks/useScrollReveal";
import CTASection from "../components/sections/CTASection";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import "./products/ProductPage.css";

export default function GetInvolvedPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Breadcrumbs items={[{ label: "Get Involved" }]} />
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">Get Involved</h1>
          <p className="product-hero-clean__desc">
            Whether you want to use Craftly, contribute to it, or partner with us — we&apos;d love
            to hear from you.
          </p>
        </section>
      </div>

      {/* Use Craftly */}
      <section className="explore-features-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="explore-features-section__title reveal">Use Craftly</h2>
            <p className="vision-stage__desc text-lg reveal reveal-delay-1">
              Download Craftly Workspace for free. Available on macOS, Windows, Linux, Android, and
              iOS.
            </p>
            <div className="center-action">
              <Link href="/download" className="btn-product-download">
                Download Craftly
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="abstracted-ui-title reveal">Contribute</h2>
            <p className="abstracted-ui-desc reveal reveal-delay-1">
              Help us build the future of work in Bangladesh and beyond. We&apos;re building open
              systems that anyone can contribute to.
            </p>
            <div className="center-action">
              <a
                href="https://github.com/Craftly-Robot"
                className="btn-product-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="workspace-options-section">
        <div className="container">
          <div className="vision-stage reveal">
            <h2 className="vision-stage__title">Partner with Us</h2>
            <p className="vision-stage__desc">
              Interested in partnering? We&apos;re always looking for organizations that share our
              vision for intelligent, connected work.
            </p>
            <div className="center-action">
              <a href="mailto:hello@craftlyrobot.com" className="btn-product-download">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="abstracted-ui-section">
        <div className="product-showcase-large product-showcase-large--no-margin">
          <div className="section-content">
            <h2 className="abstracted-ui-title reveal">Join the Team</h2>
            <p className="abstracted-ui-desc reveal reveal-delay-1">
              We&apos;re always looking for talented people who share our vision. If you&apos;re
              passionate about building the future of work, we&apos;d love to hear from you.
            </p>
            <div className="center-action">
              <a href="mailto:careers@craftlyrobot.com" className="btn-product-download">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
