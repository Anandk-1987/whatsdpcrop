'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import imageCompression from 'browser-image-compression'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

interface ImageOptimizerProps {
  image: string
  onOptimize: (optimizedImageData: string) => void
}

export default function ImageOptimizer({ image, onOptimize }: ImageOptimizerProps) {
  const [quality, setQuality] = useState(0.8)

  const handleOptimize = async () => {
    try {
      const response = await fetch(image)
      const blob = await response.blob()
      const file = new File([blob], 'image.jpg', { type: 'image/jpeg' })

      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
        initialQuality: quality,
      }

      const compressedFile = await imageCompression(file, options)
      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          onOptimize(reader.result)
        }
      }
      reader.readAsDataURL(compressedFile)
    } catch (error) {
      console.error('Error optimizing image:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="quality" className="text-sm font-medium text-gray-700 mb-2 block">
          Image Quality: {Math.round(quality * 100)}%
        </Label>
        <Slider
          id="quality"
          min={0.1}
          max={1}
          step={0.1}
          value={[quality]}
          onValueChange={(value) => setQuality(value[0])}
          className="max-w-md mx-auto"
        />
      </div>
      <motion.div 
        className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg"
      >
        <img src={image} alt="Preview" className="w-full h-full object-cover" />
      </motion.div>
      <Button onClick={handleOptimize} className="w-full max-w-md mx-auto">Optimize for WhatsApp</Button>
    </div>
  )
}

