"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, card3D } from "@/lib/motion";

type Highlight = {
  title: string;
  description: string;
};

type ServiceData = {
  id: string;
  navLabel: string;
  cardImage: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  mainTitle: string;
  mainDescription: string;
  highlightTitle: string;
  highlights: Highlight[];
  technologies: string[];
  projects: string[];
};

export default function ServiceDetail({ service }: { service: ServiceData }) {
  return (
    <main className="bg-white text-[#11284f] overflow-hidden">
      <section className="relative overflow-hidden bg-[#08142d] text-white">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0"
        >
          <Image
            src="/global.png"
            alt={`${service.mainTitle} background`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[center_center]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,29,0.92)_0%,rgba(8,22,52,0.72)_36%,rgba(7,20,48,0.34)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,12,29,0.97)_0%,rgba(9,22,52,0.9)_28%,rgba(18,49,118,0.36)_60%,rgba(8,20,48,0.22)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_42%,rgba(78,132,255,0.32)_0%,rgba(9,23,52,0.12)_42%,rgba(4,11,26,0.04)_100%)]" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto flex min-h-[100svh] w-full max-w-[1568px] items-center px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-[118px] xl:px-16 xl:pt-[138px]"
        >
          <div className="max-w-[760px]">
            <motion.p variants={fadeInUp} className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#8cecff] sm:text-[14px]">
              {service.heroEyebrow}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="mt-5 text-[2.55rem] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.4rem] lg:text-[4.15rem] xl:text-[4.85rem]">
              {service.heroTitle}
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-5 max-w-[620px] text-[1rem] leading-[1.7] text-white/90 sm:text-[1.08rem] lg:text-[1.15rem]">
              {service.heroDescription}
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid w-full max-w-[1320px] gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:gap-14"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#5f7cab]">
              Service Overview
            </p>
            <h2 className="mt-4 text-[2.15rem] font-bold leading-[1.02] tracking-[-0.04em] text-[#11284f] sm:text-[2.5rem] lg:text-[3.25rem]">
              {service.mainTitle}
            </h2>
            <p className="mt-5 max-w-[760px] text-[1rem] leading-[1.8] text-[#455774] sm:text-[1.06rem] lg:text-[1.12rem]">
              {service.mainDescription}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="rounded-[28px] border border-[#dbe5f3] bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-6 shadow-[0_24px_60px_rgba(16,38,79,0.06)] sm:p-7">
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#5f7cab]">
              Technology Stack
            </p>
            <motion.div variants={staggerContainer} className="mt-5 flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <motion.span
                  key={technology}
                  variants={fadeInUp}
                  whileHover={{ y: -3 }}
                  className="inline-flex rounded-full border border-[#cfe0f4] bg-white px-4 py-2 text-[0.94rem] font-medium text-[#17305f] shadow-[0_10px_24px_rgba(16,38,79,0.04)]"
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#f6faff] px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto w-full max-w-[1320px]"
        >
          <motion.p variants={fadeInUp} className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#5f7cab]">
            {service.highlightTitle}
          </motion.p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {service.highlights.map((item) => (
              <motion.article
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-[24px] border border-[#dbe5f3] bg-white p-6 shadow-[0_20px_48px_rgba(16,38,79,0.05)] transition-all duration-300 hover:border-[#8ecbff] hover:shadow-[0_24px_52px_rgba(16,38,79,0.12)] sm:p-7"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#1e467c_0%,#142c55_100%)] text-white shadow-[0_14px_28px_rgba(16,38,79,0.2)]">
                  <span className="text-[1.2rem]">+</span>
                </div>
                <h3 className="mt-5 text-[1.35rem] font-bold leading-[1.2] tracking-[-0.03em] text-[#11284f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-[#4b5e7d]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto w-full max-w-[1320px]"
        >
          <motion.p variants={fadeInUp} className="text-[13px] font-semibold uppercase tracking-[0.24em] text-[#5f7cab]">
            Selected Work
          </motion.p>
          <div 
            className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            style={{ perspective: "1200px" }}
          >
            {service.projects.map((project, index) => (
              <motion.article
                key={`${service.id}-${project}-${index}`}
                variants={card3D}
                whileHover="hover"
                className="overflow-hidden rounded-[24px] border border-[#dbe5f3] bg-white shadow-[0_20px_48px_rgba(16,38,79,0.05)] transition-all duration-300 hover:border-[#8ecbff] hover:shadow-[0_24px_52px_rgba(16,38,79,0.12)]"
              >
                <div className="relative aspect-[413/518] w-full">
                  <Image
                    src={project}
                    alt={`${service.mainTitle} project ${index + 1}`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

