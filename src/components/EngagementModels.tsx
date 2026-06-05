"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import SectionDivider from "@/components/ui/SectionDivider";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

const models = [
  {
    id: "fixed-mvp",
    title: "Fixed Price MVP",
    tagline: "Define the core requirements. We price it, build it, and launch it.",
    idealFor: "Startups ready to translate a validated idea into user-ready software",
    howItWorks: [
      "Discovery consultation to detail scope requirements",
      "Fixed price proposal based on defined mockups",
      "4–8 week development sprint to launch MVP",
      "Milestone check-ins with client feedback sessions",
      "Production cloud deployment & handover",
    ],
  },
  {
    id: "ai-automation-sprint",
    title: "AI Automation Sprint",
    tagline: "A rapid, focused sprint to automate manual tasks and sync CRM data.",
    idealFor: "SMEs losing hours to repetitive WhatsApp, email, or data follow-ups",
    howItWorks: [
      "Workflow audit mapping bottlenecks and tooling hooks",
      "1–2 week active sprint to build the AI agent / pipelines",
      "API integrations using n8n, Make, or custom Node script",
      "Handover training walkthrough and workflow diagrams",
      "Post-launch support window to adjust prompt accuracy",
    ],
  },
  {
    id: "monthly-dedicated-team",
    title: "Monthly Dedicated Team",
    tagline: "Dedicated software engineering resources to support your ongoing roadmap.",
    idealFor: "Scaling tech products and agencies requiring monthly engineering output",
    howItWorks: [
      "Deploy 1–4 dedicated developers to your backlog",
      "Flexible allocation with active PM reporting",
      "Weekly demos and integrated Git workflow reviews",
      "Direct Slack access with dev resources daily",
      "Scale up or adjust team composition monthly",
    ],
  },
  {
    id: "product-strategy",
    title: "Product Strategy & Dev",
    tagline: "We manage architectural decisions while you focus on business growth.",
    idealFor: "Non-technical founders looking for a full-stack engineering advisor",
    howItWorks: [
      "Continuous technical oversight & software blueprinting",
      "UI/UX Figma wireframes before writing frontend code",
      "Asynchronous tasks processing database scaling support",
      "Full DevOps support, VPS, server migrations",
      "Ongoing product iteration retainers post-launch",
    ],
  },
];

export default function EngagementModels() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set(".model-card", { opacity: 1, y: 0 });
      return;
    }

    // Heading reveal
    gsap.to(".models-heading .reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".models-heading",
        start: "top 85%",
      },
    });

    // Cards staggered entry
    gsap.fromTo(
      ".model-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const headingText = "Engagement Models. Built Around Your Roadmap.";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gray-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16"
    >
      <SectionDivider />

      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
              Collaboration
            </span>
          </div>

          <h2 className="models-heading h2-section max-w-[800px] mx-auto leading-tight tracking-tight text-nearblack">
            {headingWords.map((word, i) => (
              <span key={i} className="reveal-wrapper mr-[0.25em]">
                <span className="reveal-word inline-block">{word}</span>
              </span>
            ))}
          </h2>
          <p className="body-text mt-4 mx-auto max-w-[540px] text-gray text-base">
            Whether you need a quick automation sprint or a dedicated team for full product delivery, we have an model for you.
          </p>
        </div>

        {/* Models Grid */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
          {models.map((model) => (
            <div
              key={model.id}
              className="model-card rounded-2xl border border-stone bg-offwhite p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-teal"
              style={{ willChange: "transform" }}
            >
              <div>
                <h3 className="h3-card mb-2 text-nearblack font-semibold">
                  {model.title}
                </h3>
                <p className="body-text text-gray text-sm mb-6 leading-relaxed">
                  {model.tagline}
                </p>

                {/* Ideal for badge */}
                <div className="mb-6 rounded-xl border border-stone bg-offwhite p-3">
                  <div className="caption-text text-nearblack font-semibold text-[10px] uppercase tracking-wider mb-1">
                    Ideal For
                  </div>
                  <p className="body-text text-gray text-xs leading-relaxed">
                    {model.idealFor}
                  </p>
                </div>

                {/* How it works bullet points */}
                <div className="mb-8">
                  <div className="caption-text text-nearblack font-semibold text-[10px] uppercase tracking-wider mb-3">
                    Execution Steps
                  </div>
                  <ul className="space-y-3">
                    {model.howItWorks.map((step, idx) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 text-sm text-gray"
                      >
                        <span className="flex h-5 w-5 shrink-0 select-none items-center justify-center rounded-full bg-stone text-[10px] font-bold text-teal">
                          {idx + 1}
                        </span>
                        <span className="leading-tight">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Get Started Button */}
              <div>
                <Button
                  id={`model-cta-${model.id}`}
                  variant="outline"
                  href={`/contact?model=${model.id}`}
                  fullWidth
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
