import type { Metadata } from "next";
import {
  type LucideIcon,
  Zap,
  BugPlay,
  MessageSquareQuote,
  Building2,
  Brain,
  Sparkles,
  PlugZap,
  Terminal,
  Repeat,
  Command,
  Rocket,
  Layers3,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { CTAButton } from "@/components/CTAButton";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site-config";

const canonical = siteUrl;
const ogImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString();

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะสำหรับโปรแกรมเมอร์ไทย",
  description: "Windsurf IDE คือ AI coding assistant ที่ช่วยทีมไทยเขียนโค้ดเร็วขึ้น ทำงานกับ context ได้ลึกขึ้น พร้อมระบบโควต้ารีเซ็ตใหม่ทุกวัน",
  keywords: ["windsurf ไทย", "windsurf pro", "ai ide สำหรับโปรแกรมเมอร์ไทย", "windsurf ราคา", "windsurf features"],
  metadata: {
    alternates: { canonical },
    openGraph: {
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Windsurf AI IDE สำหรับโปรแกรมเมอร์ไทย",
        },
      ],
    },
    twitter: {
      images: [ogImage],
    },
  },
});

const stats = [
  { label: "ตัวอย่างขนาดทีมที่เริ่มทดลองใช้งาน", value: "ทีมเล็ก-ใหญ่" },
  { label: "เวลาที่หลายทีมคาดหวังว่าจะประหยัดได้ต่อวัน", value: "สูงสุด 2 ชม." },
  { label: "งานรีวิวและ debug ที่มักลื่นขึ้นอย่างเห็นได้ชัด", value: "เห็นผลเร็ว" },
];

const fitGuidance = [
  {
    title: "เหมาะกับใคร",
    items: [
      "นักพัฒนาที่ใช้ AI ทุกวันกับ coding, debug, review และ refactor",
      "ทีมที่ต้องการให้ AI ช่วยงานหลายขั้นตอน ไม่ใช่แค่เติมโค้ด",
      "องค์กรที่กำลังวาง AI workflow ระดับทีมและต้องการ scale ต่อ",
    ],
  },
  {
    title: "อาจยังไม่จำเป็น",
    items: [
      "ผู้ใช้ที่ยังลอง AI IDE แบบเบา ๆ และยังไม่มี use case ชัด",
      "ทีมที่ยังต้องการเพียง code completion หรือ inline suggestion เป็นหลัก",
      "ผู้ที่ยังไม่พร้อมเปลี่ยน workflow และต้องการเริ่มจากเครื่องมือพื้นฐานก่อน",
    ],
  },
  {
    title: "ควรเริ่มแพ็กเกจไหน",
    items: [
      "เริ่ม Free ถ้าคุณยังต้องการสำรวจว่ากับงานของตัวเองคุ้มไหม",
      "เริ่ม Pro ถ้าคุณใช้ AI เป็นเครื่องมือหลักในงานจริงแล้ว",
      "เริ่ม Teams ถ้าต้องการการจัดการร่วมกัน, billing กลาง และ governance สำหรับทีม",
    ],
  },
]

const scenarioCards = [
  {
    title: "ทีม Product + Engineering",
    description: "ใช้ AI ช่วยอ่าน requirement, แปลงเป็น implementation plan, ลงมือแก้หลายไฟล์ และช่วยสรุปสิ่งที่เปลี่ยนก่อนส่งต่อในทีม",
  },
  {
    title: "นักพัฒนาที่ต้อง debug งานซับซ้อน",
    description: "เหมาะกับโจทย์ที่ต้องดู log, test, code หลายส่วนพร้อมกัน และอยากให้ AI ช่วยไล่ root cause แบบต่อเนื่องมากกว่าแค่ตอบเป็นรอบสั้น ๆ",
  },
  {
    title: "ทีมที่กำลัง scale การใช้ AI",
    description: "เหมาะเมื่อเป้าหมายไม่ใช่แค่เขียนโค้ดเร็วขึ้น แต่คือทำให้ workflow ของทีมมี memory, consistency และกระจายแนวทางการทำงานได้ง่ายขึ้น",
  },
]

