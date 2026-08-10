'use client'

import React from 'react'
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react'
import Link from 'next/link'

export default function LocationPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-shiok-900/20" />
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-400 mb-4">
              Find Us
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              Our Location
            </h1>
            <p className="text-cream-200 font-body text-lg max-w-xl">
              Visit us in the heart of Trichy
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map Placeholder */}
            <div className="bg-cream-200 h-96 lg:h-auto min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-dark-300 mx-auto mb-4" />
                <p className="text-dark-400 font-body text-sm">Google Map Integration</p>
                <p className="text-dark-300 font-body text-xs mt-1">Srinivasa Nagar, Woraiyur, Trichy</p>
              </div>
            </div>

            {/* Details */}
            <div>
              <h2 className="font-display text-display-sm text-dark-800 mb-8">
                Visit Shiok Lah & Nirmalya Veg
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-shiok-100 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-shiok-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-body font-semibold text-dark-800 mb-1">Address</h3>
                    <p className="text-sm text-dark-500 font-body">
                      Srinivasa Nagar / Woraiyur, Trichy, Tamil Nadu
                    </p>
                    <p className="text-xs text-dark-400 font-body italic mt-1">
                      * Exact address to be verified with client
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-shiok-100 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-shiok-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-body font-semibold text-dark-800 mb-1">Phone</h3>
                    <a href="tel:+91XXXXXXXXXX" className="text-sm text-shiok-600 font-body hover:text-shiok-700">
                      +91 XXXXX XXXXX
                    </a>
                    <p className="text-xs text-dark-400 font-body italic mt-1">
                      * Number to be added after client verification
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-nirmalya-100 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-nirmalya-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-body font-semibold text-dark-800 mb-1">Opening Hours</h3>
                    <p className="text-sm text-dark-500 font-body">Monday - Sunday</p>
                    <p className="text-sm text-dark-500 font-body">11:00 AM - 11:00 PM</p>
                    <p className="text-xs text-dark-400 font-body italic mt-1">
                      * Hours may vary on holidays
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  Call Us
                </a>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-nirmalya-600 text-nirmalya-600 text-xs font-body font-semibold tracking-wider uppercase hover:bg-nirmalya-600 hover:text-white transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
