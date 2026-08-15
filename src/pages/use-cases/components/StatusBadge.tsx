import './UseCaseComponents.css';

interface StatusBadgeProps {
  status: 'available' | 'research' | 'long-term';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const labels = {
    'available': 'Available',
    'research': 'Active R&D',
    'long-term': 'Long-Term Direction'
  };

  return (
    <span className={`ucc-badge ucc-badge--${status}`}>
      {labels[status]}
    </span>
  );
}
