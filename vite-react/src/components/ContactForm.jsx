import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Using Formspree - replace with your Formspree endpoint or other service
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="mb-16 animate-on-scroll">
      <h2 className="section-header">Get In Touch</h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 shadow-lg">
          <p className="text-[#8b949e] mb-6 text-center">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-[#c9d1d9] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#58a6ff] hover:bg-[#388bfd] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-500 text-center text-sm">Message sent successfully! 🎉</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center text-sm">
                Oops! Something went wrong. Please email me directly at ruchit2003@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
