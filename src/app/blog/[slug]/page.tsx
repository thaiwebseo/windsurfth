import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Share2 } from "lucide-react"
import { blogPosts } from "@/content/blogs"
import { CTAButton } from "@/components/CTAButton"
import { buildBlogMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params
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
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
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
  }

  return (
    <main className="bg-white py-20">
      <article className="max-w-4xl mx-auto px-4 space-y-12">
        <header className="space-y-4 text-center">
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
        </header>

        <div className="relative w-full h-96 rounded-[32px] overflow-hidden shadow-2xl shadow-orange-100">
          <Image
            src={post.coverImage}
            alt={`${post.title} - ภาพประกอบบทความ Windsurf`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="space-y-10 text-gray-700">
          {post.sections.map((section) => (
            <div key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
              <p className="leading-relaxed text-gray-600">{section.body}</p>
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

        <section className="flex flex-col items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 font-medium text-gray-900">
            <Share2 className="w-4 h-4" />
            แชร์บทความนี้
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {shareLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </article>
    </main>
  )
}
