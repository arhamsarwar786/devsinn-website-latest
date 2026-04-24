"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";

const tabs = [
  { id: "arts", label: "Arts & Illustration" },
  { id: "software", label: "Software Development" },
  { id: "ai", label: "AI Technologies" },
];

export default function CoreTechnology() {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  return (
    <section className="relative overflow-hidden bg-[#060C1A] px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-32 xl:px-16">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.08)_0%,transparent_70%)] blur-[80px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-16 lg:gap-24"
      >
        <div className="flex w-full max-w-[900px] flex-col items-center text-center">
          <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2">
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#38bdf8]">Technology Stack</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] sm:text-[3.2rem] lg:text-[4rem]"
          >
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">Technologies</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-[700px] text-[1.15rem] leading-[1.75] text-white/60"
          >
            Dev&apos;s Inn leverages modern, top-tier frameworks and languages to build effective, scalable, and future-proof digital solutions.
          </motion.p>
        </div>

        <div className="flex w-full flex-col items-center gap-12">
          {/* Custom Animated Tabs */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/5 bg-[#0A0F1E] p-2 sm:gap-3"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex h-[54px] sm:h-[64px] items-center justify-center rounded-[1.5rem] px-6 sm:px-10 text-[14px] sm:text-[16px] font-bold transition-colors duration-300 ${isActive ? "text-[#060C1A]" : "text-white/60 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabCoreTechDark"
                      className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-r from-[#38bdf8] to-[#818cf8] shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div
            variants={card3D}
            whileHover="hover"
            className="group relative w-full overflow-hidden rounded-[3rem] bg-[#0A0F1E] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] min-h-[400px] flex items-center"
          >
            {/* Animated glowing border effect inner */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/10 via-transparent to-[#c084fc]/10 opacity-30 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-12 sm:px-12 sm:py-20 lg:p-24">
              {/* Subtle inner grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "40px 40px" }}
              />

              <div className="relative w-full max-w-[1000px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-12"
                  >
                    {activeTab === "arts" && (
                      <>
                        <TechItem name="Figma" icon="figma" color="white" />
                        <TechItem name="Photoshop" icon="adobephotoshop" color="white" />
                        <TechItem name="Illustrator" icon="adobeillustrator" color="white" />
                        <TechItem name="Adobe XD" icon="adobexd" color="white" />
                        <TechItem name="Sketch" icon="sketch" color="white" />
                        <TechItem name="InVision" icon="invision" color="white" />
                      </>
                    )}
                    {activeTab === "software" && (
                      <>
                        <TechItem name="React" icon="react" color="white" />
                        <TechItem name="Node.js" icon="nodedotjs" color="white" />
                        <TechItem name="Python" icon="python" color="white" />
                        <TechItem name="Django" icon="django" color="white" />
                        <TechItem name="Flutter" icon="flutter" color="white" />
                        <TechItem name="Vue.js" icon="vuedotjs" color="white" />
                        <TechItem name="Angular" icon="angular" color="white" />
                        <TechItem name="MongoDB" icon="mongodb" color="white" />
                        <TechItem name="Firebase" icon="firebase" color="white" />
                        <TechItem name="Android" icon="android" color="white" />
                        <TechItem name="Apple" icon="apple" color="white" />
                        <TechItem name=".NET Core" icon="dotnet" color="white" />
                        <TechItem name="Kafka" icon="apachekafka" color="white" />
                      </>
                    )}
                    {activeTab === "ai" && (
                      <>
                        <TechItem name="TensorFlow" icon="tensorflow" color="white" />
                        <TechItem name="PyTorch" icon="pytorch" color="white" />
                        <TechItem name="OpenAI" icon="openai" color="white" />
                        <TechItem name="Keras" icon="keras" color="white" />
                        <TechItem name="Hugging Face" icon="huggingface" color="white" />
                        <TechItem name="Scikit-Learn" icon="scikitlearn" color="white" />
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function TechItem({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-2">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#0A0F1E] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-[#38bdf8]/40 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#38bdf8]/20 to-[#c084fc]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Icon from SimpleIcons */}
        <img
          src={`https://cdn.simpleicons.org/${icon}/${color}`}
          alt={`${name} icon`}
          className="relative z-10 h-8 w-8 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-semibold text-white/70 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}
