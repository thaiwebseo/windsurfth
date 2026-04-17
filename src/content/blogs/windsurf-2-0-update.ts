import { BlogPost } from "./types"

export const windsurfTwoPointZeroUpdatePost: BlogPost = {
  slug: "windsurf-2-0-update",
  title: "Windsurf 2.0: แนะนำ Agent Command Center และ Devin ใน Windsurf",
  excerpt:
    "สรุปอัปเดต Windsurf 2.0 สำหรับผู้ใช้ไทย ครอบคลุม Agent Command Center, Windsurf Spaces และ Devin ใน Windsurf ที่ช่วยให้จัดการ agent หลายตัวและงานบนคลาวด์ได้ในที่เดียว",
  coverImage: "/images/blogs/windsurf-2-0-hero.png",
  date: "17 เมษายน 2026",
  publishedAt: "2026-04-17T14:30:00+07:00",
  readingTime: "5 นาที",
  author: "ทีม Windsurf Thailand",
  tags: ["Product Update", "Windsurf", "Agents", "Devin", "Workflow"],
  keywords: [
    "Windsurf 2.0",
    "Agent Command Center คืออะไร",
    "Devin ใน Windsurf",
    "Windsurf Spaces",
    "agentic IDE",
    "อัปเดต Windsurf 2.0",
  ],
  heroHighlight:
    "Windsurf 2.0 ขยายแนวคิด agentic IDE ไปอีกขั้นด้วย Agent Command Center, Spaces และ Devin เพื่อให้คุณจัดการหลาย agent พร้อมกันได้จากที่เดียว",
  sections: [
    {
      heading: "Windsurf 2.0 เปลี่ยนวิธีทำงานกับ AI agents อย่างไร",
      body:
        "Windsurf เปิดตัวครั้งแรกในฐานะ agentic IDE ที่ให้คนและ AI agent ทำงานร่วมกันใน codebase เดียวกันได้ แต่เมื่อ agent เก่งขึ้น งานของนักพัฒนาก็เริ่มเปลี่ยนจากการนั่งเขียนโค้ดอย่างเดียวไปเป็นการจัดการงานหลายสายพร้อมกัน Windsurf 2.0 จึงถูกออกแบบมาเพื่อแก้ปัญหานี้โดยตรง ด้วยการรวมเครื่องมือสำหรับควบคุม, มอบหมาย และตรวจงานของหลาย agent ไว้ใน workflow เดียว",
      bullets: [
        "รองรับการทำงานกับ agent หลายตัวพร้อมกันทั้งบน local และ cloud",
        "ลดภาระการจำสถานะของงานหลายก้อนในหัวของผู้ใช้",
        "ทำให้ Windsurf ใกล้เคียงกับระบบ mission control สำหรับทีมพัฒนามากขึ้น",
      ],
      image: {
        src: "/images/blogs/command-center.jpg",
        alt: "Agent Command Center ใน Windsurf 2.0",
      },
    },
    {
      heading: "The Agent Command Center (ศูนย์บัญชาการ Agent)",
      body:
        "Agent Command Center คือพื้นที่ใหม่ใน Windsurf ที่รวม agent sessions ทั้งหมดของคุณไว้ในมุมมองเดียวแบบ Kanban ไม่ว่าจะเป็นงานบน local หรือ cloud คุณสามารถเห็นได้ทันทีว่า agent ตัวไหนกำลังทำอะไรอยู่ งานไหนติดปัญหา และงานไหนพร้อม review แล้ว แนวคิดนี้ช่วยเปลี่ยนจากการจัดการ agent แบบกระจัดกระจาย ไปสู่การสั่งการที่มีภาพรวมชัดเจนขึ้น",
      video: {
        src: "/images/blogs/agent-editor-open.mp4",
        title: "ตัวอย่าง Agent Command Center ใน Windsurf 2.0",
      },
      bullets: [
        "เห็นสถานะของทุก agent ในมุมมองรวมเดียว",
        "จัดลำดับความสำคัญและติดตามงานได้ง่ายขึ้น",
        "เชื่อมต่อกับการแก้โค้ดใน editor เดิมได้ลึก ไม่ได้แยกขาดจาก IDE",
      ],
    },
    {
      heading: "Windsurf Spaces",
      body:
        "Spaces คือวิธีการจัดกลุ่มงานใน Agent Command Center โดยแต่ละ Space จะเก็บทุกอย่างที่เกี่ยวข้องกับงานหรือโปรเจกต์เดียวกันไว้ด้วยกัน ไม่ว่าจะเป็นเซสชันของ agent, PR, ไฟล์ หรือบริบทสำคัญต่าง ๆ ผลลัพธ์คือคุณสามารถสลับจากงานหนึ่งไปอีกงานหนึ่งได้เหมือนสลับ context ของทั้งทีม agent ไม่ใช่แค่สลับแท็บหรือสลับแชต",
      video: {
        src: "/images/blogs/add-session-to-space.mp4",
        title: "การเพิ่ม agent session เข้า Space ใน Windsurf",
      },
      bullets: [
        "แต่ละ Space ทำหน้าที่เหมือน workspace สำหรับงานเฉพาะเรื่อง",
        "บริบทของงานถูก carry over ไปยัง session ใหม่ใน Space เดียวกัน",
        "เหมาะกับทีมหรือผู้ใช้ที่ต้องดูหลาย initiative พร้อมกัน",
      ],
    },
    {
      heading: "Spaces ช่วยลดภาระการสลับบริบทอย่างไร",
      body:
        "จุดแข็งของ Spaces คือการช่วยเก็บ context ของงานให้ต่อเนื่อง เมื่อคุณกลับเข้าสู่ Space เดิม มุมมองของงานและสิ่งที่ agent กำลังทำจะยังอยู่ครบ ทำให้การสลับระหว่างหลายโปรเจกต์ไม่เท่ากับการเริ่มต้นใหม่ทุกครั้ง นี่คือการเปลี่ยนจากการจัดการ task แบบรายตัว ไปสู่การจัดการทีม agent เป็นหน่วยงานย่อยที่มีบริบทของตัวเอง",
      video: {
        src: "/images/blogs/user-switching-between-spaces.mp4",
        title: "การสลับระหว่าง Spaces ใน Windsurf 2.0",
      },
      bullets: [
        "ลด cognitive load เวลาต้องทำหลายงานในช่วงเดียวกัน",
        "ช่วยให้ context ของ agent และของผู้ใช้ไปในทิศทางเดียวกันมากขึ้น",
        "ทำให้ภาพรวมของโปรเจกต์และความคืบหน้าชัดเจนกว่า workflow แบบเดิม",
      ],
    },
    {
      heading: "Devin ใน Windsurf",
      body:
        "หนึ่งในไฮไลต์สำคัญของ Windsurf 2.0 คือการดึง Devin เข้ามาอยู่ในผลิตภัณฑ์โดยตรง Devin คือ software engineering agent บนคลาวด์ที่ทำงาน end-to-end ได้ทั้ง debugging, deployment และ testing พร้อมสภาพแวดล้อมของตัวเองบน VM ทำให้มันสามารถทำงานต่อได้แม้คุณจะไม่ได้เปิดเครื่องหรือไม่ได้อยู่หน้าจอแล้วก็ตาม",
      video: {
        src: "/images/blogs/devin-using-desktop.mp4",
        title: "Devin ทำงานใน Windsurf",
      },
      bullets: [
        "ส่งงานขึ้นคลาวด์ได้โดยไม่ต้องออกจาก editor",
        "Devin มีสภาพแวดล้อมของตัวเองสำหรับทำงานต่อเนื่อง",
        "ช่วยยกระดับจาก local pair programming ไปสู่ autonomous execution ที่ยาวขึ้น",
      ],
    },
    {
      heading: "จาก local agent ไปสู่ Devin Cloud แบบไร้รอยต่อ",
      body:
        "Windsurf 2.0 ออกแบบให้การส่งต่องานจาก local agent ไปยัง Devin เป็นเรื่องลื่นไหล คุณสามารถวางแผนงานกับ agent ในเครื่องก่อน จากนั้นคลิกเดียวเพื่อส่งงานขึ้น cloud ให้ Devin ดำเนินการต่อ วิธีนี้ทำให้ workflow ไม่สะดุด และเปิดโอกาสให้คุณเลือกได้ว่าจะทำงานต่อบนเครื่อง หรือปล่อยให้ agent บนคลาวด์ทำงานแทนในช่วงที่คุณไม่อยู่ก็ได้",
      video: {
        src: "/images/blogs/devin-cloud-session.mp4",
        title: "Devin Cloud session ใน Windsurf",
      },
      bullets: [
        "ส่งต่องานจาก local ไป cloud ได้ใน workflow เดียว",
        "เหมาะกับงานที่ต้องใช้เวลานานหรือมีหลายขั้นตอน",
        "ช่วยให้ผู้ใช้ใช้เวลาของตัวเองกับงานที่ต้องตัดสินใจจริง ๆ มากขึ้น",
      ],
    },
    {
      heading: "ทำไม Windsurf 2.0 ถึงสำคัญกับทีมที่ใช้ AI จริงจัง",
      body:
        "สิ่งที่ Windsurf 2.0 ทำไม่ใช่แค่เพิ่มฟีเจอร์ใหม่ แต่คือการยกระดับบทบาทของ IDE ให้กลายเป็นศูนย์กลางการควบคุมงานระหว่างคนกับหลาย agent ในอนาคต หากทีมของคุณกำลังเริ่มใช้ AI มากขึ้นเรื่อย ๆ ปัญหาจะไม่ใช่แค่ว่าโมเดลเก่งพอไหม แต่จะเป็นเรื่องการบริหาร context, การสั่งงานหลายก้อนพร้อมกัน และการ review งานที่ agent สร้างขึ้น Windsurf 2.0 กำลังตอบโจทย์นั้นตรง ๆ",
      bullets: [
        "เหมาะกับทีมที่เริ่มใช้หลาย agent พร้อมกันในโปรเจกต์เดียว",
        "ช่วยรวมการวางแผน มอบหมายงาน และ review ไว้ในที่เดียว",
        "เป็นสัญญาณชัดว่า Windsurf กำลังขยายจาก AI IDE ไปสู่ AI work orchestration layer",
      ],
    },
  ],
  cta: {
    title: "อยากเริ่มใช้ Windsurf ให้เห็นภาพ workflow จริงมากขึ้น?",
    description:
      "ถ้าคุณกำลังดูว่า Windsurf เหมาะกับทีมของคุณไหม หรืออยากเข้าใจความต่างระหว่าง AI IDE แบบเดิมกับแนวทาง agentic workflow ลองอ่านบทความพื้นฐานและคู่มือเริ่มต้นเพิ่มเติมได้ต่อจากหน้านี้",
  },
  faq: [
    {
      question: "Agent Command Center คืออะไร?",
      answer:
        "คือพื้นที่ใน Windsurf 2.0 ที่รวม agent sessions ทั้งหมดไว้ในมุมมองเดียวแบบ Kanban เพื่อให้ติดตามสถานะ มอบหมายงาน และ review งานได้ง่ายขึ้น",
    },
    {
      question: "Windsurf Spaces ช่วยอะไร?",
      answer:
        "Spaces ช่วยจัดกลุ่ม session, PR, ไฟล์ และบริบทของงานเดียวกันไว้ด้วยกัน ทำให้สลับงานหลายโปรเจกต์ได้โดยไม่หลุด context",
    },
    {
      question: "Devin ใน Windsurf ต่างจาก local agent ยังไง?",
      answer:
        "Devin เป็น autonomous engineering agent บนคลาวด์ที่มี VM ของตัวเอง จึงทำงานต่อเนื่องแบบ end-to-end ได้แม้คุณจะไม่ได้เปิด editor อยู่ตลอดเวลา",
    },
  ],
}
