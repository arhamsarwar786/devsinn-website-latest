"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/ui/SectionDivider";

const testimonials = [
  {
    stars: 5,
    content: "Arham is a skilled, innovative Flutter/FlutterFlow expert with strong leadership, dedication, and holistic thinking. Highly recommended and eager to rehire.",
    name: "Taimur Khan",
    designation: "UK",
    initials: "TK",
    color: "#64dff2",
  },
  {
    stars: 5,
    content: "Thank you for your hard work. The delivery was on time and the quality exceeded our expectations. Will definitely work together again.",
    name: "TrustLab Co., Ltd.",
    designation: "South Korea",
    initials: "TL",
    color: "#4d8cff",
  },
  {
    stars: 5,
    content: "Great remote desktop support. Very professional and knowledgeable. I would highly recommend him to anyone looking for top-tier technical assistance.",
    name: "Elizabeth",
    designation: "United States",
    initials: "EL",
    color: "#a78bfa",
  },
  {
    stars: 5,
    content: "Amazing experience with this cooperative seller — thanks a lot! The communication was smooth and the results were exactly what I was looking for.",
    name: "toyoucreative",
    designation: "Morocco",
    initials: "TC",
    color: "#f472b6",
  },
  {
    stars: 5,
    content: "Really wonderful experience with this seller. I highly recommend him to anyone who needs quality work done efficiently and professionally.",
    name: "marwanbougsid",
    designation: "Morocco",
    initials: "MB",
    color: "#34d399",
  },
  {
    stars: 5,
    content: "An exceptional experience. Arham is very skilled and quick to find a solution. He is my first choice when it comes to FlutterFlow back-end support.",
    name: "vaidassaltenis",
    designation: "Lithuania",
    initials: "VS",
    color: "#fb923c",
  },
  {
    stars: 5,
    content: "Excellent developer — gave me the best quality of work. Every detail was handled with care and precision. Strongly recommend for any development project.",
    name: "amritdhr",
    designation: "India",
    initials: "AD",
    color: "#64dff2",
  },
  {
    stars: 5,
    content: "Did a great job! Quick turnaround, clear communication, and professional delivery. I'm very happy with the results and will be returning for more work.",
    name: "princessele",
    designation: "United States",
    initials: "PE",
    color: "#4d8cff",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function QuoteIcon({ color }: { color: string }) {
  return (
    <svg width="42" height="32" viewBox="0 0 42 32" fill="none">
      <path d="M0 32V19.2C0 14.4 1.2 10.3333 3.6 7C6 3.53333 9.46667 1.2 14 0L16.4 3.6C13.4667 4.66667 11.2667 6.33333 9.8 8.6C8.46667 10.7333 7.8 13.2 7.8 16H14V32H0ZM24 32V19.2C24 14.4 25.2 10.3333 27.6 7C30 3.53333 33.4667 1.2 38 0L40.4 3.6C37.4667 4.66667 35.2667 6.33333 33.8 8.6C32.4667 10.7333 31.8 13.2 31.8 16H38V32H24Z" fill={color} fillOpacity="0.25" />
    </svg>
  );
}

export default function ClientReviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + testimonials.length) % testimonials.length);
  }, []);

  const prev = () => goTo(current - 1, -1);
  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[current];
  const prevIdx = (current - 1 + testimonials.length) % testimonials.length;
  const nextIdx = (current + 1) % testimonials.length;

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.96 }),
  };

  return (
    <section className="relative overflow-hidden bg-[#f8faff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28 xl:px-16">
      <SectionDivider />
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute left-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(77,140,255,0.08),transparent_70%)] blur-[60px]" />
      <div className="pointer-events-none absolute bottom-[-5%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(100,223,242,0.07),transparent_70%)] blur-[60px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#4d8cff]">Client Reviews</p>
            <h2 className="mt-2 text-[2.4rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0d1a2d] sm:text-[3rem]">
              What Our Clients{" "}
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#4d8cff,#a78bfa)]">
                Say About Us
              </span>
            </h2>
          </div>
          <p className="max-w-[380px] text-[15.5px] leading-[1.75] text-[#5a6a82]">
            Real feedback from real clients across the globe — we let our work speak for itself.
          </p>
        </motion.div>

        {/* Main slider area */}
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-16">

          {/* Left: Featured card */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[28px] p-8 sm:p-10"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #f0f5ff)",
                  boxShadow: `0 8px 40px rgba(77,140,255,0.10), 0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)`,
                  border: "1px solid rgba(77,140,255,0.12)",
                }}
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <QuoteIcon color={active.color} />
                </div>

                {/* Stars */}
                <div className="mb-5 flex items-center gap-1" style={{ color: "#f59e0b" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < active.stars} />
                  ))}
                  <span className="ml-2 text-[13px] font-semibold text-[#5a6a82]">5.0 / 5.0</span>
                </div>

                {/* Content */}
                <p className="text-[17.5px] font-normal leading-[1.8] text-[#2d3a4a]">
                  &ldquo;{active.content}&rdquo;
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-transparent via-[rgba(77,140,255,0.2)] to-transparent" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[17px] font-bold text-white"
                    style={{ background: `linear-gradient(135deg, ${active.color}, #4d8cff)` }}
                  >
                    {active.initials}
                  </div>
                  <div>
                    <p className="text-[16px] font-bold text-[#0d1a2d]">{active.name}</p>
                    <div className="mt-0.5 flex items-center gap-1.5 text-[13.5px] text-[#5a6a82]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {active.designation}
                    </div>
                  </div>

                  {/* Active color accent dot */}
                  <div className="ml-auto flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full animate-pulse" style={{ background: active.color }} />
                    <span className="text-[12px] font-medium text-[#5a6a82]">Verified Client</span>
                  </div>
                </div>

                {/* Active color bar at bottom */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-[3px] rounded-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${active.color}, #4d8cff)` }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation controls */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prev}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#d1dce8] bg-white transition-all duration-300 hover:border-[#4d8cff] hover:shadow-[0_4px_16px_rgba(77,140,255,0.2)]"
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#4d8cff] bg-[#4d8cff] transition-all duration-300 hover:bg-[#3a76f0] hover:shadow-[0_4px_16px_rgba(77,140,255,0.35)]"
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots */}
              <div className="ml-2 flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, i > current ? 1 : -1)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 7,
                      height: 7,
                      background: i === current ? "#4d8cff" : "#c8d6e8",
                    }}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <span className="ml-auto text-[13px] font-medium text-[#5a6a82]">
                {current + 1} <span className="text-[#c8d6e8]">/</span> {testimonials.length}
              </span>
            </div>
          </div>

          {/* Right: Preview stack */}
          <div className="hidden flex-col gap-4 lg:flex">
            {/* Previous card (muted preview) */}
            <motion.div
              key={`prev-${prevIdx}`}
              className="rounded-[20px] p-5 opacity-50"
              style={{
                background: "linear-gradient(145deg, #ffffff, #f5f8ff)",
                border: "1px solid rgba(77,140,255,0.10)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div className="mb-3 flex items-center gap-1" style={{ color: "#f59e0b" }}>
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled />)}
              </div>
              <p className="line-clamp-2 text-[14px] leading-[1.65] text-[#3a4a5c]">
                &ldquo;{testimonials[prevIdx].content}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${testimonials[prevIdx].color}, #4d8cff)` }}
                >
                  {testimonials[prevIdx].initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#2d3a4a]">{testimonials[prevIdx].name}</p>
                  <p className="text-[12px] text-[#5a6a82]">{testimonials[prevIdx].designation}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats card */}
            <div
              className="rounded-[20px] p-6"
              style={{
                background: "linear-gradient(135deg, #0d1a2d, #172d56)",
                boxShadow: "0 8px 32px rgba(13,26,45,0.18)",
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(77,140,255,0.2)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold uppercase tracking-wider text-white/50">Client Satisfaction</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-[3.2rem] font-extrabold leading-none text-white">98%</span>
                <span className="mb-1 rounded-full bg-[#34d399]/20 px-2.5 py-1 text-[12px] font-semibold text-[#34d399]">↑ Positive</span>
              </div>
              <p className="mt-2 text-[13px] text-white/45">Based on {testimonials.length}+ verified reviews</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #4d8cff, #a78bfa)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                />
              </div>
            </div>

            {/* Next card preview */}
            <motion.div
              key={`next-${nextIdx}`}
              className="rounded-[20px] p-5 opacity-60"
              style={{
                background: "linear-gradient(145deg, #ffffff, #f5f8ff)",
                border: "1px solid rgba(77,140,255,0.10)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div className="mb-3 flex items-center gap-1" style={{ color: "#f59e0b" }}>
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} filled />)}
              </div>
              <p className="line-clamp-2 text-[14px] leading-[1.65] text-[#3a4a5c]">
                &ldquo;{testimonials[nextIdx].content}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${testimonials[nextIdx].color}, #4d8cff)` }}
                >
                  {testimonials[nextIdx].initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#2d3a4a]">{testimonials[nextIdx].name}</p>
                  <p className="text-[12px] text-[#5a6a82]">{testimonials[nextIdx].designation}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
