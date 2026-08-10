'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight, Utensils, Leaf } from 'lucide-react'

export default function OrderPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-shiok-900/20" />
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-400 mb-4">
              Order or Reserve
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              How Would You Like to Order?
            </h1>
            <p className="text-cream-200 font-body text-lg max-w-2xl mx-auto mb-12">
              Choose your preferred way to enjoy our Southeast Asian cuisine
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Call to Order */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="group bg-white/5 hover:bg-white/10 border border-white/10 p-8 text-center transition-all duration-300"
              >
                <Phone size={32} className="text-shiok-400 mx-auto mb-4" />
                <h3 className="font-display text-lg text-cream-50 mb-2">Call to Order</h3>
                <p className="text-sm text-cream-300 font-body">+91 XXXXX XXXXX</p>
                <p className="text-xs text-cream-400 font-body italic mt-2">Number to be verified</p>
              </a>

              {/* WhatsApp Order */}
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 border border-white/10 p-8 text-center transition-all duration-300"
              >
                <MessageCircle size={32} className="text-nirmalya-400 mx-auto mb-4" />
                <h3 className="font-display text-lg text-cream-50 mb-2">WhatsApp Order</h3>
                <p className="text-sm text-cream-300 font-body">Message us on WhatsApp</p>
                <p className="text-xs text-cream-400 font-body italic mt-2">Link to be verified</p>
              </a>
            </div>

            {/* Brand Menus */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link
                href="/menu?brand=shiok"
                className="group flex items-center gap-4 bg-shiok-800/50 hover:bg-shiok-800 border border-shiok-700 p-6 transition-all duration-300"
              >
                <Utensils size={24} className="text-shiok-300" />
                <div className="text-left flex-1">
                  <h3 className="font-display text-lg text-cream-50">Shiok Lah Menu</h3>
                  <p className="text-xs text-shiok-300 font-body">Non-Vegetarian</p>
                </div>
                <ArrowRight size={16} className="text-shiok-400 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/menu?brand=nirmalya"
                className="group flex items-center gap-4 bg-nirmalya-800/50 hover:bg-nirmalya-800 border border-nirmalya-700 p-6 transition-all duration-300"
              >
                <Leaf size={24} className="text-nirmalya-300" />
                <div className="text-left flex-1">
                  <h3 className="font-display text-lg text-cream-50">Nirmalya Veg Menu</h3>
                  <p className="text-xs text-nirmalya-300 font-body">Vegetarian</p>
                </div>
                <ArrowRight size={16} className="text-nirmalya-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-xs text-cream-400 font-body italic mt-8">
              Online ordering coming soon. Third-party delivery links will be added when available.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
