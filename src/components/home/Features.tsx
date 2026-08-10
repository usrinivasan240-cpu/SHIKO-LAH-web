'use client'

import React, { useEffect, useState, useRef } from 'react'

const features = [
  {
    title: 'Authentic Flavours',
    description: 'Recipes inspired by Singapore, Malaysia & Thailand',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 28V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Quality Ingredients',
    description: 'Fresh ingredients, bold spices and honest cooking',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 26L20 14L26 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 22H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'For Everyone',
    description: 'Separate veg & non-veg kitchens and dining areas',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="25" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 30C8 25.58 11.58 22 16 22H24C28.42 22 32 25.58 32 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Made With Passion',
    description: 'Every dish is crafted with love and attention to detail',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 28C20 28 10 22 10 16C10 13 12.5 10 16 10C18 10 19.5 11 20 12.5C20.5 11 22 10 24 10C27.5 10 30 13 30 16C30 22 20 28 20 28Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <section ref={ref} className="section-padding py-20 bg-cream-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 text-dark-600">
                {feature.icon}
              </div>
              <h3 className="font-display text-sm font-semibold text-dark-800 mb-2 tracking-wide uppercase">
                {feature.title}
              </h3>
              <p className="text-[11px] text-dark-400 font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
