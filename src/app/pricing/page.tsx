import { Metadata } from "next"
import Image from "next/image"
import { PricingCard } from "@/components/PricingCard"
import { CTAButton } from "@/components/CTAButton"
import { buildPageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site-config"

const canonical = new URL("/pricing", siteUrl).toString()
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString()

const pricingFaqs = [
  {
    question: "Windsurf Pro ราคาเท่าไร",
    answer: "แพ็กเกจ Pro ราคา 20 ดอลลาร์ต่อเดือน โดยจะได้โควต้าการใช้งานระดับ Standard ที่รีเซ็ตใหม่ทุกวันและทุกสัปดาห์ หากโควต้าหมดสามารถเติมเงิน (Extra usage) เพื่อใช้งานโมเดลพรีเมียมต่อได้",
  },
  {
    question: "แพ็กเกจ Max ต่างจาก Pro อย่างไร",
    answer: "แพ็กเกจ Max (200 ดอลลาร์ต่อเดือน) ออกแบบมาสำหรับผู้ที่ใช้งาน AI หนักเป็นพิเศษ โดยจะได้โควต้าระดับ Heavy ซึ่งสูงกว่า Pro มาก ทำให้ใช้งาน Cascade ได้ต่อเนื่องยาวนานขึ้น",
  },
  {
    question: "ถ้ายอดโควต้า (%) รายวันหรือรายสัปดาห์หมด จะเกิดอะไรขึ้น",
    answer: "หากคุณใช้แพ็กเกจ Free คุณจะถูกจำกัดให้ใช้ได้เฉพาะ Free models แต่สำหรับผู้ใช้แบบเสียเงิน คุณสามารถเติมเงินเป็น Extra usage balance เพื่อจ่ายค่าใช้จ่ายตามจริง (Pay-as-you-go) หากโควต้านี้หมด ระบบจะสลับไปใช้ Free models จนกว่าจะขึ้นรอบโควต้าใหม่",
  },
]

export const metadata: Metadata = buildPageMetadata({
  title: "แพ็กเกจ Windsurf | ราคา Free, Pro, Max และ Teams",
  description:
    "เปรียบเทียบแพ็กเกจ Windsurf IDE และโควต้าระบบใหม่ (Daily/Weekly) ทั้งแบบ Free, Pro, Max และ Teams ตอบโจทย์ทุกการใช้งาน",
  keywords: ["windsurf ราคา", "windsurf pro ราคา", "windsurf max", "สมัคร windsurf teams", "windsurf quota"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "ตารางราคา Windsurf Pro",
        },
      ],
    },
    twitter: {
      images: [ogImage],
    },
  },
})

const planData = [
  {
    title: "FREE",
    price: "$0",
    cadence: "เดือน",
    highlight: "ดาวน์โหลดและเริ่มใช้ได้ทันที",
    benefits: [
      "Light quota (รีเซ็ตทุกวัน/สัปดาห์)",
      "ไม่จำกัด Tab completions",
      "ใช้งาน Windsurf app previews",
      "ใช้งาน Fast Context ได้",
    ],
    ctaSource: "pricing-free",
    ctaLabel: "ดาวน์โหลด",
    cardVariant: "outline" as const,
    ctaVariant: "outline" as const,
  },
  {
    title: "PRO",
    price: "$20",
    cadence: "เดือน",
    highlight: "ใช้งาน AI ได้เต็มประสิทธิภาพ",
    benefits: [
      "Standard quota (รีเซ็ตทุกวัน/สัปดาห์)",
      "ใช้โมเดลพรีเมียมทั้งหมด + SWE-1.5",
      "รองรับการเติมเงิน (Extra usage)",
      "เต็มรูปแบบ Fast Context access",
    ],
    ctaSource: "pricing-pro",
    ctaLabel: "สมัคร Pro",
    popular: true,
  },
  {
    title: "MAX",
    price: "$200",
    cadence: "เดือน",
    highlight: "โควต้าสูงสุดสำหรับคนใช้งานหนัก",
    benefits: [
      "Heavy quota (โควต้าก้าวกระโดด)",
      "โมเดลพรีเมียมทั้งหมด + SWE-1.5",
      "รองรับการเติมเงิน (Extra usage)",
      "ฟีเจอร์ระดับ Pro ทั้งหมด",
    ],
    ctaSource: "pricing-max",
    ctaLabel: "สมัคร Max",
  },
  {
    title: "TEAMS",
    price: "$40",
    cadence: "ผู้ใช้/เดือน",
    highlight: "โฟกัสการทำงานเป็นทีม",
    benefits: [
      "Standard quota / ผู้ใช้",
      "Centralized billing + admin dashboard",
      "Priority support",
      "รองรับการเติมเงิน (Extra usage)",
    ],
    ctaSource: "pricing-teams",
    ctaLabel: "เลือกแพ็กเกจทีม",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      name: "ราคา Windsurf",
      item: canonical,
    },
  ],
}

const pricingPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "แพ็กเกจ Windsurf | ราคา Free, Pro, Max และ Teams",
  url: canonical,
  description: "หน้าเปรียบเทียบราคาแพ็กเกจ Windsurf และระบบโควต้าใหม่ (Daily/Weekly)",
  inLanguage: "th-TH",
  breadcrumb: {
    "@id": `${canonical}#breadcrumb`,
  },
}

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  url: canonical,
  priceCurrency: "USD",
  lowPrice: "0",
  highPrice: "200",
  offerCount: planData.length.toString(),
  offers: planData.map((plan) => ({
    "@type": "Offer",
    name: `Windsurf ${plan.title}`,
    priceCurrency: "USD",
    price: plan.price.replace("$", ""),
    category: "AI IDE Subscription",
    description: `${plan.highlight} ${plan.benefits.join(", ")}`,
    url: canonical,
  })),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const compareHeader = [
  { label: "Free", sub: "$0/เดือน" },
  { label: "Pro", sub: "$20/เดือน" },
  { label: "Max", sub: "$200/เดือน" },
  { label: "Teams", sub: "$40/ผู้ใช้/เดือน" },
  { label: "Enterprise", sub: "Let's talk" },
]

type CompareValue = string | boolean

interface CompareRow {
  feature: string
  values: CompareValue[]
}

interface CompareSection {
  title: string
  rows: CompareRow[]
}

