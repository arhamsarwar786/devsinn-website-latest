import type { Metadata } from "next";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import { InfoPage, infoPages } from "@/components/static/InfoPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Get support information and assistance details from Devsinn Technologies.",
};

export default function SupportPage() {
  return (
    <>
      <InfoPage {...infoPages.support} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
