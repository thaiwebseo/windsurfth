export interface BlogSectionImage {
  src: string
  alt: string
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
  sections: BlogSection[]
  cta?: {
    title: string
    description: string
  }
  faq?: BlogFaqItem[]
}
