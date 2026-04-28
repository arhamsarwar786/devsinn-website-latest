"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import SectionDivider from "@/components/ui/SectionDivider";

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
  { label: "Creative Design", href: "/services/Creative-Design" },
  { label: "Web Development", href: "/services/Web-Development-Solutions" },
  { label: "App Development", href: "/services/App-Development-Solutions" },
  { label: "Digital Marketing", href: "/services/Digital-Marketing" },
  { label: "Game Development", href: "/services/Game-Development" },
  { label: "Cloud Computing", href: "/services/Cloud-Computing-Services" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/devsinntechnology?mibextid=ZbWKwL",
    color: "#1877F2",
    glow: "rgba(24,119,242,0.6)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/devsinntechnologies?igshid=MzRlODBiNWFlZA%3D%3D",
    color: "#E1306C",
    glow: "rgba(225,48,108,0.6)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/devsinn-technologies/",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.6)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <motion.div whileHover="hover" initial="initial" className="relative w-fit">
      <Link
        href={href}
        className="group relative flex items-center gap-3 text-[15px] font-medium leading-[1.6] text-white/50 transition-colors duration-300 hover:text-white"
      >
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute h-1 w-1 rounded-full bg-white/20 transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:bg-[#38bdf8]" />
        </span>
        <span className="relative z-10">{label}</span>

        {/* Glow underline sweep */}
        <motion.div
          className="absolute -bottom-1 left-5 right-0 h-[1px] bg-gradient-to-r from-[#38bdf8] to-[#f472b6] opacity-0"
          variants={{
            initial: { width: 0, opacity: 0 },
            hover: { width: "100%", opacity: 1 }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </Link>
    </motion.div>
  );
}

// Sparkle Particle Component
function Sparkles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer ref={containerRef} className="relative overflow-hidden bg-[#010308] text-white pt-24 sm:pt-32">

      {/* ── AMBIENT CYBER ENVIRONMENT ── */}
      {/* Hex Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' stroke-width='1' stroke='%23ffffff' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Massive Glowing Core */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[800px] w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15)_0%,rgba(167,139,250,0.05)_40%,transparent_70%)] blur-[120px]" />

      {/* Sparkle Particles Ascending */}
      <Sparkles />

      {/* Top Scanner Line */}
      <div className="absolute top-0 left-0 right-0">
        <SectionDivider />
      </div>

      <div className="relative z-10 mx-auto px-5 sm:px-8 lg:px-10 xl:px-16 w-full max-w-[1400px]">

        {/* ── HOLOGRAPHIC NEWSLETTER CONSOLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20 }}
          className="group relative mx-auto mb-20 max-w-[1200px] overflow-hidden rounded-[2.5rem] p-[1px] md:mb-32"
        >
          {/* Animated Gradient Border */}
          <motion.div
            className="absolute inset-[-100%] rounded-full opacity-50"
            style={{ background: 'conic-gradient(from 0deg, transparent 0%, #38bdf8 30%, #a78bfa 50%, #f472b6 70%, transparent 100%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Internal Glassmorphism Body */}
          <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-[2.5rem] bg-[#050C1B]/80 backdrop-blur-3xl px-8 py-12 lg:flex-row lg:gap-16 lg:px-16 lg:py-16 shadow-[0_0_80px_rgba(56,189,248,0.1)]">

            {/* Ambient inner sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

            {/* Tech Decoration */}
            <svg className="absolute left-0 top-0 h-full w-full opacity-20 pointer-events-none" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path d="M 0 150 Q 250 50 500 150 T 1000 150" stroke="url(#wave-grad)" fill="none" strokeWidth="2" />
              <path d="M 0 160 Q 250 60 500 160 T 1000 160" stroke="url(#wave-grad)" fill="none" strokeWidth="0.5" opacity="0.5" />
              <defs>
                <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Left Content */}
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#0a1122]/50 px-4 py-2 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
                </span>
                <span className="text-[12px] font-black uppercase tracking-[0.25em] text-white/80">Incoming Transmission</span>
              </div>
              <h3 className="text-[2.2rem] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[3rem] items-center">
                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#f472b6]">Tech Insights</span>
              </h3>
              <p className="mt-4 text-[16px] text-white/50 max-w-[450px]">
                Join 2,000+ top-tier professionals receiving our exclusive digital intelligence. Zero spam.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="relative z-10 flex w-full max-w-[500px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:border sm:border-white/20 sm:bg-[#02050c]/80 sm:p-1.5 sm:shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:backdrop-blur-xl transition-all duration-300 sm:focus-within:border-[#38bdf8]/50 sm:focus-within:shadow-[0_0_30px_rgba(56,189,248,0.2)] sm:hover:border-white/30">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-[60px] sm:h-[52px] w-full items-center justify-center gap-3 rounded-full border border-[#34d399]/40 bg-[#34d399]/10 px-6 backdrop-blur-xl"
                >
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#34d399] text-[#020814]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <span className="text-[15px] sm:text-[16px] font-bold text-[#34d399]">Subscription Verified!</span>
                </motion.div>
              ) : (
                <>
                  <div className="flex h-[60px] sm:h-[52px] w-full flex-1 items-center rounded-full border border-white/20 bg-[#02050c]/80 sm:border-transparent sm:bg-transparent shadow-[0_10px_20px_rgba(0,0,0,0.3)] sm:shadow-none focus-within:border-[#38bdf8]/50 sm:focus-within:border-transparent transition-colors">
                    <div className="pl-6 text-white/30 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      required
                      style={{ boxShadow: "none" }}
                      className="w-full flex-1 rounded-full border-none bg-transparent px-4 py-2 mt-0.5 sm:mt-1 font-mono text-[14px] sm:text-[15px] tracking-tight text-white placeholder-white/30 outline-none ring-0 focus:border-none focus:outline-none focus:ring-0 leading-normal"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group relative h-[60px] sm:h-[52px] w-full sm:w-auto shrink-0 overflow-hidden rounded-full bg-white px-8 transition-transform duration-300 hover:scale-[1.02] shadow-[0_10px_20px_rgba(0,0,0,0.3)] sm:shadow-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#f472b6] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative z-10 text-[15px] font-bold text-[#050C1B] group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 h-full">
                      Subscribe <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </span>
                  </button>
                </>
              )}
            </form>
          </div>
        </motion.div>

        {/* ── MAIN FOOTER COLUMNS ── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-8 pb-16">

          {/* Brand Col */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <Link href="/" className="inline-flex group relative">
              <Image
                src="/devsinnlogo.png"
                alt="Dev's Inn Technologies"
                width={200}
                height={56}
                className="h-auto w-[160px] sm:w-[190px] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#38bdf8] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
            </Link>

            <p className="text-[16px] leading-[1.8] text-white/50 max-w-[340px]">
              Devsinn Technologies engineers world-class digital products. We forge the future of intelligent web platforms and immersive global experiences.
            </p>

            {/* Magnetic Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                  whileHover={{ y: -8, scale: 1.15 }}
                  className="group relative flex h-[48px] w-[48px] items-center justify-center rounded-2xl border border-white/10 bg-[#0a1122] transition-all duration-300"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = social.color;
                    (e.currentTarget as HTMLElement).style.background = `${social.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                    (e.currentTarget as HTMLElement).style.background = "#0a1122";
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 blur-md group-hover:opacity-100"
                    style={{ background: social.color }}
                  />
                  <span className="relative z-10 text-white/60 transition-colors duration-300 group-hover:text-white">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Location HUD */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-transparent w-fit p-1 pr-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a1122] shadow-inner">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#f472b6] shadow-[0_0_10px_#f472b6]" />
              </div>
              <span className="text-[13px] font-mono tracking-wider text-white/60">Lahore, PK • Nottingham, UK</span>
            </div>
          </motion.div>

          {/* Links Cols */}
          {[
            { title: "Company", links: aboutLinks, delay: 0.2 },
            { title: "Resources", links: resourceLinks, delay: 0.3 },
            { title: "Services", links: serviceLinks, delay: 0.4 }
          ].map((col) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: col.delay }}
            >
              <h4 className="mb-8 text-[14px] font-black uppercase tracking-[0.2em] text-white flex items-center gap-3">
                {col.title}
                <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </h4>
              <div className="flex flex-col gap-4">
                {col.links.map((item) => (
                  <FooterLink key={item.label} {...item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM COPYRIGHT BAR ── */}
        <div className="relative mt-8 flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">

          <p className="text-[14px] text-white/40 font-mono">
            &copy; {new Date().getFullYear()} DEVSINN TECHNOLOGIES. ALL SYSTEMS OPERATIONAL.
          </p>

          <div className="flex items-center gap-2 text-[14px] text-white/40">
            <span>Engineered with</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#f472b6" className="drop-shadow-[0_0_8px_#f472b6]"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </motion.div>
            <span>by Devsinn</span>
          </div>

        </div>
      </div>

      {/* Background Watermark Text Giant */}
      <div className="pointer-events-none absolute bottom-[-5%] left-1/2 w-full -translate-x-1/2 text-center whitespace-nowrap opacity-[0.06] select-none mix-blend-screen">
        <h1 className="text-[20vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-[#ffffff] to-transparent">DEVSINN</h1>
      </div>
    </footer>
  );
}
