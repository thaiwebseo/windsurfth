import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site-config"

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).toString()

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/contact", "/faq", "/features", "/pricing", "/blog", "/blog/", "/what-is-windsurf", "/guides/getting-started", "/terms", "/privacy"],
      disallow: ["/api/", "/dashboard", "/account", "/admin", "/settings", "/_next/", "/static/"],
    },
    sitemap: sitemapUrl,
    host: siteUrl,
  }
}
