"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const aboutLinks = [
  { label: "Company", href: "/company" },
  { label: "Why Choose Us", href: "/whychooseus" },
  { label: "Contact Us", href: "/contact" },
];

const resourceLinks = [
  { label: "Terms and Condition", href: "/termsandconditions" },
  { label: "Support", href: "/support" },
];

const serviceLinks = [
  { label: "Creative Design", href: "/services/Creative-Design-and-Animations" },
  { label: "Web Development", href: "/services/Web-Development-Solutions" },
  { label: "App Development", href: "/services/App-Development-Solutions" },
  { label: "Digital Marketing", href: "/services/Digital-Marketing-Solutions" },
  { label: "Game Development", href: "/services/Game-Development-Solutions" },
  { label: "Cloud Computing Services", href: "/services/Cloud-Computing-Services" },
];

const footerIcons = [
  { src: "/footer/facebook.png", alt: "Facebook", href: "#" },
  { src: "/footer/instagram.png", alt: "Instagram", href: "#" },
  { src: "/footer/linkdin.png", alt: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-14 text-[#0E1D3C] sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:flex-row lg:gap-[96px]"
      >
        <div className="w-full max-w-[413px] shrink-0">
          <motion.div variants={fadeInUp}>
            <Link href="/" className="inline-flex">
              <Image
                src="/devsinnlogo.png"
                alt="Dev's Inn Technologies"
                width={261}
                height={86}
                className="h-auto w-[220px] sm:w-[240px] lg:w-[261px]"
              />
            </Link>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            className="mt-9 max-w-[413px] text-[18px] font-normal leading-[24px] tracking-[0] text-[#252525]"
          >
            Devsinn Technologies is a software company offering web, mobile,
            and enterprise solutions to help businesses grow digitally.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="mt-9 flex items-center gap-[20px]"
          >
            {footerIcons.map((icon) => (
              <motion.div
                key={icon.alt}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={icon.href}
                  aria-label={icon.alt}
                  className="block"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px]"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          variants={staggerContainer}
          className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-[181px_247px_236px] lg:gap-[107px]"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0E1D3C]">
              About Us
            </h3>
            <div className="mt-5 flex flex-col gap-[12px]">
              {aboutLinks.map((item) => (
                <motion.div key={item.label} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={item.href}
                    scroll
                    className="text-[18px] font-normal leading-[1.55] text-[#0E1D3C] transition-opacity duration-200 hover:opacity-75"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0E1D3C]">
              Resources
            </h3>
            <div className="mt-5 flex flex-col gap-[12px]">
              {resourceLinks.map((item) => (
                <motion.div key={item.label} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={item.href}
                    scroll
                    className="text-[18px] font-normal leading-[1.55] text-[#0E1D3C] transition-opacity duration-200 hover:opacity-75"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0E1D3C]">
              Social Media
            </h3>
            <div className="mt-5 flex flex-col gap-[10px]">
              {serviceLinks.map((item) => (
                <motion.div key={item.label} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href={item.href}
                    className="text-[18px] font-normal leading-[1.55] text-[#0E1D3C] transition-opacity duration-200 hover:opacity-75"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
