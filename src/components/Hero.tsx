"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import CalendlyModal from "@/components/ui/CalendlyModal";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "100+", label: "Satisfied Clients" },
  { value: "150+", label: "Projects Completed" },
  { value: "7+", label: "Years Experience" },
];

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section className="relative flex h-screen flex-col overflow-hidden bg-[var(--surface-0)] text-white">
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/devsinntechnologies/30min?hide_gdpr_banner=1"
      />

      {/* Deep Space Background Glows */}
      <div className="absolute inset-0 bg-[var(--surface-0)]" />

      {/* Animated Glowing Orbs */}
      <motion.div
        className="pointer-events-none absolute left-[60%] top-[40%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)" }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)" }}
        animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Local Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 50%, var(--primary-subtle), transparent 50%)' } as React.CSSProperties}
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
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 h-[80vmin] w-[80vmin] rounded-full blur-[120px] pointer-events-none" style={{ background: 'linear-gradient(135deg, var(--primary-subtle), var(--accent-subtle))' }} />
      </motion.div>


      {/* Cinematic Vignette Overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[var(--surface-0)] via-[var(--surface-0)]/80 to-transparent lg:via-[var(--surface-0)]/60" />
      <div className="pointer-events-none absolute inset-0 z-10 lg:bg-gradient-to-r lg:from-[var(--surface-0)] lg:via-[var(--surface-0)] lg:to-transparent lg:w-[45%]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[var(--surface-0)] via-transparent to-[var(--surface-0)]/50" />

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
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--grad-logo)' }}>
              Refine Smart
            </span> <br />
            <span className="relative inline-block">
              Web Solutions
              <motion.span
                className="absolute -bottom-2 left-0 h-1.5 w-[80%] to-transparent lg:w-[150%]" style={{ backgroundImage: 'linear-gradient(90deg, var(--primary), transparent)' }}
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
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(90deg, var(--primary-subtle), var(--primary-subtle)/0.3, var(--primary-subtle))' }} />
              <span className="relative text-[15px] font-bold text-[var(--surface-0)] transition-colors group-hover:text-[var(--surface-0)]">
                Chat With Us
              </span>
            </div>

            <div
              onClick={() => setIsCalendlyOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-3.5 backdrop-blur-md transition-all hover:bg-white/10 sm:px-10" style={{ '--hover-border': 'var(--primary)' } as React.CSSProperties} onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')} onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
            >
              <span className="text-[15px] font-bold text-white transition-colors" style={{ '--hover-color': 'var(--primary)' } as React.CSSProperties} onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={e => (e.currentTarget.style.color = 'white')}>
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
                className="relative flex-1 overflow-hidden rounded-[1rem] border border-white/10 bg-[var(--surface-1)]/80 p-3 backdrop-blur-xl shadow-2xl transition-colors sm:rounded-[1.5rem] sm:p-5 xl:max-w-[220px]" onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')} onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
              >
                {/* Internal subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, var(--primary-subtle), var(--accent-subtle))' }} />

                <div className="relative z-10 flex flex-col items-start gap-1 text-left">
                  <span className="text-[1.5rem] font-black leading-none text-transparent bg-clip-text sm:text-[2.2rem] lg:text-[2.8rem]" style={{ backgroundImage: 'var(--grad-primary)', filter: 'drop-shadow(0 0 10px var(--primary-glow))' }}>
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

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 group cursor-pointer"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 transition-colors duration-300" style={{ '--hover-color': 'var(--primary)' } as React.CSSProperties} onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
          Scroll to explore
        </span>
        
        <div className="relative h-[50px] w-[26px]">
          {/* Mouse Outer Shell */}
          <div className="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-500" />
          
          {/* Scrolling Dot Animation */}
          <div className="absolute inset-0 flex justify-center pt-2">
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                opacity: [0, 1, 0],
                scaleY: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="h-2 w-[2px] rounded-full" style={{ backgroundImage: 'var(--grad-primary)' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
