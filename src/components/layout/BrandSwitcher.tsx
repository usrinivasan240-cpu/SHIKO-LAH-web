'use client'

import React from 'react'
import { useBrand } from '@/context/BrandContext'

export default function BrandSwitcher() {
  const { activeBrand, setActiveBrand } = useBrand()

  return (
    <div className="flex items-center bg-cream-100 rounded-none p-0.5 border border-cream-200">
      <button
        onClick={() => setActiveBrand('shiok')}
        className={`px-4 py-1.5 text-[11px] font-body font-semibold tracking-widest uppercase transition-all duration-300 ${
          activeBrand === 'shiok'
            ? 'bg-shiok-600 text-white'
            : 'text-dark-500 hover:text-dark-700'
        }`}
      >
        Shiok Lah
      </button>
      <button
        onClick={() => setActiveBrand('nirmalya')}
        className={`px-4 py-1.5 text-[11px] font-body font-semibold tracking-widest uppercase transition-all duration-300 ${
          activeBrand === 'nirmalya'
            ? 'bg-nirmalya-600 text-white'
            : 'text-dark-500 hover:text-dark-700'
        }`}
      >
        Nirmalya Veg
      </button>
    </div>
  )
}
