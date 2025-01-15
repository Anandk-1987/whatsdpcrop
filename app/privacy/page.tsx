import { Metadata } from 'next'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - WhatsDpCrop.app',
  description: 'Read our privacy policy to understand how WhatsDpCrop.app handles your data and protects your privacy when using our WhatsApp DP converter tool.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
          Privacy Policy
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
          <p className="font-semibold">Last updated: January 14, 2024</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
            <p>
              At WhatsDpCrop.app, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our WhatsApp DP converter and resizer tool.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">2. Information We Collect</h2>
            <p>
              Our service processes images entirely in your browser. We do not store or collect any images you upload. The only information we collect includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usage analytics (page views, tool usage)</li>
              <li>Technical information (browser type, device type)</li>
              <li>IP addresses for security purposes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">3. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve our service</li>
              <li>Analyze usage patterns</li>
              <li>Prevent abuse</li>
              <li>Maintain security</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">4. Image Processing</h2>
            <p>
              All image processing occurs locally in your browser. We never store or transmit your images to our servers. Your images remain private and secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">5. Cookies</h2>
            <p>
              We use essential cookies to improve your experience. These cookies are necessary for the website to function properly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">6. Third-Party Services</h2>
            <p>
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Google AdSense for advertisements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
            <p>
              If you have any questions about our Privacy Policy, please contact us at:<br />
              support@whatsdpcrop.app
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

