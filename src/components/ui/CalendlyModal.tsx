"use client";

import { useEffect } from "react";

type CalendlyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  url: string;
};

export default function CalendlyModal({
  isOpen,
  onClose,
  url,
}: CalendlyModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] bg-[#020815]/78 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
    >
      <div
        className="relative mx-auto flex h-full w-full max-w-[1100px] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-1 top-1 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white text-[#10264f] shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-105"
          aria-label="Close booking modal"
        >
          <span className="text-[22px] leading-none">×</span>
        </button>

        <div className="h-[82vh] w-full overflow-hidden rounded-[28px] border border-white/14 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.3)]">
          <iframe
            src={url}
            title="Calendly booking"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
