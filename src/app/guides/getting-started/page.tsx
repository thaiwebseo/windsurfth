import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/guides/getting-started", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

const steps = [
  {
    title: "เริ่มจากเข้าใจว่า Windsurf เหมาะกับ use case ของคุณไหม",
    description:
      "ก่อนติดตั้งหรือสมัครแพ็กเกจ ควรเข้าใจว่า Windsurf เหมาะกับงานแบบไหน เช่น งานที่ต้องใช้ context หลายไฟล์ งาน debug, review หรือ workflow ที่ต้องการให้ AI ช่วยเดินต่อมากกว่า autocomplete",
  },
  {
    title: "เลือกระหว่าง Free, Pro, Max หรือ Teams ให้ตรงการใช้งาน",
    description:
      "ถ้ายังสำรวจอยู่เริ่มจาก Free ได้ แต่ถ้าใช้ AI ทุกวันและต้องการโมเดลพรีเมียมกับ workflow ที่ต่อเนื่องขึ้น Pro มักเป็นจุดเริ่มต้นที่คุ้มกว่า",
  },
  {
    title: "ตั้ง workflow แรกให้ชัด เช่น review, debug หรือ setup project",
    description:
      "ยิ่งคุณเริ่มจาก use case ที่เฉพาะ Windsurf จะยิ่งเรียนรู้บริบทของงานได้เร็วขึ้น และคุณจะเห็นประโยชน์ของ AI IDE ชัดกว่าการลองแบบกระจัดกระจาย",
  },
]

const faqItems = [
  {
    question: "ควรเริ่มจากแพ็กเกจ Free หรือ Pro",
    answer:
      "ถ้าคุณยังอยากทดลองประสบการณ์ใช้งาน Free ก็เพียงพอสำหรับเริ่มต้น แต่ถ้าคุณใช้ AI กับงานจริงทุกวันและต้องการ workflow ที่ต่อเนื่องขึ้น Pro มักให้ภาพของศักยภาพจริงของ Windsurf ได้ชัดกว่า",
  },
  {
    question: "บทความไหนควรอ่านหลังจากหน้านี้",
    answer:
      "โดยทั่วไปควรอ่านต่อหน้า Pricing, บทความ Best Practice, คู่มือเชื่อม GitHub และบทความเปรียบเทียบเครื่องมือ หากคุณกำลังเลือกระหว่าง Windsurf กับคู่แข่ง",
  },
  {
    question: "เริ่มต้นใช้ Windsurf ให้คุ้มที่สุดต้องทำอะไร",
    answer:
      "เริ่มจากโจทย์จริงของคุณ เช่น review PR, debug บั๊ก หรือ refactor งานหลายไฟล์ แล้วค่อยปรับวิธีสั่งงาน การใส่ context และการเลือกโมเดลให้เหมาะกับรูปแบบงานนั้น",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "เริ่มต้นใช้ Windsurf | คู่มือสำหรับมือใหม่และทีมไทย",
  description:
    "คู่มือเริ่มต้นใช้ Windsurf สำหรับผู้ใช้ไทย ครอบคลุมการเลือกแพ็กเกจ การเริ่ม workflow แรก และหน้าที่ควรอ่านต่อเพื่อใช้งานให้คุ้มที่สุด",
  keywords: ["เริ่มต้นใช้ Windsurf", "วิธีใช้ Windsurf", "Windsurf มือใหม่", "เริ่มใช้ AI IDE"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "คู่มือเริ่มต้นใช้ Windsurf",
        },
      ],
    },
    twitter: {
      images: [ogImage],
    },
  },
})

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
      name: "เริ่มต้นใช้ Windsurf",
      item: canonical,
    },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${canonical}#howto`,
  name: "เริ่มต้นใช้ Windsurf | คู่มือสำหรับมือใหม่และทีมไทย",
  url: canonical,
  description: "คู่มือเริ่มต้นใช้ Windsurf สำหรับผู้ใช้ไทย ตั้งแต่การเลือก use case แรกจนถึงหน้าที่ควรอ่านต่อ",
  inLanguage: "th-TH",
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function GettingStartedPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-orange-50 via-white to-white py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Getting started</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">เริ่มต้นใช้ Windsurf ยังไงให้เห็นผลเร็วและคุ้มที่สุด</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            หน้านี้สรุปวิธีเริ่มใช้ Windsurf สำหรับมือใหม่และทีมไทย ตั้งแต่การเลือกแพ็กเกจ ไปจนถึงการเลือก workflow แรกที่เหมาะกับงานจริงของคุณ
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-6">
          {steps.map((step, index) => (
            <section key={step.title} className="rounded-[28px] border border-gray-100 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Step {index + 1}</p>
              <h2 className="mt-3 text-3xl font-semibold text-gray-900">{step.title}</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{step.description}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Recommended reading</p>
            <h2 className="text-3xl font-bold text-gray-900">หน้าที่ควรอ่านต่อหลังจากเริ่มต้น</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/what-is-windsurf" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">Windsurf คืออะไร</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">เหมาะสำหรับการกลับไปทบทวนภาพรวมของเครื่องมือและแนวคิดของ AI IDE</p>
            </Link>
            <Link href="/pricing" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">ราคาและแพ็กเกจ</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">ดูว่า Free, Pro, Max หรือ Teams ตรงกับรูปแบบการใช้งานของคุณมากที่สุด</p>
            </Link>
            <Link href="/blog/best-practice-windsurf" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">Best Practice การใช้ Windsurf</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">ช่วยต่อยอดจากการเริ่มต้นไปสู่การใช้งานที่แม่นขึ้นและลดการอธิบายซ้ำ</p>
            </Link>
            <Link href="/blog/windsurf-github-guide" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">เชื่อม Windsurf กับ GitHub</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">เหมาะสำหรับคนที่อยากเริ่มใช้ Windsurf กับโปรเจกต์จริงและ workflow ของทีมทันที</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900">คำถามที่พบบ่อยเมื่อเริ่มใช้ Windsurf</h2>
          </div>
          {faqItems.map((item, index) => (
            <section key={item.question} className="rounded-[28px] border border-gray-100 p-6 md:p-8 shadow-soft">
              <p className="text-sm font-semibold text-orange-500">คำถาม {index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold text-gray-900">{item.question}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
            </section>
          ))}
        </div>
      </section>

      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  )
}
