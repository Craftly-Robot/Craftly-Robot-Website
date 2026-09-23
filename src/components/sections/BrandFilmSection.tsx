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
  const [hasTriggeredPlay, setHasTriggeredPlay] = useState(false);
  const [userManuallyPaused, setUserManuallyPaused] = useState(false);

  const isIntersectingRef = useRef(false);
  const reducedMotion = useReducedMotion();

  // Intro completion observer
  const [introDone, setIntroDone] = useState(() => {
    if (typeof document === "undefined") return true;
    return !document.documentElement.classList.contains("intro-active");
  });

  useEffect(() => {
    if (introDone) return;

    const handleIntroDone = () => setIntroDone(true);
    window.addEventListener("craftly-intro-done", handleIntroDone);

    const observer = new MutationObserver(() => {
      if (!document.documentElement.classList.contains("intro-active")) {
        setIntroDone(true);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("craftly-intro-done", handleIntroDone);
      observer.disconnect();
    };
  }, [introDone]);

  // Fluid scroll expansion tracking & scroll-triggered playback
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const el = sectionRef.current;
          if (el) {
            const vh = window.innerHeight;
            const scrollY = window.scrollY || document.documentElement.scrollTop || 0;

            if (!reducedMotion) {
              const expansionThreshold = Math.min(500, vh * 0.6);
              const progress = expansionThreshold > 0 ? scrollY / expansionThreshold : 1;
              setScrollProgress(Math.max(0, Math.min(1, progress)));
            }

            // Trigger autoplay on scroll when intro is complete and section is in viewport
            if (introDone && !hasTriggeredPlay && !userManuallyPaused && scrollY > 40 && isIntersectingRef.current) {
              setHasTriggeredPlay(true);
              const video = videoRef.current;
              if (video && !hasEnded) {
                video
                  .play()
                  .then(() => setIsPlaying(true))
                  .catch(() => {});
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion, introDone, hasTriggeredPlay, userManuallyPaused, hasEnded]);

  // If page is loaded or refreshed already scrolled down, start when intro finishes
  useEffect(() => {
    if (!introDone || hasTriggeredPlay || userManuallyPaused) return;
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    if (scrollY > 40 && isIntersectingRef.current) {
      setHasTriggeredPlay(true);
      const video = videoRef.current;
      if (video && !hasEnded) {
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  }, [introDone, hasTriggeredPlay, userManuallyPaused, hasEnded]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // IntersectionObserver: auto-play when in viewport and triggered, auto-pause when out
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersectingRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          const scrollY = window.scrollY || document.documentElement.scrollTop || 0;

          // Autoplay only if intro is done, not manually paused, and user has either triggered or scrolled
          if (introDone && !userManuallyPaused && !hasEnded) {
            if (hasTriggeredPlay || scrollY > 40) {
              if (!hasTriggeredPlay) {
                setHasTriggeredPlay(true);
              }
              video
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {
                  // Autoplay policy prevented playback
                });
            }
          }
        } else {
          // Out of viewport: pause video (unless in fullscreen mode)
          if (!document.fullscreenElement) {
            video.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [introDone, hasTriggeredPlay, userManuallyPaused, hasEnded]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    setHasTriggeredPlay(true);

    if (hasEnded) {
      video.currentTime = 0;
      setHasEnded(false);
      setUserManuallyPaused(false);
      video.play().then(() => setIsPlaying(true)).catch(() => {});
      return;
    }

    if (video.paused) {
      setUserManuallyPaused(false);
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      setUserManuallyPaused(true);
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
      setHasTriggeredPlay(true);
      setUserManuallyPaused(false);
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
    setUserManuallyPaused(false);
    setHasTriggeredPlay(true);
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
