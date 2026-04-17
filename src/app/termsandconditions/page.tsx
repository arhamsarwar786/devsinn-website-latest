import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import { InfoPage } from "@/components/static/InfoPage";
import { termsContent } from "@/data/company-pages";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using the Devsinn Technologies website.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <InfoPage {...termsContent} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
