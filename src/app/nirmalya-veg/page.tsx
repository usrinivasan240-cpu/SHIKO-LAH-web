'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Leaf, Sprout, Salad } from 'lucide-react'

export default function NirmalyaVegPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-dark-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&q=80"
            alt="Nirmalya Veg"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/50" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-32 w-full">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-nirmalya-400" />
            <span className="text-[11px] font-body font-semibold tracking-[0.4em] uppercase text-nirmalya-400">
              Vegetarian Cuisine
            </span>
          </div>
          <h1 className="font-display text-[3rem] md:text-[4rem] text-cream-50 mb-4 leading-tight">
            NIRMALYA VEG
          </h1>
          <p className="text-xl font-display text-nirmalya-400 mb-8">
            South East Asian Vegetarian Cuisine
          </p>
          <p className="text-base font-body text-cream-200/80 max-w-xl leading-relaxed mb-10">
            Nirmalya Veg reimagines Southeast Asian cuisine through the lens of vegetarian and plant-based dining. Creative alternatives that deliver the same bold flavours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/menu?brand=nirmalya" className="px-8 py-3.5 bg-nirmalya-600 text-white text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-nirmalya-700 transition-colors inline-flex items-center gap-2">
              View Menu
              <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-cream-200/30 text-cream-200 text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-cream-200/10 transition-colors">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding py-24 bg-cream-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-[2rem] md:text-[2.5rem] text-dark-800 mb-4">
              Premium Vegetarian Southeast Asian Cuisine
            </h2>
            <div className="w-16 h-0.5 bg-nirmalya-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Plant-Based Alternatives', description: 'Veg Chicken, Veg Mutton, Veg Fish, Veg Prawns and Vegan Chicken preparations.', icon: <Leaf size={28} /> },
              { title: 'Singaporean & Malaysian', description: 'Nasi Goreng, Mee Goreng, Pineapple Fried Rice and more — reimagined as vegetarian.', icon: <Sprout size={28} /> },
              { title: 'Thai-Inspired Dishes', description: 'Tom Yum, Thai Basil and stir-fried favourites with plant-based ingredients.', icon: <Salad size={28} /> },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border-l-4 border-l-nirmalya-600 hover:shadow-lg transition-shadow">
                <div className="text-nirmalya-600 mb-4">{item.icon}</div>
                <h3 className="font-display text-lg text-dark-800 mb-3">{item.title}</h3>
                <p className="text-sm text-dark-500 font-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant-Based Focus */}
      <section className="section-padding py-24 bg-dark-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-nirmalya-400 mb-4">Creative Vegetarian</p>
              <h2 className="font-display text-[2rem] text-cream-50 mb-6">The Art of Plant-Based Southeast Asian Cuisine</h2>
              <p className="text-cream-200/70 font-body leading-relaxed mb-8">
                Nirmalya Veg proves that vegetarian dining can be just as bold, satisfying and adventurous. Our plant-based alternatives deliver authentic textures and flavours.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Veg Chicken', 'Veg Mutton', 'Veg Fish', 'Veg Prawns'].map((p) => (
                  <div key={p} className="bg-dark-700 px-4 py-3 text-center">
                    <span className="text-sm font-body font-semibold text-cream-100 tracking-wider uppercase">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" alt="Plant-Based Dining" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-nirmalya-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-[2rem] text-cream-50 mb-6">Premium Vegetarian Dining</h2>
          <Link href="/menu?brand=nirmalya" className="px-8 py-3.5 bg-dark-800 text-cream-50 text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-dark-900 transition-colors inline-flex items-center gap-2">
            View Full Menu
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
