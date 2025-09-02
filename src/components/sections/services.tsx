"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, BarChart3, Lightbulb, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Lightbulb,
    title: "AI Consulting",
    description: "Strategic guidance on implementing AI solutions tailored to your business needs.",
    features: ["Custom Strategy Development", "AI Implementation Planning", "Business Process Analysis"]
  },
  {
    icon: Bot,
    title: "Conversational AI (Chatbots)",
    description: "24/7 advanced support chatbots and natural AI voice assistants.",
    features: ["Advanced Chatbot Development", "Natural Language Processing", "Voice Assistant Integration"]
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Comprehensive data analysis to drive informed business decisions and uncover valuable insights.",
    features: ["Data Visualization", "Business Intelligence", "Predictive Analytics"]
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "AI-powered marketing strategies to boost engagement, conversions, and ROI.",
    features: ["Campaign Optimization", "Customer Segmentation", "Performance Analytics"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden section-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300BFFF" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
      {/* CSS Animated Lines around Services */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg 
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path 
            className="animate-draw-line-1"
            d="M10,20 Q50,10 90,20"
            stroke="#00BFFF"
            strokeWidth="0.2"
            fill="none"
            opacity="0.6"
            strokeDasharray="100"
            strokeDashoffset="100"
          />
          <path 
            className="animate-draw-line-2"
            d="M10,80 Q50,90 90,80"
            stroke="#00BFFF"
            strokeWidth="0.2"
            fill="none"
            opacity="0.6"
            strokeDasharray="100"
            strokeDashoffset="100"
          />
          <path 
            className="animate-draw-line-3"
            d="M20,10 L20,90"
            stroke="#00BFFF"
            strokeWidth="0.15"
            fill="none"
            opacity="0.4"
            strokeDasharray="80"
            strokeDashoffset="80"
          />
          <path 
            className="animate-draw-line-4"
            d="M80,10 L80,90"
            stroke="#00BFFF"
            strokeWidth="0.15"
            fill="none"
            opacity="0.4"
            strokeDasharray="80"
            strokeDashoffset="80"
          />
          <circle
            className="animate-draw-circle"
            cx="50"
            cy="50"
            r="15"
            stroke="#00BFFF"
            strokeWidth="0.1"
            fill="none"
            opacity="0.3"
            strokeDasharray="94.2"
            strokeDashoffset="94.2"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{color: '#FFFFFF'}}>
            Our <span className="text-glow" style={{color: '#00BFFF', textShadow: '0 0 10px rgba(0, 191, 255, 0.3)'}}>Services</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
            From automation to advanced analytics, we provide comprehensive AI solutions 
            that transform how your business operates and grows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="card-glow border-riverside-blue/20 hover:border-riverside-blue/40 transition-all duration-300 h-full backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-riverside-blue/20 flex items-center justify-center mb-4 group-hover:bg-riverside-blue/30 transition-colors">
                    <service.icon className="w-6 h-6 text-riverside-blue" />
                  </div>
                  <CardTitle className="text-riverside-white text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-riverside-white/70">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-riverside-white/60 text-sm flex items-center"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-riverside-blue mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="card-glow border-riverside-blue/30 max-w-2xl mx-auto backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-riverside-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-riverside-white/80 mb-6">
                Let&apos;s discuss how AI can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://calendly.com/riversidegenai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-riverside-blue hover:bg-riverside-blue-dark text-riverside-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 inline-block text-center"
                >
                  Schedule Consultation
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Services