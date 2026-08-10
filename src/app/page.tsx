'use client'

import React from 'react'
import Hero from '@/components/home/Hero'
import BrandCards from '@/components/home/BrandCards'
import Features from '@/components/home/Features'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandCards />
      <Features />

      {/* Quick CTA Section */}
      <section className="section-padding py-24 bg-dark-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-shiok-400 mb-6">
            Ready to Experience the Flavours?
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-cream-50 mb-8">
            Your Table Awaits
          </h2>
          <p className="text-cream-300 font-body text-lg mb-10 max-w-2xl mx-auto">
            Whether you crave bold non-vegetarian Southeast Asian dishes or premium plant-based alternatives, we have a seat waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu" className="btn-primary group">
              View Full Menu
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-dark-800 group">
              <Phone size={14} className="mr-2" />
              Call to Order
            </a>
            <Link href="/location" className="inline-flex items-center gap-2 text-cream-300 hover:text-cream-50 text-sm font-body font-medium transition-colors">
              <MapPin size={14} />
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
