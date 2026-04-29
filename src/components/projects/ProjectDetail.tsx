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
  return (
    <main className="bg-[#060C1A] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0A0F1E] px-5 pb-16 pt-[138px] text-white sm:px-8 sm:pb-20 sm:pt-[154px] lg:px-10 lg:pb-24 lg:pt-[168px] xl:px-16 min-h-[100svh] flex flex-col justify-end">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0"
        >
          {/* Blurred background layer to fill gaps */}
          <Image
            src={project.heroImage}
            alt=""
            fill
            className="object-cover opacity-30 blur-[60px]"
          />
          {/* Main fitting image without weird blending */}
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60 mix-blend-overlay"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A] via-[#060C1A]/90 to-[#060C1A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-8 lg:gap-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex w-fit items-center gap-3 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-5 py-2 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#38bdf8] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38bdf8] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#38bdf8]"></span>
            </span>
            {project.categoryLabel}
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
            <div className="max-w-[720px]">
              <motion.h1 variants={fadeInUp} className="text-[2rem] font-black leading-[1.0] tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[4rem]">
                {project.title}
              </motion.h1>
            </div>

            <motion.div variants={fadeInUp} className="max-w-[700px]">
              <div className="relative rounded-[2rem] border border-white/10 bg-[#0A0F1E]/40 p-6 md:p-7 backdrop-blur-2xl">
                <div className="relative z-10 flex flex-col gap-6">
                  <p className="text-[1rem] leading-[1.6] text-white/80 font-medium tracking-tight">
                    {project.about}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="group relative overflow-hidden inline-flex h-[56px] items-center justify-center rounded-2xl bg-gradient-to-r from-[#38bdf8] to-[#818cf8] px-10 text-[15px] font-bold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] active:scale-[0.98]"
                    >
                      <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative">Start a Similar Project</span>
                    </Link>
                    <Link
                      href="/portfolio"
                      className="inline-flex h-[56px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-10 text-[15px] font-bold text-white transition-all hover:bg-white/10 hover:border-[#38bdf8]/50 hover:text-[#38bdf8]"
                    >
                      Back to Portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* STRATEGY & DESIGN SECTION */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        {/* Decorative Orbs */}
        <div className="pointer-events-none absolute left-[0%] top-[40%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] blur-[80px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#818cf8]">
              About Project
            </p>
            <h2 className="mt-4 text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4rem]">
              Crafted to feel polished, fast, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">conversion-focused.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2"
          >
            <motion.article
              variants={card3D}
              whileHover="hover"
              className="group relative rounded-[2rem] border border-white/10 bg-[#0A0F1E] p-8 transition-all duration-500 hover:border-white/20 shadow-xl"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#38bdf8]/0 to-[#38bdf8]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#38bdf8]/10 group-hover:to-transparent group-hover:opacity-100" />
              <h3 className="relative z-10 text-[1.6rem] font-bold tracking-[-0.03em] text-white">
                Strategic Experience
              </h3>
              <p className="relative z-10 mt-4 text-[1.05rem] leading-[1.7] text-white/60">
                Every section is designed to support clarity, trust, and a stronger user journey from first glance to final action.
              </p>
            </motion.article>
            <motion.article
              variants={card3D}
              whileHover="hover"
              className="group relative rounded-[2rem] border border-white/10 bg-[#0A0F1E] p-8 transition-all duration-500 hover:border-white/20 shadow-xl"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#818cf8]/0 to-[#818cf8]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#818cf8]/10 group-hover:to-transparent group-hover:opacity-100" />
              <h3 className="relative z-10 text-[1.6rem] font-bold tracking-[-0.03em] text-white">
                Brand-Aligned Design
              </h3>
              <p className="relative z-10 mt-4 text-[1.05rem] leading-[1.7] text-white/60">
                The visuals, messaging, and interface patterns are shaped to match the product identity while staying clean and easy to use.
              </p>
            </motion.article>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* SNEAK PEEK SECTION */}
      <section className="relative px-5 py-20 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        {/* Soft Ambient Gloq */}
        <div className="pointer-events-none absolute right-[10%] top-[40%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.08)_0%,transparent_70%)] blur-[100px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-16"
        >
          <motion.div variants={fadeInUp} className="max-w-[720px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#c084fc]">
              A Sneak Peek
            </p>
            <h2 className="mt-4 text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4rem]">
              A closer look at the screens and moments that shape the product.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-x-8 gap-y-16 lg:gap-x-12"
            style={{ perspective: "2500px" }}
          >
            {project.sneakPeekImages.map((image, index) => (
              <motion.article
                key={`${project.slug}-${image}-${index}`}
                variants={card3D}
                whileHover="hover"
                className={`group relative transition-all duration-500 ${project.categoryKey === "appDev" ? "w-[160px] sm:w-[200px] lg:w-[240px] aspect-[9/18]" : "w-full lg:w-[30%] aspect-video"}`}
                style={{
                  translateY: project.categoryKey === "appDev" ? (index % 2 === 0 ? "0px" : "60px") : "0px"
                }}
              >
                {/* Enhanced Ambient Glow */}
                {project.categoryKey === "appDev" && (
                  <div className="absolute inset-x-0 -inset-y-6 bg-[#38bdf8]/10 blur-[80px] opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
                )}

                {/* Ultimate Phone Frame Mockup */}
                {project.categoryKey === "appDev" ? (
                  <div className="relative h-full w-full p-[3px] bg-[#1E293B] rounded-[2.8rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
                    {/* Metallic Outer Edge with subtle shine */}
                    <div className="absolute inset-0 border-[1.5px] border-white/20 rounded-[2.8rem] pointer-events-none z-30" />
                    
                    {/* Screen Container */}
                    <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-black">
                       {/* Dynamic Island Notch */}
                       <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-black rounded-full z-40 shadow-inner flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-white/5 ml-7" />
                       </div>
                       
                       <Image
                        src={image}
                        alt={`${project.title} preview ${index + 1}`}
                        fill
                        sizes="(max-width: 1023px) 50vw, 25vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      
                      {/* Premium Screen Reflection & Sweep */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-60 pointer-events-none" />
                      <motion.div 
                        variants={{
                          hover: { x: ["-100%", "200%"] }
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0F1E] shadow-2xl"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} preview ${index + 1}`}
                      fill
                      sizes="(max-width: 1023px) 100vw, 33vw"
                      className="object-cover object-top opacity-90 transition-[object-position] duration-[7000ms] ease-in-out group-hover:object-bottom group-hover:opacity-100"
                      style={{ transition: 'object-position 7s ease-in-out, opacity 0.5s ease-out' }}
                    />
                  </div>
                )}

                {/* Refined Minimalist Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center opacity-0 transition-all duration-700 group-hover:bottom-6 group-hover:opacity-100 z-50">
                   <div className="inline-flex rounded-full border border-white/10 bg-black/40 px-6 py-2 backdrop-blur-2xl">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/90">Screen {index + 1}</span>
                   </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* TECHNOLOGIES SECTION */}
      <section className="relative px-5 py-20 pb-40 sm:px-8 sm:py-32 lg:px-10 xl:px-16 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-16"
        >
          <motion.div variants={fadeInUp} className="max-w-[720px] text-center mx-auto">
            <p className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#38bdf8]">
              Technologies
            </p>
            <h2 className="mt-4 text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4rem]">
              Tools behind the build.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {project.technologies.map((technology) => (
              <motion.article
                key={`${project.slug}-${technology.name}`}
                variants={card3D}
                whileHover="hover"
                className="group relative flex min-h-[164px] flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[#0A0F1E] px-6 py-8 text-center transition-all duration-300 hover:border-[#38bdf8]/50 shadow-2xl"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#38bdf8]/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:from-[#38bdf8]/10 group-hover:opacity-100" />
                <div className="relative z-10 flex h-[60px] w-[60px] items-center justify-center opacity-80 transition-opacity group-hover:opacity-100 filter brightness-200 contrast-[1.2]">
                  <Image
                    src={technology.logo}
                    alt={technology.name}
                    fill
                    sizes="60px"
                    className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />
                </div>
                <p className="relative z-10 mt-5 text-[1.1rem] font-bold text-white group-hover:text-[#38bdf8] transition-colors duration-300">
                  {technology.name}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
