import { Metadata } from "next"
import { CTAButton } from "@/components/CTAButton"
import { buildPageMetadata } from "@/lib/seo"

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf Features | ฟีเจอร์และ AI Flows แบบจัดเต็ม",
  description: "สำรวจฟีเจอร์ Windsurf IDE, AI pair programming, Fast Context และ workflow automation สำหรับทีมไทย",
  keywords: ["windsurf features", "ai flows", "pair programming", "fast context"],
})

const featureHighlights = [
  {
    title: "AI Pair Programming",
    description:
      "ให้เอเจนต์ทำงานร่วมกับคุณแบบ context-aware ทั้งแก้ bug, เขียน test, รีวิว PR พร้อมบันทึก rationale ในแต่ละขั้นตอน",
  },
  {
    title: "Fast Context 200k tokens",
    description:
      "เปิดไฟล์และ repository จำนวนมากในคราวเดียว Windsurf จำโครงสร้างโค้ดและ history เพื่อไม่ให้คุณต้องอธิบายซ้ำ",
  },
  {
    title: "Workflow Automation",
    description:
      "ตั้ง macros หรือ workflow สำเร็จรูปเพื่อสั่งงานซ้ำ ๆ เช่น setup project, deploy preview, sync docs ภายในคลิกเดียว",
  },
  {
    title: "Team Memory",
    description:
      "แชร์ style guide, coding rules, หรือ FAQ ของทีมเป็น memory กลาง ให้เอเจนต์ทุกคนตอบได้ตรงแนวทาง",
  },
]

const aiFlows = [
  {
    name: "Code Autopilot",
    steps: ["สั่งงานเป็นภาษาไทย", "เอเจนต์วิเคราะห์ task", "สร้าง branch / commit proposal", "เปิด PR พร้อมคำอธิบาย"],
  },
  {
    name: "Debug Coach",
    steps: ["อัพโหลด log + test", "Windsurf วิเคราะห์ root cause", "เสนอ patch + test ใหม่", "ตรวจสอบผลแล้วรายงานให้ทีม"],
  },
  {
    name: "Doc Sync",
    steps: ["เลือกไฟล์สำคัญ", "Windsurf สรุปเป็น docs/Changelog", "ส่งเข้า Confluence หรือ Notion", "แจ้งเตือนทีม"],
  },
]

const platformFeatures = [
  { category: "IDE Experience", items: ["Autocomplete ที่เข้าใจทั้งภาษาไทย/อังกฤษ", "Panel แสดง reasoning ของเอเจนต์", "Live collaboration เหมือน pair programming"] },
  { category: "AI Stack", items: ["สลับโมเดลได้ทั้ง GPT, Claude, Local", "โควต้ารวม + การจัดการเครดิต", "Dynamic routing ตามงาน (refactor, doc, infra)"] },
  { category: "Security", items: ["Self-hosted และ Hybrid deployment", "Role-based access control", "Audit log & data retention"] },
]

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-orange-50 via-white to-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">Why Windsurf</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              IDE เดียวที่ออกแบบมาเพื่อทำงานร่วมกับ AI แบบเต็มรูปแบบ
            </h1>
            <p className="text-gray-600 text-lg">
              Windsurf ช่วยให้ทีมไทยสามารถสั่งงานเอเจนต์ ตั้งแต่เขียนโค้ด Deploy ไปจนถึงจัดการเอกสาร สื่อสาร รายงานผลได้ครบวงจร ทั้งหมดบนหน้าต่างเดียว
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton source="features-hero">เริ่มต้นใช้งานฟรี</CTAButton>
              <CTAButton source="features-demo" variant="outline">
                ดูเดโมแบบเต็ม
              </CTAButton>
            </div>
          </div>
          <div className="bg-white rounded-[32px] border border-orange-100 shadow-2xl shadow-orange-50 p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">สรุปภาพรวม</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✓</span>
                <span>Agent workflow library มากกว่า 30 แบบ (Ship PR, Debug, Review, Docs)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✓</span>
                <span>เชื่อมต่อกับ GitHub, GitLab, Linear, Jira, Slack, Notion ได้ในคลิกเดียว</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✓</span>
                <span>รองรับภาษาไทยเต็มรูปแบบทั้ง prompt, comment และ commit message</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✓</span>
                <span>ระบบความปลอดภัยระดับองค์กร ตั้งแต่ SSO, RBAC จนถึง Hybrid deployment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Key highlights</p>
            <h2 className="text-3xl font-bold text-gray-900">ฟีเจอร์หลักที่ทีม Dev เลือกใช้</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featureHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl border border-gray-100 p-8 shadow-soft hover:-translate-y-1 transition">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0f1c3f] via-[#111f3a] to-[#0f1c3f] text-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">AI Flows</p>
            <h2 className="text-3xl font-bold">Automate งานใหญ่ ด้วย flows สำเร็จรูป</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiFlows.map((flow) => (
              <div key={flow.name} className="rounded-3xl bg-white/10 p-6 space-y-6 border border-white/10">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/70">Flow</p>
                  <h3 className="text-2xl font-semibold">{flow.name}</h3>
                </div>
                <ol className="space-y-3 text-white/80 text-sm">
                  {flow.steps.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="text-white font-semibold">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-500">Platform overview</p>
            <h2 className="text-3xl font-bold text-gray-900">สิ่งที่ได้เมื่อใช้ Windsurf</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platformFeatures.map((category) => (
              <div key={category.category} className="rounded-[28px] border border-gray-100 p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-400 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">พร้อมลองแล้วหรือยัง?</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">เริ่มทดลอง Pro ฟรี 14 วัน พร้อมรับ 250 เครดิตเมื่ออัปเกรด</h2>
            <p className="text-white/80">
              ผูกลิงก์ repository, ตั้งค่า workflow แรก และให้เอเจนต์ดูแล backlog ของคุณได้ภายใน 15 นาที ไม่ต้องย้ายเครื่องมือที่ใช้อยู่
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton source="features-final" className="justify-center sm:justify-start" variant="primary">
              ทดลองใช้งานฟรี
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
