import React from 'react'

export default function CurrentStatus() {
  const currentlyLearning = [
    "Advanced Data Structure",
    "Mathematical Optimization",
    "Full Stack Development",
    "Computer Networks",
    "Design Analysis & Algorithm"
  ]

  const currentlyBuilding = [
    {
      name: "AI Chatbot Platform",
      description: "Building an intelligent chatbot using OpenAI API",
      progress: 75
    },
    {
      name: "Task Management App",
      description: "Full-stack MERN application with real-time updates",
      progress: 45
    }
  ]

  return (
    <section id="current-status" className="mb-16 animate-on-scroll">
      <h2 className="section-header">What I'm Up To</h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Currently Learning */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📚</span>
            <h3 className="text-xl font-bold text-[#c9d1d9]">Currently Learning</h3>
          </div>
          <div className="space-y-2">
            {currentlyLearning.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              >
                <span className="text-[#58a6ff]">▹</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Building */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h3 className="text-xl font-bold text-[#c9d1d9]">Currently Building</h3>
          </div>
          <div className="space-y-4">
            {currentlyBuilding.map((project, index) => (
              <div key={index}>
                <div className="flex items-start justify-between mb-1">
                  <div className="flex-1">
                    <p className="text-[#c9d1d9] font-semibold">{project.name}</p>
                    <p className="text-xs text-[#8b949e] mt-0.5">{project.description}</p>
                  </div>
                  <span className="text-sm text-[#58a6ff] font-medium ml-2">{project.progress}%</span>
                </div>
                <div className="w-full bg-[#0d1117] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#58a6ff] to-[#8a58ff] h-full rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-[#8b949e] text-center mt-6">
        💡 <em>Update this section regularly to show you're actively learning and building</em>
      </p>
    </section>
  )
}
