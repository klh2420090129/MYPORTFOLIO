import React from 'react'
import Tilt from 'react-parallax-tilt'

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and a dark theme.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/klh2420090129",
    demo: null,
    image: null,
  },
  {
    title: "AI/ML Project",
    description: "Machine learning project exploring data analysis and predictive modeling using Python and popular ML libraries.",
    tech: ["Python", "TensorFlow", "Pandas"],
    github: "https://github.com/klh2420090129",
    demo: null,
    image: null,
  },
  {
    title: "Database Management System",
    description: "A comprehensive database project implementing CRUD operations and complex queries for data management.",
    tech: ["SQL", "Java", "JDBC"],
    github: "https://github.com/klh2420090129",
    demo: null,
    image: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mb-16 animate-on-scroll">
      <h2 className="section-header">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const handleCardClick = () => {
    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={2000}
      className="cursor-pointer"
    >
      <div
        onClick={handleCardClick}
        className="group h-full bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:border-[#58a6ff]/50 hover:shadow-xl hover:shadow-[#58a6ff]/10"
      >
      {/* Project Image Placeholder */}
      <div className="h-40 bg-gradient-to-br from-[#58a6ff]/20 to-[#8a58ff]/20 flex items-center justify-center">
        <div className="text-4xl opacity-50 group-hover:scale-110 transition-transform duration-300">
          <CodeIcon />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#c9d1d9] mb-2 group-hover:text-[#58a6ff] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#8b949e] text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs bg-[#58a6ff]/10 text-[#58a6ff] px-2 py-1 rounded-full border border-[#58a6ff]/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <span className="flex items-center gap-1 text-[#8b949e] group-hover:text-[#58a6ff] transition-colors text-sm">
              <GitHubIcon />
              View on GitHub
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[#8b949e] hover:text-[#58a6ff] transition-colors text-sm"
            >
              <ExternalLinkIcon />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
    </Tilt>
  )
}

function CodeIcon() {
  return (
    <svg className="w-12 h-12 text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
