"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  unoptimized?: boolean;
  [key: string]: unknown;
}

export default function ImageWithFallback({
  src,
  alt,
  fallback,
  className,
  style,
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  unoptimized = false,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    const isSmall =
      (typeof width === "number" && width <= 48) || (typeof height === "number" && height <= 48);

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
          backgroundColor: "var(--color-bg-elevated)",
          borderRadius: "8px",
          textAlign: "center",
          color: "var(--color-text-secondary)",
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

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt || ""}
        fill
        sizes={sizes || "100vw"}
        className={className}
        style={style}
        priority={priority}
        unoptimized={unoptimized}
        onError={() => setError(true)}
        {...props}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={typeof width === "number" ? width : parseInt(String(width), 10) || 300}
      height={typeof height === "number" ? height : parseInt(String(height), 10) || 200}
      sizes={sizes || "100vw"}
      className={className}
      style={style}
      priority={priority}
      unoptimized={unoptimized}
      onError={() => setError(true)}
      {...props}
    />
  );
}
