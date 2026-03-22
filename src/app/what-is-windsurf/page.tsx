import type { Metadata } from "next"
import Link from "next/link"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/what-is-windsurf", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

const faqItems = [
  {
    question: "Windsurf คืออะไร",
    answer:
      "Windsurf คือ AI IDE ที่ออกแบบมาให้ AI เป็นส่วนหนึ่งของ workflow การพัฒนา ไม่ใช่แค่ตัวช่วยเติมโค้ด แต่ช่วยอ่าน codebase, วางแผน, refactor, debug และสรุปงานได้ต่อเนื่องในเครื่องมือเดียว",
  },
  {
    question: "Windsurf ต่างจาก Cursor หรือ GitHub Copilot อย่างไร",
    answer:
      "จุดต่างหลักคือ Windsurf เน้น workflow-first และ context-aware มากกว่า autocomplete-first ทำให้เหมาะกับงานหลายไฟล์ งานที่ต้องอาศัยบริบทกว้าง และ use case ระดับทีมมากขึ้น",
  },
  {
    question: "Windsurf เหมาะกับใคร",
    answer:
      "เหมาะกับนักพัฒนาที่ใช้ AI กับงานจริงทุกวัน ทีมที่ต้องการให้ AI ช่วยอ่านโค้ดทั้งระบบ และองค์กรที่ต้องการยกระดับการใช้ AI จากงานเฉพาะจุดไปสู่ workflow แบบต่อเนื่อง",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf คืออะไร | คู่มือภาพรวมสำหรับผู้ใช้ไทย",
  description:
    "ทำความเข้าใจว่า Windsurf คืออะไร ต่างจาก AI coding tools แบบเดิมอย่างไร และเหมาะกับทีมแบบไหนก่อนเริ่มใช้งานจริง",
  keywords: ["Windsurf คืออะไร", "Windsurf ดีไหม", "AI IDE คืออะไร", "Windsurf ต่างจาก Cursor ยังไง"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Windsurf คืออะไร สำหรับผู้ใช้ไทย",
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
      name: "Windsurf คืออะไร",
      item: canonical,
    },
  ],
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${canonical}#webpage`,
  name: "Windsurf คืออะไร | คู่มือภาพรวมสำหรับผู้ใช้ไทย",
  url: canonical,
  description: "หน้าอธิบายภาพรวม Windsurf สำหรับผู้ใช้ไทย ครอบคลุมแนวคิดของ AI IDE, use case, และหน้าที่ควรอ่านต่อ",
  inLanguage: "th-TH",
  breadcrumb: {
    "@id": `${canonical}#breadcrumb`,
  },
  about: {
    "@type": "SoftwareApplication",
    name: "Windsurf IDE",
    applicationCategory: "DeveloperApplication",
  },
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

export default function WhatIsWindsurfPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-orange-50 via-white to-white py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Pillar page</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Windsurf คืออะไร และทำไมหลายทีมเริ่มมองหา AI IDE แบบ workflow-first</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            หน้านี้สรุปภาพรวมของ Windsurf สำหรับคนที่อยากเข้าใจว่ามันคืออะไร ต่างจาก AI coding assistant แบบเดิมอย่างไร และควรอ่านหน้าไหนต่อก่อนเริ่มใช้งานจริง
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-soft space-y-5">
            <h2 className="text-3xl font-semibold text-gray-900">ภาพรวมแบบสั้น</h2>
            <p className="text-gray-600 leading-relaxed">
              ถ้าอธิบายแบบง่ายที่สุด Windsurf คือ IDE ที่พยายามทำให้ AI เข้าใจงานของคุณในระดับ workflow มากขึ้น ไม่ใช่เพียงช่วยเขียน snippet หรือแนะนำบรรทัดถัดไป แต่ช่วยทำงานต่อเนื่องตั้งแต่ทำความเข้าใจโปรเจกต์ วางแผน แก้หลายไฟล์ ตรวจ reasoning และสื่อสารผลลัพธ์กลับมาในบริบทเดียวกัน
            </p>
            <p className="text-gray-600 leading-relaxed">
              นี่คือเหตุผลที่คนมักค้นหาคำว่า Windsurf คืออะไร, Windsurf ดีไหม, หรือ Windsurf ต่างจาก Cursor ยังไง เพราะคำตอบจริงไม่ได้อยู่ที่ฟีเจอร์เพียงจุดเดียว แต่อยู่ที่แนวคิดของเครื่องมือว่าถูกออกแบบมาเพื่อทำงานกับ AI แบบต่อเนื่องแค่ไหน
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-gray-100 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-gray-900">เหมาะกับใคร</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">เหมาะกับคนที่ใช้ AI ทุกวันกับงาน coding, debugging, review, refactor และงานที่ต้องอาศัย context จากหลายไฟล์หรือหลายระบบพร้อมกัน</p>
            </div>
            <div className="rounded-[28px] border border-gray-100 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-gray-900">จุดต่างสำคัญ</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">Windsurf เด่นเมื่อโจทย์เริ่มเกินกว่า autocomplete เช่น ต้องอ่าน codebase, วางแผนงาน, เดิน flow หลายขั้นตอน และเชื่อมการทำงานของทีมเข้าด้วยกัน</p>
            </div>
            <div className="rounded-[28px] border border-gray-100 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-gray-900">ควรอ่านต่ออะไร</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">ถ้าคุณกำลังประเมินว่าจะเริ่มยังไงต่อ ให้ไปอ่านหน้าคู่มือเริ่มต้น ราคา และบทความเปรียบเทียบเครื่องมือเพื่อดูว่าเหมาะกับ use case ของคุณหรือไม่</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Read next</p>
            <h2 className="text-3xl font-bold text-gray-900">หน้าที่ควรอ่านต่อเพื่อเข้าใจ Windsurf ให้ครบขึ้น</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/guides/getting-started" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">เริ่มต้นใช้ Windsurf</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">สำหรับผู้ที่อยากเริ่มใช้งานให้เป็นเร็ว ตั้งแต่ setup ไปจนถึง workflow แรก</p>
            </Link>
            <Link href="/pricing" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">ราคาและแพ็กเกจ</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">ดูความต่างของ Free, Pro, Max และ Teams พร้อมคำอธิบายเรื่อง quota</p>
            </Link>
            <Link href="/blog/windsurf-vs-cursor" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">Windsurf vs Cursor</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">เหมาะสำหรับคนที่กำลังเปรียบเทียบ workflow และการใช้งานจริงของทั้งสองเครื่องมือ</p>
            </Link>
            <Link href="/blog/best-practice-windsurf" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
              <h3 className="text-2xl font-semibold text-gray-900">Best Practice</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">เมื่อเข้าใจภาพรวมแล้ว หน้านี้จะช่วยให้คุณใช้ Windsurf ได้ตรงใจและมีประสิทธิภาพขึ้น</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-5">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900">คำถามที่คนมักถามเมื่อเริ่มรู้จัก Windsurf</h2>
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
