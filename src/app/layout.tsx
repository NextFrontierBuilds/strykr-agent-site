import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StrykrAgent - AI Assistant for Malaysian Businesses',
  description: 'Your 24/7 AI employee that handles WhatsApp, bookings, and customer inquiries. Live in 5 minutes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
