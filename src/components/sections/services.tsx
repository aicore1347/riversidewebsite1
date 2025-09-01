"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Brain, BarChart3, Settings, Lightbulb, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Streamline workflows and reduce manual tasks with intelligent automation solutions.",
    features: ["Process Automation", "Workflow Optimization", "Task Scheduling"]
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Leverage predictive analytics and intelligent decision-making systems.",
    features: ["Predictive Analytics", "Pattern Recognition", "Smart Recommendations"]
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics.",
    features: ["Data Visualization", "Business Intelligence", "Performance Metrics"]
  },
  {
    icon: Settings,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems.",
    features: ["API Development", "System Integration", "Custom Connectors"]
  },
  {
    icon: Lightbulb,
    title: "AI Strategy",
    description: "Develop comprehensive AI strategies aligned with your business goals.",
    features: ["Strategic Planning", "Roadmap Development", "ROI Analysis"]
  },
  {
    icon: Shield,
    title: "AI Security",
    description: "Ensure your AI implementations are secure, ethical, and compliant.",
    features: ["Security Audits", "Compliance Monitoring", "Risk Assessment"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
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
            Our <span className="text-riverside-blue text-glow">Services</span>
          </h2>
          <p className="text-xl text-riverside-white/80 max-w-3xl mx-auto leading-relaxed">
            From automation to advanced analytics, we provide comprehensive AI solutions 
            that transform how your business operates and grows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Let's discuss how AI can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-riverside-blue hover:bg-riverside-blue-dark text-riverside-black font-semibold px-6 py-3 rounded-lg transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-riverside-blue/50 text-riverside-blue hover:bg-riverside-blue/10 px-6 py-3 rounded-lg transition-all duration-200"
                >
                  View Case Studies
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Services