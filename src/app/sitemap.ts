import type { MetadataRoute } from "next"

import { blogPosts } from "@/content/blogs"
import { siteUrl } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/features", "/pricing", "/blog"].map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    lastModified: new Date(),
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(post.publishedAt),
  }))

  return [...staticRoutes, ...blogRoutes]
}
