import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Danar Rais Alhakim",
  description: "Selected web development and UI/UX design projects by Danar Rais Alhakim.",
  openGraph: {
    title: "Projects — Danar Rais Alhakim",
    description: "Selected web development and UI/UX design projects by Danar Rais Alhakim.",
    url: "/project",
  },
};

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
