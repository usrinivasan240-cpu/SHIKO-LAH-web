import React from 'react'

interface LogoProps {
  brand: 'shiok' | 'nirmalya'
  size?: number
  className?: string
  withText?: boolean
}

/** Nirmalya uses the exact supplied master artwork as a single lockup. */
function NirmalyaMaster({ size }: { size: number }) {
  return (
    <img
      src="/nirmalya-exact.svg"
      width={size}
      height={size}
      alt="Nirmalya Pure Veg — Taste of Singapore"
      className="block shrink-0 object-contain"
      style={{ width: size, height: size }}
    />
  )
}

function ShiokLion({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path fill="currentColor" d="M25 78c-2-14 1-26 10-35-2-8 1-17 9-22 8-5 18-4 24 1 10 0 18 5 22 13 3 7 1 16-5 21-3 3-7 5-12 5-3 9-10 15-19 18-7 2-16 2-29-1Z" />
      <path d="M28 29c8-10 20-15 33-12M26 36c9-6 18-9 27-8M29 46c8-4 16-5 23-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".7" />
    </svg>
  )
}

export default function BrandLogo({ brand, size = 40, className = '' }: LogoProps) {
  if (brand === 'nirmalya') {
    return (
      <span className={`inline-flex items-center shrink-0 ${className}`}>
        <NirmalyaMaster size={size} />
      </span>
    )
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid place-items-center shrink-0 rounded-full bg-cream-50" style={{ width: size, height: size }}>
        <ShiokLion size={size * 0.68} />
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold tracking-[0.035em] text-red-700" style={{ fontSize: Math.max(15, size * 0.36) }}>SHIOK LAH</span>
        <span className="mt-1 font-body text-[7px] font-semibold tracking-[0.19em] uppercase whitespace-nowrap text-red-700/70">SOUTH EAST ASIAN CUISINE</span>
      </div>
    </div>
  )
}
