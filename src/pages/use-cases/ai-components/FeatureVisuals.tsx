import "./AIVisualComponents.css";

export function EducationVisual() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      {/* Student */}
      <circle className="ai-visual-rect" cx="150" cy="200" r="40" />
      <text className="ai-visual-text" x="150" y="205" textAnchor="middle">
        Student
      </text>

      {/* Robot */}
      <circle
        className="ai-visual-rect"
        cx="300"
        cy="200"
        r="50"
        fill="var(--color-text)"
        stroke="none"
      />
      <text
        className="ai-visual-text"
        x="300"
        y="205"
        fill="var(--color-bg)"
        textAnchor="middle"
      >
        Robot
      </text>

      {/* Resources */}
      <circle className="ai-visual-rect" cx="450" cy="100" r="35" />
      <text
        className="ai-visual-text"
        x="450"
        y="105"
        textAnchor="middle"
        fontSize="12"
      >
        Tutor
      </text>

      <circle className="ai-visual-rect" cx="480" cy="200" r="35" />
      <text
        className="ai-visual-text"
        x="480"
        y="205"
        textAnchor="middle"
        fontSize="12"
      >
        Materials
      </text>

      <circle className="ai-visual-rect" cx="450" cy="300" r="35" />
      <text
        className="ai-visual-text"
        x="450"
        y="305"
        textAnchor="middle"
        fontSize="12"
      >
        Schedule
      </text>

      {/* Lines */}
      <line
        x1="190"
        y1="200"
        x2="250"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
      />
      <line
        x1="340"
        y1="170"
        x2="420"
        y2="120"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
      />
      <line
        x1="350"
        y1="200"
        x2="445"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
      />
      <line
        x1="340"
        y1="230"
        x2="420"
        y2="280"
        stroke="var(--color-border)"
        strokeWidth="2"
        strokeDasharray="4"
      />
    </svg>
  );
}

export function LocalServicesVisual() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      <rect
        x="50"
        y="50"
        width="500"
        height="300"
        rx="16"
        fill="var(--color-bg)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      {/* Map Nodes representing service providers */}
      {[
        { x: 150, y: 120, label: "Electrician" },
        { x: 250, y: 80, label: "Plumber" },
        { x: 400, y: 150, label: "Repair" },
        { x: 200, y: 250, label: "Cleaning" },
        { x: 350, y: 280, label: "Electrician (Avail)" },
      ].map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r="6"
            fill={i === 4 ? "var(--color-text)" : "var(--color-border)"}
          />
          <text
            className="ai-visual-text-sec"
            x={node.x}
            y={node.y + 20}
            textAnchor="middle"
            fontWeight={i === 4 ? "600" : "400"}
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Connection path showing discovery to the available one */}
      <path
        d="M 300 200 L 250 150 L 320 120 L 350 280"
        stroke="var(--color-text)"
        fill="none"
        strokeWidth="2"
        strokeDasharray="4"
        opacity="0.5"
      />

      <circle
        cx="300"
        cy="200"
        r="10"
        fill="var(--color-bg)"
        stroke="var(--color-text)"
        strokeWidth="3"
      />
      <text
        className="ai-visual-text"
        x="300"
        y="225"
        textAnchor="middle"
        fontWeight="600"
      >
        User
      </text>
    </svg>
  );
}

