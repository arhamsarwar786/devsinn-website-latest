import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/services/ServiceDetail";
import services from "@/data/services.json";

type ServiceItem = (typeof services)[number];

function getServiceById(id: string): ServiceItem | undefined {
  return services.find((service) => service.id === id);
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.mainTitle,
    description: service.heroDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetail service={service} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
