import './AIVisualComponents.css';

export function ResearchWorkspace() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      {/* Top Bar */}
      <rect className="ai-visual-rect" x="0" y="0" width="600" height="60" />
      <text className="ai-visual-text" x="40" y="35" fontWeight="600">Research Synthesis</text>
      <text className="ai-visual-text-sec" x="200" y="35">Query: AI dev languages</text>
      
      {/* Three Columns: Sources, Notes, Comparison */}
      <text className="ai-visual-text-sec" x="40" y="90" fontWeight="600" style={{ textTransform: "uppercase" }}>Sources</text>
      <rect className="ai-visual-rect" x="40" y="110" width="150" height="40" rx="4" />
      <text className="ai-visual-text-sec" x="50" y="135">arxiv.org / papers</text>
      <rect className="ai-visual-rect" x="40" y="160" width="150" height="40" rx="4" />
      <text className="ai-visual-text-sec" x="50" y="185">github.com / trends</text>
      <rect className="ai-visual-rect" x="40" y="210" width="150" height="40" rx="4" />
      <text className="ai-visual-text-sec" x="50" y="235">stackoverflow.com</text>

      <text className="ai-visual-text-sec" x="220" y="90" fontWeight="600" style={{ textTransform: "uppercase" }}>Extraction</text>
      <rect className="ai-visual-rect" x="220" y="110" width="150" height="140" rx="4" />
      <text className="ai-visual-text-sec" x="230" y="140">Python: Dominant in ML</text>
      <text className="ai-visual-text-sec" x="230" y="160">C++: Core inference</text>
      <text className="ai-visual-text-sec" x="230" y="180">Rust: Growing safely</text>
      <text className="ai-visual-text-sec" x="230" y="200">TypeScript: Tooling</text>

      <text className="ai-visual-text-sec" x="400" y="90" fontWeight="600" style={{ textTransform: "uppercase" }}>Insight</text>
      <rect className="ai-visual-rect" x="400" y="110" width="160" height="140" rx="4" />
      <text className="ai-visual-text-sec" x="410" y="135" fontWeight="600">Final Recommendation:</text>
      <text className="ai-visual-text-sec" x="410" y="160">Start with Python for</text>
      <text className="ai-visual-text-sec" x="410" y="180">ecosystem. Use C++ for</text>
      <text className="ai-visual-text-sec" x="410" y="200">production bottlenecks.</text>

      {/* Bottom Progress */}
      <line x1="40" y1="320" x2="560" y2="320" stroke="var(--color-border)" strokeWidth="4" />
      <line x1="40" y1="320" x2="560" y2="320" stroke="var(--color-text)" strokeWidth="4" strokeDasharray="520" strokeDashoffset="0" />
      <text className="ai-visual-text-sec" x="40" y="350">Synthesis Complete. 34 sources analyzed.</text>
    </svg>
  );
}
