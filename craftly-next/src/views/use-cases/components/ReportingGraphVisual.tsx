import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import "./ReportingGraphVisual.css";

const NODES = [
  { id: "chairman", label: "Chairman" },
  { id: "md", label: "MD" },
  { id: "csuite", label: "C-Suite" },
  { id: "senior", label: "Senior" },
  { id: "junior", label: "Junior" },
  { id: "executive", label: "Executive" },
];

export function ReportingGraphVisual() {
  const [activeNode, setActiveNode] = useState(0);
  const [inView, setInView] = useState(false);
  const revealRef = useScrollReveal();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % (NODES.length + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="reporting-graph reveal" ref={revealRef}>
      <div className="reporting-graph__container" ref={containerRef}>
        <div className="reporting-graph__visualization">
          {NODES.map((node, index) => {
            const isCompleted = activeNode > index;
            const isCurrent = activeNode === index;

            return (
              <div
                key={node.id}
                className={`reporting-graph__node-wrapper ${isCompleted ? "is-completed" : ""} ${isCurrent ? "is-current" : ""}`}
              >
                <div className="reporting-graph__node">
                  <span className="reporting-graph__node-label">
                    {node.label}
                  </span>
                </div>
                {index < NODES.length - 1 && (
                  <div className="reporting-graph__edge">
                    <div
                      className={`reporting-graph__edge-fill ${activeNode > index ? "is-active" : ""}`}
                      style={{
                        transitionDelay: activeNode > index ? "0s" : "0.5s",
                      }}
                    />

                    {activeNode === index && (
                      <div className="reporting-graph__message-dot" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="reporting-graph__info">
          <div className="reporting-graph__info-card">
            <span className="reporting-graph__info-label">
              Current Location
            </span>
            <span className="reporting-graph__info-value">
              {activeNode < NODES.length
                ? NODES[activeNode].label
                : "Resolution"}
            </span>
            {activeNode === NODES.length && (
              <span className="reporting-graph__info-status">
                Message reached destination
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
