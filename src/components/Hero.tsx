"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroAmbient from "@/components/ui/HeroAmbient";
import CalendlyModal from "@/components/ui/CalendlyModal";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

const stats = [
  {
    value: "100+",
    lines: ["SATISFIED", "CLIENTS"],
  },
  {
    value: "150+",
    lines: ["PROJECTS", "COMPLETED"],
  },
  {
    value: "14+",
    lines: ["YEARS INDUSTRY", "EXPERIENCE"],
  },
];

export default function Hero() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#08142d] text-white">
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/devsinntechnologies/30min?hide_gdpr_banner=1"
      />

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

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,29,0.9)_0%,rgba(8,22,52,0.52)_34%,rgba(7,20,48,0.32)_64%,rgba(4,12,29,0.72)_100%)] sm:bg-[linear-gradient(90deg,rgba(4,12,29,0.96)_0%,rgba(12,31,76,0.68)_34%,rgba(18,49,118,0.22)_58%,rgba(5,16,41,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_62%,rgba(78,132,255,0.36)_0%,rgba(9,23,52,0.16)_34%,rgba(4,11,26,0.1)_100%)] sm:bg-[radial-gradient(circle_at_center,_rgba(78,132,255,0.28)_0%,_rgba(9,23,52,0.12)_38%,_rgba(4,11,26,0.08)_100%)]" />
      <HeroAmbient />

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative mx-auto flex min-h-[100svh] w-full max-w-[1568px] flex-col px-5 pb-10 pt-24 sm:px-8 sm:pb-10 sm:pt-30 lg:min-h-[100svh] lg:px-10 lg:pb-8 lg:pt-[102px] xl:px-16 xl:pt-[134px]"
      >
        <div className="flex flex-1 items-center pt-12 sm:pt-16 lg:pt-0">
          <div className="w-full max-w-[545px] xl:max-w-[545px]">
            <motion.h1
              variants={fadeInUp}
              className="max-w-[545px] text-[2.05rem] font-bold uppercase leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.5rem] md:text-[4rem] lg:text-[50px] xl:text-[60px] xl:leading-[1.231666667]"
            >
              <span className="block sm:hidden">WE BUILD &amp;</span>
              <span className="block sm:hidden">REFINE</span>
              <span className="hidden sm:block">WE BUILD &amp; REFINE</span>
              <span className="block">SMART WEB</span>
              <span className="block">SOLUTIONS</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-[545px] text-[0.95rem] leading-[1.32] font-medium text-white/95 sm:text-[1.125rem] lg:max-w-[545px] lg:text-[18px] lg:leading-[21px]"
            >
              Realise your vision securely, collaborating effortlessly with
              anyone, anywhere, on any device.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[10px] lg:mt-9"
            >
              <Button
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=923365918295",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                variant="secondary"
                fullWidth
                className="font-semibold hover:scale-[1.02] sm:w-[220px] lg:min-h-[63px] lg:w-[242px] lg:px-[62px]"
              >
                Chat with us
              </Button>

              <Button
                onClick={() => setIsCalendlyOpen(true)}
                variant="outline"
                fullWidth
                className="font-semibold hover:scale-[1.02] sm:w-[220px] lg:min-h-[63px] lg:w-[231px] lg:px-[62px]"
              >
                Book A Call
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-2 gap-6 pt-12 sm:grid-cols-3 sm:gap-8 lg:w-[506px] lg:pt-10 xl:pt-[92px] lg:[grid-template-columns:100px_150px_156px]"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.value} 
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="flex flex-col items-start"
            >
              <p
                className="text-[2.5rem] font-light leading-none tracking-[-0.03em] text-white sm:text-[2.85rem] lg:text-[56px]"
              >
                {stat.value}
              </p>
              <p
                className="mt-5 text-left text-[0.85rem] uppercase leading-[1.6] tracking-[0.01em] text-white/80 lg:text-[14px] lg:leading-[28px]"
              >
                {stat.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

