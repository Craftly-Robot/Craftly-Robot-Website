"use client";

import Breadcrumbs from "../components/ui/Breadcrumbs";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "./products/ProductPage.css";

export default function ContactPage() {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef}>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <div className="container">
        <section className="product-hero-clean">
          <h1 className="product-hero-clean__title">Get in touch</h1>
          <p className="product-hero-clean__desc">
            Have questions, feedback, or want to partner with us? We&apos;d love to hear from you.
          </p>
        </section>
      </div>

      <div className="product-showcase-large product-showcase-large--no-margin">
        <div className="section-content--wide">
          <div className="contact-grid">
            <div className="contact-card reveal">
              <div className="contact-card__icon">📧</div>
              <h3 className="contact-card__title">Email Us</h3>
              <p className="contact-card__desc">
                For general inquiries, support, or partnership opportunities.
              </p>
              <a href="mailto:hello@craftlyrobot.com" className="contact-card__link">
                hello@craftlyrobot.com
              </a>
            </div>

            <div className="contact-card reveal reveal-delay-1">
              <div className="contact-card__icon">💬</div>
              <h3 className="contact-card__title">Join the Community</h3>
              <p className="contact-card__desc">Connect with other users and the Craftly team.</p>
              <a
                href="https://sandbox-workspace.craftlyrobot.com/"
                className="contact-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Workspace →
              </a>
            </div>

            <div className="contact-card reveal reveal-delay-2">
              <div className="contact-card__icon">🐛</div>
              <h3 className="contact-card__title">Report Issues</h3>
              <p className="contact-card__desc">
                Found a bug or have a feature request? Let us know.
              </p>
              <a
                href="https://github.com/Craftly-Robot/Craftly-Robot-Website/issues"
                className="contact-card__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Issues →
              </a>
            </div>
          </div>

          <div className="contact-form-section reveal">
            <h2 className="explore-features-section__title">Send us a message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="How can we help?" />
              </div>
              <div className="contact-form__field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us more..." />
              </div>
              <button type="submit" className="btn-product-download">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
