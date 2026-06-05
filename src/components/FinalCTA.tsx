"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalendlyModal from "@/components/ui/CalendlyModal";
import Button from "@/components/ui/Button";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set(textRef.current, { opacity: 1, y: 0 });
      return;
    }

    // Heading word-by-word reveal on entry
    gsap.to(".cta-heading .reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".cta-heading",
        start: "top 85%",
      },
    });

    // Subtext fade in
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cta-heading",
          start: "top 80%",
        },
      }
    );
  }, []);

  const headingText = "Ready to Build Your Next Product?";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-offwhite px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16 text-center"
    >
      <SectionDivider />

      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/devsinntechnologies/30min?hide_gdpr_banner=1"
      />

      <div className="relative z-10 mx-auto max-w-[850px] flex flex-col items-center">
        {/* Availability Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
            Available for New Projects
          </span>
        </div>

        {/* Text Reveal Title */}
        <h2 className="cta-heading h2-section leading-tight tracking-tight text-nearblack mb-4">
          {headingWords.map((word, i) => (
            <span key={i} className="reveal-wrapper mr-[0.25em]">
              <span className="reveal-word inline-block">{word}</span>
            </span>
          ))}
        </h2>

        {/* Supporting Line */}
        <p
          ref={textRef}
          className="body-text text-gray text-base max-w-[500px] mb-8 leading-relaxed"
        >
          Book a free 30-minute consultation call. We'll outline your project requirements, answer technical questions, and detail a clear scope estimate.
        </p>

        {/* Single Teal CTA Button */}
        <div>
          <Button
            id="final-cta-consultation"
            variant="secondary"
            onClick={() => setIsCalendlyOpen(true)}
            size="lg"
          >
            Book a Free Consultation
          </Button>
        </div>

        {/* Small Notice */}
        <p className="caption-text text-gray mt-6 text-xs">
          No commitment required. We respond within 1 business day.
        </p>
      </div>
    </section>
  );
}
