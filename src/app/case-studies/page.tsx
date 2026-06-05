import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Case Studies — Real Projects & Practical Impact",
  description:
    "Explore our portfolio of real software projects — SaaS platforms, AI automation tools, mobile apps, and custom web applications built for startups and growing businesses.",
  alternates: {
    canonical: "https://devsinntechnologies.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <main className="min-h-screen bg-offwhite text-nearblack pt-28 pb-16">
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-16">
          {/* Header */}
          <div className="mb-14 max-w-[680px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
                Case Studies
              </span>
            </div>
            <h1 className="h1-hero text-left mt-2 leading-tight tracking-tight">
              Real Projects. Practical Impact.
            </h1>
            <p className="body-text text-gray text-base mt-4">
              Explore honest descriptions of the systems we built, the engineering choices we made, and the results delivered.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone bg-offwhite transition-all duration-300 hover:border-teal hover:-translate-y-1.5"
              >
                {/* Hero Image */}
                <div className="relative h-[210px] overflow-hidden bg-stone">
                  <Image
                    src={study.heroImage}
                    alt={`${study.title} case study screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Top Left Tag */}
                  <div className="absolute top-4 left-4 rounded-full border border-stone bg-offwhite px-3 py-1 shadow-sm">
                    <span className="caption-text text-teal font-semibold text-[10px] uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="caption-text text-teal font-bold text-[10px] uppercase tracking-wider mb-2">
                    {study.category}
                  </p>
                  <h2 className="h3-card text-nearblack font-semibold mb-2">
                    {study.title}
                  </h2>
                  <p className="body-text text-gray text-sm mb-6 leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {study.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="caption-text bg-stone rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-gray"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="body-text text-gray text-base mb-6">
              Ready to engineer your product roadmap?
            </p>
            <Button
              id="case-studies-index-cta"
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
