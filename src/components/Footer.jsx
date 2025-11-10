import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Story', href: '#story' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

const SocialIcon = ({ children, label }) => (
  <motion.a
    href="#"
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/10 text-brand-dark transition hover:border-brand-green hover:text-brand-green dark:border-white/20 dark:text-white dark:hover:border-brand-pink dark:hover:text-brand-pink"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      {children}
    </svg>
  </motion.a>
)

export const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="border-t border-white/40 bg-white/70 py-16 backdrop-blur-xs dark:border-white/10 dark:bg-brand-charcoal/80"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:justify-between">
        <motion.div
          className="max-w-sm space-y-4 text-brand-charcoal/80 dark:text-white/70"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 text-brand-charcoal dark:text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-petal/70 text-brand-charcoal shadow-glass dark:bg-brand-meadow/40 dark:text-white">
              <span className="text-lg font-semibold">B</span>
            </div>
            <span className="font-display text-2xl">Bloomify</span>
          </div>
          <p>245 Bloom Street, Suite 02<br />Williamsburg, NY 11249</p>
          <p>hello@bloomify.com<br />(212) 555-0192</p>
        </motion.div>

        <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-charcoal dark:text-white">Navigate</h4>
            <ul className="mt-4 space-y-2 text-sm text-brand-charcoal/70 dark:text-white/70">
              {navLinks.map((item, index) => (
                <motion.li
                  key={`footer-${item.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a href={item.href} className="transition hover:text-brand-moss dark:hover:text-brand-petal">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-charcoal dark:text-white">Connect</h4>
            <div className="mt-4 flex gap-3">
              <SocialIcon label="Instagram">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm9.5 1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zM12 9a4 4 0 1 1 0 8a4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z" />
              </SocialIcon>
              <SocialIcon label="Pinterest">
                <path d="M12 3C7.03 3 3 6.82 3 11.5c0 3.39 2.08 6.3 5.32 7.4c-.07-.63-.13-1.6.03-2.29c.14-.6.92-3.81.92-3.81s-.23-.46-.23-1.13c0-1.06.62-1.85 1.4-1.85c.66 0 .98.5.98 1.1c0 .67-.43 1.67-.64 2.6c-.18.78.38 1.42 1.14 1.42c1.37 0 2.42-1.44 2.42-3.51c0-1.84-1.32-3.13-3.2-3.13c-2.18 0-3.46 1.64-3.46 3.33c0 .66.25 1.36.56 1.74c.06.07.07.13.05.2c-.05.22-.16.69-.18.79c-.03.1-.1.14-.23.08c-.88-.41-1.43-1.71-1.43-2.76c0-2.24 1.63-4.3 4.7-4.3c2.46 0 4.37 1.75 4.37 4.09c0 2.45-1.54 4.42-3.67 4.42c-.72 0-1.4-.37-1.64-.8l-.45 1.71c-.16.6-.6 1.35-.89 1.81C9.92 20.82 10.94 21 12 21c4.97 0 9-3.82 9-8.5S16.97 3 12 3" />
              </SocialIcon>
              <SocialIcon label="Facebook">
                <path d="M13 10h2.5l-.5 3H13v8h-3v-8H8v-3h2V8.5C10 6.57 10.9 5 13.43 5H16v3h-1.8C13.4 8 13 8.34 13 9v1z" />
              </SocialIcon>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-charcoal dark:text-white">Stay in bloom</h4>
            <p className="mt-4 text-sm text-brand-charcoal/70 dark:text-white/70">
              Notes on caring for blooms, artist collaborations, and atelier happenings.
            </p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-full border border-white/60 bg-white/85 px-5 py-3 text-sm text-brand-charcoal outline-none transition focus:border-brand-moss dark:border-white/20 dark:bg-white/10 dark:text-white"
              />
              <motion.button
                type="submit"
                className="rounded-full bg-brand-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-brand-charcoal/90 dark:bg-white/15"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/40 pt-6 text-xs uppercase tracking-[0.3em] text-brand-charcoal/50 dark:border-white/10 dark:text-white/40 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Bloomify Floral Studio</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-brand-moss dark:hover:text-brand-petal">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-brand-charcoal dark:hover:text-white">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="fixed bottom-6 right-6 inline-flex items-center gap-3 rounded-full bg-brand-moss px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-brand-moss/90 dark:bg-brand-petal/80"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="h-5 w-5" /> Chat with us
      </motion.button>
    </motion.footer>
  )
}
