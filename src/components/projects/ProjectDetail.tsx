"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { fadeInUp, staggerContainer, fadeIn, card3D } from "@/lib/motion";

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
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40 mix-blend-screen"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A] via-[#060C1A]/80 to-[#060C1A]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_60%)]" />

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

            <motion.div variants={fadeInUp} className="max-w-[540px] rounded-[2rem] border border-white/10 bg-[#0A0F1E]/60 p-8 backdrop-blur-xl shadow-2xl">
              <p className="text-[1.1rem] leading-[1.7] text-white/70">
                {project.about}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-[15px] font-bold text-[#060C1A]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/20 to-[#38bdf8]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">Start a Similar Project</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="group relative overflow-hidden inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-[15px] font-bold text-white transition-all hover:bg-white/10 hover:border-[#38bdf8]/50"
                >
                   <span className="relative transition-colors group-hover:text-[#38bdf8]">Back to Portfolio</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

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
            className="grid gap-8 lg:grid-cols-3"
            style={{ perspective: "1200px" }}
          >
            {project.sneakPeekImages.map((image, index) => (
              <motion.article
                key={`${project.slug}-${image}-${index}`}
                variants={card3D}
                whileHover="hover"
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0F1E] shadow-2xl transition-all duration-500 hover:border-[#c084fc]/30 hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#060C1A]">
                  <Image
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

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
