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

const defaultOgImage = new URL("/images/hero/Windsurf%20AI%20IDE.png", siteUrl).toString();
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Windsurf Thailand",
  url: siteUrl,
  logo: new URL("/images/icons/windsurf-black-wordmark.svg", siteUrl).toString(),
  sameAs: [
    "https://x.com/windsurf",
    "https://www.facebook.com/groups/windsurf",
    "https://discord.gg/windsurf",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "team@windsurfth.ai",
    contactType: "customer support",
    availableLanguage: ["th", "en"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Windsurf Thailand",
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = buildPageMetadata({
  title: "Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะสำหรับโปรแกรมเมอร์ไทย",
  description: "Windsurf IDE คือ AI coding assistant ที่ทรงพลังที่สุด พร้อม 250 เครดิตฟรีเมื่อสมัครแพ็คเกจ Pro ขึ้นไป",
  keywords: ["windsurf ไทย", "สมัคร windsurf", "ai ide ภาษาไทย"],
  metadata: {
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
    },
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
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Windsurf AI IDE ครอบคลุมทีมไทย",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Windsurf AI IDE - เครื่องมือเขียนโค้ดอัจฉริยะ",
      description: "AI coding assistant ที่ทรงพลังที่สุด พร้อม 250 เครดิตฟรี",
      images: [defaultOgImage],
    },
    ...(googleVerification && {
      other: {
        "google-site-verification": googleVerification,
      },
    }),
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
