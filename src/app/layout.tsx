import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'

export const metadata: Metadata = {
  title: 'Shiok Lah & Nirmalya Veg — South East Asian Restaurant, Trichy',
  description: 'Premium South East Asian non-vegetarian and vegetarian cuisine in Trichy. Singaporean, Malaysian and Thai-inspired flavours at Shiok Lah and Nirmalya Veg.',
  keywords: [
    'Shiok Lah Trichy',
    'Nirmalya Veg Trichy',
    'South East Asian restaurant Trichy',
    'Singaporean food Trichy',
    'Malaysian food Trichy',
    'Thai food Trichy',
    'Vegetarian Singaporean food Trichy',
    'Non-vegetarian restaurant Trichy',
    'Woraiyur restaurants',
    'Singaporean restaurant Trichy',
  ],
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
