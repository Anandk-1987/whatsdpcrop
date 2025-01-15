import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto py-8 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">WhatsDpCrop.com</h3>
            <p className="text-gray-600 text-sm">
              The best tool to set full picture as WhatsApp DP without cropping. Convert and optimize your profile picture without losing quality.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-green-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-gray-600 text-sm">
              Have questions? Email us at:<br />
              support@whatsdpcrop.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} WhatsDpCrop.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

