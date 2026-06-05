"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionDivider from "@/components/ui/SectionDivider";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "ai-automation",
    label: "AI Automation & Agents",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z" />
        <circle cx="7.5" cy="14.5" r="1.5" />
        <circle cx="16.5" cy="14.5" r="1.5" />
      </svg>
    ),
    description: "Intelligent chatbots, lead qualification, CRM/WhatsApp automation, n8n/Make workflows, and internal knowledge search engine engines.",
  },
  {
    id: "saas-mvp",
    label: "SaaS MVP Development",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M6 8h.01M9 8h6" />
      </svg>
    ),
    description: "Multi-tenant platforms with subscription billing, custom client portals, and AI-enabled features built to convert users.",
  },
  {
    id: "web-app-development",
    label: "Custom Web App Development",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <polyline points="9 8 6 11 9 14" />
        <polyline points="15 8 18 11 15 14" />
      </svg>
    ),
    description: "Dashboards, CRM tools, internal tools, scheduling software, and role-based client portals optimized for rapid growth.",
  },
  {
    id: "flutter-mobile-apps",
    label: "Flutter Mobile App Dev",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    description: "Cross-platform iOS and Android apps with offline caching, local notifications, booking features, and native hardware integrations.",
  },
  {
    id: "backend-api-cloud",
    label: "Backend, APIs & Cloud",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    description: "NestJS and FastAPI cloud structures, database scaling, API gateway creation, Docker containerization, and AWS setups.",
  },
  {
    id: "app-rescue-maintenance",
    label: "App Rescue & Maintenance",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    description: "Technical debt reviews, performance improvements, fast bug-squashing sprints, and reliable maintenance retainers.",
  },
];

export default function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(".reveal-word", { y: "0%", opacity: 1 });
      gsap.set(".service-card", { opacity: 1, y: 0 });
      return;
    }

    // Text Reveal for H2
    gsap.to(".services-heading .reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".services-heading",
        start: "top 85%",
      },
    });

    // Staggered entrance for services cards
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      }
    );

    // Scroll-linked alternating rotation on icons
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    cards.forEach((card, index) => {
      const icon = card.querySelector(".service-icon");
      if (!icon) return;

      const rotationVal = index % 2 === 0 ? 20 : -20;
      gsap.fromTo(
        icon,
        { rotation: -rotationVal },
        {
          rotation: rotationVal,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const headingText = "6 Core Services, One Reliable Partner for Growth.";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-offwhite px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16"
    >
      <SectionDivider />

      <div className="mx-auto w-full max-w-[1400px]">
        {/* Section Header - Strict copy rules */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-teal" />
            <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
              What We Build
            </span>
          </div>

          <h2 className="services-heading h2-section max-w-[800px] mx-auto leading-tight tracking-tight text-nearblack">
            {headingWords.map((word, i) => (
              <span key={i} className="reveal-wrapper mr-[0.25em]">
                <span className="reveal-word inline-block">{word}</span>
              </span>
            ))}
          </h2>

          <p className="body-text mt-4 mx-auto max-w-[550px] text-gray text-base">
            We focus on software engineering that delivers business outcomes. Clear roadmaps, clean execution, and no filler services.
          </p>
        </div>

        {/* 6 Minimal Services Grid */}
        <div className="services-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card flex flex-col justify-between rounded-2xl border border-stone bg-offwhite p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-teal"
              style={{ willChange: "transform" }}
            >
              <div>
                {/* Rotating Service Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-stone text-nearblack service-icon origin-center">
                  {service.icon}
                </div>

                <h3 className="h3-card mb-3 text-nearblack font-semibold">
                  {service.label}
                </h3>

                <p className="body-text text-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
