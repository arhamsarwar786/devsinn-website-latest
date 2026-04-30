"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion";
import { projectsByCategory } from "@/lib/projects";
import Link from "next/link";
import SectionDivider from "@/components/ui/SectionDivider";
import ProjectCard from "@/components/projects/ProjectCard";

type Highlight = {
  title: string;
  description: string;
};

type ServiceData = {
  id: string;
  navLabel: string;
  cardImage: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  mainTitle: string;
  title: string;
  subtitle: string;
  mainDescription: string;
  highlightTitle: string;
  highlights: Highlight[];
  technologies: string[];
  projects: string[];
};

const themeMap: Record<string, { color1: string; color2: string }> = {
  "Creative-Design": { color1: "var(--primary)", color2: "var(--accent)" }, // blue/cyan
  "Web-Development-Solutions": { color1: "var(--accent)", color2: "var(--accent)" }, // indigo
  "App-Development-Solutions": { color1: "var(--accent)", color2: "#f472b6" }, // purple
  "Game-Development": { color1: "#ec4899", color2: "#f472b6" }, // pink
  "Cloud-Computing-Services": { color1: "#34d399", color2: "#2dd4bf" }, // emerald
  "Digital-Marketing": { color1: "#fb923c", color2: "#f59e0b" }, // orange
};

