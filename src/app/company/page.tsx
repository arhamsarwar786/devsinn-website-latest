import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import { InfoPage } from "@/components/static/InfoPage";
import { companyPageContent } from "@/data/company-pages";

export const metadata: Metadata = {
  title: "Company",
  description: "Learn more about Devsinn Technologies, our mission, values, and expertise.",
};

export default function CompanyPage() {
  return (
    <>
      <InfoPage {...companyPageContent} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
