"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set([statRef.current, textRef.current], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      statRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.4)" }
    );

    tl.to(
      ".problem-heading .reveal-word",
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=0.4"
    );

    tl.fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  const headingText = " of Custom Software Projects Fail or Stagger due to Poor Execution.";
  const words = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gray-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16"
    >
      <SectionDivider />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] flex flex-col items-center text-center">
        {/* Oversized Stat */}
        <div
          ref={statRef}
          className="mb-8 select-none text-[8rem] font-black leading-none tracking-tighter text-teal sm:text-[10rem] md:text-[12rem] lg:text-[14rem]"
        >
          70%
        </div>

        {/* Text Reveal Headline */}
        <h2
          ref={headingRef}
          className="problem-heading h2-section max-w-[850px] leading-tight tracking-tight text-nearblack"
        >
          {words.map((word, i) => (
            <span key={i} className="reveal-wrapper mr-[0.25em]">
              <span className="reveal-word inline-block">{word}</span>
            </span>
          ))}
        </h2>

        {/* Supporting Line */}
        <p
          ref={textRef}
          className="body-text mt-6 max-w-[600px] text-gray text-lg"
        >
          We solve this by aligning technical architecture with clear B2B business outcomes from day one. No quiet freelancers, no delayed launches.
        </p>
      </div>
    </section>
  );
}
