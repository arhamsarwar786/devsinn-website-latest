"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";
import { projectTabs, allProjects, type ProjectCategoryKey } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

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
            <ProjectCard key={item.slug} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
