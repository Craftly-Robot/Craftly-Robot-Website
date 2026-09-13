import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useMobileNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const location = useLocation();

  // Close on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileOpen(false);
    setMobileSection(null);
  }

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  const toggleSection = (label: string) =>
    setMobileSection((prev) => (prev === label ? null : label));

  const closeMobile = () => setMobileOpen(false);

  return {
    mobileOpen,
    mobileSection,
    toggleMobile,
    toggleSection,
    closeMobile,
  };
}
