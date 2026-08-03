import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import GitHubStats from './components/GitHubStats.jsx'
import Certifications from './components/Certifications.jsx'
import Experience from './components/Experience.jsx'
import CurrentStatus from './components/CurrentStatus.jsx'
import Footer from './components/Footer.jsx'

function CursorGradient() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const onMove = (e) => {
      if (!el) return
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])
  return <div ref={ref} className="cursor-gradient" />
}

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    }, { threshold: 0.1 })
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="container mx-auto p-4 md:p-8 pt-20 bg-[#0d1117] text-[#c9d1d9] min-h-screen relative z-10">
        <CursorGradient />
        <Header />
        <CurrentStatus />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GitHubStats />
      </main>
      <Footer />
    </>
  )
}
