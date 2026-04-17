import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import { InfoPage, infoPages } from "@/components/static/InfoPage";

export const metadata: Metadata = {
  title: "Company",
  description: "Learn more about Devsinn Technologies, our mission, values, and expertise.",
};

export default function CompanyPage() {
  return (
    <>
      <InfoPage {...infoPages.company} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
