'use client'

import { useEffect, useState } from "react"
import { Cookie, ShieldCheck, BarChart3, Megaphone, ChevronDown, X } from "lucide-react"

const CONSENT_KEY = "windsurf-cookie-consent"

interface CookieConsent {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const defaultConsent: CookieConsent = {
  necessary: true,
  analytics: true,
  marketing: true,
}

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasDecision, setHasDecision] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent)

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setConsent({ ...defaultConsent, ...parsed })
        setHasDecision(true)
      } catch {
        window.localStorage.removeItem(CONSENT_KEY)
        setIsOpen(true)
      }
    } else {
      setIsOpen(true)
    }
  }, [])

  const persistConsent = (value: CookieConsent) => {
    setConsent(value)
    setHasDecision(true)
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value))
    setIsOpen(false)
    setShowDetails(false)
  }

  const handleAcceptAll = () => {
    persistConsent({ necessary: true, analytics: true, marketing: true })
  }

  const handleReject = () => {
    persistConsent({ necessary: true, analytics: false, marketing: false })
  }

  const handleSaveCustom = () => {
    persistConsent(consent)
  }

  const toggleSwitch = (key: keyof Omit<CookieConsent, "necessary">) => {
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  if (!isOpen && !hasDecision) {
    return null
  }

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center px-4 py-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            aria-hidden
            onClick={() => {
              setIsOpen(false)
              setShowDetails(false)
            }}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-[slide-up_0.35s_ease]">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="ปิดแบนเนอร์คุกกี้"
              onClick={() => {
                setIsOpen(false)
                setShowDetails(false)
              }}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="px-6 pt-6 pb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white shadow-lg">
                  <Cookie className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-orange-500 mb-2">Cookies</p>
                  <h2 className="text-2xl font-bold text-gray-900">จัดการการอนุญาตใช้งานคุกกี้</h2>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    เว็บไซต์นี้ใช้คุกกี้เพื่อให้คุณได้รับประสบการณ์ที่ราบรื่น วิเคราะห์การใช้งาน และปรับคอนเทนต์ให้เหมาะสม
                    อ่านเพิ่มเติมได้ที่นโยบายการใช้คุกกี้และนโยบายความเป็นส่วนตัวของเรา
                  </p>
                </div>
              </div>

              {!showDetails && (
                <div className="flex flex-wrap gap-3 mt-6">
                  <button
                    className="flex-1 min-w-[140px] bg-orange-500 text-white font-semibold py-3 rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-600 transition"
                    onClick={handleAcceptAll}
                  >
                    ยอมรับทั้งหมด
                  </button>
                  <button
                    className="flex-1 min-w-[140px] border border-gray-200 text-gray-700 font-semibold py-3 rounded-2xl hover:bg-gray-50 transition"
                    onClick={handleReject}
                  >
                    ปฏิเสธ
                  </button>
                  <button
                    className="flex-1 min-w-[140px] border border-gray-200 text-gray-600 font-semibold py-3 rounded-2xl hover:bg-gray-50 transition"
                    onClick={() => setShowDetails(true)}
                  >
                    ดูรายละเอียด
                  </button>
                </div>
              )}

              {showDetails && (
                <div className="mt-6 space-y-4">
                  <CookieToggle
                    title="คุกกี้ที่จำเป็น"
                    description="ช่วยให้เว็บไซต์ทำงานได้ปกติ เช่น การจดจำภาษาหรือ session"
                    icon={<ShieldCheck className="w-5 h-5 text-emerald-500" />}
                    locked
                    enabled
                  />
                  <CookieToggle
                    title="คุกกี้สถิติ"
                    description="ช่วยให้เราวิเคราะห์พฤติกรรมการใช้งาน เพื่อพัฒนาเนื้อหาและประสบการณ์"
                    icon={<BarChart3 className="w-5 h-5 text-sky-500" />}
                    enabled={consent.analytics}
                    onToggle={() => toggleSwitch("analytics")}
                  />
                  <CookieToggle
                    title="คุกกี้การตลาด"
                    description="ใช้สำหรับการแนะนำบทความหรือโปรโมชันที่ตรงใจคุณ"
                    icon={<Megaphone className="w-5 h-5 text-purple-500" />}
                    enabled={consent.marketing}
                    onToggle={() => toggleSwitch("marketing")}
                  />

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      className="flex-1 min-w-[140px] bg-orange-500 text-white font-semibold py-3 rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-600 transition"
                      onClick={handleAcceptAll}
                    >
                      ยอมรับทั้งหมด
                    </button>
                    <button
                      className="flex-1 min-w-[140px] border border-gray-200 text-gray-700 font-semibold py-3 rounded-2xl hover:bg-gray-50 transition"
                      onClick={handleSaveCustom}
                    >
                      บันทึกการตั้งค่า
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-8">
                <a href="/privacy" className="underline hover:text-orange-500">นโยบายความเป็นส่วนตัว</a>
                <a href="/terms" className="underline hover:text-orange-500">เงื่อนไขการใช้งาน</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="fixed bottom-4 left-4 z-40 bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 text-sm font-semibold hover:shadow-xl transition"
          onClick={() => {
            setIsOpen(true)
            setShowDetails(false)
          }}
        >
          จัดการการอนุญาต Cookies
        </button>
      )}
    </>
  )
}

interface CookieToggleProps {
  title: string
  description: string
  icon: React.ReactNode
  enabled?: boolean
  locked?: boolean
  onToggle?: () => void
}

function CookieToggle({ title, description, icon, enabled = false, locked = false, onToggle }: CookieToggleProps) {
  return (
    <div className="border border-gray-100 rounded-2xl p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center">{icon}</div>
          <div>
            <p className="font-semibold text-gray-900">{title}</p>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          </div>
        </div>
        {locked ? (
          <span className="text-xs text-emerald-600 font-semibold">Always active</span>
        ) : (
          <button
            className={`relative w-12 h-6 rounded-full overflow-hidden transition-colors ${enabled ? "bg-orange-500" : "bg-gray-300"}`}
            onClick={onToggle}
            type="button"
            aria-pressed={enabled}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all duration-200 ${enabled ? "left-7" : "left-1"}`}
            />
          </button>
        )}
      </div>
    </div>
  )
}
