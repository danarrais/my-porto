import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/project", "/about"];

  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...projects.map(({ slug }) => ({ url: `${SITE_URL}/project/${slug}` })),
  ];
}
