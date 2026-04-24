"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";

export default function WhoWeAre() {
  return (
    <section className="relative flex min-h-[100svh] items-center bg-[#060C1A] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-16 overflow-hidden">
      {/* Background flourishes */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,transparent_70%)] blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[80px]" />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        {/* Left Picture Side */}
        <motion.div
          variants={card3D}
          whileHover="hover"
          className="relative aspect-[4/3] w-full overflow-visible xl:aspect-[16/11]"
        >
          {/* Picture frame glow */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px] bg-gradient-to-br from-[#38bdf8] to-[#818cf8] opacity-20 blur-xl transition-opacity duration-500 hover:opacity-40" />

          <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0F1E] shadow-2xl backdrop-blur-md">
            <div className="relative h-full w-full overflow-hidden rounded-[32px]">
              <Image
                src="/pic.png"
                alt="Team meeting"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A]/80 via-transparent to-[#060C1A]/20" />
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 flex items-center gap-4 rounded-3xl border border-white/10 bg-[#0A0F1E]/90 p-4 pr-6 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#818cf8] text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#38bdf8]">Trusted By</p>
              <p className="text-[20px] font-black text-white">100+ Clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content Side */}
        <motion.div
          variants={staggerContainer}
          className="flex w-full flex-col items-start"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-[#818cf8]/25 bg-[#818cf8]/10 px-4 py-2">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#818cf8]">Who We Are</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-6 text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]"
          >
            Empower Your Teams <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#c084fc]">
              Streamline Operations
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-[1.1rem] leading-[1.75] text-white/70 sm:text-[1.15rem]"
          >
            Dev&apos;s Inn Technologies is your gateway to cutting-edge IT services for
            businesses and brands. We are your strategic partner in navigating the
            ever-evolving digital landscape.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-[1.1rem] leading-[1.75] text-white/70 sm:text-[1.15rem]"
          >
            With a relentless commitment to innovation and excellence, we provide tailored IT solutions that empower your organization to thrive in the modern world.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <Link
              href="/services"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 text-[15px] font-bold text-[#060C1A] shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#38bdf8]/10 to-transparent translate-x-[-100%] transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
              <span className="relative flex items-center gap-2">
                Discover Our Services
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