const featureHighlights: { title: string; detail: string; Icon: LucideIcon }[] = [
  {
    title: "โค้ดเสร็จเร็วขึ้น",
    detail:
      "Autopilot แนะนำโค้ดแบบประโยคยาว เข้าใจบริบททั้งไฟล์และโปรเจกต์ ลดเวลาเดา syntax",
    Icon: Zap,
  },
  {
    title: "Debug ฉับไว",
    detail:
      "ให้ AI อธิบาย error, สร้าง test และ propose fix ได้จากหน้าต่างเดียว ช่วยลดเวลาไล่บั๊ก",
    Icon: BugPlay,
  },
  {
    title: "สื่อสารภาษาไทย",
    detail:
      "ถาม-ตอบฟีเจอร์หรือ logic เป็นภาษาไทยได้ตรงๆ เหมาะกับทีมที่ทำงานร่วมกันหลายระดับ",
    Icon: MessageSquareQuote,
  },
  {
    title: "พร้อมสำหรับ Enterprise",
    detail:
      "รองรับ Self-hosted, สิทธิ์เข้าถึงไฟล์ละเอียด และตรวจสอบ audit log ได้",
    Icon: Building2,
  },
];

const comparison = [
  {
    feature: "สั่งงานด้วยภาษาธรรมชาติ (ไทย)",
    windsurf: "รองรับ workflow ที่ต้องอธิบายโจทย์ยาวและหลายขั้นตอน",
    cursor: "ทำได้บางกรณี แต่ประสบการณ์อาจขึ้นกับ flow ที่ใช้",
    copilot: "มักเด่นด้าน suggestion มากกว่าการคุย workflow ยาว",
  },
  {
    feature: "Refactor ทั้งโปรเจกต์",
    windsurf: "เหมาะเมื่อโจทย์กินหลายไฟล์และต้องอาศัย context ต่อเนื่อง",
    cursor: "ทำได้ดีในหลายงาน editor-first และการแก้หลายไฟล์บางประเภท",
    copilot: "มักเหมาะกับงานเฉพาะจุดมากกว่างาน refactor ระดับกว้าง",
  },
  {
    feature: "Debug พร้อมสร้าง test case",
    windsurf: "เด่นเมื่ออยากให้ AI ช่วยไล่ปัญหา อธิบายสาเหตุ และเดินงานต่อ",
    cursor: "ช่วยได้ในหลายเคส แต่ความลื่นขึ้นกับความซับซ้อนของบริบท",
    copilot: "ช่วยสร้าง snippet และ suggestion ได้ แต่ flow debug อาจไม่ลึกเท่า",
  },
  {
    feature: "AI Pair Programming เต็มรูปแบบ",
    windsurf: "เหมาะกับทีมที่อยากใช้ AI เป็น workflow layer มากกว่า autocomplete",
    cursor: "เหมาะกับทีมที่ชอบประสบการณ์ editor-first และเริ่มใช้งานเร็ว",
    copilot: "มักตอบโจทย์งาน completion และ assist แบบสั้นมากกว่า",
  },
  {
    feature: "โบนัส $10 เมื่อสมัครเสียเงิน",
    windsurf: "รับโบนัส Extra usage $10 เมื่อสมัคร Pro ขึ้นไปผ่านลิงก์แนะนำ",
    cursor: "ไม่มีข้อเสนอโบนัสผ่านระบบบอกต่อในรูปแบบเดียวกัน",
    copilot: "ไม่มีระบบโบนัสบอกต่อในปัจจุบัน",
  },
];

