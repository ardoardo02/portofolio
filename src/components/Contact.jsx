import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Youtube } from 'lucide-react'
import Section from './Section.jsx'
import { socials } from '../data.js'

const CONTACTS = [
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'eduardo-sanov-rusianto', href: socials.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'ardoardo02', href: socials.github, icon: Github },
  { label: 'YouTube', value: 'ardomainaky', href: socials.youtube, icon: Youtube },
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="// contact" title="Press start to connect">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-xl text-slate-600 dark:text-slate-400"
      >
        Open to game development roles, freelance Roblox projects, and interesting
        collaborations. The fastest way to reach me is by email.
      </motion.p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {CONTACTS.map((contact, i) => {
          const Icon = contact.icon
          return (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="card flex items-center gap-4 p-5"
            >
              <span className="rounded-lg border border-neon-500/40 bg-neon-500/5 p-3 text-neon-600 dark:text-neon-300">
                <Icon size={20} />
              </span>
              <span>
                <span className="block text-sm text-slate-500 dark:text-slate-500">
                  {contact.label}
                </span>
                <span className="block font-medium text-slate-900 dark:text-slate-200">
                  {contact.value}
                </span>
              </span>
            </motion.a>
          )
        })}
      </div>
    </Section>
  )
}
