"use client";

import React, { useEffect, useRef } from 'react';

const ProjectCard = () => {
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

    // Setup animated tech nodes matching the Education layout array matrix exactly
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

      // 1. Structural Grid Lines
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

      // 2. Continuous Element Translation
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

  const projects = [
    {
      title: "CineTrack: Movie Discovery",
      tags: ["React", "TMDB API", "Axios"],
      description: "A high-performance movie database app featuring real-time search, trending filters, and dynamic detail pages using RESTful APIs.",
      link: "https://instant-movie-update.vercel.app/"
    },
    {
      title: "TNTJ Perambalur Blood Network",
      tags: ["React (Vite)", "Node.js", "MongoDB", "Tailwind CSS", "REST API", "Google OAuth"],
      description: "A localized medical utility app for Perambalur district. Features include a searchable village database, donor leaderboards, and a dual-theme Tamil UI optimized for mobile speed.",
      link: "https://blood-design.vercel.app/"
    },
    {
      title: "AL FATTAH Muslim Matrimony",
      tags: ["Express.js", "Node.js", "MongoDB", "JWT Auth", "Tailwind CSS", "REST API", "Brevo SMTP"],
      description: "A full-stack Muslim matrimony platform featuring secure JWT authentication, OTP email verification, advanced profile management, protected admin dashboard, and responsive modern UI deployed with Vercel and Render.",
      link: "https://alfattahnikkah.com/"
    },
    {
      title: "Thaj Anwar E-Commerce",
      tags: ["React", "REST API", "Tailwind"],
      description: "Full-scale store with product filtering and admin dashboard integration."
    },
    {
      title: "Weather Forecast System",
      tags: ["JavaScript", "API Integration"],
      description: "Real-time weather tracking application utilizing external data streams."
    },
    {
      title: "Visitor Management",
      tags: ["React", "Logic", "OTP"],
      description: "Secure apartment management system with OTP verification and alerts."
    },
  ];

  return (
    <section id="projects" className="relative w-full overflow-hidden px-6 md:px-[5%] py-16" style={{ background: "#050810" }}>
      
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
            // Engineering_Production
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(38px, 4vw, 56px)",
            lineHeight: 0.9,
            letterSpacing: "0.04em",
            color: "#E6EDF3"
          }}>
            Project_Archive.
          </h2>
        </div>

        {/* Unified Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const CardWrapper = p.link ? ("a" as any) : "div";
            return (
              <CardWrapper
                key={i}
                {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`relative p-8 flex flex-col justify-between overflow-hidden group transition-all duration-500 ${
                  p.link ? "block cursor-pointer" : ""
                }`}
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
                  {/* Micro Tech Tags Container */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(tag => (
                      <span 
                        key={tag} 
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 9,
                          color: "rgba(230,237,243,0.6)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          background: "rgba(255, 255, 255, 0.02)",
                          padding: "2px 6px",
                          borderRadius: 4
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Main Dynamic Section Header */}
                  <h3 
                    className="mb-3 transition-colors duration-300 group-hover:text-[#00ADB5]" 
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 26,
                      letterSpacing: "0.03em",
                      color: "#E6EDF3",
                      lineHeight: 1.1
                    }}
                  >
                    {p.title}
                  </h3>

                  {/* Body Content Copy */}
                  <p 
                    className="mb-8 leading-relaxed" 
                    style={{
                      fontFamily: "inherit",
                      fontSize: 13,
                      color: "rgba(230,237,243,0.5)"
                    }}
                  >
                    {p.description}
                  </p>
                </div>

                {/* Functional System Footer Link Callout */}
                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-1 h-1 bg-[#00ADB5] rounded-full group-hover:scale-125 transition-transform" />
                  <span 
                    className="transition-all duration-300 transform md:translate-x-[-4px] md:opacity-60 group-hover:translate-x-0 group-hover:opacity-100"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9, 
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      color: "#00ADB5",
                    }}
                  >
                    {p.link ? "VIEW_LIVE_PRODUCTION" : "LOCAL_BUILD_ONLY"}
                  </span>
                  <span className="text-[10px] text-[#00ADB5] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* Cinematic Edge Accents */}
                <div className="absolute top-0 right-1/4 left-1/4 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                  background: "linear-gradient(90deg, transparent, rgba(0,173,181,0.5), transparent)"
                }} />
                <div className="absolute top-4 right-0 w-[1px] h-10 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                  background: "linear-gradient(to bottom, rgba(215,75,8,0.4), transparent)"
                }} />
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;