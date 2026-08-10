'use client'

import React, { use } from 'react'
import Link from 'next/link'
import { ArrowLeft, Flame, Phone, MessageCircle } from 'lucide-react'
import { allShiokLahMenu, allNirmalyaMenu } from '@/data'

const foodImages: Record<string, string> = {
  'chicken': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
  'mutton': 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',
  'fish': 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=80',
  'prawns': 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=80',
  'noodles': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
  'rice': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80',
  'soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
  'pasta': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
  'vegan': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
}

function getImage(tags: string[], type: string, category: string): string {
  for (const [key, url] of Object.entries(foodImages)) {
    if (tags.includes(key)) return url
  }
  if (type === 'vegan') return foodImages.vegan
  if (category.toLowerCase().includes('pasta') || category.toLowerCase().includes('aglio')) return foodImages.pasta
  if (category.toLowerCase().includes('soup')) return foodImages.soup
  if (category.toLowerCase().includes('noodle')) return foodImages.noodles
  if (category.toLowerCase().includes('rice')) return foodImages.rice
  return foodImages.default
}

function SpiceIndicator({ level }: { level?: 1 | 2 | 3 }) {
  if (!level) return null
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((i) => (
        <Flame key={i} size={16} className={i <= level ? 'text-red-500 fill-red-500' : 'text-gray-300'} />
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
        <h1 className="font-display text-[2rem] text-dark-800 mb-4">Dish Not Found</h1>
        <Link href="/menu" className="px-8 py-3 bg-shiok-600 text-white text-xs font-body font-semibold tracking-wider uppercase">Back to Menu</Link>
      </section>
    )
  }

  const isShiok = dish.brand === 'shiok'
  const imageUrl = getImage(dish.tags, dish.type, dish.category)
  const relatedDishes = (isShiok ? allShiokLahMenu : allNirmalyaMenu)
    .filter(item => item.id !== dish.id && item.category === dish.category)
    .slice(0, 4)

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-dark-900">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center gap-2 text-cream-300/60 text-xs font-body">
            <Link href="/" className="hover:text-cream-50">Home</Link>
            <span>/</span>
            <Link href="/menu" className="hover:text-cream-50">Menu</Link>
            <span>/</span>
            <span className="text-cream-100">{dish.name}</span>
          </div>
        </div>
      </div>

      {/* Dish Detail */}
      <section className="section-padding py-16 bg-cream-50">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative h-96 lg:h-[450px] overflow-hidden bg-cream-100">
              <img src={imageUrl} alt={dish.name} className="w-full h-full object-cover" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 text-[10px] font-body font-bold tracking-wider uppercase ${
                dish.type === 'non-veg' ? 'bg-red-500 text-white' : dish.type === 'vegan' ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
              }`}>
                {dish.type === 'non-veg' ? 'NON-VEG' : dish.type === 'vegan' ? 'VEGAN' : 'VEG'}
              </div>
            </div>

            {/* Details */}
            <div>
              <span className={`text-[10px] font-body font-semibold tracking-[0.25em] uppercase ${isShiok ? 'text-shiok-600' : 'text-nirmalya-600'}`}>
                {dish.category}
              </span>
              <h1 className="font-display text-[1.75rem] text-dark-800 mt-2 mb-4">{dish.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <span className={`text-2xl font-display font-bold ${isShiok ? 'text-shiok-600' : 'text-nirmalya-600'}`}>₹{dish.price}</span>
                {dish.spiceLevel && (
                  <div className="flex items-center gap-2">
                    <SpiceIndicator level={dish.spiceLevel} />
                    <span className="text-xs text-dark-400 font-body">
                      {dish.spiceLevel === 1 ? 'Mild' : dish.spiceLevel === 2 ? 'Medium' : 'Hot'}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-dark-500 font-body leading-relaxed mb-8">{dish.description}</p>

              {dish.variants && dish.variants.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xs font-body font-semibold text-dark-700 mb-3 tracking-wider uppercase">Available Variants</h3>
                  <div className="space-y-2">
                    {dish.variants.map((variant) => (
                      <div key={variant.name} className="flex items-center justify-between p-3 bg-white border border-cream-200">
                        <span className="text-sm font-body text-dark-700">{variant.name}</span>
                        <span className={`text-sm font-body font-bold ${isShiok ? 'text-shiok-600' : 'text-nirmalya-600'}`}>₹{variant.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {dish.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[9px] font-body font-semibold tracking-wider uppercase bg-cream-100 text-dark-500 border border-cream-200">{tag}</span>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-body font-semibold tracking-wider uppercase transition-all ${isShiok ? 'bg-shiok-600 text-white hover:bg-shiok-700' : 'bg-nirmalya-600 text-white hover:bg-nirmalya-700'}`}>
                  <MessageCircle size={14} />
                  Order on WhatsApp
                </a>
                <a href="tel:+91XXXXXXXXXX"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 text-[11px] font-body font-semibold tracking-wider uppercase border border-dark-800 text-dark-800 hover:bg-dark-800 hover:text-cream-50 transition-all">
                  <Phone size={14} />
                  Call to Order
                </a>
                <Link href={`/menu?brand=${dish.brand}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-body font-semibold tracking-wider uppercase text-dark-500 hover:text-dark-700 transition-colors">
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
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display text-[1.5rem] text-dark-800 mb-8">More from {dish.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDishes.map((item) => (
                <Link key={item.id} href={`/dish/${item.id}`} className="group">
                  <div className="h-40 bg-cream-100 overflow-hidden mb-3">
                    <img src={getImage(item.tags, item.type, item.category)} alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-dark-800 group-hover:text-shiok-600 transition-colors">{item.name}</h3>
                  <span className={`text-sm font-display font-bold ${isShiok ? 'text-shiok-600' : 'text-nirmalya-600'}`}>₹{item.price}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
