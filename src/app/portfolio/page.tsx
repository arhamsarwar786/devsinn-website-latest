import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import Hero from "@/components/portfolio/Hero";
import PortfolioList from "@/components/portfolio/PortfolioList";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the portfolio and recent work by Devsinn Technologies.",
};

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <PortfolioList />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
