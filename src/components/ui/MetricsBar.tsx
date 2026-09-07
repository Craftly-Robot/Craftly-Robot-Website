"use client";

import "./MetricsBar.css";

const metrics = [
  { value: "5", label: "Platforms" },
  { value: "68+", label: "Doc Pages" },
  { value: "100%", label: "Free" },
  { value: "∞", label: "Potential" },
];

export default function MetricsBar() {
  return (
    <div className="metrics-bar">
      {metrics.map((metric) => (
        <div key={metric.label} className="metrics-bar__item">
          <span className="metrics-bar__value">{metric.value}</span>
          <span className="metrics-bar__label">{metric.label}</span>
        </div>
      ))}
    </div>
  );
}
