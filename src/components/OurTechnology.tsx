"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";

import { allProjects, projectTabs, type ProjectCategoryKey } from "@/lib/projects";
import Link from "next/link";

const colors = [
  "#4B8EF1", "#00C9A7", "#6B4CF5", "#33D9BC", "#7CB3F7", "#8E75F8"
];

export default function OurTechnology() {
  const [activeTab, setActiveTab] = useState<ProjectCategoryKey>(projectTabs[0].key);

  const currentCards = allProjects.filter(p => p.categoryKey === activeTab);

  return (
    <section className="relative overflow-hidden bg-[var(--surface-0)] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-32 xl:px-16">
      <SectionDivider />
      {/* Soft Glow Backgrounds */}
      <div className="pointer-events-none absolute left-0 top-[20%] h-[600px] w-[600px] -translate-x-1/4 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, var(--primary-subtle) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute right-0 top-[60%] h-[600px] w-[600px] translate-x-1/4 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)' }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:gap-20"
      >
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
          <motion.div variants={fadeInUp} className="max-w-[500px]">
            <h2 className="text-[2.2rem] font-black leading-[1.1] tracking-[-0.04em] sm:text-[3rem]">
              Featured <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--grad-primary)' }}>
                Portfolio
              </span>
            </h2>
          </motion.div>

          {/* Animated Tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/10 bg-[var(--surface-1)] p-2 shadow-2xl"
          >
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex h-[50px] sm:h-[60px] items-center justify-center rounded-[1.5rem] px-5 sm:px-8 text-[14px] sm:text-[15px] font-bold transition-colors duration-300 ${isActive ? "text-[var(--surface-0)]" : "text-white/60 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabOurTechDark"
                      className="absolute inset-0 rounded-[1.5rem]"
                      style={{
                        backgroundImage: 'var(--grad-primary)',
                        boxShadow: '0 0 20px var(--primary-glow)'
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <div key={activeTab} className="mx-auto w-full max-w-[1280px] grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-8">
          {currentCards.map((item, index) => (
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
                  whileHover="hover"
                  className="relative aspect-[413/518] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--surface-1)] shadow-2xl transition-all duration-300 hover:border-white/20 isolate z-0"
                  style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                >
                  {/* Dark glow layer beneath image */}
                  <div className="absolute -inset-2 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(135deg, var(--primary-subtle), var(--accent-subtle))' }} />

                  <div className="relative h-full w-full bg-[var(--surface-0)]">
                    <Image
                      src={item.mainImage}
                      alt={`${item.title} showcase`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                      className="object-cover object-top opacity-90 transition-[object-position] duration-[7000ms] ease-in-out group-hover:object-bottom group-hover:opacity-100"
                      style={{ transition: 'object-position 7s ease-in-out, opacity 0.5s ease-out' }}
                    />

                    {/* Floating overlay card at bottom */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-6 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <div
                        className="flex items-center justify-between rounded-3xl border border-white/10 bg-[var(--surface-0)]/80 px-6 py-5 text-white shadow-2xl backdrop-blur-xl transition duration-300"
                        style={{ '--tw-border-opacity': '1' } as React.CSSProperties}
                        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      >
                        <div className="min-w-0 pr-4">
                          <p className="truncate text-[22px] font-black leading-none tracking-[-0.03em] text-white">
                            {item.title}
                          </p>
                          <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.2em]"
                            style={{ color: 'var(--secondary)' }}>
                            {item.categoryLabel}
                          </p>
                        </div>

                        <span
                          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[var(--surface-0)] transition duration-300 group-hover:scale-110"
                          style={{
                            backgroundImage: 'var(--grad-primary)',
                            boxShadow: '0 0 15px var(--primary-glow)'
                          }}
                        >
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
