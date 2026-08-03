import React from 'react'

export default function About() {
  return (
    <section id="about" className="mb-16 animate-on-scroll">
      <h2 className="section-header">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#58a6ff] shadow-lg">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" onError={(e)=>{e.currentTarget.src='https://ui-avatars.com/api/?name=Ruchit+Dwara&background=58a6ff&color=fff&size=256'}} alt="Ruchit Dwara" className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-[#161b22] rounded-3xl p-6 md:p-10 max-w-2xl text-center lg:text-left shadow-2xl border border-[#30363d]">
          <p className="text-base md:text-lg leading-relaxed">
            I am a dynamic and motivated B.Tech Computer Science and IT student with a proven track record of academic excellence, strong leadership, and cross-cultural experience from my time in the United States. I'm passionate about statistical analysis, artificial intelligence, and programming (Java, Python, C). I excel in project-based learning and teamwork, with strong communication and people skills. I'm actively pursuing advanced knowledge in emerging technologies, always applying a structured and analytical approach to problem-solving.
          </p>
        </div>
      </div>
    </section>
  )
}
