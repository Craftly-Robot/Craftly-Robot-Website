import "./AIVisualComponents.css";

export function RobotConversation() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      {/* Sidebar: Goal, Context, Constraints, Result */}
      <rect className="ai-visual-rect" x="400" y="0" width="200" height="400" />
      <text className="ai-visual-text" x="420" y="40" fontWeight="600">
        Goal
      </text>
      <text className="ai-visual-text-sec" x="420" y="60">
        Find programming laptop
      </text>

      <text className="ai-visual-text" x="420" y="110" fontWeight="600">
        Context
      </text>
      <text className="ai-visual-text-sec" x="420" y="130">
        AI Dev & General SWE
      </text>

      <text className="ai-visual-text" x="420" y="180" fontWeight="600">
        Constraints
      </text>
      <text className="ai-visual-text-sec" x="420" y="200">
        &lt; ৳150,000
      </text>
      <text className="ai-visual-text-sec" x="420" y="220">
        Minimum 32GB RAM
      </text>

      <text className="ai-visual-text" x="420" y="270" fontWeight="600">
        Result
      </text>
      <text className="ai-visual-text-sec" x="420" y="290">
        3 matches found
      </text>

      {/* Main Chat Area */}
      <rect
        className="ai-visual-rect"
        x="40"
        y="40"
        width="320"
        height="60"
        rx="8"
      />
      <text className="ai-visual-text" x="60" y="75">
        Compare these laptops for programming.
      </text>

      <rect
        className="ai-visual-rect"
        x="80"
        y="120"
        width="280"
        height="200"
        rx="8"
      />
      <text className="ai-visual-text-sec" x="100" y="150" fontWeight="600">
        Craftly Robot
      </text>
      <text className="ai-visual-text-sec" x="100" y="180">
        I have analyzed the current market for laptops
      </text>
      <text className="ai-visual-text-sec" x="100" y="200">
        under ৳150,000 with at least 32GB RAM.
      </text>

      <rect
        className="ai-visual-rect"
        x="100"
        y="230"
        width="240"
        height="70"
        rx="4"
      />
      <text className="ai-visual-text-sec" x="120" y="255" fontWeight="600">
        Option 1: MacBook Pro 14" M3
      </text>
      <text className="ai-visual-text-sec" x="120" y="275">
        Best for battery life and AI frameworks.
      </text>
    </svg>
  );
}
