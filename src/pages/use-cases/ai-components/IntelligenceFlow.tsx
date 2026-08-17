import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './AIVisualComponents.css';

export function IntelligenceFlow() {
  const revealRef = useScrollReveal();

  const stages = [
    'Understand',
    'Reason',
    'Plan',
    'Use Tools',
    'Coordinate',
    'Verify',
    'Respond'
  ];

  const spacing = 120;
  const startX = 40;
  const width = stages.length * spacing;

  return (
    <div className="ai-visual-wrapper reveal" ref={revealRef}>
      <svg viewBox={`0 -20 ${width} 100`} width="100%" height="100%">
        {/* Background Line */}
        <line 
          x1={startX} 
          y1="40" 
          x2={startX + (stages.length - 1) * spacing} 
          y2="40" 
          stroke="var(--color-border)" 
          strokeWidth="1" 
          opacity="0.3"
        />
        
        {/* Animated Line */}
        <line 
          className="ai-flow-line"
          x1={startX} 
          y1="40" 
          x2={startX + (stages.length - 1) * spacing} 
          y2="40" 
        />

        {stages.map((stage, index) => {
          const cx = startX + index * spacing;
          return (
            <g key={stage} className="ai-flow-node-group">
              <circle className="ai-flow-node" cx={cx} cy="40" r="16" />
              <text className="ai-flow-text" x={cx} y="75">{stage}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
