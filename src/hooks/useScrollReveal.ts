import { useEffect, useRef, useCallback } from 'react';
import { ANIMATION } from '../utils/animation';

/**
 * IntersectionObserver-based scroll reveal hook.
 * Adds 'revealed' class to elements with 'reveal' class when they enter the viewport.
 */
export function useScrollReveal(
  options?: IntersectionObserverInit,
  deps: React.DependencyList = []
) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: ANIMATION.REVEAL_THRESHOLD,
      rootMargin: ANIMATION.REVEAL_ROOT_MARGIN,
      ...options,
    });

    const elements = container.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [handleIntersection, options, ...deps]);

  return containerRef;
}
