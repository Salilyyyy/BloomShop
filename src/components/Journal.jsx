import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const journalPosts = [
  {
    title: 'How to Layer Florals with Tableware',
    excerpt: 'Dial up intimate dinners with alternating vase heights and soft candlelight.',
    image:
      'https://images.pexels.com/photos/56866/pexels-photo-56866.jpeg?auto=compress&cs=tinysrgb&w=900',
    date: 'Oct 18, 2025',
  },
  {
    title: 'Meaningful Petal Palettes',
    excerpt: 'Decode bloom colors to tell a story—romance, gratitude, celebration, and more.',
    image:
      'https://images.unsplash.com/photo-1498821154944-1f377652e90b?auto=format&fit=crop&w=900&q=80',
    date: 'Sep 29, 2025',
  },
  {
    title: 'Centerpiece Styling for Gatherings',
    excerpt: 'Play with negative space, trailing greenery, and unexpected textures.',
    image:
      'https://images.unsplash.com/photo-1515008736326-244709992bc1?auto=format&fit=crop&w=900&q=80',
    date: 'Sep 02, 2025',
  },
]

export const Journal = () => {
  return (
    <motion.section
      className="mt-20 space-y-10"
      id="journal"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.header
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
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
            Bloom journal
          </motion.p>
          <motion.h2
            className="mt-2 font-display text-3xl text-brand-charcoal sm:text-4xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Stories, styling notes, and behind-the-scenes glimpses
          </motion.h2>
        </div>
        <motion.a
          href="#"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal transition hover:text-brand-charcoal"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ x: 5 }}
        >
          Read all posts
        </motion.a>
      </motion.header>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {journalPosts.map((post, index) => (
          <motion.article
            key={post.title}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/65 shadow-glass transition hover:-translate-y-1 hover:border-brand-petal/60"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </motion.div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <motion.span
                className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brand-charcoal/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {post.date}
              </motion.span>
              <motion.h3
                className="font-display text-2xl text-brand-charcoal"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {post.title}
              </motion.h3>
              <motion.p
                className="text-sm text-brand-charcoal/70"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {post.excerpt}
              </motion.p>
              <motion.a
                href="#"
                className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal transition group-hover:gap-3"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Read story
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
