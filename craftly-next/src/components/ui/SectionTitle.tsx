interface SectionTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({
  text,
  className,
  as: Tag = "h1",
}: SectionTitleProps) {
  const lines = text.split("\n");

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </Tag>
  );
}
