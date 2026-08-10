'use client'

import React from 'react'
import Link from 'next/link'
import LionLogo from '@/components/ui/LionLogo'
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-cream-100">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <LionLogo color="#C9A84C" size={36} />
                <div>
                  <h3 className="font-display text-xl font-bold text-cream-50">SHIOK LAH</h3>
                  <p className="text-[8px] font-body tracking-[0.2em] uppercase text-gold-400">South East Asian Cuisine</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <LionLogo color="#4DA64D" size={36} />
                <div>
                  <h3 className="font-display text-xl font-bold text-cream-50">NIRMALYA VEG</h3>
                  <p className="text-[8px] font-body tracking-[0.2em] uppercase text-nirmalya-400">South East Asian Vegetarian Cuisine</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-cream-300/60 leading-relaxed max-w-sm mt-4">
              Two premium South East Asian dining experiences in Trichy, bringing authentic Singaporean, Malaysian and Thai-inspired flavours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-cream-50 mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Story', href: '/our-story' },
                { label: 'Menus', href: '/menu' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Offers', href: '/offers' },
                { label: 'Location', href: '/location' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-cream-300/60 hover:text-gold-400 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shiok Lah Menu */}
          <div>
            <h4 className="font-display text-sm font-semibold text-gold-400 mb-5 tracking-wide">
              Shiok Lah Menu
            </h4>
            <ul className="space-y-2.5">
              {['Starters & Soups', 'Singapore Special', 'Rice', 'Noodles', 'Dry Fries', 'Western Favourites', 'Sides'].map((item) => (
                <li key={item}>
                  <Link href="/menu?brand=shiok" className="text-xs text-cream-300/60 hover:text-gold-400 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nirmalya Veg Menu */}
          <div>
            <h4 className="font-display text-sm font-semibold text-nirmalya-400 mb-5 tracking-wide">
              Nirmalya Veg Menu
            </h4>
            <ul className="space-y-2.5">
              {['Starters & Soups', 'Singapore Special', 'Rice', 'Noodles', 'Dry Fries', 'Western Favourites', 'Sides'].map((item) => (
                <li key={item}>
                  <Link href="/menu?brand=nirmalya" className="text-xs text-cream-300/60 hover:text-nirmalya-400 transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Row */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-display text-sm font-semibold text-cream-50 mb-4 tracking-wide">
                Contact Us
              </h4>
              <div className="space-y-3">
                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-xs text-cream-300/60 hover:text-cream-50 transition-colors">
                  <Phone size={14} className="text-gold-400" />
                  +91 99999 99999
                </a>
                <a href="mailto:info@shioklah.com" className="flex items-center gap-2 text-xs text-cream-300/60 hover:text-cream-50 transition-colors">
                  <Mail size={14} className="text-gold-400" />
                  info@shioklah.com
                </a>
                <div className="flex items-start gap-2 text-xs text-cream-300/60">
                  <MapPin size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                  Woraiyur, Trichy, Tamil Nadu, India
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-display text-sm font-semibold text-cream-50 mb-4 tracking-wide">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {[
                  { icon: <Instagram size={16} />, href: '#' },
                  { icon: <Facebook size={16} />, href: '#' },
                  { icon: <MessageCircle size={16} />, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 border border-dark-600 flex items-center justify-center text-cream-300/60 hover:text-gold-400 hover:border-gold-400 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream-300/40 font-body">
            &copy; {new Date().getFullYear()} Shiok Lah & Nirmalya Veg. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-cream-300/40 hover:text-cream-300 transition-colors">Privacy Policy</a>
            <span className="text-cream-300/20">|</span>
            <a href="#" className="text-[11px] text-cream-300/40 hover:text-cream-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
