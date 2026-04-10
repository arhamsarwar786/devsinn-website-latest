import type { Metadata } from "next";
import ContactUs from "@/components/contact/ContactUs";
import Hero from "@/components/contact/Hero";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Devsinn Technologies to discuss your next digital product.",
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactUs />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
