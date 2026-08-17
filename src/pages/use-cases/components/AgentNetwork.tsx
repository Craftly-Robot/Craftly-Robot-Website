import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './UseCaseComponents.css';

interface AgentNetworkProps {
  agents: { id: string; label: string }[];
}

export function AgentNetwork({ agents }: AgentNetworkProps) {
  const revealRef = useScrollReveal();

  if (!agents || agents.length < 2) return null;

  return (
    <div className="ucc-svg-flow reveal" ref={revealRef}>
      <svg viewBox="0 0 600 300" width="100%" height="100%">
        {/* Layer 1: Lines */}
        <line className="ucc-svg-line" x1="100" y1="150" x2="500" y2="150" />
        {agents.map((agent, index) => {
          const positions = [
            { cx: 100, cy: 150 },
            { cx: 500, cy: 150 },
            { cx: 300, cy: 50 },
            { cx: 300, cy: 250 },
          ];
          const pos = positions[index % positions.length];
          
          if (pos.cx === 300 && pos.cy === 250) {
            // Break the line for the bottom node to leave space for "Craftly Robot" text
            return (
              <g key={`line-${agent.id}`}>
                <line className="ucc-svg-line" x1="300" y1="250" x2="300" y2="215" />
                <line className="ucc-svg-line" x1="300" y1="195" x2="300" y2="150" />
              </g>
            );
          }
          return <line key={`line-${agent.id}`} className="ucc-svg-line" x1={pos.cx} y1={pos.cy} x2="300" y2="150" />;
        })}

        {/* Layer 2: Nodes */}
        <circle className="ucc-svg-node" cx="300" cy="150" r="40" />
        {agents.map((agent, index) => {
          const positions = [
            { cx: 100, cy: 150 },
            { cx: 500, cy: 150 },
            { cx: 300, cy: 50 },
            { cx: 300, cy: 250 },
          ];
          const pos = positions[index % positions.length];
          return <circle key={`node-${agent.id}`} className="ucc-svg-node" cx={pos.cx} cy={pos.cy} r="30" />;
        })}

        {/* Layer 3: Text */}
        <text className="ucc-svg-text" x="300" y="205">
          Craftly Robot
        </text>
        {agents.map((agent, index) => {
          const positions = [
            { cx: 100, cy: 150 },
            { cx: 500, cy: 150 },
            { cx: 300, cy: 50 },
            { cx: 300, cy: 250 },
          ];
          const pos = positions[index % positions.length];
          
          // Adjust top node text to sit above the node to avoid overlapping the vertical line
          const textY = pos.cy === 50 ? pos.cy - 40 : pos.cy + 45;

          return (
            <text key={`text-${agent.id}`} className="ucc-svg-text" x={pos.cx} y={textY}>
              {agent.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
