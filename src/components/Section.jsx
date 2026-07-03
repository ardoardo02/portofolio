import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-2">{title}</h2>
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
