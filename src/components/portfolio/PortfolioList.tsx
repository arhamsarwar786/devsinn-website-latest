"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  projectTabs,
  projectsByCategory,
  type ProjectCategoryKey,
} from "@/lib/projects";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";

export default function PortfolioList() {
  const [activeTab, setActiveTab] = useState<ProjectCategoryKey>("webDesign");
  const activeProjects = projectsByCategory[activeTab];

  return (
    <section className="relative bg-[#060C1A] px-5 py-[72px] sm:px-8 sm:py-[88px] lg:px-10 lg:py-[104px] xl:px-16 overflow-hidden">
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
            className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/10 bg-[#0A0F1E]/80 backdrop-blur-md p-2 shadow-2xl"
          >
            {projectTabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as ProjectCategoryKey)}
                  className={`relative flex h-[50px] sm:h-[60px] items-center justify-center rounded-[1.5rem] px-5 sm:px-8 text-[14px] sm:text-[15px] font-bold transition-colors duration-300 ${
                    isActive ? "text-[#060C1A]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPortfolio"
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
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {activeProjects.map((item, index) => (
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
                    whileHover="hover"
                    className="relative aspect-[413/518] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0F1E] shadow-2xl transition-all duration-300 hover:border-white/20"
                  >
                    {/* Dark glow layer beneath image */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#38bdf8]/20 to-[#c084fc]/20 opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
                    
                    <div className="relative h-full w-full bg-[#060C1A]">
                      <Image
                        src={item.mainImage}
                        alt={`${item.title} showcase`}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                        className="object-cover object-top opacity-90 transition-[object-position,transform,opacity] duration-[7000ms] ease-in-out group-hover:object-bottom group-hover:scale-[1.03] group-hover:opacity-100"
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
