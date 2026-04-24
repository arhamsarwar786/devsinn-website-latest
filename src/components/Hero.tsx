"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import CalendlyModal from "@/components/ui/CalendlyModal";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "100+", label: "Satisfied Clients" },
  { value: "150+", label: "Projects Completed" },
  { value: "14+", label: "Years Experience" },
];

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section className="relative flex h-screen flex-col overflow-hidden bg-[#060C1A] text-white">
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/devsinntechnologies/30min?hide_gdpr_banner=1"
      />

      {/* Deep Space Background Glows */}
      <div className="absolute inset-0 bg-[#060C1A]" />

      {/* Animated Glowing Orbs */}
      <motion.div
        className="pointer-events-none absolute left-[60%] top-[40%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 60%)" }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)" }}
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Local Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.15),transparent_50%)]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 mix-blend-screen"
        >
          <source src="/video/vedio.mp4" type="video/mp4" />
        </video>

        {/* Ambient glow to enhance the cinematic feel and blend the video */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 h-[80vmin] w-[80vmin] rounded-full blur-[120px] bg-gradient-to-tr from-[#38bdf8]/20 to-[#c084fc]/15 pointer-events-none" />
      </motion.div>


      {/* Cinematic Vignette Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#060C1A] via-[#060C1A]/80 to-transparent lg:via-[#060C1A]/60" />
      <div className="pointer-events-none absolute inset-0 z-10 lg:bg-gradient-to-r lg:from-[#060C1A] lg:via-[#060C1A] lg:to-transparent lg:w-[45%]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#060C1A] via-transparent to-[#060C1A]/50" />

      {/* Floating Space Particles Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: "40px 40px" }}
      />

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-20 mx-auto w-full max-w-[1568px] flex-1 px-5 pt-16 pb-6 sm:px-8 sm:pt-20 lg:px-10 xl:px-16 flex flex-col justify-center"
      >
        <div className="flex w-full max-w-[650px] flex-col justify-center xl:max-w-[700px]">
          {/* Pill badge removed as requested */}

          <motion.h1
            variants={fadeInUp}
            className="text-[1.5rem] font-black uppercase leading-[1.05] tracking-[-0.04em] text-white xs:text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] xl:text-[3.8rem]"
          >
            We Build &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">
              Refine Smart
            </span> <br />
            <span className="relative inline-block">
              Web Solutions
              <motion.span
                className="absolute -bottom-2 left-0 h-1.5 w-[80%] bg-gradient-to-r from-[#38bdf8] to-transparent lg:w-[150%]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-3 max-w-[580px] text-[1rem] font-medium leading-[1.6] text-white/70 sm:mt-5 sm:text-[1.2rem] lg:text-[1.3rem]"
          >
            Realise your vision securely, collaborating effortlessly with anyone, anywhere, on any device.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center"
          >
            <div
              onClick={() => window.open("https://api.whatsapp.com/send?phone=923365918295", "_blank", "noopener,noreferrer")}
              className="group relative cursor-pointer overflow-hidden rounded-full bg-white px-6 py-3.5 sm:px-10 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8]/10 via-[#38bdf8]/30 to-[#38bdf8]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative text-[15px] font-bold text-[#060C1A] transition-colors group-hover:text-[#060C1A]">
                Chat With Us
              </span>
            </div>

            <div
              onClick={() => setIsCalendlyOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-3.5 backdrop-blur-md transition-all hover:border-[#38bdf8]/50 hover:bg-white/10 sm:px-10"
            >
              <span className="text-[15px] font-bold text-white transition-colors group-hover:text-[#38bdf8]">
                Book A Call
              </span>
            </div>
          </motion.div>

          {/* Moved Floating Glassmorphic Stats to the LEFT under the buttons */}
          <motion.div
            variants={staggerContainer}
            className="mt-5 flex flex-nowrap gap-2 sm:mt-6 sm:gap-3 lg:gap-4 w-full"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative flex-1 overflow-hidden rounded-[1rem] border border-white/10 bg-[#0A0F1E]/80 p-3 backdrop-blur-xl shadow-2xl transition-colors hover:border-[#38bdf8]/40 sm:rounded-[1.5rem] sm:p-5 xl:max-w-[220px]"
              >
                {/* Internal subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/0 to-[#c084fc]/0 opacity-0 transition-opacity duration-500 hover:from-[#38bdf8]/20 hover:to-[#c084fc]/20 hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-start gap-1 text-left">
                  <span className="text-[1.5rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#38bdf8] to-[#818cf8] drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] sm:text-[2.2rem] lg:text-[2.8rem]">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[0.6rem] font-bold uppercase tracking-wider text-white sm:mt-2 sm:text-[0.7rem] lg:text-[0.8rem]">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - Moved to bottom right corner slightly so it doesn't overlap the new cards position */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-2 lg:bottom-10 lg:right-12"
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5"
          animate={{}}
        >
          <motion.div
            className="h-2 w-1.5 rounded-full bg-white/80"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
