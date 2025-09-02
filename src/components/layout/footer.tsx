"use client"

import React from 'react'
import { Mail, Phone, MapPin, Linkedin, X } from 'lucide-react'
import { RiversideLogo } from '@/components/ui/riverside-logo'

export function Footer() {
  return (
    <footer className="bg-riverside-black border-t border-riverside-blue/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <RiversideLogo height={60} />
            <p className="mt-4 text-riverside-white/80 max-w-md leading-relaxed">
              Transforming businesses through innovative AI solutions. We help companies scale 
              and optimize their operations with cutting-edge artificial intelligence technology.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/jose-gonzalez-4036a336a/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-riverside-white/60 hover:text-riverside-blue transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/RiversideGenAi" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-riverside-white/60 hover:text-riverside-blue transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-riverside-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-riverside-white/70 hover:text-riverside-blue transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-riverside-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-riverside-white/70">
                <Mail className="h-4 w-4 mr-2 text-riverside-blue" />
                <a 
                  href="mailto:riversidegenai@gmail.com" 
                  className="text-sm hover:text-riverside-blue transition-colors duration-200"
                >
                  riversidegenai@gmail.com
                </a>
              </div>
              <div className="flex items-center text-riverside-white/70">
                <Phone className="h-4 w-4 mr-2 text-riverside-blue" />
                <span className="text-sm">(503) 808-0702</span>
              </div>
              <div className="flex items-start text-riverside-white/70">
                <MapPin className="h-4 w-4 mr-2 text-riverside-blue mt-0.5" />
                <span className="text-sm">
                  123 Tech Street<br />
                  Innovation District<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-riverside-blue/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-riverside-white/60 text-sm">
              © 2024 Riverside AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-riverside-white/60 hover:text-riverside-blue text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-riverside-white/60 hover:text-riverside-blue text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer