"use client";

import "./TrustBadges.css";

const badges = [
  { icon: "🔓", label: "Open Source" },
  { icon: "🆓", label: "Free Forever" },
  { icon: "🇧🇩", label: "Made in Bangladesh" },
  { icon: "🌍", label: "Global Ambition" },
];

export default function TrustBadges() {
  return (
    <div className="trust-badges">
      {badges.map((badge) => (
        <div key={badge.label} className="trust-badge">
          <span className="trust-badge__icon">{badge.icon}</span>
          <span className="trust-badge__label">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
