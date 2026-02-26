export interface BlogSection {
  heading: string
  body: string
  bullets?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readingTime: string
  author: string
  tags: string[]
  heroHighlight: string
  publishedAt: string
  sections: BlogSection[]
  cta?: {
    title: string
    description: string
  }
}
