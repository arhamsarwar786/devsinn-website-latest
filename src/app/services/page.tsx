import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import Hero from "@/components/services/Hero";
import List from "@/components/services/List";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services offered by Devsinn Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <List />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
