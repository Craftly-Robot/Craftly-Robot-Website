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
        {/* Draw a central hub line or connecting paths */}
        <line className="ucc-svg-line" x1="100" y1="150" x2="500" y2="150" />
        
        {/* Central node / main agent */}
        <circle className="ucc-svg-node" cx="300" cy="150" r="40" />
        <text className="ucc-svg-text" x="300" y="215">Craftly Robot</text>

        {/* Other agents positioned around */}
        {agents.map((agent, index) => {
          // simple distribution for up to 4 agents around the hub
          const positions = [
            { cx: 100, cy: 150 },
            { cx: 500, cy: 150 },
            { cx: 300, cy: 50 },
            { cx: 300, cy: 250 },
          ];
          const pos = positions[index % positions.length];
          return (
            <g key={agent.id}>
              {/* Line to center */}
              <line className="ucc-svg-line" x1={pos.cx} y1={pos.cy} x2="300" y2="150" />
              <circle className="ucc-svg-node" cx={pos.cx} cy={pos.cy} r="30" />
              <text className="ucc-svg-text" x={pos.cx} y={pos.cy + 45}>{agent.label}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
