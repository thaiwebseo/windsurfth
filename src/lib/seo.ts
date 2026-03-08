import type { Metadata } from "next"

import { siteUrl } from "@/lib/site-config"

export const BASE_KEYWORDS = [
  "windsurf ide",
  "windsurf ai",
  "ai coding assistant",
  "เครื่องมือเขียนโค้ด",
  "ide ภาษาไทย",
  "windsurf 250 เครดิต",
  "สมัคร windsurf pro",
]

interface MetadataOptions {
  title: string
  description: string
  keywords?: string[]
  metadata?: Partial<Metadata>
}

export function buildPageMetadata({ title, description, keywords = [], metadata = {} }: MetadataOptions): Metadata {
  const existingAlternates = metadata.alternates ?? {}
  const canonical = typeof existingAlternates.canonical === "string"
    ? existingAlternates.canonical
    : existingAlternates.canonical?.toString() ?? siteUrl

  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    ...metadata,
    alternates: {
      ...existingAlternates,
      languages: {
        "th-TH": canonical,
        ...(existingAlternates.languages ?? {}),
      },
    },
  }
}

export function buildBlogMetadata({
  title,
  description,
  tags = [],
  metadata = {},
}: {
  title: string
  description: string
  tags?: string[]
  metadata?: Partial<Metadata>
}): Metadata {
  const blogKeywords = ["บทความ windsurf", "คู่มือ windsurf", "ai ide blog", ...tags]
  return buildPageMetadata({ title, description, keywords: blogKeywords, metadata })
}
