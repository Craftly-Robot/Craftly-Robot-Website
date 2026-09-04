import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../data/navigation";
import DropdownIcon from "../ui/DropdownIcon";
import ImageWithFallback from "../common/ImageWithFallback";
import { useDesktopNav } from "../../hooks/useDesktopNav";
import { useMobileNav } from "../../hooks/useMobileNav";
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
  } = useDesktopNav();

  const {
    mobileOpen,
    mobileSection,
    toggleMobile,
    toggleSection,
    closeMobile,
  } = useMobileNav();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        {/* Left Side: Logo + Nav */}
        <div className="navbar__left">
          <Link to="/" className="navbar__logo" aria-label="Craftly Home">
            <div className="navbar__logo-container">
              <ImageWithFallback
                src="/assets/brand/craftly-wordmark-intro.svg"
                alt="Craftly"
                className="navbar__logo-img"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="navbar__nav"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`navbar__nav-item ${activeDropdown === item.label ? "navbar__nav-item--active navbar__nav-item--open" : ""}`}
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

        {/* Mobile Toggle */}
        <div className="navbar__right">
          <Link to="/download" className="navbar__download">
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
                        Explore our <br /> next generation <br /> products
                      </>
                    )}
                    {activeNavConfig.label === "Use Cases" && (
                      <>
                        Discover solutions <br /> for your specific <br /> needs
                      </>
                    )}
                    {activeNavConfig.label === "Resources" && (
                      <>
                        Everything you <br /> need to stay <br /> up-to-date and <br /> get help
                      </>
                    )}
                  </h2>
                  <Link
                    to={activeNavConfig.items?.[0]?.route || "/"}
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
                        to={child.route}
                        className="dropdown-item"
                        style={{ "--item-index": idx } as React.CSSProperties}
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="dropdown-item__content">
                          <div className="dropdown-item__title">
                            {child.title}
                            {activeNavConfig.label === "Resources" &&
                              child.title === "Documentation" && (
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
                              )}
                          </div>
                        </div>
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
                      to={child.route}
                      className="mobile-nav__item"
                      onClick={closeMobile}
                    >
                      <div className="mobile-nav__item-content">
                        <div className="mobile-nav__item-title">
                          {child.title}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <Link
          to="/download"
          className="mobile-nav__download"
          onClick={closeMobile}
        >
          Download
        </Link>
      </nav>
    </header>
  );
}
