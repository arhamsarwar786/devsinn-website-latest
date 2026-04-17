import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import { InfoPage, infoPages } from "@/components/static/InfoPage";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "See why teams choose Devsinn Technologies for reliable digital product delivery.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <InfoPage {...infoPages.whyChooseUs} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
