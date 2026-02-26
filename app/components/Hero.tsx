"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const skillCategories = [
    { title: "Frontend", skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3"] },
    { title: "Styling & UI", skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Figma to Code"] },
    { title: "State & Data", skills: ["Redux Toolkit", "Context API", "REST APIs", "Axios"] },
    { title: "Tools", skills: ["Git / GitHub", "NPM / Yarn", "Vite", "Firebase"] }
  ];

  return (
    <>
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Terminal Box (Left) */}
          <div className="lg:col-span-8 bg-[#161B22] border border-[#30363d] rounded-tl-[3rem] rounded-br-[3rem] p-10 md:p-14 relative overflow-hidden glow-shadow">
             <p className="font-mono text-[#00ADB5] mb-4 text-xs">SYSTEM.PROFILE_LOADED</p>
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-[#E6EDF3]">
               KALIFA <br/> <span className="text-[#00ADB5]">ABDUL HAMEED.</span>
             </h1>
             <p className="text-[#8b949e] max-w-xl font-medium leading-relaxed text-justify">
                      Frontend Developer with 2+ years of hands-on experience in designing, developing, and maintaining
                      responsive web applications using React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS,
                      Bootstrap, and Next.js. Strong experience in admin dashboards, REST API integration, reusable

                      components, state management (Redux, Context API), performance optimization, and cross-
                      browser compatibility. Familiar with Agile/Scrum methodology, version control using Git/GitHub,

                      and debugging production issues. Available for immediate joining in Dubai.
                          </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Image Box */}
            {/* Updated Profile Image Module */}
<div className="relative aspect-[3/4] bg-[#161B22] border border-[#30363d] rounded-[2.5rem] overflow-hidden group">
  <Image 
    src="/my.png" 
    alt="Kalifa Abdul Hameed" 
    fill 
    priority
    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
  
  {/* Cyber-Glow Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-40"></div>
  
  {/* Subtle Border Glow on Hover */}
  <div className="absolute inset-0 border border-[#00ADB5]/0 group-hover:border-[#00ADB5]/30 rounded-[2.5rem] transition-colors duration-500"></div>
</div>

            {/* CLICKABLE SKILLS CARD */}
            <div 
              onClick={() => setIsSkillsOpen(true)}
              className="bg-[#00ADB5] p-8 rounded-[2.5rem] text-[#0D1117] flex-grow flex flex-col justify-between group cursor-pointer transition-all hover:bg-[#00c2cb] hover:shadow-[0_0_20px_rgba(0,173,181,0.4)]"
            >
              <h3 className="font-black text-3xl leading-none">TECHNICAL <br/> SKILLS_</h3>
              <div className="flex flex-col gap-2">
  {/* The Animated Scanner Line */}
  <div className="flex items-center gap-2">
    <div className="flex gap-1">
      <span className="w-1 h-1 bg-[#0D1117] rounded-full animate-[bounce_1s_infinite_100ms]"></span>
      <span className="w-1 h-1 bg-[#0D1117] rounded-full animate-[bounce_1s_infinite_200ms]"></span>
      <span className="w-1 h-1 bg-[#0D1117] rounded-full animate-[bounce_1s_infinite_300ms]"></span>
    </div>
    <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#0D1117]/70">
      Expand_Stack
    </span>
  </div>
  
  {/* The Badge */}
  <span className="inline-block border-2 border-[#0D1117] px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-widest text-[#0D1117] group-hover:bg-[#0D1117] group-hover:text-[#00ADB5] transition-all duration-300">
    View_Full_Console
  </span>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT SIDE PANEL (SLIDE-OVER) */}
      <div className={`fixed inset-y-0 right-0 z-[200] w-full md:w-[400px] bg-[#161B22] border-l border-[#30363d] shadow-2xl transition-transform duration-500 ease-in-out ${isSkillsOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-10 h-full overflow-y-auto">
          {/* Close Header */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[#00ADB5] font-mono text-xs font-bold tracking-[0.3em]">// SKILL_LOG</h2>
            <button 
              onClick={() => setIsSkillsOpen(false)}
              className="text-[#8b949e] hover:text-white font-mono text-sm"
            >
              CLOSE [X]
            </button>
          </div>

          <div className="space-y-10">
            {skillCategories.map((cat, i) => (
              <div key={i}>
                <h4 className="text-[#E6EDF3] font-black text-lg mb-4 border-b border-[#30363d] pb-2">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-[#0D1117] border border-[#30363d] text-[#8b949e] rounded-lg text-xs font-mono group hover:border-[#00ADB5] hover:text-[#00ADB5] transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Link in Panel */}
          <div className="mt-20 pt-10 border-t border-[#30363d]">
             <p className="text-xs text-[#8b949e] font-mono mb-4">AVAILABLE FOR IMMEDIATE INTERVIEW</p>
             <a href="https://wa.me/971503549798" className="block text-center py-4 bg-[#3B82F6] text-white font-black rounded-xl text-sm">WHATSAPP NOW</a>
          </div>
        </div>
      </div>

      {/* Dark Overlay when panel is open */}
      {isSkillsOpen && (
        <div 
          onClick={() => setIsSkillsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
        />
      )}
    </>
  );
}