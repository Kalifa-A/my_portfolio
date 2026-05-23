"use client";

import React, { useEffect, useRef } from 'react';

const Education = () => {
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

  const degrees = [
    {
      level: "Masters_Degree",
      title: "MCA (Master of Computer Applications)",
      institution: "Anna University",
      status: "COMPLETED",
      accent: "#00ADB5"
    },
    {
      level: "Bachelors_Degree",
      title: "BCA (Bachelor of Computer Applications)",
      institution: "Anna University",
      status: "COMPLETED",
      accent: "#00ADB5"
    }
  ];

  return (
    <section id="education" className="relative w-full overflow-hidden px-6 md:px-[5%] py-16" style={{ background: "#050810" }}>
      
      {/* Dynamic Animated Canvas Backdrop */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Structural Color Bloom Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: "radial-gradient(circle 600px at 100% 100%, rgba(0,173,181,0.08) 0%, transparent 100%), radial-gradient(circle 500px at 0% 0%, rgba(215,75,8,0.04) 0%, transparent 100%)",
      }} />

      <div className="w-full z-10 relative max-w-7xl mx-auto">
        
        {/* Integrated Header Elements to Lock Alignment */}
        <div className="mb-12 max-w-xl">
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10, letterSpacing: "0.42em",
            color: "#00ADB5", textTransform: "uppercase",
            marginBottom: 12
          }}>
            // Academic_Foundation
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(38px, 4vw, 56px)",
            lineHeight: 0.9,
            letterSpacing: "0.04em",
            color: "#E6EDF3"
          }}>
            Education.
          </h2>
        </div>

        {/* Unified Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {degrees.map((edu, i) => (
            <div 
              key={i} 
              className="relative p-10 flex flex-col justify-between overflow-hidden group transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #0d111c 0%, #070a14 100%)",
                borderRadius: 12,
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Background Structural Decal / Watermark */}
              <div 
                className="absolute right-2 -bottom-6 font-black select-none pointer-events-none uppercase italic opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-500 group-hover:scale-105 origin-right"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 140,
                  lineHeight: 1,
                  color: "#E6EDF3"
                }}
              >
                {edu.level.split('_')[0]}
              </div>

              {/* Card Hover Border Glow Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                padding: 1,
                background: "linear-gradient(135deg, rgba(0,173,181,0.4) 0%, rgba(215,88,18,0.2) 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                borderRadius: 12,
              }} />

              <div className="relative z-10">
                {/* Technical Records Header Meta */}
                <div className="flex items-center gap-4 mb-8">
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, 
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: edu.accent,
                    border: `1px solid rgba(0, 173, 181, 0.3)`,
                    padding: "3px 8px",
                    borderRadius: 4,
                    background: "rgba(0, 173, 181, 0.03)"
                  }}>
                    {edu.level}
                  </span>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 8, 
                    letterSpacing: "0.3em",
                    color: "rgba(139,148,158,0.45)"
                  }}>
                    // CERTIFIED_RECORD
                  </span>
                </div>

                {/* Core Degree Information */}
                <h3 className="mb-2 transition-colors duration-300 group-hover:text-[#00ADB5]" style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 32,
                  letterSpacing: "0.04em",
                  color: "#E6EDF3",
                  lineHeight: 1.05
                }}>
                  {edu.title}
                </h3>
                
                <p className="mb-8 font-medium" style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  color: "rgba(230,237,243,0.4)"
                }}>
                  {edu.institution}
                </p>

                {/* Status Indicator Bar */}
                <div className="flex items-center gap-2">
                  <div 
                    className="w-1.5 h-1.5 rounded-full animate-pulse" 
                    style={{ 
                      background: "#00ADB5",
                      boxShadow: "0 0 8px #00ADB5"
                    }}
                  />
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, 
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "#00ADB5",
                  }}>
                    STATUS: {edu.status}
                  </span>
                </div>
              </div>

              {/* Cinematic Left/Right Tech Rim Lights on Hover */}
              <div className="absolute top-1/4 left-0 bottom-1/4 w-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                background: "linear-gradient(to bottom, transparent, rgba(0,173,181,0.8), transparent)",
                filter: "blur(1px)"
              }} />
              <div className="absolute top-1/4 right-0 bottom-1/4 w-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                background: "linear-gradient(to bottom, transparent, rgba(215,75,8,0.6), transparent)",
                filter: "blur(1px)"
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;