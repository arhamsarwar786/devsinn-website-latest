"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const editorialText =
  "We believe custom software should solve operational bottlenecks, not generate technical debt. " +
  "That is why we detail technical architecture before we write code, execute with absolute timeline transparency, " +
  "and engineer MVPs built to scale, convert users, and deliver business outcomes from day one.";

export default function WhyDevsinn() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set(".why-word", { color: "#1A1A18" });
      return;
    }

    // Header word reveal
    gsap.to(".why-heading .reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".why-heading",
        start: "top 85%",
      },
    });

    // Word-by-word color shift on scroll
    const words = gsap.utils.toArray<HTMLElement>(".why-word");
    if (words.length > 0) {
      gsap.to(words, {
        color: "#1A1A18",
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          end: "bottom 35%",
          scrub: true,
        },
      });
    }
  }, []);

  const headingText = "Our Engineering Philosophy.";
  const headingWords = headingText.split(" ");
  const words = editorialText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gray-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16"
    >
      <SectionDivider />

      <div className="mx-auto w-full max-w-[1200px]">
        {/* Eyebrow Label */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
              Why Dev'sinn
            </span>
          </div>

          <h2 className="why-heading h2-section mt-4 max-w-[800px] mx-auto leading-tight tracking-tight text-nearblack">
            {headingWords.map((word, i) => (
              <span key={i} className="reveal-wrapper mr-[0.25em]">
                <span className="reveal-word inline-block">{word}</span>
              </span>
            ))}
          </h2>
        </div>

        {/* Large Editorial Statement */}
        <div className="why-text-container max-w-[1050px] mx-auto text-center mt-12">
          <p
            ref={textRef}
            className="font-display font-semibold text-[1.8rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.25] tracking-tight"
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="why-word inline-block mr-[0.25em] text-stone transition-colors duration-150 select-none"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
