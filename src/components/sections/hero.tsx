"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BackgroundLines } from '@/components/ui/background-lines'

export function Hero() {
  return (
    <BackgroundLines 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      svgOptions={{ duration: 8 }}
    >

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
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg transition-all duration-200"
              style={{borderColor: 'rgba(0, 191, 255, 0.5)', color: '#00BFFF', backgroundColor: 'transparent'}}
            >
              <a 
                href="https://calendly.com/riversidegenai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </motion.div>

        </motion.div>

      </div>
    </BackgroundLines>
  )
}

export default Hero