export default function Experience() {
  const experiences = [
    {
      title: "React Developer",
      company: "AlteSence Technology",
      date: "2024 - 2025",
      details: "Developed reusable UI components and API-driven dashboards."
    },
    {
      title: "Web Development Intern",
      company: "Prodigy Technology",
      date: "2023",
      details: "Optimized performance and responsiveness by 20%."
    }
  ];

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, i) => (
          <div key={i} className="p-10 bg-[#161B22] border border-[#30363d] rounded-[2.5rem] relative group hover:border-[#00ADB5] transition-all">
            <span className="absolute top-8 right-10 font-mono text-[#3B82F6] text-xs font-bold">{exp.date}</span>
            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
            <p className="text-[#00ADB5] font-bold mb-6">{exp.company}</p>
            <p className="text-[#8b949e] text-sm leading-relaxed">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}