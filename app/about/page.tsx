import { Metadata } from 'next'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'About Us - WhatsDpCrop.com',
  description: 'Learn about WhatsDpCrop.com, your trusted WhatsApp DP converter and resizer tool. We help you optimize your WhatsApp profile pictures easily.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
          About WhatsDpCrop.com
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
          <p>
            Welcome to WhatsDpCrop.com, your go-to solution for optimizing WhatsApp profile pictures. We understand the frustration of trying to get your profile picture to look just right on WhatsApp, which is why we created this free, easy-to-use tool.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Our Mission
          </h2>
          <p>
            Our mission is to provide the best WhatsApp DP converter and resizer tool that helps users maintain the quality and composition of their profile pictures. We believe that your profile picture should look exactly how you want it to, without awkward cropping or quality loss.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Free WhatsApp DP size converter</li>
            <li>High-quality image optimization</li>
            <li>Background blur effects</li>
            <li>Easy-to-use interface</li>
            <li>No registration required</li>
            <li>Instant downloads</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Why Choose Us
          </h2>
          <p>
            WhatsDpCrop.com stands out from other WhatsApp DP makers because we focus on maintaining image quality while providing the perfect size and format for WhatsApp. Our tool is completely free, requires no registration, and processes your images right in your browser for maximum privacy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            Our Technology
          </h2>
          <p>
            We use cutting-edge web technologies to ensure fast, efficient, and high-quality image processing. Our tool is built with modern frameworks and optimized for performance, providing you with the best possible experience when creating your WhatsApp profile picture.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

