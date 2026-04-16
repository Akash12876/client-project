import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paras-pearl.vercel.app";

  const routes = [
    "",
    "/about-us",
    "/services/creative-strategy",
    "/services/performance-marketing",
    "/services/social-media-marketing",
    "/services/video-editing",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
