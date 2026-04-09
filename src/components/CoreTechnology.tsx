"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  { label: "Arts & Illustration", widthClass: "lg:w-[279px]" },
  { label: "Software Development Services", widthClass: "lg:w-[404px]" },
  { label: "AI Technologies", widthClass: "lg:w-[266px]" },
];

export default function CoreTechnology() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <section className="bg-white px-5 pb-14 pt-6 text-[#172D56] sm:px-8 sm:pb-16 sm:pt-8 lg:px-10 lg:pb-20 lg:pt-10 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:gap-[32px]">
        <div className="flex w-full max-w-[949px] flex-col items-center gap-6 text-center lg:gap-[24px]">
          <h2 className="text-[30px] font-bold leading-[1.1475] tracking-[-0.02em] text-[#172D56] sm:text-[34px] lg:text-[40px] lg:leading-[45.9px]">
            Our Core Technologies
          </h2>

          <p className="max-w-[867px] text-[16px] font-normal leading-[24px] tracking-[0] text-[#252525]">
            Dev&apos;s Inn works under various modern technologies for effective,
            scalable, and future-proof custom software development.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 pt-2 sm:gap-5 lg:flex-row lg:gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab.label)}
                className={`flex h-[71px] w-full items-center justify-center rounded-[50px] px-8 text-center text-[18px] font-semibold leading-[1.2] whitespace-nowrap transition-colors duration-200 sm:max-w-[420px] sm:px-10 lg:px-[65px] ${tab.widthClass} ${
                  activeTab === tab.label
                    ? "bg-[#172D56] text-white"
                    : "bg-transparent text-[#172D56] hover:bg-[#172D56] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-[28px] bg-[#31487B]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#223C72_0%,#31497B_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(12deg,rgba(97,118,161,0.74)_0%,rgba(97,118,161,0.74)_41%,rgba(97,118,161,0)_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(168deg,rgba(20,39,77,0.28)_0%,rgba(20,39,77,0.08)_46%,rgba(20,39,77,0.16)_100%)]" />

          <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-[52px] lg:py-[52px]">
            <div className="relative mx-auto aspect-[987/159] w-full max-w-[987px]">
              <Image
                src="/coretechnology/frame.png"
                alt="Technology frameworks and platforms"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 987px"
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
