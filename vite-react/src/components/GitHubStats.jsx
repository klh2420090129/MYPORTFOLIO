import React from 'react'

export default function GitHubStats() {
  const username = 'klh2420090129' // Your GitHub username

  return (
    <section id="github-stats" className="mb-16 animate-on-scroll">
      <h2 className="section-header">GitHub Activity</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* GitHub Stats Card */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 overflow-hidden">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=github_dark&hide_border=true&bg_color=161b22&title_color=58a6ff&text_color=c9d1d9&icon_color=58a6ff`}
            alt="GitHub Stats"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* GitHub Streak */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 overflow-hidden">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=github-dark-blue&hide_border=true&background=161b22&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff`}
            alt="GitHub Streak"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Most Used Languages */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 overflow-hidden">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=github_dark&hide_border=true&bg_color=161b22&title_color=58a6ff&text_color=c9d1d9`}
            alt="Most Used Languages"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Contribution Graph */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 overflow-hidden">
          <h3 className="text-lg font-semibold text-[#c9d1d9] mb-4">Contribution Activity</h3>
          <img
            src={`https://ghchart.rshah.org/58a6ff/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>
    </section>
  )
}
