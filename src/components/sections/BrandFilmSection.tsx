"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  IconVolume,
  IconVolumeOff,
  IconPlayerPlay,
  IconPlayerPause,
  IconMaximize,
  IconMinimize,
  IconReload,
} from "@tabler/icons-react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./BrandFilmSection.css";

export default function BrandFilmSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const reducedMotion = useReducedMotion();

  // Fluid scroll expansion tracking
  useEffect(() => {
    if (reducedMotion) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = sectionRef.current;
          if (el) {
            const vh = window.innerHeight;
            // When BrandFilm is directly beneath the hero, calculate expansion smoothly from page top
            // At scroll 0, progress = 0 (scale 0.80, borderRadius 28px)
            // As user scrolls down past the hero, progress reaches 1.0 (scale 1.0, borderRadius 12px)
            const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
            const expansionThreshold = Math.min(500, vh * 0.6);
            const progress = expansionThreshold > 0 ? scrollY / expansionThreshold : 1;
            setScrollProgress(Math.max(0, Math.min(1, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // IntersectionObserver: auto-play when in viewport, auto-pause when out
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasEnded) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Autoplay policy prevented playback
              });
          }
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasEnded]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (hasEnded) {
      video.currentTime = 0;
      setHasEnded(false);
      video.play().then(() => setIsPlaying(true)).catch(() => {});
      return;
    }

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [hasEnded]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      if (hasEnded) {
        video.currentTime = 0;
        setHasEnded(false);
      }
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isMuted, hasEnded]);

  const toggleFullscreen = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      card.requestFullscreen().catch(() => {});
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // When unmuted with sound, hold at final branded frame when finished
    if (!video.muted && video.currentTime >= video.duration - 0.35) {
      video.pause();
      setHasEnded(true);
      setIsPlaying(false);
    }
  }, []);

  const handleEnded = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      // Muted ambient mode: continuous seamless loop
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      // Sound mode: hold on final frame and reveal Replay button
      setHasEnded(true);
      setIsPlaying(false);
    }
  }, []);

  const handleReplay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setHasEnded(false);
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  // Compute fluid expansion values: starts comfortably at 0.80, scaling smoothly to 1.0 (20% dynamic zoom)
  const scale = reducedMotion ? 1 : 0.80 + 0.20 * scrollProgress;
  const borderRadius = reducedMotion ? 16 : Math.round(28 - 16 * scrollProgress);

  return (
    <section
      ref={sectionRef}
      className="brand-film"
      aria-label="Craftly Brand Film"
    >
      <div className="container--wide brand-film__outer">
        <div
          ref={cardRef}
          className={`brand-film__card ${isFullscreen ? "brand-film__card--fullscreen" : ""}`}
          style={{
            transform: isFullscreen ? "none" : `scale(${scale})`,
            borderRadius: isFullscreen ? "0px" : `${borderRadius}px`,
          }}
        >
          <video
            ref={videoRef}
            className="brand-film__video"
            src="/assets/video/craftly-brand-film.mp4"
            poster="/assets/video/craftly-brand-film-poster.webp"
            playsInline
            muted={isMuted}
            preload="metadata"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            onClick={togglePlay}
          />

          {/* Center Play Indicator when Paused & not ended */}
          {!isPlaying && !hasEnded && (
            <button
              type="button"
              className="brand-film__center-play"
              onClick={togglePlay}
              aria-label="Play Brand Film"
            >
              <div className="brand-film__center-play-icon">
                <IconPlayerPlay size={32} />
              </div>
            </button>
          )}

          {/* Replay Overlay when video finishes with sound */}
          {hasEnded && (
            <div className="brand-film__end-overlay">
              <div className="brand-film__end-content">
                <span className="brand-film__end-subtitle">
                  Craftly — Technology, Intelligence & Organization
                </span>
                <button
                  type="button"
                  className="brand-film__replay-btn"
                  onClick={handleReplay}
                >
                  <IconReload size={18} />
                  <span>Replay Film</span>
                </button>
              </div>
            </div>
          )}

          {/* Floating Glassmorphic Control Bar */}
          <div className="brand-film__controls" role="toolbar" aria-label="Video controls">
            {/* Play/Pause Button */}
            <button
              type="button"
              className="brand-film__ctrl-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <IconPlayerPause size={16} /> : <IconPlayerPlay size={16} />}
            </button>

            {/* Sound Toggle Button with Text Badge */}
            <button
              type="button"
              className={`brand-film__ctrl-btn brand-film__ctrl-btn--sound ${
                !isMuted ? "brand-film__ctrl-btn--sound-active" : ""
              }`}
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <IconVolumeOff size={16} /> : <IconVolume size={16} />}
              <span className="brand-film__ctrl-label">
                {isMuted ? "Sound Off" : "Sound On"}
              </span>
            </button>

            {/* Fullscreen Toggle Button */}
            <button
              type="button"
              className="brand-film__ctrl-btn"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <IconMinimize size={16} /> : <IconMaximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
