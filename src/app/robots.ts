import { getSiteHost, getSiteOrigin } from "@/lib/origin";

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/console/", "/signin/", "/api/"],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: getSiteHost(),
  };
}
