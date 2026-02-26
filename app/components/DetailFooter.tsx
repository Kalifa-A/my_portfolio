import React from 'react';

export const DetailFooter = () => {
  return (
    <footer className="mt-20 border-t border-[#30363d] bg-[#0D1117] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black text-[#E6EDF3] tracking-tighter">
            KALIFA<span className="text-[#00ADB5]">.</span>
          </h2>
          <p className="text-[#8b949e] text-[10px] font-mono uppercase tracking-widest mt-1">
            Front-End Developer // Dubai, UAE
          </p>
        </div>

        {/* Right Side: Socials */}
        <div className="flex gap-8">
          <a 
            href="https://www.linkedin.com/in/kalifa-a-695139266" 
            target="_blank"
            className="text-[10px] font-mono font-bold text-[#8b949e] hover:text-[#3B82F6] transition-colors uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Kalifa-A" 
            target="_blank"
            className="text-[10px] font-mono font-bold text-[#8b949e] hover:text-[#00ADB5] transition-colors uppercase tracking-widest"
          >
            GitHub
          </a>
          <span className="text-[10px] font-mono text-[#30363d]">
            © 2024
          </span>
        </div>

      </div>

      {/* Bottom Technical Line */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center">
        <div className="px-4 py-1 border border-[#30363d] rounded-full text-[8px] font-mono text-[#30363d] uppercase tracking-[0.4em]">
          Built with Next.js & Tailwind // Optimized for Performance
        </div>
      </div>
    </footer>
  );
};