export const REFERRAL_LINK = "https://windsurf.com/refer?referral_code=kiffafwmwm7hks6f"

export interface ReferralOptions {
  source?: string
  medium?: string
  campaign?: string
  extraParams?: Record<string, string>
}

export function getReferralLink({
  source = "website",
  medium = "cta",
  campaign = "250credits",
  extraParams = {},
}: ReferralOptions = {}) {
  const url = new URL(REFERRAL_LINK)
  url.searchParams.set("utm_source", source)
  url.searchParams.set("utm_medium", medium)
  url.searchParams.set("utm_campaign", campaign)
  Object.entries(extraParams).forEach(([key, value]) => {
    url.searchParams.set(key, value)
  })
  return url.toString()
}
