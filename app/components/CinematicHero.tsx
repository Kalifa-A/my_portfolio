"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/image_1.png", rotateY: -38, z: -120, x: -58 },
  { src: "/image_2.png", rotateY: 0,   z:   0,  x:   0 },
  { src: "/image_3.png", rotateY:  38, z: -120, x:  58 },
];

export default function CinematicHero() {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const heroRef     = useRef<HTMLDivElement>(null);
  const stageRef    = useRef<HTMLDivElement>(null);
  const raysRef     = useRef<HTMLDivElement>(null);
  const rafRef      = useRef<number>(0);
  const floatTRef   = useRef(0);
  const curRXRef    = useRef(0);
  const curRYRef    = useRef(0);
  const tgtRXRef    = useRef(0);
  const tgtRYRef    = useRef(0);

  const [mounted, setMounted] = useState(false);
  const [activeIdx, setActiveIdx] = useState(1);   // center image highlighted

  // ── cursor ──────────────────────────────────────────
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const mxRef     = useRef(0);
  const myRef     = useRef(0);
  const rxRef     = useRef(0);
  const ryRef     = useRef(0);

  const animCursor = useCallback(() => {
    rxRef.current += (mxRef.current - rxRef.current) * 0.12;
    ryRef.current += (myRef.current - ryRef.current) * 0.12;
    if (ringRef.current) {
      ringRef.current.style.left = rxRef.current + "px";
      ringRef.current.style.top  = ryRef.current + "px";
    }
    requestAnimationFrame(animCursor);
  }, []);

  // ── main animation loop ──────────────────────────────
  const animLoop = useCallback(() => {
    curRXRef.current += (tgtRXRef.current - curRXRef.current) * 0.055;
    curRYRef.current += (tgtRYRef.current - curRYRef.current) * 0.055;
    floatTRef.current += 0.011;

    const floatY = Math.sin(floatTRef.current) * 9;
    const breathe = 1 + Math.sin(floatTRef.current * 0.65) * 0.004;

    if (stageRef.current) {
      stageRef.current.style.transform =
        `translateY(${floatY}px) perspective(1100px)` +
        ` rotateX(${curRXRef.current}deg) rotateY(${curRYRef.current}deg)` +
        ` scale(${breathe})`;
    }

    rafRef.current = requestAnimationFrame(animLoop);
  }, []);

  // ── particles ────────────────────────────────────────
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface P {
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; size: number; side: "o" | "b";
    }
    interface E {
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; size: number;
    }

    const makeP = (init = false): P => ({
      x: Math.random() * canvas.width,
      y: init ? Math.random() * canvas.height : canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.2 + Math.random() * 0.85),
      life: 0,
      maxLife: 130 + Math.random() * 170,
      size: 0.6 + Math.random() * 1.6,
      side: Math.random() > 0.5 ? "o" : "b",
    });
    const makeE = (): E => ({
      x: canvas.width * 0.62 + (Math.random() - 0.5) * canvas.width * 0.38,
      y: canvas.height * 0.68 + Math.random() * canvas.height * 0.32,
      vx: (Math.random() - 0.5) * 1.3,
      vy: -(0.7 + Math.random() * 2.1),
      life: 0, maxLife: 45 + Math.random() * 55,
      size: 0.9 + Math.random() * 1.3,
    });

    const particles: P[] = Array.from({ length: 140 }, (_, i) => makeP(i < 70));
    const embers:    E[] = Array.from({ length: 30 }, makeE);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life++;
        if (p.life > p.maxLife || p.y < -10) Object.assign(p, makeP());
        const a = Math.sin((p.life / p.maxLife) * Math.PI) * 0.55;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (p.side === "o" && p.x > canvas.width * 0.48)
          ctx.fillStyle = `rgba(215,90,20,${a})`;
        else if (p.side === "b" && p.x < canvas.width * 0.54)
          ctx.fillStyle = `rgba(70,130,220,${a})`;
        else return;
        ctx.fill();
      });

      embers.forEach(e => {
        e.x += e.vx; e.y += e.vy; e.vy *= 0.985; e.life++;
        if (e.life > e.maxLife) Object.assign(e, makeE());
        const a = Math.sin((e.life / e.maxLife) * Math.PI) * 0.88;
        ctx.beginPath(); ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,${110 + Math.random() * 60},15,${a})`;
        ctx.fill();
      });

      requestAnimationFrame(tick);
    };
    tick();

    return () => window.removeEventListener("resize", resize);
  }, []);

  // ── mouse handler ────────────────────────────────────
  const onMouseMove = useCallback((e: MouseEvent) => {
    mxRef.current = e.clientX;
    myRef.current = e.clientY;
    if (cursorRef.current) {
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top  = e.clientY + "px";
    }
    const hw = window.innerWidth  / 2;
    const hh = window.innerHeight / 2;
    const nx = (e.clientX - hw) / hw;
    const ny = (e.clientY - hh) / hh;
    tgtRXRef.current = ny * -7;
    tgtRYRef.current = nx *  9;
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", onMouseMove);
    animLoop();
    animCursor();
    const cleanup = initParticles();

    // build light rays
    if (raysRef.current) {
      raysRef.current.innerHTML = "";
      for (let i = 0; i < 8; i++) {
        const r = document.createElement("div");
        r.style.cssText = [
          "position:absolute", "bottom:0",
          `right:${6 + i * 5.5}%`,
          `height:${45 + Math.random() * 35}vh`,
          "width:2px",
          `transform:rotate(${-28 + i * 9}deg)`,
          `opacity:${0.12 + Math.random() * 0.14}`,
          `filter:blur(${3 + i * 2}px)`,
          "transform-origin:bottom center",
          "background:linear-gradient(to top,rgba(200,70,8,0.8) 0%,transparent 100%)",
        ].join(";");
        raysRef.current.appendChild(r);
      }
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      cleanup?.();
    };
  }, [onMouseMove, animLoop, animCursor, initParticles]);

  return (
    <>
      {/* ── custom cursor ── */}
      <div ref={cursorRef} style={{
        position:"fixed", width:8, height:8, background:"#00ADB5",
        borderRadius:"50%", pointerEvents:"none", zIndex:9999,
        transform:"translate(-50%,-50%)", mixBlendMode:"difference",
      }}/>
      <div ref={ringRef} style={{
        position:"fixed", width:34, height:34,
        border:"1px solid rgba(0,173,181,0.4)", borderRadius:"50%",
        pointerEvents:"none", zIndex:9998, transform:"translate(-50%,-50%)",
      }}/>

      {/* ── hero section ── */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background:"#050810", cursor:"none" }}
      >
        {/* backgrounds */}
        <div className="absolute inset-0" style={{
          background:"radial-gradient(ellipse 75% 80% at 68% 50%, #16182e 0%, #050810 65%)",
        }}/>
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(ellipse 42% 62% at 86% 58%, rgba(175,55,8,0.52) 0%, transparent 65%)," +
            "radial-gradient(ellipse 28% 44% at 76% 74%, rgba(215,85,8,0.28) 0%, transparent 55%)",
        }}/>
        <div className="absolute inset-0" style={{
          background:
            "radial-gradient(ellipse 46% 68% at 9% 44%, rgba(18,55,155,0.52) 0%, transparent 62%)," +
            "radial-gradient(ellipse 30% 42% at 20% 22%, rgba(0,95,195,0.28) 0%, transparent 50%)",
        }}/>
        {/* vignette */}
        <div className="absolute inset-0" style={{
          background:"radial-gradient(ellipse 88% 88% at 50% 50%, transparent 38%, rgba(5,8,16,0.9) 100%)",
        }}/>
        {/* film grain */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity:0.028}}>
          <filter id="fg"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feBlend in="SourceGraphic" mode="multiply"/></filter>
          <rect width="100%" height="100%" filter="url(#fg)"/>
        </svg>

        {/* particles */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{zIndex:5}}/>

        {/* rays */}
        <div ref={raysRef} className="absolute inset-0 pointer-events-none overflow-hidden" style={{zIndex:6}}/>

        {/* lens flare */}
        <div className="absolute pointer-events-none" style={{
          zIndex:7, top:"34%", right:"20%",
          width:90, height:90, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(215,88,18,0.32) 0%, transparent 70%)",
          filter:"blur(3px)",
        }}/>
        <div className="absolute pointer-events-none" style={{
          zIndex:8, top:"35%", right:"21%",
          width:18, height:18, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(255,255,255,0.55) 0%, transparent 70%)",
        }}/>

        {/* ── 3D IMAGE STAGE ── */}
        <div
          ref={stageRef}
          className="absolute"
          style={{
            zIndex:10,
            width:"100%", height:"100%",
            transformStyle:"preserve-3d",
            willChange:"transform",
          }}
        >
          {IMAGES.map((img, i) => {
            const isCenter = i === 1;
            const isActive = i === activeIdx;
            return (
              <div
                key={i}
                onClick={() => setActiveIdx(i)}
                style={{
                  position:"absolute",
                  top:"50%", left:"50%",
                  width: isCenter ? 380 : 270,
                  height: isCenter ? 500 : 360,
                  transform: `
                    translate(-50%, -50%)
                    translateX(${img.x}%)
                    translateZ(${img.z}px)
                    rotateY(${img.rotateY}deg)
                  `,
                  transformStyle:"preserve-3d",
                  cursor:"pointer",
                  transition:"all 0.6s cubic-bezier(0.16,1,0.3,1)",
                  zIndex: isCenter ? 20 : 10,
                  filter: isActive
                    ? "contrast(1.1) saturate(0.95)"
                    : "contrast(0.75) saturate(0.4) brightness(0.55)",
                }}
              >
                {/* card border glow */}
                <div style={{
                  position:"absolute", inset:-1,
                  borderRadius:8,
                  background: isActive
                    ? "linear-gradient(135deg, rgba(0,173,181,0.45) 0%, rgba(200,70,10,0.45) 100%)"
                    : "transparent",
                  transition:"background 0.5s",
                  zIndex:1,
                }}/>

                <Image
                  src={img.src}
                  alt={`Kalifa portrait ${i + 1}`}
                  fill
                  priority={isCenter}
                  className="object-cover object-top"
                  style={{ borderRadius:6 }}
                  sizes="(max-width:768px) 80vw, 380px"
                />

                {/* rim lights */}
                <div style={{
                  position:"absolute", top:"28%", left:-3, bottom:"8%",
                  width:3,
                  background:"linear-gradient(to bottom, transparent, rgba(0,155,215,0.65) 35%, rgba(0,135,200,0.3) 70%, transparent)",
                  filter:"blur(2px)", borderRadius:4,
                }}/>
                <div style={{
                  position:"absolute", top:"28%", right:-3, bottom:"8%",
                  width:3,
                  background:"linear-gradient(to bottom, transparent, rgba(215,75,8,0.7) 35%, rgba(195,65,8,0.3) 70%, transparent)",
                  filter:"blur(2px)", borderRadius:4,
                }}/>

                {/* bottom fade */}
                <div style={{
                  position:"absolute", bottom:0, left:0, right:0, height:"52%",
                  background:"linear-gradient(to top, rgba(5,8,16,0.96) 0%, rgba(5,8,16,0.5) 45%, transparent 100%)",
                  borderRadius:"0 0 6px 6px",
                }}/>

                {/* active indicator dot */}
                {isActive && (
                  <div style={{
                    position:"absolute", bottom:14, left:"50%",
                    transform:"translateX(-50%)",
                    width:6, height:6, borderRadius:"50%",
                    background:"#00ADB5",
                    boxShadow:"0 0 10px rgba(0,173,181,0.8)",
                    animation:"pulseDot 2s ease-in-out infinite",
                  }}/>
                )}
              </div>
            );
          })}
        </div>

        {/* ── left text panel ── */}
        <div
          className="absolute pointer-events-none"
          style={{ zIndex:30, left:"5%", top:"50%", transform:"translateY(-50%)", maxWidth:310 }}
        >
          <p style={{
            fontFamily:"'Space Mono', monospace",
            fontSize:10, letterSpacing:"0.42em",
            color:"#00ADB5", textTransform:"uppercase",
            marginBottom:18, opacity:0,
            animation:"fadeUpIn 0.8s ease forwards 0.35s",
          }}>
            // Front-End Developer
          </p>

          <div style={{ overflow:"hidden", marginBottom:20 }}>
            {["KALIFA", "HAMEED."].map((word, wi) => (
              <span key={wi} style={{
                display:"block",
                fontFamily:"'Bebas Neue', sans-serif",
                fontSize:"clamp(58px,7.5vw,88px)",
                lineHeight:0.88,
                letterSpacing:"0.04em",
                color: wi === 1 ? "#00ADB5" : "#E6EDF3",
                opacity:0,
                transform:"translateY(38px)",
                animation:`slideUpIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards ${0.45 + wi * 0.15}s`,
              }}>
                {word}
              </span>
            ))}
          </div>

          <p style={{
            fontSize:12, fontWeight:400, color:"rgba(230,237,243,0.52)",
            lineHeight:1.75, letterSpacing:"0.04em", maxWidth:255,
            opacity:0, animation:"fadeUpIn 0.8s ease forwards 0.85s",
          }}>
            React · Next.js · TypeScript<br/>
            2+ years building high-performance<br/>web applications in Dubai.
          </p>

          <div style={{
            marginTop:28, display:"flex", gap:12, flexWrap:"wrap",
            opacity:0, animation:"fadeUpIn 0.8s ease forwards 1.05s",
            pointerEvents:"all",
          }}>
            <a
              href="https://wa.me/971503549798"
              style={{
                padding:"11px 22px",
                background:"#00ADB5", color:"#050810",
                fontSize:9, fontWeight:900,
                fontFamily:"'Space Mono', monospace",
                letterSpacing:"0.18em", textTransform:"uppercase",
                border:"none", borderRadius:4,
                textDecoration:"none", display:"inline-flex",
                alignItems:"center", gap:6,
                transition:"all 0.3s",
                boxShadow:"0 0 0 rgba(0,173,181,0)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 22px rgba(0,173,181,0.38)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 rgba(0,173,181,0)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              WhatsApp →
            </a>
            <a
              href="mailto:kmyjob46@gmail.com"
              style={{
                padding:"11px 22px",
                background:"transparent", color:"rgba(230,237,243,0.65)",
                fontSize:9, fontWeight:700,
                fontFamily:"'Space Mono', monospace",
                letterSpacing:"0.18em", textTransform:"uppercase",
                border:"1px solid rgba(255,255,255,0.14)", borderRadius:4,
                textDecoration:"none", display:"inline-block",
                transition:"all 0.3s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#00ADB5"; el.style.color = "#00ADB5";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.14)"; el.style.color = "rgba(230,237,243,0.65)";
              }}
            >
              Send Email ✉
            </a>
          </div>
        </div>

        {/* ── right stats panel ── */}
        <div style={{
          position:"absolute", zIndex:30, right:"4%", top:"50%",
          transform:"translateY(-50%)",
          display:"flex", flexDirection:"column", alignItems:"flex-end", gap:18,
          opacity:0, animation:"fadeUpIn 0.8s ease forwards 1.2s",
        }}>
          {[
            { label:"Experience", value:"2+", unit:"YRS" },
            { label:"Projects",   value:"6",  unit:"BUILT" },
            { label:"Location",   value:"DUBAI", unit:"UAE", small:true },
            { label:"Joining",    value:"NOW", unit:"", teal:true },
          ].map((s, si) => (
            <React.Fragment key={si}>
              <div style={{ textAlign:"right" }}>
                <span style={{
                  display:"block",
                  fontFamily:"'Space Mono', monospace",
                  fontSize:8, letterSpacing:"0.38em",
                  color:"rgba(139,148,158,0.65)",
                  textTransform:"uppercase", marginBottom:3,
                }}>{s.label}</span>
                <span style={{
                  display:"block",
                  fontFamily:"'Bebas Neue', sans-serif",
                  fontSize: s.small ? 22 : 30,
                  letterSpacing:"0.06em",
                  color: s.teal ? "#00ADB5" : "#E6EDF3",
                  lineHeight:1,
                }}>
                  {s.value}
                  {s.unit && (
                    <span style={{ color:"#00ADB5", fontSize:"0.7em", marginLeft:2 }}>
                      {s.unit}
                    </span>
                  )}
                </span>
              </div>
              {si < 3 && (
                <div style={{
                  width:1, height:44, marginLeft:"auto",
                  background:"linear-gradient(to bottom, transparent, rgba(0,173,181,0.38), transparent)",
                }}/>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ── status bar ── */}
        <div style={{
          position:"absolute", top:28, left:"50%", transform:"translateX(-50%)",
          zIndex:30, display:"flex", alignItems:"center", gap:12,
          opacity:0, animation:"fadeUpIn 0.8s ease forwards 0.15s",
        }}>
          <div style={{
            width:6, height:6, background:"#00ADB5", borderRadius:"50%",
            animation:"pulseDot 2s ease-in-out infinite",
          }}/>
          <span style={{
            fontFamily:"'Space Mono', monospace",
            fontSize:9, letterSpacing:"0.38em",
            color:"rgba(0,173,181,0.68)", textTransform:"uppercase",
          }}>
            System.Status: Active_In_Dubai
          </span>
        </div>

        {/* ── image selector dots ── */}
        <div style={{
          position:"absolute", bottom:72, left:"50%", transform:"translateX(-50%)",
          zIndex:30, display:"flex", gap:10, alignItems:"center",
          opacity:0, animation:"fadeUpIn 0.8s ease forwards 1.45s",
        }}>
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              style={{
                width: i === activeIdx ? 24 : 6,
                height:6, borderRadius:3, border:"none",
                background: i === activeIdx ? "#00ADB5" : "rgba(139,148,158,0.4)",
                cursor:"pointer", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",
                padding:0,
              }}
            />
          ))}
        </div>

        {/* ── scroll indicator ── */}
        <div style={{
          position:"absolute", bottom:22, left:"50%", transform:"translateX(-50%)",
          zIndex:30, display:"flex", flexDirection:"column", alignItems:"center", gap:6,
          opacity:0, animation:"fadeUpIn 1s ease forwards 1.7s",
        }}>
          <span style={{
            fontFamily:"'Space Mono', monospace",
            fontSize:7, letterSpacing:"0.42em",
            color:"rgba(0,173,181,0.45)", textTransform:"uppercase",
          }}>Scroll</span>
          <div style={{
            width:1, height:34,
            background:"linear-gradient(to bottom, #00ADB5, transparent)",
            animation:"scrollPulse 2s ease-in-out infinite",
          }}/>
        </div>

        {/* ── keyframes ── */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap');
          @keyframes fadeUpIn {
            from { opacity:0; transform:translateY(16px); }
            to   { opacity:1; transform:translateY(0); }
          }
          @keyframes slideUpIn {
            from { opacity:0; transform:translateY(40px); }
            to   { opacity:1; transform:translateY(0); }
          }
          @keyframes pulseDot {
            0%,100% { opacity:1; transform:scale(1); }
            50%      { opacity:0.35; transform:scale(0.6); }
          }
          @keyframes scrollPulse {
            0%,100% { opacity:0.4; transform:scaleY(1); }
            50%      { opacity:1; transform:scaleY(1.12); }
          }
          section[data-hero] * { box-sizing:border-box; }
        `}</style>
      </section>
    </>
  );
}
