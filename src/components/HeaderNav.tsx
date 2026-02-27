"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";

const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "ราคา", href: "/pricing" },
  { label: "จุดเด่น", href: "/features" },
  { label: "บทความ", href: "/blog" },
  { label: "FAQs", href: "/#faq" },
];

export function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-orange-100/60 shadow-[0_4px_20px_rgba(255,107,53,0.05)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center" aria-label="กลับไปหน้าแรก">
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
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-orange-600 transition-colors">
                {item.label}
              </a>
            ))}
            <CTAButton source="header-cta" className="!text-base !font-semibold !py-3 !px-6">
              สมัคร Pro รับเครดิต
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 font-medium"
              >
                {item.label}
              </a>
            ))}
            <CTAButton source="header-cta-mobile" className="w-full justify-center">
              สมัคร Pro รับเครดิต
            </CTAButton>
          </div>
        )}
      </div>
    </header>
  );
}
