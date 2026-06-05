"use client";

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
            Let's Connect
          </span>
        </div>

        {/* H1 Title */}
        <h1
          className="font-display text-[2.5rem] font-bold leading-[1.1] tracking-tight text-nearblack sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem]"
          style={{
            animation: "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) both",
          }}
        >
          Get in <span className="text-teal">Touch</span>.
        </h1>

        {/* Subtitle */}
        <p
          className="body-text text-gray text-base mt-8 max-w-[600px] leading-relaxed"
          style={{
            animation: "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.15s both",
          }}
        >
          Get in touch with Dev'sinn Technologies to discuss your next breakthrough digital product. Fill out the form below and we will respond within 1 business day.
        </p>

        {/* Scroll indicator (strictly themed) */}
        <div
          className="mt-12 flex flex-col items-center gap-2"
          style={{
            animation: "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.3s both",
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray">Scroll Down</span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-stone p-1.5">
            <div
              className="h-2 w-1.5 rounded-full bg-teal"
              style={{
                animation: "bounceDown 1.5s infinite ease-in-out",
              }}
            />
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
      `}} />
    </section>
  );
}
