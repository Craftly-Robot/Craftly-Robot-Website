import './VideoPlaceholder.css';

interface VideoPlaceholderProps {
  label: string;
}

export default function VideoPlaceholder({ label }: VideoPlaceholderProps) {
  return (
    <div className="visual-placeholder">
      <div className="visual-placeholder__grid" />
      <span className="visual-placeholder__text">{label}</span>
    </div>
  );
}
