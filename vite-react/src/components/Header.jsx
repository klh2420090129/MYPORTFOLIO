import React, { useState, useEffect } from 'react'

export default function Header() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = [
    'Aspiring Cloud Solutions Engineer',
    'Enterprise Tech Translator',
    'Azure Fundamentals Learner',
    'Business Problem Solver'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 50 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, roles])

  return (
    <header className="text-center py-16 animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animated-gradient">
        Ruchit Dwara
      </h1>
      <p className="text-lg md:text-2xl text-[#8b949e] h-8">
        <span>{displayText}</span>
        <span className="animate-pulse">|</span>
      </p>
    </header>
  )
}
