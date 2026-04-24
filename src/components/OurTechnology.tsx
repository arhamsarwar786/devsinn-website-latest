"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";

import { projectsByCategory, projectTabs, type ProjectCategoryKey } from "@/lib/projects";
import Link from "next/link";

const colors = [
  "#38bdf8", "#818cf8", "#f472b6", "#c084fc", "#34d399", "#fb923c"
];

export default function OurTechnology() {
  const [activeTab, setActiveTab] = useState<ProjectCategoryKey>(projectTabs[1].key);

  const currentCards = projectsByCategory[activeTab] || [];

  return (
    <section className="bg-[#060C1A] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-32 xl:px-16 overflow-hidden">
      {/* Soft Glow Backgrounds */}
      <div className="pointer-events-none absolute left-0 top-[20%] h-[800px] w-[800px] -translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.05)_0%,transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-[60%] h-[800px] w-[800px] translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.05)_0%,transparent_70%)] blur-[100px]" />

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
              Featured <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">Portfolio</span>
            </h2>
          </motion.div>

          {/* Animated Tabs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/10 bg-[#0A0F1E] p-2 shadow-2xl"
          >
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex h-[50px] sm:h-[60px] items-center justify-center rounded-[1.5rem] px-5 sm:px-8 text-[14px] sm:text-[15px] font-bold transition-colors duration-300 ${isActive ? "text-[#060C1A]" : "text-white/60 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabOurTechDark"
                      className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-[#38bdf8] to-[#818cf8] shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          layout
          variants={staggerContainer}
          className="mx-auto w-full max-w-[1280px] grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-8"
        >
          <AnimatePresence mode="popLayout">
            {currentCards.map((item, index) => (
              <motion.div
                key={item.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/projects/${item.slug}`}
                  className="group block relative"
                >
                  <motion.div
                    variants={card3D}
                    className="relative aspect-[413/518] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0F1E] shadow-2xl transition-all duration-300 hover:border-white/20 isolate z-0"
                    style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
                  >
                    {/* Dark glow layer beneath image */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#38bdf8]/20 to-[#c084fc]/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="relative h-full w-full bg-[#060C1A]">
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
                        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-[#060C1A]/80 px-6 py-5 text-white shadow-2xl backdrop-blur-xl transition duration-300 group-hover:border-[#38bdf8]/40">
                          <div className="min-w-0 pr-4">
                            <p className="truncate text-[22px] font-black leading-none tracking-[-0.03em] text-white">
                              {item.title}
                            </p>
                            <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
                              {item.categoryLabel}
                            </p>
                          </div>

                          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-[#060C1A] shadow-[0_0_15px_rgba(56,189,248,0.4)] transition duration-300 group-hover:scale-110">
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
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
