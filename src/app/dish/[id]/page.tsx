'use client'

import React, { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Flame, Leaf, Phone, MessageCircle, ShoppingCart } from 'lucide-react'
import { allShiokLahMenu, allNirmalyaMenu, MenuItem } from '@/data'

function SpiceIndicator({ level }: { level?: 1 | 2 | 3 }) {
  if (!level) return null
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          size={16}
          className={i <= level ? 'text-red-500 fill-red-500' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export default function DishDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const allItems = [...allShiokLahMenu, ...allNirmalyaMenu]
  const dish = allItems.find(item => item.id === id)

  if (!dish) {
    return (
      <section className="section-padding py-32 bg-cream-50 text-center">
        <h1 className="font-display text-display-md text-dark-800 mb-4">Dish Not Found</h1>
        <p className="text-dark-500 font-body mb-8">The dish you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/menu" className="btn-primary">Back to Menu</Link>
      </section>
    )
  }

  const isShiok = dish.brand === 'shiok'
  const relatedDishes = (isShiok ? allShiokLahMenu : allNirmalyaMenu)
    .filter(item => item.id !== dish.id && item.category === dish.category)
    .slice(0, 4)

  return (
    <>
      {/* Breadcrumb */}
      <div className={`pt-28 pb-4 ${isShiok ? 'bg-shiok-800' : 'bg-nirmalya-800'}`}>
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-cream-300 text-xs font-body">
              <Link href="/" className="hover:text-cream-50 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/menu" className="hover:text-cream-50 transition-colors">Menu</Link>
              <span>/</span>
              <span className="text-cream-100">{dish.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dish Detail */}
      <section className="section-padding py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className={`relative h-96 lg:h-[500px] overflow-hidden ${
              isShiok ? 'bg-shiok-100' : 'bg-nirmalya-100'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl opacity-30">
                  {dish.type === 'non-veg' ? '🍗' : dish.type === 'vegan' ? '🥬' : '🍛'}
                </span>
              </div>
              {/* Type Badge */}
              <div className={`absolute top-4 left-4 px-3 py-1.5 text-xs font-body font-bold tracking-wider uppercase ${
                dish.type === 'non-veg'
                  ? 'bg-red-500 text-white'
                  : dish.type === 'vegan'
                  ? 'bg-green-600 text-white'
                  : 'bg-green-500 text-white'
              }`}>
                {dish.type === 'non-veg' ? 'NON-VEG' : dish.type === 'vegan' ? 'VEGAN' : 'VEG'}
              </div>
            </div>

            {/* Details */}
            <div>
              <span className={`text-xs font-body font-semibold tracking-[0.2em] uppercase ${
                isShiok ? 'text-shiok-600' : 'text-nirmalya-600'
              }`}>
                {dish.category}
              </span>
              <h1 className="font-display text-display-sm md:text-display-md text-dark-800 mt-2 mb-4">
                {dish.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className={`text-2xl font-display font-bold ${
                  isShiok ? 'text-shiok-600' : 'text-nirmalya-600'
                }`}>
                  ₹{dish.price}
                </span>
                {dish.spiceLevel && (
                  <div className="flex items-center gap-2">
                    <SpiceIndicator level={dish.spiceLevel} />
                    <span className="text-xs text-dark-400 font-body">
                      {dish.spiceLevel === 1 ? 'Mild' : dish.spiceLevel === 2 ? 'Medium' : 'Hot'}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-dark-500 font-body leading-relaxed mb-8">
                {dish.description}
              </p>

              {/* Variants */}
              {dish.variants && dish.variants.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-body font-semibold text-dark-700 mb-3 tracking-wider uppercase">
                    Available Variants
                  </h3>
                  <div className="space-y-2">
                    {dish.variants.map((variant) => (
                      <div key={variant.name} className="flex items-center justify-between p-3 bg-white border border-cream-200">
                        <span className="text-sm font-body text-dark-700">{variant.name}</span>
                        <span className={`text-sm font-body font-bold ${isShiok ? 'text-shiok-600' : 'text-nirmalya-600'}`}>
                          ₹{variant.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {dish.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-body font-semibold tracking-wider uppercase bg-cream-100 text-dark-500 border border-cream-200">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-6 py-3 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-300 ${
                    isShiok
                      ? 'bg-shiok-600 text-white hover:bg-shiok-700'
                      : 'bg-nirmalya-600 text-white hover:bg-nirmalya-700'
                  }`}
                >
                  <MessageCircle size={14} />
                  Order on WhatsApp
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center justify-center gap-2 px-6 py-3 text-xs font-body font-semibold tracking-wider uppercase border-2 border-dark-800 text-dark-800 hover:bg-dark-800 hover:text-cream-50 transition-all duration-300"
                >
                  <Phone size={14} />
                  Call to Order
                </a>
                <Link
                  href={`/menu?brand=${dish.brand}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-xs font-body font-semibold tracking-wider uppercase text-dark-500 hover:text-dark-700 transition-colors"
                >
                  <ArrowLeft size={14} />
                  Back to Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Dishes */}
      {relatedDishes.length > 0 && (
        <section className="section-padding py-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-display-sm text-dark-800 mb-8">
              More from {dish.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDishes.map((item) => (
                <Link key={item.id} href={`/dish/${item.id}`} className="group">
                  <div className={`h-40 ${isShiok ? 'bg-shiok-100' : 'bg-nirmalya-100'} flex items-center justify-center mb-3`}>
                    <span className="text-4xl opacity-30">
                      {item.type === 'non-veg' ? '🍗' : item.type === 'vegan' ? '🥬' : '🍛'}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-semibold text-dark-800 group-hover:text-shiok-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className={`text-sm font-body font-bold ${isShiok ? 'text-shiok-600' : 'text-nirmalya-600'}`}>
                    ₹{item.price}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
