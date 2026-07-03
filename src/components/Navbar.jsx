import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ dark, onToggleTheme }) {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const link of LINKS) {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-slate-200 bg-white/85 backdrop-blur dark:border-night-700 dark:bg-night-950/85'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-lg font-semibold text-slate-900 dark:text-slate-100">
          <span className="text-neon-600 dark:text-neon-400">&gt;</span> ES
          <span className="text-neon-600 dark:text-neon-400">.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active === link.id
                  ? 'text-neon-600 dark:text-neon-300'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="ml-2 rounded-md border border-slate-300 p-2 text-slate-600 transition-colors hover:text-neon-600 dark:border-night-700 dark:text-slate-400 dark:hover:text-neon-300"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-slate-300 p-2 text-slate-600 dark:border-night-700 dark:text-slate-400"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-md border border-slate-300 p-2 text-slate-600 dark:border-night-700 dark:text-slate-400"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur md:hidden dark:border-night-700 dark:bg-night-950/95">
          <div className="section-container flex flex-col py-2">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
