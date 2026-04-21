"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Divider from "@/components/ui/Divider";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

const offices = [
  {
    id: "pak",
    label: "Devsinn PAK",
    address: "H#14B-III, Butt Street, Rustam Park, Samnabad, Lahore",
    phone: "+92 336 5918295",
    pinLabel: "Devsinn PAK",
    pinClassName:
      "left-[18%] top-[22%] sm:left-[20%] sm:top-[18%] lg:left-[19%] lg:top-[16%]",
    labelClassName:
      "-translate-x-[20%] sm:-translate-x-[10%] lg:translate-x-0",
    contentAlign: "items-start text-left",
  },
  {
    id: "uk",
    label: "Devsinn UK",
    address: "Nottingham, Nottinghamshire County, England, UK",
    phone: "+44 7868 862651",
    pinLabel: "Devsinn UK",
    pinClassName:
      "left-[80%] top-[38%] sm:left-[79%] sm:top-[31%] lg:left-[76%] lg:top-[30%]",
    labelClassName:
      "-translate-x-[72%] sm:-translate-x-[76%] lg:-translate-x-[46%]",
    contentAlign: "items-end text-right lg:items-start lg:text-left",
  },
];

function MapPin({ active }: { active: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center h-[52px] w-[41px] transition duration-200 ${
        active ? "scale-110 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" : "scale-95 opacity-60 drop-shadow-none"
      }`}
    >
      <Image
        src="/office/office3.png"
        alt=""
        fill
        sizes="41px"
        className="object-contain"
      />
    </div>
  );
}

export default function DevsinnOffice() {
  const [activeOffice, setActiveOffice] = useState(offices[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOffice((current) => {
        const idx = offices.findIndex((o) => o.id === current);
        return offices[(idx + 1) % offices.length].id;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#060C1A] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-28 xl:px-16">
      {/* Soft Glow Backgrounds */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[700px] w-[700px] -translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-[700px] w-[700px] translate-x-[40%] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.08)_0%,transparent_70%)] blur-[100px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="absolute inset-0 opacity-20 mix-blend-screen"
      >
        <Image
          src="/office/office1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[68%_center] lg:object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#060C1A] via-transparent to-[#060C1A]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col gap-[40px] lg:min-h-[618px]"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,606px)_minmax(0,1fr)] lg:gap-[60px]">
          <div className="flex flex-col justify-center">
            <motion.h2
              variants={fadeInUp}
              className="text-[2.5rem] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[3.2rem] lg:text-[4rem]"
            >
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">Offices</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-[520px] text-[1.1rem] font-normal leading-[1.6] text-white/60 sm:text-[1.2rem]"
            >
              Devsinn operates across the globe with offices in key locations.
              <span className="hidden sm:inline">
                <br />
              </span>{" "}
              Click on a location to view it on the map.
            </motion.p>

            <motion.div variants={fadeIn}>
              <Divider className="mt-10 border-white/10 sm:mt-12 lg:mt-14" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="mt-10 flex flex-col gap-0 sm:mt-12 lg:mt-14"
            >
              {offices.map((office, index) => {
                const active = activeOffice === office.id;

                return (
                  <motion.button
                    key={office.id}
                    variants={fadeInUp}
                    type="button"
                    onClick={() => setActiveOffice(office.id)}
                    className={`w-full text-left transition-opacity duration-300 hover:opacity-100 ${
                      active ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <div className={`${index > 0 ? "pt-8 sm:pt-10 lg:pt-12" : ""}`}>
                      {index > 0 ? <Divider className="mb-8 border-white/10 sm:mb-10 lg:mb-12" /> : null}
                      <h3 className={`text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[2.5rem] lg:text-[3rem] transition-colors duration-300 ${active ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "text-white"}`}>
                        {office.label}
                      </h3>
                      <AnimatePresence mode="wait">
                        {active && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <p className="mt-5 max-w-[605px] text-[1.05rem] font-normal leading-[1.6] text-[#38bdf8] sm:mt-6 sm:text-[1.15rem]">
                              {office.address}
                            </p>
                            <p className="mt-2 text-[1rem] font-bold text-white/80 sm:text-[1.1rem]">
                              {office.phone}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            className="relative min-h-[300px] overflow-hidden rounded-[24px] sm:min-h-[400px] lg:min-h-[618px] lg:overflow-visible lg:rounded-none"
          >
            <div className="absolute inset-0 opacity-100">
              <Image
                src="/office/office2.png"
                alt="Devsinn office map"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-contain object-center lg:object-right-center opacity-40 mix-blend-screen"
              />
            </div>

            {offices.map((office) => {
              const active = activeOffice === office.id;

              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveOffice(office.id)}
                  className={`absolute z-10 flex ${office.contentAlign} ${office.pinClassName}`}
                >
                  <motion.div
                    animate={active ? { scale: 1.05 } : { scale: 1 }}
                    className={`flex flex-col items-center ${office.labelClassName}`}
                  >
                    <MapPin active={active} />
                    <span
                      className={`mt-2 whitespace-nowrap text-[16px] font-bold leading-[1.1] transition-all duration-300 sm:mt-3 sm:text-[20px] lg:text-[22px] ${
                        active ? "opacity-100 text-[#38bdf8] drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" : "opacity-40 text-white"
                      }`}
                    >
                      {office.pinLabel}
                    </span>
                  </motion.div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
