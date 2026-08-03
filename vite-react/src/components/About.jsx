import React from 'react'

export default function About() {
  const base = import.meta.env.BASE_URL || '/'

  return (
    <section id="about" className="mb-16 animate-on-scroll">
      <h2 className="section-header">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#58a6ff] shadow-lg">
          <img src={`${base}Updated Formal Pic.png`} onError={(e)=>{e.currentTarget.src='https://ui-avatars.com/api/?name=Ruchit+Dwara&background=58a6ff&color=fff&size=256'}} alt="Ruchit Dwara" className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-[#161b22] rounded-3xl p-6 md:p-10 max-w-2xl text-center lg:text-left shadow-2xl border border-[#30363d]">
          <p className="text-base md:text-lg leading-relaxed">
            I am a Computer Science undergraduate passionate about using technology to solve real-world problems. Rather than focusing solely on algorithms, I enjoy understanding how systems, people, and businesses interact and how technology can improve the way organizations operate.
            <br /><br />
            My interests lie in cloud computing, enterprise software, and infrastructure, with a particular focus on Microsoft Azure and practical, scalable solutions. I enjoy bridging the gap between technical concepts and business needs, combining strong communication skills with hands-on experience in web development and system design.
            <br /><br />
            Currently, I am building projects that address real organizational challenges while continuously expanding my knowledge of cloud technologies, networking, and enterprise systems. In the long term, I aspire to work at the intersection of technology, strategy, and business.
          </p>
        </div>
      </div>
    </section>
  )
}
