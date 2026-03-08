export interface TrackEventOptions {
  action: string
  category?: string
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params?: {
        event_category?: string
        event_label?: string
        value?: number
      },
    ) => void
  }
}

export function trackEvent({ action, category = "engagement", label, value }: TrackEventOptions) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return
  }

  window.gtag("event", action, {
    event_category: category,
    ...(label ? { event_label: label } : {}),
    ...(typeof value === "number" ? { value } : {}),
  })
}
