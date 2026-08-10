'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Ambience() {
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
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* Left - Content */}
        <div className="bg-dark-800 p-10 md:p-16 lg:p-20 flex items-center">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[11px] font-body font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4">
              Dine In Comfort
            </p>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] text-cream-50 mb-6 leading-tight">
              Great Ambience
              <br />
              Better Experience
            </h2>
            <p className="text-sm font-body text-cream-200/70 leading-relaxed mb-8 max-w-md">
              A warm and inviting space to enjoy your favourite South East Asian cuisines with your loved ones.
            </p>
            <Link
              href="/location"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-shiok-600 text-white text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-shiok-700 transition-colors group"
            >
              Visit Us Today
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right - Image */}
        <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
            alt="Restaurant Interior"
            className="w-full h-full object-cover min-h-[400px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
