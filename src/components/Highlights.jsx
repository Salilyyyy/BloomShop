import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Same-day Delivery',
    description: 'Hand-delivered blooms within hours for orders placed before 2PM.',
    icon: '🚚',
  },
  {
    title: 'Sustainable Farms',
    description: 'Partnering with regenerative growers for mindful sourcing.',
    icon: '🌱',
  },
  {
    title: 'Curated Styling',
    description: 'Artistic designers crafting seasonal palettes and bespoke gifting.',
    icon: '🎀',
  },
]

export const Highlights = () => {
  return (
    <motion.section
      className="mt-16 grid gap-6 md:grid-cols-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {highlights.map((item, index) => (
        <motion.article
          key={item.title}
          className="flex flex-col gap-3 rounded-3xl border border-white/40 bg-white/60 p-6 shadow-sm backdrop-blur-xs transition hover:-translate-y-1 hover:shadow-glass dark:border-white/10 dark:bg-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <motion.span
            className="text-3xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
          >
            {item.icon}
          </motion.span>
          <motion.h3
            className="font-display text-2xl text-brand-charcoal "
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {item.title}
          </motion.h3>
          <motion.p
            className="text-sm text-brand-charcoal/70 "
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {item.description}
          </motion.p>
        </motion.article>
      ))}
    </motion.section>
  )
}
