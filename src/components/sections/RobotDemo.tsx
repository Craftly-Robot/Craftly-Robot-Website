import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { robotDemo } from "../../data/robotDemo";
import "./RobotDemo.css";

function Connection({
  branch = false,
  returning = false,
}: {
  branch?: boolean;
  returning?: boolean;
}) {
  const paths = branch
    ? returning
      ? [
          "M100 0 V16 Q100 32 116 32 H184 Q200 32 200 48 V64",
          "M300 0 V16 Q300 32 284 32 H216 Q200 32 200 48 V64",
        ]
      : [
          "M200 0 V16 Q200 32 184 32 H116 Q100 32 100 48 V64",
          "M200 0 V16 Q200 32 216 32 H284 Q300 32 300 48 V64",
        ]
    : ["M200 0 V64"];
  return (
    <svg
      className="robot-demo__connection"
      viewBox="0 0 400 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <g key={path}>
          <path className="robot-demo__line" d={path} />
          <path
            className={`robot-demo__signal robot-demo__signal--${returning ? "return" : branch ? "discovery" : "request"}`}
            d={path}
            pathLength="100"
          />
        </g>
      ))}
    </svg>
  );
}

export default function RobotDemo() {
  const reducedMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const animations = useRef<Animation[]>([]);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = robotDemo.scenarios[scenarioIndex];
  const [visible, setVisible] = useState(false);
  const [tabVisible, setTabVisible] = useState(
    () => typeof document === "undefined" || !document.hidden,
  );

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    const handleVisibility = () => setTabVisible(!document.hidden);
    observer.observe(panel);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || reducedMotion) return;
    const timing = robotDemo.timing;
    const discovery = timing.request;
    const response = discovery + timing.discovery;
    const approval = response + timing.response;
    const reset = approval + timing.approval;
    const duration = reset + timing.reset;
    const tokens = getComputedStyle(panel);
    const border = tokens.getPropertyValue("--color-border").trim();
    const ink = tokens.getPropertyValue("--color-text").trim();
    const frame = (time: number, values: Keyframe): Keyframe => ({
      ...values,
      offset: time / duration,
    });
    const add = (selector: string, frames: Keyframe[]) => {
      panel.querySelectorAll(selector).forEach((element) => {
        const animation = element.animate(frames, {
          duration,
          iterations: 1,
          fill: "both",
          easing: "linear",
        });
        animation.pause();
        animations.current.push(animation);
      });
    };
    const reveal = (start: number) => [
      frame(0, { opacity: 0, transform: "translateY(4px)" }),
      frame(start, {
        opacity: 0,
        transform: "translateY(4px)",
        easing: "ease-out",
      }),
      frame(start + 450, { opacity: 1, transform: "translateY(0)" }),
      frame(reset, { opacity: 1, transform: "translateY(0)" }),
      frame(duration, { opacity: 0, transform: "translateY(4px)" }),
    ];
    const signal = (start: number, end: number) => [
      frame(0, { opacity: 0, strokeDashoffset: 100 }),
      frame(start, { opacity: 0, strokeDashoffset: 100 }),
      frame(start + 200, { opacity: 1, strokeDashoffset: 95 }),
      frame(end - 200, { opacity: 1, strokeDashoffset: 5 }),
      frame(end, { opacity: 0, strokeDashoffset: 0 }),
      frame(duration, { opacity: 0, strokeDashoffset: 0 }),
    ];
    add(".robot-demo__request", reveal(0));
    add(".robot-demo__peers", reveal(0));
    add(".robot-demo__signal--request", signal(600, discovery));
    add(".robot-demo__signal--discovery", signal(discovery, response));
    add(".robot-demo__signal--return", signal(response, approval - 700));
    add(".robot-demo__result-copy", reveal(approval - 700));
    add(".robot-demo__approval", reveal(approval));
    add(".robot-demo__peer", [
      frame(0, { borderColor: border }),
      frame(response - 600, { borderColor: border }),
      frame(response, { borderColor: ink }),
      frame(approval - 700, { borderColor: border }),
      frame(duration, { borderColor: border }),
    ]);
    add(".robot-demo__agent", [
      frame(0, { borderColor: border }),
      frame(discovery - 400, { borderColor: border }),
      frame(discovery, { borderColor: ink }),
      frame(approval, { borderColor: ink }),
      frame(reset, { borderColor: border }),
      frame(duration, { borderColor: border }),
    ]);
    const clock = animations.current[0];
    clock.onfinish = () =>
      setScenarioIndex((current) => (current + 1) % robotDemo.scenarios.length);
    return () => {
      clock.onfinish = null;
      animations.current.forEach((animation) => animation.cancel());
      animations.current = [];
    };
  }, [reducedMotion, scenarioIndex]);

  useEffect(() => {
    animations.current.forEach((animation) => {
      if (visible && tabVisible && !reducedMotion) animation.play();
      else animation.pause();
    });
  }, [visible, tabVisible, reducedMotion, scenarioIndex]);

  return (
    <div
      className="robot-demo"
      data-scenario={scenario.id}
      ref={panelRef}
      role="img"
      aria-label={robotDemo.description}
    >
      <div className="robot-demo__header" aria-hidden="true">
        <span className="robot-demo__name">Craftly Robot</span>
        <span className="robot-demo__label">{robotDemo.label}</span>
      </div>
      <div className="robot-demo__body" aria-hidden="true">
        <p className="robot-demo__title">{robotDemo.title}</p>
        <div className="robot-demo__network">
          <div className="robot-demo__request">{scenario.request}</div>
          <Connection />
          <div className="robot-demo__agent">
            <span className="robot-demo__agent-mark">✳</span>
            {robotDemo.agent}
          </div>
          <Connection branch />
          <div className="robot-demo__peers">
            {scenario.peers.map((peer) => (
              <div className="robot-demo__peer" key={peer}>
                <span className="robot-demo__peer-dot" />
                {peer}
              </div>
            ))}
          </div>
          <Connection branch returning />
          <div className="robot-demo__result">
            <div className="robot-demo__result-copy">
              <p>{scenario.result}</p>
              <span>{scenario.availability}</span>
            </div>
            <div className="robot-demo__approval">
              <span aria-hidden="true">○</span>
              {robotDemo.approval}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
