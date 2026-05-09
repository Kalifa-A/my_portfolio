"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const skillCategories = [
    { title: "Frontend", skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3"] },
    { title: "Styling & UI", skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Figma to Code"] },
    { title: "State & Data", skills: ["Redux Toolkit", "Context API", "REST APIs", "Axios"] },
    { title: "Tools", skills: ["Git / GitHub", "NPM / Yarn", "Vite", "Firebase"] },
    { title: "IT Support", skills: ["Troubleshooting", "Network Management", "Hardware Setup", "User Support"] }
  ];

  return (
    <>
      <section className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* 1. Main Bio Box (Left) */}
          <div className="lg:col-span-8 bg-[#161B22] border border-[#30363d] rounded-[2rem] md:rounded-tl-[3rem] md:rounded-br-[3rem] p-8 md:p-14 relative overflow-hidden shadow-xl">
             <div className="absolute top-0 left-0 w-20 h-[1px] bg-[#00ADB5]"></div>
             <p className="font-mono text-[#00ADB5] mb-4 text-[10px] md:text-xs tracking-widest uppercase">
               System.Status: <span className="animate-pulse">Active_In_Dubai</span>
             </p>
             
             <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-[#E6EDF3]">
               KALIFA <br/> <span className="text-[#00ADB5]">ABDUL HAMEED.</span>
             </h1>

             <p className="text-[#8b949e] text-sm md:text-base max-w-2xl font-medium leading-relaxed text-justify md:text-left">
               Frontend Developer with 2+ years of hands-on experience in designing, developing, and maintaining
               responsive web applications using <span className="text-[#E6EDF3]">React.js, JavaScript (ES6+), and Next.js</span>. 
               Expert in building admin dashboards, REST API integration, and reusable components. 
               Strong focus on state management and performance optimization. 
               <br/><br/>
               <span className="text-[#00ADB5] font-bold tracking-tight">// Available for immediate joining in Dubai.</span>
             </p>
          </div>

          {/* 2. Right Column (Image & Skills) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Portrait Image Container */}
            <div className="relative aspect-[3/4] bg-[#161B22] border border-[#30363d] rounded-[2rem] overflow-hidden group">
              <Image 
                src="/my.png" 
                alt="Kalifa Abdul Hameed" 
                fill 
                priority
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Technical Skills Trigger Card */}
            <div 
              onClick={() => setIsSkillsOpen(true)}
              className="bg-[#00ADB5] p-6 md:p-8 rounded-[2rem] text-[#0D1117] flex-grow flex flex-col justify-between group cursor-pointer transition-all hover:bg-[#00c2cb] hover:shadow-[0_0_30px_rgba(0,173,181,0.3)]"
            >
              <h3 className="font-black text-2xl md:text-3xl leading-none mb-4">TECHNICAL <br/> SKILLS_</h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#0D1117] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#0D1117] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#0D1117] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#0D1117]/80">
                    Expand_Stack
                  </span>
                </div>
                
                <span className="inline-block border-2 border-[#0D1117] px-4 py-2 rounded-full text-[10px] font-mono font-black uppercase tracking-widest text-[#0D1117] group-hover:bg-[#0D1117] group-hover:text-[#00ADB5] transition-all duration-300 text-center">
                  View_Full_Console
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Right Side Drawer (Full Stack) */}
      <div className={`fixed inset-y-0 right-0 z-[200] w-full md:w-[450px] bg-[#111418] border-l border-[#30363d] shadow-2xl transition-transform duration-500 ease-in-out ${isSkillsOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 md:p-12 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-[#00ADB5] font-mono text-xs font-bold tracking-[0.3em]">// SKILL_MATRIX_V1</h2>
            <button 
              onClick={() => setIsSkillsOpen(false)}
              className="bg-[#161B22] border border-[#30363d] px-4 py-2 rounded-lg text-[#8b949e] hover:text-white font-mono text-xs transition-colors"
            >
              CLOSE [X]
            </button>
          </div>

          <div className="space-y-12">
            {skillCategories.map((cat, i) => (
              <div key={i}>
                <h4 className="text-[#E6EDF3] font-black text-xl mb-5 flex items-center gap-3">
                  <span className="text-[#00ADB5]">0{i+1}</span> {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-[#0D1117] border border-[#30363d] text-[#8b949e] rounded-xl text-xs font-mono hover:border-[#00ADB5] hover:text-[#00ADB5] transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#00ADB5]/5 border border-[#00ADB5]/20 rounded-3xl">
             <p className="text-[10px] text-[#00ADB5] font-mono mb-4 uppercase tracking-widest">Recruitment_Quick_Action</p>
             <a href="https://wa.me/971503549798" className="block text-center py-4 bg-[#00ADB5] text-[#0D1117] font-black rounded-2xl text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
               WHATSAPP NOW
             </a>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      {isSkillsOpen && (
        <div 
          onClick={() => setIsSkillsOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150] transition-opacity duration-500"
        />
      )}
    </>
  );
}
