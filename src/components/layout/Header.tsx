'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown, ShoppingBag, MapPin } from 'lucide-react'
import BrandLogo from '@/components/ui/BrandLogo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Menus', href: '/menu', hasDropdown: true },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Offers', href: '/offers' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream-50/95 backdrop-blur-xl border-b border-dark-900/10 shadow-[0_8px_35px_rgba(30,24,21,.08)]' : 'bg-cream-50/85 backdrop-blur-md'}`}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-[76px]">
            <Link href="/" className="flex items-center gap-3" aria-label="Shiok Lah home">
              <BrandLogo brand="shiok" size={43} withText />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div key={link.href} className="relative" onMouseEnter={() => link.hasDropdown && setMenuOpen(true)} onMouseLeave={() => link.hasDropdown && setMenuOpen(false)}>
                  <Link href={link.href} className="flex items-center gap-1 px-3.5 py-2.5 rounded-full text-[11px] font-body font-semibold tracking-[0.12em] uppercase text-dark-700 hover:text-shiok-600 hover:bg-white/70 transition-all">
                    {link.label}{link.hasDropdown && <ChevronDown size={12} />}
                  </Link>
                  {link.hasDropdown && menuOpen && (
                    <div className="absolute top-[calc(100%+8px)] left-0 bg-white border border-dark-900/10 shadow-2xl rounded-2xl min-w-[220px] p-2">
                      <Link href="/menu?brand=shiok" className="block rounded-xl px-4 py-3 text-xs font-body font-semibold text-dark-700 hover:bg-shiok-50 hover:text-shiok-700">Shiok Lah Menu</Link>
                      <Link href="/menu?brand=nirmalya" className="block rounded-xl px-4 py-3 text-xs font-body font-semibold text-dark-700 hover:bg-nirmalya-50 hover:text-nirmalya-700">Nirmalya Veg Menu</Link>
                      <Link href="/menu" className="block rounded-xl px-4 py-3 text-xs font-body font-semibold text-dark-700 hover:bg-cream-100">View All Menus</Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <Link href="/location" className="p-2.5 text-dark-600 hover:text-shiok-600" aria-label="Location"><MapPin size={18} /></Link>
              <Link href="/order" className="flex items-center gap-2 rounded-full px-5 py-2.5 bg-shiok-600 text-white text-[11px] font-body font-bold tracking-[0.12em] uppercase hover:bg-shiok-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-shiok-600/15">
                <ShoppingBag size={14} /> Order Now
              </Link>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <Link href="/order" className="rounded-full px-4 py-2 bg-shiok-600 text-white text-[10px] font-body font-bold tracking-wider uppercase">Order</Link>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-dark-800" aria-label="Toggle menu" aria-expanded={isOpen}>{isOpen ? <X size={23} /> : <Menu size={23} />}</button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-dark-900/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-cream-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-5 border-b border-dark-900/10">
              <BrandLogo brand="shiok" size={38} withText />
              <button onClick={() => setIsOpen(false)} className="p-2 text-dark-700" aria-label="Close menu"><X size={22} /></button>
            </div>
            <nav className="py-5">
              {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-4 border-b border-dark-900/10 text-sm font-body font-semibold tracking-[0.12em] uppercase text-dark-700">{link.label}</Link>)}
            </nav>
            <div className="grid gap-3 pt-2">
              <Link href="/order" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 bg-shiok-600 text-white text-xs font-body font-bold uppercase tracking-wider"><ShoppingBag size={15} /> Order Now</Link>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center justify-center gap-2 rounded-full px-6 py-3.5 border border-shiok-600 text-shiok-600 text-xs font-body font-bold uppercase tracking-wider"><Phone size={15} /> Call Restaurant</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
