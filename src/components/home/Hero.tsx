'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Star, Sparkles } from 'lucide-react'
import BrandLogo from '@/components/ui/BrandLogo'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative overflow-hidden bg-cream-100 pt-28 md:pt-32">
      <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-nirmalya-100/50 blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_.98fr] gap-10 lg:gap-16 items-center">
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="mb-7"><BrandLogo brand="nirmalya" size={66} withText /></div>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[10px] font-body font-bold tracking-[0.16em] uppercase text-nirmalya-700 shadow-sm"><MapPin size={13} /> Trichy, Tamil Nadu</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3.5 py-2 text-[10px] font-body font-bold tracking-[0.16em] uppercase text-gold-700 shadow-sm"><Star size={13} fill="currentColor" /> Authentic Asian flavours</span>
            </div>
            <h1 className="max-w-3xl font-display text-[3.15rem] sm:text-[4rem] lg:text-[5.1rem] font-semibold leading-[.98] tracking-[-.035em] text-dark-900">
              A taste of <span className="text-nirmalya-600 italic">Singapore</span>, made for Trichy.
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-8 text-dark-600">
              Discover soulful South East Asian cooking, from Singaporean and Malaysian classics to Thai-inspired favourites — now with a pure-vegetarian experience at Nirmalya Veg.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/menu" className="group inline-flex items-center gap-2 rounded-full bg-shiok-600 px-7 py-3.5 text-[11px] font-body font-bold tracking-[0.16em] uppercase text-white shadow-xl shadow-shiok-600/15 hover:-translate-y-1 hover:bg-shiok-700 transition-all">
                Explore Menus <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/our-story" className="inline-flex items-center gap-2 rounded-full border border-dark-900/15 bg-white/70 px-7 py-3.5 text-[11px] font-body font-bold tracking-[0.16em] uppercase text-dark-700 hover:-translate-y-1 hover:bg-white transition-all">Our Story</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-xs font-body font-semibold text-dark-500">
              <span className="inline-flex items-center gap-2"><Sparkles size={14} className="text-shiok-500" /> Crafted with care</span>
              <span>🌿 Pure vegetarian option</span>
              <span>🍜 Asian comfort food</span>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute -inset-4 rounded-[2rem] bg-white/60 rotate-2" />
            <div className="relative grid grid-cols-12 grid-rows-[190px_190px] md:grid-rows-[245px_245px] gap-3">
              <div className="col-span-7 row-span-2 overflow-hidden rounded-[1.75rem] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000&q=85" alt="Colourful South East Asian vegetarian food" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="col-span-5 overflow-hidden rounded-[1.75rem] shadow-xl">
                <img src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=85" alt="Asian noodles served at a restaurant" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="eager" />
              </div>
              <div className="col-span-5 overflow-hidden rounded-[1.75rem] shadow-xl">
                <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=85" alt="Fresh vegetarian Asian dish" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            </div>
            <div className="absolute -bottom-5 left-5 md:left-8 rounded-2xl bg-dark-900 px-5 py-4 text-white shadow-2xl">
              <p className="m-0 text-[10px] font-body font-semibold tracking-[0.16em] uppercase text-gold-300">Two experiences</p>
              <p className="m-0 mt-1 font-display text-xl">Shiok Lah · Nirmalya</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-dark-900/10 bg-white/60">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-4 flex flex-wrap items-center justify-between gap-3 text-[10px] font-body font-bold tracking-[0.14em] uppercase text-dark-500">
          <span>Singaporean</span><span>Malaysian</span><span>Thai-inspired</span><span>Pure Vegetarian</span><span>Freshly Prepared</span>
        </div>
      </div>
    </section>
  )
}
