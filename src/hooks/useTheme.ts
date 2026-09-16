"use client";

import { useSyncExternalStore, useCallback, useEffect } from "react";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "craftly-theme";
const THEME_EVENT = "craftly-theme-change";

export function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    /* ignore storage errors */
  }

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }

  return "light";
}

function getSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  const current = document.documentElement.getAttribute("data-theme");
  if (current === "light" || current === "dark") {
    return current;
  }
  return getInitialTheme();
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemChange = () => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (!saved) {
        document.documentElement.setAttribute(
          "data-theme",
          mediaQuery.matches ? "dark" : "light",
        );
        callback();
      }
    } catch {
      callback();
    }
  };

  mediaQuery.addEventListener("change", handleSystemChange);

  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
    mediaQuery.removeEventListener("change", handleSystemChange);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (typeof document !== "undefined" && !document.documentElement.getAttribute("data-theme")) {
      const initial = getInitialTheme();
      document.documentElement.setAttribute("data-theme", initial);
      window.dispatchEvent(new CustomEvent(THEME_EVENT));
    }
  }, []);

  const applyTheme = useCallback((newTheme: Theme, persist = true) => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
    if (persist && typeof window !== "undefined") {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      } catch {
        /* ignore */
      }
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent(THEME_EVENT, { detail: { theme: newTheme } }),
      );
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  }, [theme, applyTheme]);

  return {
    theme,
    toggleTheme,
    setTheme: applyTheme,
    isDark: theme === "dark",
  };
}
