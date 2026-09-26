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
            src="/assets/Craftly_Cloud/bangladesh-skyline.png"
            alt="Bangladesh Skyline - Jatiya Smriti Soudho and Padma Bridge"
            width={1024}
            height={250}
            className="cloud-skyline-img"
            loading="eager"
          />
        </div>
      </section>

      {/* 2. Ribbon / Stat Strip */}
      <section className="cloud-stat-ribbon">
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
      <section className="cloud-pilot-section">
        <div className="cloud-pilot-container">
          <span className="cloud-pilot__tag">01 / OUR BEGINNING</span>

          <div className="cloud-seal-wrapper">
            <ImageWithFallback
              src="/Craftly-Cloud/bangladesh-govt-republic-of-bangladesh-logo-png_seeklogo-406974.png"
              alt="Government of the People's Republic of Bangladesh Emblem"
              width={72}
              height={72}
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
      <section className="cloud-impact-section">
        <div className="cloud-impact-container">
          <div className="cloud-impact__header">
            <span className="cloud-section-tag">ACCELERATING RESEARCH</span>
            <h2 className="cloud-impact__title">
              Power for the people<br />moving us forward.
            </h2>
            <p className="cloud-impact__subtitle">
              Distributed compute driving real impact<br />across every sector in Bangladesh.
            </p>
          </div>

          <div className="cloud-impact__grid">
            {/* Card 1: Cancer Research */}
            <div className="cloud-impact-card">
              <div className="cloud-impact-card__preview">
                <ImageWithFallback
                  src="/assets/Craftly_Cloud/cancer-research.svg"
                  alt="Cancer research dot network visualization"
                  width={240}
                  height={150}
                  className="cloud-impact-card__svg"
                />
              </div>
              <span className="cloud-impact-card__tag">FRONTIER HEALTHCARE</span>
              <h3 className="cloud-impact-card__heading">Cancer research</h3>
              <p className="cloud-impact-card__desc">
                More compute for researchers working to understand breast and ovarian cancer in patients.
              </p>
            </div>

            {/* Card 2: University Students */}
            <div className="cloud-impact-card">
              <div className="cloud-impact-card__preview">
                <ImageWithFallback
                  src="/assets/Craftly_Cloud/university-layers.svg"
                  alt="University students machine learning layers"
                  width={240}
                  height={150}
                  className="cloud-impact-card__svg"
                />
              </div>
              <span className="cloud-impact-card__tag">ACADEMIC ADVANCEMENT</span>
              <h3 className="cloud-impact-card__heading">University students</h3>
              <p className="cloud-impact-card__desc">
                Empowering students to train machine learning models on local hardware without cloud costs.
              </p>
            </div>

            {/* Card 3: Young Entrepreneurs */}
            <div className="cloud-impact-card">
              <div className="cloud-impact-card__preview">
                <ImageWithFallback
                  src="/assets/Craftly_Cloud/young-entrepreneurs.svg"
                  alt="Young entrepreneurs lightbulb sprout"
                  width={240}
                  height={150}
                  className="cloud-impact-card__svg"
                />
              </div>
              <span className="cloud-impact-card__tag">TECH INDEPENDENCE</span>
              <h3 className="cloud-impact-card__heading">Young entrepreneurs</h3>
              <p className="cloud-impact-card__desc">
                Helping young founders build and launch products without being starved of compute access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Be Part of the Network */}
      <section className="cloud-network-section">
        <div className="cloud-network-container">
          <div className="cloud-network__header">
            <span className="cloud-section-tag">JOIN THE MOVEMENT</span>
            <h2 className="cloud-network__title">Be Part of the Network</h2>
            <p className="cloud-network__desc">
              Turn your idle compute into Bangladesh&apos;s future.<br />
              We match the compute you already have.
            </p>
          </div>

          <div className="cloud-network__steps">
            <div className="cloud-step-item">
              <span className="cloud-step-item__number">01</span>
              <h3 className="cloud-step-item__title">Install Craftly</h3>
              <p className="cloud-step-item__desc">
                Download our app for your computer.
              </p>
            </div>

            <div className="cloud-step-item">
              <span className="cloud-step-item__number">02</span>
              <h3 className="cloud-step-item__title">Sign in with Google</h3>
              <p className="cloud-step-item__desc">
                Connect securely in seconds.
              </p>
            </div>

            <div className="cloud-step-item">
              <span className="cloud-step-item__number">03</span>
              <h3 className="cloud-step-item__title">Connect your computer</h3>
              <p className="cloud-step-item__desc">
                Join the network &amp; start contributing.
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
                Building Bangladesh&apos;s sovereign compute foundation.
              </p>
            </div>

            <div className="cloud-footer__col">
              <h4 className="cloud-footer__col-title">LEARN MORE</h4>
              <ul className="cloud-footer__links">
                <li>
                  <Link href="/about" className="cloud-footer__link">
                    Our vision and mission
                  </Link>
                </li>
                <li>
                  <Link href="/contact?topic=universities" className="cloud-footer__link">
                    For universities
                  </Link>
                </li>
                <li>
                  <Link href="/contact?topic=grants" className="cloud-footer__link">
                    Research funding &amp; grants
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cloud-footer__col">
              <h4 className="cloud-footer__col-title">SUPPORT</h4>
              <ul className="cloud-footer__links">
                <li>
                  <Link href="/download" className="cloud-footer__link">
                    Connect your computer
                  </Link>
                </li>
                <li>
                  <Link href="/contact?topic=compute" className="cloud-footer__link">
                    Request compute
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
            <span>© 2026 Craftly</span>
            <span>Proudly engineered in Bangladesh</span>
            <div className="cloud-footer__legal">
              <Link href="/privacy" className="cloud-footer__link">
                Terms &amp; Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
