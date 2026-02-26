import type { BlogPost } from "./types"

export const glm5MinimaxPost: BlogPost = {
  slug: "glm-5-minimax-m2-5-windsurf",
  title: "GLM-5 และ Minimax M2.5 เปิดให้ใช้ใน Windsurf แล้ว",
  excerpt:
    "อัปเดตโมเดลใหม่จากจีนและสิงคโปร์ เพิ่มตัวเลือก AI agent ที่หลากหลาย ครอบคลุมทั้งงานภาษาจีน-ไทยและการสร้างคอนเทนต์หลายรูปแบบ",
  coverImage: "/images/blogs/glm-5-minimax-m2.5-blog-card.png",
  date: "26 กุมภาพันธ์ 2026",
  publishedAt: "2026-02-26T15:00:00+07:00",
  readingTime: "4 นาที",
  author: "ทีม Windsurf Thailand",
  tags: ["GLM-5", "Minimax", "AI Models"],
  heroHighlight: "เลือกระหว่างโมเดลจีนที่เก่ง reasoning และโมเดลมัลติโมดัลสำหรับ content",
  sections: [
    {
      heading: "GLM-5: โมเดล reasoning จากจีน",
      body:
        "GLM-5 เป็นโมเดลใหญ่จากทีม Zhipu AI ที่เน้น reasoning หลายภาษา รองรับ context ยาว 1 ล้านโทเคน และเข้าใจภาษาเอเชียได้ดี โดยเฉพาะจีน-ไทย.",
      bullets: [
        "ตอบคำถามเทคนิคและกฎหมายจีน/ไทยได้",
        "แปลภาษาผสมไทย-จีนได้แม่น",
        "รองรับโครงสร้าง prompt ขั้นสูง",
      ],
    },
    {
      heading: "Minimax M2.5: มัลติโมดัลครบ",
      body:
        "Minimax M2.5 เน้นการสร้างคอนเทนต์ทั้งข้อความ เสียง และรูป โดยเฉพาะงานมาร์เก็ตติ้งและ UX copy ช่วยให้ทีม product สื่อสารกับลูกค้าได้เร็วขึ้น.",
      bullets: [
        "สร้างสคริปต์วีดีโอ + voice draft",
        "แนะนำ copy ภาษาไทย/อังกฤษ",
        "เชื่อมกับ workflow Docs/Blog",
      ],
    },
    {
      heading: "วิธีเลือกใช้ใน Windsurf",
      body:
        "เข้า Settings → AI Models แล้วกำหนดว่า workflow ไหนให้ใช้ GLM-5 หรือ Minimax M2.5 เช่น เลือก GLM-5 สำหรับการวิเคราะห์ requirement ภาษาจีน และใช้ Minimax สำหรับสร้างบทความหรือสคริปต์",
      bullets: [
        "ตั้ง policy แยกตาม repository",
        "ล็อกการเข้าถึงโมเดลตามทีม",
        "ดูรายงานการใช้งานแยกตามโมเดล",
      ],
    },
  ],
  cta: {
    title: "ปลดล็อกโมเดลเพิ่ม ผ่าน Windsurf",
    description: "อัปเกรดแพ็คเกจ Pro เพื่อเปิดใช้ GLM-5, Minimax M2.5 และรับเครดิตเพิ่ม",
  },
}
