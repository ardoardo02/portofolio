import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Gamepad2,
  Star,
  UserRound,
  X,
} from 'lucide-react'
import Section from './Section.jsx'
import { projects } from '../data.js'

const PAGE_SIZE = 6 // 2 rows x 3 columns on desktop
const CAROUSEL_INTERVAL = 7000 // ms between auto-slides
const GALLERY_INTERVAL = 4500 // ms between auto-slides inside the popup

function Thumbnail({ project, tall = false, className = '' }) {
  const [failed, setFailed] = useState(false)
  const showImage = project.thumbnail && !failed

  return (
    <div className={`relative overflow-hidden ${tall ? 'aspect-[16/9]' : 'aspect-[16/10]'} ${className}`}>
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

function GallerySlide({ item, name }) {
  const [failed, setFailed] = useState(false)

  if (item.type === 'youtube') {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${item.src}`}
        title={name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    )
  }

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-night-800 via-night-700 to-pulse-500/20">
        <Gamepad2 size={48} className="text-neon-400/60" />
      </div>
    )
  }

  return (
    <img
      src={item.src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  )
}

function ProjectModal({ project, onClose }) {
  const gallery = useMemo(() => {
    const items = (project.gallery || []).map((item) =>
      typeof item === 'string' ? { type: 'image', src: item } : item,
    )

    if (project.thumbnail && !items.some((item) => item.src === project.thumbnail)) {
      items.unshift({ type: 'image', src: project.thumbnail })
    }

    if (items.length > 0) return items

    return [{ type: 'placeholder' }]
  }, [project])

  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-advance gallery, but never while a video slide is showing
  useEffect(() => {
    const isVideo = gallery[slide]?.type === 'youtube'
    if (paused || isVideo || gallery.length <= 1) return
    const timer = setInterval(() => setSlide((s) => (s + 1) % gallery.length), GALLERY_INTERVAL)
    return () => clearInterval(timer)
  }, [gallery, slide, paused])

  // Close on Escape, lock page scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const prev = () => setSlide((s) => (s - 1 + gallery.length) % gallery.length)
  const next = () => setSlide((s) => (s + 1) % gallery.length)

  const current = gallery[slide]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-night-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="card max-h-[90vh] w-full max-w-3xl overflow-y-auto !p-0"
      >
        <div
          className="relative aspect-video bg-night-900"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {current.type === 'placeholder' ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-night-800 via-night-700 to-pulse-500/20">
              <Gamepad2 size={56} className="text-neon-400/60" />
            </div>
          ) : (
            <GallerySlide key={slide} item={current} name={project.name} />
          )}

          {gallery.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-night-950/70 p-2 text-slate-200 transition-colors hover:bg-neon-500 hover:text-night-950"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-night-950/70 p-2 text-slate-200 transition-colors hover:bg-neon-500 hover:text-night-950"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === slide ? 'w-5 bg-neon-400' : 'w-1.5 bg-slate-400/60'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-full bg-night-950/70 p-2 text-slate-200 transition-colors hover:bg-neon-500 hover:text-night-950"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-slate-100">
              {project.name}
            </h3>
            <span className="rounded-full border border-neon-500/40 bg-neon-500/5 px-3 py-1 text-xs text-neon-600 dark:text-neon-300">
              {project.category}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <UserRound size={15} className="text-neon-600 dark:text-neon-400" />
              {project.roles.join(', ')}
            </span>
            {project.period && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={15} className="text-neon-600 dark:text-neon-400" />
                {project.period}
              </span>
            )}
          </div>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          {project.stats && project.stats.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-slate-200 p-3 dark:border-night-700"
                >
                  <p className="font-display text-lg font-semibold text-neon-600 dark:text-neon-300">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip !px-2.5 !py-1 !text-xs">
                {t}
              </span>
            ))}
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              View project <ExternalLink size={16} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="card group cursor-pointer overflow-hidden !p-0"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(project)}
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
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-500">
          {project.roles.join(' · ')}
        </p>
      </div>
    </motion.article>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono text-xs text-slate-500 dark:text-slate-500">{label}</span>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
            value === option
              ? 'bg-neon-500 text-night-950 shadow-glow-sm'
              : 'border border-slate-300 text-slate-600 hover:border-neon-500/60 hover:text-neon-600 dark:border-night-700 dark:text-slate-400 dark:hover:text-neon-300'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default function Projects() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [])
  const roles = useMemo(() => ['All', ...new Set(projects.flatMap((p) => p.roles))], [])

  const [categoryFilter, setCategoryFilter] = useState('All')
  const [roleFilter, setRoleFilter] = useState('All')
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const [selected, setSelected] = useState(null)
  const interactedRef = useRef(false)

  const featured = projects.filter((p) => p.featured)

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (categoryFilter === 'All' || p.category === categoryFilter) &&
          (roleFilter === 'All' || p.roles.includes(roleFilter)),
      ),
    [categoryFilter, roleFilter],
  )

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount - 1)
  const visible = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE)

  const goTo = useCallback(
    (nextPage, manual = false) => {
      if (manual) interactedRef.current = true
      setPage(((nextPage % pageCount) + pageCount) % pageCount)
    },
    [pageCount],
  )

  // Reset to first page when filters change
  useEffect(() => setPage(0), [categoryFilter, roleFilter])

  // Auto-advance the carousel. Pauses on hover, while the popup is
  // open, and permanently stops once the visitor navigates manually.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || paused || selected || pageCount <= 1 || interactedRef.current) return
    const timer = setInterval(() => setPage((p) => (p + 1) % pageCount), CAROUSEL_INTERVAL)
    return () => clearInterval(timer)
  }, [paused, selected, pageCount])

  return (
    <Section id="projects" eyebrow="// projects" title="Game library">
      {featured.length > 0 && (
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
                className="card group cursor-pointer overflow-hidden border-pulse-500/30 !p-0 dark:hover:shadow-glow-violet"
                onClick={() => setSelected(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(project)}
              >
                <Thumbnail project={project} tall />
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {project.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-500">
                    {project.roles.join(' · ')}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}

      <div className="mb-8 space-y-3">
        <FilterGroup
          label="platform:"
          options={categories}
          value={categoryFilter}
          onChange={setCategoryFilter}
        />
        <FilterGroup label="role:" options={roles} value={roleFilter} onChange={setRoleFilter} />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${categoryFilter}-${roleFilter}-${safePage}`}
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -32 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((project) => (
              <ProjectCard key={project.name} project={project} onOpen={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-slate-500 dark:text-slate-500">
            No projects match this filter combination.
          </p>
        )}

        {pageCount > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => goTo(safePage - 1, true)}
              aria-label="Previous page"
              className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-all hover:border-neon-500/60 hover:text-neon-600 dark:border-night-700 dark:text-slate-400 dark:hover:text-neon-300 dark:hover:shadow-glow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: pageCount }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, true)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === safePage
                      ? 'w-6 bg-neon-500'
                      : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-night-700 dark:hover:bg-night-800'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(safePage + 1, true)}
              aria-label="Next page"
              className="rounded-full border border-slate-300 p-2.5 text-slate-600 transition-all hover:border-neon-500/60 hover:text-neon-600 dark:border-night-700 dark:text-slate-400 dark:hover:text-neon-300 dark:hover:shadow-glow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  )
}
