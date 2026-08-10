import React from 'react'

interface LogoProps {
  brand: 'shiok' | 'nirmalya'
  size?: number
  className?: string
  withText?: boolean
}

export default function BrandLogo({ brand, size = 40, className = '', withText = false }: LogoProps) {
  const isShiok = brand === 'shiok'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={isShiok ? '/images/shiok-lah-logo.png' : '/images/nirmalya-veg-logo.png'}
        alt={isShiok ? 'Shiok Lah' : 'Nirmalya Veg'}
        style={{ width: size, height: 'auto' }}
      />
      {withText && (
        <div className="flex flex-col">
          <span className={`text-[18px] font-display font-bold tracking-wide ${isShiok ? 'text-gold-400' : 'text-nirmalya-500'}`}>
            {isShiok ? 'SHIOK LAH' : 'NIRMALYA VEG'}
          </span>
          <span className={`text-[8px] font-body tracking-[0.2em] uppercase ${isShiok ? 'text-gold-400/60' : 'text-nirmalya-400/60'}`}>
            {isShiok ? 'South East Asian Cuisine' : 'South East Asian Vegetarian Cuisine'}
          </span>
        </div>
      )}
    </div>
  )
}
