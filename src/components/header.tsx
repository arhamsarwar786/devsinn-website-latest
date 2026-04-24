"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 [font-family:var(--font-poppins)] transition-colors duration-300 ${
        isScrolled
          ? "bg-white/70 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1568px] items-center justify-between px-5 py-2 sm:px-8 sm:py-2.5 lg:px-10 lg:py-2.5 xl:px-16">
        <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <Image
            src="/devsinnlogo.png"
            alt="Devsinn Technologies"
            width={210}
            height={58}
            priority
            className="h-auto w-[110px] sm:w-[130px] lg:w-[150px]"
          />
        </Link>

        <nav
          className={`hidden items-center gap-8 text-[15px] font-medium md:flex lg:gap-[56px] ${
            isScrolled ? "text-[#1b325d]" : "text-white"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-opacity duration-200 hover:opacity-80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/pdf/Devsinn-Technologies-Portfolio.pdf"
            download="Devsinn-Technologies-Portfolio.pdf"
            className={`inline-flex min-h-[42px] items-center justify-center gap-2 rounded-full px-5 text-[14px] font-medium transition-transform duration-200 hover:scale-[1.02] ${
              isScrolled
                ? "border border-[#1b325d]/14 bg-[#1b325d]/6 text-[#1b325d]"
                : "border border-white/28 bg-white/10 text-white backdrop-blur-sm"
            }`}
            title="Download company portfolio"
          >
            <Download size={16} />
            <span>Portfolio</span>
          </a>

          <Button
            href="/contact"
            size="md"
            variant={isScrolled ? "primary" : "secondary"}
            className={`transition-transform duration-200 hover:scale-[1.02] lg:min-h-[44px] lg:min-w-[150px] lg:px-6 lg:text-[14px] ${
              isScrolled ? "" : "bg-white text-[#1b325d]"
            }`}
          >
            Contact us
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            isScrolled
              ? "border-[#1b325d]/20 bg-[#1b325d]/5 text-[#1b325d]"
              : "border-white/30 bg-white/10 text-white"
          }`}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-5 rounded-[28px] border border-white/10 bg-[#0b1b3f]/95 p-5 text-white shadow-2xl backdrop-blur md:hidden"
          >
            <nav className="flex flex-col gap-4 text-[15px] font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-3 py-2 transition-colors duration-200 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              href="/contact"
              variant="secondary"
              fullWidth
              onClick={() => setIsOpen(false)}
              className="mt-5 text-[15px] text-[#1b325d]"
            >
              Contact us
            </Button>

            <a
              href="/pdf/Devsinn-Technologies-Portfolio.pdf"
              download="Devsinn-Technologies-Portfolio.pdf"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white/14"
            >
              <Download size={16} />
              <span>Download Portfolio</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
