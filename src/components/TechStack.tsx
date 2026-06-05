"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const techItems = [
  { name: "React", filename: "react.svg" },
  { name: "Flutter", filename: "flutter.svg" },
  { name: "Node.js", filename: "nodedotjs.svg" },
  { name: "Docker", filename: "docker.svg" },
  { name: "OpenAI", filename: "openai.svg" },
  { name: "AWS", filename: "amazonwebservices.svg" },
  { name: "Claude AI", filename: "claude.svg" },
  { name: "DeepSeek", filename: "deepseek.svg" },
  { name: "Figma", filename: "figma.svg" },
  { name: "Firebase", filename: "firebase.svg" },
  { name: "Gemini", filename: "googlegemini.svg" },
  { name: "Cloudflare", filename: "cloudflare.svg" },
  { name: "Python", filename: "python.svg" },
  { name: "Django", filename: "django.svg" },
  { name: "Vercel", filename: "vercel.svg" },
  { name: "DigitalOcean", filename: "digitalocean.svg" },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bgWheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set(".tech-card", { scale: 1, opacity: 1 });
      return;
    }

    // Heading reveal
    gsap.to(".tech-heading .reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".tech-heading",
        start: "top 85%",
      },
    });

    // Staggered scale pop-in (stagger 0.04s)
    gsap.fromTo(
      ".tech-card",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.04,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );

    // Continuous slow rotation on the technology icons
    gsap.to(".tech-icon-spin", {
      rotation: 360,
      duration: 16,
      repeat: -1,
      ease: "none",
    });

    // Rotate animation of the technology stack section (background decorative wheel)
    if (bgWheelRef.current) {
      gsap.to(bgWheelRef.current, {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  const headingText = "Battle-Tested Technology Stack. Zero Overhead.";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-offwhite px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16"
    >
      <SectionDivider />

      {/* Rotating Background Tech Wheel */}
      <div
        ref={bgWheelRef}
        className="pointer-events-none absolute left-[50%] top-[50%] z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.25] sm:h-[800px] sm:w-[800px] lg:h-[1000px] lg:w-[1000px]"
        style={{ willChange: "transform" }}
      >
        <svg
          className="h-full w-full text-stone"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="25" />
          <path d="M50 0 L50 100 M0 50 L100 50 M15 15 L85 85 M15 85 L85 15" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
              Production Stack
            </span>
          </div>

          <h2 className="tech-heading h2-section max-w-[800px] mx-auto leading-tight tracking-tight text-nearblack">
            {headingWords.map((word, i) => (
              <span key={i} className="reveal-wrapper mr-[0.25em]">
                <span className="reveal-word inline-block">{word}</span>
              </span>
            ))}
          </h2>
          <p className="body-text mt-4 mx-auto max-w-[540px] text-gray text-base">
            We build with standard, scalable technologies that guarantee long-term maintainability and high operations uptime.
          </p>
        </div>

        {/* Technology Icons Grid */}
        <div
          ref={gridRef}
          className="tech-grid grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center"
        >
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="tech-card flex flex-col items-center gap-3 w-28 text-center"
              style={{ willChange: "transform" }}
            >
              {/* Rotating Icon Container */}
              <div className="relative h-20 w-20 flex items-center justify-center bg-offwhite border border-stone rounded-2xl p-4 transition-colors duration-300 hover:border-teal hover:scale-105 shadow-sm group">
                <div className="tech-icon-spin relative h-10 w-10 origin-center flex items-center justify-center">
                  <Image
                    src={`/images/tech/${tech.filename}`}
                    alt={`${tech.name} logo`}
                    fill
                    sizes="40px"
                    className="object-contain filter grayscale contrast-200 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Icon Label */}
              <span className="caption-text text-nearblack font-semibold text-xs tracking-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
