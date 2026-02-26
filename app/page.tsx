"use client";

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/ExperienceCard';
import Projects from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import { DetailFooter } from './components/DetailFooter';
import Education from './components/Education';

export default function Home() {
return (
    <main className="relative min-h-screen bg-[#0D1117] text-[#E6EDF3] selection:bg-[#00ADB5] selection:text-[#0D1117] overflow-x-hidden">
      
      <Navbar />

      {/* Hero: Responsive top padding to clear fixed Navbar */}
      <div className="pt-20 md:pt-28 pb-4 md:pb-8"> 
        <Hero />
      </div>

      {/* Experience & Education: Combined wrapper for tighter vertical flow */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-2 md:space-y-4"> 
        
        {/* Experience Section */}
        <section id="experience" className="py-6 md:py-10">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-6 md:w-8 bg-[#00ADB5]"></div>
            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase">Experience</h2>
            <div className="h-[1px] flex-grow bg-[#30363d]"></div>
          </div>
          <Experience />
        </section>

        {/* Education Section */}
        <section id="education" className="py-6 md:py-10">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-6 md:w-8 bg-[#00ADB5]"></div>
            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase">Education</h2>
            <div className="h-[1px] flex-grow bg-[#30363d]"></div>
          </div>
          <Education />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-6 md:py-10">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-6 md:w-8 bg-[#00ADB5]"></div>
            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase">Project_Archive</h2>
            <div className="h-[1px] flex-grow bg-[#30363d]"></div>
          </div>
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-6 md:py-10">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="h-[1px] w-6 md:w-8 bg-[#00ADB5]"></div>
            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase">Contact</h2>
            <div className="h-[1px] flex-grow bg-[#30363d]"></div>
          </div>
          <ContactSection />
        </section>

      </div>

      <DetailFooter />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.03] bg-grid"></div>
        {/* Subtle radial glow to make the dark background less flat */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,173,181,0.02),transparent_70%)]"></div>
      </div>

      <style jsx global>{`
        html { 
          scroll-behavior: smooth; 
        }
        /* Mobile-friendly custom scrollbar */
        ::-webkit-scrollbar { 
          width: 4px; 
        }
        ::-webkit-scrollbar-track { 
          background: #0D1117; 
        }
        ::-webkit-scrollbar-thumb { 
          background: #30363d; 
          border-radius: 10px; 
        }
        ::-webkit-scrollbar-thumb:hover { 
          background: #00ADB5; 
        }
      `}</style>
    </main>
  );
}
