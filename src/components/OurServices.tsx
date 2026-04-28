"use client";

import Link from "next/link";
import { motion, AnimatePresence, useInView, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionDivider from "@/components/ui/SectionDivider";

const services = [
  {
    id: "creative-design",
    label: "Creative Design",
    shortLabel: "Creative",
    href: "/services/Creative-Design",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="2.5" /><path d="M3 11l4.5-4.5 3 3L16 4l4 4-6 6-3-3-4.5 4.5z" />
      </svg>
    ),
    color: "#64dff2",
    glow: "rgba(100,223,242,0.35)",
    description: "We craft stunning visual identities, UI/UX experiences, motion graphics, and brand systems that make your product unforgettable and market-ready.",
    highlights: ["UI / UX Design", "Brand Identity", "Motion Graphics", "Campaign Assets"],
  },
  {
    id: "web-dev",
    label: "Web Development",
    shortLabel: "Web",
    href: "/services/Web-Development-Solutions",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><polyline points="9 8 6 11 9 14" /><polyline points="15 8 18 11 15 14" />
      </svg>
    ),
    color: "#4d8cff",
    glow: "rgba(77,140,255,0.35)",
    description: "Scalable, high-performance web solutions — from business portals to ecommerce platforms — built with modern frameworks for speed and reliability.",
    highlights: ["Custom Web Apps", "Ecommerce", "Business Portals", "CMS Platforms"],
  },
  {
    id: "app-dev",
    label: "App Development",
    shortLabel: "App",
    href: "/services/App-Development-Solutions",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.35)",
    description: "Cross-platform and native mobile apps built to feel smooth in the hand. From MVP to enterprise-grade — we ship apps users love to open.",
    highlights: ["iOS & Android", "Flutter", "Enterprise Apps", "API Integration"],
  },
  {
    id: "game-dev",
    label: "Game Development",
    shortLabel: "Game",
    href: "/services/Game-Development",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" /><line x1="12" y1="10" x2="12" y2="14" /><line x1="10" y1="12" x2="14" y2="12" /><circle cx="18" cy="10" r="1" /><circle cx="18" cy="14" r="1" />
      </svg>
    ),
    color: "#f472b6",
    glow: "rgba(244,114,182,0.35)",
    description: "From concept to launch — immersive 2D/3D games, AR/VR experiences, and interactive platforms that engage players and generate real results.",
    highlights: ["Unity / Unreal", "2D & 3D Games", "AR / VR", "WebGL Experiences"],
  },
  {
    id: "cloud",
    label: "Cloud Computing",
    shortLabel: "Cloud",
    href: "/services/Cloud-Computing-Services",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    color: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    description: "Future-ready cloud infrastructure — AWS/Azure migration to managed environments — that scales with your growth securely and efficiently.",
    highlights: ["AWS / Azure / GCP", "Cloud Migration", "DevOps", "Managed Infrastructure"],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    shortLabel: "Digital",
    href: "/services/Digital-Marketing",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "#fb923c",
    glow: "rgba(251,146,60,0.35)",
    description: "Data-driven campaigns across search, social, and paid channels that convert attention into revenue. We grow brands with clarity and strategy.",
    highlights: ["SEO & SEM", "Social Media", "PPC Campaigns", "Content Strategy"],
  },
];

// Wheel dimensions — bigger
const RADIUS = 195;
const CENTER = 245;
const SIZE = CENTER * 2;
const SPIN_DURATION = 24;

