"use client";

import Image from "next/image";

const tabs = [
  "Web Design",
  "Web Devleopement",
  "App Development",
];

const portfolioItems = [
  {
    src: "/portfolio/portfolio1.png",
    alt: "Infinetworx website showcase",
  },
  {
    src: "/portfolio/portfolio2.png",
    alt: "Doky product website showcase",
  },
  {
    src: "/portfolio/Bakery shopping application- case study - Ivelina Valkova-2.png",
    alt: "Bargain Ex marketplace showcase",
  },
  {
    src: "/portfolio/Project Management Mobile Application UI Design-3.png",
    alt: "RubnQub ecommerce showcase",
  },
  {
    src: "/portfolio/Fitness Mobile Application-UX_UI Design-3.png",
    alt: "WyzePay website showcase",
  },
  {
    src: "/portfolio/Bakery shopping application- case study - Ivelina Valkova-3.png",
    alt: "Locksmith website showcase",
  },
  {
    src: "/portfolio/Project Management Mobile Application UI Design-4.png",
    alt: "Jiffy services website showcase",
  },
  {
    src: "/portfolio/Fitness Mobile Application-UX_UI Design-4.png",
    alt: "MeriRide website showcase",
  },
  {
    src: "/portfolio/Bakery shopping application- case study - Ivelina Valkova-4.png",
    alt: "Imazing ecommerce website showcase",
  },
];

export default function PortfolioList() {
  return (
    <section className="bg-white px-5 py-[72px] sm:px-8 sm:py-[88px] lg:px-10 lg:py-[104px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[60px]">
        <div className="flex w-full justify-center">
          <div className="flex w-full max-w-[958px] flex-col items-center gap-4 sm:gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className={`inline-flex h-[71px] items-center justify-center rounded-[50px] px-8 text-center text-[18px] font-semibold leading-[1.2] tracking-[0] text-[#172D56] ${
                  index === 0
                    ? "w-full bg-[#172D56] text-white sm:max-w-[279px] lg:w-[279px]"
                    : "w-full sm:max-w-[279px] lg:w-[279px]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-[20px] md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-[20px] border border-black/20 bg-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#8ecbff] hover:shadow-[0_24px_48px_rgba(13,35,78,0.18)]"
            >
              <div className="relative aspect-[413/518] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 413px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
