"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 [font-family:var(--font-poppins)] transition-colors duration-300 ${
        isScrolled
          ? "bg-white/70 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1568px] items-center justify-between px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 xl:px-16">
        <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <Image
            src="/devsinnlogo.png"
            alt="Devsinn Technologies"
            width={210}
            height={58}
            priority
            className="h-auto w-[118px] sm:w-[138px] lg:w-[172px]"
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

        <div className="hidden md:block">
          <Button
            href="/contact"
            size="md"
            variant={isScrolled ? "primary" : "secondary"}
            className={`transition-transform duration-200 hover:scale-[1.02] lg:min-h-[50px] lg:min-w-[180px] lg:px-8 lg:text-[15px] ${
              isScrolled
                ? ""
                : "bg-white text-[#1b325d]"
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

      {isOpen ? (
        <div className="mx-5 rounded-[28px] border border-white/10 bg-[#0b1b3f]/95 p-5 text-white shadow-2xl backdrop-blur md:hidden">
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
        </div>
      ) : null}
    </header>
  );
}
