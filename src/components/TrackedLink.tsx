"use client"

import Link, { type LinkProps } from "next/link"
import type { ReactNode } from "react"
import { trackEvent } from "@/lib/analytics"

interface TrackedLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  action: string
  category?: string
  label: string
  target?: string
  rel?: string
  ariaLabel?: string
  onTrackedClick?: () => void
}

export function TrackedLink({
  children,
  className,
  action,
  category,
  label,
  target,
  rel,
  ariaLabel,
  onTrackedClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => {
        trackEvent({ action, category, label })
        onTrackedClick?.()
      }}
    >
      {children}
    </Link>
  )
}
