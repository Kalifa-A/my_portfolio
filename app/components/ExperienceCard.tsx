"use client";

import React, { useEffect, useRef } from "react";

export default function Experience() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track dimensions on window changes
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Setup animated system background entities
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

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Structural Grid Intersections (Static Matrix)
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

      // 2. Compute and animate background elements
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        // Pulse ambient opacity ranges natively
        p.alpha += 0.005 * p.direction;
        if (p.alpha > 0.6 || p.alpha < 0.1) p.direction *= -1;

        // Draw technical crosshairs or node points
        ctx.save();
        ctx.globalAlpha = p.alpha;
        
        // Horizontal lens flair element
        const gradient = ctx.createLinearGradient(p.x - 30, p.y, p.x + 30, p.y);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, "rgba(0, 173, 181, 0.4)");
        gradient.addColorStop(1, "transparent");
        
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(p.x - 30, p.y);
        ctx.lineTo(p.x + 30, p.y);
        ctx.stroke();

        // Core glow spark element
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

  const experiences = [
    {
      title: "React Developer",
      company: "AlteSence Technology",
      date: "2024 - 2025",
      details: "Developed high-fidelity reusable UI component systems, micro-frontend states, and complex, API-driven telemetry dashboards using React, Next.js, and TypeScript."
    },
    {
      title: "Web Development Intern",
      company: "Prodigy Technology",
      date: "2023",
      details: "Optimized runtime application performance, layout shifts, and responsive paint intervals by 20% across legacy codebases through asset pipelines and memoization."
    }
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-[5%] py-24 overflow-hidden" style={{ background: "#050810" }}>
      
      {/* Dynamic Animated Canvas Backdrop */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Structural Color Bloom Accents */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: "radial-gradient(circle 600px at 0% 100%, rgba(0,173,181,0.08) 0%, transparent 100%), radial-gradient(circle 500px at 100% 0%, rgba(215,75,8,0.04) 0%, transparent 100%)",
      }} />

      {/* Section Title Header Block */}
      <div className="mb-16 max-w-xl relative z-10">
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 10, letterSpacing: "0.42em",
          color: "#00ADB5", textTransform: "uppercase",
          marginBottom: 12
        }}>
          // Professional_Timeline
        </p>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(44px, 5vw, 68px)",
          lineHeight: 0.9,
          letterSpacing: "0.04em",
          color: "#E6EDF3"
        }}>
          HISTORY &amp; EXPERIENCE.
        </h2>
      </div>

      {/* Grid Layout matching Hero styling metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl z-10 relative">
        {experiences.map((exp, i) => (
          <div 
            key={i} 
            className="relative p-10 flex flex-col justify-between overflow-hidden group transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, #0d111c 0%, #070a14 100%)",
              borderRadius: 12,
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {/* Card Hover Border Glow Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
              padding: 1,
              background: "linear-gradient(135deg, rgba(0,173,181,0.4) 0%, rgba(215,88,18,0.2) 100%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              borderRadius: 12,
            }} />

            <div>
              {/* Technical Date Header */}
              <div className="flex justify-between items-center mb-8">
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9, letterSpacing: "0.22em",
                  color: "rgba(139,148,158,0.65)"
                }}>
                  [{`0${i + 1}_STAGE`}]
                </span>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#00ADB5",
                }}>
                  {exp.date}
                </span>
              </div>

              {/* Core Context */}
              <h3 className="mb-2 transition-colors duration-300 group-hover:text-[#00ADB5]" style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 34,
                letterSpacing: "0.04em",
                color: "#E6EDF3",
                lineHeight: 1
              }}>
                {exp.title}
              </h3>
              
              <p className="mb-6 uppercase font-bold" style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "rgba(230,237,243,0.4)"
              }}>
                {exp.company}
              </p>

              <p style={{
                fontSize: 13,
                fontWeight: 400,
                color: "rgba(230,237,243,0.55)",
                lineHeight: 1.75,
                letterSpacing: "0.03em"
              }}>
                {exp.details}
              </p>
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
    </section>
  );
}