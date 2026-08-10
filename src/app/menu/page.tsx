'use client'

import React, { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, X, Flame, Leaf, Drumstick, ArrowRight } from 'lucide-react'
import { allShiokLahMenu, allNirmalyaMenu, getCategories, MenuItem } from '@/data'

const filterOptions = [
  { label: 'All', value: 'all', icon: null },
  { label: 'Veg', value: 'veg', icon: <Leaf size={12} /> },
  { label: 'Non-Veg', value: 'non-veg', icon: <Drumstick size={12} /> },
  { label: 'Vegan', value: 'vegan', icon: <Leaf size={12} /> },
  { label: 'Spicy', value: 'spicy', icon: <Flame size={12} /> },
  { label: 'Chicken', value: 'chicken', icon: null },
  { label: 'Mutton', value: 'mutton', icon: null },
  { label: 'Fish', value: 'fish', icon: null },
  { label: 'Prawns', value: 'prawns', icon: null },
  { label: 'Rice', value: 'rice', icon: null },
  { label: 'Noodles', value: 'noodles', icon: null },
  { label: 'Singapore', value: 'singapore', icon: null },
  { label: 'Thai', value: 'thai', icon: null },
  { label: 'Western', value: 'western', icon: null },
]

function SpiceIndicator({ level }: { level?: 1 | 2 | 3 }) {
  if (!level) return null
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <Flame
          key={i}
          size={12}
          className={i <= level ? 'text-red-500 fill-red-500' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

function MenuCard({ item, brand }: { item: MenuItem; brand: 'shiok' | 'nirmalya' }) {
  const isShiok = brand === 'shiok'
  return (
    <div className="group bg-white overflow-hidden hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className={`relative h-48 overflow-hidden ${isShiok ? 'bg-shiok-100' : 'bg-nirmalya-100'}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-30">
            {item.type === 'non-veg' ? '🍗' : item.type === 'vegan' ? '🥬' : '🍛'}
          </span>
        </div>
        <div className={`absolute top-3 left-3 px-2 py-1 text-[10px] font-body font-bold tracking-wider uppercase ${
          item.type === 'non-veg' ? 'bg-red-500 text-white' : item.type === 'vegan' ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
        }`}>
          {item.type === 'non-veg' ? 'NON-VEG' : item.type === 'vegan' ? 'VEGAN' : 'VEG'}
        </div>
        {item.spiceLevel && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1">
            <SpiceIndicator level={item.spiceLevel} />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-base font-semibold text-dark-800 group-hover:text-shiok-600 transition-colors">
            {item.name}
          </h3>
          <span className={`text-sm font-body font-bold whitespace-nowrap ${isShiok ? 'text-shiok-600' : 'text-nirmalya-600'}`}>
            ₹{item.price}
          </span>
        </div>
        <p className="text-xs text-dark-400 font-body leading-relaxed mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-body font-semibold tracking-wider uppercase ${isShiok ? 'text-shiok-400' : 'text-nirmalya-400'}`}>
            {item.category}
          </span>
          <Link
            href={`/dish/${item.id}`}
            className={`text-[11px] font-body font-semibold tracking-wider uppercase inline-flex items-center gap-1 ${isShiok ? 'text-shiok-600 hover:text-shiok-700' : 'text-nirmalya-600 hover:text-nirmalya-700'}`}
          >
            View Details
            <ArrowRight size={10} />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MenuContent() {
  const searchParams = useSearchParams()
  const initialBrand = (searchParams.get('brand') as 'shiok' | 'nirmalya') || 'shiok'

  const [activeBrand, setActiveBrand] = useState<'shiok' | 'nirmalya'>(initialBrand)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const categories = useMemo(() => ['All', ...getCategories(activeBrand)], [activeBrand])

  const filteredMenu = useMemo(() => {
    const baseMenu = activeBrand === 'shiok' ? allShiokLahMenu : allNirmalyaMenu
    return baseMenu.filter((item) => {
      if (activeCategory !== 'All' && item.category !== activeCategory) return false
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch = item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query) || item.tags.some(tag => tag.toLowerCase().includes(query))
        if (!matchesSearch) return false
      }
      if (activeFilters.length > 0) {
        const matchesFilters = activeFilters.every(filter => {
          if (filter === 'spicy') return item.spiceLevel && item.spiceLevel >= 2
          return item.tags.includes(filter) || item.type === filter
        })
        if (!matchesFilters) return false
      }
      return true
    })
  }, [activeBrand, activeCategory, searchQuery, activeFilters])

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter])
  }

  return (
    <>
      <section className={`relative pt-32 pb-16 ${activeBrand === 'shiok' ? 'bg-shiok-800' : 'bg-nirmalya-800'}`}>
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-cream-300 mb-4">Our Menu</p>
            <h1 className="font-display text-display-md md:text-display-lg text-cream-50 mb-4">
              {activeBrand === 'shiok' ? 'SHIOK LAH' : 'NIRMALYA VEG'} Menu
            </h1>
            <p className="text-cream-200 font-body text-lg max-w-xl">
              {activeBrand === 'shiok' ? 'Explore our selection of bold South East Asian non-vegetarian dishes' : 'Discover our premium vegetarian and plant-based Southeast Asian cuisine'}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding py-12 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <button onClick={() => { setActiveBrand('shiok'); setActiveCategory('All'); setActiveFilters([]); }}
              className={`px-6 py-2.5 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-300 ${activeBrand === 'shiok' ? 'bg-shiok-600 text-white' : 'bg-cream-100 text-dark-500 hover:bg-cream-200'}`}>
              Shiok Lah
            </button>
            <button onClick={() => { setActiveBrand('nirmalya'); setActiveCategory('All'); setActiveFilters([]); }}
              className={`px-6 py-2.5 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-300 ${activeBrand === 'nirmalya' ? 'bg-nirmalya-600 text-white' : 'bg-cream-100 text-dark-500 hover:bg-cream-200'}`}>
              Nirmalya Veg
            </button>
          </div>

          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
            <input type="text" placeholder="Search menu items..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-cream-200 text-sm font-body text-dark-800 placeholder:text-dark-300 focus:outline-none focus:border-dark-300 transition-colors" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-600">
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-body font-semibold tracking-wider uppercase transition-all duration-200 ${activeCategory === cat ? (activeBrand === 'shiok' ? 'bg-shiok-600 text-white' : 'bg-nirmalya-600 text-white') : 'bg-white text-dark-500 hover:bg-cream-100 border border-cream-200'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {filterOptions.map((filter) => (
              <button key={filter.value} onClick={() => filter.value !== 'all' && toggleFilter(filter.value)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-body font-semibold tracking-wider uppercase transition-all duration-200 ${
                  filter.value === 'all' && activeFilters.length === 0
                    ? (activeBrand === 'shiok' ? 'bg-shiok-100 text-shiok-700 border border-shiok-300' : 'bg-nirmalya-100 text-nirmalya-700 border border-nirmalya-300')
                    : activeFilters.includes(filter.value)
                    ? (activeBrand === 'shiok' ? 'bg-shiok-600 text-white' : 'bg-nirmalya-600 text-white')
                    : 'bg-white text-dark-400 border border-cream-200 hover:bg-cream-50'
                }`}>
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-dark-400 font-body mb-6">
            Showing {filteredMenu.length} {filteredMenu.length === 1 ? 'item' : 'items'}
          </p>

          {filteredMenu.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMenu.map((item) => (
                <MenuCard key={item.id} item={item} brand={activeBrand} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-dark-400 font-body text-lg mb-4">No items found matching your criteria.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); setActiveFilters([]); }}
                className={`text-sm font-body font-semibold tracking-wider uppercase ${activeBrand === 'shiok' ? 'text-shiok-600' : 'text-nirmalya-600'}`}>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function MenuPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <p className="text-dark-400 font-body">Loading menu...</p>
      </div>
    }>
      <MenuContent />
    </Suspense>
  )
}