const superpowerFeatures: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Memories",
    description: "จำกฎการเขียนโค้ด, style guide และ context ของ repo เพื่อให้ AI ตอบตรงใจ",
    Icon: Brain,
  },
  {
    title: "Lint Fixing",
    description: "ตรวจ error อัตโนมัติ พร้อมเสนอ patch ที่แก้ lint ได้ทันที",
    Icon: Sparkles,
  },
  {
    title: "MCP Support",
    description: "เชื่อมต่อเครื่องมือเสริมอย่าง Slack, Stripe หรือฐานข้อมูลได้ในคลิกเดียว",
    Icon: PlugZap,
  },
  {
    title: "Drag & Drop",
    description: "ลากไฟล์ดีไซน์เข้ามา แล้วให้ Windsurf สร้าง layout หรือ component ให้ครบ",
    Icon: Layers3,
  },
  {
    title: "Terminal Command",
    description: "ลืมคำสั่งไม่ได้อีกต่อไป พิมพ์สิ่งที่ต้องการแล้วให้ AI รัน terminal ให้",
    Icon: Terminal,
  },
  {
    title: "Continue Work",
    description: "AI จำ task ล่าสุดและประวัติ prompt เพื่อสานงานต่อได้ทันที",
    Icon: Repeat,
  },
  {
    title: "Turbo Mode",
    description: "สั่งงานชุดใหญ่ให้ทำเสร็จรวดเดียว เปิดโหมด Turbo เพื่อให้เอเจนต์รันอัตโนมัติ",
    Icon: Rocket,
  },
  {
    title: "Command Palette",
    description: "ควบคุมทุกอย่างผ่านคีย์ลัดเดียว เรียก workflow, snippets, memory ได้ไว",
    Icon: Command,
  },
];

const faqs = [
  {
    q: "Windsurf คืออะไร?",
    a: "Windsurf คือ IDE แรกที่ที่มี AI เป็น agent (agentic IDE) ซึ่งเป็นพื้นผิวแรกที่สำหรับนักพัฒนาในการทำงานร่วมกับ AI อย่างแท้จริง มันเป็นรูปแบบใหม่ของการทำงานกับ AI ที่เราเรียกว่า 'AI flows' ซึ่งผสมคุณลักษณะของทั้ง copilot และ agent มาไว้ในที่เดียว",
  },
  {
    q: "แตกต่างจาก IDE อื่นอย่างไร?",
    a: "Windsurf ไม่ใช่แค่ copilot หรือ agent ธรรมดา แต่เป็น 'AI flows' ที่ผสมคุณทั้งสองอย่าง คุณสามารถ collaborate กับ AI แบบ real-time ในขณะเดียวกัน ที่ AI สามารถทำงานอย่างอิสระเพื่องานที่ใหญ่ขึ้น",
  },
  {
    q: "ระบบโควต้าทำงานอย่างไร?",
    a: "Windsurf ใช้ระบบโควต้ารายวันและรายสัปดาห์ (Daily & Weekly) โดยผู้ใช้จะได้เปอร์เซ็นต์โควต้าเต็มใหม่ทุกวัน หากใช้โควต้าเกินสามารถเติมเงิน (Pay-as-you-go) เฉพาะส่วนที่เกินได้",
  },
  {
    q: "Windsurf เหมาะกับทีมแบบไหน?",
    a: "เหมาะกับทีมที่ใช้ AI มากกว่า autocomplete เช่น ต้องการให้ AI ช่วยอ่าน codebase, debug, review, สรุปงานหลายไฟล์ และเชื่อม workflow ระหว่าง dev, docs และการสื่อสารในทีม",
  },
  {
    q: "ควรเริ่มจาก Free, Pro หรือ Teams?",
    a: "ถ้าคุณยังสำรวจ use case เริ่มจาก Free ก่อนจะเหมาะที่สุด แต่ถ้าใช้ AI ทุกวันและต้องการ workflow ที่ต่อเนื่องขึ้น Pro มักคุ้มกว่า ส่วน Teams เหมาะกับองค์กรที่ต้องการการจัดการร่วมกันและการ scale การใช้งานในระดับทีม",
  },
  {
    q: "Windsurf ต่างจาก Cursor ยังไงในงานจริง?",
    a: "ถ้าดูในงานจริง Cursor มักเด่นด้าน editor-first experience และ adoption ที่ง่าย ส่วน Windsurf มักเด่นเมื่อโจทย์เริ่มไปสู่ workflow ที่หลายขั้นตอน ต้องใช้ context กว้าง และต้องการให้ AI ทำงานต่อเนื่องมากขึ้น",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
  mainEntityOfPage: `${siteUrl}/#faq`,
}
;

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะสำหรับโปรแกรมเมอร์ไทย",
  url: canonical,
  description: "หน้าแรกของ Windsurf Thailand สำหรับผู้ที่ต้องการดูภาพรวมฟีเจอร์ ราคา FAQ และเหตุผลที่ทีมไทยเลือกใช้ Windsurf IDE",
  inLanguage: "th-TH",
  isPartOf: {
    "@type": "WebSite",
    name: "Windsurf Thailand",
    url: siteUrl,
  },
  about: {
    "@type": "SoftwareApplication",
    name: "Windsurf IDE",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux",
    description: "AI IDE ที่ช่วยด้าน pair programming, code generation, debugging, repository context และ workflow automation",
    offers: {
      "@type": "Offer",
      category: "Pro Plan",
      description: "สมัครแพ็กเกจเสียเงินผ่านลิงก์แนะนำของเว็บไซต์เพื่อรับโบนัส Extra usage มูลค่า $10",
    },
  },
};

