"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] overflow-hidden bg-[var(--surface-0)] text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1.5 } }
        }}
        className="absolute inset-0"
      >
        <Image
          src="/globe-premium.png"
          alt="Digital globe background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
      </motion.div>

      {/* Animated gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -left-[20%] -top-[10%] h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)" }}
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dark vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, var(--surface-0) 100%)' }} />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col justify-center px-5 sm:px-8 lg:px-10 xl:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-[800px]"
        >
          {/* Pill badge */}
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5" style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--accent-subtle)' }}>
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em]" style={{ color: 'var(--accent)' }}>The Company</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-[2.2rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
            Discover Who <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--grad-logo)' }}>
              We Are
            </span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 max-w-[600px] text-[1.1rem] leading-[1.7] text-white/70 sm:text-[1.25rem]">
            We are innovators building the future of digital experiences for companies that refuse to settle for ordinary.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-[40px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
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
    </section>
  );
}
