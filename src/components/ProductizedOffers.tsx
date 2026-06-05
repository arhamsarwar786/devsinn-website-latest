"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { packages } from "@/data/packages";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function ProductizedOffers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set(".offer-card", { opacity: 1, y: 0 });
      gsap.set(".offer-price", { scale: 1, opacity: 1 });
      return;
    }

    // Header reveal
    gsap.to(".offers-heading .reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".offers-heading",
        start: "top 85%",
      },
    });

    // Cards entrance
    gsap.fromTo(
      ".offer-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 80%",
        },
      }
    );

    // Pricing scales and fades in on entry
    gsap.fromTo(
      ".offer-price",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: trackRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const headingText = "Transparent Starting Prices. Clean Scope Deliverables.";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gray-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16"
    >
      <SectionDivider />

      <div className="mx-auto w-full max-w-[1400px]">
        {/* Header */}
        <div className="mb-16 max-w-[680px]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
              Productized Offers
            </span>
          </div>

          <h2 className="offers-heading h2-section leading-tight tracking-tight text-nearblack">
            {headingWords.map((word, i) => (
              <span key={i} className="reveal-wrapper mr-[0.25em]">
                <span className="reveal-word inline-block">{word}</span>
              </span>
            ))}
          </h2>
          <p className="body-text mt-4 text-gray text-base">
            Fixed-scope engagements for common business engineering challenges. Final pricing scales with your exact requirements.
          </p>
        </div>

        {/* Horizontal scrollable track on mobile / Grid on desktop to fix vertical scroll down lock */}
        <div
          ref={trackRef}
          className="offers-track flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-8 scrollbar-hide snap-x snap-mandatory -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="offer-card snap-start w-[280px] sm:w-[340px] md:w-full shrink-0 md:shrink transition-colors duration-300 hover:border-teal flex flex-col justify-between rounded-2xl border border-stone bg-offwhite p-8"
              style={{ willChange: "transform" }}
            >
              <div>
                {/* Popular badge */}
                {pkg.isFeatured && (
                  <div className="mb-4 inline-flex rounded-full border border-teal bg-offwhite px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal">
                    Popular
                  </div>
                )}

                {/* Price Display with scale pop-in animation */}
                <div className="mb-6">
                  <div className="caption-text text-gray uppercase tracking-widest text-[10px] mb-1">
                    Starting From
                  </div>
                  <div className="offer-price flex items-baseline gap-1 origin-left">
                    <span className="text-[2.2rem] font-bold leading-none text-nearblack">
                      {pkg.startingFrom}
                    </span>
                    {pkg.unit && (
                      <span className="text-[1rem] font-semibold text-gray">
                        {pkg.unit}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="h3-card mb-1 text-nearblack font-semibold">
                  {pkg.name}
                </h3>
                <p className="body-text text-gray text-sm mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Includes bullet points */}
                <ul className="mb-8 space-y-3">
                  {pkg.includes.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-gray"
                    >
                      <svg
                        className="mt-1 shrink-0 text-teal"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button using standard sweep animation */}
              <div className="mt-auto">
                <Button
                  id={`pkg-cta-${pkg.id}`}
                  variant={pkg.isFeatured ? "primary" : "outline"}
                  href={`/contact?package=${pkg.id}`}
                  fullWidth
                >
                  {pkg.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Small Scope Notice */}
        <p className="caption-text text-center text-gray mt-8">
          * Prices are starting estimates. Final scope, integrations, and deliverables determine the exact cost.{" "}
          <Link
            href="/contact"
            className="text-teal hover:underline font-semibold"
          >
            Request custom proposal
          </Link>
        </p>
      </div>
    </section>
  );
}
