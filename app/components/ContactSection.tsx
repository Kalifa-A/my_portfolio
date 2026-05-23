"use client";

import React, { useEffect, useRef } from 'react';

export default function ContactSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Setup animated matrix particles to mirror your structural template
    const particles: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
      alpha: number;
      direction: number;
    }> = Array.from({ length: 15 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.4,
      size: Math.random() * 2 + 1,
      alpha: 0.1 + Math.random() * 0.4,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Structural Blueprint Lines
      const gridSize = 120;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Continuous Coordinate Translation
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        p.alpha += 0.005 * p.direction;
        if (p.alpha > 0.6 || p.alpha < 0.1) p.direction *= -1;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        
        const gradient = ctx.createLinearGradient(p.x - 30, p.y, p.x + 30, p.y);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, "rgba(0, 173, 181, 0.4)");
        gradient.addColorStop(1, "transparent");
        
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(p.x - 30, p.y);
        ctx.lineTo(p.x + 30, p.y);
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="contact" className="relative w-full overflow-hidden px-6 md:px-[5%] py-16" style={{ background: "#050810" }}>
      
      {/* Dynamic Animated Canvas Backdrop */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Structural Color Bloom Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: "radial-gradient(circle 600px at 100% 100%, rgba(0,173,181,0.08) 0%, transparent 100%), radial-gradient(circle 500px at 0% 0%, rgba(215,75,8,0.04) 0%, transparent 100%)",
      }} />

      {/* Outer Layout Matrix Boundary Centered Alignment */}
      <div className="w-full z-10 relative max-w-7xl mx-auto">
        <div 
          className="relative p-10 md:p-20 overflow-hidden group transition-all duration-500"
          style={{
            background: "linear-gradient(135deg, #0d111c 0%, #070a14 100%)",
            borderRadius: 12,
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Subtle, soft cinematic color bloom behind content layout */}
          <div 
            className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none rounded-full blur-[100px]"
            style={{ background: "#00ADB5" }}
          />

          {/* Card Hover Border Glow Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
            padding: 1,
            background: "linear-gradient(135deg, rgba(0,173,181,0.4) 0%, rgba(215,88,18,0.2) 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            borderRadius: 12,
          }} />

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Micro Status Meta Header */}
            <div className="flex items-center gap-3 mb-8">
              <div 
                className="w-1.5 h-1.5 rounded-full animate-pulse" 
                style={{ 
                  background: "#00ADB5",
                  boxShadow: "0 0 8px #00ADB5"
                }}
              />
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#00ADB5",
                textTransform: "uppercase"
              }}>
                AVAILABLE_FOR_IMMEDIATE_ONBOARDING
              </p>
            </div>
            
            {/* High-Impact Bebas Neue Cinematic Header */}
            <h2 
              className="text-4xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                lineHeight: 0.9,
                color: "#E6EDF3"
              }}
            >
              LET'S BUILD <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] via-[#22d3ee] to-orange-500">
                SOMETHING GREAT.
              </span>
            </h2>

            {/* Action Call Nodes */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl justify-center mb-16">
              
              {/* Primary Action Button: WhatsApp */}
              <a 
                href="https://wa.me/971503549798" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-5 rounded-lg font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 relative group/btn overflow-hidden"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  background: "#00ADB5",
                  color: "#050810",
                  boxShadow: "0 0 25px rgba(0, 173, 181, 0.15)"
                }}
              >
                <span>WHATSAPP ME</span>
                <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </a>

              {/* Secondary Action Button: Email */}
              <a 
                href="mailto:kmyjob46@gmail.com" 
                className="flex-1 px-8 py-5 rounded-lg font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-3 relative group/btn overflow-hidden"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  color: "#E6EDF3"
                }}
              >
                {/* Subtle inner box light flare line */}
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" style={{
                  padding: 1,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  borderRadius: 8,
                }} />
                <span className="group-hover/btn:text-[#00ADB5] transition-colors duration-300">SEND EMAIL</span>
                <span className="text-xs text-neutral-500 group-hover/btn:text-[#00ADB5] transition-colors duration-300">✉</span>
              </a>
            </div>

            {/* Quick Technical Profile Metrics Footer */}
            <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-6 md:gap-12 border-t border-white/[0.04] pt-12 w-full">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, 
                    letterSpacing: "0.25em",
                    color: "rgba(230,237,243,0.3)",
                    textTransform: "uppercase"
                  }}>
                    // Current_Loc
                  </span>
                  <span className="mt-1 font-bold text-sm tracking-wide text-[#E6EDF3]">DUBAI, UAE</span>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, 
                    letterSpacing: "0.25em",
                    color: "rgba(230,237,243,0.3)",
                    textTransform: "uppercase"
                  }}>
                    // Availability
                  </span>
                  <span className="mt-1 font-bold text-sm tracking-wide text-[#00ADB5]">IMMEDIATE</span>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left col-span-2 md:col-span-1">
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, 
                    letterSpacing: "0.25em",
                    color: "rgba(230,237,243,0.3)",
                    textTransform: "uppercase"
                  }}>
                    // Visa_Status
                  </span>
                  <span className="mt-1 font-bold text-sm tracking-wide text-[#E6EDF3]">VISIT VISA</span>
               </div>
            </div>
          </div>

          {/* Cinematic Edge Rim Ambient Accents */}
          <div className="absolute top-0 right-1/4 left-1/4 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
            background: "linear-gradient(90deg, transparent, rgba(0,173,181,0.5), transparent)"
          }} />
          <div className="absolute top-1/4 bottom-1/4 right-0 w-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
            background: "linear-gradient(to bottom, transparent, rgba(215,75,8,0.4), transparent)"
          }} />
        </div>
      </div>
    </section>
  );
}