import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import './Navbar.css';

/* ── Icons ── */
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4.5L6 7.5L9 4.5" />
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

  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar__inner">
        {/* Left Side: Logo + Nav */}
        <div className="navbar__left">
          <Link to="/" className="navbar__logo" aria-label="Craftly Home">
            <div className="navbar__logo-container">
              <span className="navbar__logo-text">Craftly</span>
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
                className={`navbar__nav-item ${activeDropdown === item.label ? 'navbar__nav-item--active navbar__nav-item--open' : ''}`}
                onClick={() => toggleDropdown(item.label)}
                aria-expanded={activeDropdown === item.label}
                aria-haspopup="true"
              >
                {item.label}
                <ChevronDown className="navbar__nav-chevron" />
              </button>

              {item.items && (
                <div className="navbar__dropdown-wrapper">
                  <div
                    className={`navbar__dropdown ${activeDropdown === item.label ? 'navbar__dropdown--visible' : ''}`}
                    role="menu"
                  >
                    <div className="navbar__mega">
                      <div className="navbar__mega-left">
                        <h2 className="navbar__mega-title">
                          {item.label === 'Products' && 'Explore our next generation products'}
                          {item.label === 'Use Cases' && 'Discover solutions for your specific needs'}
                          {item.label === 'Resources' && 'Everything you need to stay up-to-date and get help'}
                        </h2>
                        <Link 
                          to={item.items[0]?.route || '/'} 
                          className="navbar__mega-btn"
                          onClick={() => setActiveDropdown(null)}
                        >
                          See overview
                        </Link>
                      </div>
                      
                      <div className="navbar__mega-right">
                        {item.label === 'Products' && (
                          <div className="navbar__mega-list-title">Products</div>
                        )}
                        <div className="navbar__mega-grid">
                          {item.items.map((child) => (
                            <Link
                              key={child.route}
                              to={child.route}
                              className="dropdown-item"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.label === 'Products' && (
                                <div className="dropdown-item__icon">
                                  <DropdownIcon icon={child.icon} />
                                </div>
                              )}
                              <div className="dropdown-item__content">
                                <div className="dropdown-item__title">
                                  {child.title} 
                                  {item.label === 'Resources' && child.title === 'Documentation' && (
                                    <span className="dropdown-item__arrow">
                                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        </div>

        {/* Download Button */}
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
        </div>

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
