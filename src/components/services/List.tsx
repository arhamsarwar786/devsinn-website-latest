"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "Creative-Design",
    number: "01",
    title: "Creative Design",
    subtitle: "& Animations",
    description:
      "Unleash visual storytelling with stunning designs and animations. We craft sleek graphics and dynamic visuals to captivate audiences, enhance marketing, and elevate your brand's digital presence.",
    tags: ["UI / UX Design", "Brand Identity", "Motion Graphics", "Campaign Assets"],
    buttonLabel: "Explore Design",
    image: "/list/list1_new.png",
    imageAlt: "Creative design and animations illustration",
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.25)",
    gradient: "from-[#0c1f35] to-[#081628]",
  },
  {
    id: "Web-Development-Solutions",
    number: "02",
    title: "Web Development",
    subtitle: "Solutions",
    description:
      "From corporate websites to ecommerce platforms, we deliver user-friendly, visually appealing, high-performance web applications built with cutting-edge technology to grow your online presence.",
    tags: ["Custom Web Apps", "Ecommerce", "Business Portals", "CMS Platforms"],
    buttonLabel: "Explore Web",
    image: "/list/list2_new.png",
    imageAlt: "Web development illustration",
    color: "#818cf8",
    glow: "rgba(129,140,248,0.25)",
    gradient: "from-[#0f0c2a] to-[#0a0820]",
  },
  {
    id: "App-Development-Solutions",
    number: "03",
    title: "App Development",
    subtitle: "Mobile & Native",
    description:
      "We deliver innovative app solutions — from corporate apps to feature-rich ecommerce platforms, we craft user-friendly, high-performance mobile experiences that engage audiences and drive business success.",
    tags: ["iOS & Android", "Flutter & React Native", "Enterprise Apps", "API Integration"],
    buttonLabel: "Explore Apps",
    image: "/list/list3_new.png",
    imageAlt: "App development illustration",
    color: "#c084fc",
    glow: "rgba(192,132,252,0.25)",
    gradient: "from-[#1a0c2e] to-[#130820]",
  },
  {
    id: "Game-Development",
    number: "04",
    title: "Game Development",
    subtitle: "Immersive Experiences",
    description:
      "Bring your ideas to life with immersive 2D/3D games, AR/VR experiences, and interactive platforms. From concept to deployment, we deliver high-quality graphics and captivating gameplay.",
    tags: ["Unity / Unreal", "2D & 3D Games", "AR / VR", "WebGL Experiences"],
    buttonLabel: "Explore Games",
    image: "/list/list4_new.png",
    imageAlt: "Game development illustration",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.25)",
    gradient: "from-[#2a0c1f] to-[#1a0812]",
  },
  {
    id: "Cloud-Computing-Services",
    number: "05",
    title: "Cloud Computing",
    subtitle: "Infrastructure & DevOps",
    description:
      "Unlock scalability and efficiency with our cloud computing services. From migration to management, we ensure seamless data access, enhanced security, and cost-effective operations.",
    tags: ["AWS / Azure / GCP", "Cloud Migration", "DevOps Pipelines", "Managed Infrastructure"],
    buttonLabel: "Explore Cloud",
    image: "/list/list5_new.png",
    imageAlt: "Cloud computing services illustration",
    color: "#34d399",
    glow: "rgba(52,211,153,0.25)",
    gradient: "from-[#041f18] to-[#02150f]",
  },
  {
    id: "Digital-Marketing",
    number: "06",
    title: "Digital Marketing",
    subtitle: "Growth & Strategy",
    description:
      "Maximize online visibility with SEO, social media, content, paid ads, and email campaigns. Our data-driven strategies boost brand awareness, traffic, and conversions with personalized solutions.",
    tags: ["SEO & SEM", "Social Media", "PPC Campaigns", "Content Strategy"],
    buttonLabel: "Explore Marketing",
    image: "/list/list6_new.png",
    imageAlt: "Digital marketing illustration",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.25)",
    gradient: "from-[#1f1208] to-[#140c04]",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[#0A0F1E]"
      style={{ boxShadow: `0 0 80px ${service.glow.replace("0.25", "0.08")}` }}
    >
      {/* Top accent line */}
      <div
        className="absolute left-0 top-0 h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${service.color} 50%, transparent 100%)` }}
      />

      <div className={`flex flex-col gap-0 lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"}`}>
        {/* Image side */}
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-0 lg:w-[48%]">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            quality={100}
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            style={{
              maskImage: isEven
                ? 'linear-gradient(to right, black 80%, transparent 100%)'
                : 'linear-gradient(to left, black 80%, transparent 100%)',
              WebkitMaskImage: isEven
                ? 'linear-gradient(to right, black 80%, transparent 100%)'
                : 'linear-gradient(to left, black 80%, transparent 100%)',
            }}
          />
        </div>

        {/* Content side */}
        <div className="flex flex-1 flex-col justify-center p-8 lg:p-12 xl:p-16">


          {/* Title */}
          <h2 className="text-[2rem] font-black leading-[1.0] tracking-[-0.04em] text-white sm:text-[2.5rem] lg:text-[3rem]">
            {service.title}
            <br />
            <span className="font-light opacity-50">{service.subtitle}</span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-[0.98rem] leading-[1.75] text-white/55 lg:text-[1.04rem]">
            {service.description}
          </p>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-4 py-2 text-[12px] font-semibold"
                style={{ background: `${service.color}10`, color: service.color, border: `1px solid ${service.color}20` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href={`/services/${service.id}`}
              className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}cc 100%)`,
                boxShadow: `0 8px 24px ${service.glow}`,
                color: "#050f24",
              }}
            >
              {service.buttonLabel}
              <svg
                width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function List() {
  return (
    <section className="bg-[#060C1A] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-16">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-14 max-w-[1400px] text-center"
      >
        <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/40">
          Everything we build
        </p>
        <h2 className="mt-3 text-[2rem] font-black tracking-[-0.04em] text-white sm:text-[2.5rem]">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#c084fc]">
            full suite
          </span>{" "}
          of services
        </h2>
      </motion.div>

      {/* Service cards */}
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
