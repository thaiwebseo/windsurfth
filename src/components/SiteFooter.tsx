import Link from "next/link";
import { CTAButton } from "./CTAButton";

const quickLinks = [
  { label: "คุณสมบัติ", href: "/#workflow" },
  { label: "ราคา", href: "/pricing" },
  { label: "ความสามารถ", href: "/#superpowers" },
  { label: "รีวิว", href: "/#testimonials" },
];

const resources = [
  { label: "เอกสารเริ่มต้น", href: "https://docs.windsurf.com" },
  { label: "Community Thai", href: "https://discord.gg/windsurf" },
  { label: "Blog", href: "/blog" },
];

export function SiteFooter() {
  return (
    <footer className="bg-gray-950 text-white/90">
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-300 flex items-center justify-center font-bold">
              W
            </div>
            <div>
              <p className="font-semibold text-white text-lg">Windsurf Thailand</p>
              <p className="text-sm text-white/60">AI IDE สำหรับนักพัฒนาไทย</p>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            IDE แรกที่ออกแบบให้ทำงานกับ AI แบบ agentic ตอบโจทย์ทีมไทยทั้ง workflow, memory และการสั่งงานภาษาไทย
          </p>
          <div className="mt-6">
            <CTAButton
              source="footer-cta"
              className="!text-base !font-semibold !py-3 !px-6 bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg shadow-orange-500/30"
            >
              สมัคร Pro รับ 250 เครดิต
            </CTAButton>
          </div>
        </div>

        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4">ลิงก์ด่วน</p>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange-300 transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4">Resources</p>
          <ul className="space-y-3 text-sm">
            {resources.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange-300 transition-colors" target="_blank">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-white/50 flex flex-col md:flex-row gap-2 md:gap-0 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Windsurf Thailand. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
