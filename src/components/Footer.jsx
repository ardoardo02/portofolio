import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 py-8 dark:border-night-700">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row dark:text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">
          Built with React + Tailwind <span className="text-neon-600 dark:text-neon-400">·</span>{' '}
          Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
