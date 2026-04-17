import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import { InfoPage, infoPages } from "@/components/static/InfoPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using the Devsinn Technologies website.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <InfoPage {...infoPages.terms} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
