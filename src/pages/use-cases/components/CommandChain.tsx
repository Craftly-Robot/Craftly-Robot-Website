import { useState } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import "./CommandChain.css";

interface CommandLevel {
  id: string;
  label: string;
  reportsTo: string | null;
  reports: string | null;
  responsibility: string;
}

const levels: CommandLevel[] = [
  {
    id: "chairman",
    label: "Chairman",
    reportsTo: null,
    reports: "CEO",
    responsibility:
      "Strategic vision, board coordination, ultimate organizational direction.",
  },
  {
    id: "ceo",
    label: "CEO",
    reportsTo: "Chairman",
    reports: "C-Suite",
    responsibility:
      "Company-wide execution, executive leadership, and resource allocation.",
  },
  {
    id: "csuite",
    label: "C-Suite",
    reportsTo: "CEO",
    reports: "Senior",
    responsibility:
      "Departmental leadership, cross-functional strategy, and performance metrics.",
  },
  {
    id: "senior",
    label: "Senior",
    reportsTo: "C-Suite",
    reports: "Junior",
    responsibility:
      "Team management, project delivery, and operational oversight.",
  },
  {
    id: "junior",
    label: "Junior",
    reportsTo: "Senior",
    reports: "Executive",
    responsibility:
      "Task execution, daily operations, and specific deliverables.",
  },
  {
    id: "executive",
    label: "Executive",
    reportsTo: "Junior",
    reports: null,
    responsibility:
      "Direct execution of assigned tasks and specialized output.",
  },
];

export function CommandChain() {
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);
  const revealRef = useScrollReveal();

  const activeLevel = hoveredLevel
    ? levels.find((l) => l.id === hoveredLevel)
    : null;

  return (
    <div className="command-chain reveal" ref={revealRef}>
      <div className="command-chain__visual">
        {levels.map((level, index) => {
          const isHovered = hoveredLevel === level.id;
          const isReport = activeLevel?.reports === level.label;
          const isManager = activeLevel?.reportsTo === level.label;

          let stateClass = "";
          if (hoveredLevel) {
            if (isHovered) stateClass = "is-active";
            else if (isReport) stateClass = "is-report";
            else if (isManager) stateClass = "is-manager";
            else stateClass = "is-dimmed";
          }

          return (
            <div key={level.id} className="command-chain__node-wrapper">
              <div
                className={`command-chain__node ${stateClass}`}
                onMouseEnter={() => setHoveredLevel(level.id)}
                onMouseLeave={() => setHoveredLevel(null)}
              >
                {level.label}
              </div>
              {index < levels.length - 1 && (
                <div
                  className={`command-chain__line ${hoveredLevel && (isHovered || isReport) ? "is-active" : ""}`}
                />
              )}
            </div>
          );
        })}
      </div>

      <div
        className={`command-chain__details ${activeLevel ? "is-visible" : ""}`}
      >
        {activeLevel ? (
          <>
            <h4 className="command-chain__details-title">
              {activeLevel.label} Level
            </h4>
            <div className="command-chain__details-group">
              <span className="command-chain__details-label">
                Responsibility
              </span>
              <p className="command-chain__details-text">
                {activeLevel.responsibility}
              </p>
            </div>
            <div className="command-chain__details-group">
              <span className="command-chain__details-label">Reports to</span>
              <p className="command-chain__details-text">
                {activeLevel.reportsTo || "Board of Directors"}
              </p>
            </div>
            {activeLevel.reports && (
              <div className="command-chain__details-group">
                <span className="command-chain__details-label">
                  Direct Reports
                </span>
                <p className="command-chain__details-text">
                  {activeLevel.reports}
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="command-chain__details-empty">
            Hover over any level to view responsibilities and reporting
            structure.
          </div>
        )}
      </div>
    </div>
  );
}
