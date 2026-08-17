import './AIVisualComponents.css';

export function WorkflowAutomation() {
  return (
    <svg className="ai-visual-svg" viewBox="0 0 600 400">
      {/* Container */}
      <rect x="100" y="50" width="400" height="300" rx="16" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="1" />
      <text className="ai-visual-text" x="300" y="90" textAnchor="middle" fontWeight="600">Update Coordination</text>

      {/* Identify */}
      <rect className="ai-visual-rect" x="140" y="130" width="140" height="60" rx="8" />
      <text className="ai-visual-text-sec" x="210" y="160" textAnchor="middle" fontWeight="600">1. Identify</text>
      <text className="ai-visual-text-sec" x="210" y="175" textAnchor="middle" fontSize="10">Fetch recent updates</text>

      {/* Extract */}
      <rect className="ai-visual-rect" x="320" y="130" width="140" height="60" rx="8" />
      <text className="ai-visual-text-sec" x="390" y="160" textAnchor="middle" fontWeight="600">2. Extract</text>
      <text className="ai-visual-text-sec" x="390" y="175" textAnchor="middle" fontSize="10">Parse team progress</text>

      {/* Transform */}
      <rect className="ai-visual-rect" x="140" y="240" width="140" height="60" rx="8" />
      <text className="ai-visual-text-sec" x="210" y="270" textAnchor="middle" fontWeight="600">3. Transform</text>
      <text className="ai-visual-text-sec" x="210" y="285" textAnchor="middle" fontSize="10">Draft summary report</text>

      {/* Action */}
      <rect className="ai-visual-rect" x="320" y="240" width="140" height="60" rx="8" />
      <text className="ai-visual-text-sec" x="390" y="270" textAnchor="middle" fontWeight="600">4. Action</text>
      <text className="ai-visual-text-sec" x="390" y="285" textAnchor="middle" fontSize="10">Send to Slack</text>

      {/* Connecting Lines */}
      {/* 1 to 2 */}
      <path d="M 280 160 L 320 160" stroke="var(--color-border)" fill="none" strokeWidth="2" markerEnd="url(#arrow)" />
      {/* 2 to 3 */}
      <path d="M 390 190 L 390 215 L 210 215 L 210 240" stroke="var(--color-border)" fill="none" strokeWidth="2" markerEnd="url(#arrow)" />
      {/* 3 to 4 */}
      <path d="M 280 270 L 320 270" stroke="var(--color-border)" fill="none" strokeWidth="2" markerEnd="url(#arrow)" />

      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="var(--color-border)" />
        </marker>
      </defs>
    </svg>
  );
}
