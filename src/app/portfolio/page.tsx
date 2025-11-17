'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react'

const categories = ['All', 'Weddings', 'Portraits', 'Events', 'Nature', 'Lifestyle']

// Use only local images or configure next.config.js for external domains
const galleryItems = [
  { 
    id: 1, 
    category: 'Weddings', 
    title: 'Wedding Day',
    image: '/images/hero/hero-1.jpg'
  },
  { 
    id: 2, 
    category: 'Portraits', 
    title: 'Portrait Session',
    image: '/image/about.jpg'
  },
  { 
    id: 3, 
    category: 'Events', 
    title: 'Corporate Event',
    image: '/images/featured/featured-1.jpg'
  },
  { 
    id: 4, 
    category: 'Nature', 
    title: 'Landscape',
    image: '/images/portfolio/nature-1.jpg'
  },
  { 
    id: 5, 
    category: 'Lifestyle', 
    title: 'Everyday Life',
    image: '/image/car.jpg'
  },
  { 
    id: 6, 
    category: 'Weddings', 
    title: 'Engagement',
    image: '/images/portfolio/weddings/wedding-1.jpg'
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const handleImageError = (id: number) => {
    console.log(`Image error for item ${id}`)
    setImageErrors(prev => new Set(prev).add(id))
  }

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const selectedImageData = selectedImage ? galleryItems.find(img => img.id === selectedImage) : null

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of photography work across different categories and styles
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-black text-white border-black shadow-lg'
                  : 'bg-white text-black border-gray-300 hover:border-black hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="mb-6 break-inside-avoid relative group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] relative">
                  {imageErrors.has(item.id) ? (
                    // Fallback when image fails to load
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center p-4">
                      <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                      <span className="text-gray-700 font-medium text-lg text-center">{item.title}</span>
                      <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                      <p className="text-gray-400 text-xs mt-2">Image not found</p>
                    </div>
                  ) : (
                    // Use regular img tag to avoid Next.js Image restrictions
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError(item.id)}
                    />
                  )}
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-4xl w-full max-h-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full max-h-[80vh] relative">
                {imageErrors.has(selectedImage) ? (
                  // Fallback in lightbox
                  <div className="w-full h-full min-h-[60vh] bg-gradient-to-br from-gray-300 to-gray-400 flex flex-col items-center justify-center p-8">
                    <ImageIcon className="w-20 h-20 text-gray-500 mb-4" />
                    <p className="text-gray-700 text-3xl font-bold mb-3 text-center">
                      {selectedImageData.title}
                    </p>
                    <p className="text-gray-600 text-xl mb-4">
                      {selectedImageData.category}
                    </p>
                    <p className="text-gray-500 text-lg mt-4">Image not available</p>
                  </div>
                ) : (
                  // Use regular img tag in lightbox
                  <img
                    src={selectedImageData.image}
                    alt={selectedImageData.title}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(selectedImage)}
                  />
                )}
                
                {/* Lightbox Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-2xl font-bold mb-1">
                    {selectedImageData.title}
                  </p>
                  <p className="text-gray-300 text-lg">
                    {selectedImageData.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}