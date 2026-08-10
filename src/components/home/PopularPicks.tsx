'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const popularDishes = [
  {
    name: 'Nasi Goreng Pattaya',
    description: 'Egg wrapped fried rice with prawns',
    price: 350,
    brand: 'shiok',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80',
  },
  {
    name: 'Laksa Soup',
    description: 'Creamy coconut noodle soup with prawns',
    price: 350,
    brand: 'shiok',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80',
  },
  {
    name: 'Veg Mutton Nasi Goreng',
    description: 'Aromatic fried rice with mock mutton',
    price: 300,
    brand: 'nirmalya',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80',
  },
  {
    name: 'Veg Prawn Mee Goreng',
    description: 'Stir fried noodles with veg prawns',
    price: 330,
    brand: 'nirmalya',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80',
  },
  {
    name: 'Chicken Bolognese',
    description: 'Classic Italian style pasta',
    price: 330,
    brand: 'shiok',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80',
  },
  {
    name: 'Pineapple Fried Rice',
    description: 'Thai style pineapple fried rice',
    price: 320,
    brand: 'nirmalya',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80',
  },
  {
    name: 'Mee Goreng',
    description: 'Spicy fried noodles with chicken',
    price: 280,
    brand: 'shiok',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80',
  },
]

export default function PopularPicks() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

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

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const cardWidth = 240
    const newIndex = direction === 'right'
      ? Math.min(currentIndex + 1, popularDishes.length - 3)
      : Math.max(currentIndex - 1, 0)
    setCurrentIndex(newIndex)
    scrollRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth',
    })
  }

  return (
    <section ref={ref} className="section-padding py-20 bg-cream-50">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className={`flex items-end justify-between mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h2 className="font-display text-[2rem] md:text-[2.5rem] text-dark-800 mb-2 leading-tight">
              POPULAR PICKS
            </h2>
            <div className="w-16 h-0.5 bg-gold-400" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollTo('left')}
              className="w-10 h-10 border border-dark-200 flex items-center justify-center text-dark-500 hover:bg-dark-800 hover:text-cream-50 hover:border-dark-800 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className="w-10 h-10 border border-dark-200 flex items-center justify-center text-dark-500 hover:bg-dark-800 hover:text-cream-50 hover:border-dark-800 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className={`flex gap-6 overflow-x-auto no-scrollbar pb-4 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {popularDishes.map((dish, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[220px] bg-white group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-cream-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="font-display text-sm font-semibold text-dark-800 mb-1 group-hover:text-shiok-600 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-[11px] text-dark-400 font-body mb-3 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-display font-bold text-dark-800">
                    ₹{dish.price}
                  </span>
                  <span className={`text-[9px] font-body font-bold tracking-wider uppercase px-2 py-1 ${
                    dish.brand === 'shiok'
                      ? 'bg-shiok-600 text-white'
                      : 'bg-nirmalya-600 text-white'
                  }`}>
                    {dish.brand === 'shiok' ? 'Shiok Lah' : 'Nirmalya Veg'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
