'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown, ShoppingBag } from 'lucide-react'
import LionLogo from '@/components/ui/LionLogo'

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
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
          : 'bg-gradient-to-b from-dark-900/80 to-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <LionLogo color="#C9A84C" size={42} />
              <div className="flex flex-col">
                <span className="text-[18px] font-display font-bold text-cream-50 tracking-wide">
                  SHIOK LAH
                </span>
                <span className="text-[8px] font-body tracking-[0.25em] uppercase text-gold-400 -mt-0.5">
                  South East Asian Cuisine
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setMenuOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-[12px] font-body font-medium tracking-[0.15em] uppercase text-cream-200 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={12} />}
                  </Link>
                  {link.hasDropdown && menuOpen && (
                    <div className="absolute top-full left-0 bg-dark-800 border border-dark-700 shadow-xl min-w-[200px] py-2">
                      <Link href="/menu?brand=shiok" className="block px-4 py-2.5 text-xs font-body text-cream-200 hover:text-gold-400 hover:bg-dark-700 transition-colors">
                        Shiok Lah Menu
                      </Link>
                      <Link href="/menu?brand=nirmalya" className="block px-4 py-2.5 text-xs font-body text-cream-200 hover:text-gold-400 hover:bg-dark-700 transition-colors">
                        Nirmalya Veg Menu
                      </Link>
                      <Link href="/menu" className="block px-4 py-2.5 text-xs font-body text-cream-200 hover:text-gold-400 hover:bg-dark-700 transition-colors">
                        View All
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/order"
                className="flex items-center gap-2 px-6 py-2.5 border border-gold-400 text-gold-400 text-[11px] font-body font-semibold tracking-[0.2em] uppercase hover:bg-gold-400 hover:text-dark-900 transition-all duration-300"
              >
                <ShoppingBag size={14} />
                Order Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="/order"
                className="px-4 py-2 border border-gold-400 text-gold-400 text-[10px] font-body font-semibold tracking-wider uppercase"
              >
                Order
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-cream-100"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-dark-900/70 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-dark-800 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-dark-700">
              <span className="text-[10px] font-body font-semibold tracking-[0.3em] uppercase text-cream-300">
                Navigation
              </span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-cream-200">
                <X size={20} />
              </button>
            </div>
            <nav className="p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3.5 text-sm font-body font-medium tracking-[0.15em] uppercase text-cream-200 hover:text-gold-400 border-b border-dark-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="p-6 border-t border-dark-700">
              <Link
                href="/order"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-gold-400 text-gold-400 text-xs font-body font-semibold tracking-wider uppercase hover:bg-gold-400 hover:text-dark-900 transition-colors mb-3"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag size={14} />
                Order Now
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-shiok-600 text-white text-xs font-body font-semibold tracking-wider uppercase hover:bg-shiok-700 transition-colors"
              >
                <Phone size={14} />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
