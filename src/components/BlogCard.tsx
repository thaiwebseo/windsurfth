import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readingTime: string
  tags: string[]
}

export function BlogCard({ slug, title, excerpt, coverImage, date, readingTime, tags }: BlogCardProps) {
  return (
    <article className="rounded-[32px] border border-gray-200 bg-white shadow-soft overflow-hidden flex flex-col">
      <Link href={`/blog/${slug}`} className="relative w-full h-64 block group">
        <Image src={coverImage} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" priority={false} />
      </Link>
      <div className="p-8 flex flex-col gap-4 flex-1">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <span>{date}</span>
          <span className="text-gray-300">•</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 leading-snug">{title}</h3>
        <p className="text-gray-600 flex-1">{excerpt}</p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.35em] text-orange-500">
          {tags.map((tag) => (
            <span key={tag} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full tracking-normal text-[11px]">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:translate-x-1 transition-transform"
        >
          อ่านบทความ
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}
