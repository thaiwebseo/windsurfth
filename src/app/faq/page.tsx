import { Metadata } from "next"
import Link from "next/link"
import { CTAButton } from "@/components/CTAButton"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/faq", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

const faqItems = [
  {
    question: "Windsurf คืออะไร",
    answer:
      "Windsurf คือ AI IDE ที่ออกแบบให้ทำงานร่วมกับเอเจนต์ได้ลึกกว่าการเป็น autocomplete ทั่วไป โดยช่วยทั้งเขียนโค้ด วิเคราะห์ codebase สรุปงาน รีวิว PR และจัดการ workflow ได้ในที่เดียว",
  },
  {
    question: "Windsurf ต่างจาก Cursor หรือ GitHub Copilot อย่างไร",
    answer:
      "จุดต่างหลักคือ Windsurf วางตัวเป็น AI IDE แบบ agentic มากกว่าแค่ตัวช่วยเติมโค้ด โดยเน้นการเข้าใจบริบทของโปรเจกต์ การทำงานหลายขั้นตอน และการเชื่อม workflow ของทีมให้ต่อเนื่องขึ้น",
  },
  {
    question: "ควรเริ่มจากแพ็คเกจ Free หรือ Pro",
    answer:
      "ถ้าคุณต้องการทดลองอินเทอร์เฟซและการใช้งานพื้นฐาน แพ็คเกจ Free ก็เพียงพอสำหรับเริ่มต้น แต่ถ้าต้องการใช้ Fast Context, โมเดลพรีเมียม และ workflow ที่จริงจังขึ้น Pro จะคุ้มกว่าอย่างชัดเจน",
  },
  {
    question: "Windsurf เหมาะกับใครบ้าง",
    answer:
      "เหมาะกับนักพัฒนาเดี่ยว ทีม dev, product team, operations และองค์กรที่ต้องการใช้ AI ช่วยเร่งงานทั้งด้าน coding, documentation, debugging และการทำงานร่วมกันในทีม",
  },
  {
    question: "Windsurf ใช้กับ GitHub ได้ไหม",
    answer:
      "ได้ และเป็นหนึ่งใน use case สำคัญ เพราะคุณสามารถเชื่อม repository, ตรวจ diff, ทำ review และวาง flow การ commit หรือ pull request ให้ลื่นขึ้นได้จาก workflow เดียว",
  },
  {
    question: "มีบทความอะไรที่ควรอ่านก่อนเริ่มใช้งาน",
    answer:
      "แนะนำให้เริ่มจากหน้า Pricing, หน้า Features และบทความ how-to ใน Blog โดยเฉพาะบทความเชื่อม Windsurf กับ GitHub และบทความอัปเดตโมเดลล่าสุดเพื่อเห็นทั้งภาพรวมและวิธีใช้จริง",
  },
  {
    question: "Windsurf รองรับงานภาษาไทยได้ดีหรือไม่",
    answer:
      "สำหรับผู้ใช้ไทย จุดเด่นคือสามารถใช้ prompt, commit context และคำอธิบาย flow เป็นภาษาไทยได้ค่อนข้างสะดวก ทำให้ onboarding และการสื่อสารในทีมง่ายขึ้นมาก",
  },
  {
    question: "ถ้ายังไม่แน่ใจควรติดต่ออย่างไร",
    answer:
      "ถ้าคุณยังไม่แน่ใจเรื่องแพ็คเกจหรือแนวทางใช้งาน สามารถไปที่หน้า Contact เพื่อดูช่องทางติดต่อ หรืออ่านหน้า About เพื่อเข้าใจแนวทางของเว็บไซต์ก่อนตัดสินใจได้",
  },
]

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
      name: "Windsurf FAQ",
      item: canonical,
    },
  ],
}

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf FAQ | คำถามที่พบบ่อยก่อนเริ่มใช้งาน",
  description:
    "รวมคำถามที่พบบ่อยเกี่ยวกับ Windsurf IDE ทั้งเรื่องราคา ความแตกต่างจากคู่แข่ง การใช้งานกับ GitHub และแนวทางเริ่มต้นสำหรับผู้ใช้ไทย",
  keywords: ["windsurf faq", "คำถาม windsurf", "windsurf pro คุ้มไหม", "windsurf ใช้ยังไง"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Windsurf FAQ ภาษาไทย",
        },
      ],
    },
    twitter: {
      images: [ogImage],
    },
  },
})

