"use client";

import React from 'react';
import Navbar from './components/Navbar';
import CinematicHero from './components/CinematicHero';
import Experience from './components/ExperienceCard';
import Projects from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import { DetailFooter } from './components/DetailFooter';
import Education from './components/Education';

export default function Home() {
  return (
    <main 
      className="relative min-h-screen text-[#E6EDF3] selection:bg-[#00ADB5] selection:text-[#050810] overflow-x-hidden"
      style={{ background: "#050810" }}
    >
      <Navbar />

      {/* Cinematic Hero Stage */}
      <CinematicHero />

      {/* Main Content Blueprint Container */}
      <div className="w-full relative z-10 mx-auto">

        {/* Experience Section */}
        <Experience />

        {/* Education Card Section */}
        <Education />

        {/* Projects Section */}
        <Projects />
   
        {/* Contact Section */}
        <ContactSection />

      </div>

      <DetailFooter />

      {/* Global Background Ambience Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle, soft technical mesh grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: "linear-gradient(rgba(0, 173, 181, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 173, 181, 0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        {/* Low opacity central bloom to create display depth behind sections */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(0, 173, 181, 0.03) 0%, transparent 75%)"
          }}
        />
      </div>

      <style jsx global>{`
        html { 
          scroll-behavior: smooth; 
          background: #050810;
        }
        
        /* Ultra-clean custom system scrollbar */
        ::-webkit-scrollbar { 
          width: 5px; 
        }
        ::-webkit-scrollbar-track { 
          background: #050810; 
        }
        ::-webkit-scrollbar-thumb { 
          background: rgba(255, 255, 255, 0.1); 
          border-radius: 20px;
          transition: background 0.3s;
        }
        ::-webkit-scrollbar-thumb:hover { 
          background: #00ADB5; 
        }
      `}</style>
    </main>
  );
}