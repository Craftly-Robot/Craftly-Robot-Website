import Link from "next/link";
import ImageWithFallback from "../common/ImageWithFallback";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        {/* Top: Brand + Tagline */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            <ImageWithFallback
              className="footer__wordmark"
              src="/assets/brand/craftly-wordmark.svg"
              alt="Craftly"
            />
          </Link>
          <p className="footer__tagline">
            The operating system for intelligent organizations.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__column-title">Product</h3>
            <Link href="/products/workspace" className="footer__link">
              Workspace
            </Link>
            <Link href="/products/robot" className="footer__link">
              Robot
            </Link>
            <Link href="/download" className="footer__link">
              Download
            </Link>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Resources</h3>
            <Link href="/resources/documentation" className="footer__link">
              Documentation
            </Link>
            <Link href="/resources/changelog" className="footer__link">
              Changelog
            </Link>
            <Link href="/resources/releases" className="footer__link">
              Releases
            </Link>
            <Link href="/resources/documentation/faq" className="footer__link">
              FAQ
            </Link>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Company</h3>
            <Link href="/vision" className="footer__link">
              Vision
            </Link>
            <Link href="/about" className="footer__link">
              About
            </Link>
            <Link href="/use-cases" className="footer__link">
              Use Cases
            </Link>
            <Link href="/get-involved" className="footer__link">
              Get Involved
            </Link>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Connect</h3>
            <a
              href="https://github.com/Craftly-Robot"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link href="/resources/support" className="footer__link">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Craftly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
