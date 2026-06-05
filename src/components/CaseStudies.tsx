"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, Variants } from "framer-motion";
import Link from "next/link";
import SectionDivider from "@/components/ui/SectionDivider";

const projects = [
  {
    name: "ChatSupplies",
    category: "AI / SaaS / Customer Support",
    image: "/images/dokyai.png",
    impact: "AI-driven customer operations that reduced response time by 60%.",
    link: "/case-studies/chatsupplies",
  },
  {
    name: "Drafidox",
    category: "Web + Mobile / Document Tools Platform",
    image: "/images/drafidox.png",
    impact: "Consolidated multiple image and document workflows into a single workspace.",
    link: "/case-studies/drafidox",
  },
  {
    name: "Smart Logo Maker",
    category: "AI Design Tool",
    image: "/images/smartlogomaker.png",
    impact: "Custom brand design generated instantly with advanced LLM vector editing.",
    link: "/case-studies/smart-logo-maker",
  },
  {
    name: "RMS (Restaurant Management System)",
    category: "SaaS / POS / Business Operations",
    image: "/images/rubngub.png",
    impact: "Reduced table turn time by 30% through live WebSocket kitchen ordering.",
    link: "/case-studies/drm",
  },
  {
    name: "ABC Kids",
    category: "Flutter / Education Mobile App",
    image: "/images/abckids.jpg",
    impact: "Highly interactive Flutter app helping over 50,000 active kids learn.",
    link: "/case-studies/abckids",
  },
  {
    name: "Iqra Quran / Meri Ride",
    category: "Mobile App / Service App",
    image: "/images/meriride.png",
    impact: "Inclusive mobility tools and Quran learning modules on iOS and Android.",
    link: "/case-studies/meri-ride",
  },
];

const headingVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [xRange, setXRange] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);

      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportW = window.innerWidth;
        // On desktop, the track scrolls by its width minus viewport width plus outer margins
        setXRange(Math.max(0, trackWidth - viewportW + 96));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    // Timeout to make sure scrollWidth is correctly measured after layouts settle
    const timer = setTimeout(handleResize, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -xRange]);

  const headingText = "Selected Case Studies. Built with High Precision.";
  const headingWords = headingText.split(" ");

  return (
    <section
      ref={containerRef}
      className={`projects-section relative w-full bg-offwhite ${
        isDesktop ? "h-[300vh]" : "py-20"
      }`}
    >
      <SectionDivider />

      {/* Sticky view frame on desktop */}
      <div
        className={
          isDesktop
            ? "sticky top-0 h-screen overflow-hidden flex flex-col justify-center"
            : "relative flex flex-col"
        }
      >
        {/* Header */}
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-16 mb-8 md:mb-12">
          <div className="max-w-[620px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
                Our Works
              </span>
            </div>

            <motion.h2
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="projects-heading h2-section leading-tight tracking-tight text-nearblack"
            >
              {headingWords.map((word, i) => (
                <span key={i} className="reveal-wrapper mr-[0.25em]">
                  <motion.span
                    variants={wordVariants}
                    className="reveal-word inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
            <p className="body-text mt-4 text-gray text-base">
              Honest case studies covering challenges, architecture, and core outcomes for SaaS, mobile apps, and AI platforms.
            </p>
          </div>
        </div>

        {/* Horizontal / Pinned Slideshow Container */}
        <div className="relative w-full overflow-hidden md:h-[620px] lg:h-[660px] flex items-center">
          {/* Track containing cards */}
          <motion.div
            ref={trackRef}
            style={{ x: isDesktop ? x : 0 }}
            className="projects-track flex flex-col md:flex-row gap-8 w-full md:w-max px-5 sm:px-8 lg:px-10 xl:px-16 max-md:snap-y max-md:snap-mandatory max-md:overflow-y-auto max-md:h-[70vh]"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-5%" }}
                className="project-card shrink-0 w-full md:w-[calc((100vw-120px)/2)] lg:w-[calc((100vw-160px)/2)] xl:w-[620px] rounded-2xl border border-stone bg-offwhite p-6 md:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-teal max-md:snap-start select-none"
                style={{ willChange: "transform" }}
              >
                <div>
                  {/* Category tag */}
                  <div className="mb-4">
                    <span className="caption-text rounded-full bg-stone px-3 py-1 font-semibold text-teal">
                      {project.category}
                    </span>
                  </div>

                  {/* Screenshot Container with Hover-Scroll-Down Effect */}
                  <div className="project-image-container mb-5">
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="project-image-scroll"
                    />
                  </div>

                  <h3 className="h3-card mb-2 text-nearblack font-semibold">
                    {project.name}
                  </h3>
                  <p className="body-text text-gray text-sm mb-6 leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                {/* View Link */}
                <div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 text-teal font-bold group hover:underline underline-offset-4"
                  >
                    View Case Study
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
