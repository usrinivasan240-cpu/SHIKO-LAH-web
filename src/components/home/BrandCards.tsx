'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Utensils, Leaf } from 'lucide-react'

const brands = [
  {
    id: 'shiok',
    name: 'SHIOK LAH',
    tagline: 'South East Asian Non-Vegetarian Cuisine',
    description: 'Bold, unapologetically rich Southeast Asian flavours that satisfy deeply. Chicken, Mutton, Fish and Prawns prepared with intense marinades, balanced spices and time-tested recipes.',
    image: '/images/shiok-hero.jpg',
    color: 'shiok',
    features: ['Singaporean', 'Malaysian', 'Thai', 'Western'],
    href: '/shiok-lah',
    menuHref: '/menu?brand=shiok',
    Icon: Utensils,
  },
  {
    id: 'nirmalya',
    name: 'NIRMALYA VEG',
    tagline: 'South East Asian Vegetarian Cuisine',
    description: 'Premium vegetarian and plant-based reinterpretation of Southeast Asian cuisine. Creative alternatives using Veg Chicken, Veg Mutton, Veg Fish and Vegan preparations.',
    image: '/images/nirmalya-hero.jpg',
    color: 'nirmalya',
    features: ['Vegan', 'Plant-Based', 'Singaporean', 'Thai'],
    href: '/nirmalya-veg',
    menuHref: '/menu?brand=nirmalya',
    Icon: Leaf,
  },
]

export default function BrandCards() {
  return (
    <section className="section-padding py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-shiok-500 mb-4">
            Two Premium Experiences
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-dark-800 mb-6">
            Choose Your Journey
          </h2>
          <div className="divider-shiok mx-auto" />
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brands.map((brand) => {
            const isShiok = brand.color === 'shiok'
            return (
              <div
                key={brand.id}
                className={`group relative overflow-hidden bg-white transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] ${
                  isShiok ? 'border-l-4 border-l-shiok-600' : 'border-l-4 border-l-nirmalya-600'
                }`}
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 ${
                    isShiok
                      ? 'bg-gradient-to-br from-shiok-800/90 to-shiok-900/95'
                      : 'bg-gradient-to-br from-nirmalya-800/90 to-nirmalya-900/95'
                  }`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <brand.Icon size={48} className="mx-auto mb-4 opacity-80" />
                      <span className="text-4xl font-display font-bold block">{brand.name.split(' ')[0]}</span>
                      <span className="text-lg font-display">{brand.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className={`text-xs font-body font-semibold tracking-[0.2em] uppercase mb-2 ${
                    isShiok ? 'text-shiok-600' : 'text-nirmalya-600'
                  }`}>
                    {brand.tagline}
                  </p>
                  <h3 className="font-display text-display-sm text-dark-800 mb-4">
                    {brand.name}
                  </h3>
                  <p className="text-dark-500 font-body text-sm leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {brand.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase ${
                          isShiok
                            ? 'bg-shiok-50 text-shiok-700 border border-shiok-200'
                            : 'bg-nirmalya-50 text-nirmalya-700 border border-nirmalya-200'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={brand.menuHref}
                      className={`flex-1 inline-flex items-center justify-center px-6 py-3 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-300 ${
                        isShiok
                          ? 'bg-shiok-600 text-white hover:bg-shiok-700'
                          : 'bg-nirmalya-600 text-white hover:bg-nirmalya-700'
                      }`}
                    >
                      Explore Menu
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                    <Link
                      href={brand.href}
                      className={`flex-1 inline-flex items-center justify-center px-6 py-3 text-xs font-body font-semibold tracking-wider uppercase border-2 transition-all duration-300 ${
                        isShiok
                          ? 'border-shiok-600 text-shiok-600 hover:bg-shiok-600 hover:text-white'
                          : 'border-nirmalya-600 text-nirmalya-600 hover:bg-nirmalya-600 hover:text-white'
                      }`}
                    >
                      Discover Restaurant
                      <ArrowRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