export function CommerceVisual() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      {/* Search Criteria */}
      <rect
        className="ai-visual-rect"
        x="40"
        y="40"
        width="200"
        height="100"
        rx="8"
      />
      <text className="ai-visual-text" x="60" y="70" fontWeight="600">
        Requirements
      </text>
      <text className="ai-visual-text-sec" x="60" y="95">
        - RTX 4070
      </text>
      <text className="ai-visual-text-sec" x="60" y="115">
        - &lt; ৳60,000
      </text>

      {/* Product Cards Filtering */}
      {/* Filtered Out */}
      <rect
        className="ai-visual-rect"
        x="300"
        y="40"
        width="250"
        height="70"
        rx="8"
        opacity="0.3"
      />
      <text className="ai-visual-text-sec" x="320" y="65">
        RTX 4070 Ti (Used)
      </text>
      <text className="ai-visual-text-sec" x="320" y="90">
        ৳75,000
      </text>

      {/* Match 1 */}
      <rect
        className="ai-visual-rect"
        x="300"
        y="130"
        width="250"
        height="70"
        rx="8"
        stroke="var(--color-text)"
        strokeWidth="2"
      />
      <text className="ai-visual-text" x="320" y="155" fontWeight="600">
        RTX 4070 (With Box)
      </text>
      <text className="ai-visual-text" x="320" y="180">
        ৳58,000
      </text>

      {/* Match 2 */}
      <rect
        className="ai-visual-rect"
        x="300"
        y="220"
        width="250"
        height="70"
        rx="8"
        stroke="var(--color-text)"
        strokeWidth="2"
      />
      <text className="ai-visual-text" x="320" y="245" fontWeight="600">
        RTX 4070 Founders Edition
      </text>
      <text className="ai-visual-text" x="320" y="270">
        ৳59,500
      </text>

      {/* Filtered Out */}
      <rect
        className="ai-visual-rect"
        x="300"
        y="310"
        width="250"
        height="70"
        rx="8"
        opacity="0.3"
      />
      <text className="ai-visual-text-sec" x="320" y="335">
        RTX 4060 Ti
      </text>
      <text className="ai-visual-text-sec" x="320" y="360">
        ৳45,000
      </text>

      {/* Connection */}
      <path
        d="M 240 90 L 270 90 L 270 165 L 300 165"
        stroke="var(--color-border)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 270 165 L 270 255 L 300 255"
        stroke="var(--color-border)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function HumanitarianVisual() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 800 300">
      <circle
        className="ai-visual-rect"
        cx="400"
        cy="150"
        r="50"
        fill="var(--color-text)"
      />
      <text
        className="ai-visual-text"
        fill="var(--color-bg)"
        x="400"
        y="155"
        textAnchor="middle"
        fontWeight="600"
      >
        Coordination
      </text>

      <circle className="ai-visual-rect" cx="200" cy="150" r="40" />
      <text className="ai-visual-text" x="200" y="155" textAnchor="middle">
        Need
      </text>

      <circle className="ai-visual-rect" cx="600" cy="150" r="40" />
      <text className="ai-visual-text" x="600" y="155" textAnchor="middle">
        Resource
      </text>

      <line
        x1="240"
        y1="150"
        x2="350"
        y2="150"
        stroke="var(--color-border)"
        strokeWidth="2"
      />
      <line
        x1="450"
        y1="150"
        x2="560"
        y2="150"
        stroke="var(--color-border)"
        strokeWidth="2"
      />

      {/* Pulsing effect rings around coordination */}
      <circle
        cx="400"
        cy="150"
        r="70"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4"
      />
      <circle
        cx="400"
        cy="150"
        r="90"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4"
        opacity="0.5"
      />
    </svg>
  );
}

export function BusinessOperationsVisual() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      <rect
        x="40"
        y="40"
        width="520"
        height="320"
        rx="8"
        fill="var(--color-bg)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      {/* Dashboard Top */}
      <rect
        x="40"
        y="40"
        width="520"
        height="40"
        fill="var(--color-border)"
        opacity="0.2"
      />
      <text
        className="ai-visual-text-sec"
        x="60"
        y="65"
        fontWeight="600"
        style={{ textTransform: "uppercase" }}
      >
        Workspace Insights
      </text>

      {/* Dashboard Grid */}
      <rect
        className="ai-visual-rect"
        x="60"
        y="100"
        width="150"
        height="100"
        rx="4"
      />
      <text className="ai-visual-text-sec" x="80" y="130">
        Active Tasks
      </text>
      <text
        className="ai-visual-text"
        x="80"
        y="160"
        fontSize="24"
        fontWeight="600"
      >
        12
      </text>

      <rect
        className="ai-visual-rect"
        x="230"
        y="100"
        width="310"
        height="100"
        rx="4"
      />
      <text className="ai-visual-text-sec" x="250" y="130">
        AI Analysis
      </text>
      <text className="ai-visual-text-sec" x="250" y="155">
        3 projects are currently blocked on design review.
      </text>
      <text className="ai-visual-text-sec" x="250" y="175">
        Suggested action: Notify design team.
      </text>

      <rect
        className="ai-visual-rect"
        x="60"
        y="220"
        width="480"
        height="120"
        rx="4"
      />
      <text className="ai-visual-text-sec" x="80" y="250" fontWeight="600">
        Recent Automations
      </text>
      <line
        x1="80"
        y1="265"
        x2="520"
        y2="265"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text className="ai-visual-text-sec" x="80" y="290">
        - Generated weekly engineering report
      </text>
      <text className="ai-visual-text-sec" x="80" y="315">
        - Researched top 3 vendors for cloud migration
      </text>
    </svg>
  );
}
