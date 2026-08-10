import React from 'react'
import Link from 'next/link'
import { Phone, MapPin, Instagram, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-cream-100">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-cream-50">
                Shiok Lah
              </h3>
              <p className="text-sm font-body text-cream-300 mt-1">
                South East Asian Non-Vegetarian Cuisine
              </p>
            </div>
            <div className="mb-6">
              <h3 className="font-display text-2xl font-bold text-cream-50">
                Nirmalya Veg
              </h3>
              <p className="text-sm font-body text-cream-300 mt-1">
                South East Asian Vegetarian Cuisine
              </p>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed">
              Two premium South East Asian dining experiences in Trichy, bringing authentic Singaporean, Malaysian and Thai-inspired flavours.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50 mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Story', href: '/our-story' },
                { label: 'Shiok Lah Menu', href: '/menu?brand=shiok' },
                { label: 'Nirmalya Veg Menu', href: '/menu?brand=nirmalya' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Offers', href: '/offers' },
                { label: 'Location', href: '/location' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-cream-50 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-shiok-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-cream-300">
                  Srinivasa Nagar / Woraiyur, Trichy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-shiok-400 flex-shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-sm text-cream-300 hover:text-cream-50 transition-colors"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-shiok-400 flex-shrink-0" />
                <a
                  href="#"
                  className="text-sm text-cream-300 hover:text-cream-50 transition-colors"
                >
                  @shioklah.trichy
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream-50 mb-6">
              Opening Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-shiok-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-cream-200 font-medium">Monday - Sunday</p>
                  <p className="text-sm text-cream-400">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <p className="text-xs text-cream-400 italic mt-4">
                * Hours may vary on holidays. Please call to confirm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-400">
            &copy; {new Date().getFullYear()} Shiok Lah & Nirmalya Veg. All rights reserved.
          </p>
          <p className="text-xs text-cream-400">
            South East Asian Restaurant — Trichy, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  )
}
