import React, { useEffect, useRef } from 'react'
import { links } from './config.js'

const skills = {
  languages: ['Java', 'Python', 'C', 'SQL', 'C++'],
  web: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'MySQL & PostgreSQL'],
  ai: ['Generative AI', 'GitHub Copilot'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux'],
  cloud: ['Microsoft Azure', 'AWS (Foundational)', 'Networking Fundamentals', 'System Design', 'Enterprise Software'],
}

const projects = [
  {
    title: 'Faculty Student Management System',
    description: 'A full-stack platform to streamline student, faculty, and academic management with a secure and user-friendly interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Vercel'],
    extra: 'User Roles: Student, Faculty, Admin',
  },
  {
    title: 'Scheme Finder',
    description: 'A web platform that helps users discover government schemes based on eligibility, with an emphasis on simple navigation and practical usefulness.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Eligibility Filters'],
    extra: null,
  },
  {
    title: 'Portfolio Website',
    description: 'A clean, responsive personal site built to present my background, projects, and achievements in a professional format.',
    tech: ['React', 'Tailwind', 'Vite'],
    extra: null,
  },
]

const certifications = [
  { title: 'Microsoft Certified: Azure AI Fundamentals', subtitle: 'AI-900' },
  { title: 'AWS Certified Cloud Practitioner', subtitle: 'Foundational cloud certification' },
  { title: 'NVIDIA - Fundamentals of Accelerated Data Science', subtitle: 'AI and data science foundations' },
]

function CursorGradient() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const onMove = (event) => {
      if (!el) return
      el.style.left = `${event.clientX}px`
      el.style.top = `${event.clientY}px`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div ref={ref} className="cursor-gradient" />
}

function ScrollRevealSection({ children, className = '', id }) {
  return <section id={id} className={`animate-on-scroll ${className}`}>{children}</section>
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-5">
      <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#2563eb]">{eyebrow}</div>
      <h2 className="text-[clamp(1.7rem,2vw,2.5rem)] font-extrabold tracking-tight text-[#1e3a8a]">{title}</h2>
    </div>
  )
}

function Chip({ children }) {
  return <span className="inline-flex items-center justify-center rounded-full border border-blue-100 bg-[#eaf1ff] px-4 py-2 text-sm font-semibold text-[#23336b]">{children}</span>
}

function SkillCard({ title, items }) {
  return (
    <div className="info-card">
      <h3 className="mb-4 text-xl font-bold text-[#0f172a]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => <Chip key={item}>{item}</Chip>)}
      </div>
    </div>
  )
}

