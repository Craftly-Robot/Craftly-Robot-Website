import "./DropdownIcon.css";

interface DropdownIconProps {
  isOpen: boolean;
  size?: number;
  className?: string;
}

/**
 * Animated dropdown toggle icon.
 * Morphs between plus (+) and minus (−) states using CSS transforms.
 */
export default function DropdownIcon({
  isOpen,
  size = 24,
  className = "",
}: DropdownIconProps) {
  const thickness = Math.max(2, Math.round(size / 12));

  return (
    <span
      className={`dropdown-icon ${isOpen ? "dropdown-icon--open" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="dropdown-icon__bar dropdown-icon__bar--horizontal"
        style={{ height: thickness }}
      />
      <span
        className="dropdown-icon__bar dropdown-icon__bar--vertical"
        style={{ height: thickness }}
      />
    </span>
  );
}
