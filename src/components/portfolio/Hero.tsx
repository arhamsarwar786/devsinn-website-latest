"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroAmbient from "@/components/ui/HeroAmbient";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const dotTransition = {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut" as const,
  };

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
          className="object-cover object-[65%_78%] sm:object-[68%_70%] lg:object-[center_center]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,29,0.9)_0%,rgba(8,22,52,0.56)_32%,rgba(9,23,52,0.34)_64%,rgba(4,12,29,0.72)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,12,29,0.97)_0%,rgba(8,19,46,0.92)_24%,rgba(18,49,118,0.5)_55%,rgba(8,20,48,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_60%,rgba(78,132,255,0.38)_0%,rgba(15,37,84,0.18)_34%,rgba(4,11,26,0.1)_78%)] sm:bg-[radial-gradient(circle_at_center,_rgba(78,132,255,0.34)_0%,_rgba(15,37,84,0.16)_34%,_rgba(4,11,26,0.04)_72%)]" />
      <HeroAmbient />
      
      <motion.span 
        animate={{ y: [0, -10, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ ...dotTransition, delay: 0 }}
        className="hero-dot pointer-events-none absolute left-[55%] top-[25%] z-20 h-3.5 w-3.5 rounded-full bg-[#8ff6ff] shadow-[0_0_18px_rgba(126,223,255,0.85)] sm:h-4 sm:w-4" 
      />
      <motion.span 
        animate={{ y: [0, 8, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ ...dotTransition, delay: 0.5 }}
        className="hero-dot pointer-events-none absolute left-[68%] top-[18%] z-20 h-2.5 w-2.5 rounded-full bg-[#8ff6ff] shadow-[0_0_18px_rgba(126,223,255,0.85)]" 
      />
      <motion.span 
        animate={{ x: [0, 6, 0], y: [0, -6, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ ...dotTransition, delay: 1 }}
        className="hero-dot pointer-events-none absolute right-[17%] top-[28%] z-20 h-3 w-3 rounded-full bg-[#8ff6ff] shadow-[0_0_18px_rgba(126,223,255,0.85)]" 
      />
      <motion.span 
        animate={{ x: [0, -4, 0], scale: [1, 1.1, 1] }}
        transition={{ ...dotTransition, delay: 1.5 }}
        className="hero-dot pointer-events-none absolute right-[6.5%] top-[37%] z-20 h-4 w-4 rounded-full bg-[#8ff6ff] shadow-[0_0_18px_rgba(126,223,255,0.85)] sm:h-4.5 sm:w-4.5" 
      />
      <motion.span 
        animate={{ y: [0, 12, 0] }}
        transition={{ ...dotTransition, delay: 0.2 }}
        className="hero-dot pointer-events-none absolute right-[11%] top-[60%] z-20 h-2.5 w-2.5 rounded-full bg-[#8ff6ff] shadow-[0_0_18px_rgba(126,223,255,0.85)] sm:h-3 sm:w-3" 
      />
      <motion.span 
        animate={{ scale: [1, 0.9, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ ...dotTransition, delay: 0.8 }}
        className="hero-dot pointer-events-none absolute right-[21%] top-[72%] z-20 h-3.5 w-3.5 rounded-full bg-[#8ff6ff] shadow-[0_0_18px_rgba(126,223,255,0.85)] sm:h-4 sm:w-4" 
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1568px] items-center px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-30 lg:px-10 lg:pb-8 lg:pt-[106px] xl:px-16 xl:pt-[118px]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-[820px]"
        >
          <motion.h1 
            variants={fadeInUp}
            className="max-w-[660px] pt-12 text-[3.45rem] font-bold leading-[0.98] tracking-[-0.06em] text-white sm:pt-14 sm:text-[4rem] md:text-[4.35rem] lg:max-w-[790px] lg:pt-0 lg:text-[68px] lg:leading-[1.05] xl:text-[74px]"
          >
            <span className="block">Showcasing</span>
            <span className="mt-2 block whitespace-nowrap lg:mt-2.5">Excellence Through</span>
            <span className="mt-2 block lg:mt-2.5">Our Work</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-[760px] text-[1rem] leading-[1.22] text-white/95 sm:text-[1.2rem] lg:mt-5 lg:text-[22px] lg:leading-[1.12] xl:text-[23px]"
          >
            <span className="block whitespace-nowrap">
              We craft elegant, engaging, &amp; responsive web &amp; mobile
            </span>
            <span className="block">applications</span>
          </motion.p>

          <motion.div variants={fadeInUp}>
            <div className="mt-7 flex max-w-[560px] flex-col gap-3 sm:flex-row lg:mt-8">
              <a
                href="/pdf/Devsinn-Technologies-Portfolio.pdf"
                download="Devsinn-Technologies-Portfolio.pdf"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 text-[16px] font-medium text-[#17305f] transition-all duration-200 hover:scale-[1.02] hover:bg-white/90 lg:h-[74px] lg:w-[269px] lg:min-h-0 lg:rounded-[16px] lg:px-10 lg:text-[18px]"
              >
                Download Portfolio
              </a>

              <Button
                href="/contact"
                variant="outline"
                fullWidth
                className="max-w-[248px] hover:scale-[1.02] sm:max-w-[260px] lg:h-[74px] lg:w-[269px] lg:max-w-[269px] lg:min-h-0 lg:rounded-[16px] lg:px-10 lg:text-[18px]"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
