"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import AboutSection from "@/components/About";

const heroImages = [
  "/image/building.jpg",
  "/image/about.jpg", // Add your image paths
  "/image/set.jpg",
  "/image/tools.jpg",
  "/image/house.jpg",
  // Add more images as needed
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Images with Crossfade */}
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${image}')` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 0.5 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}

        {/* Optional: Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/20 z-0" />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            E2K Photography
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
            Capturing moments that tell your story
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Portfolio
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>

        {/* Image Indicator Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </div>
      </section>

      {/* about */}
      <div className="pt-15">
        <AboutSection />
      </div>

      {/* Featured Work Preview */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our photographic journey capturing beautiful
              moments and stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/5]"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 text-lg">
                    Featured Image {item}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View More
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-200"
            >
              See Full Portfolio
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Featured Work Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our photographic journey capturing beautiful
              moments and stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "/image/marts.jpg",
                title: "Wedding Bliss",
                category: "Wedding",
              },
              {
                id: 2,
                image: "/image/ojo.jpg",
                title: "Portrait Session",
                category: "Portrait",
              },
              {
                id: 3,
                image: "/image/car.jpg",
                title: "Everyday Life",
                category: "Lifestyle",
              },
            ].map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: item.id * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/5]"
              >
                {/* Next.js Image Component */}
                <div className="w-full h-full relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.category}</p>
                  <div className="mt-3">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-sm border border-white px-3 py-1 rounded-full inline-block">
                      View More
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-200"
            >
              See Full Portfolio
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
