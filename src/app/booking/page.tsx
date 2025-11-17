'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shootType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Request Sent!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for your booking request. We'll get back to you within 24 hours to confirm your session details.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Book Another Session
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book a Session</h1>
          <p className="text-gray-600 mb-8">
            Let's create something beautiful together. Fill out the form below and we'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="+234 234 567 8910"
              />
            </div>

            <div>
              <label htmlFor="shootType" className="block text-sm font-medium text-gray-700 mb-2">
                Type of Shoot *
              </label>
              <select
                id="shootType"
                name="shootType"
                required
                value={formData.shootType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="">Select a shoot type</option>
                <option value="wedding">Wedding</option>
                <option value="portrait">Portrait</option>
                <option value="event">Event</option>
                <option value="commercial">Commercial</option>
                <option value="family">Family</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  required
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Tell us about your vision, location preferences, or any special requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Request Booking
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}