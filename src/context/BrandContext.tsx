'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Brand = 'shiok' | 'nirmalya'

interface BrandContextType {
  activeBrand: Brand
  setActiveBrand: (brand: Brand) => void
  isShiok: boolean
  isNirmalya: boolean
}

const BrandContext = createContext<BrandContextType | undefined>(undefined)

export function BrandProvider({ children }: { children: ReactNode }) {
  const [activeBrand, setActiveBrand] = useState<Brand>('shiok')

  return (
    <BrandContext.Provider value={{
      activeBrand,
      setActiveBrand,
      isShiok: activeBrand === 'shiok',
      isNirmalya: activeBrand === 'nirmalya',
    }}>
      {children}
    </BrandContext.Provider>
  )
}

export function useBrand() {
  const context = useContext(BrandContext)
  if (!context) throw new Error('useBrand must be used within BrandProvider')
  return context
}
