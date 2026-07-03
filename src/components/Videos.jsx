import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { videos } from '../data.js'

export default function Videos() {
  if (!videos || videos.length === 0) return null

  return (
    <Section id="videos" eyebrow="// multimedia" title="Showcase reel">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card overflow-hidden p-0"
          >
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
