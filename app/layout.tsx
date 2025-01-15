import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Header } from './components/header'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Set Full Picture as WhatsApp DP without Cropping - WhatsDpCrop.com',
    template: '%s | WhatsDpCrop.com'
  },
  description: 'Learn how to set full picture as WhatsApp DP without cropping. Free WhatsApp DP converter to resize and optimize your profile picture without quality loss.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('antialiased', inter.className)}>
      <body className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <Header />
        {children}
      </body>
    </html>
  )
}

