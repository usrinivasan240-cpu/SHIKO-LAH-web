'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import BrandSwitcher from './BrandSwitcher'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Shiok Lah', href: '/shiok-lah' },
  { label: 'Nirmalya Veg', href: '/nirmalya-veg' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Offers', href: '/offers' },
  { label: 'Location', href: '/location' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]' : 'bg-transparent'
    }`}>
      <div className="section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xs font-body tracking-[0.3em] uppercase text-dark-500">
                South East Asian
              </span>
              <span className="text-lg font-display font-bold text-dark-800 -mt-0.5">
                Restaurant
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[13px] font-body font-medium tracking-wide uppercase text-dark-600 hover:text-shiok-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <BrandSwitcher />
            <Link
              href="/order"
              className="btn-primary text-xs px-6 py-2.5"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <BrandSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-dark-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-cream-50/98 backdrop-blur-lg border-t border-cream-200">
          <div className="section-padding py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-body font-medium tracking-wide uppercase text-dark-600 hover:text-shiok-600 hover:bg-cream-100 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/order"
                className="btn-primary text-xs text-center"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="btn-outline text-xs text-center"
              >
                <Phone size={14} className="mr-2" />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
