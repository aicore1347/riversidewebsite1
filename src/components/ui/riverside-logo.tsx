"use client"

import React from 'react'

interface RiversideLogoProps {
  className?: string
  height?: number
  showText?: boolean
}

export function RiversideLogo({ 
  className = "", 
  height = 80,
  showText = true 
}: RiversideLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Network/Connection Icon */}
      <svg
        width={height * 0.8}
        height={height * 0.6}
        viewBox="0 0 60 48"
        className="text-riverside-blue"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central Node */}
        <circle
          cx="30"
          cy="24"
          r="4"
          fill="#00BFFF"
          className="animate-pulse-blue"
        />
        
        {/* Outer Nodes */}
        <circle cx="10" cy="10" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        <circle cx="30" cy="8" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        <circle cx="50" cy="10" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        <circle cx="8" cy="30" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        <circle cx="52" cy="30" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        <circle cx="12" cy="40" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        <circle cx="48" cy="40" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        <circle cx="30" cy="42" r="2.5" fill="#00BFFF" className="animate-pulse-blue" />
        
        {/* Connection Lines */}
        <g stroke="#00BFFF" strokeWidth="1" opacity="0.6">
          <line x1="30" y1="24" x2="10" y2="10" className="animate-pulse-blue" />
          <line x1="30" y1="24" x2="30" y2="8" className="animate-pulse-blue" />
          <line x1="30" y1="24" x2="50" y2="10" className="animate-pulse-blue" />
          <line x1="30" y1="24" x2="8" y2="30" className="animate-pulse-blue" />
          <line x1="30" y1="24" x2="52" y2="30" className="animate-pulse-blue" />
          <line x1="30" y1="24" x2="12" y2="40" className="animate-pulse-blue" />
          <line x1="30" y1="24" x2="48" y2="40" className="animate-pulse-blue" />
          <line x1="30" y1="24" x2="30" y2="42" className="animate-pulse-blue" />
        </g>
        
        {/* Outer connection lines */}
        <g stroke="#00BFFF" strokeWidth="0.8" opacity="0.3">
          <line x1="10" y1="10" x2="30" y2="8" />
          <line x1="30" y1="8" x2="50" y2="10" />
          <line x1="50" y1="10" x2="52" y2="30" />
          <line x1="52" y1="30" x2="48" y2="40" />
          <line x1="48" y1="40" x2="30" y2="42" />
          <line x1="30" y1="42" x2="12" y2="40" />
          <line x1="12" y1="40" x2="8" y2="30" />
          <line x1="8" y1="30" x2="10" y2="10" />
        </g>
      </svg>
      
      {/* Company Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-riverside-white tracking-wider">
            RIVERSIDE AI
          </h1>
          <p className="text-riverside-blue text-sm tracking-widest font-medium">
            AI AGENCY
          </p>
        </div>
      )}
    </div>
  )
}

export default RiversideLogo