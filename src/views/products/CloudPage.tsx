"use client";

import { useState } from "react";
import Link from "next/link";
import { SEO } from "../../components/SEO";
import ImageWithFallback from "../../components/common/ImageWithFallback";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./CloudPage.css";

export default function CloudPage() {
  const revealRef = useScrollReveal();
  const [showAboutNumber, setShowAboutNumber] = useState(false);

  return (
    <div className="cloud-page-container" ref={revealRef}>
      <SEO
        title="Craftly Cloud - Bangladesh’s national AI compute capacity"
        description="Craftly is connecting every computer in Bangladesh to show the world what's possible."
      />

      {/* 1. Hero Section */}
      <section className="cloud-hero">
        <div className="cloud-hero__brand">
          <span className="brand-font-pacifico cloud-hero__brand-script">Craftly</span>
          <span className="cloud-hero__brand-tag">Cloud</span>
        </div>

        <h1 className="cloud-hero__title">
          <span className="cloud-hero__title-main">Bangladesh’s national</span>
          <span className="cloud-hero__title-sub">AI compute capacity.</span>
        </h1>

        <div className="cloud-hero__stat-wrapper">
          <span className="cloud-hero__stat-value">248.9</span>
          <span className="cloud-hero__stat-unit">GB</span>
        </div>

        <button
          type="button"
          className="cloud-hero__about-btn"
          onClick={() => setShowAboutNumber(!showAboutNumber)}
          aria-expanded={showAboutNumber}
        >
          <span className="cloud-hero__play-icon">
            {showAboutNumber ? "▼" : "▶"}
          </span>
          <span>About this number</span>
        </button>

        {showAboutNumber && (
          <p className="cloud-hero__about-text">
            Total RAM across recently connected computers, including paused computers. Updates automatically. Available memory for work may be lower.
          </p>
        )}

        <p className="cloud-hero__desc">
          Craftly is connecting whole Bangladesh to show<br />
          the world whats possible.
        </p>

        <div className="cloud-hero__actions">
          <Link href="/download" className="cloud-btn-primary">
            Connect Your Computer
          </Link>
          <Link href="/contact?topic=compute" className="cloud-btn-secondary">
            Build with Craftly
          </Link>
        </div>

        {/* Bangladesh National Landmark Skyline */}
        <div className="cloud-skyline-container">
          <ImageWithFallback
            src="/assets/Craftly_Cloud/bangladesh-skyline.svg"
            fallback="/assets/Craftly_Cloud/bangladesh-skyline.png"
            alt="Bangladesh Skyline - Jatiya Smriti Soudho and Padma Bridge"
            width={2048}
            height={496}
            className="cloud-skyline-img"
            loading="eager"
          />
        </div>
      </section>

      {/* 2. Ribbon / Stat Strip */}
      <section className="cloud-stat-ribbon" id="ambition">
        <div className="cloud-stat-ribbon__inner">
          <div className="cloud-stat-ribbon__left">
            <span className="cloud-stat-ribbon__tag">THE NATIONAL AMBITION</span>
            <h2 className="cloud-stat-ribbon__heading">
              Our Computers<br />Powering the World
            </h2>
          </div>
          <div className="cloud-stat-ribbon__right">
            <span className="cloud-stat-ribbon__amount">$1T</span>
            <p className="cloud-stat-ribbon__label">
              Help build a trillion-dollar GDP for Bangladesh<br />through export revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Ministry Pilot Section */}
      <section className="cloud-pilot-section" id="pilot">
        <div className="cloud-pilot-container">
          <span className="cloud-pilot__tag">01 / OUR BEGINNING</span>

          <div className="cloud-seal-wrapper">
            <ImageWithFallback
              src="/assets/Craftly_Cloud/bangladesh-govt-republic-of-bangladesh-logo-png_seeklogo-406974.png"
              alt="Government of the People's Republic of Bangladesh Emblem"
              width={80}
              height={80}
              className="cloud-seal-img"
              loading="lazy"
            />
          </div>

          <h2 className="cloud-pilot__title">
            <span className="cloud-pilot__title-main">Invited to develop</span>
            <span className="cloud-pilot__title-sub">a ministry pilot.</span>
          </h2>

          <p className="cloud-pilot__desc">
            At Bangladesh Innovation Fair 2026, Craftly presented a national-scale idea: build
            Bangladesh’s national AI compute capacity, without building data centers. The presentation
            led to an invitation to develop a pilot with the Ministry of Science and Technology.
          </p>

          <div className="cloud-pilot__photo-card">
            <ImageWithFallback
              src="/assets/Craftly_Cloud/ministry-pilot.jpg"
              alt="Craftly presenting national sovereign compute pilot at Bangladesh Innovation Fair 2026"
              width={1200}
              height={700}
              className="cloud-pilot__photo"
            />
          </div>
        </div>
      </section>

      {/* 4. Power for the People / Research & Impact */}
      <section className="cloud-impact-section" id="impact">
        <div className="cloud-impact-container">
          <div className="cloud-impact__header">
            <span className="cloud-pilot__tag">02 / POSSIBILITIES</span>
            <h2 className="cloud-impact__title">
              <span className="cloud-impact__title-main">Power for the people</span>
              <span className="cloud-impact__title-sub">moving us forward.</span>
            </h2>
            <p className="cloud-impact__subtitle">
              Our mission is to put computing capacity<br />behind work that matters.
            </p>
          </div>

          <div className="cloud-impact__grid">
            {/* Card 1: Cancer Research */}
            <div className="cloud-impact-card">
              <div className="cloud-impact-card__preview">
                <ImageWithFallback
                  src="/assets/Craftly_Cloud/cancer-research.svg"
                  alt="Cancer research dot network visualization"
                  width={200}
                  height={170}
                  className="cloud-impact-card__svg"
                />
              </div>
              <span className="cloud-impact-card__tag">01 / SCIENCE &amp; HEALTH</span>
              <h3 className="cloud-impact-card__heading">Cancer research</h3>
              <p className="cloud-impact-card__desc">
                More compute for researchers working to understand cancer and develop better treatments.
              </p>
            </div>

            {/* Card 2: University Students */}
            <div className="cloud-impact-card">
              <div className="cloud-impact-card__preview">
                <ImageWithFallback
                  src="/assets/Craftly_Cloud/university-layers.svg"
                  alt="University students machine learning layers"
                  width={200}
                  height={170}
                  className="cloud-impact-card__svg"
                />
              </div>
              <span className="cloud-impact-card__tag">02 / RESEARCH &amp; DEVELOPMENT</span>
              <h3 className="cloud-impact-card__heading">University students</h3>
              <p className="cloud-impact-card__desc">
                Help university students run experiments and develop AI beyond the limits of their own hardware.
              </p>
            </div>

            {/* Card 3: Young Entrepreneurs */}
            <div className="cloud-impact-card">
              <div className="cloud-impact-card__preview">
                <ImageWithFallback
                  src="/assets/Craftly_Cloud/young-entrepreneurs.svg"
                  alt="Young entrepreneurs lightbulb sprout"
                  width={200}
                  height={170}
                  className="cloud-impact-card__svg"
                />
              </div>
              <span className="cloud-impact-card__tag">03 / ENTREPRENEURSHIP</span>
              <h3 className="cloud-impact-card__heading">Young entrepreneurs</h3>
              <p className="cloud-impact-card__desc">
                Help young founders build and test AI products without buying powerful infrastructure first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Be Part of the Network */}
      <section className="cloud-network-section" id="network">
        <div className="cloud-network-container">
          <div className="cloud-network__header">
            <span className="cloud-pilot__tag">03 / YOUR PART</span>
            <h2 className="cloud-network__title">Be Part of the Network</h2>
            <p className="cloud-network__desc">
              Help build Bangladesh&apos;s AI compute network.<br />
              Start with the computer you already have.
            </p>
          </div>

          <div className="cloud-network__steps">
            <div className="cloud-step-item">
              <span className="cloud-step-item__number">01</span>
              <h3 className="cloud-step-item__title">Install Craftly</h3>
              <p className="cloud-step-item__desc">
                Download the app for your computer.
              </p>
            </div>

            <div className="cloud-step-item">
              <span className="cloud-step-item__number">02</span>
              <h3 className="cloud-step-item__title">Sign in with Google</h3>
              <p className="cloud-step-item__desc">
                Sign in securely in your browser.
              </p>
            </div>

            <div className="cloud-step-item">
              <span className="cloud-step-item__number">03</span>
              <h3 className="cloud-step-item__title">Connect your computer</h3>
              <p className="cloud-step-item__desc">
                Confirm it, then see its connection and uptime.
              </p>
            </div>
          </div>

          <div className="cloud-network__cta">
            <Link href="/download" className="cloud-btn-primary">
              Connect Your Computer
            </Link>
            <span className="cloud-network__platform-caption">
              Available for Mac, Windows and Linux.
            </span>
          </div>
        </div>
      </section>

      {/* 6. Dedicated Sovereign Cloud Minimalist Footer */}
      <footer className="cloud-footer">
        <div className="cloud-footer__inner">
          <div className="cloud-footer__grid">
            <div className="cloud-footer__brand-col">
              <div className="cloud-footer__brand">
                <span className="brand-font-pacifico cloud-footer__brand-script">Craftly</span>
                <span className="cloud-footer__brand-tag">Cloud</span>
              </div>
              <p className="cloud-footer__tagline">
                Building Bangladesh&apos;s AI compute infrastructure
              </p>
            </div>

            <div className="cloud-footer__col">
              <h4 className="cloud-footer__col-title">Discover Craftly</h4>
              <ul className="cloud-footer__links">
                <li>
                  <Link href="#ambition" className="cloud-footer__link">
                    Our national ambition
                  </Link>
                </li>
                <li>
                  <Link href="#pilot" className="cloud-footer__link">
                    The pilot invitation
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="cloud-footer__link">
                    Who we&apos;re building for
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cloud-footer__col">
              <h4 className="cloud-footer__col-title">Be part of it</h4>
              <ul className="cloud-footer__links">
                <li>
                  <Link href="/download" className="cloud-footer__link">
                    Connect your computer
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="cloud-footer__link">
                    Open your dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="cloud-footer__link">
                    Download Craftly
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="cloud-footer__bottom">
            <div className="cloud-footer__bottom-left">
              <span className="cloud-footer__copyright">© 2026 Craftly</span>
              <span className="cloud-footer__bottom-center">From Bangladesh. For the world.</span>
            </div>
            <button
              type="button"
              className="cloud-footer__back-to-top"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
