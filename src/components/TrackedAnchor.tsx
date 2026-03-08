"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react"
import { trackEvent } from "@/lib/analytics"

interface TrackedAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  action: string
  category?: string
  label: string
}

export function TrackedAnchor({ children, action, category, label, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent({ action, category, label })
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}
