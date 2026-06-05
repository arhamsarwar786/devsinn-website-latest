import Hero from "@/components/Hero";
import HeroVideoSection from "@/components/HeroVideoSection";
import ProblemStatement from "@/components/ProblemStatement";
import OurServices from "@/components/OurServices";
import ProductizedOffers from "@/components/ProductizedOffers";
import CaseStudies from "@/components/CaseStudies";
import PortfolioList from "@/components/portfolio/PortfolioList";
import OurProcess from "@/components/OurProcess";
import EngagementModels from "@/components/EngagementModels";
import TechStack from "@/components/TechStack";
import WhyDevsinn from "@/components/WhyDevsinn";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev'sinn Technologies — AI-Powered Software Engineering for Startups & Businesses",
  description:
    "We build scalable web apps, mobile apps, SaaS platforms, AI agents, and automation systems that help businesses reduce manual work, improve operations, and launch faster.",
  openGraph: {
    title: "Dev'sinn Technologies — AI-Powered Software Engineering",
    description:
      "Build scalable web apps, mobile apps, SaaS MVPs, AI automation, and dedicated development teams for startups and growing businesses.",
    url: "https://devsinntechnologies.com",
    siteName: "Dev'sinn Technologies",
    type: "website",
  },
  alternates: {
    canonical: "https://devsinntechnologies.com",
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* Hero Video Section */}
      <HeroVideoSection />

      {/* 2. Problem Statement */}
      <ProblemStatement />

      {/* 3. Services */}
      <OurServices />

      {/* 4. Productized Offers */}
      <section id="packages">
        <ProductizedOffers />
      </section>

      {/* 5. Projects (Horizontal pinned slideshow) */}
      <CaseStudies />

      {/* Full Project Portfolio Grid */}
      <PortfolioList />

      {/* 6. Process */}
      <OurProcess />

      {/* 7. Engagement Models */}
      <EngagementModels />

      {/* 8. Tech Stack */}
      <TechStack />

      {/* 9. Why Dev'sinn */}
      <WhyDevsinn />

      {/* 10. Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </>
  );
}
