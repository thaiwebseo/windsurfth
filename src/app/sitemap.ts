import type { MetadataRoute } from "next"

import { blogPosts } from "@/content/blogs"
import { siteUrl } from "@/lib/site-config"

const latestBlogTimestamp = blogPosts.reduce((latest, post) => {
  const timestamp = new Date(post.updatedAt ?? post.publishedAt).getTime()
  return timestamp > latest ? timestamp : latest
}, 0)

const staticRouteLastModified = new Date(latestBlogTimestamp || Date.now())

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/about", "/contact", "/faq", "/features", "/pricing", "/blog", "/what-is-windsurf", "/guides/getting-started", "/terms", "/privacy"].map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    lastModified: staticRouteLastModified,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }))

  return [...staticRoutes, ...blogRoutes]
}
