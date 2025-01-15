'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

interface ImageEditorProps {
  image: string
  onEdit: (editedImageData: string) => void
}

export default function ImageEditor({ image, onEdit }: ImageEditorProps) {
  const [blurAmount, setBlurAmount] = useState(5)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawImage = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = Math.max(img.width, img.height)
    canvas.width = size
    canvas.height = size

    // Draw blurred background
    ctx.filter = `blur(${blurAmount}px)`
    ctx.drawImage(img, 0, 0, size, size)

    // Reset filter and draw original image centered
    ctx.filter = 'none'
    const scale = Math.min(size / img.width, size / img.height)
    const x = (size - img.width * scale) / 2
    const y = (size - img.height * scale) / 2
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
  }, [blurAmount])

  useEffect(() => {
    const img = new Image()
    img.onload = () => drawImage(img)
    img.src = image
  }, [image, drawImage])

  const handleEdit = () => {
    if (canvasRef.current) {
      onEdit(canvasRef.current.toDataURL('image/jpeg'))
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="blur" className="text-sm font-medium text-gray-700 mb-2 block">
          Background Blur: {blurAmount}px
        </Label>
        <Slider
          id="blur"
          min={0}
          max={20}
          step={1}
          value={[blurAmount]}
          onValueChange={(value) => setBlurAmount(value[0])}
          className="max-w-md mx-auto"
        />
      </div>
      <motion.div 
        className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </motion.div>
      <Button onClick={handleEdit} className="w-full max-w-md mx-auto">Apply Changes</Button>
    </div>
  )
}

