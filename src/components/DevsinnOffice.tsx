"use client";

import Image from "next/image";
import { useState } from "react";

const offices = [
  {
    id: "pak",
    label: "Devsinn PAK",
    address: "H#14B-III, Butt Street, Rustam Park, Samnabad, Lahore",
    phone: "+92 336 5918295",
    pinLabel: "Devsinn PAK",
    pinClassName:
      "left-[20%] top-[18%] sm:left-[22%] sm:top-[16%] lg:left-[19%] lg:top-[16%]",
    textAlign: "items-start text-left",
  },
  {
    id: "uk",
    label: "Devsinn UK",
    address: "Nottingham, Nottinghamshire County, England, UK",
    phone: "+44 7868 862651",
    pinLabel: "Devsinn UK",
    pinClassName:
      "left-[72%] top-[30%] sm:left-[74%] sm:top-[28%] lg:left-[76%] lg:top-[30%]",
    textAlign: "items-start text-left",
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
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[#172D56]/28" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[40px] lg:min-h-[618px]">
        <div className="grid gap-10 lg:grid-cols-[606px_minmax(0,1fr)] lg:gap-[34px]">
          <div className="flex flex-col">
            <h2 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[52px]">
              Devsinn Global Offices
            </h2>

            <p className="mt-6 max-w-[520px] text-[16px] font-normal leading-[1.45] text-white">
              Devsinn operates across the globe with offices in key locations.
              <br />
              Click on a location to view it on the map.
            </p>

            <div className="mt-14 border-t border-white/18" />

            <div className="mt-14 flex flex-col gap-0">
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
                    <div className={`${index > 0 ? "border-t border-white/18 pt-14" : ""}`}>
                      <h3 className="text-[34px] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[54px]">
                        {office.label}
                      </h3>
                      <p className="mt-7 max-w-[605px] text-[18px] font-normal leading-[1.45] text-white">
                        {office.address}
                      </p>
                      <p className="mt-3 text-[18px] font-normal leading-[1.45] text-white">
                        {office.phone}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[618px]">
            <div className="absolute inset-0 opacity-100">
              <Image
                src="/office/office2.png"
                alt="Devsinn office map"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-contain object-right-center"
              />
            </div>

            {offices.map((office) => {
              const active = activeOffice === office.id;

              return (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveOffice(office.id)}
                  className={`absolute z-10 flex ${office.textAlign} ${office.pinClassName}`}
                >
                  <div className="flex flex-col items-center">
                    <MapPin active={active} />
                    <span
                      className={`mt-3 whitespace-nowrap text-[22px] font-bold leading-[1.1] text-white transition-opacity duration-200 sm:text-[26px] lg:text-[25px] ${
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
