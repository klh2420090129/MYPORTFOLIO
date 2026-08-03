import React from 'react'

const certifications = [
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "2024",
    icon: "🤖",
    link: "https://coursera.org/share/3c54e0a9c2b57b0f6482546714edd293"
  },
  {
    name: "Azure AI-900 Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    icon: "☁️",
    link: "#"
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="mb-16 animate-on-scroll">
      <h2 className="section-header">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/10 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">{cert.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-[#8b949e]">{cert.issuer}</p>
                <p className="text-xs text-[#8b949e] mt-1">{cert.date}</p>
              </div>
              <svg
                className="w-5 h-5 text-[#8b949e] group-hover:text-[#58a6ff] transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
