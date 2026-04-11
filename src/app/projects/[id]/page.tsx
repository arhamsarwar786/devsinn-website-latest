import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DevsinnOffice from "@/components/DevsinnOffice";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { allProjects, getProjectBySlug } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    id: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.about,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetail project={project} />
      <DevsinnOffice />
      <Footer />
    </>
  );
}
