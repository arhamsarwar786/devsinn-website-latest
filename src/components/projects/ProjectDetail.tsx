"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { fadeInUp, staggerContainer, fadeIn, card3D } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const isApp = project.categoryKey === "appDev";

  return (
    <main className="bg-offwhite text-nearblack overflow-hidden">
      
      {/* ── 1. HERO SECTION (SPLIT EDITORIAL LAYOUT) ── */}
      <section className="relative px-5 pt-36 pb-20 sm:px-8 sm:pt-40 sm:pb-24 lg:px-10 lg:pt-48 lg:pb-28 xl:px-16 bg-white border-b border-stone">
        <div className="mx-auto w-full max-w-[1400px]">
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center xl:gap-16">
            
            {/* Left Column: Summary and Copy */}
            <div className="flex flex-col justify-center text-left lg:col-span-6 xl:col-span-5">
              
              {/* Category Badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
                <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-nearblack sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem]">
                {project.title}
              </h1>

              {/* Description */}
              <p className="body-text text-gray text-base mt-6 max-w-[500px] leading-relaxed">
                {project.about}
              </p>

              {/* Metadata Panel */}
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-stone pt-6 max-w-[420px]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray">Deliverables</span>
                  <p className="text-sm font-semibold text-nearblack mt-1">UX/UI, Engineering</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray">Availability</span>
                  <p className="text-sm font-semibold text-teal mt-1">Live Product</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-sweep sweep-primary bg-nearblack text-offwhite border border-nearblack font-semibold text-sm px-8 py-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  <span className="relative z-10">Start a Similar Project</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-sweep sweep-outline bg-transparent border border-nearblack text-nearblack font-semibold text-sm px-8 py-4 rounded-full transition-all hover:scale-[1.02] hover:bg-nearblack hover:text-offwhite cursor-pointer"
                >
                  <span className="relative z-10">Back to Portfolio</span>
                </Link>
              </div>

            </div>

            {/* Right Column: High-fidelity Showcase Mockup */}
            <div className="lg:col-span-6 xl:col-span-7 flex justify-center w-full">
              {isApp ? (
                /* App Mockup Layout */
                <div className="relative flex justify-center items-center w-full max-w-[420px] aspect-[4/3] bg-stone/20 rounded-[2rem] p-8">
                  <div className="absolute h-64 w-64 rounded-full bg-teal/5 blur-3xl pointer-events-none" />
                  <div className="relative z-10 w-[200px] sm:w-[220px] aspect-[9/18] p-[3px] bg-nearblack rounded-[2.8rem] shadow-xl overflow-hidden border border-stone">
                    <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-nearblack">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-40" />
                      <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Browser Mockup Layout */
                <div className="relative w-full rounded-2xl border border-stone bg-white shadow-md overflow-hidden aspect-[4/3] group max-w-[620px]">
                  {/* Browser top chrome */}
                  <div className="h-8 border-b border-stone bg-offwhite flex items-center px-4 gap-1.5 shrink-0 select-none">
                    <span className="h-2.5 w-2.5 rounded-full bg-stone" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone" />
                    <span className="h-2.5 w-2.5 rounded-full bg-stone" />
                  </div>
                  {/* Scrolling screenshot frame */}
                  <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden bg-offwhite">
                    <img
                      src={`${project.mainImage}?v=9`}
                      alt={`${project.title} screenshot`}
                      className="absolute top-0 left-0 w-full h-auto transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[58%]"
                      style={{
                        imageRendering: 'auto',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform'
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. STRATEGY & EXPERIENCE SECTION ── */}
      <section className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden bg-white">
        <SectionDivider />
        <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-20">
          
          <div className="lg:col-span-5 text-left">
            <p className="text-[12px] font-bold uppercase tracking-wider text-teal">
              Core Focus
            </p>
            <h2 className="mt-4 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-nearblack sm:text-[3.5rem]">
              Crafted for conversion, speed, and scale.
            </h2>
            <p className="body-text text-gray text-base mt-6 leading-relaxed">
              Every detail is engineered with operations transparency and target business performance indicators in mind.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <article className="group rounded-[2rem] border border-stone bg-offwhite p-8 transition-all duration-300 hover:border-teal/50 text-left">
              <h3 className="text-[1.4rem] font-bold tracking-tight text-nearblack">
                Strategic UX Architecture
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-gray">
                We layout and prototype clear navigation paths that build trust immediately and convert first-time users into active buyers.
              </p>
            </article>

            <article className="group rounded-[2rem] border border-stone bg-offwhite p-8 transition-all duration-300 hover:border-teal/50 text-left">
              <h3 className="text-[1.4rem] font-bold tracking-tight text-nearblack">
                High Performance Engineering
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-gray">
                Engineered with modular, clean code that loads immediately, operates without latency, and scales alongside your active audience.
              </p>
            </article>
          </div>

        </div>
      </section>

      {/* ── 3. SNEAK PEEK / WORKTHROUGH ── */}
      <section className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden bg-offwhite border-t border-b border-stone">
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-16">
          
          <div className="max-w-[720px] text-left">
            <p className="text-[12px] font-bold uppercase tracking-wider text-teal">
              Interface Walkthrough
            </p>
            <h2 className="mt-4 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-nearblack sm:text-[3.5rem]">
              A closer look at the key screens.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {project.sneakPeekImages.map((image, index) => (
              <div
                key={`${project.slug}-peek-${index}`}
                className="w-full flex flex-col items-center"
              >
                {isApp ? (
                  /* App Mockup Screens */
                  <div className="relative w-[200px] aspect-[9/18] p-[3px] bg-nearblack rounded-[2.8rem] shadow-md border border-stone overflow-hidden group">
                    <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-nearblack">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes="200px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : (
                  /* Web/SaaS Screens */
                  <div className="relative w-full aspect-[4/3] rounded-2xl border border-stone bg-white shadow-sm overflow-hidden group">
                    <div className="h-8 border-b border-stone bg-offwhite flex items-center px-4 gap-1.5 shrink-0 select-none">
                      <span className="h-2 w-2 rounded-full bg-stone" />
                      <span className="h-2 w-2 rounded-full bg-stone" />
                      <span className="h-2 w-2 rounded-full bg-stone" />
                    </div>
                    <div className="relative w-full h-[calc(100%-2rem)] overflow-hidden bg-offwhite">
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition-[object-position] duration-[7000ms] ease-in-out group-hover:object-bottom"
                      />
                    </div>
                  </div>
                )}
                
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray mt-4">
                  Screen {index + 1}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. TECHNOLOGIES GRID ── */}
      <section className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden bg-white">
        <SectionDivider />
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-16">
          
          <div className="max-w-[720px] text-center mx-auto">
            <p className="text-[12px] font-bold uppercase tracking-wider text-teal">
              Technologies
            </p>
            <h2 className="mt-4 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-nearblack sm:text-[3.5rem]">
              Tools behind the build.
            </h2>
          </div>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
            {project.technologies.map((tech) => (
              <div
                key={`${project.slug}-tech-${tech.name}`}
                className="group flex flex-col items-center justify-center h-40 w-full rounded-2xl border border-stone bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal/50 hover:shadow-md"
              >
                <div className="relative h-12 w-12 flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-xs font-bold text-nearblack tracking-tight group-hover:text-teal transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
