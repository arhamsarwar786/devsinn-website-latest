import type { Metadata } from "next";
import Hero from "@/components/services/Hero";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services offered by Devsinn Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero />
    </>
  );
}
