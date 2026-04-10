"use client";

import { useEffect, useState } from "react";

export default function ScrollChrome() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = total > 0 ? (scrollTop / total) * 100 : 0;

      setProgress(nextProgress);
      setShowTop(scrollTop > 320);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-white/10 backdrop-blur-sm"
      >
        <div
          className="h-full bg-[linear-gradient(90deg,#64dff2_0%,#4d8cff_50%,#9fe7ff_100%)] shadow-[0_0_20px_rgba(100,223,242,0.55)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        type="button"
        aria-label="Scroll back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-[#10264f]/92 text-white shadow-[0_14px_30px_rgba(8,20,45,0.18),0_0_18px_rgba(126,223,255,0.16)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173569] hover:shadow-[0_18px_36px_rgba(8,20,45,0.22),0_0_24px_rgba(126,223,255,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7edfff]/35 sm:bottom-7 sm:right-7 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 19V5M5 12L12 5L19 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
