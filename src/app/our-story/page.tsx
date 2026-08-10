'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-dark-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-shiok-900/20" />
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-400 mb-4">
              Our Story
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              The Heart Behind
              <br />
              <span className="text-shiok-400">the Flavours</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto">
          {/* Shiok Lah Story */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-shiok-500" />
              <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-shiok-500">
                Shiok Lah
              </span>
            </div>
            <h2 className="font-display text-display-sm md:text-display-md text-dark-800 mb-8">
              Born from a Love for Bold Flavours
            </h2>
            <div className="space-y-6 text-dark-600 font-body leading-relaxed text-[15px]">
              <p>
                Shiok Lah was born from a love for unapologetically bold South East Asian flavours — flavours that satisfy deeply and keep guests coming back. We believe food should be rich, savoury, generous and honest.
              </p>
              <p>
                Our kitchen is rooted in street-style traditions and time-tested recipes from Singapore, Malaysia and Thailand. Every dish is built on intense marinades, slow-developed depth, balanced spices and generous portions.
              </p>
              <p>
                From our signature Chicken Rice and Nasi Lemak to our bold Cuka dry fries and Western favourites, every plate tells a story of Southeast Asian culinary heritage — prepared with care and served with pride.
              </p>
              <p className="text-lg font-display text-dark-800 italic">
                &ldquo;Food should feel rich, savoury, generous, authentic, bold and comforting.&rdquo;
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-cream-200 my-16" />

          {/* Nirmalya Veg Story */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-nirmalya-500" />
              <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-nirmalya-500">
                Nirmalya Veg
              </span>
            </div>
            <h2 className="font-display text-display-sm md:text-display-md text-dark-800 mb-8">
              The Same Bold Vision, Reimagined
            </h2>
            <div className="space-y-6 text-dark-600 font-body leading-relaxed text-[15px]">
              <p>
                Nirmalya Veg was created with a clear vision: to bring the same Southeast Asian flavour experience to vegetarian and plant-based dining — without compromise.
              </p>
              <p>
                We use creative vegetarian alternatives like Veg Chicken, Veg Mutton, Veg Fish, Veg Prawns and Vegan Chicken to recreate the textures and flavours that make Southeast Asian cuisine so beloved.
              </p>
              <p>
                Every dish at Nirmalya Veg is crafted with the same attention to spice balance, depth of flavour and generous spirit that defines our sister restaurant. The result is a dining experience that feels premium, elegant and deeply satisfying.
              </p>
              <p className="text-lg font-display text-dark-800 italic">
                &ldquo;Premium vegetarian cuisine that proves bold flavour knows no boundaries.&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-8">
            <Link
              href="/menu"
              className="btn-primary group"
            >
              Explore Our Menu
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