const compareSections: CompareSection[] = [
  {
    title: "Cascade",
    rows: [
      {
        feature: "Usage allowance (Refreshes daily & weekly)",
        values: ["Light", "Standard", "Heavy", "Standard", "Let's talk"],
      },
      {
        feature: "Extra usage",
        values: [false, "At API price", "At API price", "At API price", "Let's talk"],
      },
    ],
  },
  {
    title: "Features",
    rows: [
      { feature: "Tab (Autocomplete)", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { feature: "Previews", values: [true, true, true, true, true] },
      { feature: "Deploys", values: [true, true, true, true, true] },
      { feature: "All premium models", values: [false, true, true, true, true] },
      { feature: "Fast Context", values: [true, true, true, true, true] },
      { feature: "SWE-1.5 model", values: [false, true, true, true, true] },
      { feature: "Centralized billing", values: [false, false, false, true, true] },
      { feature: "Admin dashboard with analytics", values: [false, false, false, true, true] },
      { feature: "Priority support", values: [false, false, false, true, true] },
      { feature: "Knowledge base", values: [false, false, false, true, true] },
      { feature: "SSO + Access control features", values: [false, false, false, false, true] },
      { feature: "RBAC", values: [false, false, false, false, true] },
      { feature: "Volume based discounts", values: [false, false, false, false, true] },
      { feature: "Hybrid deployment option", values: [false, false, false, false, true] },
      { feature: "Account management", values: [false, false, false, false, true] },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="bg-gradient-to-b from-[#fff6e9] via-white to-white min-h-screen py-28">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <section className="text-center space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Plans & Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            เลือกแพ็กเกจที่ตอบโจทย์ และรับโบนัส $10 เมื่ออัปเกรด
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Windsurf นำเสนอระบบโควต้าแบบใหม่ที่รีเซ็ตรายวันและรายสัปดาห์ พร้อมระบบเติมเงิน (Extra usage) เมื่อโควต้าหมด ครอบคลุมตั้งแต่ผู้เริ่มต้นจนถึงระดับทีม
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>✓ รองรับการชำระเงินแบบบัตร/อินวอยซ์</span>
            <span>✓ ค่าใช้จ่ายคงที่ รายเดือน</span>
          </div>
          <a href="#plans" className="inline-flex items-center justify-center text-sm font-semibold text-orange-600 underline">
            ดูรายละเอียดแต่ละแพ็คเกจ ➜
          </a>
        </section>

        <section id="plans" className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {planData.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              cadence={plan.cadence}
              highlight={plan.highlight}
              benefits={plan.benefits}
              ctaSource={plan.ctaSource}
              ctaLabel={plan.ctaLabel}
              popular={plan.popular}
              cardVariant={plan.cardVariant}
              ctaVariant={plan.ctaVariant}
            />
          ))}
        </section>

        <section className="bg-white rounded-[32px] border border-orange-100 shadow-xl shadow-orange-100/50 p-10 text-center space-y-5">
          <h2 className="text-3xl font-semibold text-gray-900">ชวนเพื่อนสมัคร รับโบนัส $10</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            แชร์ลิงก์ referral ของคุณให้เพื่อนอัปเกรดเป็นแพ็กเกจเสียเงิน (Pro, Max, Teams) เพื่อรับ Extra usage มูลค่า $10 ทันทีสำหรับทั้งสองคน
          </p>
          <CTAButton source="pricing-referral" className="justify-center" variant="outline">
            แชร์ลิงก์แนะนำของฉัน
          </CTAButton>
        </section>

        <section className="rounded-[32px] bg-[#0F1C3F] text-white py-12 px-6 text-center space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">Model Providers</p>
            <h3 className="text-2xl font-semibold mt-3">เชื่อมต่อกับผู้ให้บริการโมเดลระดับโลก</h3>
            <p className="text-white/70 mt-2">พร้อม Fast Context และการจัดการเครดิตในที่เดียว</p>
          </div>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            <Image
              src="/images/icons/provider-logos.svg"
              alt="AI providers"
              width={512}
              height={64}
              className="max-w-full h-auto"
            />
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Compare plans</p>
            <h2 className="text-3xl font-semibold text-gray-900">เลือกฟีเจอร์ที่รองรับงานของคุณ</h2>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-gray-500 font-semibold">Cascade</th>
                  {compareHeader.map((col) => (
                    <th key={col.label} className="p-4 text-center">
                      <p className="font-semibold text-gray-900">{col.label}</p>
                      <p className="text-xs text-gray-500">{col.sub}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareSections.map((section) => (
                  <>
                    <tr key={section.title} className="bg-gray-50/60">
                      <td className="p-4 font-semibold text-gray-700" colSpan={compareHeader.length + 1}>
                        {section.title}
                      </td>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-gray-100">
                        <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                        {row.values.map((value, idx) => (
                          <td key={`${row.feature}-${idx}`} className="p-4 text-center">
                            {typeof value === "boolean" ? (
                              value ? (
                                <span className="text-emerald-500 text-lg">●</span>
                              ) : (
                                <span className="text-orange-400 text-lg">✕</span>
                              )
                            ) : (
                              <span className="text-gray-600 text-sm">{value}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-[32px] border border-orange-100 bg-orange-50/40 p-8 md:p-10 space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Pricing FAQs</p>
            <h2 className="text-3xl font-semibold text-gray-900">คำถามที่พบบ่อยก่อนเลือกแพ็กเกจ</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingFaqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-orange-100 bg-white px-5 py-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...breadcrumbSchema, "@id": `${canonical}#breadcrumb` }) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingPageSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}
