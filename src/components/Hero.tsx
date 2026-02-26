import { CTAButton } from './CTAButton'
import { ImagePlaceholder } from './ImagePlaceholder'
import { Zap, Code2, BrainCircuit, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-28 pb-12">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5"></div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full opacity-10 animate-pulse-slow"></div>
      </div>
      
      {/* Hero background image */}
      <div className="absolute inset-0 opacity-5">
        <ImagePlaceholder
          src="/images/hero/Windsurf AI IDE.png"
          alt="Windsurf AI IDE Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full mb-6 shadow-soft hover-lift">
            <Sparkles className="w-5 h-5 animate-pulse-slow" />
            <span className="text-sm font-semibold">🎉 พิเศษ! 250 เครดิตฟรีสำหรับแพ็คเกจ Pro ขึ้นไป</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="gradient-text">Windsurf AI IDE</span>
            <br />
            <span className="text-gray-800">เครื่องมือเขียนโค้ดอัจฉริยะ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI coding assistant ที่ทรงพลังที่สุดสำหรับโปรแกรมเมอร์ไทย
            <br />
            <span className="text-orange-600 font-semibold">เขียนโค้ดเร็วขึ้น • ลบข้อผิดพลาด • เพิ่มประสิทธิภาพ</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <CTAButton source="hero-primary" className="btn-modern hover-glow shadow-modern">
            สมัคร Pro รับ 250 เครดิตฟรี
          </CTAButton>
          <CTAButton source="hero-secondary" className="bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50 shadow-soft hover-lift">
            ดูราคาแพ็คเกจ
          </CTAButton>
        </div>

        {/* Hero screenshot */}
        <div className="mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <div className="relative max-w-4xl mx-auto">
            <ImagePlaceholder
              src="/images/hero/Windsurf AI IDE.png"
              alt="Windsurf AI IDE Screenshot - แสดงหน้าต่างเขียนโค้ดพร้อม AI assistant"
              width={1200}
              height={675}
              className="rounded-2xl shadow-modern"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-children">
          <div className="card-modern p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-colored">
              <BrainCircuit className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">AI Assistant</h3>
            <p className="text-gray-600 leading-relaxed">ผู้ช่วย AI อัจฉริยะที่เข้าใจโค้ดและแนะนำการแก้ไขแบบ context-aware</p>
          </div>
          
          <div className="card-modern p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-colored">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Auto Complete</h3>
            <p className="text-gray-600 leading-relaxed">เติมโค้ดอัตโนมัติแม่นยำ เร็วกว่าเดิม 10 เท่า พร้อม intelligent suggestions</p>
          </div>
          
          <div className="card-modern p-8 text-center hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-colored">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Thai Support</h3>
            <p className="text-gray-600 leading-relaxed">รองรับภาษาไทย เข้าใจคอมเมนต์และตัวแปรภาษาไทยได้อย่างแม่นยำ</p>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <p className="text-orange-600 font-semibold">🔥 ข้อเสนอจำกัด 100 คนแรกเท่านั้น</p>
          </div>
          <p className="text-sm text-gray-500">250 เครดิต = ประมาณ 2-3 สัปดาห์การใช้งานแพ็คเกจ Pro</p>
        </div>
      </div>
    </section>
  )
}
