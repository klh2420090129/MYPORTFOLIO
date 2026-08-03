import React from 'react'

const experiences = [
  {
    title: "Bachelor's in Computer Science & Information Technology",
    company: "KLHB",
    period: "2024 - Present",
    description: "Pursuing undergraduate degree focused on core computer science fundamentals including data structures, algorithms, and object-oriented programming. Specializing in modern web development with React, AI/ML with Python and TensorFlow, database management systems, and software engineering practices. Actively building hands-on projects to apply theoretical concepts.",
    type: "education"
  },
  {
    title: "International Baccalaureate Diploma Program",
    company: "The Gaudium School",
    period: "2022",
    description: "Completed rigorous pre-university curriculum with 37/45 points. Studied six subjects across sciences, humanities, and languages at higher and standard levels. Completed Extended Essay, Theory of Knowledge, and CAS (Creativity, Activity, Service) components, developing critical thinking, research, and time management skills.",
    type: "education"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="mb-16 animate-on-scroll">
      <h2 className="section-header">Experience & Education</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#30363d]"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full border-2 ${
                  exp.type === 'work' 
                    ? 'bg-[#58a6ff] border-[#58a6ff]' 
                    : 'bg-[#8a58ff] border-[#8a58ff]'
                }`}></div>

                {/* Content card */}
                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/10">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[#c9d1d9]">{exp.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      exp.type === 'work'
                        ? 'bg-[#58a6ff]/10 text-[#58a6ff] border border-[#58a6ff]/20'
                        : 'bg-[#8a58ff]/10 text-[#8a58ff] border border-[#8a58ff]/20'
                    }`}>
                      {exp.type === 'work' ? '💼 Work' : '🎓 Education'}
                    </span>
                  </div>
                  <p className="text-[#8b949e] font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-[#8b949e] mb-3">{exp.period}</p>
                  <p className="text-sm text-[#8b949e] leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
