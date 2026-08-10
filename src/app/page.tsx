'use client'

import React from 'react'
import Hero from '@/components/home/Hero'
import BrandCards from '@/components/home/BrandCards'
import PopularPicks from '@/components/home/PopularPicks'
import Ambience from '@/components/home/Ambience'
import Features from '@/components/home/Features'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandCards />
      <PopularPicks />
      <Ambience />
      <Features />
    </>
  )
}
