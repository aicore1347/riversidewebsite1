"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setShowSuccess(false)

    console.log('Form submitted with data:', formData)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (response.ok) {
        setShowSuccess(true)
        setSubmitMessage('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', company: '', message: '' })
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false)
          setSubmitMessage('')
        }, 5000)
      } else {
        setSubmitMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "riversidegenai@gmail.com",
      description: "Get in touch for any inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(503) 808-0702",
      description: "Speak with our AI experts"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, San Francisco, CA 94105",
      description: "Our headquarters in the heart of Silicon Valley"
    }
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-network-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-riverside-white mb-6">
            Get In <span className="text-riverside-blue text-glow">Touch</span>
          </h2>
          <p className="text-xl text-riverside-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to start your AI transformation? We&apos;d love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-riverside-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-riverside-blue/20 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-riverside-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-riverside-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-riverside-blue font-medium mb-1">
                      {info.title === "Email Us" ? (
                        <a 
                          href={`mailto:${info.details}`} 
                          className="hover:text-riverside-blue-dark transition-colors duration-200"
                        >
                          {info.details}
                        </a>
                      ) : (
                        info.details
                      )}
                    </p>
                    <p className="text-riverside-white/70 text-sm">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 space-y-4"
            >
              <motion.a
                href="https://calendly.com/riversidegenai"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-riverside-blue hover:bg-riverside-blue-dark text-riverside-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </motion.a>
              
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="card-glow border-riverside-blue/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-riverside-white">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Success Animation */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-6"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                          damping: 10
                        }}
                      >
                        <Check className="w-10 h-10 text-white" strokeWidth={3} />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-2xl font-bold text-riverside-white mb-4"
                    >
                      Message Sent Successfully!
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="text-riverside-white/80 mb-6 max-w-md mx-auto"
                    >
                      Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="flex items-center justify-center space-x-2 text-riverside-blue text-sm"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-riverside-blue border-t-transparent rounded-full"
                      />
                      <span>Processing your message...</span>
                    </motion.div>
                  </motion.div>
                )}

                {/* Contact Form */}
                {!showSuccess && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-riverside-white/90 text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-riverside-black/50 border border-riverside-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-riverside-blue focus:border-transparent text-riverside-white placeholder-riverside-white/50"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-riverside-white/90 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-riverside-black/50 border border-riverside-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-riverside-blue focus:border-transparent text-riverside-white placeholder-riverside-white/50"
                        placeholder="john@company.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-riverside-white/90 text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-riverside-black/50 border border-riverside-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-riverside-blue focus:border-transparent text-riverside-white placeholder-riverside-white/50"
                      placeholder="Your Company"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-riverside-white/90 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-riverside-black/50 border border-riverside-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-riverside-blue focus:border-transparent text-riverside-white placeholder-riverside-white/50 resize-none"
                      placeholder="Tell us about your project and how we can help you..."
                    />
                  </motion.div>

                    {/* Error Message Display */}
                    {submitMessage && !showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400"
                      >
                        {submitMessage}
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full md:w-auto bg-riverside-blue hover:bg-riverside-blue-dark text-riverside-black font-semibold px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg hover:shadow-riverside-blue/25 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 mr-2 border-2 border-riverside-black border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="card-glow border-riverside-blue/30 max-w-2xl mx-auto backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-riverside-white mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-riverside-white/80 mb-6">
                Our AI experts are standing by to answer your questions and provide 
                personalized recommendations for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                  style={{backgroundColor: '#00BFFF', color: '#000000'}}
                >
                  Call Now: (503) 808-0702
                </motion.button>
                <motion.a
                  href="mailto:riversidegenai@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg transition-all duration-200 inline-block"
                  style={{border: '1px solid rgba(0, 191, 255, 0.5)', color: '#00BFFF', backgroundColor: 'transparent'}}
                >
                  Email: riversidegenai@gmail.com
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact