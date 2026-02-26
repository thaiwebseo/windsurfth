import type { BlogPost } from "./types"

export const gemini31ProPost: BlogPost = {
  slug: "gemini-3-1-pro-windsurf",
  title: "Gemini 3.1 Pro พร้อมใช้งานใน Windsurf แล้ว",
  excerpt:
    "โมเดล Gemini 3.1 Pro ถูกเพิ่มเข้า Fast Context อย่างเป็นทางการ ให้ทีมไทยสลับใช้โมเดลระดับท็อปเพื่อรีวิวโค้ด แก้บั๊ก และวิเคราะห์ระบบได้ละเอียดขึ้น",
  coverImage: "/images/blogs/gemini-3.1-pro-blog-card.png",
  date: "20 กุมภาพันธ์ 2026",
  publishedAt: "2026-02-20T09:00:00+07:00",
  readingTime: "6 นาที",
  author: "ทีม Windsurf Thailand",
  tags: ["Gemini 3.1 Pro", "โมเดลใหม่", "AI IDE"],
  heroHighlight: "สลับใช้โมเดลจาก Google ได้โดยไม่ต้องเปลี่ยน workflow เดิม",
  sections: [
    {
      heading: "Gemini 3.1 Pro คืออะไร และดีอย่างไร",
      body:
        "Gemini 3.1 Pro คือโมเดลล่าสุดจาก Google DeepMind ที่ออกแบบมาเพื่อทำงานกับข้อมูลบริบทยาว ๆ และให้เหตุผลเชิงตรรกะได้ดีขึ้นกว่ารุ่นก่อนหน้าถึง 30% เหมาะมากสำหรับการรีวิวโค้ดไฟล์ใหญ่ การวิเคราะห์อินฟราสตรักเจอร์ และการตอบคำถามเชิงเทคนิคที่มีหลายเงื่อนไข.",
      bullets: [
        "Context window สูงสุด 2 ล้านโทเคน",
        "ตอบคำถามภาษาไทยได้แม่นขึ้น",
        "รองรับการสร้างโค้ดหลายภาษาในคำสั่งเดียว",
      ],
    },
    {
      heading: "วิธีเปิดใช้งานใน Windsurf",
      body:
        "เพียงอัปเดตเวอร์ชัน Windsurf ให้เป็นล่าสุด จากนั้นไปที่ Settings → AI Models → เลือก \"Gemini 3.1 Pro\" เป็น default หรือกำหนดในระดับ workflow เฉพาะงาน เช่น Debug Flow หรือ Docs Flow.",
      bullets: [
        "สลับโมเดลได้แบบ per-task",
        "กำหนด policy ว่าให้ใช้เฉพาะในโปรเจกต์หรือทีมไหน",
        "เก็บประวัติการใช้โมเดลเพื่อวิเคราะห์ค่าใช้จ่าย",
      ],
    },
    {
      heading: "ผลลัพธ์ที่ทีมทดสอบเจอ",
      body:
        "ทีม beta tester ในไทยรายงานว่า Gemini 3.1 Pro ช่วยลดเวลาการเขียนเอกสารเทคนิคลง 40% และให้คำแนะนำเชิงสถาปัตยกรรมได้ละเอียดขึ้น โดยเฉพาะโปรเจกต์ที่ใช้ภาษาไทยปนอังกฤษ.",
      bullets: [
        "PR review ที่ต้องอ่านหลายไฟล์ทำได้เร็วขึ้น",
        "คำอธิบายเหตุผล (reasoning trace) ชัดเจน",
        "คำตอบภาษาไทยมีน้ำเสียงเป็นธรรมชาติ",
      ],
    },
  ],
  cta: {
    title: "ลอง Gemini 3.1 Pro ผ่าน Windsurf",
    description: "สมัครแพ็คเกจ Pro แล้วเปิดใช้งานโมเดลระดับองค์กรพร้อมรับ 250 เครดิตทันที",
  },
}
