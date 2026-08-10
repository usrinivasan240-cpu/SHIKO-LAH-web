'use client'

import React from 'react'
import { Tag, Gift, Clock } from 'lucide-react'

const offers = [
  {
    id: 1,
    title: 'First Order Welcome',
    description: 'Get 10% off on your first order at either Shiok Lah or Nirmalya Veg.',
    discount: '10% OFF',
    code: 'WELCOME10',
    validTill: 'December 31, 2026',
    type: 'first-order',
  },
  {
    id: 2,
    title: 'Family Combo Meal',
    description: 'Feeds 4 people. Choose any 4 main dishes, 2 rice or noodle sides and 2 beverages.',
    discount: 'COMBO',
    code: 'FAMILY4',
    validTill: 'Ongoing',
    type: 'combo',
  },
  {
    id: 3,
    title: 'Weekday Lunch Special',
    description: 'Monday to Friday, 12 PM to 3 PM. Special lunch pricing on selected dishes.',
    discount: 'SPECIAL',
    code: 'LUNCH',
    validTill: 'Ongoing',
    type: 'seasonal',
  },
]

const offerIcons: Record<string, React.ReactNode> = {
  'first-order': <Tag size={24} />,
  combo: <Gift size={24} />,
  seasonal: <Clock size={24} />,
}

export default function OffersPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-dark-800">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-shiok-900/20" />
        <div className="relative section-padding py-32 w-full">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-body font-semibold tracking-[0.4em] uppercase text-shiok-400 mb-4">
              Offers and Deals
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-cream-50 mb-6">
              Special Offers
            </h1>
            <p className="text-cream-200 font-body text-lg max-w-xl">
              Enjoy exclusive deals at Shiok Lah and Nirmalya Veg
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white p-8 border-l-4 border-l-shiok-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-shiok-100 flex items-center justify-center text-shiok-600">
                      {offerIcons[offer.type] || <Tag size={24} />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-display-xs text-dark-800">{offer.title}</h3>
                      <span className="px-3 py-1 bg-shiok-100 text-shiok-700 text-[10px] font-body font-bold tracking-wider uppercase">
                        {offer.discount}
                      </span>
                    </div>
                    <p className="text-sm text-dark-500 font-body leading-relaxed mb-3">
                      {offer.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-dark-400 font-body">
                      <span>Code: <strong className="text-dark-700">{offer.code}</strong></span>
                      <span>Valid till: {offer.validTill}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-cream-100 border border-cream-200">
            <p className="text-sm text-dark-500 font-body leading-relaxed">
              <strong className="text-dark-700">Please Note:</strong> Offers are subject to change and may have specific terms. Contact us for the latest offers. More seasonal and festival offers will be added soon.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
