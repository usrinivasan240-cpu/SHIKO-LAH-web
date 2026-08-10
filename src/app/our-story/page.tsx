'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function OurStoryPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-dark-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80" alt="Our Story" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 to-dark-900/80" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-24 w-full">
          <p className="text-[11px] font-body font-semibold tracking-[0.4em] uppercase text-gold-400 mb-4">Our Story</p>
          <h1 className="font-display text-[2.5rem] md:text-[3.5rem] text-cream-50 mb-4">The Heart Behind the Flavours</h1>
        </div>
      </section>

      <section className="section-padding py-24 bg-cream-50">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gold-400" />
              <span className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-shiok-600">Shiok Lah</span>
            </div>
            <h2 className="font-display text-[1.75rem] text-dark-800 mb-8">Born from a Love for Bold Flavours</h2>
            <div className="space-y-6 text-dark-600 font-body leading-relaxed text-[15px]">
              <p>Shiok Lah was born from a love for unapologetically bold South East Asian flavours — flavours that satisfy deeply and keep guests coming back.</p>
              <p>Our kitchen is rooted in street-style traditions and time-tested recipes from Singapore, Malaysia and Thailand. Every dish is built on intense marinades, slow-developed depth, balanced spices and generous portions.</p>
              <p className="text-lg font-display text-dark-800 italic">&ldquo;Food should feel rich, savoury, generous, authentic, bold and comforting.&rdquo;</p>
            </div>
          </div>

          <div className="w-full h-px bg-cream-200 my-16" />

          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-nirmalya-500" />
              <span className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-nirmalya-600">Nirmalya Veg</span>
            </div>
            <h2 className="font-display text-[1.75rem] text-dark-800 mb-8">The Same Bold Vision, Reimagined</h2>
            <div className="space-y-6 text-dark-600 font-body leading-relaxed text-[15px]">
              <p>Nirmalya Veg was created with a clear vision: to bring the same Southeast Asian flavour experience to vegetarian and plant-based dining — without compromise.</p>
              <p>We use creative vegetarian alternatives like Veg Chicken, Veg Mutton, Veg Fish, Veg Prawns and Vegan Chicken to recreate the textures and flavours that make Southeast Asian cuisine so beloved.</p>
              <p className="text-lg font-display text-dark-800 italic">&ldquo;Premium vegetarian cuisine that proves bold flavour knows no boundaries.&rdquo;</p>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/menu" className="px-8 py-3.5 bg-shiok-600 text-white text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-shiok-700 transition-colors inline-flex items-center gap-2">
              Explore Our Menu
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
