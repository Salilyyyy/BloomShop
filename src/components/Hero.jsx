import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative grid gap-10 rounded-3xl bg-gradient-to-br from-white/90 via-white/85 to-brand-roseLight/30 p-8 shadow-glass-strong backdrop-blur-xs transition duration-500 md:grid-cols-[1.2fr_1fr] md:p-12 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-brand-rose/5 before:via-transparent before:to-brand-moss/5 before:pointer-events-none"
    >
      <motion.div
        className="flex flex-col justify-center gap-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.span
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-brand-moss shadow-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          Bloom studio • Est. 2013
        </motion.span>

        <motion.h1
          className="font-display text-4xl leading-tight tracking-tight text-brand-charcoal sm:text-5xl lg:text-6xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Floral art direction for thoughtful gifting & elevated spaces
        </motion.h1>

        <motion.p
          className="text-base text-brand-charcoal/70"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          From sunrise bouquets to evening installations, Bloomify designs emotional floral stories with locally sourced stems and modern composition.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#collections"
            className="inline-flex items-center gap-3 rounded-full bg-brand-meadow px-7 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-brand-meadow/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Collections
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <motion.a
            href="#story"
            className="inline-flex items-center gap-3 rounded-full border border-brand-charcoal/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal transition hover:border-brand-moss hover:text-brand-moss"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Studio
          </motion.a>
        </motion.div>

        <motion.dl
          className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
          >
            <dt className="text-xs uppercase tracking-[0.3em] text-brand-charcoal/50">Installations</dt>
            <dd className="font-display text-3xl text-brand-charcoal">650+</dd>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
          >
            <dt className="text-xs uppercase tracking-[0.3em] text-brand-charcoal/50">Same-day citywide</dt>
            <dd className="font-display text-3xl text-brand-charcoal">12</dd>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
          >
            <dt className="text-xs uppercase tracking-[0.3em] text-brand-charcoal/50">Designers</dt>
            <dd className="font-display text-3xl text-brand-charcoal">18</dd>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7, type: 'spring', stiffness: 200 }}
          >
            <dt className="text-xs uppercase tracking-[0.3em] text-brand-charcoal/50">Rating</dt>
            <dd className="font-display text-3xl text-brand-charcoal">4.9</dd>
          </motion.div>
        </motion.dl>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-3xl"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
          alt="Bloomify signature bouquet"
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 px-5 py-4 text-sm font-semibold text-brand-charcoal shadow-glass backdrop-blur-xs"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Custom palette consultations available every weekday.
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
