import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/privacy",
  "/terms",
];

const serviceRoutes = [
  "/services/building-contracting",
  "/services/plaster-works",
  "/services/electrical-installation",
  "/services/floor-wall-tiling",
  "/services/painting",
  "/services/sanitary-plumbing",
  "/services/interior-decoration",
  "/services/false-ceilings-partitions",
  "/services/carpentry-wood-flooring",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    ...staticRoutes,
    ...serviceRoutes,
  ].flatMap((route) => [
    {
      url: `${siteConfig.siteUrl}/en${route === "" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    },
    {
      url: `${siteConfig.siteUrl}/ar${route === "" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    },
  ]);

  return entries;
}
