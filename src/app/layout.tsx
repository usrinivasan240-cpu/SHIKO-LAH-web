import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'

export const metadata: Metadata = {
  title: 'Nirmalya Pure Veg — Taste of Singapore | Trichy',
  description: 'Nirmalya Pure Veg brings Singapore-inspired vegetarian flavours to Trichy, Tamil Nadu.',
  keywords: [
    'Nirmalya Veg Trichy',
    'Nirmalya Pure Veg',
    'Singaporean vegetarian food Trichy',
    'South East Asian vegetarian restaurant Trichy',
    'Woraiyur restaurants',
  ],
  icons: {
    icon: '/nirmalya-logo.svg',
    shortcut: '/nirmalya-logo.svg',
    apple: '/nirmalya-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-50">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
