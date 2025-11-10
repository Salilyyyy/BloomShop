import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Story', href: '#story' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

const SocialIcon = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-charcoal/20 text-brand-charcoal/70 transition hover:border-brand-moss hover:text-brand-moss"
  >
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      {children}
    </svg>
  </a>
)

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-brand-charcoal/10 bg-white py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo and Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-petal text-brand-charcoal">
                <span className="text-lg font-semibold">B</span>
              </div>
              <span className="font-display text-2xl text-brand-charcoal">Bloomify</span>
            </div>
            <div className="text-sm text-brand-charcoal/70">
              <p>245 Bloom Street, Suite 02<br />Williamsburg, NY 11249</p>
              <p className="mt-2">hello@bloomify.com • (212) 555-0192</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-brand-charcoal/70 transition hover:text-brand-moss"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SocialIcon label="Instagram">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm9.5 1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zM12 9a4 4 0 1 1 0 8a4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z" />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <path d="M13 10h2.5l-.5 3H13v8h-3v-8H8v-3h2V8.5C10 6.57 10.9 5 13.43 5H16v3h-1.8C13.4 8 13 8.34 13 9v1z" />
            </SocialIcon>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-brand-charcoal/10 pt-6 text-xs text-brand-charcoal/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} Bloomify Floral Studio</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
