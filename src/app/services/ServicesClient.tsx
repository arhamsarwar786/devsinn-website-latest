"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import servicesData from "@/data/services.json";
import Button from "@/components/ui/Button";

export default function ServicesPageClient() {
  return (
    <>
      <main className="min-h-screen bg-offwhite text-nearblack pt-28 pb-16">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-16">
          {/* Header */}
          <div className="mb-14 max-w-[680px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
                Our Services
              </span>
            </div>
            <h1 className="h1-hero text-left mt-2 leading-tight tracking-tight">
              6 Core Services. One Focused Engineering Partner.
            </h1>
            <p className="body-text text-gray text-base mt-4">
              We focus on building, automating, scaling, and maintaining products with production-grade engineering blueprints.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.slice(0, 6).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone bg-offwhite p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-teal"
              >
                <div>
                  {/* Category Eyebrow */}
                  <p className="caption-text text-teal font-semibold text-[10px] uppercase tracking-wider mb-2">
                    {service.heroEyebrow}
                  </p>

                  <h2 className="h3-card text-nearblack font-semibold mb-3">
                    {service.label}
                  </h2>

                  <p className="body-text text-gray text-sm mb-6 leading-relaxed">
                    {service.mainDescription.slice(0, 140)}…
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.highlights.slice(0, 3).map((h) => (
                      <span
                        key={h.title}
                        className="caption-text bg-stone rounded-full px-2.5 py-1 text-[11px] font-semibold text-teal"
                      >
                        {h.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More link */}
                <div className="flex items-center gap-1.5 text-sm text-teal font-semibold mt-auto select-none">
                  <span>Learn more</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="mt-20 text-center">
            <p className="body-text text-gray text-base mb-6">
              Not sure which engagement structure aligns with your product goals?
            </p>
            <Button
              id="services-index-cta"
              variant="primary"
              href="/contact"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