export default function ServiceDetail({ service }: { service: ServiceData }) {
  const theme = themeMap[service.id] || themeMap["Web-Development-Solutions"];

  // Map service ID to real project categories
  const categoryMap: Record<string, keyof typeof projectsByCategory> = {
    "Creative-Design": "webDesign",
    "Web-Development-Solutions": "webDev",
    "App-Development-Solutions": "appDev",
    "Game-Development": "appDev", // Fallback for game
    "Cloud-Computing-Services": "webDev", // Fallback for cloud
    "Digital-Marketing": "webDesign", // Fallback for digital
  };
  const categoryKey = categoryMap[service.id];
  const realProjects = categoryKey ? projectsByCategory[categoryKey] : [];

  return (
    <main className="bg-[var(--surface-0)] text-white overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .theme-hover-tech:hover {
          border-color: ${theme.color1}80 !important;
          color: ${theme.color1} !important;
        }
        .theme-hover-card:hover {
          border-color: ${theme.color1}66 !important;
        }
      `}} />

      <section className="relative h-screen overflow-hidden bg-[var(--surface-1)] text-white">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0"
        >
          <Image
            src="/globe-premium.png"
            alt={`${service.mainTitle} background`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[center_center] opacity-30 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,26,0.95)_0%,rgba(6,12,26,0.7)_50%,rgba(6,12,26,0.95)_100%)]" />
        <div 
          className="absolute inset-0"
          style={{ background: `radial-gradient(circle at 50% 50%, ${theme.color1}26 0%, transparent 60%)` }}
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto flex h-full w-full max-w-[1568px] items-center px-5 pb-8 pt-20 sm:px-8 sm:pt-32 lg:px-10 lg:pt-[118px] xl:px-16 xl:pt-[138px]"
        >
          <div className="max-w-[760px]">
            <motion.div 
              variants={fadeInUp} 
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{ borderColor: `${theme.color1}4D`, backgroundColor: `${theme.color1}1A` }}
            >
              <span 
                className="text-[12px] font-extrabold uppercase tracking-[0.2em]"
                style={{ color: theme.color1 }}
              >
                {service.heroEyebrow}
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeInUp} 
              className="text-[1.6rem] font-black leading-[1.1] tracking-[-0.04em] xs:text-[1.8rem] sm:text-[2.2rem] lg:text-[2.8rem] xl:text-[3.2rem]"
            >
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${theme.color1}, ${theme.color2})` }}>
                {service.heroTitle}
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-4 max-w-[620px] text-[0.95rem] leading-[1.7] text-white/70 sm:mt-6 sm:text-[1.1rem]">
              {service.heroDescription}
            </motion.p>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Main Overview Section */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        {/* Soft Background Glow */}
        <div 
          className="pointer-events-none absolute left-[10%] top-[50%] h-[600px] w-[600px] -translate-y-1/2 rounded-full blur-[100px]"
          style={{ background: `radial-gradient(circle, ${theme.color2}14 0%, transparent 70%)` }}
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,460px)] lg:gap-20"
        >
          <motion.div variants={fadeInUp}>
            <p 
              className="text-[12px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: theme.color2 }}
            >
              Service Overview
            </p>
            <h2 className="mt-4 text-[1.8rem] font-black leading-[1.1] tracking-[-0.04em] sm:text-[2.2rem] lg:text-[2.6rem]">
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${theme.color1}, ${theme.color2})` }}>
                {service.title}
              </span>
              <span className="mt-1 block font-light text-white/50">
                {service.subtitle}
              </span>
            </h2>
            <p className="mt-6 max-w-[760px] text-[1.05rem] leading-[1.8] text-white/70">
              {service.mainDescription}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="group relative rounded-[2rem] border border-white/10 bg-[var(--surface-1)] p-8 shadow-2xl transition-all duration-500 hover:border-white/20 sm:p-10">
            {/* Tech Stack Glow Container */}
            <div 
              className="absolute -inset-1 rounded-[2.2rem] opacity-30 blur-2xl transition duration-500 group-hover:opacity-60"
              style={{ background: `radial-gradient(circle at 100% 0%, ${theme.color2} 0%, transparent 60%)` }}
            />
            
            <div className="relative z-10">
              <p 
                className="text-[12px] font-bold uppercase tracking-[0.22em]"
                style={{ color: theme.color1 }}
              >
                Technology Stack
              </p>
              <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <motion.span
                    key={technology}
                    variants={fadeInUp}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="theme-hover-tech inline-flex rounded-full border border-white/10 bg-[var(--surface-0)] px-5 py-2.5 text-[0.95rem] font-semibold text-white/90 shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-colors"
                  >
                    {technology}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Highlights Section */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        {/* Soft Background Glow */}
        <div 
          className="pointer-events-none absolute right-[10%] top-[40%] h-[700px] w-[700px] rounded-full blur-[100px]"
          style={{ background: `radial-gradient(circle, ${theme.color1}14 0%, transparent 70%)` }}
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto w-full max-w-[1400px]"
        >
          <motion.div variants={fadeInUp} className="text-center md:text-left mb-16">
            <p 
              className="text-[12px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: theme.color2 }}
            >
              {service.highlightTitle}
            </p>
            <h2 className="mt-3 text-[1.8rem] font-black leading-[1.1] text-white sm:text-[2.2rem] lg:text-[2.6rem]">
              What <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${theme.color1}, ${theme.color2})` }}>We Optimize</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.highlights.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-[2rem] border border-white/5 bg-[var(--surface-1)] p-8 shadow-[0_20px_48px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 sm:p-10"
              >
                {/* Internal Glow */}
                <div 
                  className="absolute inset-0 rounded-[2rem] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
                  style={{ background: `radial-gradient(circle at top right, ${theme.color1} 0%, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div 
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-12"
                    style={{ 
                      backgroundImage: `linear-gradient(to bottom right, ${theme.color1}, ${theme.color2})`,
                      boxShadow: `0 0 20px ${theme.color1}66`
                    }}
                  >
                     <span className="text-[1.2rem] font-bold leading-none">+</span>
                  </div>
                  <h3 className="mt-6 text-[1.4rem] font-bold leading-[1.3] tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[1rem] leading-[1.75] text-white/60">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Selected Work */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto w-full max-w-[1400px]"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p 
              className="text-[12px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: theme.color2 }}
            >
              Proof Of Excellence
            </p>
            <h2 className="mt-3 text-[1.8rem] font-black leading-[1.1] text-white sm:text-[2.2rem] lg:text-[2.6rem]">
              Selected <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${theme.color1}, ${theme.color2})` }}>Work</span>
            </h2>
          </motion.div>
          
          <div 
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            style={{ perspective: "1200px" }}
          >
            {realProjects.length > 0 ? realProjects.map((project, index) => (
              <ProjectCard key={project.id} item={project} index={index} />
            )) : null}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
