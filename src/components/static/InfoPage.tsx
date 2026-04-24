"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroAmbient from "@/components/ui/HeroAmbient";
import {
  type ContentSection,
  companyPageContent,
  supportContent,
  termsContent,
  whyChooseUsContent,
} from "@/data/company-pages";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";

type BasePageProps = {
  title: string;
  eyebrow: string;
  introTitle: string;
  introParagraphs?: string[];
};

type StandardInfoPageProps = BasePageProps & {
  sections?: ContentSection[];
  cards?: { title: string; description: string }[];
  closing?: string;
  items?: { title: string; body: string }[];
};

function PageHero({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#060C1A] text-white">
      {/* Deep Space Background Glows */}
      <div className="absolute inset-0 bg-[#060C1A]" />
      <div className="absolute left-[60%] top-[40%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,transparent_60%)]" />
      <div className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_60%)]" />

      {/* Cinematic Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#060C1A]/20 to-[#060C1A]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-20 mx-auto flex min-h-[50svh] w-full max-w-[1568px] items-end px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-30 lg:min-h-[45svh] lg:px-10 lg:pb-14 lg:pt-[106px] xl:px-16 xl:pt-[118px]"
      >
        <div className="max-w-[800px] pt-16 sm:pt-20 lg:pt-0">
          <motion.p
            variants={fadeInUp}
            className="inline-flex rounded-full border border-[#38bdf8]/30 bg-white/5 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] backdrop-blur-md"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-[3rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5.5rem]"
          >
            {title}
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}

export function InfoPage({
  title,
  eyebrow,
  introTitle,
  introParagraphs = [],
  sections = [],
  cards = [],
  closing,
  items = [],
}: StandardInfoPageProps) {
  return (
    <>
      <PageHero title={title} eyebrow={eyebrow} />

      <section className="relative overflow-hidden bg-[#060C1A] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-16">
        {/* Soft glowing orbs matching dark theme */}
        <div className="absolute left-[-10%] top-[0%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.05),transparent_50%)] blur-[80px]" />
        <div className="absolute right-[-10%] top-[30%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.05),transparent_50%)] blur-[80px]" />

        <motion.div
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
           className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10 rounded-[2rem] border border-white/10 bg-[#0A0F1E]/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12 lg:gap-14 lg:p-16"
        >
          <motion.div variants={fadeInUp} className="max-w-[880px]">
            <h2 className="text-[2.2rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8] sm:text-[3rem]">
              {introTitle}
            </h2>
            <div className="mt-6 space-y-5 text-[16.5px] leading-[1.85] text-white/70 sm:text-[17.5px]">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {cards.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              className="grid gap-6 lg:grid-cols-2"
            >
              {cards.map((card) => (
                <motion.article
                  key={card.title}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#38bdf8]/40 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)]"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[#060C1A] text-[#38bdf8] transition-all duration-300 group-hover:scale-110 group-hover:border-[#38bdf8]/50 group-hover:text-[#c084fc] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="mt-8 text-[1.45rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#38bdf8]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[16.5px] leading-[1.8] text-white/60">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          ) : null}

          {items.length > 0 ? (
            <motion.ol variants={staggerContainer} className="grid gap-6">
              {items.map((item, index) => (
                <motion.li
                  key={item.title}
                  variants={fadeInUp}
                  className="group relative flex flex-col items-start gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#38bdf8]/30 hover:bg-white/[0.04] sm:flex-row sm:gap-8"
                >
                  <div className="flex shrink-0 basis-auto items-start">
                    <div className="inline-flex h-12 flex-none items-center rounded-full border border-white/10 bg-[#060C1A] px-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#38bdf8] transition-colors group-hover:border-[#38bdf8]/50 group-hover:text-[#c084fc]">
                      Clause {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.35rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#38bdf8]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[16.5px] leading-[1.85] text-white/60">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          ) : null}

          {sections.map((section) => (
            <motion.section
              key={section.title}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-[#38bdf8]/30 sm:p-10 lg:p-12"
            >
              {section.title ? (
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-10 w-1.5 rounded-full bg-gradient-to-b from-[#38bdf8] to-[#c084fc] max-sm:h-8 shadow-[0_0_15px_rgba(56,189,248,0.5)]"></span>
                  <h3 className="text-[1.8rem] font-bold tracking-tight text-white sm:text-[2rem]">
                    {section.title}
                  </h3>
                </div>
              ) : null}

              {section.paragraphs?.length ? (
                <div className="space-y-5 text-[16.5px] leading-[1.85] text-white/70">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.list?.length ? (
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.list.map((item) => (
                    <div
                      key={item}
                      className="group flex items-start gap-4 rounded-[1rem] border border-white/5 bg-white/[0.02] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#38bdf8]/40 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#060C1A] border border-white/10 text-[#38bdf8] transition-colors duration-300 group-hover:border-[#38bdf8]/50 group-hover:text-[#c084fc] group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <p className="mt-0.5 text-[15.5px] font-medium leading-[1.6] text-white/70 transition-colors group-hover:text-white">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
            </motion.section>
          ))}

          {closing ? (
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-[920px] text-[18px] font-semibold leading-[1.85] text-[#38bdf8] sm:text-[20px]"
            >
              {closing}
            </motion.p>
          ) : null}
        </motion.div>
      </section>
    </>
  );
}

export const infoPages = {
  company: companyPageContent,
  support: supportContent,
  terms: termsContent,
  whyChooseUs: whyChooseUsContent,
};
