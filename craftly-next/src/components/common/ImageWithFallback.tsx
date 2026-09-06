import { useState } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallback,
  className,
  style,
  width,
  height,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    const isSmall =
      (typeof width === "number" && width <= 48) ||
      (typeof height === "number" && height <= 48) ||
      (typeof width === "string" && parseInt(width, 10) <= 48) ||
      (typeof height === "string" && parseInt(height, 10) <= 48);

    if (isSmall || !fallback) {
      return (
        <span
          className={className}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: width || "auto",
            height: height || "auto",
            backgroundColor: "transparent",
            ...style,
          }}
          aria-label={alt || "Image unavailable"}
        />
      );
    }

    return (
      <div
        className={className}
        style={{
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          textAlign: "center",
          color: "#5f6368",
          fontSize: "14px",
          width: width || "100%",
          height: height || "auto",
          ...style,
        }}
        role="img"
        aria-label={alt || fallback}
      >
        {fallback}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      style={style}
      width={width}
      height={height}
      onError={() => setError(true)}
      {...props}
    />
  );
}
