"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { navigation } from "../data/navigation";

export function useDesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [displayedDropdown, setDisplayedDropdown] = useState<string | null>(
    null,
  );
  const [dropdownHeight, setDropdownHeight] = useState<number | undefined>(
    undefined,
  );
  const [animationKey, setAnimationKey] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const hoverLockoutRef = useRef<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const closeCleanupRef = useRef<number | null>(null);
  const pathname = usePathname() ?? "/";

  // Close on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setActiveDropdown(null);
    setDisplayedDropdown(null);
    setDropdownHeight(undefined);
  }

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Keyboard navigation within dropdown
  const handleDropdownKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!activeDropdown) return;
      const focusableSelector =
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const mega = megaRef.current;
      if (!mega) return;
      const focusable = Array.from(
        mega.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const currentIndex = focusable.indexOf(
        document.activeElement as HTMLElement,
      );

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          focusable[currentIndex + 1]?.focus();
          break;
        case "ArrowUp":
          e.preventDefault();
          focusable[currentIndex - 1]?.focus();
          break;
        case "Tab":
          if (e.shiftKey && currentIndex === 0) {
            setActiveDropdown(null);
          } else if (!e.shiftKey && currentIndex === focusable.length - 1) {
            setActiveDropdown(null);
          }
          break;
      }
    },
    [activeDropdown],
  );

  const activeNavConfig = navigation.find(
    (item) => item.label === (activeDropdown || displayedDropdown),
  );

  // Measure dropdown height
  useLayoutEffect(() => {
    if (activeDropdown && megaRef.current) {
      setDropdownHeight(megaRef.current.offsetHeight);
    }
  }, [activeDropdown, activeNavConfig, animationKey]);

  // Observe content resizing
  useEffect(() => {
    if (!activeDropdown || !megaRef.current) return;
    const ro = new ResizeObserver(() => {
      if (megaRef.current) {
        setDropdownHeight(megaRef.current.offsetHeight);
      }
    });
    ro.observe(megaRef.current);
    return () => ro.disconnect();
  }, [activeDropdown, activeNavConfig]);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown((prev) => {
      if (prev === label) {
        hoverLockoutRef.current = true;
        setTimeout(() => {
          hoverLockoutRef.current = false;
        }, 300);
        if (closeCleanupRef.current) {
          clearTimeout(closeCleanupRef.current);
        }
        closeCleanupRef.current = window.setTimeout(() => {
          setDisplayedDropdown(null);
          setDropdownHeight(undefined);
        }, 300);
        return null;
      }
      if (closeCleanupRef.current) {
        clearTimeout(closeCleanupRef.current);
        closeCleanupRef.current = null;
      }
      setAnimationKey((k) => k + 1);
      setDisplayedDropdown(label);
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
    if (closeCleanupRef.current) {
      clearTimeout(closeCleanupRef.current);
      closeCleanupRef.current = null;
    }
    setDisplayedDropdown(label);
    setActiveDropdown((prev) => {
      if (prev !== label) {
        setAnimationKey((k) => k + 1);
      }
      return label;
    });
  }, []);

  const handleDropdownMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (closeCleanupRef.current) {
      clearTimeout(closeCleanupRef.current);
      closeCleanupRef.current = null;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
      if (closeCleanupRef.current) {
        clearTimeout(closeCleanupRef.current);
      }
      closeCleanupRef.current = window.setTimeout(() => {
        setDisplayedDropdown(null);
        setDropdownHeight(undefined);
      }, 300);
    }, 180);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (closeCleanupRef.current) clearTimeout(closeCleanupRef.current);
    };
  }, []);

  return {
    activeDropdown,
    setActiveDropdown,
    displayedDropdown,
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
  };
}
