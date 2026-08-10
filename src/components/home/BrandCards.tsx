'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import BrandLogo from '@/components/ui/BrandLogo'

const brands = [
  {
    id: 'shiok',
    name: 'SHIOK LAH',
    tagline: 'South East Asian Non-Vegetarian Cuisine',
    description: 'Bold, rich and indulgent flavours with chicken, mutton, seafood & more.',
    bgImage: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    href: '/shiok-lah',
    menuHref: '/menu?brand=shiok',
    bgColor: 'from-shiok-800 via-shiok-900 to-dark-900',
    brand: 'shiok' as const,
  },
  {
    id: 'nirmalya',
    name: 'NIRMALYA VEG',
    tagline: 'South East Asian Vegetarian Cuisine',
    description: 'Wholesome, flavourful vegetarian & vegan dishes inspired by South East Asia.',
    bgImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    href: '/nirmalya-veg',
    menuHref: '/menu?brand=nirmalya',
    bgColor: 'from-nirmalya-800 via-nirmalya-900 to-dark-900',
    brand: 'nirmalya' as const,
  },
]

export default function BrandCards() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-padding py-24 bg-cream-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-[2rem] md:text-[2.5rem] text-dark-800 mb-3 leading-tight">
            TWO UNIQUE EXPERIENCES
          </h2>
          <p className="text-sm font-body text-dark-400 italic">Choose your flavour journey</p>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-6" />
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`group relative overflow-hidden transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background Image */}
              <div className={`absolute inset-0 bg-gradient-to-b ${brand.bgColor}`}>
                <img src={brand.bgImage} alt={brand.name} className="w-full h-full object-cover opacity-30 mix-blend-overlay" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-10 md:p-12 min-h-[420px] flex flex-col">
                {/* Logo */}
                <div className="mb-8">
                  <BrandLogo brand={brand.brand} size={80} />
                </div>

                {/* Brand Name */}
                <h3 className={`font-display text-[2rem] md:text-[2.25rem] mb-2 tracking-wide ${
                  brand.brand === 'shiok' ? 'text-gold-400' : 'text-nirmalya-400'
                }`}>
                  {brand.name}
                </h3>
                <p className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-cream-200/60 mb-6">
                  {brand.tagline}
                </p>

                {/* Description */}
                <p className="text-sm font-body text-cream-200/80 leading-relaxed mb-auto max-w-sm">
                  {brand.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link
                    href={brand.menuHref}
                    className="px-6 py-3 bg-gold-400 text-dark-900 text-[10px] font-body font-bold tracking-[0.2em] uppercase hover:bg-gold-300 transition-colors inline-flex items-center gap-2"
                  >
                    View Menu
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8l4 4-4 4M8 12h8" />
                    </svg>
                  </Link>
                  <Link
                    href={brand.href}
                    className="px-6 py-3 border border-cream-200/30 text-cream-200 text-[10px] font-body font-bold tracking-[0.2em] uppercase hover:bg-cream-200/10 transition-colors inline-flex items-center gap-2"
                  >
                    Discover More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8l4 4-4 4M8 12h8" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
