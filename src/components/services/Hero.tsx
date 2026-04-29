"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const serviceNames = [
  "Creative Design",
  "Web Development",
  "App Development",
  "Game Development",
  "Cloud Computing",
  "Digital Marketing",
];

export default function Hero() {
  return (
    <section className="relative flex h-screen overflow-hidden bg-[var(--surface-0)] text-white">
      {/* Animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-[20%] -top-[10%] h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[5%] left-[30%] h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(34,211,153,0.1) 0%, transparent 70%)" }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col items-center justify-center px-5 pt-16 sm:px-8 sm:pt-20 lg:px-10 xl:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex w-full flex-col items-center text-center"
        >
          {/* Pill badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/25 bg-[var(--primary)]/8 px-5 py-2.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--primary)]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">What We Do</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="mt-6 max-w-[900px] text-[1.8rem] font-black leading-[1.0] tracking-[-0.04em] text-white xs:text-[2.2rem] sm:mt-8 sm:text-[2.8rem] lg:text-[4rem] xl:text-[4.5rem]"
          >
            End-to-End{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--accent)]">
              Digital
            </span>{" "}
            Services
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-[600px] text-[0.95rem] leading-[1.8] text-white/60 sm:mt-6 sm:text-[1.1rem]"
          >
            From stunning interfaces to scalable cloud infrastructure — Devsinn delivers complete
            software solutions tailored to your business.
          </motion.p>

          {/* Scrolling service tags */}
          <motion.div
            variants={fadeInUp}
            className="relative mt-8 w-full overflow-hidden sm:mt-10"
          >
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--surface-0)] to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--surface-0)] to-transparent" />

            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {[...serviceNames, ...serviceNames].map((name, i) => (
                <span
                  key={i}
                  className="inline-flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white/80 backdrop-blur-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  {name}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center gap-2"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">Scroll to explore</span>
            <motion.div
              className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
              animate={{}}
            >
              <motion.div
                className="h-2 w-1 rounded-full bg-white/60"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
