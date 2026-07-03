import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileDown, Github, Linkedin, Youtube } from 'lucide-react'
import { profile, socials } from '../data.js'

function useTyping(words, typeSpeed = 80, holdTime = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), holdTime)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? typeSpeed / 2 : typeSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeSpeed, holdTime])

  return text
}

export default function Hero() {
  const typed = useTyping(profile.roles)

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center pt-16">
      <div className="section-container py-20 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-sm text-neon-600 dark:text-neon-400"
        >
          &gt; hello_world :: welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 font-display text-4xl font-bold text-slate-900 sm:text-6xl dark:text-slate-100"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-4 font-mono text-lg text-neon-600 sm:text-2xl dark:text-neon-300"
          aria-label={profile.roles.join(', ')}
        >
          {typed}
          <span className="animate-blink" aria-hidden="true">_</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-slate-400"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          {profile.cvUrl && (
            <a href={profile.cvUrl} download className="btn-outline">
              <FileDown size={18} /> Download CV
            </a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {[
            { href: socials.github, icon: Github, label: 'GitHub' },
            { href: socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: socials.youtube, icon: Youtube, label: 'YouTube' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-lg border border-slate-300 p-2.5 text-slate-600 transition-all hover:border-neon-500/60 hover:text-neon-600 dark:border-night-700 dark:text-slate-400 dark:hover:text-neon-300 dark:hover:shadow-glow-sm"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
        >
          <ArrowDown size={22} className="animate-floaty" />
        </motion.a>
      </div>
    </section>
  )
}
