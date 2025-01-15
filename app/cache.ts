import { NextResponse } from 'next/server'

export function withCacheHeaders(response: NextResponse) {
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  return response
}

