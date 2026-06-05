import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import servicesData from "@/data/services.json";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

const SLUGS = [
  "ai-automation",
  "saas-mvp",
  "web-app-development",
  "flutter-mobile-apps",
  "backend-api-cloud",
  "app-rescue-maintenance",
  "dedicated-teams",
];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = (servicesData as typeof servicesData).find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.label} — Dev'sinn Technologies`,
    description: service.heroDescription,
    alternates: {
      canonical: `https://devsinntechnologies.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = (servicesData as typeof servicesData).find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = (servicesData as typeof servicesData).filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <main className="min-h-screen bg-offwhite text-nearblack pt-28 pb-16">
        
        {/* Service Hero section */}
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-10 xl:px-16">
          <div className="relative z-10 mx-auto w-full max-w-[1400px]">
            {/* Eyebrow Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone bg-offwhite px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-[12px] font-semibold uppercase tracking-wider text-nearblack">
                {service.heroEyebrow}
              </span>
            </div>

            {/* H1 display */}
            <h1 className="h1-hero text-left mb-6 max-w-[800px] leading-tight tracking-tight">
              {service.heroTitle}
            </h1>

            {/* Supporting Description */}
            <p className="body-text text-gray text-base max-w-[620px] mb-8 leading-relaxed">
              {service.heroDescription}
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                id="service-cta-consultation"
                variant="primary"
                href="/contact"
              >
                Book a Free Consultation
              </Button>
              <Button
                id="service-cta-audit"
                variant="outline"
                href="/contact?type=product-audit"
              >
                Request Product Audit
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Info Grid */}
        <section className="px-5 py-6 sm:px-8 lg:px-10 xl:px-16">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
              
              {/* Left Column: Details, Highlights, Technologies */}
              <div>
                {/* Description */}
                <div className="mb-12">
                  <h2 className="h3-card font-semibold text-nearblack mb-4">
                    {service.mainTitle}
                  </h2>
                  <p className="body-text text-gray text-base leading-relaxed">
                    {service.mainDescription}
                  </p>
                </div>

                {/* Service highlights */}
                <div className="mb-12">
                  <h2 className="h3-card font-semibold text-nearblack mb-6">
                    {service.highlightTitle}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight.title}
                        className="rounded-2xl border border-stone bg-offwhite p-6 transition-colors duration-300 hover:border-teal"
                      >
                        {/* Teal accent indicator mark */}
                        <div className="mb-4 h-1.5 w-10 rounded-full bg-teal" />
                        <h3 className="h3-card text-nearblack font-semibold text-base mb-2">
                          {highlight.title}
                        </h3>
                        <p className="body-text text-gray text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="mb-12">
                  <h2 className="h3-card font-semibold text-nearblack mb-4">
                    Technologies We Use
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="caption-text bg-stone rounded-full px-3.5 py-1.5 font-semibold text-teal"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar: Get Started & Other Services */}
              <div className="space-y-6">
                
                {/* Contact helper block */}
                <div className="rounded-2xl border border-stone bg-offwhite p-6 sm:p-8">
                  <h3 className="h3-card text-nearblack font-semibold text-base mb-2">
                    Ready to build?
                  </h3>
                  <p className="body-text text-gray text-xs mb-6 leading-relaxed">
                    Book a free consultation to review your technical requirements and define your product spec sheet.
                  </p>
                  <Button
                    id="service-sidebar-consultation"
                    variant="primary"
                    href="/contact"
                    fullWidth
                    className="mb-4"
                  >
                    Book Consultation
                  </Button>
                  <a
                    href="https://api.whatsapp.com/send?phone=923365918295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-stone bg-offwhite text-sm font-semibold text-nearblack hover:border-teal transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-teal">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                {/* Other services selector */}
                <div className="rounded-2xl border border-stone bg-offwhite p-6">
                  <h3 className="caption-text text-nearblack font-bold uppercase tracking-wider text-[11px] mb-4">
                    Other Services
                  </h3>
                  <div className="flex flex-col gap-2">
                    {otherServices.map((other) => (
                      <Link
                        key={other.slug}
                        href={`/services/${other.slug}`}
                        className="rounded-xl border border-stone/50 bg-offwhite p-3.5 text-xs font-semibold text-gray hover:border-teal hover:text-nearblack transition-colors"
                      >
                        {other.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="caption-text text-gray hover:text-teal font-semibold text-center mt-2"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
