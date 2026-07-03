import { motion } from 'framer-motion'
import { Blocks, Code2, Library, Sparkles, Wrench } from 'lucide-react'
import Section from './Section.jsx'
import { skills } from '../data.js'

const GROUPS = [
  { key: 'languages', label: 'Languages', icon: Code2 },
  { key: 'enginesAndFrameworks', label: 'Engines & frameworks', icon: Blocks },
  { key: 'tools', label: 'Tools', icon: Wrench },
  { key: 'libraries', label: 'Libraries', icon: Library },
]

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// skills" title="Tech inventory">
      <div className="grid gap-6 sm:grid-cols-2">
        {GROUPS.map((group, gi) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              className="card p-6"
            >
              <div className="flex items-center gap-2.5">
                <Icon size={18} className="text-neon-600 dark:text-neon-400" />
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {group.label}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills[group.key].map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-2"
      >
        <Sparkles size={16} className="text-pulse-500 dark:text-pulse-300" />
        {skills.soft.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-pulse-500/40 bg-pulse-500/5 px-4 py-1.5 text-sm text-pulse-500 dark:border-pulse-400/40 dark:text-pulse-300"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </Section>
  )
}
