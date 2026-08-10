'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1600&q=80"
          alt="Southeast Asian Cuisine"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/90 to-dark-900/40" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Overline */}
            <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="w-12 h-px bg-gold-400" />
              <span className="text-[11px] font-body font-semibold tracking-[0.4em] uppercase text-gold-400">
                Trichy&apos;s Premier Dining
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={`mb-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="block text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-display font-bold text-cream-50 leading-[1.1] tracking-tight">
                DISCOVER THE
              </span>
              <span className="block text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-display font-bold text-gold-400 leading-[1.1] tracking-tight">
                FLAVOURS OF
              </span>
              <span className="block text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-display font-bold text-cream-50 leading-[1.1] tracking-tight">
                SOUTH EAST ASIA
              </span>
            </h1>

            {/* Decorative Line */}
            <div className={`flex items-center gap-3 mb-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              <div className="w-16 h-px bg-gold-400" />
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold-400">
                <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="currentColor" />
              </svg>
              <div className="w-16 h-px bg-gold-400" />
            </div>

            {/* Subheading */}
            <p className={`text-base md:text-lg font-body text-cream-200/80 max-w-lg leading-relaxed mb-10 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Experience authentic Singaporean, Malaysian & Thai flavours crafted with passion in Trichy.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link
                href="/menu"
                className="group px-8 py-3.5 bg-shiok-600 text-white text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-shiok-700 transition-all duration-300 inline-flex items-center gap-2"
              >
                Explore Our Menus
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/our-story"
                className="px-8 py-3.5 border border-cream-200/30 text-cream-200 text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-cream-200/10 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right - Food Images Grid */}
          <div className={`hidden lg:grid grid-cols-2 gap-4 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              <div className="relative h-64 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80"
                  alt="Biryani"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-48 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80"
                  alt="Noodles"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80"
                  alt="Chicken Dish"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-64 overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80"
                  alt="Indian Food"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-5 h-8 border border-cream-300/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cream-300/40 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