export default function FAQPage() {
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

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Windsurf FAQ | คำถามที่พบบ่อยก่อนเริ่มใช้งาน",
    url: canonical,
    description: "หน้าคำถามที่พบบ่อยเกี่ยวกับ Windsurf สำหรับผู้ใช้ไทย ครอบคลุมราคา ฟีเจอร์ และการเริ่มต้นใช้งาน",
    inLanguage: "th-TH",
    breadcrumb: {
      "@id": `${canonical}#breadcrumb`,
    },
  }

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-orange-50 via-white to-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.02fr_0.98fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Windsurf FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              คำถามที่พบบ่อยก่อนเริ่มใช้ Windsurf สำหรับผู้ใช้ไทย
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              หน้านี้รวบรวมคำถามสำคัญที่คนมักสงสัยก่อนเริ่มใช้งาน Windsurf ไม่ว่าจะเป็นเรื่องความคุ้มค่า การเลือกแพ็คเกจ ความต่างจากคู่แข่ง และแนวทางนำไปใช้กับงานจริง
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton source="faq-hero">สมัคร Pro รับเครดิต</CTAButton>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-orange-200 px-6 py-4 font-semibold text-orange-600 shadow-soft hover:-translate-y-0.5 transition-transform"
              >
                ดูแพ็คเกจและราคา
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-2xl shadow-orange-100/50 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Quick answers</p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">เริ่มอ่านจากคำถามยอดนิยม</h2>
            </div>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li className="rounded-2xl bg-orange-50 px-5 py-4">Windsurf ต่างจาก Cursor หรือ GitHub Copilot อย่างไร</li>
              <li className="rounded-2xl bg-orange-50 px-5 py-4">แพ็คเกจ Pro คุ้มไหม และเหมาะกับใคร</li>
              <li className="rounded-2xl bg-orange-50 px-5 py-4">ใช้กับ GitHub และ workflow ของทีมได้ดีแค่ไหน</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Common questions</p>
            <h2 className="text-3xl font-bold text-gray-900">คำตอบที่ช่วยให้ตัดสินใจได้เร็วขึ้น</h2>
          </div>
          <div className="space-y-5">
            {faqItems.map((item, index) => (
              <section key={item.question} className="rounded-[28px] border border-gray-100 p-6 md:p-8 shadow-soft">
                <p className="text-sm font-semibold text-orange-500">คำถาม {index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">{item.answer}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link href="/pricing" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Pricing</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">ดูราคาและแพ็คเกจ</h3>
            <p className="mt-3 text-gray-600">เหมาะสำหรับคนที่กำลังตัดสินใจว่า Free, Pro หรือ Teams แบบไหนคุ้มกับงานของตัวเอง</p>
          </Link>
          <Link href="/features" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Features</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">ดูฟีเจอร์ที่ใช้งานจริง</h3>
            <p className="mt-3 text-gray-600">เหมาะสำหรับคนที่อยากเข้าใจว่า Windsurf ช่วยเร่ง workflow แบบไหนได้บ้าง</p>
          </Link>
          <Link href="/blog" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Blog</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">อ่านบทความและ how-to</h3>
            <p className="mt-3 text-gray-600">เหมาะสำหรับคนที่อยากต่อยอดจากภาพรวมไปสู่การใช้งานจริงแบบละเอียด</p>
          </Link>
          <Link href="/contact" className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Contact</p>
            <h3 className="mt-3 text-2xl font-semibold text-gray-900">ติดต่อเพื่อถามก่อนตัดสินใจ</h3>
            <p className="mt-3 text-gray-600">เหมาะสำหรับคนที่ยังมีคำถามเฉพาะเกี่ยวกับแพ็คเกจ workflow หรือแนวทางเริ่มต้น</p>
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
    </main>
  )
}
