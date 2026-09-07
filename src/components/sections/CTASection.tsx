"use client";

import Link from "next/link";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./CTASection.css";

interface CTASectionProps {
  title?: string;
}

export default function CTASection({ title = "Download Craftly Workspace" }: CTASectionProps) {
  const revealRef = useScrollReveal();

  return (
    <section className="cta-section" ref={revealRef}>
      <div className="container">
        <div className="cta-section__content reveal">
          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__desc">Free. Open. Available on every platform.</p>
          <div className="cta-section__actions">
            <Link href="/download" className="cta-section__btn">
              Download
            </Link>
            <Link
              href="/resources/documentation"
              className="cta-section__btn cta-section__btn--secondary"
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
