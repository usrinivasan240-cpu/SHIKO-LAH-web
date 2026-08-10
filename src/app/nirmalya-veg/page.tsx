'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Leaf, Sprout, Salad } from 'lucide-react'

export default function NirmalyaVegPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-nirmalya-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nirmalya-800 via-nirmalya-900 to-dark-900 opacity-95" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 20L20 0l20 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-nirmalya-400" />
              <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-nirmalya-300">
                Vegetarian Cuisine
              </span>
            </div>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              NIRMALYA VEG
            </h1>
            <p className="text-xl md:text-2xl font-display text-nirmalya-300 mb-8">
              South East Asian Vegetarian Cuisine
            </p>
            <p className="text-lg font-body text-cream-200 max-w-2xl leading-relaxed mb-10">
              Nirmalya Veg reimagines Southeast Asian cuisine through the lens of vegetarian and plant-based dining. Creative alternatives like Veg Chicken, Veg Mutton, Veg Fish and Vegan preparations deliver the same bold flavours in an elegant, natural setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu?brand=nirmalya" className="btn-primary-nirmalya group">
                View Menu
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-outline border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-nirmalya-800">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding py-24 bg-ivory-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-nirmalya-500 mb-4">
              Our Specialities
            </p>
            <h2 className="font-display text-display-md md:text-display-lg text-dark-800 mb-6">
              Premium Vegetarian Southeast Asian Cuisine
            </h2>
            <div className="divider-nirmalya mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Plant-Based Alternatives',
                description: 'Veg Chicken, Veg Mutton, Veg Fish, Veg Prawns and Vegan Chicken — creative preparations that deliver authentic Southeast Asian taste.',
                icon: <Leaf size={32} />,
              },
              {
                title: 'Singaporean & Malaysian',
                description: 'Nasi Goreng, Mee Goreng, Pineapple Fried Rice and Satay-inspired dishes — all reimagined as premium vegetarian cuisine.',
                icon: <Sprout size={32} />,
              },
              {
                title: 'Thai-Inspired Dishes',
                description: 'Tom Yum, Thai Basil and stir-fried favourites — prepared with plant-based ingredients and aromatic Southeast Asian herbs.',
                icon: <Salad size={32} />,
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border-l-4 border-l-nirmalya-600 hover:shadow-lg transition-shadow duration-300">
                <div className="text-nirmalya-600 mb-4">{item.icon}</div>
                <h3 className="font-display text-display-xs text-dark-800 mb-3">{item.title}</h3>
                <p className="text-sm text-dark-500 font-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant-Based Focus */}
      <section className="section-padding py-24 bg-nirmalya-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 bg-nirmalya-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Leaf size={64} className="text-nirmalya-300 mx-auto mb-4" />
                  <p className="text-nirmalya-300 font-display text-lg">Plant-Based Excellence</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-nirmalya-300 mb-4">
                Creative Vegetarian
              </p>
              <h2 className="font-display text-display-md text-cream-50 mb-6">
                The Art of Plant-Based Southeast Asian Cuisine
              </h2>
              <p className="text-cream-200 font-body leading-relaxed mb-8">
                Nirmalya Veg proves that vegetarian dining can be just as bold, satisfying and adventurous as any cuisine. Our plant-based alternatives are crafted to deliver the authentic textures and flavours of Southeast Asian cooking — without compromise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Veg Chicken', 'Veg Mutton', 'Veg Fish', 'Veg Prawns'].map((protein) => (
                  <div key={protein} className="bg-nirmalya-700/50 px-4 py-3 text-center">
                    <span className="text-sm font-body font-semibold text-cream-100 tracking-wider uppercase">
                      {protein}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md text-cream-50 mb-6">
            Premium Vegetarian Dining
          </h2>
          <p className="text-cream-300 font-body text-lg mb-10">
            Explore the full Nirmalya Veg menu and discover plant-based Southeast Asian flavours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu?brand=nirmalya" className="btn-primary-nirmalya group">
              View Full Menu
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/shiok-lah" className="btn-outline border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-dark-800">
              Explore Shiok Lah
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
