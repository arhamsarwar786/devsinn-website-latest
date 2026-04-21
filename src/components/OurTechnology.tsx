"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";

const tabs = [
  { id: "web-design", label: "Web Design" },
  { id: "web-dev", label: "Web Development" },
  { id: "app-dev", label: "App Development" },
];

const portfolioData: Record<string, { image: string, alt: string, color: string }[]> = {
  "web-design": [
    { image: "/ourtechnology/tec1.png", alt: "Web design project 1", color: "#38bdf8" },
    { image: "/ourtechnology/tec2.png", alt: "Web design project 2", color: "#818cf8" },
    { image: "/ourtechnology/tec3.png", alt: "Web design project 3", color: "#f472b6" },
  ],
  "web-dev": [
    { image: "/ourtechnology/tec2.png", alt: "Web development project 1", color: "#818cf8" },
    { image: "/ourtechnology/tec3.png", alt: "Web development project 2", color: "#c084fc" },
    { image: "/ourtechnology/tec1.png", alt: "Web development project 3", color: "#34d399" },
  ],
  "app-dev": [
    { image: "/ourtechnology/tec3.png", alt: "App development project 1", color: "#c084fc" },
    { image: "/ourtechnology/tec1.png", alt: "App development project 2", color: "#fb923c" },
    { image: "/ourtechnology/tec2.png", alt: "App development project 3", color: "#38bdf8" },
  ],
};

export default function OurTechnology() {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  const currentCards = portfolioData[activeTab];

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
               Featured <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">Portfolio</span>
             </h2>
          </motion.div>

          {/* Animated Tabs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/10 bg-[#0A0F1E] p-2 shadow-2xl"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex h-[50px] sm:h-[60px] items-center justify-center rounded-[1.5rem] px-5 sm:px-8 text-[14px] sm:text-[15px] font-bold transition-colors duration-300 ${
                    isActive ? "text-[#060C1A]" : "text-white/60 hover:text-white"
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
          variants={staggerContainer}
          className="mx-auto w-full max-w-[1280px]"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentCards.map((card, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={card3D}
                  whileHover="hover"
                  className="group relative perspective-1000"
                >
                  {/* Surrounding Soft Glow */}
                  <div 
                    className="absolute -inset-2 rounded-[2rem] opacity-30 blur-2xl transition duration-500 group-hover:opacity-60"
                    style={{ background: card.color }}
                  />
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0F1E]">
                     {/* Hover dark overlay */}
                     <div className="absolute inset-0 z-10 bg-[#060C1A]/20 transition-colors duration-500 group-hover:bg-[#060C1A]/40" />
                     
                     <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100"
                     />

                     {/* Floating View Project Button */}
                     <div className="absolute bottom-6 left-1/2 z-20 flex w-full -translate-x-1/2 translate-y-12 justify-center opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="rounded-full overflow-hidden relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] opacity-80" />
                          <div className="relative px-6 py-3 text-[14px] font-bold text-white shadow-2xl backdrop-blur-md hover:scale-105 transition-transform cursor-pointer">
                            View Project
                          </div>
                        </div>
                     </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
