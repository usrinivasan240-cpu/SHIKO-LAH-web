'use client'

import React from 'react'
import { BrandProvider } from '@/context/BrandContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider>
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </BrandProvider>
  )
}
