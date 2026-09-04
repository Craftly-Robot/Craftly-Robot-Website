import { useEffect, useRef, useState } from "react";
import "./IntroOverlay.css";

const INTRO_KEY = "craftly-intro-seen";

/* Beat timings (ms), measured from the moment the wordmark image has decoded.
   See the timeline in IntroOverlay.css. */
const FLIGHT_START = 2100;
const FLIGHT_DURATION = 1000;

function seenThisSession(): boolean {
  try {
    return window.sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen(): void {
  try {
    window.sessionStorage.setItem(INTRO_KEY, "1");
  } catch {
    /* private mode — intro simply replays next load */
  }
}

/*
 * ponytail: module-level side effect so the <html> classes land before the first
 * paint. A useEffect runs after paint and the hero cascade would flash a frame.
 * The alternative is an inline script in index.html, which splits the logic
 * across two files.
 */
const shouldRun =
  typeof window !== "undefined" &&
  window.location.pathname === "/" &&
  !seenThisSession() &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (shouldRun) {
  document.documentElement.classList.add("intro-active", "intro-hold");
}

export default function IntroOverlay() {
  const [running, setRunning] = useState(shouldRun);
  const markRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!shouldRun) return;

    /* The module-level add covers the first paint; StrictMode's cleanup strips
       the classes, so re-assert them on every effect run. */
    document.documentElement.classList.add("intro-active", "intro-hold");

    const timers: number[] = [];
    let finished = false;
    let started = false;

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
      mark.style.opacity = "1"; /* the base rule is opacity: 0 */
      void mark.offsetWidth;
      mark.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${scale})`;
    };

    /* Land: hand off to the real header logo and unmount. */
    const finish = () => {
      if (finished) return;
      finished = true;
      timers.forEach(clearTimeout);
      document.documentElement.classList.remove("intro-hold", "intro-active");
      markSeen();
      setRunning(false);
    };

    /* Run the fade only once there are pixels to fade: on a cold tab the SVG
       decodes well after mount, and an earlier start shows it mid-animation. */
    const start = () => {
      if (started || finished) return;
      started = true;
      markRef.current?.classList.add("intro__mark--in");
      timers.push(window.setTimeout(takeOff, FLIGHT_START));
      timers.push(window.setTimeout(finish, FLIGHT_START + FLIGHT_DURATION));
    };

    const mark = markRef.current;
    if (mark?.complete) start();
    else mark?.addEventListener("load", start, { once: true });
    /* Decoding should never strand the visitor on a blank sheet. */
    timers.push(window.setTimeout(start, 2000));

    /* Never trap the visitor: any input ends the intro immediately. */
    const events = ["keydown", "pointerdown", "wheel"] as const;
    events.forEach((e) => window.addEventListener(e, finish, { passive: true }));

    return () => {
      timers.forEach(clearTimeout);
      mark?.removeEventListener("load", start);
      events.forEach((e) => window.removeEventListener(e, finish));
      document.documentElement.classList.remove("intro-hold", "intro-active");
    };
  }, []);

  if (!running) return null;

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
