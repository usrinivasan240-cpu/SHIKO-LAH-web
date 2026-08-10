'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'

export default function Features() {
  return (
    <section className="section-padding py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-shiok-500 mb-4">
            Why Dine With Us
          </p>
          <h2 className="font-display text-display-md md:text-display-lg text-dark-800 mb-6">
            An Experience Like No Other
          </h2>
          <div className="divider-shiok mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Authentic Flavours',
              description: 'Time-tested recipes from Singapore, Malaysia and Thailand, prepared with traditional techniques and bold spices.',
              icon: '🌶',
            },
            {
              title: 'Two Distinct Menus',
              description: 'A premium non-vegetarian experience and a dedicated vegetarian dining concept, both rooted in Southeast Asian cuisine.',
              icon: '🍽',
            },
            {
              title: 'Premium Ingredients',
              description: 'Fresh Chicken, Mutton, Fish, Prawns and plant-based alternatives sourced for quality and taste.',
              icon: '✨',
            },
            {
              title: 'Heart of Trichy',
              description: 'Located in Srinivasa Nagar, Woraiyur — a destination for authentic Southeast Asian dining in the city.',
              icon: '📍',
            },
          ].map((feature, i) => (
            <div key={i} className="text-center p-8 group hover:bg-cream-50 transition-colors duration-300">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="font-display text-display-xs text-dark-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-dark-500 font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/our-story"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold tracking-wider uppercase text-shiok-600 hover:text-shiok-700 transition-colors"
          >
            Read Our Story
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