export default function App() {
  const base = import.meta.env.BASE_URL || '/'

  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.12 })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <CursorGradient />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
        <header className="sticky top-4 z-30 rounded-full border border-blue-100 bg-white/80 px-4 py-3 shadow-[0_16px_36px_rgba(37,99,235,0.08)] backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href="#top" className="flex items-center gap-3 font-extrabold tracking-tight text-[#1d4ed8]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#eff5ff] text-sm shadow-sm">RD</span>
              <span>Ruchit Dwara</span>
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="#about" className="soft-link">About</a>
              <a href="#skills" className="soft-link">Skills</a>
              <a href="#projects" className="soft-link">Projects</a>
              <a href="#experience" className="soft-link">Experience</a>
              <a href="#certifications" className="soft-link">Certifications</a>
              <a href={`${base}Resume_Final.pdf`} download="Ruchit_Dwara_Resume_2026.pdf" className="soft-link soft-link-primary">Resume</a>
            </div>
          </div>
        </header>

        <main id="top" className="space-y-6 md:space-y-8">
          <section className="hero-card rounded-[32px] border border-blue-100 bg-white/92 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-md md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#2563eb]">Portfolio</div>
                <h1 className="animated-gradient text-4xl font-extrabold tracking-tight md:text-6xl">Ruchit Dwara</h1>
                <p className="mt-4 max-w-2xl text-lg font-semibold leading-relaxed text-[#334155] md:text-xl">
                  Aspiring Cloud Solutions Engineer | Bridging Enterprise Technology & Business
                </p>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#5b6475] md:text-lg">
                  I am a Computer Science undergraduate passionate about using technology to solve real-world problems. Rather than focusing solely on algorithms, I enjoy understanding how systems, people, and businesses interact and how technology can improve the way organizations operate.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`${base}Resume_Final.pdf`} download="Ruchit_Dwara_Resume_2026.pdf" className="soft-button">Download Resume</a>
                  <a href="mailto:ruchit2003@gmail.com" className="soft-button">Email</a>
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="soft-button">LinkedIn</a>
                  <a href={links.github} target="_blank" rel="noopener noreferrer" className="soft-button">GitHub</a>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="avatar-ring">
                  <img
                    src={`${base}Updated%20Formal%20Pic.png`}
                    alt="Ruchit Dwara"
                    onError={(event) => {
                      event.currentTarget.src = 'https://ui-avatars.com/api/?name=Ruchit+Dwara&background=2f6cf2&color=fff&size=512'
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <ScrollRevealSection id="about" className="card-surface">
            <SectionHeader eyebrow="About" title="About Me" />
            <div className="space-y-4 text-base leading-relaxed text-[#334155] md:text-lg">
              <p>
                My interests lie in cloud computing, enterprise software, and infrastructure, with a particular focus on Microsoft Azure and practical, scalable solutions. I enjoy bridging the gap between technical concepts and business needs, combining strong communication skills with hands-on experience in web development and system design.
              </p>
              <p>
                Currently, I am building projects that address real organizational challenges while continuously expanding my knowledge of cloud technologies, networking, and enterprise systems. In the long term, I aspire to work at the intersection of technology, strategy, and business.
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="card-surface" id="education">
            <SectionHeader eyebrow="Education" title="Academic Background" />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="info-card">
                <p className="text-sm font-bold uppercase tracking-wide text-[#1d4ed8]">Koneru Lakshmaiah Education Foundation (KLH)</p>
                <h3 className="mt-2 text-xl font-bold text-[#0f172a]">Bachelor of Technology, Computer Science & Information Technology</h3>
                <p className="mt-1 text-[#5b6475]">Hyderabad, India | Expected Nov 2028</p>
                <ul className="mt-4 space-y-2 text-[#334155]">
                  <li>Relevant coursework: Operating Systems, Databases, Computer Networks, Software Engineering, Enterprise Web Technologies</li>
                  <li>Exploring cloud computing and cybersecurity through electives and independent study</li>
                </ul>
              </div>
              <div className="info-card">
                <p className="text-sm font-bold uppercase tracking-wide text-[#1d4ed8]">The Gaudium School</p>
                <h3 className="mt-2 text-xl font-bold text-[#0f172a]">International Baccalaureate (IB) Diploma Programme</h3>
                <p className="mt-1 text-[#5b6475]">Hyderabad, India</p>
                <p className="mt-4 text-[#334155]">Built research, analytical reasoning, and time-management skills through the IB Extended Essay and Theory of Knowledge coursework.</p>
              </div>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="card-surface" id="skills">
            <SectionHeader eyebrow="Skills" title="Skills & Expertise" />
            <div className="grid gap-4 md:grid-cols-2">
              <SkillCard title="Programming Languages" items={skills.languages} />
              <SkillCard title="Web Development & Backend" items={skills.web} />
              <SkillCard title="AI / ML & Automation" items={skills.ai} />
              <SkillCard title="Tools & Platforms" items={skills.tools} />
              <div className="info-card md:col-span-2">
                <h3 className="mb-4 text-xl font-bold text-[#0f172a]">Cloud & Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((item) => <Chip key={item}>{item}</Chip>)}
                </div>
              </div>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="card-surface" id="experience">
            <SectionHeader eyebrow="Experience" title="Experience" />
            <div className="info-card">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a]">Pinnacle Labs | Web Development Intern</h3>
                  <p className="mt-1 text-[#5b6475]">Virtual Internship | June 1, 2026 - July 1, 2026</p>
                </div>
                <a className="font-semibold text-[#1d4ed8]" href={`${base}Internship%20Pinnacle%20Lab%20Certificate.pdf`} download>
                  Certificate
                </a>
              </div>
              <p className="mt-4 text-[#334155] leading-relaxed">
                Demonstrated exceptional dedication and skill during a 4-week virtual internship in Web Development at Pinnacle Labs. The internship focused on practical tasks and project contributions, reinforcing my ability to work through real development workflows with consistency and attention to detail.
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="card-surface" id="projects">
            <SectionHeader eyebrow="Projects" title="Projects" />
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="info-card h-full">
                  <h3 className="text-xl font-bold text-[#0f172a]">{project.title}</h3>
                  <p className="mt-2 text-[#5b6475] leading-relaxed">{project.description}</p>
                  {project.extra ? <p className="mt-4 text-[#334155]"><strong>{project.extra.split(':')[0]}:</strong>{project.extra.split(':').slice(1).join(':')}</p> : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                  </div>
                </div>
              ))}
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="card-surface" id="achievements">
            <SectionHeader eyebrow="Achievements" title="Achievements" />
            <div className="info-card">
              <p className="text-[#334155] leading-relaxed">
                <strong>2nd Prize (Runner up)</strong> - College-level innovation competition at KL University for developing <strong>Scheme Finder</strong>, a web platform that helps users discover government schemes based on eligibility.
              </p>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="card-surface" id="responsibility">
            <SectionHeader eyebrow="Position of Responsibility" title="Leadership & Responsibility" />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="info-card">
                <h3 className="text-xl font-bold text-[#0f172a]">Event Organizer - Blind Coding Challenge | KL University</h3>
                <p className="mt-3 text-[#334155] leading-relaxed">Organized a Blind Coding competition with 150+ participants, coordinating the event and ensuring successful execution from start to finish.</p>
              </div>
              <div className="info-card">
                <h3 className="text-xl font-bold text-[#0f172a]">Student Coordinator - Internship Pitch 2026 | KL University</h3>
                <p className="mt-3 text-[#334155] leading-relaxed">Coordinated the Internship Pitch 2026 event, managing registrations, participant coordination, and smooth competition execution.</p>
              </div>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="card-surface" id="certifications">
            <SectionHeader eyebrow="Certifications" title="Certifications" />
            <div className="grid gap-4 md:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="info-card">
                  <h3 className="text-xl font-bold text-[#0f172a]">{cert.title}</h3>
                  <p className="mt-2 text-[#5b6475]">{cert.subtitle}</p>
                </div>
              ))}
            </div>
          </ScrollRevealSection>

          <footer className="pb-4 text-center text-sm text-[#5b6475]">
            © 2026 Ruchit Dwara. Built to present cloud, software, and business-focused work in a clean format.
          </footer>
        </main>
      </div>
    </>
  )
}