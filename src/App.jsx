import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Videos from './components/Videos.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'

export default function App() {
  // Dark mode is the default; preference is remembered per-browser.
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true
    const saved = window.localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground dark={dark} />
      <Navbar dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
