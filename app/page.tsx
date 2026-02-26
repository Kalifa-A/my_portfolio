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

      {/* Hero: Reduced bottom padding */}
      <div className="pt-24 pb-8"> 
        <Hero />
      </div>

      {/* Experience & Education: Wrapped in a tighter container */}
      <div className="max-w-7xl mx-auto space-y-4"> 
        <section id="experience" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-[#00ADB5]"></div>
          <h2 className="text-2xl font-black tracking-tighter uppercase">Experience</h2>
          <div className="h-[1px] flex-grow bg-[#30363d]"></div>
        </div>
        <Experience/>
      </section>

        <section id="education" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-[#00ADB5]"></div>
          <h2 className="text-2xl font-black tracking-tighter uppercase">Education</h2>
          <div className="h-[1px] flex-grow bg-[#30363d]"></div>
        </div>
        <Education/>
      </section>

      {/* Projects: Reduced vertical padding from py-20 to py-12 */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-[#00ADB5]"></div>
          <h2 className="text-2xl font-black tracking-tighter uppercase">Project_Archive</h2>
          <div className="h-[1px] flex-grow bg-[#30363d]"></div>
        </div>
        <Projects/>
      </section>
      </div>

      {/* Contact: Reduced padding from py-32 to py-12 */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-8 bg-[#00ADB5]"></div>
          <h2 className="text-2xl font-black tracking-tighter uppercase">Contact</h2>
          <div className="h-[1px] flex-grow bg-[#30363d]"></div>
        </div>
        <ContactSection />
      </section>
      <DetailFooter />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.03] bg-grid"></div>
      </div>

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        /* Tightening the scrollbar for the compact look */
        ::-webkit-scrollbar { width: 5px; }
      `}</style>
    </main>
  );
}
