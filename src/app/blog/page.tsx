import Image from "next/image"
import type { Metadata } from "next"
import { blogPosts } from "@/content/blogs"
import { BlogCard } from "@/components/BlogCard"
import { TrackedLink } from "@/components/TrackedLink"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/blog", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

const topicClusters = [
  {
    title: "เริ่มต้นและวิธีใช้",
    description: "เหมาะสำหรับผู้ที่เพิ่งเริ่มใช้ Windsurf และต้องการคู่มือ how-to, workflow และการตั้งค่าให้ AI ทำงานตรงใจ",
    links: [
      { label: "Windsurf คืออะไร", href: "/what-is-windsurf" },
      { label: "เริ่มต้นใช้ Windsurf", href: "/guides/getting-started" },
      { label: "Best Practice การใช้ Windsurf", href: "/blog/best-practice-windsurf" },
      { label: "เชื่อม Windsurf กับ GitHub", href: "/blog/windsurf-github-guide" },
    ],
  },
  {
    title: "ราคาและความคุ้มค่า",
    description: "เหมาะสำหรับคนที่กำลังเทียบแพ็กเกจ Free, Pro, Max, Teams และต้องการเข้าใจ quota หรือ extra usage",
    links: [
      { label: "ดูราคา Windsurf", href: "/pricing" },
      { label: "แผนราคาแบบใหม่ของ Windsurf", href: "/blog/new-windsurf-pricing-plans" },
      { label: "Windsurf Pro คุ้มไหม", href: "/blog/is-windsurf-pro-worth-it" },
      { label: "Windsurf FAQ", href: "/faq" },
    ],
  },
  {
    title: "บทความเปรียบเทียบเครื่องมือ",
    description: "เหมาะสำหรับคนที่กำลังตัดสินใจระหว่าง Windsurf กับ Cursor, Copilot, VS Code, Claude Code หรือ Replit",
    links: [
      { label: "Windsurf vs Cursor", href: "/blog/windsurf-vs-cursor" },
      { label: "Windsurf vs GitHub Copilot", href: "/blog/windsurf-vs-github-copilot" },
      { label: "Windsurf vs VS Code", href: "/blog/windsurf-vs-vscode" },
      { label: "Windsurf vs Claude Code", href: "/blog/windsurf-vs-claude-code" },
    ],
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf Blog | อัปเดต AI IDE ภาษาไทย",
  description:
    "ติดตามข่าวสารและคู่มือการใช้ Windsurf IDE ภาษาไทย ทั้งอัปเดตโมเดลใหม่ เทคนิคการสั่งงานเอเจนต์ และเคสจากทีมไทย",
  keywords: ["windsurf blog", "บทความ windsurf", "คู่มือ windsurf", "เปรียบเทียบ windsurf", "ราคา windsurf"],
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

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${canonical}#collection`,
  name: "Windsurf Blog | อัปเดต AI IDE ภาษาไทย",
  url: canonical,
  description: "หน้ารวมบทความ Windsurf ภาษาไทย ครอบคลุมข่าวอัปเดต คู่มือ how-to และบทความเปรียบเทียบเครื่องมือ AI IDE",
  inLanguage: "th-TH",
  breadcrumb: {
    "@id": `${canonical}#breadcrumb`,
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${canonical}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "หน้าแรก",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "บทความ",
      item: canonical,
    },
  ],
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  const [featured, ...rest] = posts
  const secondaryPosts = rest.length ? rest : posts
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: new URL(`/blog/${post.slug}`, siteUrl).toString(),
      name: post.title,
    })),
  }

  return (
    <main className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {featured && (
          <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Latest update</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{featured.title}</h1>
              <p className="text-gray-600 text-lg">{featured.excerpt}</p>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                รวมบทความภาษาไทยสำหรับคนที่กำลังศึกษาว่า Windsurf คืออะไร ควรเริ่มใช้ยังไง ราคาแพ็กเกจแบบไหนคุ้ม และต่างจาก Cursor, Copilot หรือ VS Code อย่างไรในงานจริง
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{featured.date}</span>
                <span>•</span>
                <span>{featured.readingTime}</span>
              </div>
              <TrackedLink
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:translate-x-1 transition"
                action="blog_click"
                category="content"
                label={`featured_cta_${featured.slug}`}
              >
                อ่านบทความเต็ม
                <span aria-hidden>→</span>
              </TrackedLink>
            </div>
            <TrackedLink
              href={`/blog/${featured.slug}`}
              className="relative block h-80 rounded-[32px] overflow-hidden shadow-2xl shadow-orange-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
              ariaLabel={`อ่านบทความ ${featured.title}`}
              action="blog_click"
              category="content"
              label={`featured_image_${featured.slug}`}
            >
              <Image src={featured.coverImage} alt={featured.title} fill className="object-cover transition-transform duration-300 hover:scale-105" priority />
            </TrackedLink>
          </section>
        )}

        <section className="grid gap-6 lg:grid-cols-3">
          {topicClusters.map((cluster) => (
            <section key={cluster.title} className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft space-y-5">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Topic cluster</p>
                <h2 className="text-2xl font-semibold text-gray-900">{cluster.title}</h2>
                <p className="text-gray-600 leading-relaxed">{cluster.description}</p>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                {cluster.links.map((link) => (
                  <li key={link.href}>
                    <TrackedLink
                      href={link.href}
                      className="inline-flex items-center gap-2 font-medium text-orange-600 hover:text-orange-700"
                      action="blog_cluster_click"
                      category="content"
                      label={`cluster_${link.href}`}
                    >
                      {link.label}
                      <span aria-hidden>→</span>
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500">บทความล่าสุด</p>
              <h2 className="text-3xl font-bold text-gray-900">เก็บทุกอัปเดต AI IDE ภาษาไทย</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryPosts.map((post) => (
              <BlogCard key={post.slug} {...post} trackingSource="blog_listing" />
            ))}
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </main>
  )
}
