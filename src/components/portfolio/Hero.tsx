"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] flex-col overflow-hidden bg-[#060C1A] text-white">
      {/* Deep Space Background Glows */}
      <div className="absolute inset-0 bg-[#060C1A]" />

      {/* Animated Glowing Orbs */}
      <motion.div
        className="pointer-events-none absolute left-[50%] top-[30%] h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* The Globe Background - Premium Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {/* Glow exactly under the globe */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[64%] top-[78%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-gradient-to-tr from-[#38bdf8] to-[#c084fc] sm:left-[68%] sm:top-[70%] lg:left-[65%] lg:top-[50%] lg:h-[800px] lg:w-[800px]"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 20, repeat: Infinity, ease: "easeInOut"
          }}
          className="absolute inset-0"
        >
          <Image
            src="/globe-premium.png"
            alt="Digital globe background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-100 brightness-110 contrast-125 mix-blend-screen drop-shadow-[0_0_50px_rgba(56,189,248,0.6)]"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic Vignette Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#060C1A] via-[#060C1A]/80 to-transparent lg:via-[#060C1A]/60" />
      <div className="pointer-events-none absolute inset-0 z-10 lg:bg-gradient-to-r lg:from-[#060C1A] lg:via-[#060C1A] lg:to-transparent lg:w-[55%]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#060C1A] via-transparent to-[#060C1A]/80" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-5 pt-20 pb-10 sm:px-8 lg:px-10 xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-[820px]"
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-5 py-2.5 backdrop-blur-md">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-[#38bdf8]">
              Our Selected Work
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-[2.2rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]"
          >
            Showcasing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">
              Excellence Through
            </span> <br />
            Our Work
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-[600px] text-[1.1rem] leading-[1.7] text-white/70 sm:text-[1.25rem]"
          >
            We craft elegant, engaging, and responsive web and mobile applications engineered for the modern digital era.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/pdf/Devsinn-Technologies-Portfolio.pdf"
              download="Devsinn-Technologies-Portfolio.pdf"
              className="group relative w-full max-w-[248px] sm:w-auto sm:max-w-none cursor-pointer overflow-hidden rounded-full bg-white px-8 py-4 sm:px-10 shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/10 via-[#38bdf8]/30 to-[#38bdf8]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative text-[15px] font-bold text-[#060C1A] transition-colors group-hover:text-[#060C1A]">
                Download Portfolio
              </span>
            </a>

            <Button
              href="/contact"
              variant="outline"
              fullWidth
              className="max-w-[248px] hover:scale-[1.02] sm:max-w-[260px] lg:h-[56px] lg:rounded-full"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
