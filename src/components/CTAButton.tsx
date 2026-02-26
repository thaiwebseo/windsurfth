'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getReferralLink } from '@/lib/referrals'

export type CTAButtonVariant = 'primary' | 'emerald' | 'outline'

interface CTAButtonProps {
  source?: string
  className?: string
  children: React.ReactNode
  variant?: CTAButtonVariant
}

const variantClasses: Record<CTAButtonVariant, string> = {
  primary:
    'btn-modern bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-4 px-8 rounded-xl shadow-modern hover:shadow-colored transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 text-lg relative overflow-hidden group',
  emerald:
    'btn-modern bg-emerald-400 hover:bg-emerald-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg shadow-emerald-300/60 transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-3 text-lg relative overflow-hidden group',
  outline:
    'btn-modern bg-white text-orange-600 border border-orange-200 font-semibold py-4 px-8 rounded-xl shadow-soft hover:shadow-modern transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-3 text-lg relative overflow-hidden group',
}

export function CTAButton({ source = 'website', className = '', children, variant = 'primary' }: CTAButtonProps) {
  const referralLink = getReferralLink({ source })
  const baseClass = variantClasses[variant] ?? variantClasses.primary

  return (
    <Link
      href={referralLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`.trim()}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  )
}
