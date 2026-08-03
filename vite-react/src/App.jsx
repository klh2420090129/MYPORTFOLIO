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
    links: [
      { label: 'GitHub', href: links.github },
    ],
  },
  {
    title: 'Scheme Finder',
    description: 'A web platform that helps users discover government schemes based on eligibility, with an emphasis on simple navigation and practical usefulness.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Eligibility Filters'],
    extra: null,
    links: [
      { label: 'GitHub', href: links.github },
    ],
  },
  {
    title: 'Portfolio Website',
    description: 'A clean, responsive personal site built to present my background, projects, and achievements in a professional format.',
    tech: ['React', 'Tailwind', 'Vite'],
    extra: null,
    links: [
      { label: 'Live', href: 'https://klh2420090129.github.io/MYPORTFOLIO/' },
      { label: 'GitHub', href: links.github },
    ],
  },
]

function MicrosoftAzureIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M1 3h10v10H1z" fill="#F25022"/>
      <path d="M13 3h10v10H13z" fill="#7FBA00"/>
      <path d="M1 15h10v10H1z" fill="#00A4EF"/>
      <path d="M13 15h10v10H13z" fill="#FFB900"/>
    </svg>
  )
}

function AwsIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FF9900">
      <path d="M6.76 10.03c0 .21.05.4.15.58.1.18.23.32.41.4.18.1.39.15.62.15.27 0 .5-.07.68-.2a1.33 1.33 0 00.44-.54v.49a1 1 0 00-.41-.4c-.17-.1-.38-.15-.62-.15s-.45.05-.62.15a1.09 1.09 0 00-.41.4 1.26 1.26 0 00-.15.57zm2.3 4.36c.27 0 .5-.06.7-.18a1.27 1.27 0 00.44-.49v.54h1V9.01h-1v.54a1.27 1.27 0 00-.44-.49c-.2-.12-.43-.18-.7-.18-.38 0-.72.1-.1.29a2.17 2.17 0 00-.74.8c-.18.34-.27.73-.27 1.17 0 .44.09.83.27 1.17.18.34.43.61.74.8.3.19.65.29 1.03.29zm3.84 0c.27 0 .5-.06.7-.18a1.27 1.27 0 00.44-.49v.54h1V9.01h-1v.54a1.27 1.27 0 00-.44-.49c-.2-.12-.43-.18-.7-.18-.38 0-.72.1-.1.29a2.17 2.17 0 00-.74.8c-.18.34-.27.73-.27 1.17 0 .44.09.83.27 1.17.18.34.43.61.74.8.3.19.65.29 1.03.29zm2.3-4.36c0 .21.05.4.15.58.1.18.23.32.41.4.18.1.39.15.62.15.27 0 .5-.07.68-.2a1.33 1.33 0 00.44-.54v.49a1 1 0 00-.41-.4c-.17-.1-.38-.15-.62-.15s-.45.05-.62.15a1.09 1.09 0 00-.41.4 1.26 1.26 0 00-.15.57zm6.54-1.92h-1.13l-.9 3.52-.9-3.52h-1.13l-.9 3.52-.9-3.52h-1.12l1.45 4.9h1.13l.9-3.44.9 3.44h1.13l1.45-4.9z"/>
      <path d="M6.29 18.07c3.48 1.83 7.9 1.95 11.7.35.21-.09.14-.34-.08-.26-2.62 1.06-5.84.99-8.5-.28-1.4-.67-2.74-1.57-3.32-2-.2-.14-.37.08-.2.23.66.62 1.77 1.39 2.4 1.96z"/>
    </svg>
  )
}

function NvidiaIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#76B900">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.49 0-4.5-2.02-4.5-4.5s2.01-4.5 4.5-4.5c1.46 0 2.77.7 3.59 1.79l-1.64 1.24c-.48-.65-1.17-1.03-1.95-1.03-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.88 0 1.64-.45 2.08-1.14l1.65 1.22c-.74 1.15-2.07 1.96-3.56 1.96z"/>
    </svg>
  )
}

function GraduationCapIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
}

function SchoolBookIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
    </svg>
  )
}

function CodeWindowIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  )
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function ExternalLinkIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function DownloadIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

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
    <div className="mb-5 flex items-center gap-4 flex-wrap">
      <div>
        <div className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#2563eb]">{eyebrow}</div>
        <h2 className="text-[clamp(1.7rem,2vw,2.5rem)] font-extrabold tracking-tight text-[#1e3a8a]">{title}</h2>
      </div>
    </div>
  )
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-100/80 bg-[#eaf1ff] px-3.5 py-1.5 text-sm font-semibold text-[#23336b] transition-all hover:-translate-y-0.5 hover:bg-[#dbeafe] hover:shadow-sm">
      {children}
    </span>
  )
}

