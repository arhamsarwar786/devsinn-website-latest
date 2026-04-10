"use client";

import Image from "next/image";
import { useState } from "react";
import Divider from "@/components/ui/Divider";

const offices = [
  {
    id: "pak",
    label: "Devsinn PAK",
    address: "H#14B-III, Butt Street, Rustam Park, Samnabad, Lahore",
    phone: "+92 336 5918295",
    pinLabel: "Devsinn PAK",
    pinClassName:
      "left-[18%] top-[22%] sm:left-[20%] sm:top-[18%] lg:left-[19%] lg:top-[16%]",
    labelClassName:
      "-translate-x-[20%] sm:-translate-x-[10%] lg:translate-x-0",
    contentAlign: "items-start text-left",
  },
  {
    id: "uk",
    label: "Devsinn UK",
    address: "Nottingham, Nottinghamshire County, England, UK",
    phone: "+44 7868 862651",
    pinLabel: "Devsinn UK",
    pinClassName:
      "left-[80%] top-[38%] sm:left-[79%] sm:top-[31%] lg:left-[76%] lg:top-[30%]",
    labelClassName:
      "-translate-x-[72%] sm:-translate-x-[76%] lg:-translate-x-[46%]",
    contentAlign: "items-end text-right lg:items-start lg:text-left",
  },
];

function MapPin({ active }: { active: boolean }) {
  return (
    <div
      className={`relative h-[52px] w-[41px] transition duration-200 ${
        active ? "scale-100" : "scale-95 opacity-90"
      }`}
    >
      <Image
        src="/office/office3.png"
        alt=""
        fill
        sizes="41px"
        className="object-contain"
      />
    </div>
  );
}

export default function DevsinnOffice() {
  const [activeOffice, setActiveOffice] = useState(offices[0].id);

  return (
    <section className="relative overflow-hidden bg-[#172D56] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-20 xl:px-16">
      <div className="absolute inset-0">
        <Image
          src="/office/office1.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[68%_center] lg:object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#172D56]/44 lg:bg-[#172D56]/28" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[40px] lg:min-h-[618px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,606px)_minmax(0,1fr)] lg:gap-[34px]">
          <div className="flex flex-col">
            <h2 className="text-[32px] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[52px]">
              Devsinn Global Offices
            </h2>

            <p className="mt-5 max-w-[520px] text-[15px] font-normal leading-[1.55] text-white/92 sm:text-[16px] sm:leading-[1.45]">
              Devsinn operates across the globe with offices in key locations.
              <span className="hidden sm:inline">
                <br />
              </span>{" "}
              Click on a location to view it on the map.
            </p>

            <Divider className="mt-10 sm:mt-12 lg:mt-14" />

            <div className="mt-10 flex flex-col gap-0 sm:mt-12 lg:mt-14">
              {offices.map((office, index) => {
                const active = activeOffice === office.id;

                return (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setActiveOffice(office.id)}
                    className={`w-full text-left transition-opacity duration-200 hover:opacity-100 ${
                      active ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    <div className={`${index > 0 ? "pt-10 sm:pt-12 lg:pt-14" : ""}`}>
                      {index > 0 ? <Divider className="mb-10 sm:mb-12 lg:mb-14" /> : null}
                      <h3 className="text-[30px] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[54px]">
                        {office.label}
                      </h3>
                      <p className="mt-5 max-w-[605px] text-[16px] font-normal leading-[1.5] text-white sm:mt-6 sm:text-[18px] sm:leading-[1.45]">
                        {office.address}
                      </p>
                      <p className="mt-3 text-[16px] font-normal leading-[1.45] text-white sm:text-[18px]">
                        {office.phone}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[24px] sm:min-h-[360px] lg:min-h-[618px] lg:overflow-visible lg:rounded-none">
            <div className="absolute inset-0 opacity-100">
              <Image
                src="/office/office2.png"
                alt="Devsinn office map"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-contain object-center lg:object-right-center"
              />
            </div>

            {offices.map((office) => {
              const active = activeOffice === office.id;

              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveOffice(office.id)}
                  className={`absolute z-10 flex ${office.contentAlign} ${office.pinClassName}`}
                >
                  <div className={`flex flex-col items-center ${office.labelClassName}`}>
                    <MapPin active={active} />
                    <span
                      className={`mt-2 whitespace-nowrap text-[16px] font-bold leading-[1.1] text-white transition-opacity duration-200 sm:mt-3 sm:text-[20px] lg:text-[25px] ${
                        active ? "opacity-100" : "opacity-80"
                      }`}
                    >
                      {office.pinLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
