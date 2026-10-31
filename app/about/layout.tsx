import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Danar Rais Alhakim",
  description: "Background, education, and certifications of Danar Rais Alhakim.",
  openGraph: {
    title: "About — Danar Rais Alhakim",
    description: "Background, education, and certifications of Danar Rais Alhakim.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
