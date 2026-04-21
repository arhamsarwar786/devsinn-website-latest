"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, card3D } from "@/lib/motion";

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
  mainDescription: string;
  highlightTitle: string;
  highlights: Highlight[];
  technologies: string[];
  projects: string[];
};

export default function ServiceDetail({ service }: { service: ServiceData }) {
  return (
    <main className="bg-[#060C1A] text-white overflow-hidden">
      <section className="relative overflow-hidden bg-[#0A0F1E] text-white">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0"
        >
          <Image
            src="/global.png"
            alt={`${service.mainTitle} background`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[center_center] opacity-30 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,26,0.95)_0%,rgba(6,12,26,0.7)_50%,rgba(6,12,26,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15)_0%,transparent_60%)]" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto flex min-h-[100svh] w-full max-w-[1568px] items-center px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-[118px] xl:px-16 xl:pt-[138px]"
        >
          <div className="max-w-[760px]">
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2">
              <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#38bdf8]">
                {service.heroEyebrow}
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[2.5rem] font-black leading-[1.0] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem]">
              {service.heroTitle}
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 max-w-[620px] text-[1.1rem] leading-[1.7] text-white/60 sm:text-[1.2rem]">
              {service.heroDescription}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Main Overview Section */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        {/* Soft Background Glow */}
        <div className="pointer-events-none absolute left-[10%] top-[50%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-[100px]" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,460px)] lg:gap-20"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#818cf8]">
              Service Overview
            </p>
            <h2 className="mt-6 text-[2.5rem] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[4rem]">
              {service.mainTitle}
            </h2>
            <p className="mt-8 max-w-[760px] text-[1.15rem] leading-[1.8] text-white/70">
              {service.mainDescription}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="group relative rounded-[2rem] border border-white/10 bg-[#0A0F1E] p-8 shadow-2xl transition-all duration-500 hover:border-white/20 sm:p-10">
            {/* Tech Stack Glow Container */}
            <div 
              className="absolute -inset-1 rounded-[2.2rem] opacity-30 blur-2xl transition duration-500 group-hover:opacity-60"
              style={{ background: `radial-gradient(circle at 100% 0%, #818cf8 0%, transparent 60%)` }}
            />
            
            <div className="relative z-10">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
                Technology Stack
              </p>
              <motion.div variants={staggerContainer} className="mt-8 flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <motion.span
                    key={technology}
                    variants={fadeInUp}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="inline-flex rounded-full border border-white/10 bg-[#060C1A] px-5 py-2.5 text-[0.95rem] font-semibold text-white/90 shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-colors hover:border-[#38bdf8]/50 hover:text-[#38bdf8]"
                  >
                    {technology}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        {/* Soft Background Glow */}
        <div className="pointer-events-none absolute right-[10%] top-[40%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] blur-[100px]" />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto w-full max-w-[1400px]"
        >
          <motion.div variants={fadeInUp} className="text-center md:text-left mb-16">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#818cf8]">
              {service.highlightTitle}
            </p>
            <h2 className="mt-3 text-[2.5rem] font-black leading-[1.1] text-white">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">We Optimize</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.highlights.map((item, i) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-8 shadow-[0_20px_48px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/20 sm:p-10"
              >
                {/* Internal Glow */}
                <div 
                  className="absolute inset-0 rounded-[2rem] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10"
                  style={{ background: `radial-gradient(circle at top right, #38bdf8 0%, transparent 60%)` }}
                />

                <div className="relative z-10">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#818cf8] text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-transform duration-500 group-hover:rotate-12">
                     <span className="text-[1.5rem] font-bold leading-none">+</span>
                  </div>
                  <h3 className="mt-8 text-[1.8rem] font-bold leading-[1.3] tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[1.05rem] leading-[1.75] text-white/60">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

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
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#818cf8]">
              Proof Of Excellence
            </p>
            <h2 className="mt-3 text-[2.5rem] font-black leading-[1.1] text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">Work</span>
            </h2>
          </motion.div>
          
          <div 
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            style={{ perspective: "1200px" }}
          >
            {service.projects.map((project, index) => (
              <motion.article
                key={`${service.id}-${project}-${index}`}
                variants={card3D}
                whileHover="hover"
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0F1E] shadow-2xl transition-all duration-500 hover:border-white/30"
              >
                {/* Glow layer behind image */}
                <div className="absolute -inset-2 bg-gradient-to-br from-[#38bdf8]/40 to-[#c084fc]/40 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                
                <div className="relative aspect-[413/518] w-full overflow-hidden bg-[#060C1A]">
                  <Image
                    src={project}
                    alt={`${service.mainTitle} project ${index + 1}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                    className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100"
                  />
                  {/* Floating View Project Button */}
                  <div className="absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 translate-y-12 justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] opacity-90" />
                      <div className="relative px-6 py-3 text-[14px] font-bold text-[#060C1A] shadow-2xl backdrop-blur-md cursor-pointer">
                        View Details
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
