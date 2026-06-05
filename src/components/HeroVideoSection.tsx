"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

export default function HeroVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = videoRef.current;
    if (!video) return;

    if (prefersReduced) {
      video.play().catch(() => {});
      return;
    }

    // GSAP Timeline for scroll-linked pinning and scaling
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=120%", // Length of scroll pin interaction
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          video.play().catch(() => {});
          setIsPlaying(true);
        },
        onEnterBack: () => {
          video.play().catch(() => {});
          setIsPlaying(true);
        },
        onLeave: () => {
          // Pause when scrolling past to save resources
          video.pause();
          setIsPlaying(false);
        },
        onLeaveBack: () => {
          video.pause();
          setIsPlaying(false);
        }
      }
    });

    // Expand the video container from centered rounded card to full viewport
    tl.fromTo(
      containerRef.current,
      {
        width: "85%",
        height: "75vh",
        borderRadius: "2.5rem",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
      },
      {
        width: "100%",
        height: "100vh",
        borderRadius: "0rem",
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
        ease: "none", // Keeps the scaling linear with scroll speed
      }
    );

    // Parallax: Video element slowly pans down
    tl.fromTo(
      ".video-element",
      { yPercent: -15 },
      { yPercent: 0, ease: "none" },
      0
    );

    // Parallax: Far mountains move down slower (shifted up as we scroll)
    tl.fromTo(
      ".mountain-far",
      { yPercent: 30 },
      { yPercent: 5, ease: "none" },
      0
    );

    // Parallax: Near mountains move down faster (shifted up as we scroll)
    tl.fromTo(
      ".mountain-near",
      { yPercent: 50 },
      { yPercent: 0, ease: "none" },
      0
    );

    // Refresh ScrollTrigger when video meta loads to ensure metrics are exact
    const handleLoadedMetadata = () => {
      ScrollTrigger.refresh();
    };
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-offwhite overflow-hidden flex items-center justify-center"
    >
      <SectionDivider />

      {/* Video Container (scales up to full-screen) */}
      <div
        ref={containerRef}
        className="relative overflow-hidden bg-stone/20 border border-stone/50 flex items-center justify-center group"
        style={{ willChange: "width, height, border-radius" }}
      >
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          loop
          muted={isMuted}
          playsInline
          className="video-element w-full h-[125%] object-cover pointer-events-none"
          style={{ transform: "translateY(-15%)", willChange: "transform" }}
        />

        {/* Mountain Parallax Overlays */}
        <div className="absolute inset-x-0 bottom-0 z-10 w-full h-[180px] pointer-events-none overflow-hidden select-none">
          {/* Far Mountains (Stone color) */}
          <svg
            className="mountain-far absolute inset-x-0 bottom-0 w-full h-[40%] md:h-[50%] lg:h-[60%] text-stone/70"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="currentColor"
            style={{ willChange: "transform" }}
          >
            <path d="M0 240 L150 140 L350 220 L500 120 L750 250 L950 150 L1150 230 L1300 110 L1440 200 L1440 320 L0 320 Z" />
          </svg>

          {/* Near Mountains (Off-white color - matches page bg) */}
          <svg
            className="mountain-near absolute inset-x-0 bottom-0 w-full h-[35%] md:h-[45%] lg:h-[55%] text-offwhite"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="currentColor"
            style={{ willChange: "transform" }}
          >
            <path d="M0 260 L200 180 L450 280 L650 160 L850 290 L1100 170 L1250 270 L1440 180 L1440 320 L0 320 Z" />
          </svg>
        </div>

        {/* Video Controls Overlay (Strict theme color palette) */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          
          {/* Mute Toggle */}
          <button
            onClick={toggleMute}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone bg-white/90 text-nearblack shadow-md backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer active:scale-95"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23" />
                <path d="M9 9v6a3 3 0 0 0 3 3h1.586l4.707 4.707A1 1 0 0 0 20 22V4a1 1 0 0 0-1.707-.707L13.586 8H12a3 3 0 0 0-3 1z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>

          {/* Play/Pause Toggle */}
          <button
            onClick={togglePlay}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-stone bg-white/90 text-nearblack shadow-md backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer active:scale-95"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="4" x2="18" y2="20" />
                <line x1="6" y1="4" x2="6" y2="20" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="translate-x-[1px]">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

        </div>
      </div>
    </section>
  );
}
