"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery & Scope Mapping",
    description: "We dive deep into your workflow requirements, technical constraints, and business outcomes to produce a comprehensive project spec and clear timeline.",
    deliverable: "Scope & Timeline PDF",
  },
  {
    number: "02",
    title: "POC & Wireframes",
    description: "We map critical features with interactive Figma layouts and build lightweight Proof-of-Concepts to validate complex technical APIs early.",
    deliverable: "Figma UX Prototypes",
  },
  {
    number: "03",
    title: "Core Software Build",
    description: "We build the core MVP or full software platform with production-grade clean code, database triggers, and modern responsive interfaces.",
    deliverable: "Functional Build",
  },
  {
    number: "04",
    title: "QA & Bug Sprints",
    description: "Every module runs through strict multi-device testing, edge-case validation, and performance sweeps to guarantee high reliability.",
    deliverable: "QA Review Audit",
  },
  {
    number: "05",
    title: "Deployment & Launch",
    description: "We manage cloud or server deployment, configure environment variables, setup DNS records, and integrate SSL certificates.",
    deliverable: "Live Product Launch",
  },
  {
    number: "06",
    title: "Ongoing Maintenance",
    description: "We provide monthly check-ins, security patches, minor feature additions, and prioritised support to ensure long-term stability.",
    deliverable: "Support Agreement",
  },
];

export default function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set(".process-step-card", { opacity: 1, y: 0 });
      gsap.set(".process-indicator", { rotation: 0, scale: 1, opacity: 1 });
      return;
    }

    // Heading reveal
    gsap.to(".process-heading .reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".process-heading",
        start: "top 85%",
      },
    });

    // Step cards entrance
    gsap.fromTo(
      ".process-step-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".process-list",
          start: "top 80%",
        },
      }
    );

    // Numbered step indicators rotate from -10deg to 0deg on entry
    gsap.fromTo(
      ".process-indicator",
      { rotation: -10, scale: 0.9, opacity: 0 },
      {
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".process-list",
          start: "top 80%",
        },
      }
    );
  }, []);

  const headingText = "Structured Delivery. No Launch Surprises.";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-offwhite px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16"
    >
      <SectionDivider />

      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
              How We Build
            </span>
          </div>

          <h2 className="process-heading h2-section max-w-[800px] mx-auto leading-tight tracking-tight text-nearblack">
            {headingWords.map((word, i) => (
              <span key={i} className="reveal-wrapper mr-[0.25em]">
                <span className="reveal-word inline-block">{word}</span>
              </span>
            ))}
          </h2>
          <p className="body-text mt-4 mx-auto max-w-[520px] text-gray text-base">
            From architecture planning to production launch, every step is structured to eliminate delays and technical debt.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="process-list relative space-y-6">
          {/* Vertical separator line for visual flow on desktop */}
          <div className="absolute left-[23px] top-4 bottom-4 w-px bg-stone hidden md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="process-step-card flex flex-col md:flex-row gap-6 md:gap-8 items-start"
              style={{ willChange: "transform" }}
            >
              {/* Numbered Indicator (rotates) */}
              <div className="flex shrink-0 items-center justify-center">
                <div className="process-indicator h-12 w-12 rounded-full border border-stone bg-offwhite flex items-center justify-center text-teal font-bold text-sm origin-center shadow-sm select-none">
                  {step.number}
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 rounded-2xl border border-stone bg-offwhite p-6 sm:p-8 transition-colors duration-300 hover:border-teal w-full">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                  <h3 className="h3-card text-nearblack font-semibold">
                    {step.title}
                  </h3>
                  <span className="caption-text bg-stone rounded-full px-3 py-1 font-semibold text-teal self-start sm:self-auto text-[10px] uppercase tracking-wider">
                    {step.deliverable}
                  </span>
                </div>
                <p className="body-text text-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
