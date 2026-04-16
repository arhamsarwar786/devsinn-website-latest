"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { fadeInUp, staggerContainer, scaleIn, fadeIn, card3D } from "@/lib/motion";

type ProjectDetailProps = {
  project: Project;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07152F] px-5 pb-16 pt-[138px] text-white sm:px-8 sm:pb-20 sm:pt-[154px] lg:px-10 lg:pb-24 lg:pt-[168px] xl:px-16">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="absolute inset-0"
        >
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,41,0.88)_0%,rgba(9,28,62,0.72)_42%,rgba(10,34,74,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(97,208,255,0.16),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(72,115,255,0.18),transparent_26%)]" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:gap-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex w-fit items-center gap-3 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.22em] text-[#90D6FF] backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#57D9FF] shadow-[0_0_18px_rgba(87,217,255,0.8)]" />
            {project.categoryLabel}
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="max-w-[720px]">
              <motion.h1 variants={fadeInUp} className="text-[42px] font-semibold leading-[0.94] tracking-[-0.05em] text-white sm:text-[56px] lg:text-[82px] xl:text-[96px]">
                {project.title}
              </motion.h1>
            </div>

            <motion.div variants={fadeInUp} className="max-w-[540px] rounded-[28px] border border-white/12 bg-[#071A38]/66 p-6 backdrop-blur-md sm:p-8">
              <p className="text-[17px] leading-[1.72] text-white/88 sm:text-[18px]">
                {project.about}
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-7 text-[17px] font-semibold text-[#172D56] transition duration-300 hover:-translate-y-0.5 hover:bg-[#DFF5FF]"
                >
                  Start a Similar Project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/26 bg-white/8 px-7 text-[17px] font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#74D7FF] hover:bg-[#0C2957]"
                >
                  Back to Portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white px-5 py-16 text-[#11264B] sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#2AAEFF]">
              About Project
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#132B56] sm:text-[42px] lg:text-[52px]">
              Crafted to feel polished, fast, and conversion-focused.
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            className="grid gap-6 sm:grid-cols-2"
            style={{ perspective: "1500px" }}
          >
            <motion.article 
              variants={card3D} 
              whileHover="hover" 
              className="rounded-[28px] border border-[#D4E7FF] bg-[#F7FBFF] p-7 transition-all duration-300 hover:border-[#84CCFF] hover:shadow-[0_24px_44px_rgba(23,45,86,0.12)]"
            >
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#172D56]">
                Strategic Experience
              </h3>
              <p className="mt-4 text-[16px] leading-[1.72] text-[#36507D]">
                Every section is designed to support clarity, trust, and a stronger user journey from first glance to final action.
              </p>
            </motion.article>
            <motion.article 
              variants={card3D} 
              whileHover="hover" 
              className="rounded-[28px] border border-[#D4E7FF] bg-[#F7FBFF] p-7 transition-all duration-300 hover:border-[#84CCFF] hover:shadow-[0_24px_44px_rgba(23,45,86,0.12)]"
            >
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#172D56]">
                Brand-Aligned Design
              </h3>
              <p className="mt-4 text-[16px] leading-[1.72] text-[#36507D]">
                The visuals, messaging, and interface patterns are shaped to match the product identity while staying clean and easy to use.
              </p>
            </motion.article>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#F4F9FF] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-10"
        >
          <motion.div variants={fadeInUp} className="max-w-[720px]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#2AAEFF]">
              A Sneak Peek
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#132B56] sm:text-[42px] lg:text-[52px]">
              A closer look at the screens and moments that shape the product.
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            className="grid gap-6 lg:grid-cols-3"
            style={{ perspective: "1500px" }}
          >
            {project.sneakPeekImages.map((image, index) => (
              <motion.article
                key={`${project.slug}-${image}-${index}`}
                variants={card3D}
                whileHover="hover"
                className="group overflow-hidden rounded-[30px] border border-[#D7E7FB] bg-white transition-all duration-300 hover:border-[#74CFFF] hover:shadow-[0_28px_52px_rgba(23,45,86,0.14)]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-16 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-10"
        >
          <motion.div variants={fadeInUp} className="max-w-[720px]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.24em] text-[#2AAEFF]">
              Technologies
            </p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#132B56] sm:text-[42px] lg:text-[52px]">
              Tools and technologies behind the build.
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} 
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            style={{ perspective: "1500px" }}
          >
            {project.technologies.map((technology) => (
              <motion.article
                key={`${project.slug}-${technology.name}`}
                variants={card3D}
                whileHover="hover"
                className="group flex min-h-[164px] flex-col items-center justify-center rounded-[28px] border border-[#D8E8FB] bg-[#F8FBFF] px-6 py-8 text-center transition-all duration-300 hover:border-[#77D7FF] hover:shadow-[0_24px_48px_rgba(23,45,86,0.12)]"
              >
                <div className="relative flex h-[56px] w-[56px] items-center justify-center">
                  <Image
                    src={technology.logo}
                    alt={technology.name}
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-[#172D56]">
                  {technology.name}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

