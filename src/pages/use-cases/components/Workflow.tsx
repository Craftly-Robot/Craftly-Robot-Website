import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './UseCaseComponents.css';

interface NodeData {
  id: string;
  label: string;
}

interface WorkflowProps {
  nodes: NodeData[];
}

export function Workflow({ nodes }: WorkflowProps) {
  const revealRef = useScrollReveal();

  if (!nodes || nodes.length === 0) return null;

  const nodeRadius = 30;
  const spacing = 120;
  const width = nodes.length * spacing;
  const height = 100;
  const startX = 50;
  const centerY = 50;

  return (
    <div className="ucc-svg-flow reveal" ref={revealRef}>
      <svg viewBox={`0 0 ${width + 50} ${height}`} width="100%" height="100%">
        {/* Draw connection lines */}
        {nodes.map((_, index) => {
          if (index === nodes.length - 1) return null;
          const x1 = startX + index * spacing + nodeRadius;
          const x2 = startX + (index + 1) * spacing - nodeRadius;
          return (
            <line
              key={`line-${index}`}
              className="ucc-svg-line"
              x1={x1}
              y1={centerY}
              x2={x2}
              y2={centerY}
            />
          );
        })}

        {/* Draw nodes */}
        {nodes.map((node, index) => {
          const cx = startX + index * spacing;
          return (
            <g key={node.id}>
              <circle className="ucc-svg-node" cx={cx} cy={centerY} r={nodeRadius} />
              <text className="ucc-svg-text" x={cx} y={centerY + nodeRadius + 24}>
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
