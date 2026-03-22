"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { trackEvent } from "@/lib/analytics";

const primaryNavItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "ราคา", href: "/pricing" },
  { label: "จุดเด่น", href: "/features" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ติดต่อ", href: "/contact" },
  { label: "FAQs", href: "/faq" },
];

const navGroups = [
  {
    label: "เริ่มต้นใช้งาน",
    items: [
      { label: "Windsurf คืออะไร", href: "/what-is-windsurf", description: "รู้จักภาพรวมและแนวคิดของ Windsurf" },
      { label: "เริ่มต้นใช้ Windsurf", href: "/guides/getting-started", description: "คู่มือสำหรับมือใหม่และทีมที่อยากเริ่มให้ถูกทาง" },
    ],
  },
  {
    label: "คู่มือ",
    items: [
      { label: "Best Practice", href: "/blog/best-practice-windsurf", description: "ปรับการใช้งานให้ AI ตอบตรงใจและลดการอธิบายซ้ำ" },
      { label: "เชื่อม Windsurf กับ GitHub", href: "/blog/windsurf-github-guide", description: "เริ่มใช้ Windsurf กับโปรเจกต์จริงและ workflow ของทีม" },
    ],
  },
];

export function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-orange-100/60 shadow-[0_4px_20px_rgba(255,107,53,0.05)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="กลับไปหน้าแรก" onClick={() => trackEvent({ action: "nav_click", category: "navigation", label: "logo_home" })}>
            <Image
              src="/images/icons/windsurf-black-wordmark.svg"
              alt="Windsurf Thailand"
              width={120}
              height={28}
              priority
              className="h-7 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {primaryNavItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-orange-600 transition-colors" onClick={() => trackEvent({ action: "nav_click", category: "navigation", label: `desktop_${item.href}` })}>
                {item.label}
              </a>
            ))}
            {navGroups.map((group) => (
              <div key={group.label} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 hover:text-orange-600 transition-colors"
                  onClick={() => trackEvent({ action: "nav_click", category: "navigation", label: `desktop_group_${group.label}` })}
                >
                  <span>{group.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 rounded-2xl border border-orange-100 bg-white p-3 opacity-0 shadow-2xl shadow-orange-100/50 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 hover:bg-orange-50"
                      onClick={() => trackEvent({ action: "nav_click", category: "navigation", label: `desktop_${item.href}` })}
                    >
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <CTAButton source="header-cta" className="!text-base !font-semibold !py-3 !px-6">
              รับโบนัส $10
            </CTAButton>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-orange-100 py-4 space-y-4">
            {primaryNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  trackEvent({ action: "nav_click", category: "navigation", label: `mobile_${item.href}` })
                  setOpen(false)
                }}
                className="block text-gray-700 font-medium"
              >
                {item.label}
              </a>
            ))}
            {navGroups.map((group) => (
              <div key={group.label} className="rounded-2xl border border-orange-100 bg-orange-50/50 p-4 space-y-3">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-orange-500">{group.label}</p>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        trackEvent({ action: "nav_click", category: "navigation", label: `mobile_${item.href}` })
                        setOpen(false)
                      }}
                      className="block rounded-xl bg-white px-4 py-3 shadow-soft"
                    >
                      <p className="font-medium text-gray-900">{item.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <CTAButton source="header-cta-mobile" className="w-full justify-center">
              รับโบนัส $10
            </CTAButton>
          </div>
        )}
      </div>
    </header>
  );
}
