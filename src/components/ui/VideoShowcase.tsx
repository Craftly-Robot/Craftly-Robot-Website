import { useState, useRef, useEffect } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import VideoPlaceholder from "../common/VideoPlaceholder";
import "./VideoShowcase.css";

interface VideoShowcaseProps {
  src: string;
  poster: string;
  altText?: string;
}

export default function VideoShowcase({
  src,
  poster,
  altText,
}: VideoShowcaseProps) {
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !reducedMotion) {
            video.play().catch(() => {
              // Ignore autoplay errors
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div className="video-showcase">
      {!src ? (
        <img
          src={poster}
          alt={altText || "Showcase visual"}
          className="video-showcase__image"
        />
      ) : error || reducedMotion ? (
        <VideoPlaceholder label={altText || src.split("/").pop() || "Video"} />
      ) : (
        <video
          ref={videoRef}
          className="video-showcase__video"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}
