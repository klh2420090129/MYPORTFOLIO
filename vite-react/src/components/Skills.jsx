import React from 'react'

export default function Skills() {
  return (
    <section id="skills" className="mb-16 animate-on-scroll">
      <h2 className="section-header">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="skill-card bg-[#161b22] border border-[#30363d] rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-[#58a6ff]">Cloud & Infrastructure</h3>
          <p className="text-[#8b949e]">Microsoft Azure, AWS (foundational), Linux, Networking Fundamentals, Cisco Packet Tracer</p>
        </div>
        <div className="skill-card bg-[#161b22] border border-[#30363d] rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-[#58a6ff]">Web Development</h3>
          <p className="text-[#8b949e]">HTML, CSS, JavaScript</p>
        </div>
        <div className="skill-card bg-[#161b22] border border-[#30363d] rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-[#58a6ff]">Databases</h3>
          <p className="text-[#8b949e]">SQL, MySQL</p>
        </div>
        <div className="skill-card bg-[#161b22] border border-[#30363d] rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-[#58a6ff]">Version Control & Tools</h3>
          <p className="text-[#8b949e]">Git, GitHub, VS Code</p>
        </div>
        <div className="skill-card bg-[#161b22] border border-[#30363d] rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-[#58a6ff]">Programming</h3>
          <p className="text-[#8b949e]">Python, Java, C</p>
        </div>
        <div className="skill-card bg-[#161b22] border border-[#30363d] rounded-2xl p-6 text-center shadow-lg">
          <h3 className="text-xl font-bold mb-2 text-[#58a6ff]">Professional</h3>
          <p className="text-[#8b949e]">Technical Communication, Cross-Functional Collaboration, Documentation</p>
        </div>
      </div>
    </section>
  )
}
