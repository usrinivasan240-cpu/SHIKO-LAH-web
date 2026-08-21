import React from 'react'

interface LogoProps {
  brand: 'shiok' | 'nirmalya'
  size?: number
  className?: string
  withText?: boolean
}

function LionMark({ size, className = '' }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M25 78c-2-14 1-26 10-35-2-8 1-17 9-22 8-5 18-4 24 1 10 0 18 5 22 13 3 7 1 16-5 21-3 3-7 5-12 5-3 9-10 15-19 18-7 2-16 2-29-1Zm11-39c7-1 13-5 17-10-7 0-13 3-17 10Zm25-7c5 1 10 4 13 8-2-7-8-11-13-12 1 1 1 2 0 4Zm-8 16c5-1 10-3 14-7-6-1-11 1-14 7Zm-11 12c8 1 15-1 21-5-6-1-12 1-16 5-2 2-3 4-5 6Z" />
      <path d="M28 29c8-10 20-15 33-12M26 36c9-6 18-9 27-8M29 46c8-4 16-5 23-3" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".7" />
    </svg>
  )
}

export default function BrandLogo({ brand, size = 40, className = '', withText = false }: LogoProps) {
  const isShiok = brand === 'shiok'
  const primary = isShiok ? '#B52828' : '#1F5E1F'
  const accent = isShiok ? '#C9A84C' : '#D94A2B'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className="grid place-items-center rounded-full"
        style={{ width: size, height: size, color: accent, background: isShiok ? '#FFF7E7' : '#F6B44A' }}
      >
        <LionMark size={size * 0.68} />
      </span>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-display font-bold tracking-[0.04em]" style={{ color: primary, fontSize: Math.max(14, size * 0.36) }}>
            {isShiok ? 'SHIOK LAH' : 'NIRMALYA'}
          </span>
          <span className="mt-1 font-body text-[7px] font-semibold tracking-[0.22em] uppercase" style={{ color: primary, opacity: .7 }}>
            {isShiok ? 'South East Asian Cuisine' : 'PURE VEG · TASTE OF SINGAPORE'}
          </span>
        </div>
      )}
    </div>
  )
}
