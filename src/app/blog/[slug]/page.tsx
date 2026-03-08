import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Share2 } from "lucide-react"
import { blogPosts } from "@/content/blogs"
import { BlogCard } from "@/components/BlogCard"
import { CTAButton } from "@/components/CTAButton"
import { TrackedAnchor } from "@/components/TrackedAnchor"
import { buildBlogMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

function createSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9ก-๙\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) {
    return buildBlogMetadata({
      title: "บทความ Windsurf",
      description: "รวบรวมบทความอัปเดตเกี่ยวกับ Windsurf IDE",
    })
  }

  const coverUrl = new URL(post.coverImage, siteUrl).toString()
  const canonical = new URL(`/blog/${post.slug}`, siteUrl).toString()

  return buildBlogMetadata({
    title: `${post.title} | Windsurf Blog`,
    description: post.excerpt,
    tags: post.tags,
    metadata: {
      alternates: {
        canonical,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        url: canonical,
        publishedTime: post.publishedAt,
        images: [
          {
            url: coverUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [coverUrl],
      },
    },
  })
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return notFound()
  }

  const canonicalUrl = new URL(`/blog/${post.slug}`, siteUrl).toString()
  const coverUrl = new URL(post.coverImage, siteUrl).toString()
  const encodedUrl = encodeURIComponent(canonicalUrl)
  const encodedText = encodeURIComponent(post.title)
  const updatedAt = post.publishedAt
  const tocItems = post.sections.map((section) => ({
    heading: section.heading,
    id: createSectionId(section.heading),
  }))
  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .map((item) => ({
      post: item,
      score: item.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }

      return a.post.publishedAt < b.post.publishedAt ? 1 : -1
    })
    .slice(0, 3)
    .map(({ post: relatedPost }) => relatedPost)
  const shareLinks = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Twitter/X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ]

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [coverUrl],
    url: canonicalUrl,
    datePublished: post.publishedAt,
    dateModified: updatedAt,
    inLanguage: "th-TH",
    keywords: post.tags.join(", "),
    articleSection: post.tags,
    wordCount: post.sections.reduce((count, section) => count + section.body.split(/\s+/).filter(Boolean).length, 0),
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Windsurf Thailand",
      logo: {
        "@type": "ImageObject",
        url: new URL("/images/icons/windsurf-black-wordmark.svg", siteUrl).toString(),
      },
    },
    mainEntityOfPage: canonicalUrl,
    breadcrumb: {
      "@id": `${canonicalUrl}#breadcrumb`,
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
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
        item: new URL("/blog", siteUrl).toString(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  }

  return (
    <main className="bg-white py-20">
      <article className="max-w-4xl mx-auto px-4 space-y-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">
                หน้าแรก
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-orange-500 transition-colors">
                บทความ
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-gray-700">{post.title}</li>
          </ol>
        </nav>

        <header className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Windsurf Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
          <p className="text-lg text-gray-600">{post.heroHighlight}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          <div className="mx-auto max-w-2xl rounded-3xl border border-orange-100 bg-orange-50/60 px-5 py-4 text-left">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">ผู้เขียน</p>
                <p className="text-sm text-gray-600">{post.author}</p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm font-semibold text-gray-900">อัปเดตล่าสุด</p>
                <time dateTime={updatedAt} className="text-sm text-gray-600">
                  {post.date}
                </time>
              </div>
            </div>
          </div>
        </header>

        <div className="relative w-full min-h-[220px] h-[34vw] max-h-[500px] rounded-[32px] overflow-hidden shadow-2xl shadow-orange-100">
          <Image
            src={post.coverImage}
            alt={`${post.title} - ภาพประกอบบทความ Windsurf`}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="lg:grid lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-8 lg:items-start">
          {tocItems.length > 2 ? (
            <aside className="mb-8 lg:mb-0 lg:self-start lg:sticky lg:top-28">
              <section className="rounded-[28px] border border-orange-100 bg-orange-50/50 p-5 lg:p-4 space-y-3">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-orange-500">สารบัญ</p>
                  <h2 className="text-xl lg:text-[1.35rem] font-semibold text-gray-900 leading-tight">Table of Contents</h2>
                </div>
                <ol className="space-y-2.5 text-sm lg:text-[0.95rem] text-gray-700 leading-snug">
                  {tocItems.map((item, index) => (
                    <li key={item.id}>
                      <TrackedAnchor href={`#${item.id}`} className="inline-flex gap-2.5 hover:text-orange-500 transition-colors" action="blog_toc_click" category="content" label={`${post.slug}_${item.id}`}>
                        <span className="min-w-4 font-semibold text-orange-500">{index + 1}.</span>
                        <span>{item.heading}</span>
                      </TrackedAnchor>
                    </li>
                  ))}
                </ol>
              </section>
            </aside>
          ) : (
            <div className="hidden lg:block" />
          )}

          <section className="space-y-10 text-gray-700 min-w-0">
            {post.sections.map((section) => (
              <div key={section.heading} id={createSectionId(section.heading)} className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
                <p className="leading-relaxed text-gray-600">{section.body}</p>
                {section.image && (
                  <div className="relative w-full h-[320px] rounded-[28px] overflow-hidden border border-orange-100 shadow-lg shadow-orange-100/40">
                    <Image src={section.image.src} alt={section.image.alt} fill className="object-cover" />
                  </div>
                )}
                {section.bullets && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        </div>

        {post.cta && (
          <div className="rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-400 text-white p-10 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">Ready to try?</p>
            <h3 className="text-3xl font-semibold">{post.cta.title}</h3>
            <p className="text-white/80">{post.cta.description}</p>
            <CTAButton source="blog-cta" className="mx-auto w-fit">
              สมัคร Pro รับเครดิต
            </CTAButton>
          </div>
        )}

        {post.faq && post.faq.length > 0 && (
          <section className="space-y-6 rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
            <div className="space-y-2 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500">FAQs</p>
              <h2 className="text-3xl font-bold text-gray-900">คำถามที่พบบ่อย</h2>
            </div>
            <div className="space-y-4">
              {post.faq.map((item) => (
                <div key={item.question} className="rounded-2xl border border-orange-100 bg-orange-50/40 px-5 py-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="flex flex-col items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 font-medium text-gray-900">
            <Share2 className="w-4 h-4" />
            แชร์บทความนี้
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {shareLinks.map((link) => (
              <TrackedAnchor
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-500 transition-colors"
                action="blog_share_click"
                category="content"
                label={`${post.slug}_${link.label}`}
              >
                {link.label}
              </TrackedAnchor>
            ))}
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="space-y-6 border-t border-gray-100 pt-10">
            <div className="space-y-2 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-500">บทความที่เกี่ยวข้อง</p>
              <h2 className="text-3xl font-bold text-gray-900">อ่านต่อให้ลึกขึ้น</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} {...relatedPost} trackingSource={`related_${post.slug}`} />
              ))}
            </div>
          </section>
        )}

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </article>
    </main>
  )
}
