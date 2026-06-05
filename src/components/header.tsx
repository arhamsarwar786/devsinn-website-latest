"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CalendlyModal from "@/components/ui/CalendlyModal";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Packages", href: "/#packages" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        url="https://calendly.com/devsinntechnologies/30min?hide_gdpr_banner=1"
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gray-200 shadow-sm border-b border-stone backdrop-blur-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="mx-auto flex w-full max-w-[1568px] items-center justify-between px-5 sm:px-8 lg:px-10 xl:px-16">
          {/* Logo */}
          <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <div className="relative h-10 w-36 sm:w-44">
              {/* Ensure it falls back gracefully or uses standard image */}
              <Image
                src="/devsinnlogo.png"
                alt="Dev'sinn Technologies Logo"
                fill
                priority
                className="object-contain filter contrast-125"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 text-[15px] font-semibold text-nearblack md:flex lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative transition-colors duration-200 text-gray hover:text-teal"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="/pdf/Devsinn-Technologies-Portfolio.pdf"
              download="Devsinn-Technologies-Portfolio.pdf"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-stone bg-offwhite px-5 text-[13px] font-semibold text-nearblack transition-colors hover:border-teal hover:text-teal"
              title="Download company portfolio"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Portfolio</span>
            </a>

            <Button
              id="header-cta-consultation"
              onClick={() => setIsCalendlyOpen(true)}
              size="md"
              variant="primary"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone bg-offwhite text-nearblack md:hidden cursor-pointer"
          >
            <span className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {/* Mobile menu container (CSS collapse transition) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 mx-5 ${isOpen
            ? "max-h-[500px] opacity-100 mt-4 border border-stone bg-offwhite p-6 rounded-2xl shadow-md"
            : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col gap-2 text-[15px] font-semibold" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2.5 text-gray transition-colors duration-200 hover:bg-stone hover:text-nearblack"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              id="mobile-header-cta"
              onClick={() => {
                setIsCalendlyOpen(true);
                setIsOpen(false);
              }}
              variant="secondary"
              fullWidth
            >
              Book a Free Consultation
            </Button>

            <Link
              href="/contact?type=product-audit"
              onClick={() => setIsOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center rounded-full border border-stone bg-offwhite text-[15px] font-semibold text-nearblack hover:border-teal hover:text-teal transition-colors"
            >
              Request a Product Audit
            </Link>

            <a
              href="/pdf/Devsinn-Technologies-Portfolio.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-stone bg-offwhite text-[14px] font-semibold text-nearblack hover:border-teal hover:text-teal transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Portfolio</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
