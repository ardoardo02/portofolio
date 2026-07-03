import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import Section from './Section.jsx'
import { experiences } from '../data.js'

function TimelineEntry({ exp, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.li
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative pl-10 sm:pl-14"
    >
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-neon-500 bg-white sm:left-[15px] dark:bg-night-950 dark:shadow-glow-sm"
      />
      <div className="card p-0">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-start justify-between gap-4 p-5 text-left"
          aria-expanded={open}
        >
          <div>
            <p className="font-mono text-xs text-neon-600 dark:text-neon-400">{exp.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
              {exp.role} <span className="text-slate-400 dark:text-slate-500">·</span>{' '}
              <span className="text-neon-600 dark:text-neon-300">{exp.company}</span>
            </h3>
            <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{exp.project}</p>
          </div>
          <ChevronDown
            size={18}
            className={`mt-1 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {open && (
          <div className="border-t border-slate-200 px-5 pb-5 pt-4 dark:border-night-700">
            <ul className="space-y-2">
              {exp.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neon-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="chip !px-2.5 !py-1 !text-xs">
                  {t}
                </span>
              ))}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-neon-600 hover:underline dark:text-neon-300"
                >
                  View project <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.li>
  )
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="// experience" title="Quest log">
      <ol className="relative space-y-6 before:absolute before:bottom-2 before:left-[13px] before:top-2 before:w-px before:bg-gradient-to-b before:from-neon-500/60 before:via-pulse-500/40 before:to-transparent sm:before:left-[21px]">
        {experiences.map((exp, i) => (
          <TimelineEntry key={`${exp.company}-${exp.period}`} exp={exp} index={i} />
        ))}
      </ol>
    </Section>
  )
}
