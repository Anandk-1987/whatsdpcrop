import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsdpcrop-kTtbWxF2mb083QyXrT8dGl3EX9TBoR.png"
                alt="WhatsDpCrop.com Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-800">WhatsDpCrop.com</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              About
            </Link>
            <Button asChild variant="default">
              <Link href="/#convert-dp" scroll={false}>
                Convert DP Now
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

