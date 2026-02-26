import React from 'react';

const ProjectCard = () => {
  const projects = [
    {
      title: "Thaj Anwar E-Commerce",
      tags: ["React", "REST API", "Tailwind"],
      description: "Full-scale store with product filtering and admin dashboard integration."
    },
    {
      title: "Weather Forecast System",
      tags: ["JavaScript", "API Integration"],
      description: "Real-time weather tracking application utilizing external data streams."
    },
    {
      title: "Visitor Management",
      tags: ["React", "Logic", "OTP"],
      description: "Secure apartment management system with OTP verification and alerts."
    },
    {
      title: "CineTrack: Movie Discovery",
      tags: ["React", "TMDB API", "Axios"],
      description: "A high-performance movie database app featuring real-time search, trending filters, and dynamic detail pages using RESTful APIs.",
      link:movie-uptodate.vercel.app
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <div 
          key={i} 
          className="bg-[#161B22] border border-[#30363d] p-8 rounded-[2rem] hover:border-[#00ADB5] transition-all group relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#00ADB5]/5 rounded-bl-full translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
          
          <div className="flex gap-2 mb-6">
            {p.tags.map(tag => (
              <span key={tag} className="text-[9px] font-mono text-[#3B82F6] border border-[#3B82F6]/30 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#E6EDF3] mb-4 group-hover:text-[#00ADB5] transition-colors">
            {p.title}
          </h3>
          
          <p className="text-[#8b949e] text-sm leading-relaxed mb-6">
            {p.description}
          </p>
          {/* THE LIVE LINK BUTTON */}
  <a 
    href={p.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-[10px] font-mono text-[#00ADB5] font-black border border-[#00ADB5]/30 px-4 py-2 rounded-full hover:bg-[#00ADB5] hover:text-[#0D1117] transition-all"
  >
    <span>VIEW_LIVE_DEPLOYMENT</span>
    <span className="text-lg">↗</span>
  </a>

          <div className="flex items-center gap-2 text-[10px] font-mono text-[#00ADB5] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>VIEW_SOURCE</span>
            <span>→</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
