import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { categories } from '../content/categories'

export const Collections = () => {
  return (
    <motion.section
      id="collections"
      className="mt-20 space-y-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.header
        className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Curated series
          </motion.p>
          <motion.h2
            className="mt-2 font-display text-3xl text-brand-charcoal sm:text-4xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Seasonal collections designed to tell a story
          </motion.h2>
        </div>
        <motion.a
          href="#"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-moss transition hover:text-brand-charcoal"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
        >
          View all releases
        </motion.a>
      </motion.header>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <motion.article
            key={category.name}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blush/95 via-white/90 to-brand-mist/30 shadow-glass transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover hover:border-brand-moss/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.02 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <motion.span
                className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-charcoal shadow-sm"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
              >
                Collection
              </motion.span>
            </motion.div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <motion.h3
                className="font-display text-2xl text-brand-charcoal"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {category.name}
              </motion.h3>
              <motion.p
                className="text-sm text-brand-charcoal/70"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {category.description}
              </motion.p>
              <motion.a
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-moss transition group-hover:gap-3"
                whileHover={{ x: 5 }}
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
