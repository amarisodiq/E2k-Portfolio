'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera, Heart, Users, Award } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="aspect-square rounded-2xl overflow-hidden shadow-xl relative"
          >
            <Image
              src="/image/about.jpg"
              alt="E2K Photography Team"
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              About E2K Photography
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-gray-600 text-lg"
            >
              <p>
                With over <span className="font-semibold text-gray-900">5 years of experience</span>, 
                E2K Photography specializes in capturing authentic moments that tell your unique story. 
                We believe that the best photographs are those that evoke emotion and preserve memories 
                in their most genuine form.
              </p>
              
              <p>
                Our approach combines <span className="font-semibold text-gray-900">technical expertise</span> with 
                artistic vision, ensuring every shot is both beautiful and meaningful. From intimate 
                weddings to corporate events, we're dedicated to creating timeless imagery that 
                you'll cherish forever.
              </p>
              
              <p>
                Based in New York and available for travel, we're passionate about turning your 
                special moments into lasting memories through the art of photography.
              </p>
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {[
                { icon: Camera, number: '500+', label: 'Sessions' },
                { icon: Heart, number: '150+', label: 'Weddings' },
                { icon: Users, number: '100%', label: 'Satisfaction' },
                { icon: Award, number: '5+', label: 'Years' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="text-center p-4 hover-lift rounded-lg bg-gray-50"
                >
                  <stat.icon className="w-8 h-8 text-gray-900 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto"
                >
                  Book a Session
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}