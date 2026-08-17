import './AIVisualComponents.css';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

export function AITimeline() {
  const revealRef = useScrollReveal();

  return (
    <div className="ai-visual-wrapper reveal" ref={revealRef}>
      <svg viewBox="0 0 800 150" width="100%" height="100%">
        {/* Base Timeline Line */}
        <line x1="50" y1="75" x2="750" y2="75" stroke="var(--color-border)" strokeWidth="4" />
        
        {/* Filled Timeline Line (Progress) */}
        <line x1="50" y1="75" x2="350" y2="75" stroke="var(--color-text)" strokeWidth="4" />

        {/* Nodes */}
        {/* 1. Conversational */}
        <circle cx="100" cy="75" r="12" fill="var(--color-text)" />
        <text className="ai-visual-text" x="100" y="110" textAnchor="middle" fontWeight="600">Conversational</text>
        <text className="ai-visual-text-sec" x="100" y="125" textAnchor="middle">Available</text>

        {/* 2. Reasoning */}
        <circle cx="300" cy="75" r="12" fill="var(--color-text)" />
        <text className="ai-visual-text" x="300" y="110" textAnchor="middle" fontWeight="600">Reasoning</text>
        <text className="ai-visual-text-sec" x="300" y="125" textAnchor="middle">Available</text>

        {/* 3. Tool Use */}
        <circle cx="500" cy="75" r="12" fill="var(--color-bg)" stroke="var(--color-text)" strokeWidth="3" />
        <text className="ai-visual-text" x="500" y="110" textAnchor="middle" fontWeight="600">Tool Use</text>
        <text className="ai-visual-text-sec" x="500" y="125" textAnchor="middle">Active R&D</text>

        {/* 4. Agentic Execution */}
        <circle cx="700" cy="75" r="12" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="3" />
        <text className="ai-visual-text" x="700" y="110" textAnchor="middle" fontWeight="600" fill="var(--color-text-secondary)">Agentic Execution</text>
        <text className="ai-visual-text-sec" x="700" y="125" textAnchor="middle">Long-Term Direction</text>
      </svg>
    </div>
  );
}
