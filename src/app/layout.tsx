import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { HeaderNav } from "@/components/HeaderNav";
import { SiteFooter } from "@/components/SiteFooter";
import { buildPageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site-config";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะสำหรับโปรแกรมเมอร์ไทย",
  description: "Windsurf IDE คือ AI coding assistant ที่ทรงพลังที่สุด พร้อม 250 เครดิตฟรีเมื่อสมัครแพ็คเกจ Pro ขึ้นไป",
  keywords: ["windsurf ไทย", "สมัคร windsurf", "ai ide ภาษาไทย"],
  metadata: {
    metadataBase: new URL(siteUrl),
    icons: {
      icon: "/images/icons/favicon.png",
      shortcut: "/images/icons/favicon.png",
      apple: "/images/icons/favicon.png",
    },
    openGraph: {
      title: "Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะ",
      description: "AI coding assistant ที่ทรงพลังที่สุด พร้อม 250 เครดิตฟรี",
      url: siteUrl,
      siteName: "Windsurf Thailand",
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะ",
      description: "AI coding assistant ที่ทรงพลังที่สุด พร้อม 250 เครดิตฟรี",
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-BE3TPETJ76";
  return (
    <html lang="th">
      <body className={`${prompt.variable} font-sans antialiased bg-white`}>
        <HeaderNav />
        {children}
        <SiteFooter />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
