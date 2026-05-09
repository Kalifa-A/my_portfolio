import React from 'react';

const Education = () => {
  const degrees = [
    {
      level: "Masters_Degree",
      title: "MCA (Master of Computer Applications)",
      institution: "Anna University",
      status: "COMPLETED",
      accent: "#00ADB5"
    },
    {
      level: "Bachelors_Degree",
      title: "BCA (Bachelor of Computer Applications)",
      institution: "Anna University",
      status: "COMPLETED",
      accent: "#3B82F6"
    }
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {degrees.map((edu, i) => (
          <div 
            key={i} 
            className="group relative p-8 bg-[#161B22] border border-[#30363d] rounded-[2.5rem] overflow-hidden hover:border-[#00ADB5] transition-all duration-500"
          >
            {/* Background Data Decal */}
            <div className="absolute -right-4 -bottom-4 text-7xl font-black text-[#ffffff]/5 select-none uppercase italic group-hover:text-[#00ADB5]/10 transition-colors">
              {edu.level.split('_')[0]}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="text-[9px] font-mono px-2 py-1 rounded border border-current font-bold"
                  style={{ color: edu.accent }}
                >
                  {edu.level}
                </span>
                <span className="text-[9px] font-mono text-[#8b949e] uppercase tracking-widest">
                  Verified_Record
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-2">{edu.title}</h3>
              <p className="text-[#8b949e] font-medium mb-6">{edu.institution}</p>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00ADB5] rounded-full"></div>
                <span className="text-[10px] font-mono text-[#00ADB5] font-bold uppercase tracking-tighter">
                  Status: {edu.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;