const intentLinks = [
  {
    title: "Windsurf คืออะไร",
    href: "/what-is-windsurf",
    description: "เหมาะสำหรับคนที่อยากเข้าใจภาพรวมของ Windsurf และดูว่ามันต่างจาก AI coding tools แบบเดิมอย่างไร",
  },
  {
    title: "เริ่มต้นใช้ Windsurf",
    href: "/guides/getting-started",
    description: "เหมาะสำหรับมือใหม่ที่อยากเริ่มให้ถูกทาง ตั้งแต่เลือกแพ็กเกจไปจนถึง workflow แรก",
  },
  {
    title: "ดูราคาและแพ็กเกจ",
    href: "/pricing",
    description: "เหมาะสำหรับคนที่กำลังเปรียบเทียบ Free, Pro และ Teams ก่อนตัดสินใจสมัคร",
  },
  {
    title: "ดูคำถามที่พบบ่อย",
    href: "/faq",
    description: "เหมาะสำหรับคนที่ยังมีคำถามเรื่องราคา ความคุ้มค่า และการเริ่มต้นใช้งาน",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      <section id="workflow" className="pt-16 pb-24 md:py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-5">Smart Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">เวิร์กโฟลว์ที่ครอบคลุมตั้งแต่เขียนจน Ship</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Windsurf ทำหน้าที่เป็นคู่หูที่เข้าใจทั้ง repository, issue และ style guide ของคุณ</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12 stagger-children">
          {featureHighlights.map((feature) => (
            <div key={feature.title} className="card-modern p-8 hover-lift h-full">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-colored">
                  <feature.Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">Buyer fit</p>
            <h2 className="text-3xl font-bold text-gray-900">ก่อนสมัคร ลองเช็คว่า Windsurf เหมาะกับงานของคุณแค่ไหน</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">ส่วนนี้สรุปแบบเร็วสำหรับคนที่กำลังตัดสินใจว่าจะเริ่มจากแพ็กเกจไหน หรือควรใช้เครื่องมือแบบ workflow-first ตั้งแต่ตอนนี้หรือยัง</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {fitGuidance.map((group) => (
              <div key={group.title} className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft">
                <h3 className="text-2xl font-semibold text-gray-900">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-gray-600 leading-relaxed">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-orange-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pt-12 pb-14 md:py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">แพ็กเกจ Pro และ Max สำหรับการใช้งานจริงจัง</h2>
            <p className="text-xl text-gray-600 mb-8">
              ได้โควต้าการใช้งาน AI สูงสุดที่รีเซ็ตทุกวัน เข้าถึงทุกโมเดลพรีเมียม และระบบเติมเงินยืดหยุ่น (Pay-as-you-go)
            </p>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3">✓</span>
                <span>โควต้ารีเซ็ตใหม่ทุกวันและทุกสัปดาห์</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-3">✓</span>
                <span>ปลดล็อกโมเดลทั้งหมดรวมถึง SWE-1.5</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>รับโบนัส $10 (Extra usage) เมื่อสมัครผ่านลิงก์นี้</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <CTAButton source="pricing-section">อัปเกรดรับโบนัส $10</CTAButton>
              <a
                href="#faq"
                className="underline text-orange-600 font-semibold text-lg hover:text-orange-700 transition-colors"
              >
                ดูคำถามที่พบบ่อย ➜
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative animate-fade-in-up">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            </div>
            <div className="mb-8 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
                <span>PRO</span>
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Standard Quota</span>
              </div>
              <p className="text-sm text-gray-500 mt-3">โควต้ารีเซ็ตรายวัน พร้อมเติมเงินได้</p>
              <p className="text-6xl font-bold text-gray-900 mt-4">$20<span className="text-2xl font-medium text-gray-500">/เดือน</span></p>
              <p className="text-gray-500 mt-1">หรือประมาณ 700 บาท/เดือน</p>
              <CTAButton
                source="pricing-card"
                variant="emerald"
                className="w-full justify-center mt-6"
              >
                อัปเกรดเป็น Pro
              </CTAButton>
              <div className="mt-6 space-y-3 text-gray-700 text-sm">
                <p>✓ โควต้าระดับ Standard (Daily/Weekly)</p>
                <p>✓ ใช้โมเดลระดับพรีเมียมทั้งหมด + SWE-1.5</p>
                <p>✓ รองรับระบบเติมเงิน จ่ายตามการใช้จริง</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="superpowers" className="pt-12 pb-14 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">Features</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-orange-500 font-semibold">One editor.</p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Unlimited superpowers.</h3>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {superpowerFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#162341] to-[#1f2f4f] text-white p-6 shadow-2xl border border-white/10 animate-fade-in-up"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <feature.Icon className="w-6 h-6 text-orange-300" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-12 md:py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Why Windsurf</p>
          <h2 className="text-3xl font-bold text-gray-900">เปรียบเทียบกับ IDE รุ่นอื่น</h2>
          <p className="text-gray-600 mt-4">เลือกคู่หูที่เข้าใจทั้งภาษาไทยและเวิร์กโฟลว์ DevOps</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-700">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4">ความสามารถ</th>
                <th className="p-4 text-orange-600">Windsurf</th>
                <th className="p-4">Cursor</th>
                <th className="p-4">GitHub Copilot</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b">
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4 text-orange-600 font-semibold">{row.windsurf}</td>
                  <td className="p-4">{row.cursor}</td>
                  <td className="p-4">{row.copilot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">ตารางนี้ใช้เพื่อช่วยคัดกรองรูปแบบการใช้งานที่เหมาะกับแต่ละเครื่องมือ ไม่ใช่การตัดสินแบบ absolute และรายละเอียดจริงอาจเปลี่ยนได้ตามแพ็กเกจและเวอร์ชันล่าสุด</p>
      </section>

      <section className="pt-10 pb-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-3">Impact Metrics</p>
            <h2 className="text-3xl font-bold text-gray-900">ตัวอย่างผลลัพธ์ที่หลายทีมมักคาดหวัง</h2>
            <p className="mt-3 text-gray-600">ตัวเลขและผลลัพธ์ด้านล่างใช้เพื่อสื่อภาพรวมของ impact ที่ผู้ใช้มักมองหาเมื่อเริ่มใช้ AI IDE ในงานจริง</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-10 text-center shadow-soft animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                  {item.value}
                </p>
                <p className="mt-3 text-lg font-semibold text-orange-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#fff8ef] to-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold">Next steps</p>
            <h2 className="text-3xl font-bold text-gray-900">เริ่มจากหน้าที่ตรงกับสิ่งที่คุณต้องการที่สุด</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {intentLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft hover:-translate-y-1 transition">
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{item.description}</p>
                <span className="mt-5 inline-flex items-center font-semibold text-orange-600">
                  ไปที่หน้านี้
                  <span aria-hidden className="ml-2">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="pt-12 pb-18 md:py-20 bg-gradient-to-b from-orange-50/40 to-white mt-0 md:mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-3">Community perspectives</p>
            <h2 className="text-3xl font-bold text-gray-900">ตัวอย่างสถานการณ์ใช้งานที่ Windsurf มักถูกนำไปใช้</h2>
            <p className="mt-3 text-gray-600">แทนที่จะอ้างผลลัพธ์แบบกว้าง ๆ ส่วนนี้สรุปเป็นสถานการณ์ใช้งานที่พบบ่อย เพื่อช่วยให้คุณเทียบกับ workflow ของตัวเองได้ตรงขึ้น</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {scenarioCards.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-soft space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Use case</p>
                <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900">คำถามที่พบบ่อยจากผู้ใช้ใหม่</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.q}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:border-orange-200"
                open={index === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-3xl font-bold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </main>
  );
}
