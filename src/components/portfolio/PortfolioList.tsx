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
    <section className="bg-white px-5 py-[72px] sm:px-8 sm:py-[88px] lg:px-10 lg:py-[104px] xl:px-16 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto flex w-full max-w-[1280px] flex-col gap-[60px]"
      >
        <div className="flex w-full justify-center">
          <motion.div 
            variants={staggerContainer}
            className="flex w-full max-w-[958px] flex-col items-center gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-0"
          >
            {projectTabs.map((tab) => (
              <motion.button
                key={tab.key}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex h-[71px] items-center justify-center rounded-[50px] px-8 text-center text-[18px] font-semibold leading-[1.2] tracking-[0] text-[#172D56] ${
                  activeTab === tab.key
                    ? "w-full bg-[#172D56] text-white sm:max-w-[279px] lg:w-[279px]"
                    : "w-full sm:max-w-[279px] lg:w-[279px]"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          variants={staggerContainer}
          className="grid gap-[20px] md:grid-cols-2 xl:grid-cols-3"
          style={{ perspective: "1500px" }}
        >
          <AnimatePresence mode="popLayout">
            {activeProjects.map((item) => (
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
                  className="group block"
                >
                  <motion.div 
                    variants={card3D}
                    whileHover="hover"
                    className="relative aspect-[413/518] w-full overflow-hidden rounded-[20px] border border-black/20 bg-white transition-all duration-300 hover:border-[#8ecbff] hover:shadow-[0_24px_48px_rgba(13,35,78,0.18)]"
                  >
                    <Image
                      src={item.mainImage}
                      alt={`${item.title} showcase`}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                      className="object-cover object-top transition-[object-position,transform] duration-[7000ms] ease-in-out group-hover:object-bottom group-hover:scale-[1.01]"
                    />

                    <div className="absolute inset-x-0 bottom-0 translate-y-6 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="flex items-center justify-between rounded-[20px] border border-white/18 bg-[#0B111B]/62 px-5 py-4 text-white shadow-[0_20px_40px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 group-hover:border-[#71D7FF]/50 group-hover:bg-[#0F1D34]/78">
                        <div className="min-w-0 pr-4">
                          <p className="truncate text-[24px] font-semibold leading-none tracking-[-0.03em]">
                            {item.title}
                          </p>
                          <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.22em] text-[#88D8FF]">
                            {item.categoryLabel}
                          </p>
                        </div>

                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white text-[#172D56] transition duration-300 group-hover:scale-105 group-hover:bg-[#77D7FF] group-hover:text-[#0B1E42]">
                          <Send
                            aria-hidden="true"
                            size={18}
                            strokeWidth={2.2}
                            className="rotate-[-45deg]"
                          />
                        </span>
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

