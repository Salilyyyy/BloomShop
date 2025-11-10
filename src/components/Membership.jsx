import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Membership = () => {
  return (
    <motion.section
      className="mt-20 rounded-3xl bg-gradient-to-r from-brand-petal/70 via-white/80 to-brand-mist/80 p-10 shadow-glass backdrop-blur-xs dark:from-brand-moss/60 dark:via-brand-charcoal/70 dark:to-brand-charcoal/60 md:flex md:items-center md:justify-between md:p-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-xl space-y-4"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/60 dark:text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Membership
        </motion.span>
        <motion.h2
          className="font-display text-3xl text-brand-charcoal dark:text-white sm:text-4xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join the Bloom Society for concierge services, previews, and atelier events
        </motion.h2>
        <motion.p
          className="text-sm text-brand-charcoal/70 dark:text-white/70"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Complimentary vase upgrades, monthly styling tips, and early access to limited collections designed with guest artists.
        </motion.p>
      </motion.div>
      <motion.a
        href="#"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-charcoal px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-brand-charcoal/90 dark:bg-white/15 dark:text-white md:mt-0"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Enroll today
        <ArrowRight className="h-4 w-4" />
      </motion.a>
    </motion.section>
  )
}
