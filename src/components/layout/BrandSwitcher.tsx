'use client'

import React from 'react'
import { useBrand } from '@/context/BrandContext'

interface BrandSwitcherProps {
  scrolled?: boolean
}

export default function BrandSwitcher({ scrolled = false }: BrandSwitcherProps) {
  const { activeBrand, setActiveBrand } = useBrand()

  return (
    <div className="flex items-center bg-dark-800/50 rounded-none p-0.5 border border-dark-600/50">
      <button
        onClick={() => setActiveBrand('shiok')}
        className={`px-3 py-1.5 text-[9px] font-body font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
          activeBrand === 'shiok'
            ? 'bg-shiok-600 text-white'
            : 'text-cream-300/60 hover:text-cream-100'
        }`}
      >
        Shiok Lah
      </button>
      <button
        onClick={() => setActiveBrand('nirmalya')}
        className={`px-3 py-1.5 text-[9px] font-body font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
          activeBrand === 'nirmalya'
            ? 'bg-nirmalya-600 text-white'
            : 'text-cream-300/60 hover:text-cream-100'
        }`}
      >
        Nirmalya Veg
      </button>
    </div>
  )
}
