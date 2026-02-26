import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site-config"

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).toString()

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/features", "/pricing", "/blog", "/blog/"],
      disallow: ["/api/", "/dashboard", "/account", "/admin", "/settings", "/_next/", "/static/"],
    },
    sitemap: sitemapUrl,
    host: siteUrl,
  }
}
