import { Metadata } from "next"
import { CTAButton } from "@/components/CTAButton"
import { TrackedAnchor } from "@/components/TrackedAnchor"
import { TrackedLink } from "@/components/TrackedLink"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/contact", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Windsurf Thailand | ติดต่อเรา",
  description:
    "ติดต่อ Windsurf Thailand เพื่อสอบถามเรื่องการเริ่มต้นใช้งาน Windsurf, แพ็คเกจ Pro, workflow สำหรับทีม และคำแนะนำก่อนตัดสินใจ",
  keywords: ["contact windsurf thailand", "ติดต่อ windsurf", "windsurf pro ติดต่อ"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Contact Windsurf Thailand",
        },
      ],
    },
    twitter: {
      images: [ogImage],
    },
  },
})

const contactChannels = [
  {
    title: "สอบถามก่อนเริ่มใช้",
    description: "เหมาะสำหรับคนที่ต้องการเข้าใจภาพรวม Windsurf, ราคา และวิธีเริ่มต้นให้เหมาะกับงานของตัวเอง",
    actionLabel: "ดูแพ็คเกจ Windsurf",
    href: "/pricing",
  },
  {
    title: "อ่านคู่มือและบทความ",
    description: "ถ้าคุณอยากศึกษาด้วยตัวเองก่อน เรามีบทความภาษาไทยที่ครอบคลุมทั้งข่าวอัปเดตและการใช้งานจริง",
    actionLabel: "ไปที่บทความทั้งหมด",
    href: "/blog",
  },
  {
    title: "ต้องการคุยต่อโดยตรง",
    description: "หากคุณต้องการคำแนะนำเพิ่มเกี่ยวกับการใช้งานเป็นทีม การเชื่อม workflow หรือการเลือกแพ็คเกจ ติดต่อเราได้ผ่านอีเมลด้านล่าง",
    actionLabel: "ส่งอีเมลหาเรา",
    href: "mailto:hello@windsurfth.com",
  },
]

const commonQuestions = [
  "ควรเริ่มจากแพ็คเกจ Free หรือ Pro",
  "Windsurf ต่างจากเครื่องมือ AI coding อื่นอย่างไร",
  "ทีมขนาดเล็กควรเริ่มวาง workflow แบบไหนก่อน",
  "มีบทความหรือคู่มือไหนที่ควรอ่านก่อนตัดสินใจสมัคร",
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
      name: "Contact Windsurf Thailand",
      item: canonical,
    },
  ],
}

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Windsurf Thailand | ติดต่อเรา",
  url: canonical,
  description: "หน้าติดต่อสำหรับผู้ที่ต้องการสอบถามเรื่องแพ็กเกจ ฟีเจอร์ และแนวทางเริ่มต้นใช้งาน Windsurf",
  inLanguage: "th-TH",
  breadcrumb: {
    "@id": `${canonical}#breadcrumb`,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@windsurfth.com",
    contactType: "customer support",
    availableLanguage: ["th", "en"],
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-orange-50 via-white to-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.02fr_0.98fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Contact Windsurf Thailand</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              ติดต่อเราเพื่อเลือกแนวทางใช้ Windsurf ที่เหมาะกับงานของคุณ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              ถ้าคุณกำลังตัดสินใจเรื่องแพ็คเกจ ฟีเจอร์ หรืออยากเริ่มใช้ Windsurf ให้คุ้มตั้งแต่วันแรก หน้านี้คือจุดเริ่มต้นที่ดี เรารวมทั้งช่องทางติดต่อและลิงก์สำคัญที่ช่วยให้คุณไปต่อได้เร็วขึ้น
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton source="contact-hero">สมัคร Pro รับเครดิต</CTAButton>
              <TrackedAnchor
                href="mailto:hello@windsurfth.com"
                className="inline-flex items-center justify-center rounded-xl border border-orange-200 px-6 py-4 font-semibold text-orange-600 shadow-soft hover:-translate-y-0.5 transition-transform"
                action="contact_click"
                category="conversion"
                label="contact_hero_email"
              >
                hello@windsurfth.com
              </TrackedAnchor>
            </div>
          </div>

          <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-2xl shadow-orange-100/50 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Quick contact</p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">ช่องทางหลักที่แนะนำ</h2>
            </div>
            <div className="rounded-2xl bg-orange-50 px-5 py-5 space-y-2">
              <p className="text-sm text-gray-500">อีเมล</p>
              <TrackedAnchor href="mailto:hello@windsurfth.com" className="text-xl font-semibold text-gray-900 hover:text-orange-600 transition-colors" action="contact_click" category="conversion" label="contact_card_email">
                hello@windsurfth.com
              </TrackedAnchor>
              <p className="text-sm text-gray-600">เหมาะสำหรับการสอบถามข้อมูลก่อนเริ่มต้น การใช้งานเป็นทีม และคำถามเชิงธุรกิจ</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-100 px-5 py-5">
                <p className="text-sm text-gray-500">หน้าราคา</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">ดูแพ็คเกจให้ครบก่อนตัดสินใจ</p>
              </div>
              <div className="rounded-2xl border border-gray-100 px-5 py-5">
                <p className="text-sm text-gray-500">บทความแนะนำ</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">อ่าน how-to และอัปเดตล่าสุดเป็นภาษาไทย</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">How we can help</p>
            <h2 className="text-3xl font-bold text-gray-900">เลือกเส้นทางที่ตรงกับสิ่งที่คุณต้องการ</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-gray-100 p-8 shadow-soft flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-1">{item.description}</p>
                <TrackedLink href={item.href} className="inline-flex items-center font-semibold text-orange-600 hover:translate-x-1 transition-transform" action="contact_click" category="engagement" label={item.href}>
                  {item.actionLabel}
                  <span aria-hidden className="ml-2">→</span>
                </TrackedLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[0.96fr_1.04fr] items-start">
          <div className="rounded-[32px] bg-[#0F1C3F] text-white p-8 space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">ก่อนติดต่อ</p>
            <h2 className="text-3xl font-bold leading-tight">คำถามที่มักเจอก่อนเริ่มใช้งาน</h2>
            <ul className="space-y-4 text-white/80 leading-relaxed">
              {commonQuestions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-orange-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Best next steps</p>
            <h2 className="text-3xl font-bold text-gray-900">ถ้าคุณยังไม่แน่ใจ เริ่มจาก 3 หน้านี้ก่อน</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                สำหรับคนที่กำลังศึกษา Windsurf ครั้งแรก ผมแนะนำให้เริ่มจากหน้า Pricing เพื่อดูภาพรวมแพ็คเกจ ต่อด้วยหน้า Features เพื่อเข้าใจการใช้งานจริง และจบบทความใน Blog เพื่อเห็นตัวอย่างการประยุกต์ใช้งานในสถานการณ์จริง
              </p>
              <p>
                ถ้าหลังจากนั้นยังมีคำถามเพิ่มเติม การส่งอีเมลเข้ามาจะช่วยให้เราแนะนำเส้นทางที่เหมาะกับบริบทของคุณได้แม่นยำขึ้น
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <TrackedLink href="/features" className="inline-flex items-center rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white hover:bg-gray-800 transition-colors" action="contact_click" category="engagement" label="contact_features">
                ดูฟีเจอร์ทั้งหมด
              </TrackedLink>
              <TrackedLink href="/about" className="inline-flex items-center rounded-xl border border-gray-200 px-6 py-4 font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-600 transition-colors" action="contact_click" category="engagement" label="contact_about">
                รู้จักเราเพิ่มเติม
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
    </main>
  )
}
