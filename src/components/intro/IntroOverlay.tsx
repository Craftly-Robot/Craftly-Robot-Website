"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import "./IntroOverlay.css";

/* Beat timings (ms), measured from the start of the effect.
   See the timeline in IntroOverlay.css. */
const FLIGHT_START = 2100;
const FLIGHT_DURATION = 1000;

export default function IntroOverlay() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);
  const markRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (pathname !== "/") {
      document.documentElement.classList.remove("intro-hold", "intro-active");
      return;
    }

    // If intro-active is not on html (e.g. non-home page or reduced motion), no animation needs to run
    if (!document.documentElement.classList.contains("intro-active")) {
      return;
    }

    const timers: number[] = [];
    let finished = false;

    /* Release the hero cascade and send the wordmark to its header slot. */
    const takeOff = () => {
      document.documentElement.classList.remove("intro-hold");

      const mark = markRef.current;
      const target = document.querySelector(".navbar__logo-img");
      if (!mark || !target) return;

      const from = mark.getBoundingClientRect();
      const to = target.getBoundingClientRect();
      if (!from.height || !to.height) return;

      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);
      const scale = to.height / from.height;

      /* Drop the settle animation and flush, so its forwards-fill value becomes
         the transition's starting point instead of overriding the transform. */
      mark.style.animation = "none";
      mark.style.opacity = "1";
      void mark.offsetWidth;
      mark.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`;
    };

    /* Land: hand off to the real header logo and unmount. */
    const finish = () => {
      if (finished) return;
      finished = true;
      timers.forEach(clearTimeout);
      document.documentElement.classList.remove("intro-hold", "intro-active");
      setDismissed(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("craftly-intro-done"));
      }
    };

    timers.push(window.setTimeout(takeOff, FLIGHT_START));
    timers.push(window.setTimeout(finish, FLIGHT_START + FLIGHT_DURATION));

    /* Never trap the visitor: any input ends the intro immediately. */
    const events = ["keydown", "pointerdown", "wheel"] as const;
    events.forEach((e) => window.addEventListener(e, finish, { passive: true }));

    return () => {
      timers.forEach(clearTimeout);
      events.forEach((e) => window.removeEventListener(e, finish));
      document.documentElement.classList.remove("intro-hold", "intro-active");
    };
  }, [pathname]);

  if (dismissed || pathname !== "/") return null;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__sheet" />
      <img
        ref={markRef}
        className="intro__mark"
        src="/assets/brand/craftly-wordmark-intro.svg"
        alt=""
      />
    </div>
  );
}
