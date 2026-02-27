import type { BlogPost } from "./types"

export const windsurfGithubGuidePost: BlogPost = {
  slug: "windsurf-github-guide",
  title: "เชื่อม Windsurf กับ GitHub พร้อมคำสั่งขึ้นโค้ดแบบละเอียด",
  excerpt:
    "สรุปทุกขั้นตอนตั้งแต่เตรียมบัญชี GitHub, ตั้งค่า Git ภายใน Windsurf ไปจนถึงคำสั่ง git init, commit, push สำหรับทั้งการอัปโหลดครั้งแรกและรอบอัปเดต",
  coverImage: "/images/blogs/code-github.webp",
  date: "27 กุมภาพันธ์ 2026",
  publishedAt: "2026-02-27T21:30:00+07:00",
  readingTime: "7 นาที",
  author: "ทีม Windsurf Thailand",
  tags: ["GitHub", "Git", "Windsurf"],
  heroHighlight: "มีทั้งขั้นตอนเชื่อมต่อและคำสั่ง git ครบ จัดการโค้ดผ่าน Windsurf ได้ทันที",
  sections: [
    {
      heading: "เตรียมตัวก่อนเชื่อมต่อ",
      body:
        "ต้องมีบัญชี GitHub, ติดตั้ง Git บนเครื่อง และลงชื่อเข้าใช้ Windsurf ด้วยบัญชีที่จะใช้ทำงาน ส่วนข้อมูลผู้ใช้ (user.name / user.email) แนะนำให้ตั้งค่าผ่านคำสั่ง git config --global ก่อนเริ่ม เพื่อให้ทุก commit ชัดเจนว่าเป็นของใคร.",
      bullets: [
        "สมัคร github.com และสร้าง Personal Access Token หากจะ push ผ่าน HTTPS",
        "เช็กเวอร์ชัน Git ด้วยคำสั่ง git --version",
        "ใน Windsurf ให้เปิดโฟลเดอร์โปรเจกต์ที่ต้องการซิงก์",
      ],
    },
    {
      heading: "อัปโหลดครั้งแรก (โครงงานใหม่)",
      body:
        "อ้างอิงจากภาพ infographic ที่ให้มา เราสามารถทำตามลำดับคำสั่งนี้ได้เลย โดยพิมพ์ผ่าน Terminal ภายใน Windsurf หรือคอนโซลภายนอก แล้วตรวจสถานะด้วย git status เป็นระยะเพื่อดูไฟล์ที่พร้อม commit.",
      bullets: [
        "สร้าง repository บน GitHub → คัดลอก URL แบบ HTTPS",
        "ในโฟลเดอร์โปรเจกต์รัน git init",
        "เพิ่มไฟล์ทั้งหมดด้วย git add .",
        "สร้าง commit แรก git commit -m \"Initial commit\"",
        "ตั้งค่า branch หลัก git branch -M main",
        "เชื่อม remote git remote add origin <URL>",
        "ส่งขึ้น GitHub ด้วย git push -u origin main",
      ],
      image: {
        src: "/images/blogs/git.png",
        alt: "ผังคำสั่งอัปโหลดโค้ดขึ้น GitHub ครั้งแรก",
      },
    },
    {
      heading: "อัปเดตโค้ดรอบต่อไป",
      body:
        "เมื่อ repo ถูกเชื่อมแล้ว งานประจำวันจะเหลือเพียงเพิ่มไฟล์ที่แก้ (git add) บันทึก snapshot (git commit) แล้วส่งขึ้น (git push) เท่านั้น แนะนำให้เขียนข้อความ commit บอกสิ่งที่เปลี่ยนทุกครั้งเพื่อให้ reviewer เข้าใจง่าย.",
      bullets: [
        "git add . หรือระบุไฟล์เฉพาะ",
        "git commit -m \"สรุปสิ่งที่แก้\"",
        "git push origin main",
      ],
    },
    {
      heading: "เชื่อม GitHub เข้ากับ UI ของ Windsurf",
      body:
        "Windsurf รองรับการลงชื่อเข้าใช้ GitHub ผ่านหน้า Settings → Integrations จากนั้นเลือก Connect GitHub เพื่ออนุญาตอ่าน/เขียน repo เมื่อเสร็จแล้วคุณจะสามารถสร้าง PR, review diffs และดูสถานะ branch ตรง sidebar ได้เลยโดยไม่ต้องสลับหน้าต่าง.",
      bullets: [
        "การกด Pull/Push สามารถทำผ่าน Command Palette ได้",
        "Windsurf แสดง diff แบบ inline พร้อม AI review",
        "สามารถตั้งค่า default branch และ fetch interval ได้ใน Settings",
      ],
    },
  ],
  cta: {
    title: "เริ่มใช้ Windsurf + GitHub",
    description: "สมัครแพ็คเกจ Pro เพื่อใช้ Fast Context, AI review และเครดิต 250 สำหรับการเชื่อมกับทีม",
  },
}
