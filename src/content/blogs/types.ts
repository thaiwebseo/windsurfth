export interface BlogSectionImage {
  src: string
  alt: string
}

export interface BlogSectionVideo {
  src: string
  title: string
}

export interface BlogSectionTable {
  headers: string[]
  rows: string[][]
  note?: string
}

export interface BlogSection {
  heading: string
  body: string
  bullets?: string[]
  image?: BlogSectionImage
  video?: BlogSectionVideo
  table?: BlogSectionTable
}

export interface BlogFaqItem {
  question: string
  answer: string
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
  keywords: string[]
  heroHighlight: string
  publishedAt: string
  updatedAt?: string
  sections: BlogSection[]
  cta?: {
    title: string
    description: string
  }
  faq?: BlogFaqItem[]
}
