import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Section from './Section.jsx'
import { profile } from '../data.js'

export default function About() {
  return (
    <Section id="about" eyebrow="// about" title="Player profile">
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card overflow-hidden p-0"
        >
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="aspect-square w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            className="aspect-square w-full items-center justify-center bg-gradient-to-br from-neon-500/20 to-pulse-500/20 font-display text-6xl font-bold text-neon-600 dark:text-neon-300"
            style={{ display: profile.avatar ? 'none' : 'flex' }}
          >
            {profile.name
              .split(' ')
              .slice(0, 2)
              .map((n) => n[0])
              .join('')}
          </div>
          <div className="flex items-center gap-2 border-t border-slate-200 p-4 text-sm text-slate-600 dark:border-night-700 dark:text-slate-400">
            <MapPin size={16} className="text-neon-600 dark:text-neon-400" />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">{profile.bio}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="card p-5">
                <p className="font-display text-3xl font-bold text-neon-600 dark:text-neon-300">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
