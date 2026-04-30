"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";

const tabs = [
  { id: "arts", label: "Arts & Illustration" },
  { id: "software", label: "Software Development" },
  { id: "ai", label: "AI Technologies" },
];

export default function CoreTechnology() {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  return (
    <section className="relative overflow-hidden bg-[var(--surface-0)] px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-16 xl:px-16">
      <SectionDivider />
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, var(--primary-subtle) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/3 rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)' }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-16 lg:gap-24"
      >
        <div className="flex w-full max-w-[900px] flex-col items-center text-center">
          <motion.div variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2"
            style={{ borderColor: 'var(--primary)', backgroundColor: 'var(--primary-subtle)' }}>
            <span className="text-[12px] font-extrabold uppercase tracking-[0.2em]"
              style={{ color: 'var(--primary)' }}>Technology Stack</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-[2.5rem] font-black leading-[1.05] tracking-[-0.04em] sm:text-[3.2rem] lg:text-[4rem]"
          >
            Our Core <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'var(--grad-primary)' }}>Technologies</span>
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
            className="relative flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-white/5 bg-[var(--surface-1)] p-2 sm:gap-3"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex h-[54px] sm:h-[64px] items-center justify-center rounded-[1.5rem] px-6 sm:px-10 text-[14px] sm:text-[16px] font-bold transition-colors duration-300 ${isActive ? "text-[var(--surface-0)]" : "text-white/60 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabCoreTechDark"
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

          <motion.div
            variants={card3D}
            whileHover="hover"
            className="group relative mx-auto w-full max-w-[1050px] overflow-hidden rounded-[2.5rem] bg-[var(--surface-1)]/90 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          >
            {/* Animated glowing border effect inner */}
            <div className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'linear-gradient(135deg, var(--primary-subtle), transparent, var(--accent-subtle))' }} />

            <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              {/* Subtle inner grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: "30px 30px" }}
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
                        <TechItem name="Figma" icon="figma" />
                        <TechItem name="Photoshop" icon="adobephotoshop" />
                        <TechItem name="Illustrator" icon="adobeillustrator" />
                        <TechItem name="Adobe XD" icon="adobexd" />
                        <TechItem name="Sketch" icon="sketch" />
                        <TechItem name="InVision" icon="invision" />
                      </>
                    )}
                    {activeTab === "software" && (
                      <>
                        <TechItem name="React" icon="react" />
                        <TechItem name="Node.js" icon="nodedotjs" />
                        <TechItem name="Python" icon="python" />
                        <TechItem name="Django" icon="django" />
                        <TechItem name="Flutter" icon="flutter" />
                        <TechItem name="Vue.js" icon="vuedotjs" />
                        <TechItem name="Angular" icon="angular" />
                        <TechItem name="MongoDB" icon="mongodb" />
                        <TechItem name="Firebase" icon="firebase" />
                        <TechItem name="Android" icon="android" />
                        <TechItem name="Apple" icon="apple" />
                        <TechItem name=".NET Core" icon="dotnet" />
                        <TechItem name="Kafka" icon="apachekafka" />
                      </>
                    )}
                    {activeTab === "ai" && (
                      <>
                        <TechItem name="OpenAI" icon="openai" />
                        <TechItem name="Google Gemini" icon="googlegemini" />
                        <TechItem name="Claude" icon="claude" />
                        <TechItem name="Anthropic" icon="anthropic" />
                        <TechItem name="TensorFlow" icon="tensorflow" />
                        <TechItem name="PyTorch" icon="pytorch" />
                        <TechItem name="LangChain" icon="langchain" />
                        <TechItem name="Hugging Face" icon="huggingface" />
                        <TechItem name="Mistral AI" icon="mistralai" />
                        <TechItem name="Meta" icon="meta" />
                        <TechItem name="NVIDIA" icon="nvidia" />
                        <TechItem name="Google Cloud" icon="googlecloud" />
                        <TechItem name="Azure" icon="microsoftazure" />
                        <TechItem name="Databricks" icon="databricks" />
                        <TechItem name="Keras" icon="keras" />
                        <TechItem name="Scikit-Learn" icon="scikitlearn" />
                        <TechItem name="Pandas" icon="pandas" />
                        <TechItem name="NumPy" icon="numpy" />
                        <TechItem name="Jupyter" icon="jupyter" />
                        <TechItem name="Perplexity" icon="perplexity" />
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

function TechItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-2">
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[var(--surface-1)] shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300"
        style={{
          ['--hover-border' as string]: 'var(--primary)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--primary)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 30px var(--primary-glow)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)';
          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 15px rgba(0,0,0,0.5)';
        }}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'linear-gradient(135deg, var(--primary-subtle), var(--secondary-subtle))' }} />

        {/* Using jsDelivr for high reliability and speed */}
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons/icons/${icon}.svg`}
          alt={`${name} icon`}
          className="relative z-10 h-8 w-8 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
          loading="lazy"
        />
      </div>
      <span className="text-sm font-semibold text-white/70 transition-colors duration-300 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}
