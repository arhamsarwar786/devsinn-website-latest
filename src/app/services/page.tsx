import type { Metadata } from "next";
import ServicesPageClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services — AI Automation, SaaS MVP, Web Apps, Mobile & More",
  description:
    "Dev'sinn Technologies offers 7 focused B2B software engineering services: AI Automation, SaaS MVP Development, Custom Web Apps, Flutter Mobile, Backend & Cloud, App Rescue, and Dedicated Teams.",
  alternates: {
    canonical: "https://devsinntechnologies.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
