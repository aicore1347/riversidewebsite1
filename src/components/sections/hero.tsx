"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-network-pattern opacity-20"></div>
      
      {/* Animated Network Background */}
      <div className="absolute inset-0">
        {/* Floating Network Nodes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-riverside-blue/40"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-riverside-blue/10 border border-riverside-blue/30 text-riverside-blue text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Business Solutions
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-riverside-white">
              Transforming
            </span>
            <span className="block text-riverside-blue text-glow">
              businesses
            </span>
            <span className="block text-riverside-white">
              with AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-riverside-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Unlock your company's potential with cutting-edge AI solutions designed to scale operations, 
            automate processes, and drive exponential growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-riverside-blue hover:bg-riverside-blue-dark text-riverside-black font-semibold px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg hover:shadow-riverside-blue/25 group"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-riverside-blue/50 text-riverside-blue hover:bg-riverside-blue/10 px-8 py-4 text-lg transition-all duration-200"
            >
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Deploy AI solutions in weeks, not months"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Average 300% ROI within 12 months"
              },
              {
                icon: Sparkles,
                title: "Custom Solutions",
                description: "Tailored AI systems for your industry"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                className="card-glow rounded-lg p-6 backdrop-blur-sm"
              >
                <feature.icon className="w-8 h-8 text-riverside-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-riverside-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-riverside-white/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-riverside-blue/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-riverside-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero