'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from 'lucide-react'
import { optimizeImage } from '@/utils/image-processing'

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void
}

export default function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback(async (files: FileList) => {
    if (files.length === 0) return;
    
    try {
      setIsLoading(true)
      const file = files[0]
      const optimizedImageData = await optimizeImage(file)
      onImageUpload(optimizedImageData)
    } catch (error) {
      console.error('Error processing image:', error)
      // You might want to add some user-facing error handling here
    } finally {
      setIsLoading(false)
    }
  }, [onImageUpload])

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }, [handleFiles])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }, [handleFiles])

  return (
    <div className="text-center">
      <Label htmlFor="image-upload" className="text-lg font-semibold text-gray-700 mb-4 block">
        Upload Your Full Image for WhatsApp DP
      </Label>
      <motion.div 
        className={`mt-2 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-colors ${
          dragActive ? 'border-green-500 bg-green-50' : 'border-gray-300'
        } ${isLoading ? 'opacity-50' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Upload className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-sm text-gray-600 mb-2">
          {isLoading ? 'Processing...' : 'Drag and drop your image here, or click to select'}
        </p>
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          onChange={handleChange}
          disabled={isLoading}
        />
        <Button 
          onClick={() => inputRef.current?.click()} 
          variant="outline" 
          className="mt-2"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Select Image'}
        </Button>
      </motion.div>
      <p className="text-xs text-gray-500 mt-4">
        Use your full image without cropping for WhatsApp
      </p>
    </div>
  )
}

