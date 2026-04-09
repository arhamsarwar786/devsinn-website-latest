import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import Hero from "@/components/about/Hero";
import VisionMission from "@/components/about/VisionMission";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhoWeAre from "@/components/WhoWeAre";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Devsinn Technologies and how we help teams grow digitally.",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <VisionMission />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
