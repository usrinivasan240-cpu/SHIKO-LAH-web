import React from 'react'

interface LionLogoProps {
  color?: string
  size?: number
  className?: string
}

export default function LionLogo({ color = '#C9A84C', size = 40, className = '' }: LionLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lion Mane */}
      <path
        d="M50 8C35 8 22 18 18 32C14 46 18 62 28 72L32 68C26 60 24 48 28 36C32 24 42 16 50 16C58 16 68 24 72 36C76 48 74 60 68 68L72 72C82 62 86 46 82 32C78 18 65 8 50 8Z"
        fill={color}
      />
      {/* Lion Head */}
      <path
        d="M50 24C40 24 32 32 32 42C32 52 40 60 50 60C60 60 68 52 68 42C68 32 60 24 50 24Z"
        fill={color}
        opacity="0.9"
      />
      {/* Lion Face */}
      <ellipse cx="42" cy="40" rx="3" ry="3.5" fill="#1E1815" />
      <ellipse cx="58" cy="40" rx="3" ry="3.5" fill="#1E1815" />
      <path d="M47 48C47 48 50 52 53 48" stroke="#1E1815" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="50" cy="46" rx="2" ry="1.5" fill="#1E1815" />
      {/* Crown/Detail */}
      <path
        d="M38 20L42 28L50 24L58 28L62 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
