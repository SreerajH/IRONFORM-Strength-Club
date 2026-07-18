import type { MetadataRoute } from "next";
import { gym } from "@/lib/gym";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${gym.url}/sitemap.xml`,
  };
}
