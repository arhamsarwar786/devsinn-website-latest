"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CalendlyModal from "@/components/ui/CalendlyModal";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const trustItems = [
  "Web Apps",
  "Mobile Apps",
  "SaaS MVPs",
  "AI Automation",
  "Dedicated Teams",
];

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  // Elements for word split animations
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Force elements to their final states instantly
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set([subRef.current, ctaRef.current, trustRef.current, ".floating-card", mockupRef.current], { opacity: 1, y: 0 });
      return;
    }

    const runAnimations = () => {
      // 1. Text Reveal Effect
      const revealTimeline = gsap.timeline();
      revealTimeline.to(".hero-heading .reveal-word", {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
      });

      // 2. Entrance for supporting details
      revealTimeline.fromTo(
        [subRef.current, ctaRef.current, trustRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.4"
      );

      // 3. Scroll-linked Background Logo/Ring Rotation (0 -> 360deg over 100vh)
      if (ringRef.current && heroRef.current) {
        gsap.to(ringRef.current, {
          rotation: 360,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // 4. Scroll Media Component translation
      if (mockupRef.current && heroRef.current) {
        gsap.to(mockupRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 5. Floating cards looping oscillation (translateY ±8px)
      gsap.to(".float-card-1", {
        y: 8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".float-card-2", {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1.2,
      });

      gsap.to(".float-card-3", {
        y: 6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.6,
      });
    };

    // If an intro curtain is present in DOM, wait for the slide-up completion trigger
    const hasCurtain = document.querySelector(".intro-curtain") || document.querySelector(".consent-overlay");
    if (hasCurtain) {
      window.addEventListener("introComplete", runAnimations);
    } else {
      runAnimations();
    }

    return () => {
      window.removeEventListener("introComplete", runAnimations);
    };
  }, []);

  // Split title: "AI-Powered Software Engineering for Startups & Growing Businesses"
  const titleWords = "AI-Powered Software Engineering for Startups & Growing Businesses".split(" ");

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-offwhite py-24 md:py-32"
    >
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/devsinntechnologies/30min?hide_gdpr_banner=1"
      />

      {/* Decorative Rotating Ring / Logo Mark in Background */}
      <div className="pointer-events-none absolute right-[-5%] top-[10%] z-0 h-[600px] w-[600px] opacity-[0.4] sm:right-[5%] md:top-[15%] md:h-[700px] md:w-[700px] lg:h-[800px] lg:w-[800px]">
        <svg
          ref={ringRef}
          className="h-full w-full text-stone"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" strokeDasharray="10 6" />
          {/* Logo accent mark elements */}
          <path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50" strokeWidth="1" />
          <circle cx="50" cy="10" r="2" fill="var(--color-teal)" stroke="none" />
          <circle cx="50" cy="90" r="2" fill="var(--color-teal)" stroke="none" />
          <circle cx="10" cy="50" r="2" fill="var(--color-teal)" stroke="none" />
          <circle cx="90" cy="50" r="2" fill="var(--color-teal)" stroke="none" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1568px] px-5 sm:px-8 lg:px-10 xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-16">

          {/* Left Column - Copy & Call to Actions */}
          <div className="flex flex-col justify-center lg:col-span-7 xl:col-span-6">

            {/* Eyebrow badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
                B2B Software Engineering Partner
              </span>
            </div>

            {/* Headline with text-reveal split words */}
            <h1
              ref={headingRef}
              className=" text-3xl md:text-6xl leading-[1.05] tracking-tight"
            >
              {titleWords.map((word, i) => (
                <span key={i} className="reveal-wrapper mr-[0.25em]">
                  <span className="">{word}</span>
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              ref={subRef}
              className="body-text mt-6 max-w-[580px] text-gray"
            >
              We build scalable web apps, mobile apps, SaaS platforms, AI agents, and automation systems that help businesses reduce manual work, improve operations, and launch faster.
            </p>

            {/* Interactive CTAs */}
            <div
              ref={ctaRef}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                id="hero-cta-consultation"
                variant="primary"
                onClick={() => setIsCalendlyOpen(true)}
              >
                Book a Free Consultation
              </Button>

              <Button
                id="hero-cta-audit"
                variant="outline"
                href="/contact?type=product-audit"
              >
                Request Product Audit
              </Button>
            </div>

            {/* Trust items */}
            <div
              ref={trustRef}
              className="mt-10 flex flex-wrap items-center gap-2 border-t border-stone pt-6"
            >
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center">
                  <span className="caption-text rounded-full border border-stone bg-offwhite px-3 py-1 text-nearblack">
                    {item}
                  </span>
                  {i < trustItems.length - 1 && (
                    <span className="mx-2 text-stone">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Product mockups */}
          <div className="relative flex justify-center lg:col-span-5 xl:col-span-6">

            {/* Large Product UI Mockup (scroll translates) */}
            <div
              ref={mockupRef}
              className="relative w-full max-w-[500px] rounded-2xl border border-stone bg-offwhite p-3 shadow-md xl:max-w-[540px]"
              style={{ willChange: "transform" }}
            >
              {/* Fake Application Window Chrome */}
              <div className="mb-3 flex items-center justify-between border-b border-stone pb-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-stone" />
                  <span className="h-2.5 w-2.5 rounded-full bg-stone" />
                  <span className="h-2.5 w-2.5 rounded-full bg-stone" />
                </div>
                <div className="text-[10px] text-gray">devsinn.saas/dashboard</div>
                <div className="w-8" />
              </div>

              {/* Fake Application Dashboard content */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-lg border border-stone bg-offwhite p-4">
                  <div className="h-3 w-20 rounded bg-stone" />
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-nearblack">$148,250</span>
                    <span className="text-[10px] text-teal">+18%</span>
                  </div>
                  <div className="mt-4 h-[90px] w-full rounded bg-stone/40 p-2 flex items-end justify-between gap-1">
                    <div className="h-[20%] w-[12%] rounded-sm bg-teal" />
                    <div className="h-[45%] w-[12%] rounded-sm bg-stone" />
                    <div className="h-[30%] w-[12%] rounded-sm bg-stone" />
                    <div className="h-[60%] w-[12%] rounded-sm bg-stone" />
                    <div className="h-[55%] w-[12%] rounded-sm bg-stone" />
                    <div className="h-[80%] w-[12%] rounded-sm bg-teal" />
                  </div>
                </div>

                <div className="rounded-lg border border-stone bg-offwhite p-3 flex flex-col justify-between">
                  <div>
                    <div className="h-2 w-12 rounded bg-stone" />
                    <div className="mt-3 text-lg font-bold text-nearblack">98.4%</div>
                  </div>
                  <div className="h-10 w-full rounded-full border-2 border-stone border-t-teal flex items-center justify-center text-[9px] text-teal font-semibold">
                    Uptime
                  </div>
                </div>

                <div className="col-span-3 rounded-lg border border-stone bg-offwhite p-4">
                  <div className="h-2.5 w-32 rounded bg-stone" />
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-20 rounded bg-stone" />
                      <div className="h-2.5 w-8 rounded bg-teal/20 text-[9px] text-teal font-bold flex items-center justify-center">Active</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="h-2.5 w-24 rounded bg-stone" />
                      <div className="h-2.5 w-8 rounded bg-stone flex items-center justify-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mockup Card 1: Lead Chat Bot */}
            <div className="float-card-1 absolute left-[-20px] top-[15%] z-20 w-[170px] rounded-xl border border-stone bg-offwhite p-3 shadow-md sm:left-[-10px] md:left-[-40px]">
              <div className="flex items-center gap-1.5 border-b border-stone pb-1.5 mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                <span className="text-[9px] font-bold text-nearblack uppercase tracking-wider">AI Agent Active</span>
              </div>
              <div className="space-y-1.5">
                <div className="rounded bg-stone/40 p-1.5 text-[8px] text-nearblack">
                  "Found a matches matching your MVP budget."
                </div>
                <div className="rounded bg-teal text-offwhite p-1.5 text-[8px] text-right self-end ml-4">
                  "Book consultation"
                </div>
              </div>
            </div>

            {/* Floating Mockup Card 2: Active Integrations */}
            <div className="float-card-2 absolute right-[-20px] bottom-[25%] z-20 w-[160px] rounded-xl border border-stone bg-offwhite p-3 shadow-md sm:right-[-10px] md:right-[-30px]">
              <div className="h-2 w-16 rounded bg-stone mb-3" />
              <div className="flex items-center justify-between">
                <span className="caption-text text-[10px] font-bold text-nearblack">Webhook Sync</span>
                <span className="text-[10px] text-teal font-bold">100%</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-stone overflow-hidden">
                <div className="h-full w-[95%] bg-teal" />
              </div>
            </div>

            {/* Floating Mockup Card 3: Metrics summary */}
            <div className="float-card-3 absolute left-[15%] bottom-[-30px] z-20 w-[180px] rounded-xl border border-stone bg-offwhite p-3.5 shadow-md flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                ✓
              </div>
              <div>
                <div className="text-[8px] text-gray uppercase font-semibold">Security Check</div>
                <div className="text-[11px] font-bold text-nearblack">Fully Compliant</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
