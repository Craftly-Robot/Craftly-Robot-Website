import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { brandAssets } from '../../utils/brandAssets';
import './Navbar.css';

/* ── Icons ── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4.5L6 7.5L9 4.5" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/* ── Icon map for dropdown items ── */
function DropdownIcon({ icon }: { icon: string }) {
  const icons: Record<string, string> = {
    workspace: '⬡',
    robot: '◈',
    operations: '⊞',
    agents: '⟐',
    ai: '◉',
    docs: '⊟',
    blog: '⊡',
    support: '◎',
    releases: '⬢',
    press: '⊕',
  };
  return <span>{icons[icon] || '○'}</span>;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Prevent body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  }, []);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Craftly Home">
          <img
            src={brandAssets.logo}
            alt="Craftly"
            className="navbar__logo-img"
            width="120"
            height="28"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <div key={item.label} style={{ position: 'relative' }}>
              <button
                className={`navbar__nav-item ${activeDropdown === item.label ? 'navbar__nav-item--active navbar__nav-item--open' : ''}`}
                onClick={() => toggleDropdown(item.label)}
                aria-expanded={activeDropdown === item.label}
                aria-haspopup="true"
              >
                {item.label}
                <ChevronDown className="navbar__nav-chevron" />
              </button>

              {item.items && (
                <div
                  className={`navbar__dropdown ${activeDropdown === item.label ? 'navbar__dropdown--visible' : ''}`}
                  role="menu"
                >
                  {item.items.map((child) => (
                    <Link
                      key={child.route}
                      to={child.route}
                      className="dropdown-item"
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="dropdown-item__icon">
                        <DropdownIcon icon={child.icon} />
                      </div>
                      <div className="dropdown-item__content">
                        <div className="dropdown-item__title">{child.title}</div>
                        <div className="dropdown-item__desc">{child.description}</div>
                      </div>
                      <ArrowRight className="dropdown-item__arrow" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Download Button */}
        <Link to="/download" className="navbar__download">
          Download
        </Link>

        {/* Mobile Toggle */}
        <button
          className={`navbar__mobile-toggle ${mobileOpen ? 'navbar__mobile-toggle--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <div className="navbar__mobile-toggle-lines">
            <span className="navbar__mobile-toggle-line" />
            <span className="navbar__mobile-toggle-line" />
            <span className="navbar__mobile-toggle-line" />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`mobile-nav ${mobileOpen ? 'mobile-nav--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <div
            key={item.label}
            className={`mobile-nav__section ${mobileSection === item.label ? 'mobile-nav__section--open' : ''}`}
          >
            <button
              className="mobile-nav__section-toggle"
              onClick={() =>
                setMobileSection((prev) =>
                  prev === item.label ? null : item.label
                )
              }
              aria-expanded={mobileSection === item.label}
            >
              {item.label}
              <ChevronDown className="mobile-nav__section-chevron" />
            </button>
            {item.items && (
              <div className="mobile-nav__items">
                {item.items.map((child) => (
                  <Link
                    key={child.route}
                    to={child.route}
                    className="mobile-nav__item"
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link to="/download" className="mobile-nav__download" onClick={() => setMobileOpen(false)}>
          Download
        </Link>
      </nav>
    </header>
  );
}
