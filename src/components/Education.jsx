import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Section from './Section.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="// education" title="Skill tree origins">
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card p-6"
          >
            <GraduationCap size={22} className="text-neon-600 dark:text-neon-400" />
            <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-500">{edu.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
              {edu.school}
            </h3>
            <p className="mt-1 text-sm text-neon-600 dark:text-neon-300">{edu.degree}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{edu.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
