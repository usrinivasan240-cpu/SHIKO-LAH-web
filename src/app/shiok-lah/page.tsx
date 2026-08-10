'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Utensils, Flame, ChefHat } from 'lucide-react'

export default function ShiokLahPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center bg-shiok-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-shiok-800 via-shiok-900 to-dark-900 opacity-95" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 20L20 0l20 20-20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-shiok-400" />
              <span className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-300">
                Non-Vegetarian Cuisine
              </span>
            </div>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              SHIOK LAH
            </h1>
            <p className="text-xl md:text-2xl font-display text-shiok-300 mb-8">
              South East Asian Non-Vegetarian Cuisine
            </p>
            <p className="text-lg font-body text-cream-200 max-w-2xl leading-relaxed mb-10">
              A destination for bold Southeast Asian flavours. Shiok Lah brings you the authentic tastes of Singapore, Malaysia and Thailand — with Chicken, Mutton, Fish and Prawns prepared with intense marinades, balanced spices and generous portions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu?brand=shiok" className="btn-primary group">
                View Menu
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="btn-outline border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-shiok-800">
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-shiok-500 mb-4">
              Our Specialities
            </p>
            <h2 className="font-display text-display-md md:text-display-lg text-dark-800 mb-6">
              Bold South East Asian Flavours
            </h2>
            <div className="divider-shiok mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Singaporean',
                description: 'Nasi Goreng, Mee Goreng, Laksa, Satay, Hokkien Mee and Hainanese Chicken Rice — authentic hawker-style flavours.',
                icon: <Utensils size={32} />,
              },
              {
                title: 'Malaysian & Thai',
                description: 'Mamak Mee Goreng, Tom Yum, Thai Basil Chicken, Cuka dishes and stir-fried favourites with bold Southeast Asian spices.',
                icon: <Flame size={32} />,
              },
              {
                title: 'Western Favourites',
                description: 'Pasta, Burgers, Hot Dogs, Aglio Olio and more — prepared with our signature Southeast Asian touch.',
                icon: <ChefHat size={32} />,
              },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white border-l-4 border-l-shiok-600 hover:shadow-lg transition-shadow duration-300">
                <div className="text-shiok-600 mb-4">{item.icon}</div>
                <h3 className="font-display text-display-xs text-dark-800 mb-3">{item.title}</h3>
                <p className="text-sm text-dark-500 font-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protein Focus */}
      <section className="section-padding py-24 bg-shiok-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-shiok-300 mb-4">
                Premium Proteins
              </p>
              <h2 className="font-display text-display-md text-cream-50 mb-6">
                Chicken, Mutton, Fish & Prawns
              </h2>
              <p className="text-cream-200 font-body leading-relaxed mb-8">
                Every dish at Shiok Lah is built around premium non-vegetarian ingredients. From tender chicken and succulent mutton to fresh fish and juicy prawns — each protein is treated with care, bold marinades and time-tested cooking techniques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Chicken', 'Mutton', 'Fish', 'Prawns'].map((protein) => (
                  <div key={protein} className="bg-shiok-700/50 px-4 py-3 text-center">
                    <span className="text-sm font-body font-semibold text-cream-100 tracking-wider uppercase">
                      {protein}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 bg-shiok-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Utensils size={64} className="text-shiok-300 mx-auto mb-4" />
                  <p className="text-shiok-300 font-display text-lg">Premium Dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-display-md text-cream-50 mb-6">
            Ready for Bold Flavours?
          </h2>
          <p className="text-cream-300 font-body text-lg mb-10">
            Explore the full Shiok Lah menu and discover your new favourite dish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/menu?brand=shiok" className="btn-primary group">
              View Full Menu
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/nirmalya-veg" className="btn-outline border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-dark-800">
              Explore Nirmalya Veg
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
