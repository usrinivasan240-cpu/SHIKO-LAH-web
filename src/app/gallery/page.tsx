'use client'

import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { id: 1, category: 'Food', brand: 'both', alt: 'Signature Southeast Asian dish' },
  { id: 2, category: 'Interior', brand: 'both', alt: 'Restaurant interior' },
  { id: 3, category: 'Food', brand: 'shiok', alt: 'Non-vegetarian platter' },
  { id: 4, category: 'Food', brand: 'nirmalya', alt: 'Vegetarian Southeast Asian dish' },
  { id: 5, category: 'Ambiance', brand: 'both', alt: 'Dining atmosphere' },
  { id: 6, category: 'Food', brand: 'shiok', alt: 'Chicken Rice' },
  { id: 7, category: 'Kitchen', brand: 'both', alt: 'Kitchen preparation' },
  { id: 8, category: 'Food', brand: 'nirmalya', alt: 'Plant-based Nasi Goreng' },
  { id: 9, category: 'Interior', brand: 'both', alt: 'Restaurant seating area' },
  { id: 10, category: 'Food', brand: 'shiok', alt: 'Prawn Laksa' },
  { id: 11, category: 'Food', brand: 'nirmalya', alt: 'Vegan drumstick' },
  { id: 12, category: 'Ambiance', brand: 'both', alt: 'Evening dining setup' },
]

const categories = ['All', 'Food', 'Interior', 'Ambiance', 'Kitchen']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length)
    }
  }

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-shiok-900/20" />
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-400 mb-4">
              Gallery
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              Visual Journey
            </h1>
            <p className="text-cream-200 font-body text-lg max-w-xl">
              A glimpse into the world of Shiok Lah and Nirmalya Veg
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-shiok-600 text-white'
                    : 'bg-white text-dark-500 hover:bg-cream-100 border border-cream-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((img, index) => (
              <button
                key={img.id}
                onClick={() => openLightbox(index)}
                className={`relative aspect-square overflow-hidden group cursor-pointer ${
                  img.brand === 'shiok' ? 'bg-shiok-100' : img.brand === 'nirmalya' ? 'bg-nirmalya-100' : 'bg-cream-200'
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                    {img.category === 'Food' ? '🍽' : img.category === 'Interior' ? '🏠' : img.category === 'Kitchen' ? '👨‍🍳' : '✨'}
                  </span>
                </div>
                <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/40 transition-all duration-300 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-body font-semibold tracking-wider uppercase">{img.category}</p>
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
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream-100 hover:text-cream-50 transition-colors"
          >
            <X size={28} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-6 text-cream-100 hover:text-cream-50 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="max-w-3xl w-full mx-16 aspect-square bg-dark-800 flex items-center justify-center">
            <span className="text-8xl opacity-30">🍽</span>
          </div>
          <button
            onClick={nextImage}
            className="absolute right-6 text-cream-100 hover:text-cream-50 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-6 text-cream-200 text-sm font-body">
            {filtered[lightboxIndex]?.alt}
          </div>
        </div>
      )}
    </>
  )
}
