import { useState, useEffect, useRef, useCallback } from 'react';

export function useDesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const hoverLockoutRef = useRef<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);

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
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown((prev) => {
      if (prev === label) {
        hoverLockoutRef.current = true;
        setTimeout(() => {
          hoverLockoutRef.current = false;
        }, 300);
        return null;
      }
      return label;
    });
  }, []);

  const handleMouseEnter = useCallback((label: string) => {
    if (hoverLockoutRef.current) {
      return;
    }
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

  return {
    activeDropdown,
    setActiveDropdown,
    navRef,
    toggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
  };
}
