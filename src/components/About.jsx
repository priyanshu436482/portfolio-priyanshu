import React from 'react'

export default function About() {
  return (
    <div className="section" id="about">
      <div className="container-narrow">
        <h2 className="section-title gradient-text text-center">About Me</h2>
        <p className="section-subtitle">A brief overview of my journey as a developer.</p>
        <div className="glass glow p-4">
          <p className="mb-3 fs-5" style={{ color: 'var(--muted)' }}>
            I am a passionate Full Stack Developer focused on building web applications from scratch. I enjoy creating clean, user-friendly interfaces and writing efficient backend logic using technologies like React, Django, and Python.
          </p>
          <p className="mb-0 fs-5" style={{ color: 'var(--muted)' }}>
            I have worked on multiple personal projects to strengthen my skills and continuously learn new technologies to grow as a developer.
          </p>
        </div>
      </div>
    </div>
  )
}
