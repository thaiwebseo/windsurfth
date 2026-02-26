import Image from "next/image";
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
import { siteUrl } from "@/lib/site-config";

const stats = [
  { label: "นักพัฒนาไทยใช้งาน", value: "15,000+" },
  { label: "เวลาเฉลี่ยที่ประหยัดต่อวัน", value: "2 ชม." },
  { label: "งานรีวิวโค้ดที่เสร็จเร็วขึ้น", value: "95%" },
];

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
  { feature: "สั่งงานด้วยภาษาธรรมชาติ (ไทย)", windsurf: "✓", cursor: "~", copilot: "✕" },
  { feature: "Refactor ทั้งโปรเจกต์", windsurf: "✓", cursor: "✓", copilot: "✕" },
  { feature: "Debug พร้อมสร้าง test case", windsurf: "✓", cursor: "~", copilot: "~" },
  { feature: "AI Pair Programming เต็มรูปแบบ", windsurf: "✓", cursor: "~", copilot: "✕" },
  { feature: "เครดิตพิเศษ 250 เมื่อสมัคร Pro", windsurf: "✓", cursor: "✕", copilot: "✕" },
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
    q: "เครดิต 250 ใช้ทำอะไรได้?",
    a: "เครดิตเทียบเท่าเวลาการใช้งานแพ็คเกจ Pro ประมาณ 2-3 สัปดาห์ สามารถใช้เปิดโควต้า AI command แบบเต็ม",
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

