import React from 'react'

interface LogoProps {
  brand: 'shiok' | 'nirmalya'
  size?: number
  className?: string
  withText?: boolean
}

function ShiokLahLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lion Mane - flowing curves */}
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A84C" />
          <stop offset="30%" stopColor="#C9A84C" />
          <stop offset="60%" stopColor="#B8922E" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="goldGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8C86A" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#9A7A24" />
        </linearGradient>
      </defs>
      
      {/* Back mane flowing right */}
      <path d="M140 40 C160 50, 175 70, 178 95 C180 115, 170 140, 155 155 C145 165, 130 170, 115 168 C105 166, 98 160, 95 150" 
        stroke="url(#goldGrad)" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.6"/>
      
      {/* Middle mane */}
      <path d="M130 35 C155 45, 170 65, 175 90 C178 110, 168 135, 150 150 C138 160, 122 165, 108 162" 
        stroke="url(#goldGrad)" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.75"/>
      
      {/* Front mane */}
      <path d="M120 30 C148 42, 165 62, 170 88 C173 108, 162 132, 145 148 C132 158, 115 162, 100 158" 
        stroke="url(#goldGrad2)" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.9"/>
      
      {/* Inner mane */}
      <path d="M110 38 C135 48, 152 65, 158 88 C162 105, 155 125, 140 140 C128 150, 112 155, 98 150" 
        stroke="url(#goldGrad2)" strokeWidth="14" strokeLinecap="round" fill="none"/>
      
      {/* Lion Head */}
      <ellipse cx="95" cy="85" rx="38" ry="42" fill="url(#goldGrad)"/>
      
      {/* Face detail */}
      <ellipse cx="82" cy="78" rx="5" ry="6" fill="#1E1815"/>
      <ellipse cx="108" cy="78" rx="5" ry="6" fill="#1E1815"/>
      <ellipse cx="82" cy="76" rx="2" ry="2.5" fill="#C9A84C"/>
      <ellipse cx="108" cy="76" rx="2" ry="2.5" fill="#C9A84C"/>
      
      {/* Nose */}
      <path d="M95 88 L90 94 L100 94 Z" fill="#8B6914"/>
      
      {/* Mouth */}
      <path d="M88 98 Q95 104 102 98" stroke="#8B6914" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Crown/forehead detail */}
      <path d="M78 65 L85 55 L95 60 L105 55 L112 65" stroke="#E8C86A" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function NirmalyaVegLogo({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="30%" stopColor="#2E7D32" />
          <stop offset="60%" stopColor="#1B5E20" />
          <stop offset="100%" stopColor="#0D3B12" />
        </linearGradient>
        <linearGradient id="greenGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="50%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
      </defs>
      
      {/* Leaf mane - flowing leaf shapes */}
      <path d="M140 40 C155 50, 168 65, 172 85 C175 105, 165 130, 150 148 C140 158, 125 164, 110 160" 
        stroke="url(#greenGrad)" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.5"/>
      
      <path d="M130 32 C152 44, 168 62, 172 85 C175 105, 162 130, 145 148 C132 160, 115 165, 98 160" 
        stroke="url(#greenGrad)" strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.65"/>
      
      <path d="M120 28 C148 40, 165 60, 170 85 C173 105, 160 130, 142 148 C128 160, 110 165, 92 158" 
        stroke="url(#greenGrad2)" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.8"/>
      
      {/* Leaf-shaped mane pieces */}
      <path d="M135 45 C145 40, 158 50, 162 65 C165 78, 155 88, 142 85 C130 82, 128 58, 135 45Z" 
        fill="url(#leafGrad)" opacity="0.7"/>
      <path d="M145 65 C158 58, 172 70, 175 88 C177 102, 165 112, 152 108 C140 104, 136 78, 145 65Z" 
        fill="url(#leafGrad)" opacity="0.6"/>
      <path d="M148 95 C162 88, 175 100, 176 118 C177 132, 165 140, 152 135 C140 130, 136 108, 148 95Z" 
        fill="url(#leafGrad)" opacity="0.5"/>
      
      {/* Inner mane */}
      <path d="M110 35 C135 45, 152 62, 158 85 C162 105, 152 128, 138 142 C125 152, 108 156, 92 150" 
        stroke="url(#greenGrad2)" strokeWidth="14" strokeLinecap="round" fill="none"/>
      
      {/* Lion Head */}
      <ellipse cx="92" cy="85" rx="38" ry="42" fill="url(#greenGrad)"/>
      
      {/* Leaf vein detail on head */}
      <path d="M75 70 Q92 60 108 70" stroke="#81C784" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <path d="M78 80 Q92 72 106 80" stroke="#81C784" strokeWidth="1" fill="none" opacity="0.4"/>
      
      {/* Eyes */}
      <ellipse cx="80" cy="78" rx="5" ry="6" fill="#0D3B12"/>
      <ellipse cx="104" cy="78" rx="5" ry="6" fill="#0D3B12"/>
      <ellipse cx="80" cy="76" rx="2" ry="2.5" fill="#4CAF50"/>
      <ellipse cx="104" cy="76" rx="2" ry="2.5" fill="#4CAF50"/>
      
      {/* Nose */}
      <path d="M92 88 L87 94 L97 94 Z" fill="#1B5E20"/>
      
      {/* Mouth */}
      <path d="M85 98 Q92 104 99 98" stroke="#1B5E20" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Leaf crown */}
      <path d="M80 55 Q88 42 92 50 Q96 42 104 55" stroke="#66BB6A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="92" cy="48" r="3" fill="#66BB6A" opacity="0.6"/>
    </svg>
  )
}

export default function BrandLogo({ brand, size = 40, className = '', withText = false }: LogoProps) {
  const isShiok = brand === 'shiok'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {isShiok ? <ShiokLahLogo size={size} /> : <NirmalyaVegLogo size={size} />}
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
