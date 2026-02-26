import { Metadata } from "next"
import Image from "next/image"
import { PricingCard } from "@/components/PricingCard"
import { CTAButton } from "@/components/CTAButton"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "แพ็คเกจ Windsurf Pro | ราคาพร้อมทดลองฟรี",
  description:
    "เปรียบเทียบแพ็คเกจ Windsurf IDE ทั้ง Free, Pro และ Teams พร้อมทดลองฟรี 14 วันและรับ 250 เครดิตเพิ่มเมื่อสมัคร",
  keywords: ["windsurf ราคา", "windsurf pro ราคา", "สมัคร windsurf teams"],
})

const planData = [
  {
    title: "FREE",
    price: "$0",
    cadence: "เดือน",
    highlight: "ดาวน์โหลดและเริ่มใช้ได้ทันที",
    benefits: [
      "25 prompt credits/เดือน",
      "Fast Context trial access",
      "Unlimited Tab completions",
      "Windsurf app previews",
    ],
    ctaSource: "pricing-free",
    ctaLabel: "ดาวน์โหลด",
    cardVariant: "outline" as const,
    ctaVariant: "outline" as const,
  },
  {
    title: "PRO",
    price: "$15",
    cadence: "เดือน",
    highlight: "ทดลองฟรี 14 วัน พร้อม 100 เครดิต",
    benefits: [
      "เครดิต 500 prompt/เดือนหลังทดลอง",
      "ใช้โมเดลพรีเมียม + SWE-1.5",
      "Full Fast Context access",
      "Add-on เครดิต $10/250 เครดิต",
    ],
    ctaSource: "pricing-trial",
    ctaLabel: "เริ่มทดลองใช้งานฟรี",
    popular: true,
  },
  {
    title: "TEAMS",
    price: "$30",
    cadence: "ผู้ใช้/เดือน",
    highlight: "โฟกัสการทำงานเป็นทีม",
    benefits: [
      "500 prompt credits/ผู้ใช้/เดือน",
      "Centralized billing + admin dashboard",
      "Priority support และ automation",
      "SSO เพิ่มเติม +$10/ผู้ใช้/เดือน",
    ],
    ctaSource: "pricing-teams",
    ctaLabel: "เลือกแพ็คเกจทีม",
  },
]

const compareHeader = [
  { label: "Free", sub: "$0/เดือน" },
  { label: "Pro", sub: "$15/เดือน" },
  { label: "Teams", sub: "$30/ผู้ใช้/เดือน" },
  { label: "Enterprise (≤200)", sub: "Let's talk" },
  { label: "Enterprise (200+)", sub: "Let's talk" },
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
    title: "เครดิต & การใช้งาน",
    rows: [
      {
        feature: "Prompt credits",
        values: [
          "25 credits/เดือน",
          "500 credits/เดือน",
          "500 credits/ผู้ใช้/เดือน",
          "1,000 credits/ผู้ใช้/เดือน",
          "1,000+ credits/ผู้ใช้/เดือน",
        ],
      },
      {
        feature: "Add-on prompt credits",
        values: [false, "$10 ต่อ 250 เครดิต", "เพิ่มได้ตามต้องการ", "รวมในสัญญา", "รวมในสัญญา"],
      },
    ],
  },
  {
    title: "ฟีเจอร์หลัก",
    rows: [
      { feature: "Previews", values: [true, true, true, true, true] },
      { feature: "Deploys", values: [true, true, true, true, true] },
      { feature: "All premium models + SWE-1.5", values: [false, true, true, true, true] },
      { feature: "Fast Context", values: ["ทดลอง", "เต็มรูปแบบ", "เต็มรูปแบบ", "ขยายได้", "ขยายได้"] },
      { feature: "Centralized billing", values: [false, false, true, true, true] },
      { feature: "Admin dashboard + analytics", values: [false, false, true, true, true] },
      { feature: "Priority support", values: [false, false, true, true, true] },
      { feature: "Knowledge base", values: [false, false, true, true, true] },
      { feature: "SSO + Access control", values: [false, false, "+$10/ผู้ใช้/เดือน", "รวม", "รวม"] },
      { feature: "RBAC", values: [false, false, false, true, true] },
      { feature: "Volume based discounts", values: [false, false, false, true, true] },
      { feature: "Hybrid deployment option", values: [false, false, false, true, true] },
      { feature: "Account management", values: [false, false, false, true, true] },
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
            เลือกแพ็คเกจที่พอดีกับทีม และรับ 250 เครดิตเมื่ออัปเกรดเป็น Pro
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Windsurf ครอบคลุมตั้งแต่ Free จนถึง Enterprise พร้อมทดลองฟรี 14 วัน และ add-on prompt credits สำหรับงานที่ต้องใช้ปริมาณสูง
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>✓ รองรับการชำระเงินแบบบัตร/อินวอยซ์</span>
            <span>✓ ค่าใช้จ่ายคงที่ รายเดือน</span>
          </div>
          <a href="#plans" className="inline-flex items-center justify-center text-sm font-semibold text-orange-600 underline">
            ดูรายละเอียดแต่ละแพ็คเกจ ➜
          </a>
        </section>

        <section id="plans" className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
              cardVariant={(plan as any).cardVariant}
              ctaVariant={(plan as any).ctaVariant}
            />
          ))}
        </section>

        <section className="bg-white rounded-[32px] border border-orange-100 shadow-xl shadow-orange-100/50 p-10 text-center space-y-5">
          <h2 className="text-3xl font-semibold text-gray-900">ชวนเพื่อนสมัคร Pro รับเครดิตเพิ่ม</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            แชร์ลิงก์ referral ของคุณให้เพื่อนอัปเกรดแพ็คเกจ Pro หรือ Team แล้วรับ add-on prompt credits เพิ่มอีก 250 เครดิตทันทีสำหรับทั้งสองคน
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
      </div>
    </main>
  )
}
