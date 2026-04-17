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
    <section className="relative overflow-hidden bg-[#08142d] text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="absolute inset-0"
      >
        <Image
          src="/global.png"
          alt="Digital globe background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_78%] sm:object-[68%_70%] lg:object-[center_center]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,29,0.92)_0%,rgba(8,22,52,0.58)_34%,rgba(7,20,48,0.34)_64%,rgba(4,12,29,0.76)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,12,29,0.96)_0%,rgba(12,31,76,0.68)_34%,rgba(18,49,118,0.22)_58%,rgba(5,16,41,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_62%,rgba(78,132,255,0.36)_0%,rgba(9,23,52,0.16)_34%,rgba(4,11,26,0.1)_100%)] sm:bg-[radial-gradient(circle_at_center,_rgba(78,132,255,0.28)_0%,_rgba(9,23,52,0.12)_38%,_rgba(4,11,26,0.08)_100%)]" />
      <HeroAmbient />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto flex min-h-[72svh] w-full max-w-[1568px] items-end px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-30 lg:min-h-[68svh] lg:px-10 lg:pb-14 lg:pt-[106px] xl:px-16 xl:pt-[118px]"
      >
        <div className="max-w-[760px] pt-16 sm:pt-20 lg:pt-0">
          <motion.p
            variants={fadeInUp}
            className="inline-flex rounded-full border border-[#7edfff]/18 bg-white/8 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8cecff]"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-[3rem] font-bold leading-[0.96] tracking-[-0.055em] text-white sm:text-[4rem] lg:text-[72px]"
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

      <section className="relative overflow-hidden bg-[#f4f7fb] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-16">
        {/* Soft glowing orbs on a light background so the dark container pops */}
        <div className="absolute left-[-10%] top-[0%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(77,140,255,0.1),transparent_50%)] blur-[80px]" />
        <div className="absolute right-[-10%] top-[30%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(100,223,242,0.12),transparent_50%)] blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[20%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(26,68,120,0.06),transparent_50%)] blur-[80px]" />

        <motion.div
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
           className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10 rounded-[48px] border border-[#2e3e5c]/70 bg-[linear-gradient(145deg,rgba(22,34,56,0.95)_0%,rgba(11,18,33,0.98)_100%)] p-8 shadow-[0_40px_100px_rgba(4,8,16,0.7),inset_0_2px_15px_rgba(100,223,242,0.08)] backdrop-blur-2xl sm:p-12 lg:gap-14 lg:p-16"
        >
          <motion.div variants={fadeInUp} className="max-w-[880px]">
            <h2 className="text-[2.2rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#8cecff_0%,#4d8cff_100%)] sm:text-[3rem]">
              {introTitle}
            </h2>
            <div className="mt-6 space-y-5 text-[16.5px] leading-[1.85] text-[#b4d0eb] sm:text-[17.5px]">
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
                  className="group relative overflow-hidden rounded-[32px] border border-[#3b4b6b]/60 bg-[linear-gradient(135deg,rgba(30,44,70,0.85)_0%,rgba(16,25,43,0.9)_100%)] p-8 shadow-[0_20px_50px_rgba(4,8,16,0.5)] transition-all duration-300 hover:-translate-y-2 hover:border-[#64dff2]/50 hover:shadow-[0_30px_80px_rgba(100,223,242,0.15)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(100,223,242,0.06)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#445b82] bg-[linear-gradient(135deg,#233659_0%,#132038_100%)] text-[#8cecff] shadow-[inset_0_2px_10px_rgba(100,223,242,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4d8cff] group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(100,223,242,0.4)]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="mt-8 text-[1.45rem] font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#8cecff]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[16.5px] leading-[1.8] text-[#9cbce0]">
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
                  className="group relative flex flex-col items-start gap-6 rounded-[32px] border border-[#3b4b6b]/60 bg-[rgba(24,37,61,0.85)] p-8 shadow-[0_15px_40px_rgba(4,8,16,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#64dff2]/40 hover:bg-[rgba(30,46,76,0.9)] hover:shadow-[0_20px_60px_rgba(100,223,242,0.15)] sm:flex-row sm:gap-8"
                >
                  <div className="flex shrink-0 basis-auto items-start">
                    <div className="inline-flex h-12 flex-none items-center rounded-full border border-[#445b82] bg-[linear-gradient(180deg,#25395c_0%,#132038_100%)] px-5 text-[14px] font-bold uppercase tracking-[0.16em] text-[#8cecff] shadow-[inset_0_2px_8px_rgba(100,223,242,0.15)]">
                      Clause {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[1.35rem] font-bold tracking-tight text-white group-hover:text-[#8cecff] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[16.5px] leading-[1.85] text-[#b4d0eb]">
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
              className="relative overflow-hidden rounded-[36px] border border-[#3b4b6b]/60 bg-[rgba(26,40,66,0.85)] p-8 shadow-[0_15px_40px_rgba(4,8,16,0.4)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(100,223,242,0.1)] hover:border-[#4d8cff]/40 sm:p-10 lg:p-12"
            >
              {section.title ? (
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-10 w-2 rounded-full bg-[linear-gradient(180deg,#64dff2_0%,#8cecff_100%)] max-sm:h-8 shadow-[0_0_15px_rgba(100,223,242,0.4)]"></span>
                  <h3 className="text-[1.8rem] font-bold tracking-tight text-white sm:text-[2rem]">
                    {section.title}
                  </h3>
                </div>
              ) : null}

              {section.paragraphs?.length ? (
                <div className="space-y-5 text-[16.5px] leading-[1.85] text-[#b4d0eb]">
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
                      className="group flex items-start gap-4 rounded-[24px] border border-[#2e3e5c]/60 bg-[rgba(18,28,48,0.9)] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#8cecff]/40 hover:shadow-[0_15px_35px_rgba(100,223,242,0.2)]"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1b2b4a] text-[#64dff2] transition-colors duration-300 group-hover:bg-[#64dff2] group-hover:text-[#0b1221] shadow-[0_0_10px_rgba(100,223,242,0.1)] group-hover:shadow-[0_0_20px_rgba(100,223,242,0.5)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <p className="mt-0.5 text-[15.5px] font-medium leading-[1.6] text-[#c4dcf2] group-hover:text-white transition-colors">
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
              className="mt-4 max-w-[920px] text-[18px] font-semibold leading-[1.85] text-[#8cecff] sm:text-[20px]"
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
