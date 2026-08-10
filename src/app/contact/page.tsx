'use client'

import React from 'react'
import { Phone, MessageCircle, MapPin, Instagram, Clock, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-shiok-900/20" />
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-400 mb-4">
              Get in Touch
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              Contact Us
            </h1>
            <p className="text-cream-200 font-body text-lg max-w-xl">
              We would love to hear from you
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-display-sm text-dark-800 mb-8">
                Reach Out to Us
              </h2>
              <div className="space-y-6">
                {[
                  { icon: <Phone size={18} />, label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX', note: 'To be added after client verification' },
                  { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: 'Message Us', href: 'https://wa.me/91XXXXXXXXXX', note: 'For orders and enquiries' },
                  { icon: <MapPin size={18} />, label: 'Location', value: 'Srinivasa Nagar, Woraiyur, Trichy', href: '#', note: '' },
                  { icon: <Instagram size={18} />, label: 'Instagram', value: '@shioklah.trichy', href: '#', note: 'To be added after client verification' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'contact@shioklah.com', href: 'mailto:contact@shioklah.com', note: 'To be added after client verification' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-shiok-100 flex items-center justify-center flex-shrink-0 text-shiok-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-body font-semibold text-dark-800 mb-1">{item.label}</h3>
                      <a href={item.href} className="text-sm text-shiok-600 font-body hover:text-shiok-700 block">
                        {item.value}
                      </a>
                      {item.note && (
                        <p className="text-xs text-dark-400 font-body italic mt-0.5">{item.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-8 p-6 bg-white border border-cream-200">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={18} className="text-shiok-600" />
                  <h3 className="text-sm font-body font-semibold text-dark-800">Opening Hours</h3>
                </div>
                <p className="text-sm text-dark-500 font-body">Monday - Sunday: 11:00 AM - 11:00 PM</p>
                <p className="text-xs text-dark-400 font-body italic mt-2">* Hours may vary on holidays</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-display-sm text-dark-800 mb-8">
                Send a Message
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-body font-semibold text-dark-700 tracking-wider uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-cream-200 text-sm font-body text-dark-800 placeholder:text-dark-300 focus:outline-none focus:border-dark-300 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-dark-700 tracking-wider uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-cream-200 text-sm font-body text-dark-800 placeholder:text-dark-300 focus:outline-none focus:border-dark-300 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-dark-700 tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-cream-200 text-sm font-body text-dark-800 placeholder:text-dark-300 focus:outline-none focus:border-dark-300 transition-colors resize-none"
                    placeholder="Your message or enquiry..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
