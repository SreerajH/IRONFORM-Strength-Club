import type { MetadataRoute } from "next";
import { gym } from "@/lib/gym";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: gym.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
