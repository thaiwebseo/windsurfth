import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { blogPosts } from "@/content/blogs"
import { BlogCard } from "@/components/BlogCard"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/blog", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf Blog | อัปเดต AI IDE ภาษาไทย",
  description:
    "ติดตามข่าวสารและคู่มือการใช้ Windsurf IDE ภาษาไทย ทั้งอัปเดตโมเดลใหม่ เทคนิคการสั่งงานเอเจนต์ และเคสจากทีมไทย",
  keywords: ["windsurf blog", "ข่าว windsuf", "gemini 3.1 pro"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Windsurf Blog รวมบทความภาษาไทย",
        },
      ],
    },
    twitter: {
      images: [ogImage],
    },
  },
})

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  const [featured, ...rest] = posts
  const secondaryPosts = rest.length ? rest : posts

  return (
    <main className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {featured && (
          <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Latest update</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{featured.title}</h1>
              <p className="text-gray-600 text-lg">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readingTime}</span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:translate-x-1 transition"
              >
                อ่านบทความเต็ม
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="relative h-80 rounded-[32px] overflow-hidden shadow-2xl shadow-orange-100">
              <Image src={featured.coverImage} alt={featured.title} fill className="object-cover" priority />
            </div>
          </section>
        )}

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500">บทความล่าสุด</p>
              <h2 className="text-3xl font-bold text-gray-900">เก็บทุกอัปเดต AI IDE ภาษาไทย</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
