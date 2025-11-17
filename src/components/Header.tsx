'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Booking', href: '/booking' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = 'hidden'
//     } else {
//       document.body.style.overflow = 'unset'
//     }
//     return () => {
//       document.body.style.overflow = 'unset'
//     }
//   }, [mobileMenuOpen])

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
        : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo - Left */}
        <div className="flex flex-1 lg:flex-none">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            E2K Photography
          </Link>
        </div>
        
        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex lg:flex-2 lg:justify-center">
          <div className="flex gap-x-6 xl:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Social Links - Right */}
        <div className="hidden lg:block flex-1 lg:flex-none">
          <div className="flex gap-x-4">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200 transform hover:scale-110"
                aria-label={item.name}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Dark Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header with dark theme */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <Link 
                    href="/" 
                    className="text-xl font-bold text-white hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    E2K Photography
                  </Link>
                  <button
                    type="button"
                    className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links with dark theme */}
                <nav className="flex-1 px-4 pb-4 bg-black/80">
                  <div className="space-y-1 pt-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-4 text-base font-semibold text-gray-200 hover:text-white hover:bg-gray-700/50 transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="flex items-center">
                            <span className="flex-1">{item.name}</span>
                            <span className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-blue-400">
                              →
                            </span>
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Social Links with dark theme */}
                <div className="border-t border-gray-700 p-4 bg-black/80">
                  <p className="text-sm font-medium text-gray-400 mb-3">Follow Us</p>
                  <div className="flex gap-x-4">
                    {socialLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110 hover:bg-gray-700/50 p-2 rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-label={item.name}
                      >
                        <item.icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Info with dark theme */}
                <div className="border-t border-gray-700 p-4 bg-gray-800 mt-2">
                  <p className="text-sm text-gray-300">
                    Ready to create?{' '}
                    <Link 
                      href="/contact" 
                      className="font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get in touch ↗
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}