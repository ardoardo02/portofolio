import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Gamepad2, Star } from 'lucide-react'
import Section from './Section.jsx'
import { projects } from '../data.js'

function Thumbnail({ project, tall = false }) {
  const [failed, setFailed] = useState(false)
  const showImage = project.thumbnail && !failed

  return (
    <div className={`relative overflow-hidden ${tall ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
      {showImage ? (
        <img
          src={project.thumbnail}
          alt={project.name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-night-800 via-night-700 to-pulse-500/20">
          <Gamepad2 size={tall ? 48 : 36} className="text-neon-400/60" />
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="card group overflow-hidden p-0"
    >
      <Thumbnail project={project} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full border border-neon-500/40 bg-neon-500/5 px-2.5 py-0.5 text-xs text-neon-600 dark:text-neon-300">
            {project.category}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs text-slate-500 dark:text-slate-500">
              #{t.replace(/\s+/g, '')}
            </span>
          ))}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-neon-600 hover:underline dark:text-neon-300"
            >
              View <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    [],
  )
  const [filter, setFilter] = useState('All')

  const featured = projects.filter((p) => p.featured)
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="projects" eyebrow="// projects" title="Game library">
      {featured.length > 0 && filter === 'All' && (
        <div className="mb-12">
          <p className="mb-4 flex items-center gap-2 font-mono text-sm text-pulse-500 dark:text-pulse-300">
            <Star size={15} /> featured_work
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((project) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="card group overflow-hidden border-pulse-500/30 p-0 dark:hover:shadow-glow-violet"
              >
                <Thumbnail project={project} tall />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-neon-600 hover:underline dark:text-neon-300"
                    >
                      Play / view <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              filter === category
                ? 'bg-neon-500 text-night-950 shadow-glow-sm'
                : 'border border-slate-300 text-slate-600 hover:border-neon-500/60 hover:text-neon-600 dark:border-night-700 dark:text-slate-400 dark:hover:text-neon-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
