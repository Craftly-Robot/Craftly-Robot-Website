import { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallback = "Image not available",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          textAlign: "center",
          color: "#5f6368",
          fontSize: "14px",
        }}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      onError={() => setError(true)}
      {...props}
    />
  );
}
