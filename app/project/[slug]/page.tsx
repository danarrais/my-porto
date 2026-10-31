import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import ProjectDetail from "./project-detail";

type RouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — Danar Rais Alhakim`,
    description: project.shortDescription.EN,
    openGraph: {
      title: project.title,
      description: project.shortDescription.EN,
      images: [project.heroImage],
    },
  };
}

export default async function Page({ params }: RouteProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