function OrgBadge({ label, tone = 'blue' }) {
  const toneClasses = {
    blue: 'bg-[#e8f1ff] text-[#1d4ed8] border-[#bfdbfe]',
    slate: 'bg-[#edf2f7] text-[#334155] border-[#cbd5e1]',
    green: 'bg-[#ecfdf5] text-[#047857] border-[#a7f3d0]',
  }

  const renderLogo = () => {
    switch (label) {
      case 'MS':
      case 'AZ':
        return <MicrosoftAzureIcon className="h-6 w-6" />
      case 'AWS':
        return <AwsIcon className="h-6 w-6" />
      case 'NV':
        return <NvidiaIcon className="h-6 w-6" />
      case 'KLH':
        return <GraduationCapIcon className="h-6 w-6 text-[#1d4ed8]" />
      case 'TG':
        return <SchoolBookIcon className="h-6 w-6 text-[#334155]" />
      case 'PL':
        return <CodeWindowIcon className="h-6 w-6 text-[#047857]" />
      default:
        return label
    }
  }

  return (
    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-xs font-extrabold uppercase tracking-wide ${toneClasses[tone] || toneClasses.blue}`}>
      {renderLogo()}
    </span>
  )
}

function SectionOrgRow({ items }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {items.map((item) => {
        const content = (
          <>
            <OrgBadge label={item.label} tone={item.tone} />
            <div>
              <p className="text-sm font-semibold text-[#0f172a] hover:text-[#1d4ed8] transition-colors">
                {item.name} {item.href ? '↗' : ''}
              </p>
              <p className="text-xs text-[#5b6475]">{item.caption}</p>
            </div>
          </>
        )

        return item.href ? (
          <a
            key={item.name}
            href={item.href}
            target={item.href.startsWith('#') ? '_self' : '_blank'}
            rel={item.href.startsWith('#') ? undefined : 'noopener noreferrer'}
            className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-[#f7faff] px-4 py-2.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md cursor-pointer text-left"
          >
            {content}
          </a>
        ) : (
          <div key={item.name} className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-[#f7faff] px-4 py-2.5 shadow-sm">
            {content}
          </div>
        )
      })}
    </div>
  )
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

  const [activeModal, setActiveModal] = useState({ title: '', url: '', open: false })
  const [toastOpen, setToastOpen] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ruchit2003@gmail.com').then(() => {
      setToastOpen(true)
      setTimeout(() => setToastOpen(false), 3000)
    })
  }

  const openCertModal = (title, url) => {
    setActiveModal({ title, url, open: true })
  }

  const closeCertModal = () => {
    setActiveModal({ title: '', url: '', open: false })
  }

  return (
    <>
      <CursorGradient />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6 md:px-6 md:py-8">
        <header className="sticky top-4 z-30 rounded-full border border-blue-100 bg-white/80 px-4 py-3 shadow-[0_16px_36px_rgba(37,99,235,0.08)] backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href="#top" className="flex items-center gap-3 font-bold tracking-tight text-[#0f172a]">
              <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-blue-600 bg-white shadow-sm flex-shrink-0">
                <img
                  src={`${base}Updated%20Formal%20Pic.png`}
                  alt="Ruchit Dwara"
                  onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Ruchit+Dwara&background=2f6cf2&color=fff&size=512' }}
                  className="h-full w-full object-cover"
                />
              </div>
              <span>Ruchit Dwara</span>
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="#about" className="soft-link">About</a>
              <a href="#education" className="soft-link">Education</a>
              <a href="#skills" className="soft-link">Skills</a>
              <a href="#experience" className="soft-link">Experience</a>
              <a href="#projects" className="soft-link">Projects</a>
              <a href="#certifications" className="soft-link">Certifications</a>
              <a href="mailto:ruchit2003@gmail.com" onClick={copyEmail} className="inline-flex items-center gap-1.5 rounded-full bg-[#1d4ed8] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#1e40af] hover:shadow-lg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Get in Touch</span>
              </a>
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
                  <button onClick={copyEmail} className="soft-button cursor-pointer">Copy Email</button>
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 pt-6 border-t border-blue-100/80">
              <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-4 text-center">
                <p className="text-3xl font-black text-[#1d4ed8]">3+</p>
                <p class="text-xs font-semibold text-[#5b6475] mt-1">Industry Certifications</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/80 to-teal-50/40 p-4 text-center">
                <p className="text-3xl font-black text-[#047857]">2nd Prize</p>
                <p class="text-xs font-semibold text-[#5b6475] mt-1">Innovation Competition</p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50/80 to-indigo-50/40 p-4 text-center">
                <p className="text-3xl font-black text-[#7c3aed]">150+</p>
                <p class="text-xs font-semibold text-[#5b6475] mt-1">Event Participants Led</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/80 to-blue-50/40 p-4 text-center">
                <p className="text-3xl font-black text-[#0284c7]">Cloud & AI</p>
                <p class="text-xs font-semibold text-[#5b6475] mt-1">Azure Solutions Focus</p>
              </div>
            </div>
          </section>

          <ScrollRevealSection id="about" className="card-surface">
            <SectionHeader eyebrow="About" title="About Me" />
            <SectionOrgRow items={[{ label: 'CS', name: 'Cloud & Systems', caption: 'Real-world problem solving', tone: 'blue' }]} />
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
            <SectionOrgRow items={[
              { label: 'KLH', name: 'Koneru Lakshmaiah Education Foundation', caption: 'B.Tech in CSE & IT', tone: 'blue', href: 'https://klh.edu.in/' },
              { label: 'TG', name: 'The Gaudium School', caption: 'IB Diploma Programme', tone: 'slate', href: 'https://www.thegaudium.com/' },
            ]} />
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
            <SectionOrgRow items={[
              { label: 'AZ', name: 'Azure & Cloud', caption: 'Infrastructure and scalable systems', tone: 'blue', href: '#certifications' },
              { label: 'WEB', name: 'Web Development', caption: 'Frontend and backend implementation', tone: 'slate', href: '#projects' },
            ]} />
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
            <SectionOrgRow items={[{ label: 'PL', name: 'Pinnacle Labs', caption: 'Web Development Internship Certificate', tone: 'green', href: `${base}Internship%20Pinnacle%20Lab%20Certificate.pdf` }]} />
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
            <SectionOrgRow items={[
              { label: 'PL', name: 'Applied Systems', caption: 'Full-stack & cloud projects', tone: 'blue', href: 'https://github.com/klh2420090129' },
              { label: 'AZ', name: 'Business Value', caption: 'Built for practical impact', tone: 'slate', href: 'https://github.com/klh2420090129' },
            ]} />
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="info-card flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a]">{project.title}</h3>
                    <p className="mt-2 text-[#5b6475] leading-relaxed">{project.description}</p>
                    {project.extra ? <p className="mt-4 text-[#334155]"><strong>{project.extra.split(':')[0]}:</strong>{project.extra.split(':').slice(1).join(':')}</p> : null}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-blue-50 pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#eff5ff] px-3.5 py-2 text-sm font-semibold text-[#1d4ed8] hover:bg-[#dbeafe] transition-colors"
                      >
                        {link.label === 'GitHub' ? <GithubIcon className="w-4 h-4" /> : <ExternalLinkIcon className="w-4 h-4" />}
                        <span>{link.label} ↗</span>
                      </a>
                    ))}
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
            <SectionOrgRow items={[
              { label: 'MS', name: 'Microsoft', caption: 'Azure AI Fundamentals Certificate', tone: 'blue', href: `${base}${encodeURIComponent('Credentials - RuchitDwara-0945 _ Microsoft Learn.pdf')}` },
              { label: 'AWS', name: 'Amazon Web Services', caption: 'Cloud Practitioner', tone: 'slate', href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
              { label: 'NV', name: 'NVIDIA', caption: 'Accelerated Data Science Certificate', tone: 'green', href: `${base}${encodeURIComponent('NVIDIA_2420090129.pdf')}` },
            ]} />
            <div className="grid gap-4 md:grid-cols-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="info-card flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3">
                      <OrgBadge label={cert.org} tone={cert.tone} />
                      <h3 className="text-xl font-bold text-[#0f172a]">{cert.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-[#5b6475]">{cert.subtitle}</p>
                  </div>
                  {cert.file ? (
                    <a
                      href={`${base}${encodeURIComponent(cert.file)}`}
                      download
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#eff5ff] px-4 py-2.5 text-sm font-semibold text-[#1d4ed8] hover:bg-[#dbeafe] transition-colors"
                    >
                      <DownloadIcon className="w-4 h-4" />
                      <span>Download PDF Certificate</span>
                    </a>
                  ) : (
                    <p className="mt-6 text-sm text-[#5b6475] italic">Certificate available on request.</p>
                  )}
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