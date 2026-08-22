import "./AIVisualComponents.css";

export function EngineeringWorkspace() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      {/* Sidebar: File Tree */}
      <rect className="ai-visual-rect" x="0" y="0" width="160" height="400" />
      <text
        className="ai-visual-text-sec"
        x="20"
        y="30"
        fontWeight="600"
        style={{ textTransform: "uppercase" }}
      >
        Explorer
      </text>
      <text className="ai-visual-text-sec" x="20" y="60">
        ▼ src
      </text>
      <text className="ai-visual-text-sec" x="40" y="85">
        main.ts
      </text>
      <text className="ai-visual-text-sec" x="40" y="110">
        api.ts
      </text>
      <text className="ai-visual-text-sec" x="40" y="135" fontWeight="600">
        utils.ts
      </text>
      <text className="ai-visual-text-sec" x="20" y="160">
        ▶ tests
      </text>

      {/* Main Editor */}
      <text className="ai-visual-text-sec" x="180" y="30">
        utils.ts
      </text>
      <line
        x1="160"
        y1="45"
        x2="600"
        y2="45"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      <text
        className="ai-visual-text-sec"
        x="180"
        y="70"
        fontFamily="var(--font-mono)"
      >
        export function calculateRetry(
      </text>
      <text
        className="ai-visual-text-sec"
        x="200"
        y="90"
        fontFamily="var(--font-mono)"
      >
        attempts: number,
      </text>
      <text
        className="ai-visual-text-sec"
        x="200"
        y="110"
        fontFamily="var(--font-mono)"
      >
        baseDelay: number
      </text>
      <text
        className="ai-visual-text-sec"
        x="180"
        y="130"
        fontFamily="var(--font-mono)"
      >
        ) {"{"}
      </text>

      {/* Animated Code Fix */}
      <rect
        x="200"
        y="145"
        width="280"
        height="20"
        fill="var(--color-border)"
        opacity="0.2"
      />
      <text
        className="ai-visual-text-sec"
        x="205"
        y="160"
        fontFamily="var(--font-mono)"
        fontWeight="600"
      >
        {" "}
        return baseDelay * Math.pow(2, attempts);
      </text>

      <text
        className="ai-visual-text-sec"
        x="180"
        y="190"
        fontFamily="var(--font-mono)"
      >
        {"}"}
      </text>

      {/* Terminal / Test Output */}
      <line
        x1="160"
        y1="240"
        x2="600"
        y2="240"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        className="ai-visual-text-sec"
        x="180"
        y="265"
        fontWeight="600"
        style={{ textTransform: "uppercase" }}
      >
        Terminal
      </text>
      <text
        className="ai-visual-text-sec"
        x="180"
        y="295"
        fontFamily="var(--font-mono)"
      >
        &gt; npm run test
      </text>
      <text
        className="ai-visual-text-sec"
        x="180"
        y="325"
        fontFamily="var(--font-mono)"
      >
        PASS src/tests/utils.test.ts
      </text>
      <text
        className="ai-visual-text-sec"
        x="180"
        y="350"
        fontFamily="var(--font-mono)"
      >
        ✓ calculateRetry applies exponential backoff
      </text>

      <rect
        className="ai-visual-rect"
        x="480"
        y="310"
        width="80"
        height="24"
        rx="12"
      />
      <text className="ai-visual-text-sec" x="520" y="327" textAnchor="middle">
        Verified
      </text>
    </svg>
  );
}
