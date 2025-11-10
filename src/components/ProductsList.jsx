import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { allProducts } from '../content/products'

export const ProductsList = () => {
  return (
    <motion.section
      className="mt-20 space-y-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.header
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/50 dark:text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our collection
        </motion.p>
        <motion.h2
          className="mt-2 font-display text-3xl text-brand-charcoal dark:text-white sm:text-4xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          All our beautiful flowers
        </motion.h2>
      </motion.header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {allProducts.map((product, index) => (
          <motion.article
            key={product.id}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/50 bg-brand-blush/80 shadow-glass transition hover:-translate-y-1 hover:border-brand-petal/60 dark:border-white/10 dark:bg-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <motion.span
                className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-charcoal shadow-sm dark:bg-black/60 dark:text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.05 + 0.3, type: 'spring', stiffness: 200 }}
                viewport={{ once: true }}
              >
                {product.category}
              </motion.span>
            </motion.div>
            <div className="flex flex-1 flex-col gap-4 p-5">
              <div>
                <motion.h3
                  className="font-display text-xl text-brand-charcoal dark:text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {product.name}
                </motion.h3>
                <motion.p
                  className="mt-1 text-sm text-brand-charcoal/70 dark:text-white/60"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {product.description}
                </motion.p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <motion.span
                  className="text-lg font-semibold text-brand-moss dark:text-brand-petal"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 + 0.6, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {product.price}
                </motion.span>
                <motion.button
                  className="inline-flex items-center gap-2 rounded-full bg-brand-moss px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white transition hover:-translate-y-0.5 hover:bg-brand-moss/90 dark:bg-brand-petal/80"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ShoppingCart className="h-3 w-3" /> Add
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
