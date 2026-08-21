'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Star, Sparkles } from 'lucide-react'
import BrandLogo from '@/components/ui/BrandLogo'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-cream-100 pt-[76px] lg:pt-[76px]">
      <div className="absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-gold-200/35 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-nirmalya-100/45 blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-9 md:py-12 lg:py-14 min-h-[calc(100svh-76px)] flex items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[.95fr_1.05fr] gap-9 lg:gap-14 xl:gap-20 items-center">
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="mb-5 md:mb-6"><BrandLogo brand="nirmalya" size={58} withText /></div>

            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-[10px] font-body font-bold tracking-[0.15em] uppercase text-nirmalya-700 shadow-sm border border-dark-900/5"><MapPin size={13} /> Trichy, Tamil Nadu</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 text-[10px] font-body font-bold tracking-[0.15em] uppercase text-gold-700 shadow-sm border border-dark-900/5"><Star size={13} fill="currentColor" /> Authentic Asian flavours</span>
            </div>

            <h1 className="max-w-2xl font-display text-[3rem] sm:text-[3.7rem] lg:text-[4.55rem] xl:text-[5rem] font-semibold leading-[.94] tracking-[-.045em] text-dark-900">
              Pure vegetarian.<br /><span className="text-nirmalya-600 italic">Singaporean soul.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] md:text-[17px] leading-7 md:leading-8 text-dark-600">
              Nirmalya brings the vibrant flavours of Singapore and South East Asia to Trichy — thoughtfully prepared as a pure-vegetarian dining experience.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/menu?brand=nirmalya" className="group inline-flex items-center gap-2 rounded-full bg-nirmalya-700 px-7 py-3.5 text-[11px] font-body font-bold tracking-[0.16em] uppercase text-white shadow-xl shadow-nirmalya-700/15 hover:-translate-y-1 hover:bg-nirmalya-800 transition-all">
                Explore Nirmalya Menu <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/location" className="inline-flex items-center gap-2 rounded-full border border-dark-900/15 bg-white/80 px-7 py-3.5 text-[11px] font-body font-bold tracking-[0.16em] uppercase text-dark-700 hover:-translate-y-1 hover:bg-white transition-all">Find Us</Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-body font-semibold text-dark-500">
              <span className="inline-flex items-center gap-2"><Sparkles size={14} className="text-gold-600" /> Freshly prepared</span>
              <span>🌿 100% vegetarian</span>
              <span>🍜 Asian-inspired</span>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute -inset-3 rounded-[2rem] bg-white/70 rotate-1.5" />
            <div className="relative grid grid-cols-12 grid-rows-[180px_180px] sm:grid-rows-[220px_220px] lg:grid-rows-[250px_250px] gap-3">
              <div className="col-span-7 row-span-2 overflow-hidden rounded-[1.8rem] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=88" alt="Colourful vegetarian Asian food served at Nirmalya" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="eager" />
              </div>
              <div className="col-span-5 overflow-hidden rounded-[1.8rem] shadow-xl">
                <img src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=900&q=88" alt="Asian noodles and vegetables" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="eager" />
              </div>
              <div className="col-span-5 overflow-hidden rounded-[1.8rem] shadow-xl">
                <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=900&q=88" alt="Fresh vegetarian Asian rice dish" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 md:left-7 rounded-2xl bg-dark-900 px-5 py-3.5 text-white shadow-2xl">
              <p className="m-0 text-[9px] font-body font-semibold tracking-[0.16em] uppercase text-gold-300">Nirmalya · Pure Veg</p>
              <p className="m-0 mt-1 font-display text-lg md:text-xl">Taste of Singapore</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-dark-900/10 bg-white/60">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 py-3.5 flex flex-wrap items-center justify-between gap-3 text-[10px] font-body font-bold tracking-[0.14em] uppercase text-dark-500">
          <span>Singaporean</span><span>Malaysian</span><span>Thai-inspired</span><span>Pure Vegetarian</span><span>Freshly Prepared</span>
        </div>
      </div>
    </section>
  )
}
