import { Metadata } from "next"
import { CTAButton } from "@/components/CTAButton"
import { TrackedLink } from "@/components/TrackedLink"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/about", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

export const metadata: Metadata = buildPageMetadata({
  title: "About Windsurf Thailand | รู้จักเว็บและแนวทางของเรา",
  description:
    "ทำความรู้จัก Windsurf Thailand แหล่งข้อมูลภาษาไทยสำหรับผู้ที่ต้องการใช้ Windsurf IDE ให้คุ้มทั้งด้าน workflow, AI coding และการทำงานแบบทีม",
  keywords: ["about windsurf thailand", "windsurf thailand คืออะไร", "ai ide ภาษาไทย"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "About Windsurf Thailand",
        },
      ],
    },
    twitter: {
      images: [ogImage],
    },
  },
})

const pillars = [
  {
    title: "อธิบายให้เข้าใจง่าย",
    description:
      "เราแปลเรื่อง AI IDE, agent workflow และ model updates ให้เป็นภาษาไทยที่อ่านง่ายและนำไปใช้ต่อได้จริง ไม่ใช่แค่ข่าวสั้น ๆ",
  },
  {
    title: "เชื่อมกับงานจริงของทีมไทย",
    description:
      "เนื้อหาถูกออกแบบให้ตอบโจทย์นักพัฒนา product team และเจ้าของธุรกิจไทยที่ต้องการใช้ AI ให้เกิดผลลัพธ์จริงในงานประจำวัน",
  },
  {
    title: "เน้นผลลัพธ์มากกว่าคำโฆษณา",
    description:
      "เราพยายามเปรียบเทียบ use case, workflow, ราคา และข้อควรระวังอย่างตรงไปตรงมา เพื่อให้คุณตัดสินใจได้ง่ายขึ้น",
  },
]

const audience = [
  "นักพัฒนาที่ต้องการใช้ AI ช่วยเขียนโค้ด รีวิวโค้ด และแก้บั๊กเร็วขึ้น",
  "ทีม product หรือ operations ที่ต้องการใช้ AI ช่วยอ่านเอกสาร สรุป requirement และเร่ง workflow",
  "องค์กรที่กำลังมองหา AI IDE ที่ต่อยอดไปสู่การทำงานแบบทีมและ automation ได้",
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
      name: "About Windsurf Thailand",
      item: canonical,
    },
  ],
}

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Windsurf Thailand | รู้จักเว็บและแนวทางของเรา",
  url: canonical,
  description: "หน้าที่อธิบายแนวทาง เนื้อหา กลุ่มเป้าหมาย และภารกิจของเว็บไซต์ Windsurf Thailand",
  inLanguage: "th-TH",
  breadcrumb: {
    "@id": `${canonical}#breadcrumb`,
  },
  about: {
    "@type": "Organization",
    name: "Windsurf Thailand",
    url: siteUrl,
  },
  audience: audience.map((item) => ({
    "@type": "Audience",
    audienceType: item,
  })),
}

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-orange-50 via-white to-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">About Windsurf Thailand</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              พื้นที่ภาษาไทยสำหรับคนที่อยากใช้ Windsurf ให้เก่งขึ้นและคุ้มขึ้น
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Windsurf Thailand ถูกสร้างขึ้นเพื่อช่วยให้ผู้ใช้ในไทยเข้าใจ Windsurf IDE ได้เร็วขึ้น ทั้งในมุมของฟีเจอร์ ราคา การใช้งานจริง และแนวทางประยุกต์กับ workflow ของทีมพัฒนาและทีมงานสมัยใหม่
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton source="about-hero">สมัคร Pro รับเครดิต</CTAButton>
              <TrackedLink
                href="/blog"
                className="inline-flex items-center justify-center rounded-xl border border-orange-200 px-6 py-4 font-semibold text-orange-600 shadow-soft hover:-translate-y-0.5 transition-transform"
                action="about_click"
                category="engagement"
                label="about_blog"
              >
                อ่านบทความทั้งหมด
              </TrackedLink>
            </div>
          </div>

          <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-2xl shadow-orange-100/50 space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Our mission</p>
              <h2 className="mt-3 text-2xl font-semibold text-gray-900">ทำให้ AI IDE เข้าใจง่ายและใช้ได้จริงสำหรับผู้ใช้ไทย</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              เราเชื่อว่าเครื่องมืออย่าง Windsurf จะสร้างผลลัพธ์ได้ดีที่สุดเมื่อผู้ใช้เข้าใจทั้งความสามารถ ข้อจำกัด และวิธีวางมันลงใน flow งานจริง ไม่ว่าจะเป็นการเขียนโค้ด สรุปเอกสาร รีวิว pull request หรือวางระบบการทำงานร่วมกันในทีม
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-orange-50 px-4 py-5">
                <p className="text-3xl font-bold text-gray-900">Thai</p>
                <p className="mt-2 text-sm text-gray-600">อธิบายเป็นภาษาไทย อ่านแล้วลงมือทำต่อได้</p>
              </div>
              <div className="rounded-2xl bg-orange-50 px-4 py-5">
                <p className="text-3xl font-bold text-gray-900">AI</p>
                <p className="mt-2 text-sm text-gray-600">โฟกัส workflow ที่ใช้ AI ได้จริง ไม่ใช่แค่ feature list</p>
              </div>
              <div className="rounded-2xl bg-orange-50 px-4 py-5">
                <p className="text-3xl font-bold text-gray-900">Teams</p>
                <p className="mt-2 text-sm text-gray-600">เหมาะทั้งผู้ใช้เดี่ยว ทีม dev และองค์กรที่กำลัง scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">What we focus on</p>
            <h2 className="text-3xl font-bold text-gray-900">หลักคิดที่เราใช้ในการทำเนื้อหา</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-gray-100 p-8 shadow-soft">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#fff8ef] to-white">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div className="rounded-[32px] bg-[#0F1C3F] text-white p-8 space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Who this site helps</p>
            <h2 className="text-3xl font-bold leading-tight">เว็บนี้เหมาะกับใคร</h2>
            <ul className="space-y-4 text-white/80 leading-relaxed">
              {audience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-orange-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Why follow us</p>
            <h2 className="text-3xl font-bold text-gray-900">ถ้าคุณกำลังตัดสินใจเรื่อง Windsurf เราช่วยอะไรได้บ้าง</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                เราช่วยสรุปข้อมูลสำคัญของ Windsurf ทั้งด้านราคา ฟีเจอร์ แนวทางใช้งานจริง และบทความ how-to ที่ทำให้คุณเริ่มต้นได้เร็วขึ้น โดยไม่ต้องไล่อ่านข้อมูลจากหลายแหล่งด้วยตัวเอง
              </p>
              <p>
                นอกจากนี้ เรายังพยายามสร้างเส้นทางการอ่านที่ต่อเนื่อง เช่น จากบทความพื้นฐานไปสู่บทความเชิงเปรียบเทียบ หรือจากหน้า pricing ไปสู่บทความวิธีใช้งาน เพื่อให้คุณเห็นภาพครบก่อนตัดสินใจสมัครใช้งาน
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <TrackedLink href="/pricing" className="inline-flex items-center rounded-xl bg-gray-900 px-6 py-4 font-semibold text-white hover:bg-gray-800 transition-colors" action="about_click" category="engagement" label="about_pricing">
                ดูแพ็คเกจและราคา
              </TrackedLink>
              <TrackedLink href="/contact" className="inline-flex items-center rounded-xl border border-gray-200 px-6 py-4 font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-600 transition-colors" action="about_click" category="engagement" label="about_contact">
                ติดต่อเรา
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
    </main>
  )
}
