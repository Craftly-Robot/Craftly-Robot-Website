import { useState, useEffect } from 'react';

export function useMobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
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

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const toggleSection = (label: string) => {
    setMobileSection((prev) => prev === label ? null : label);
  };

  const closeMobile = () => setMobileOpen(false);

  return {
    mobileOpen,
    mobileSection,
    toggleMobile,
    toggleSection,
    closeMobile,
  };
}
