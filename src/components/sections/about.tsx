"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Rocket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { number: "500+", label: "Businesses Transformed" },
  { number: "300%", label: "Average ROI Increase" },
  { number: "50+", label: "AI Experts" },
  { number: "24/7", label: "Support Available" }
]

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to democratizing AI and making advanced technology accessible to businesses of all sizes."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We work closely with you to understand your unique challenges and goals."
  },
  {
    icon: Award,
    title: "Excellence First",
    description: "We maintain the highest standards in AI development, security, and implementation best practices."
  },
  {
    icon: Rocket,
    title: "Innovation Focus",
    description: "We stay at the forefront of AI technology to deliver cutting-edge solutions that drive real results."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-riverside-blue/5 blur-xl animate-pulse-blue"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-riverside-blue/5 blur-xl animate-pulse-blue"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-riverside-white mb-6">
            About <span className="text-riverside-blue text-glow">Riverside AI</span>
          </h2>
          <p className="text-xl text-riverside-white/80 max-w-3xl mx-auto leading-relaxed">
            We're a team of AI experts, data scientists, and business strategists dedicated to 
            helping companies harness the transformative power of artificial intelligence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-riverside-blue mb-2">
                {stat.number}
              </div>
              <div className="text-riverside-white/70 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card className="card-glow border-riverside-blue/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-riverside-white mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-riverside-white/80 leading-relaxed mb-6">
                  To empower businesses with intelligent AI solutions that not only automate processes 
                  but fundamentally transform how companies operate, innovate, and grow in the digital age.
                </p>
                <p className="text-lg text-riverside-white/80 leading-relaxed">
                  We believe that AI shouldn't be a luxury reserved for tech giants. Every business, 
                  regardless of size or industry, deserves access to the competitive advantages that 
                  artificial intelligence can provide.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-riverside-white text-center mb-12">
            Our <span className="text-riverside-blue">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="card-glow border-riverside-blue/20 hover:border-riverside-blue/40 transition-all duration-300 h-full backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-riverside-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-riverside-blue/30 transition-colors">
                        <value.icon className="w-6 h-6 text-riverside-blue" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-riverside-white mb-2">
                          {value.title}
                        </h4>
                        <p className="text-riverside-white/70 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="card-glow border-riverside-blue/30 max-w-3xl mx-auto backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-riverside-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-riverside-white/80 mb-6">
                Join hundreds of companies that have already revolutionized their operations with our AI solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-riverside-blue hover:bg-riverside-blue-dark text-riverside-black font-semibold px-8 py-3 rounded-lg transition-all duration-200"
              >
                Start Your AI Journey Today
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About