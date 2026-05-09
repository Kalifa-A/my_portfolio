import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full">
      {/* Container: reduced padding for mobile, kept rounded for desktop */}
      <div className="relative bg-[#161B22] border border-[#30363d] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-2xl">
        
        {/* Background Decorative Element - Smaller on mobile */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#00ADB5]/5 blur-[80px] md:blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="font-mono text-[#00ADB5] text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-6 animate-pulse">
            // Available_for_immediate_onboarding
          </p>
          
          {/* Responsive Heading: text-4xl for mobile, text-8xl for desktop */}
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#E6EDF3] leading-[0.9] mb-10 md:mb-12">
            LET'S BUILD <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#3B82F6]">
              SOMETHING GREAT.
            </span>
          </h2>

          {/* Button Group: Stacks on mobile (flex-col), side-by-side on tablet (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center">
            {/* Primary WhatsApp Action */}
            <a 
              href="https://wa.me/971503549798" 
              className="flex-1 px-8 py-5 md:px-10 md:py-6 bg-[#00ADB5] text-[#0D1117] font-black rounded-2xl md:rounded-3xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,173,181,0.2)]"
            >
              <span className="text-sm md:text-base">WHATSAPP ME</span>
              <span className="text-xl">→</span>
            </a>

            {/* Secondary Email Action */}
            <a 
              href="mailto:kmyjob46@gmail.com" 
              className="flex-1 px-8 py-5 md:px-10 md:py-6 bg-transparent border border-[#30363d] text-[#E6EDF3] font-black rounded-2xl md:rounded-3xl hover:bg-[#1c232c] hover:border-[#00ADB5] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span className="text-sm md:text-base">SEND EMAIL</span>
              <span className="text-xl">✉</span>
            </a>
          </div>

          {/* Quick Stats Footer: Grid for mobile, flex for desktop */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-12 border-t border-[#30363d] pt-10 md:pt-12 w-full">
             <div className="flex flex-col">
                <span className="font-mono text-[9px] md:text-[10px] text-[#8b949e] uppercase tracking-widest mb-1">Current_Loc</span>
                <span className="font-bold text-xs md:text-base text-[#E6EDF3]">DUBAI, UAE</span>
             </div>
             <div className="flex flex-col">
                <span className="font-mono text-[9px] md:text-[10px] text-[#8b949e] uppercase tracking-widest mb-1">Joining</span>
                <span className="font-bold text-xs md:text-base text-[#00ADB5]">IMMEDIATE</span>
             </div>
             <div className="flex flex-col col-span-2 md:col-span-1">
                <span className="font-mono text-[9px] md:text-[10px] text-[#8b949e] uppercase tracking-widest mb-1">Visa_Status</span>
                <span className="font-bold text-xs md:text-base text-[#E6EDF3]">VISIT VISA</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
