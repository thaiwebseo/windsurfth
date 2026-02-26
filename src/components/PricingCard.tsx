import { CTAButton, CTAButtonVariant } from "./CTAButton"

interface PricingCardProps {
  title: string
  price: string
  cadence?: string
  highlight?: string
  benefits: string[]
  ctaSource: string
  ctaLabel: string
  popular?: boolean
  cardVariant?: "default" | "outline"
  ctaVariant?: CTAButtonVariant
}

export function PricingCard({
  title,
  price,
  cadence,
  highlight,
  benefits,
  ctaSource,
  ctaLabel,
  popular = false,
  cardVariant = "default",
  ctaVariant = "primary",
}: PricingCardProps) {
  const cardBase =
    cardVariant === "outline"
      ? "border border-gray-200 bg-white"
      : "border border-orange-50 bg-white/95 shadow-xl shadow-orange-100/50"

  return (
    <div
      className={`rounded-[32px] p-8 h-full flex flex-col gap-6 transition hover:-translate-y-1 ${
        popular ? "ring-2 ring-orange-200" : ""
      } ${cardBase}`}
    >
      <div className="flex items-center justify-between text-xs uppercase font-semibold tracking-[0.3em] text-gray-500">
        <span>{title}</span>
        {popular && (
          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full tracking-normal">Popular</span>
        )}
      </div>

      <div className="space-y-2">
        {highlight && <p className="text-sm text-gray-500">{highlight}</p>}
        <div className="flex items-end gap-2">
          <p className="text-5xl font-bold text-gray-900">{price}</p>
          {cadence && <span className="text-lg text-gray-500">/{cadence}</span>}
        </div>
      </div>

      <ul className="space-y-3 text-gray-700 text-sm flex-1">
        {benefits.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-orange-500 mt-0.5">✓</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <CTAButton source={ctaSource} className="w-full justify-center" variant={popular ? "emerald" : ctaVariant}>
        {ctaLabel}
      </CTAButton>
    </div>
  )
}
