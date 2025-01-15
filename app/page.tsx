import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from "@/components/ui/skeleton"
import { Footer } from './components/footer'

export const metadata = {
  metadataBase: new URL('https://whatsdp-crop.com'),
  title: 'WhatsApp DP Crop - Set Full Picture as WhatsApp DP without Cropping',
  description: 'Stop losing important parts of your photos! Use our free tool to set your full picture as WhatsApp DP without any cropping. Perfect for group photos, landscapes, and more.',
  openGraph: {
    images: []
  }
}

const WhatsAppDPOptimizer = dynamic(
  () => import('./components/whatsapp-dp-optimizer'),
  {
    loading: () => (
      <div className="w-full max-w-3xl mx-auto">
        <Skeleton className="h-[600px] w-full rounded-lg" />
      </div>
    ),
    ssr: false
  }
)

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6 text-green-600">
          Set Full Picture as WhatsApp DP without Cropping
        </h1>
        <p className="text-center mb-8 text-gray-600 max-w-2xl">
          Stop losing important parts of your photos! Use our free tool to set your full picture as WhatsApp DP without any cropping. Perfect for group photos, landscapes, and more.
        </p>
        <Suspense fallback={
          <div className="w-full max-w-3xl mx-auto">
            <Skeleton className="h-[600px] w-full rounded-lg" />
          </div>
        }>
          <div id="convert-dp">
            <WhatsAppDPOptimizer />
          </div>
        </Suspense>

        <section className="mt-16 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold text-center mb-8 text-green-600">
            How To Set Full Picture as WhatsApp DP
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">1. Upload Your Full Picture</h3>
              <p className="text-gray-600">
                Start by uploading the complete image you want to use. Our tool supports all common image formats.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">2. Add Background Effects</h3>
              <p className="text-gray-600">
                Enhance your WhatsApp DP with our smart background blur feature that keeps your full picture visible.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">3. Optimize Size</h3>
              <p className="text-gray-600">
                Our tool automatically adjusts your image to fit WhatsApp's requirements while keeping the full picture visible.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">4. Set as WhatsApp DP</h3>
              <p className="text-gray-600">
                Download your optimized image and set it as your WhatsApp profile picture - no cropping needed!
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-4xl mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8 text-green-600">
            Why Choose WhatsDpCrop.com?
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Keep your full picture without cropping</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>100% free WhatsApp DP converter</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>No registration required</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Smart background blur effects</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Works on mobile and desktop</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500">✓</span>
                <span>Instant processing and download</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
