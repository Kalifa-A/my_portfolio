import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
      <div className="relative bg-[#161B22] border border-[#30363d] rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-2xl">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ADB5]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="font-mono text-[#00ADB5] text-xs uppercase tracking-[0.5em] mb-6 animate-pulse">
            // Available_for_immediate_onboarding
          </p>
          
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#E6EDF3] leading-none mb-12">
            LET'S BUILD <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ADB5] to-[#3B82F6]">
              SOMETHING GREAT.
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center">
            {/* Primary WhatsApp Action */}
            <a 
              href="https://wa.me/971503549798" 
              className="flex-1 px-10 py-6 bg-[#00ADB5] text-[#0D1117] font-black rounded-3xl hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,173,181,0.3)]"
            >
              <span>WHATSAPP ME</span>
              <span className="text-xl">→</span>
            </a>

            {/* Secondary Email Action */}
            <a 
              href="mailto:kmyjob46@gmail.com" 
              className="flex-1 px-10 py-6 bg-transparent border border-[#30363d] text-[#E6EDF3] font-black rounded-3xl hover:bg-[#1c232c] hover:border-[#00ADB5] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span>SEND EMAIL</span>
              <span className="text-xl">✉</span>
            </a>
          </div>

          {/* Quick Stats Footer */}
          <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-[#30363d] pt-12 w-full">
             <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#8b949e] uppercase tracking-widest mb-1">Current_Loc</span>
                <span className="font-bold text-[#E6EDF3]">DUBAI, UAE</span>
             </div>
             <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#8b949e] uppercase tracking-widest mb-1">Joining_Time</span>
                <span className="font-bold text-[#00ADB5]">IMMEDIATE</span>
             </div>
             <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[#8b949e] uppercase tracking-widest mb-1">Visa_Status</span>
                <span className="font-bold text-[#E6EDF3]">VISIT VISA</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}