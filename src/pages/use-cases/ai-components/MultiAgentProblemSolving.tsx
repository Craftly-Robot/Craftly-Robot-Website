import "./AIVisualComponents.css";

export function MultiAgentProblemSolving() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      <defs>
        <marker
          id="arrow-ma"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="var(--color-border)" />
        </marker>
        <marker
          id="arrow-ma-reverse"
          markerWidth="10"
          markerHeight="10"
          refX="1"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M9,0 L9,6 L0,3 z" fill="var(--color-border)" />
        </marker>
      </defs>

      {/* Lines from Center to outer nodes */}
      <line
        x1="300"
        y1="200"
        x2="150"
        y2="100"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
        markerEnd="url(#arrow-ma)"
      />
      <line
        x1="150"
        y1="100"
        x2="300"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
        markerEnd="url(#arrow-ma)"
      />

      <line
        x1="300"
        y1="200"
        x2="450"
        y2="100"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
        markerEnd="url(#arrow-ma)"
      />
      <line
        x1="450"
        y1="100"
        x2="300"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
        markerEnd="url(#arrow-ma)"
      />

      <line
        x1="300"
        y1="200"
        x2="300"
        y2="320"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
        markerEnd="url(#arrow-ma)"
      />
      <line
        x1="300"
        y1="320"
        x2="300"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
        markerEnd="url(#arrow-ma)"
      />

      {/* Nodes */}
      {/* Center Coordinator */}
      <circle
        className="ai-visual-rect"
        cx="300"
        cy="200"
        r="45"
        strokeWidth="2"
        fill="var(--color-text)"
      />
      <text
        className="ai-visual-text"
        x="300"
        y="205"
        textAnchor="middle"
        fill="var(--color-bg)"
        fontWeight="600"
      >
        Coordinator
      </text>

      {/* Top Left: Research */}
      <circle
        className="ai-visual-rect"
        cx="150"
        cy="100"
        r="40"
        strokeWidth="2"
      />
      <text
        className="ai-visual-text"
        x="150"
        y="105"
        textAnchor="middle"
        fontWeight="500"
      >
        Research
      </text>

      {/* Top Right: Planning */}
      <circle
        className="ai-visual-rect"
        cx="450"
        cy="100"
        r="40"
        strokeWidth="2"
      />
      <text
        className="ai-visual-text"
        x="450"
        y="105"
        textAnchor="middle"
        fontWeight="500"
      >
        Planning
      </text>

      {/* Bottom: Execution */}
      <circle
        className="ai-visual-rect"
        cx="300"
        cy="320"
        r="40"
        strokeWidth="2"
      />
      <text
        className="ai-visual-text"
        x="300"
        y="325"
        textAnchor="middle"
        fontWeight="500"
      >
        Execution
      </text>

      {/* Subtle Task Labels */}
      <text
        className="ai-visual-text-sec"
        x="180"
        y="160"
        textAnchor="end"
        fontSize="10"
        opacity="0.7"
      >
        Delegate Search
      </text>
      <text
        className="ai-visual-text-sec"
        x="420"
        y="160"
        textAnchor="start"
        fontSize="10"
        opacity="0.7"
      >
        Strategy & Steps
      </text>
      <text
        className="ai-visual-text-sec"
        x="315"
        y="270"
        textAnchor="start"
        fontSize="10"
        opacity="0.7"
      >
        Run Script
      </text>
    </svg>
  );
}
