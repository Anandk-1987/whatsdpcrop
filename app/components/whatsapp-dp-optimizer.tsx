'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageUploader from './image-uploader'
import ImageEditor from './image-editor'
import ImageOptimizer from './image-optimizer'

export default function WhatsAppDPOptimizer() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [editedImage, setEditedImage] = useState<string | null>(null)
  const [optimizedImage, setOptimizedImage] = useState<string | null>(null)

  const handleImageUpload = (imageDataUrl: string) => {
    setOriginalImage(imageDataUrl)
    setEditedImage(null)
    setOptimizedImage(null)
  }

  const handleImageEdit = (editedImageDataUrl: string) => {
    setEditedImage(editedImageDataUrl)
    setOptimizedImage(null)
  }

  const handleImageOptimize = (optimizedImageDataUrl: string) => {
    setOptimizedImage(optimizedImageDataUrl)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {!originalImage && (
              <motion.div
                key="uploader"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-center">Upload Your WhatsApp DP</h2>
                <p className="text-center mb-4 text-gray-600">Start by uploading the image you want to use as your WhatsApp profile picture. Our WhatsApp DP converter will help you optimize it.</p>
                <ImageUploader onImageUpload={handleImageUpload} />
              </motion.div>
            )}
            {originalImage && !editedImage && (
              <motion.div
                key="editor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-center">Adjust Your WhatsApp DP</h2>
                <p className="text-center mb-4 text-gray-600">Use our WhatsApp DP maker to add a stylish blur effect to the background. This will make your profile picture stand out!</p>
                <ImageEditor image={originalImage} onEdit={handleImageEdit} />
              </motion.div>
            )}
            {editedImage && !optimizedImage && (
              <motion.div
                key="optimizer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-center">Optimize for WhatsApp</h2>
                <p className="text-center mb-4 text-gray-600">Our WhatsApp DP size converter will now resize your image to the perfect dimensions for WhatsApp. Adjust the quality to balance size and appearance.</p>
                <ImageOptimizer image={editedImage} onOptimize={handleImageOptimize} />
              </motion.div>
            )}
            {optimizedImage && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Your Optimized WhatsApp DP</h3>
                <p className="text-center mb-4 text-gray-600">Your WhatsApp profile picture is now perfectly optimized! Download it and set it as your new DP.</p>
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image src={optimizedImage} alt="Optimized DP" fill className="object-cover rounded-full shadow-md" />
                </div>
                <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
                  <a href={optimizedImage} download="whatsapp-dp-optimized.jpg">Download Optimized DP</a>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}

