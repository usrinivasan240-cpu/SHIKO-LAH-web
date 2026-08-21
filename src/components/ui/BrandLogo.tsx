import React from 'react'

interface LogoProps {
  brand: 'shiok' | 'nirmalya'
  size?: number
  className?: string
  withText?: boolean
}

/**
 * Brand lockup used everywhere in the application.
 * Nirmalya follows the supplied master logo reference:
 * warm orange circular badge, red lion mark, deep green wordmark,
 * and the exact PURE VEG · TASTE OF SINGAPORE descriptor.
 */
function NirmalyaLion({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="#D71920" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="10" d="M33 72c-5-9-5-22 1-31-2-9 2-18 11-23 9-5 20-4 27 3 7 1 12 5 15 11 3 7 1 15-4 20-4 4-9 6-15 6-4 8-11 14-19 17" />
        <path strokeWidth="7" d="M42 32c9-6 18-8 27-6M37 42c10-4 20-4 29-1M37 52c10-2 19 0 27 5M39 61c9 0 17 3 23 9" />
      </g>
      <path fill="#D71920" d="M22 48c4-5 10-8 17-8l9 4-5 8-10 2-4 8-10-2c-2-4-1-8 3-12Z" />
      <circle cx="31" cy="47" r="2.2" fill="#fff" />
    </svg>
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

export default function BrandLogo({ brand, size = 40, className = '', withText = false }: LogoProps) {
  const isNirmalya = brand === 'nirmalya'
  const primary = isNirmalya ? '#0B663B' : '#B52828'
  const badge = isNirmalya ? '#F6B44A' : '#FFF7E7'
  const mark = isNirmalya ? <NirmalyaLion size={size * 0.72} /> : <ShiokLion size={size * 0.68} />

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span
        className="grid place-items-center shrink-0 rounded-full"
        style={{ width: size, height: size, background: badge }}
      >
        {mark}
      </span>
      {withText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display font-bold tracking-[0.035em]"
            style={{ color: primary, fontSize: Math.max(15, size * 0.36) }}
          >
            {isNirmalya ? 'NIRMALYA' : 'SHIOK LAH'}
          </span>
          <span
            className="mt-1 font-body text-[7px] font-semibold tracking-[0.19em] uppercase whitespace-nowrap"
            style={{ color: primary, opacity: 0.72 }}
          >
            {isNirmalya ? 'PURE VEG · TASTE OF SINGAPORE' : 'SOUTH EAST ASIAN CUISINE'}
          </span>
        </div>
      )}
    </div>
  )
}
