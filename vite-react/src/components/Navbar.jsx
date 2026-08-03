import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d1117]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold animated-gradient">RD</a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#8b949e] hover:text-[#58a6ff] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Resume_Final.pdf"
              download="Ruchit_Dwara_Resume.pdf"
              className="flex items-center gap-2 bg-[#58a6ff] hover:bg-[#4895e8] text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#58a6ff]/25"
            >
              <DownloadIcon />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#c9d1d9] hover:text-[#58a6ff] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-4 border-t border-[#30363d]">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-[#8b949e] hover:text-[#58a6ff] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Resume_Final.pdf"
              download="Ruchit_Dwara_Resume.pdf"
              className="inline-flex items-center gap-2 bg-[#58a6ff] hover:bg-[#4895e8] text-white px-4 py-2 rounded-full font-medium transition-all duration-300"
            >
              <DownloadIcon />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}
