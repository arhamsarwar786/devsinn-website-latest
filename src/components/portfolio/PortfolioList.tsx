"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  projectTabs,
  allProjects,
  type ProjectCategoryKey,
} from "@/lib/projects";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";

export default function PortfolioList() {
  const [activeTab, setActiveTab] = useState<ProjectCategoryKey>("webDesign");
  const activeProjects = allProjects.filter(p => p.categoryKey === activeTab);

  return (
    <section className="relative bg-[var(--surface-0)] px-5 py-[72px] sm:px-8 sm:py-[88px] lg:px-10 lg:py-[104px] xl:px-16 overflow-hidden">
      <SectionDivider />
      {/* Dark Ambient Glows */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[700px] w-[700px] -translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.06)_0%,transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[30%] h-[700px] w-[700px] translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.06)_0%,transparent_70%)] blur-[100px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-[60px]"
      >
        <div className="flex w-full justify-center">
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/10 bg-[var(--surface-1)]/80 backdrop-blur-md p-2 shadow-2xl"
          >
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as ProjectCategoryKey)}
                  className={`relative flex h-[50px] sm:h-[60px] items-center justify-center rounded-[1.5rem] px-5 sm:px-8 text-[14px] sm:text-[15px] font-bold transition-colors duration-300 ${isActive ? "text-[var(--surface-0)]" : "text-white/60 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPortfolio"
                      className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <div key={activeTab} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeProjects.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/projects/${item.slug}`}
                className="group block relative"
              >
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="relative aspect-[413/518] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--surface-1)] shadow-2xl transition-colors duration-500 hover:border-white/20 isolate z-0"
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', willChange: 'transform' }}
                >
                  {/* Dark glow layer beneath image */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative h-full w-full bg-[var(--surface-0)]">
                    {item.categoryKey === "appDev" ? (
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#020617]">
                        {/* Ultimate Premium Background: Animated Mesh & Glows */}
                        <div className="absolute inset-0 bg-[#020617]" />
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.4, 0.3],
                          }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute -top-[20%] -left-[20%] h-[100%] w-[100%] rounded-full bg-[var(--primary)]/10 blur-[120px]"
                        />

                        {/* Mockup Group with Advanced 3D Parallax */}
                        <div className="relative flex w-full items-center justify-center gap-0 perspective-2000 -translate-y-6 will-change-transform">
                          {/* Left Phone (Metallic Pro Frame) */}
                          <motion.div
                            variants={{
                              hover: { x: -35, y: 0, rotateY: 25, rotateZ: -5, scale: 1, z: -20 }
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 25 }}
                            className="relative h-[160px] w-[80px] translate-x-12 translate-y-8 -rotate-[12deg] overflow-hidden rounded-[1.2rem] border-[1px] border-white/30 bg-[#0F172A] shadow-2xl sm:h-[220px] sm:w-[110px] lg:h-[260px] lg:w-[130px] will-change-transform"
                          >
                            {/* Screen Reflection Overlay */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                            {/* Inner Bezel */}
                            <div className="absolute inset-[2px] rounded-[1.1rem] overflow-hidden bg-black z-0">
                              <Image
                                src={item.sneakPeekImages[0] || item.mainImage}
                                alt=""
                                fill
                                className="object-cover opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                              />
                            </div>
                          </motion.div>

                          {/* Center Phone (The Spotlight) */}
                          <motion.div
                            variants={{
                              hover: { y: -20, scale: 1.05, rotateY: 0, z: 100 }
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="relative z-30 h-[210px] w-[105px] -translate-y-4 overflow-hidden rounded-[1.6rem] border-[2px] border-white/40 bg-[#0F172A] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_20px_rgba(56,189,248,0.2)] sm:h-[270px] sm:w-[135px] lg:h-[310px] lg:w-[155px] will-change-transform"
                          >
                            {/* Metallic Highlight Edge */}
                            <div className="absolute inset-0 z-40 border-[1px] border-white/10 rounded-[1.6rem] pointer-events-none" />
                            {/* Dynamic Island Notch */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-black rounded-full z-50 shadow-inner flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-white/10 ml-5" />
                            </div>
                            {/* Main Screen */}
                            <div className="absolute inset-[3px] rounded-[1.5rem] overflow-hidden bg-black z-0">
                              <Image
                                src={item.mainImage}
                                alt=""
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/5 via-transparent to-black/30 pointer-events-none" />
                            </div>
                          </motion.div>

                          {/* Right Phone (Metallic Pro Frame) */}
                          <motion.div
                            variants={{
                              hover: { x: 35, y: 0, rotateY: -25, rotateZ: 5, scale: 1, z: -20 }
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 25 }}
                            className="relative h-[160px] w-[80px] -translate-x-12 translate-y-8 rotate-[12deg] overflow-hidden rounded-[1.2rem] border-[1px] border-white/30 bg-[#0F172A] shadow-2xl sm:h-[220px] sm:w-[110px] lg:h-[260px] lg:w-[130px] will-change-transform"
                          >
                            <div className="absolute inset-0 z-20 bg-gradient-to-tl from-white/5 via-transparent to-white/10 pointer-events-none" />
                            <div className="absolute inset-[2px] rounded-[1.1rem] overflow-hidden bg-black z-0">
                              <Image
                                src={item.sneakPeekImages[1] || (item.sneakPeekImages[0] || item.mainImage)}
                                alt=""
                                fill
                                className="object-cover opacity-70 transition-opacity duration-700 group-hover:opacity-100"
                              />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={`${item.mainImage}?v=9`}
                          alt={`${item.title} showcase`}
                          className="absolute top-0 left-0 w-full h-auto transition-transform duration-[7000ms] ease-in-out group-hover:-translate-y-[58%]"
                          style={{
                            imageRendering: 'auto',
                            transform: 'translate3d(0, 0, 0)',
                            willChange: 'transform'
                          }}
                        />
                      </div>
                    )}

                    {/* Floating overlay card at bottom */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-6 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-50">
                      <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[var(--surface-0)]/80 px-6 py-5 text-white shadow-2xl backdrop-blur-xl transition duration-300 group-hover:border-[var(--primary)]/40">
                        <div className="min-w-0 pr-4">
                          <p className="truncate text-[22px] font-black leading-none tracking-[-0.03em] text-white">
                            {item.title}
                          </p>
                          <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                            {item.categoryLabel}
                          </p>
                        </div>

                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--surface-0)] shadow-[0_0_15px_rgba(56,189,248,0.4)] transition duration-300 group-hover:scale-110">
                          <Send
                            aria-hidden="true"
                            size={18}
                            strokeWidth={2.5}
                            className="rotate-[-45deg] ml-0.5 mt-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
