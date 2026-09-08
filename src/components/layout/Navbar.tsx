"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "../../data/navigation";
import { useDesktopNav } from "../../hooks/useDesktopNav";
import { useMobileNav } from "../../hooks/useMobileNav";
import ImageWithFallback from "../common/ImageWithFallback";
import DropdownIcon from "../ui/DropdownIcon";
import ThemeToggle from "../ui/ThemeToggle";
import "./Navbar.css";

/* ── Icons ── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const {
    activeDropdown,
    setActiveDropdown,
    dropdownHeight,
    animationKey,
    navRef,
    megaRef,
    activeNavConfig,
    toggleDropdown,
    handleMouseEnter,
    handleDropdownMouseEnter,
    handleMouseLeave,
    handleDropdownKeyDown,
  } = useDesktopNav();

  const { mobileOpen, mobileSection, toggleMobile, toggleSection, closeMobile } = useMobileNav();

  const [scrolled, setScrolled] = useState(false);

  const isActive = (item: (typeof navigation)[number]) => {
    return item.items?.some((child) => pathname.startsWith(child.route)) ?? false;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="banner">
      <div className="navbar__inner">
        {/* Left Side: Logo + Nav */}
        <div className="navbar__left">
          <Link href="/" className="navbar__logo" aria-label="Craftly Home">
            <div className="navbar__logo-container">
              <ImageWithFallback
                src="/assets/brand/craftly-wordmark-intro.svg"
                alt="Craftly"
                className="navbar__logo-img"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`navbar__nav-item ${activeDropdown === item.label ? "navbar__nav-item--active navbar__nav-item--open" : ""} ${isActive(item) ? "navbar__nav-item--current" : ""}`}
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="navbar__nav-chevron" />
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Center: Search */}
        <div className="navbar__center">
          <button
            className="navbar__search-trigger"
            onClick={() => {
              document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
            }}
            aria-label="Search (Cmd+K)"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="16"
              height="16"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="navbar__search-text">Search...</span>
            <span className="navbar__search-kbd">⌘K</span>
          </button>
        </div>

        {/* Right Side: CTA */}
        <div className="navbar__right">
          <ThemeToggle />
          <Link
            href="https://sandbox-workspace.craftlyrobot.com/"
            className="navbar__join"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </Link>
          <Link href="/download" className="navbar__download">
            Download
            <svg
              className="navbar__download-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </Link>

          <button
            className={`navbar__mobile-toggle ${mobileOpen ? "navbar__mobile-toggle--open" : ""}`}
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="navbar__mobile-toggle-lines">
              <span className="navbar__mobile-toggle-line" />
              <span className="navbar__mobile-toggle-line" />
              <span className="navbar__mobile-toggle-line" />
            </div>
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`navbar__overlay ${activeDropdown ? "navbar__overlay--visible" : ""}`}
        onClick={() => setActiveDropdown(null)}
        aria-hidden="true"
      />

      {/* Unified Desktop Mega Dropdown */}
      <div
        className="navbar__dropdown-wrapper"
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleDropdownKeyDown}
      >
        <div
          className={`navbar__dropdown ${activeDropdown ? "navbar__dropdown--visible" : ""}`}
          style={dropdownHeight ? { height: `${dropdownHeight}px` } : undefined}
          role="menu"
        >
          <div ref={megaRef} className="navbar__dropdown-inner">
            {activeNavConfig && (
              <div className="navbar__mega" key={`${activeNavConfig.label}-${animationKey}`}>
                <div className="navbar__mega-left">
                  <h2 className="navbar__mega-title">
                    {activeNavConfig.label === "Products" && (
                      <>
                        Build with <br /> intelligent <br /> systems
                      </>
                    )}
                    {activeNavConfig.label === "Vision" && (
                      <>
                        The Craftly <br /> plan for the <br /> future of work
                      </>
                    )}
                    {activeNavConfig.label === "Docs" && (
                      <>
                        Learn how <br /> to use <br /> Craftly
                      </>
                    )}
                  </h2>
                  <Link
                    href={activeNavConfig.items?.[0]?.route || "/"}
                    className="navbar__mega-btn"
                    onClick={() => setActiveDropdown(null)}
                  >
                    See overview
                  </Link>
                </div>

                <div className="navbar__mega-right">
                  {activeNavConfig.label === "Products" && (
                    <div className="navbar__mega-list-title">Products</div>
                  )}
                  <div className="navbar__mega-grid">
                    {activeNavConfig.items?.map((child, idx) => (
                      <Link
                        key={child.route}
                        href={child.route}
                        className="dropdown-item"
                        style={{ "--item-index": idx } as React.CSSProperties}
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="dropdown-item__content">
                          <div className="dropdown-item__title">{child.title}</div>
                          {child.description && (
                            <div className="dropdown-item__desc">{child.description}</div>
                          )}
                        </div>
                        <span className="dropdown-item__arrow">
                          <svg
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <button className="mobile-nav__close" onClick={closeMobile} aria-label="Close menu">
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        </button>
        {navigation.map((item) => (
          <div
            key={item.label}
            className={`mobile-nav__section ${mobileSection === item.label ? "mobile-nav__section--open" : ""}`}
          >
            <button
              className="mobile-nav__section-toggle"
              onClick={() => toggleSection(item.label)}
              aria-expanded={mobileSection === item.label}
            >
              {item.label}
              <DropdownIcon isOpen={mobileSection === item.label} size={20} />
            </button>
            {item.items && (
              <div className="mobile-nav__items">
                <div className="mobile-nav__items-inner">
                  {item.items.map((child) => (
                    <Link
                      key={child.route}
                      href={child.route}
                      className="mobile-nav__item"
                      onClick={closeMobile}
                    >
                      <div className="mobile-nav__item-content">
                        <div className="mobile-nav__item-title">{child.title}</div>
                        {child.description && (
                          <div className="mobile-nav__item-desc">{child.description}</div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <a
          href="https://sandbox-workspace.craftlyrobot.com/"
          className="mobile-nav__download mobile-nav__join"
          onClick={closeMobile}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us
        </a>
        <Link href="/download" className="mobile-nav__download" onClick={closeMobile}>
          Download
        </Link>
      </nav>
    </header>
  );
}
