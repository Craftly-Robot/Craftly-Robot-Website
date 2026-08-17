import './AIVisualComponents.css';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export function HumanControlledFlow() {
  const revealRef = useScrollReveal();

  return (
    <div className="ai-visual-wrapper reveal" ref={revealRef}>
      <svg viewBox="0 0 800 150" width="100%" height="100%">
        
        {/* Nodes */}
        {/* 1. AI Coordination */}
        <rect className="ai-visual-rect" x="50" y="50" width="160" height="50" rx="8" />
        <text className="ai-visual-text" x="130" y="80" textAnchor="middle" fontWeight="600">AI Coordination</text>

        {/* 2. Human Review */}
        <rect className="ai-visual-rect" x="320" y="50" width="160" height="50" rx="8" stroke="var(--color-text)" strokeWidth="2" />
        <text className="ai-visual-text" x="400" y="80" textAnchor="middle" fontWeight="600">Human Review</text>
        
        {/* Pulsing indicator for "Confirm" */}
        <circle cx="480" cy="50" r="8" fill="var(--color-bg)" stroke="var(--color-text)" strokeWidth="2" className="hc-pulse-circle" />

        {/* 3. Action */}
        <rect className="ai-visual-rect" x="590" y="50" width="160" height="50" rx="8" />
        <text className="ai-visual-text" x="670" y="80" textAnchor="middle" fontWeight="600">Action</text>

        {/* Lines */}
        <line x1="210" y1="75" x2="320" y2="75" stroke="var(--color-border)" strokeWidth="2" markerEnd="url(#arrow)" />
        <line className="hc-action-line" x1="480" y1="75" x2="590" y2="75" stroke="var(--color-border)" strokeWidth="2" markerEnd="url(#arrow)" />

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="var(--color-border)" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
