import type { MetadataRoute } from "next"

import { blogPosts } from "@/content/blogs"
import { siteUrl } from "@/lib/site-config"

const staticRouteLastModified = new Date("2026-03-09T04:41:00+07:00")

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/about", "/contact", "/faq", "/features", "/pricing", "/blog", "/terms", "/privacy"].map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    lastModified: staticRouteLastModified,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(post.publishedAt),
  }))

  return [...staticRoutes, ...blogRoutes]
}
