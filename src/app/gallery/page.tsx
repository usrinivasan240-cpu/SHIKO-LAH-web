'use client'

import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { id: 1, category: 'Food', alt: 'Signature Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80' },
  { id: 2, category: 'Interior', alt: 'Restaurant Ambience', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { id: 3, category: 'Food', alt: 'Chicken Curry', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80' },
  { id: 4, category: 'Food', alt: 'Vegetarian Platter', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },
  { id: 5, category: 'Interior', alt: 'Dining Area', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80' },
  { id: 6, category: 'Food', alt: 'Nasi Goreng', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80' },
  { id: 7, category: 'Kitchen', alt: 'Food Preparation', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80' },
  { id: 8, category: 'Food', alt: 'Noodles', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80' },
  { id: 9, category: 'Interior', alt: 'Evening Ambience', image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80' },
  { id: 10, category: 'Food', alt: 'Prawn Laksa', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&q=80' },
  { id: 11, category: 'Food', alt: 'Vegan Bowl', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },
  { id: 12, category: 'Interior', alt: 'Restaurant Exterior', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80' },
]

const categories = ['All', 'Food', 'Interior', 'Kitchen']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-dark-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80" alt="Gallery" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900 to-dark-900/80" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-24 w-full">
          <p className="text-[11px] font-body font-semibold tracking-[0.4em] uppercase text-gold-400 mb-4">Gallery</p>
          <h1 className="font-display text-[2.5rem] md:text-[3.5rem] text-cream-50 mb-4">Visual Journey</h1>
          <p className="text-cream-200/70 font-body text-lg max-w-xl">A glimpse into the world of Shiok Lah and Nirmalya Veg</p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding py-16 bg-cream-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[10px] font-body font-semibold tracking-wider uppercase transition-all ${activeCategory === cat ? 'bg-shiok-600 text-white' : 'bg-white text-dark-500 border border-cream-200 hover:bg-cream-100'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, index) => (
              <button key={img.id} onClick={() => setLightboxIndex(index)}
                className="relative aspect-square overflow-hidden group cursor-pointer bg-cream-200">
                <img src={img.image} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-all duration-300 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-body font-semibold tracking-wider uppercase">{img.category}</p>
                    <p className="text-sm font-body">{img.alt}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-dark-900/95 flex items-center justify-center">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-cream-100 hover:text-cream-50"><X size={28} /></button>
          <button onClick={() => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)} className="absolute left-6 text-cream-100 hover:text-cream-50"><ChevronLeft size={32} /></button>
          <div className="max-w-4xl w-full mx-16">
            <img src={filtered[lightboxIndex]?.image} alt={filtered[lightboxIndex]?.alt} className="w-full h-auto max-h-[80vh] object-contain" />
          </div>
          <button onClick={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)} className="absolute right-6 text-cream-100 hover:text-cream-50"><ChevronRight size={32} /></button>
          <div className="absolute bottom-6 text-cream-200 text-sm font-body">{filtered[lightboxIndex]?.alt}</div>
        </div>
      )}
    </>
  )
}