const testimonialRows = {
  top: [
    {
      name: "ลเล็กซ์ จันทร์",
      handle: "@AlexFinnX",
      role: "Lead Engineer, FinTech",
      avatar: "https://i.pravatar.cc/120?img=12",
      quote:
        "พอใช้ Windsurf แล้ว PR ที่เคยใช้เวลาเป็นวัน เหลือไม่ถึงชั่วโมง ประหยัดแรงทีม reviewer ไปเยอะมาก",
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "แจ็ค ฟอร์จ",
      handle: "@TheJackForge",
      role: "CTO, Forge Labs",
      avatar: "https://i.pravatar.cc/120?img=33",
      quote:
        "AI flow ของ Windsurf ทำให้เขียน feature ยาวๆ แบบ agentic ได้จริง ทีมผมย้าย workflow มาทั้งหมดแล้ว",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "อลาวิโร วันทศ",
      handle: "@DrWanTech",
      role: "AI Researcher",
      avatar: "https://i.pravatar.cc/120?img=56",
      quote:
        "การคุยกับเอเจนต์ภาษาไทยลื่นมาก พิมพ์ requirement เป็นไทยแล้วให้มัน generate test + code ได้ครบ",
      color: "from-sky-400 to-blue-500",
    },
    {
      name: "ลูก้า",
      handle: "@Knackkits",
      role: "Freelance Dev",
      avatar: "https://i.pravatar.cc/120?img=22",
      quote:
        "งานรีวิวโค้ดและ refactor โปรเจ็กต์ขนาดใหญ่ทำง่ายขึ้นมาก เพราะ Windsurf จำ context ทั้ง repo ได้จริง",
      color: "from-emerald-400 to-teal-500",
    },
  ],
  bottom: [
    {
      name: "ทอม ดอร์",
      handle: "@tom_doerr",
      role: "Security Engineer",
      avatar: "https://i.pravatar.cc/120?img=40",
      quote:
        "Windsurf เก่งเรื่อง lint และ test automation กว่า IDE อื่นที่ลองมา ช่วยปิด ticket audit ได้เร็วขึ้น",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      name: "ลลักขณา เลอร์วิช",
      handle: "@SecWillCheck",
      role: "QA Lead",
      avatar: "https://i.pravatar.cc/120?img=5",
      quote:
        "เราย้ายการตรวจ regression ทั้งหมดเข้า Windsurf แล้วให้ agent รัน test + แนะนำ fix เอง ประหยัดมาก",
      color: "from-rose-500 to-orange-400",
    },
    {
      name: "ขายยาวของในร้านของข้า",
      handle: "@TheBodegaMan",
      role: "Indie Hacker",
      avatar: "https://i.pravatar.cc/120?img=48",
      quote:
        "Turbo mode ทำให้ปล่อยฟีเจอร์ prototype ภายในคืนเดียว เพราะ agent จัดการคำสั่ง terminal ให้หมด",
      color: "from-amber-500 to-yellow-400",
    },
    {
      name: "เออร่า",
      handle: "@omsara0",
      role: "Fullstack Dev",
      avatar: "https://i.pravatar.cc/120?img=67",
      quote:
        "ผมใช้ Windsurf เขียนเอกสาร + อัพเดตคู่มือทีมกว่า 50 หน้าโดยสั่งเป็นภาษาไทยทั้งหมด ง่ายมาก",
      color: "from-fuchsia-500 to-purple-600",
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />

      <section id="workflow" className="py-24 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-5">Smart Workflow</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">เวิร์กโฟลว์ที่ครอบคลุมตั้งแต่เขียนจน Ship</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Windsurf ทำหน้าที่เป็นคู่หูที่เข้าใจทั้ง repository, issue และ style guide ของคุณ</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12 stagger-children">
          {featureHighlights.map((feature, index) => (
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

      <section id="pricing" className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">แพ็คเกจ Pro สำหรับนักพัฒนาจริงจัง</h2>
            <p className="text-xl text-gray-600 mb-8">
              ได้เครดิต AI command สูงสุด, Unlimited Chat, Memory ที่จำทั้ง codebase และ Priority Support ระดับ Pro
            </p>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>รองรับ Context Window ขนาดใหญ่สำหรับโปรเจ็กต์ enterprise</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>AI Agent ช่วยออกแบบ PR และรีวิวโค้ดแบบละเอียด</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">✓</span>
                <span>รับ 250 เครดิตทันทีเมื่อสมัครผ่านลิงก์นี้</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <CTAButton source="pricing-section">สมัคร Pro รับ 250 เครดิต</CTAButton>
              <a
                href="#faq"
                className="underline text-orange-600 font-semibold text-lg hover:text-orange-700 transition-colors"
              >
                ดูคำถามที่พบบ่อย
              </a>
            </div>
          </div>
          <div className="animate-scale-in">
            <div className="bg-white rounded-3xl border border-orange-100 shadow-soft p-8 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                <span>PRO</span>
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Popular</span>
              </div>
              <p className="text-sm text-gray-500 mt-3">ทดลองฟรี 14 วัน พร้อม 100 เครดิต</p>
              <p className="text-6xl font-bold text-gray-900 mt-4">$15<span className="text-2xl font-medium text-gray-500">/เดือน</span></p>
              <p className="text-gray-500 mt-1">หรือประมาณ 540 บาท/เดือน</p>
              <CTAButton
                source="pricing-trial"
                variant="emerald"
                className="w-full justify-center mt-6"
              >
                เริ่มทดลองใช้งานฟรี + รับเครดิต
              </CTAButton>
              <div className="mt-6 space-y-3 text-gray-700 text-sm">
                <p>✓ รับเครดิต 500 prompt ต่อเดือนหลังจบช่วงทดลอง</p>
                <p>✓ ใช้โมเดลระดับพรีเมียมทั้งหมด + SWE-1.5</p>
                <p>✓ Full Fast Context และเพิ่มเครดิตเพิ่มได้ $10/250 เครดิต</p>
              </div>
              <p className="text-xs text-gray-400 mt-8">* ทดลองฟรีสำหรับผู้ใช้ใหม่เท่านั้น</p>
            </div>
          </div>
        </div>
      </section>

      <section id="superpowers" className="py-24 bg-white">
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

      <section className="py-16 max-w-6xl mx-auto px-4">
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
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-3">Impact Metrics</p>
            <h2 className="text-3xl font-bold text-gray-900">ผลลัพธ์จากผู้ใช้จริง</h2>
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

      <section id="testimonials" className="py-20 bg-gradient-to-b from-orange-50/40 to-white mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500 font-semibold mb-3">Testimonials</p>
            <h2 className="text-3xl font-bold text-gray-900">เสียงจากนักพัฒนาที่ใช้ Windsurf ทุกวัน</h2>
          </div>

          <div className="space-y-10">
            <div className="marquee-row">
              <div className="marquee-track">
                {[...Array(2)].flatMap((_, loopIndex) =>
                  testimonialRows.top.map((item, index) => (
                    <div
                      className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-soft border border-gray-100 p-5 flex flex-col gap-3"
                      key={`${item.handle}-top-${loopIndex}-${index}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-[2px]`}>
                          <div className="w-full h-full rounded-full bg-white">
                            <Image
                              src={item.avatar}
                              alt={item.name}
                              width={48}
                              height={48}
                              className="w-full h-full rounded-full object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.handle}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{item.role}</p>
                      <p className="text-gray-700 leading-relaxed">“{item.quote}”</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="marquee-row">
              <div className="marquee-track reverse">
                {[...Array(2)].flatMap((_, loopIndex) =>
                  testimonialRows.bottom.map((item, index) => (
                    <div
                      className="min-w-[280px] max-w-sm bg-white rounded-2xl shadow-soft border border-gray-100 p-5 flex flex-col gap-3"
                      key={`${item.handle}-bottom-${loopIndex}-${index}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-[2px]`}>
                          <div className="w-full h-full rounded-full bg-white">
                            <Image
                              src={item.avatar}
                              alt={item.name}
                              width={48}
                              height={48}
                              className="w-full h-full rounded-full object-cover"
                              unoptimized
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-500">{item.handle}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{item.role}</p>
                      <p className="text-gray-700 leading-relaxed">“{item.quote}”</p>
                    </div>
                  ))
                )}
              </div>
            </div>
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
    </main>
  );
}
