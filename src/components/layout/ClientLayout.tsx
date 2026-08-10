'use client'

import React from 'react'
import { BrandProvider, useBrand } from '@/context/BrandContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

function BrandWrapper({ children }: { children: React.ReactNode }) {
  const { activeBrand } = useBrand()

  return (
    <div className={`min-h-screen ${activeBrand === 'nirmalya' ? 'nirmalya-active' : ''}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider>
      <BrandWrapper>{children}</BrandWrapper>
    </BrandProvider>
  )
}