// Evenly distributed particle dots around the ring
const PARTICLES = [
  { color: "#64dff2", size: 8, offset: 0, duration: 16, opacity: 0.9 },
  { color: "#4d8cff", size: 6, offset: 60, duration: 20, opacity: 0.8 },
  { color: "#a78bfa", size: 5, offset: 120, duration: 14, opacity: 0.7 },
  { color: "#f472b6", size: 7, offset: 180, duration: 18, opacity: 0.9 },
  { color: "#34d399", size: 5, offset: 240, duration: 22, opacity: 0.75 },
  { color: "#fb923c", size: 6, offset: 300, duration: 17, opacity: 0.8 },
  { color: "#64dff2", size: 4, offset: 40, duration: 26, opacity: 0.6 },
  { color: "#4d8cff", size: 4, offset: 100, duration: 13, opacity: 0.6 },
  { color: "#a78bfa", size: 5, offset: 160, duration: 19, opacity: 0.7 },
  { color: "#f472b6", size: 4, offset: 220, duration: 21, opacity: 0.65 },
  { color: "#34d399", size: 6, offset: 280, duration: 15, opacity: 0.75 },
  { color: "#fb923c", size: 4, offset: 340, duration: 23, opacity: 0.6 },
];

function OrbitParticle({
  color, size, initialAngleDeg, duration, opacity,
}: {
  color: string; size: number; initialAngleDeg: number; duration: number; opacity: number;
}) {
  const rad = (initialAngleDeg * Math.PI) / 180;
  const x = CENTER + RADIUS * Math.cos(rad);
  const y = CENTER + RADIUS * Math.sin(rad);

  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        width: size, height: size,
        background: color,
        boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}60`,
        left: CENTER - size / 2,
        top: CENTER - size / 2,
        x: x - CENTER,
        y: y - CENTER,
        opacity,
      }}
      animate={{
        rotate: [0, 360],
        x: Array.from({ length: 37 }, (_, i) => {
          const a = ((i * 10 + initialAngleDeg) * Math.PI) / 180;
          return RADIUS * Math.cos(a);
        }),
        y: Array.from({ length: 37 }, (_, i) => {
          const a = ((i * 10 + initialAngleDeg) * Math.PI) / 180;
          return RADIUS * Math.sin(a);
        }),
      }}
      transition={{
        x: { duration, repeat: Infinity, ease: "linear" },
        y: { duration, repeat: Infinity, ease: "linear" },
      }}
    />
  );
}

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const active = services[activeIndex];
  // Refs for each node button — we update their position imperatively
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>(Array(services.length).fill(null));
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Smooth orbit via direct DOM style mutation — zero React re-renders
  useAnimationFrame((t) => {
    if (startTimeRef.current === null) startTimeRef.current = t;
    const elapsed = (t - startTimeRef.current) / 1000;
    const angle = (elapsed / SPIN_DURATION) * 360;
    services.forEach((_, i) => {
      const el = nodeRefs.current[i];
      if (!el) return;
      const deg = (i / services.length) * 360 - 90 + angle;
      const rad = (deg * Math.PI) / 180;
      const x = CENTER + RADIUS * Math.cos(rad) - 46;
      const y = CENTER + RADIUS * Math.sin(rad) - 46;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#060C1A] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-16 xl:px-16"
    >
      <SectionDivider />
      {/* Background ambient left orb */}
      <div className="pointer-events-none absolute left-[-15%] top-[-10%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(77,140,255,0.10),transparent_65%)] blur-[80px]" />

      {/* ── RIGHT SIDE: Smooth Orbiting Glowing Bubbles ── */}
      {/* Center anchor at right side of section */}
      <div
        className="pointer-events-none absolute"
        style={{ right: -20, top: "50%", transform: "translateY(-50%)", width: 600, height: 600, zIndex: 1 }}
      >
        {/* Responsive scale wrapper — anchored to right edge */}
        <div className="relative h-full w-full origin-right scale-[0.35] sm:scale-[0.55] md:scale-[0.70] lg:scale-100">
          {/* Ambient center glow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 220, height: 220,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, ${active.color}25, transparent 70%)`,
              filter: "blur(55px)",
              transition: "background 0.6s ease",
            }}
          />

          {/* ── RING 1: r=90px | 3 bubbles | 6s clockwise ── */}
          {[
            { deg: 0, size: 14, dur: 6, alpha: 1.0 },
            { deg: 120, size: 9, dur: 6, alpha: 0.75 },
            { deg: 240, size: 11, dur: 6, alpha: 0.85 },
          ].map(({ deg, size, dur, alpha }) => (
            <motion.div
              key={`r1-${deg}`}
              className="absolute"
              style={{
                width: 90, height: 2,
                left: "50%", top: "50%",
                marginTop: -1,
                transformOrigin: "0% 50%",
              }}
              animate={{ rotate: [deg, deg + 360] }}
              transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
            >
              {/* Bubble at the tip of the arm */}
              <div
                className="absolute rounded-full"
                style={{
                  width: size, height: size,
                  right: -(size / 2), top: -(size / 2),
                  background: active.color,
                  boxShadow: `0 0 ${size * 2}px ${active.color}, 0 0 ${size * 4}px ${active.color}70`,
                  opacity: alpha,
                  transition: "background 0.5s ease, box-shadow 0.5s ease",
                }}
              />
            </motion.div>
          ))}
          {/* Ring 1 track */}
          <div className="absolute rounded-full border" style={{
            width: 180, height: 180, left: "50%", top: "50%",
            marginLeft: -90, marginTop: -90,
            borderColor: `${active.color}20`,
            transition: "border-color 0.5s ease",
          }} />

          {/* ── RING 2: r=170px | 2 bubbles | 11s counter-clockwise ── */}
          {[
            { deg: 40, size: 18, dur: 11, alpha: 0.95 },
            { deg: 220, size: 12, dur: 11, alpha: 0.7 },
          ].map(({ deg, size, dur, alpha }) => (
            <motion.div
              key={`r2-${deg}`}
              className="absolute"
              style={{
                width: 170, height: 2,
                left: "50%", top: "50%",
                marginTop: -1,
                transformOrigin: "0% 50%",
              }}
              animate={{ rotate: [deg, deg - 360] }}
              transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: size, height: size,
                  right: -(size / 2), top: -(size / 2),
                  background: active.color,
                  boxShadow: `0 0 ${size * 2}px ${active.color}, 0 0 ${size * 5}px ${active.color}65`,
                  opacity: alpha,
                  transition: "background 0.5s ease, box-shadow 0.5s ease",
                }}
              />
            </motion.div>
          ))}
          {/* Ring 2 track */}
          <div className="absolute rounded-full border" style={{
            width: 340, height: 340, left: "50%", top: "50%",
            marginLeft: -170, marginTop: -170,
            borderColor: `${active.color}14`,
            borderStyle: "dashed",
            transition: "border-color 0.5s ease",
          }} />

          {/* ── RING 3: r=270px | 4 bubbles | 18s clockwise ── */}
          {[
            { deg: 0, size: 22, dur: 18, alpha: 0.95 },
            { deg: 90, size: 10, dur: 18, alpha: 0.65 },
            { deg: 180, size: 16, dur: 18, alpha: 0.85 },
            { deg: 270, size: 8, dur: 18, alpha: 0.6 },
          ].map(({ deg, size, dur, alpha }) => (
            <motion.div
              key={`r3-${deg}`}
              className="absolute"
              style={{
                width: 270, height: 2,
                left: "50%", top: "50%",
                marginTop: -1,
                transformOrigin: "0% 50%",
              }}
              animate={{ rotate: [deg, deg + 360] }}
              transition={{ duration: dur, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: size, height: size,
                  right: -(size / 2), top: -(size / 2),
                  background: active.color,
                  boxShadow: `0 0 ${size * 3}px ${active.color}, 0 0 ${size * 6}px ${active.color}55`,
                  opacity: alpha,
                  transition: "background 0.5s ease, box-shadow 0.5s ease",
                }}
              />
            </motion.div>
          ))}
          {/* Ring 3 track */}
          <div className="absolute rounded-full border" style={{
            width: 540, height: 540, left: "50%", top: "50%",
            marginLeft: -270, marginTop: -270,
            borderColor: `${active.color}09`,
            transition: "border-color 0.5s ease",
          }} />
        </div>{/* end responsive scale wrapper */}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* ── LEFT: Company Content ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-[480px] flex-col gap-6 shrink-0"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#64dff2]/20 bg-[#64dff2]/8 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#64dff2]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#64dff2]">Our Services</span>
          </div>

          <h2 className="text-[2rem] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[2.5rem]">
            Everything Your{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#8cecff_0%,#4d8cff_60%,#a78bfa_100%)]">
              Business Needs
            </span>{" "}
            to Grow
          </h2>

          <p className="text-[16px] leading-[1.85] text-[#b4d0eb]">
            Dev&apos;s Inn Technologies delivers end-to-end digital solutions — from design to deployment. We partner with startups and enterprises to build products that scale, convert, and impress.
          </p>

          {/* Active service preview card — fully clickable */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={active.href}
                className="group block rounded-[24px] border p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: `${active.color}30`,
                  background: `linear-gradient(135deg, ${active.glow.replace("0.35", "0.07")} 0%, rgba(10,20,44,0.75) 100%)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${active.glow}`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${active.color}55`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = `${active.color}30`;
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `${active.color}18`, color: active.color }}>
                      {active.icon}
                    </div>
                    <span className="text-[1.1rem] font-bold text-white">{active.label}</span>
                  </div>
                  <span className="text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: active.color }}>↗</span>
                </div>
                <p className="mb-4 text-[14.5px] leading-[1.75] text-[#b4d0eb]">{active.description}</p>
                <div className="flex flex-wrap gap-2">
                  {active.highlights.map((h) => (
                    <span key={h} className="rounded-full px-3 py-1 text-[12px] font-semibold" style={{ background: `${active.color}15`, color: active.color }}>{h}</span>
                  ))}
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4 pt-1">
            <Link
              href={active.href}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14.5px] font-bold text-[#050f24] transition-all duration-300 hover:scale-[1.04]"
              style={{ background: `linear-gradient(90deg, ${active.color} 0%, #4d8cff 100%)` }}
            >
              Explore {active.label}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="#" className="text-[13.5px] font-medium text-[#b4d0eb] underline-offset-4 hover:text-white hover:underline transition-colors">
              All Services ↗
            </Link>
          </div>
        </motion.div>

        {/* ── RIGHT: BIG Rotating Orbit Wheel ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative shrink-0 origin-center scale-[0.62] -my-[93px] sm:scale-[0.78] sm:-my-[54px] lg:scale-100 lg:my-0"
          style={{ width: SIZE, height: SIZE }}
        >
          {/* Neon rotating outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(#060C1A,#060C1A), conic-gradient(from 0deg, #64dff2, #4d8cff, #a78bfa, #f472b6, #34d399, #fb923c, #64dff2)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          />
          {/* Counter-rotating inner dashed ring */}
          <motion.div
            className="absolute inset-[26px] rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            style={{
              border: "1.5px dashed transparent",
              backgroundImage: "linear-gradient(#060C1A,#060C1A), conic-gradient(from 180deg, #4d8cff88, #64dff288, #a78bfa88, #4d8cff88)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          />
          {/* Third slow ring */}
          <motion.div
            className="absolute inset-[52px] rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{
              border: "1px solid transparent",
              backgroundImage: "linear-gradient(#060C1A,#060C1A), conic-gradient(from 90deg, #f472b644, #34d39944, #fb923c44, #f472b644)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          />

          {/* SVG orbit path ring */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox={`0 0 ${SIZE} ${SIZE}`}>
            <defs>
              <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64dff2" stopOpacity="0.45" />
                <stop offset="33%" stopColor="#4d8cff" stopOpacity="0.45" />
                <stop offset="66%" stopColor="#a78bfa" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="url(#rg1)" strokeWidth="1" />
          </svg>

          {/* ── Orbiting glow particles ── */}
          {PARTICLES.map((p, i) => {
            const steps = 361;
            const xs = Array.from({ length: steps }, (_, s) => {
              const a = ((s + p.offset) * Math.PI) / 180;
              return RADIUS * Math.cos(a);
            });
            const ys = Array.from({ length: steps }, (_, s) => {
              const a = ((s + p.offset) * Math.PI) / 180;
              return RADIUS * Math.sin(a);
            });

            return (
              <motion.div
                key={i}
                className="pointer-events-none absolute rounded-full"
                style={{
                  width: p.size, height: p.size,
                  background: p.color,
                  boxShadow: `0 0 ${p.size * 2.5}px ${p.color}, 0 0 ${p.size * 5}px ${p.color}50`,
                  left: CENTER - p.size / 2,
                  top: CENTER - p.size / 2,
                  opacity: p.opacity,
                }}
                animate={{ x: xs, y: ys }}
                transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
              />
            );
          })}

          {/* ── ORBIT NODES: position-based, never rotated ── */}
          {services.map((service, i) => {
            // Initial static position (overridden by useAnimationFrame each frame)
            const initDeg = (i / services.length) * 360 - 90;
            const initRad = (initDeg * Math.PI) / 180;
            const initX = CENTER + RADIUS * Math.cos(initRad) - 46;
            const initY = CENTER + RADIUS * Math.sin(initRad) - 46;
            const isActive = i === activeIndex;

            return (
              <button
                key={service.id}
                ref={(el) => { nodeRefs.current[i] = el; }}
                onClick={() => setActiveIndex(i)}
                className="absolute rounded-full border focus:outline-none flex flex-col items-center justify-center transition-[border-color,box-shadow,background] duration-500"
                style={{
                  left: initX, top: initY,
                  width: 92, height: 92,
                  borderColor: isActive ? service.color : "#2a3a58",
                  background: isActive
                    ? `radial-gradient(circle at center, ${service.glow.replace("0.35", "0.22")}, rgba(12,20,40,0.96))`
                    : "rgba(12,20,40,0.88)",
                  boxShadow: isActive ? `0 0 26px ${service.glow}, 0 0 54px ${service.glow.replace("0.35", "0.10")}` : "none",
                  zIndex: isActive ? 10 : 5,
                }}
              >
                {/* Icon + label — NOT rotated, always upright */}
                <div
                  className="flex flex-col items-center gap-1.5"
                  style={{ color: isActive ? service.color : "#4e6587" }}
                >
                  {service.icon}
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest leading-none"
                    style={{ color: isActive ? service.color : "#4e6587" }}
                  >
                    {service.shortLabel}
                  </span>
                </div>

                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: `2px solid ${service.color}` }}
                    animate={{ scale: [1, 1.45, 1], opacity: [0.9, 0, 0.9] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </button>
            );
          })}

          {/* Center hub — static */}
          <div
            className="pointer-events-none absolute rounded-full flex flex-col items-center justify-center"
            style={{
              left: CENTER - 78, top: CENTER - 78,
              width: 156, height: 156,
              borderWidth: 1.5, borderStyle: "solid",
              borderColor: `${active.color}35`,
              background: "linear-gradient(145deg, rgba(22,34,56,0.98), rgba(8,12,24,1))",
              boxShadow: `0 0 60px ${active.glow}, inset 0 2px 12px rgba(100,223,242,0.07)`,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-2"
                style={{ color: active.color }}
              >
                {active.icon}
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                  {active.shortLabel}
                </span>
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ border: `1.5px solid ${active.color}` }}
              animate={{ scale: [1, 1.22, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{ inset: -14, border: `1px solid ${active.color}55` }}
              animate={{ scale: [1, 1.14, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile pill tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="relative z-10 mx-auto mt-12 flex w-full max-w-[1400px] flex-wrap justify-center gap-3 lg:hidden"
      >
        {services.map((service, i) => (
          <button
            key={service.id}
            onClick={() => setActiveIndex(i)}
            className="rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all duration-300"
            style={{
              borderColor: i === activeIndex ? service.color : "#2e3e5c",
              color: i === activeIndex ? service.color : "#6b8db5",
              background: i === activeIndex ? `${service.color}14` : "rgba(16,25,43,0.7)",
              boxShadow: i === activeIndex ? `0 0 16px ${services[i].glow}` : "none",
            }}
          >
            {service.label}
          </button>
        ))}
      </motion.div>
    </section>
  );
}
