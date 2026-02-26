import type { BlogPost } from "./types"

export const claudeSonnet46Post: BlogPost = {
  slug: "claude-sonnet-4-6-windsurf",
  title: "Claude Sonnet 4.6 เปิดให้ใช้ใน Windsurf แล้ว",
  excerpt:
    "โมเดล Claude Sonnet 4.6 เน้นความปลอดภัยและ reasoning ลึกยิ่งขึ้น ช่วยให้ dev team วางแผนระบบและสร้างโค้ดที่มีตรรกะซับซ้อนได้อย่างมั่นใจ",
  coverImage: "/images/blogs/sonnet-4.6-blog-card.png",
  date: "26 กุมภาพันธ์ 2026",
  publishedAt: "2026-02-26T10:00:00+07:00",
  readingTime: "5 นาที",
  author: "ทีม Windsurf Thailand",
  tags: ["Claude", "Sonnet 4.6", "AI IDE"],
  heroHighlight: "ควบคุมสไตล์การตอบและ policy ได้ละเอียด ทั้งยังรองรับข้อมูลภายในองค์กร",
  sections: [
    {
      heading: "จุดเด่นของ Claude Sonnet 4.6",
      body:
        "รุ่น Sonnet 4.6 ได้อัปเดต memory และ reasoning engine ทำให้ตอบคำถามที่มีหลายบริบทพร้อมกันได้ดีขึ้น รวมถึงกำจัด hallucination ในงานโค้ดได้อย่างมีนัยสำคัญ.",
      bullets: [
        "เหตุผลละเอียดและมี citation",
        "สลับภาษาได้แม้มีศัพท์เฉพาะ",
        "รองรับ prompt ยาว 1 ล้านโทเคน",
      ],
    },
    {
      heading: "เปิดใช้งานใน Windsurf อย่างไร",
      body:
        "เข้า Settings → AI Models แล้วเลือก \"Claude Sonnet 4.6\" เป็นโมเดลหลัก หรือกำหนดเฉพาะ workflow เช่น Code Review / Threat Modeling เพื่อใช้ reasoning ระดับสูง.",
      bullets: [
        "ตั้ง policy ว่าให้ Sonnet ตอบเฉพาะงานที่ต้องการ",
        "ผูก Secrets และ context ของบริษัทได้โดยตรง",
        "รองรับ self-hosted / hybrid",
      ],
    },
    {
      heading: "ตัวอย่างการใช้งานที่ทีมไทยชอบ",
      body:
        "ทีม security และสถาปนิกซอฟต์แวร์ใช้ Sonnet 4.6 เพื่อจำลองเหตุการณ์โจมตี วิเคราะห์ threat model และสรุป control ที่ต้องเสริมได้ละเอียดขึ้น.",
      bullets: [
        "จับ pattern การโจมตีและอธิบายได้เป็นภาษาไทย",
        "สร้าง checklist สำหรับ compliance",
        "ช่วย debug โค้ดที่ต้องดูตรรกะข้ามไฟล์",
      ],
    },
  ],
  cta: {
    title: "ใช้ Claude Sonnet 4.6 ผ่าน Windsurf",
    description: "อัปเกรดเป็นแพ็คเกจ Pro รับเครดิตเพิ่มทันที พร้อมปรับ policy ให้ตอบโจทย์องค์กร",
  },
}
