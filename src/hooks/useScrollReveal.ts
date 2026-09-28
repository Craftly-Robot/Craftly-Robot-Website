"use client";

import { useCallback, useEffect, useRef } from "react";
import { ANIMATION } from "../utils/animation";

export function useScrollReveal(
  options?: IntersectionObserverInit,
  deps: React.DependencyList = [],
) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries, obs) => handleIntersection(entries, obs),
      {
        threshold: ANIMATION.REVEAL_THRESHOLD,
        rootMargin: ANIMATION.REVEAL_ROOT_MARGIN,
        ...options,
      },
    );

    const elements = Array.from(
      container.querySelectorAll(".reveal:not(.revealed)"),
    );
    if (
      container.classList.contains("reveal") &&
      !container.classList.contains("revealed")
    ) {
      elements.push(container);
    }
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleIntersection, options, ...deps]);

  return containerRef;
}
