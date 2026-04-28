"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import SectionDivider from "@/components/ui/SectionDivider";

export default function VisionMission() {
  return (
    <section className="relative bg-[#060C1A] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32 xl:px-16 overflow-hidden">
      <SectionDivider />
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#0A0F1E] shadow-2xl lg:min-h-[450px]">
          {/* Animated glowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/10 via-transparent to-[#c084fc]/10 opacity-30" />
          
          <Image
            src="/about/vision1.png"
            alt="Vision and mission background"
            fill
            sizes="(max-width: 1023px) 100vw, 1540px"
            className="object-cover opacity-60 mix-blend-overlay"
            priority={false}
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0F1E_0%,rgba(10,15,30,0.4)_100%)]" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative grid gap-16 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-[100px] lg:px-[64px] lg:py-[80px]"
          >
            {/* Vision */}
            <div className="max-w-[600px] group">
              <motion.div variants={fadeInUp} className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#38bdf8] to-[#818cf8] text-white shadow-[0_0_30px_rgba(56,189,248,0.3)] transition-transform duration-500 group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="text-[2rem] font-black leading-none tracking-[-0.03em] sm:text-[2.5rem]"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">Vision</span>
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="mt-5 text-[1rem] leading-[1.7] text-white/60 lg:text-[1.1rem]"
              >
                Our vision at Dev&apos;s Inn Technologies is to become a leading
                company that is recognized for our expertise, innovation, and
                commitment to client success. We strive to empower business
                with the tools and solutions they need to thrive in the digital
                age, while also fostering a collaborative company that values
                creativity, integrity, and excellence.
              </motion.p>
            </div>

            {/* Mission */}
            <div className="max-w-[640px] group">
              <motion.div variants={fadeInUp} className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c084fc] to-[#f472b6] text-white shadow-[0_0_30px_rgba(192,132,252,0.3)] transition-transform duration-500 group-hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m4.93 10.93 14.14 14.14"/><path d="m2 22 20-20"/><path d="m4.93 19.07 14.14-14.14"/></svg>
              </motion.div>

              <motion.h2 
                variants={fadeInUp}
                className="text-[2rem] font-black leading-none tracking-[-0.03em] sm:text-[2.5rem]"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">Mission</span>
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="mt-5 text-[1rem] leading-[1.7] text-white/60 lg:text-[1.1rem]"
              >
                At Dev&apos;s Inn Technologies, our mission is to help businesses
                of all sizes establish a strong and effective online presence
                through our innovative web development solutions. We aim to
                deliver customized and high-quality digital products that meet
                the specific needs of each client, while also providing
                excellent customer service and support.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
