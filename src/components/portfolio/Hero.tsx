"use client";

import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-offwhite px-5 pt-36 pb-20 sm:px-8 lg:px-10 lg:pt-44 lg:pb-28 xl:px-16 text-center">
      {/* Background Decorative Rings (Strict warm stone/off-white colors only) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:h-[800px] sm:w-[800px]">
        <svg
          className="h-full w-full text-stone"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[850px] flex-col items-center">
        
        {/* Availability / Eyebrow Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-teal animate-pulse" />
          <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
            Our Selected Work
          </span>
        </div>

        {/* H1 Title */}
        <h1
          className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-nearblack sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]"
          style={{
            animation: "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) both",
          }}
        >
          Showcasing Excellence <br />
          Through <span className="text-teal">Our Work</span>.
        </h1>

        {/* Subtitle */}
        <p
          className="body-text text-gray text-base mt-8 max-w-[600px] leading-relaxed"
          style={{
            animation: "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s both",
          }}
        >
          We craft elegant, engaging, and responsive web and mobile applications engineered for high operations uptime and seamless user growth.
        </p>

        {/* Action Buttons */}
        <div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-center w-full max-w-[480px]"
          style={{
            animation: "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.3s both",
          }}
        >
          <a
            href="/pdf/Devsinn-Technologies-Portfolio.pdf"
            download="Devsinn-Technologies-Portfolio.pdf"
            className="btn-sweep sweep-primary bg-nearblack text-offwhite border border-nearblack font-semibold text-sm px-8 py-4 rounded-full w-full sm:w-auto text-center shrink-0 cursor-pointer shadow-sm"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
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
              Download Portfolio
            </span>
          </a>

          <Button
            href="/contact"
            variant="outline"
            fullWidth
            size="lg"
          >
            Get in Touch
          </Button>
        </div>

      </div>
    </section>
  );
}
