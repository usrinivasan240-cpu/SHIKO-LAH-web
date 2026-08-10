'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/50 via-dark-800/80 to-shiok-900/20" />

      <div className="relative section-padding py-32 w-full">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-shiok-400" />
            <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-400">
              Trichy&apos;s Premier Dining
            </span>
            <div className="w-12 h-px bg-shiok-400" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-8 leading-[1.1]">
            Discover the Flavours
            <br />
            <span className="text-shiok-400">of South East Asia</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl font-body text-cream-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Authentic Singaporean, Malaysian and Thai-inspired cuisine brought to life in Trichy.
            Two distinct dining experiences, one commitment to extraordinary flavour.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shiok-lah"
              className="btn-primary group"
            >
              Shiok Lah — Non-Veg
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/nirmalya-veg"
              className="btn-primary-nirmalya group"
            >
              Nirmalya Veg — Veg
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-cream-300/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cream-300/50 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
