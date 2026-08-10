'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'

export default function StickyOrderCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-dark-800 border-t border-dark-700 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex items-stretch">
        <a
          href="tel:+91XXXXXXXXXX"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-shiok-600 text-white text-xs font-body font-semibold tracking-wider uppercase"
        >
          <Phone size={14} />
          Call
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white text-xs font-body font-semibold tracking-wider uppercase"
        >
          <MessageCircle size={14} />
          WhatsApp
        </a>
        <Link
          href="/menu"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-nirmalya-600 text-white text-xs font-body font-semibold tracking-wider uppercase"
        >
          Order Now
        </Link>
      </div>
    </div>
  )
}
