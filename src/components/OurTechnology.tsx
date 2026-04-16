"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, card3D } from "@/lib/motion";

const tabs = [
  { label: "Web Design", widthClass: "lg:w-[235px]" },
  { label: "Web Devleopement", widthClass: "lg:w-[302px]" },
  { label: "App Development", widthClass: "lg:w-[287px]" },
];

const cards = [
  {
    image: "/ourtechnology/tec1.png",
    alt: "Web design project showcase",
  },
  {
    image: "/ourtechnology/tec2.png",
    alt: "Web development project showcase",
  },
  {
    image: "/ourtechnology/tec3.png",
    alt: "App development project showcase",
  },
];

export default function OurTechnology() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <section className="bg-white px-5 py-14 text-[#172D56] sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto flex w-full max-w-[1280px] flex-col gap-[40px]"
      >
        <div className="flex w-full justify-center">
          <motion.div 
            variants={staggerContainer}
            className="flex w-full max-w-[824px] flex-col items-center justify-center gap-4 sm:gap-5 lg:flex-row lg:gap-0"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.label}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => setActiveTab(tab.label)}
                className={`flex h-[71px] w-full items-center justify-center rounded-[50px] px-8 text-center text-[18px] font-semibold leading-[1.2] whitespace-nowrap transition-colors duration-200 sm:max-w-[320px] lg:px-[65px] ${tab.widthClass} ${
                  activeTab === tab.label
                    ? "bg-[#172D56] text-white"
                    : "bg-transparent text-[#172D56] hover:bg-[#172D56] hover:text-white"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          className="grid w-full gap-[20px] md:grid-cols-2 xl:grid-cols-3"
          style={{ perspective: "1000px" }}
        >
          {cards.map((card, index) => (
            <motion.article
              key={card.image}
              variants={card3D}
              whileHover="hover"
              className={`overflow-hidden rounded-[20px] border border-[#EAECF0] bg-white transition-all duration-300 hover:border-[#8ecbff] hover:shadow-[0_22px_44px_rgba(18,45,86,0.14)] ${
                index === 2 ? "md:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-[413/518] w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

