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

      <section className="bg-[linear-gradient(180deg,#eef5ff_0%,#f7faff_32%,#ffffff_100%)] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 rounded-[34px] border border-[#d7e4f3] bg-white/90 p-6 shadow-[0_30px_90px_rgba(16,38,79,0.08)] backdrop-blur-sm sm:p-8 lg:p-10"
        >
          <motion.div variants={fadeInUp} className="max-w-[880px]">
            <h2 className="text-[2rem] font-bold leading-[1.05] tracking-[-0.04em] text-[#10264f] sm:text-[2.35rem]">
              {introTitle}
            </h2>
            <div className="mt-5 space-y-4 text-[16px] leading-[1.8] text-[#445673] sm:text-[17px]">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {cards.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              className="grid gap-5 lg:grid-cols-2"
            >
              {cards.map((card) => (
                <motion.article
                  key={card.title}
                  variants={fadeInUp}
                  className="rounded-[28px] border border-[#d7e4f3] bg-[linear-gradient(180deg,#10264f_0%,#16335d_100%)] p-6 text-white shadow-[0_24px_60px_rgba(16,38,79,0.16)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7edfff]/18 text-[#8cecff]">
                    ✓
                  </div>
                  <h3 className="mt-5 text-[1.35rem] font-semibold tracking-[-0.03em]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-white/78 sm:text-[16px]">
                    {card.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          ) : null}

          {items.length > 0 ? (
            <motion.ol variants={staggerContainer} className="grid gap-4">
              {items.map((item, index) => (
                <motion.li
                  key={item.title}
                  variants={fadeInUp}
                  className="rounded-[26px] border border-[#d7e4f3] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fe_100%)] p-6 shadow-[0_18px_44px_rgba(16,38,79,0.06)]"
                >
                  <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#6c86aa]">
                    Clause {index + 1}
                  </p>
                  <h3 className="mt-3 text-[1.2rem] font-semibold text-[#10264f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.8] text-[#445673]">
                    {item.body}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          ) : null}

          {sections.map((section) => (
            <motion.section
              key={section.title}
              variants={fadeInUp}
              className="rounded-[28px] border border-[#d7e4f3] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] p-6 shadow-[0_18px_48px_rgba(16,38,79,0.05)] sm:p-7"
            >
              {section.title ? (
                <h3 className="text-[1.45rem] font-semibold tracking-[-0.03em] text-[#10264f]">
                  {section.title}
                </h3>
              ) : null}

              {section.paragraphs?.length ? (
                <div className="mt-4 space-y-4 text-[16px] leading-[1.8] text-[#445673]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.list?.length ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.list.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[20px] border border-[#dce7f4] bg-white px-4 py-4 text-[#10264f] shadow-[0_12px_28px_rgba(16,38,79,0.04)]"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10264f] text-white">
                        ✓
                      </span>
                      <p className="text-[15px] leading-[1.7] text-[#445673]">
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
              className="max-w-[920px] text-[17px] leading-[1.85] text-[#10264f] sm:text-[18px]"
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
