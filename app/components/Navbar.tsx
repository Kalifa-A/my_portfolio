"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['Experience', 'Education', 'Projects', 'Contact'];

  // Track scroll depth to alter layout density dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full border-b transition-all duration-300 ${
        scrolled 
          ? 'h-16 bg-[#050810]/80 backdrop-blur-md border-white/[0.05]' 
          : 'h-20 bg-[#050810]/40 backdrop-blur-sm border-white/[0.02]'
      }`}
      style={{ zIndex: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center relative">
        
        {/* Cinematic System Brand Logo */}
        <div className="relative group cursor-pointer flex items-center h-full">
          <span 
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 26,
              letterSpacing: "0.06em",
              color: "#E6EDF3"
            }}
          >
            KALIFA<span className="text-[#00ADB5] ml-0.5 group-hover:animate-pulse">_</span>
          </span>
          {/* Subtle running laser indicator below brand name */}
          <div className="absolute bottom-3 left-0 w-0 h-[1px] bg-gradient-to-r from-[#00ADB5] to-cyan-400 group-hover:w-full transition-all duration-500 ease-out" />
        </div>

        {/* Technical Terminal Style Navigation Row (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative py-2 group transition-colors duration-300"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "rgba(230, 237, 243, 0.45)"
              }}
            >
              <span className="group-hover:text-[#00ADB5] transition-colors duration-300">
                // {item.toUpperCase()}
              </span>
              
              {/* Micro Dot Focus Element */}
              <div 
                className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00ADB5] opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                style={{ boxShadow: "0 0 6px #00ADB5" }}
              />
            </a>
          ))}
          
          {/* GitHub Production Profile Action Node */}
          <a 
            href="https://github.com/Kalifa-A" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-all duration-300 relative group overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: 6
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              padding: 1,
              background: "linear-gradient(135deg, rgba(0,173,181,0.3) 0%, transparent 100%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              borderRadius: 6,
            }} />

            <svg className="w-4 h-4 fill-[#E6EDF3]/60 group-hover:fill-[#00ADB5] transition-colors duration-300 relative z-10" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 flex flex-col justify-center items-center gap-1 w-8 h-8 rounded border border-white/[0.05] bg-white/[0.01]"
          aria-label="Toggle menu"
        >
          <span className={`h-[1px] w-4 rounded-full bg-[#E6EDF3]/80 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`h-[1px] w-4 rounded-full bg-[#E6EDF3]/80 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-[1px] w-4 rounded-full bg-[#E6EDF3]/80 transition-transform duration-300 ${isOpen ? '-rotate-45 translate-y-[-5px]' : ''}`} />
        </button>

        {/* Responsive Mobile Drawer Component */}
        <div 
          className={`absolute top-full left-0 w-full bg-[#050810]/95 backdrop-blur-lg border-b border-white/[0.06] flex flex-col gap-5 px-6 py-8 transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="py-1.5 tracking-widest text-[#E6EDF3]/60 hover:text-[#00ADB5] transition-colors duration-200"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                fontWeight: 700
              }}
            >
              // {item.toUpperCase()}
            </a>
          ))}
          
          <div className="h-[1px] bg-white/[0.04] my-2" />

          <a 
            href="https://github.com/Kalifa-A"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 py-2 text-[#E6EDF3]/40 hover:text-[#00ADB5] transition-colors duration-200"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: 10 }}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            EXTERNAL_SOURCE // GITHUB_PROFILE
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;