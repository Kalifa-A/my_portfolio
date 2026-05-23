"use client";

import React from 'react';

export const DetailFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-white/[0.04] px-6 md:px-[5%] py-12 relative z-10"
      style={{ background: "#050810" }}
    >
      {/* Structural Color Bloom Ambient Accent */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse 500px 150px at 50% 100%, rgba(0,173,181,0.06) 0%, transparent 100%)",
      }} />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-white/[0.03]">
          
          {/* Left Side: Brand Ecosystem */}
          <div className="text-center md:text-left group">
            <h2 
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 28,
                letterSpacing: "0.06em",
                color: "#E6EDF3",
                lineHeight: 1
              }}
            >
              KALIFA<span className="text-[#00ADB5] ml-0.5 group-hover:animate-pulse">_</span>
            </h2>
            <p 
              className="mt-2"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9,
                letterSpacing: "0.15em",
                color: "rgba(230, 237, 243, 0.4)"
              }}
            >
              Full-Stack Developer // Dubai, UAE
            </p>
          </div>

          {/* Right Side: Network Index & System Stamps */}
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <a 
              href="https://www.linkedin.com/in/kalifa-abdul-hameed-695139266/" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#00ADB5] tracking-widest relative group/link"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(230, 237, 243, 0.45)",
                textTransform: "uppercase"
              }}
            >
              <span className="relative z-10 font-bold">// LINKEDIN</span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#00ADB5] transition-all duration-300 group-hover/link:w-full" />
            </a>
            
            <a 
              href="https://github.com/Kalifa-A" 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#00ADB5] tracking-widest relative group/link"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                fontWeight: 700,
                color: "rgba(230, 237, 243, 0.45)",
                textTransform: "uppercase"
              }}
            >
              <span className="relative z-10 font-bold">// GITHUB</span>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-[#00ADB5] transition-all duration-300 group-hover/link:w-full" />
            </a>
          </div>
        </div>

        {/* Bottom Technical Architecture Telemetry Badge */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div 
            className="px-4 py-1.5 transition-colors duration-500 hover:border-white/10 hover:text-[#00ADB5]"
            style={{
              background: "rgba(255, 255, 255, 0.01)",
              border: "1px solid rgba(255, 255, 255, 0.04)",
              borderRadius: 4,
              fontFamily: "'Space Mono', monospace",
              fontSize: 8,
              color: "rgba(230, 237, 243, 0.25)",
              letterSpacing: "0.25em",
              textTransform: "uppercase"
            }}
          >
            SYSTEM_STAMP: Next.js + Tailwind CSS // CORE_WEB_VITALS_OK
          </div>

          <span 
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              color: "rgba(230, 237, 243, 0.25)"
            }}
          >
            © {currentYear} ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
};