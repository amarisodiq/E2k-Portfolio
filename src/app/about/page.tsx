'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About E2K Photography</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about capturing life's most precious moments through a creative and authentic lens.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg">
            <p>
                With over{" "}
                <span className="font-semibold text-gray-900">
                  2 years of experience
                </span>
                , E2K Photography specializes in capturing authentic moments
                that tell your unique story. We believe that the best
                photographs are those that evoke emotion and preserve memories
                in their most genuine form.
              </p>
              <p>
                Our approach combines{" "}
                <span className="font-semibold text-gray-900">
                  technical expertise
                </span>{" "}
                with creative vision, making sure every image is both visually
                striking and deeply memorable. Whether it’s portraits, lifestyle
                shoots, or events, we’re committed to delivering timeless
                visuals you’ll value for years.
              </p>
              <p>
                Based in Lagos and available for travel, we’re dedicated to
                turning your special moments into lasting memories through the
                art of photography.
              </p>
              
              {/* CTA Buttons */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto"
                >
                  Book a Session
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
          

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Using Next.js Image component */}
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
              <Image
                src="/image/about.jpg"
                alt="E2K Photography Team"
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </motion.div>
        </div>
        

        {/* Behind the Scenes Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Behind the Scenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                image: '/images/about/behind-1.jpg',
                title: 'Studio Work',
                description: 'Professional studio setup for perfect shots'
              },
              { 
                image: '/images/about/behind-2.jpg',
                title: 'On Location',
                description: 'Capturing moments in natural environments'
              },
              { 
                image: '/images/about/behind-3.jpg',
                title: 'Creative Process',
                description: 'Bringing visions to life through photography'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg mb-4 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
        >
          {[
            { number: '500+', label: 'Photosessions' },
            { number: '150+', label: 'Weddings' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </div>
  )
}