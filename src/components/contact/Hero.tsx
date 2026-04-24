"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/motion";

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
      <motion.div
        className="pointer-events-none absolute left-[60%] top-[40%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 60%)" }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
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
          className="absolute left-[64%] top-[78%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-gradient-to-tr from-[#38bdf8] to-[#818cf8] sm:left-[68%] sm:top-[70%] lg:left-[65%] lg:top-[50%] lg:h-[800px] lg:w-[800px]"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/globe-premium.png"
            alt="Digital globe background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[64%_78%] opacity-90 mix-blend-screen drop-shadow-[0_0_30px_rgba(56,189,248,0.5)] sm:object-[68%_70%] lg:object-[center_center]"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic Vignette Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#060C1A] via-[#060C1A]/80 to-transparent lg:via-[#060C1A]/40" />
      <div className="pointer-events-none absolute inset-0 z-10 lg:bg-gradient-to-r lg:from-[#060C1A] lg:via-[#060C1A] lg:to-transparent lg:w-[45%]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#060C1A] via-transparent to-[#060C1A]/80" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center px-5 pt-20 pb-10 sm:px-8 lg:px-10 xl:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="w-full max-w-[650px]"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#818cf8]/30 bg-[#818cf8]/10 px-5 py-2.5 backdrop-blur-md">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-[#818cf8]">
              Let's Connect
            </span>
          </motion.div>

          <h1 className="text-[2.2rem] font-black leading-[1.0] tracking-[-0.04em] text-white sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">Touch</span>
          </h1>
          <p className="mt-8 max-w-[500px] text-[1.1rem] font-medium leading-[1.7] text-white/70 sm:text-[1.25rem]">
            Get in touch with Devsinn Technologies to discuss your next breakthrough digital product.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 lg:bottom-12"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Scroll Down</span>
          <motion.div
            className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5"
          >
            <motion.div
              className="h-2 w-1.5 rounded-full bg-white/80"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
