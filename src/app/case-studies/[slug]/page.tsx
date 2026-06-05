import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: `${study.title} — Case Study`,
    description: `${study.tagline}. See how we solved ${study.industry} challenges with ${study.techStack.slice(0, 3).join(", ")}.`,
    alternates: {
      canonical: `https://devsinntechnologies.com/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const otherStudies = caseStudies.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <main className="min-h-screen bg-offwhite text-nearblack pt-24 pb-16">
        {/* Banner Hero */}
        <div className="relative h-[320px] w-full overflow-hidden sm:h-[400px] border-b border-stone">
          <Image
            src={study.heroImage}
            alt={`${study.title} case study banner`}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle gradient vignette to blend with banner */}
          <div className="absolute inset-0 bg-gradient-to-t from-offwhite via-offwhite/40 to-transparent" />
          
          <div className="absolute bottom-8 left-1/2 w-full max-w-[1400px] -translate-x-1/2 px-5 sm:px-8 lg:px-10 xl:px-16">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-3 py-1 shadow-sm">
              <span className="caption-text text-teal font-semibold text-[10px] uppercase tracking-wider">
                {study.industry}
              </span>
            </div>
            <h1 className="h1-hero text-left leading-tight tracking-tight text-nearblack">
              {study.title}
            </h1>
            <p className="body-text text-gray text-base mt-2">{study.tagline}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mx-auto w-full max-w-[1400px] px-5 py-12 sm:px-8 lg:px-10 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            
            {/* Left Column: Details */}
            <div>
              {/* Category */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-1.5">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-teal">
                  {study.category}
                </span>
              </div>

              {/* Challenge */}
              <section className="mb-10">
                <h2 className="h3-card font-semibold text-nearblack mb-4">The Challenge</h2>
                <p className="body-text text-gray text-base leading-relaxed">{study.challenge}</p>
              </section>

              {/* Solution */}
              <section className="mb-10">
                <h2 className="h3-card font-semibold text-nearblack mb-4">The Solution</h2>
                <p className="body-text text-gray text-base leading-relaxed">{study.solution}</p>
              </section>

              {/* Features grid */}
              <section className="mb-10">
                <h2 className="h3-card font-semibold text-nearblack mb-6">Core Features Engineered</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {study.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-stone bg-offwhite p-4 text-sm text-gray"
                    >
                      <svg
                        className="mt-1 shrink-0 text-teal"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Business Impact list */}
              <section className="mb-10">
                <h2 className="h3-card font-semibold text-nearblack mb-4">Business Impact</h2>
                <div className="flex flex-col gap-3">
                  {study.businessImpact.map((impact) => (
                    <div
                      key={impact}
                      className="flex items-start gap-3 rounded-xl border border-stone bg-offwhite p-4"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
                      <p className="body-text text-gray text-sm leading-relaxed">{impact}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Screenshots list */}
              {study.screenshots.length > 0 && (
                <section className="mb-10">
                  <h2 className="h3-card font-semibold text-nearblack mb-4">Screenshots</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {study.screenshots.map((screenshot, i) => (
                      <div
                        key={screenshot}
                        className="relative h-[200px] overflow-hidden rounded-2xl border border-stone bg-stone"
                      >
                        <Image
                          src={screenshot}
                          alt={`${study.title} screenshot ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-6">
              {/* Tech stack tags */}
              <div className="rounded-2xl border border-stone bg-offwhite p-6">
                <h3 className="caption-text text-nearblack font-bold uppercase tracking-wider text-[11px] mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="caption-text bg-stone rounded-full px-3 py-1 font-semibold text-teal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="rounded-2xl border border-stone bg-offwhite p-6">
                <h3 className="h3-card text-nearblack font-semibold text-base mb-2">
                  Build something similar?
                </h3>
                <p className="body-text text-gray text-xs mb-6 leading-relaxed">
                  Book a free consultation and we'll map your requirements, technical choices, and provide a clear timeline scope.
                </p>
                <Button
                  id="case-study-sidebar-cta"
                  variant="primary"
                  href="/contact"
                  fullWidth
                >
                  Book Consultation
                </Button>
              </div>

              {/* Related Service links */}
              <div className="rounded-2xl border border-stone bg-offwhite p-6">
                <h3 className="caption-text text-nearblack font-bold uppercase tracking-wider text-[11px] mb-3">
                  Related Service
                </h3>
                <Link
                  href={`/services/${study.relatedService}`}
                  className="flex items-center justify-between text-sm font-semibold text-teal hover:underline underline-offset-4"
                >
                  <span>Explore related service</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Other studies list */}
          {otherStudies.length > 0 && (
            <div className="mt-16 border-t border-stone pt-12">
              <h2 className="h3-card font-semibold text-nearblack text-xl mb-8">
                More Case Studies
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {otherStudies.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/case-studies/${other.slug}`}
                    className="group overflow-hidden rounded-2xl border border-stone bg-offwhite transition-all duration-300 hover:border-teal hover:-translate-y-1.5"
                  >
                    <div className="relative h-[140px] overflow-hidden bg-stone">
                      <Image
                        src={other.heroImage}
                        alt={other.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="caption-text text-teal font-bold text-[9px] uppercase tracking-wider mb-1">
                        {other.industry}
                      </p>
                      <h3 className="h3-card text-nearblack font-semibold text-sm">
                        {other.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
