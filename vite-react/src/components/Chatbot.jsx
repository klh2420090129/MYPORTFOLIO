import React, { useEffect, useRef, useState } from 'react'

const resumeData = "Ruchit Dwara is an aspiring Cloud Solutions Engineer from Hyderabad, India. He is a B.Tech CS & IT student at KLH expected Nov 2028 and is building skills in Microsoft Azure, AWS, Linux, networking fundamentals, HTML, CSS, JavaScript, SQL, MySQL, Git, GitHub, Python, Java, and C. Certifications include Azure AI Fundamentals (AI-900), Google AI Essentials, and Git and GitHub Certification, with AZ-900 in progress. He lived in the United States for seven years and communicates well with both technical and business audiences.";

async function getAIResponse(query) {
  const apiKey = ""; // Runtime provided
  const model = "gemini-2.5-flash-preview-09-2025";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const systemPrompt = `You are a helpful assistant for Ruchit Dwara's portfolio. Use this data: ${resumeData}. Keep answers under 2 sentences. If asked something unrelated, politely steer back to Ruchit.`;
  const body = {
    contents: [{ parts: [{ text: query }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };
  for (let i = 0; i < 5; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure about that. Try asking about Ruchit's skills!";
    } catch (e) {
      await new Promise(r => setTimeout(r, Math.pow(2, i) * 1000));
    }
  }
  return "Sorry, I'm having trouble connecting right now.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hi there! I'm Ruchit's portfolio assistant. I can tell you about his cloud skills, certifications, education, or background. How can I help?" }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, open])

  const handleSend = async () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { role: 'user', text }])
    setInput('')
    setMessages(prev => [...prev, { role: 'assistant', text: '...' }])
    const response = await getAIResponse(text)
    setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', text: response }])
  }

  return (
    <section id="chatbot" className="fixed bottom-0 right-0 m-4 md:m-8 z-50">
      <button
        onClick={() => setOpen(v => !v)}
        className="bg-[#58a6ff] hover:bg-[#4895e8] text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none"
        aria-label="Toggle chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
        </svg>
      </button>
      <div className={`${open ? '' : 'hidden'} absolute bottom-20 right-0 w-[320px] md:w-[400px] h-[500px] bg-[#0d1117] rounded-3xl shadow-2xl flex flex-col border border-[#30363d] overflow-hidden`}>
        <div className="bg-[#161b22] p-4 flex justify-between items-center border-b border-[#30363d]">
          <div>
            <h3 className="text-sm font-bold">Ruchit's Assistant</h3>
            <p className="text-xs text-green-500">Online</p>
          </div>
          <button onClick={() => setOpen(false)} className="text-[#8b949e] hover:text-[#c9d1d9]" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div ref={scrollRef} id="chat-messages" className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
          {messages.map((m, i) => (
            <div key={i} className={`chat-bubble ${m.role === 'user' ? 'user' : ''}`}>{m.text}</div>
          ))}
        </div>
        <div className="p-4 border-t border-[#30363d] bg-[#161b22]">
          <div className="input-container">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ask about Ruchit..."
              className="flex-1 bg-transparent border-none focus:outline-none text-[#c9d1d9] pr-2 text-sm"
            />
            <button onClick={handleSend} className="text-[#58a6ff] hover:text-[#4895e8]" aria-label="Send">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
