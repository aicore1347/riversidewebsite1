"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundColor: '#000000'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300BFFF" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      
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
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{backgroundColor: 'rgba(0, 191, 255, 0.1)', border: '1px solid rgba(0, 191, 255, 0.3)', color: '#00BFFF'}}
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
            <span className="block" style={{color: '#FFFFFF'}}>
              Transforming
            </span>
            <span className="block text-glow" style={{color: '#00BFFF', textShadow: '0 0 10px rgba(0, 191, 255, 0.3)'}}>
              businesses
            </span>
            <span className="block" style={{color: '#FFFFFF'}}>
              with AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{color: 'rgba(255, 255, 255, 0.8)'}}
          >
            Unlock your company&apos;s potential with cutting-edge AI solutions designed to scale operations, 
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
              className="font-semibold px-8 py-4 text-lg transition-all duration-200 hover:shadow-lg group"
              style={{backgroundColor: '#00BFFF', color: '#000000', border: 'none'}}
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg transition-all duration-200"
              style={{borderColor: 'rgba(0, 191, 255, 0.5)', color: '#00BFFF', backgroundColor: 'transparent'}}
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
                className="rounded-lg p-6 backdrop-blur-sm"
                style={{background: 'rgba(15, 15, 15, 0.8)', border: '1px solid rgba(0, 191, 255, 0.2)', boxShadow: '0 0 20px rgba(0, 191, 255, 0.1)'}}
              >
                <feature.icon className="w-8 h-8 mx-auto mb-4" style={{color: '#00BFFF'}} />
                <h3 className="text-lg font-semibold mb-2" style={{color: '#FFFFFF'}}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
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
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{borderColor: 'rgba(0, 191, 255, 0.5)'}}
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 rounded-full mt-2"
              style={{backgroundColor: '#00BFFF'}}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero