import { motion } from 'framer-motion'

export const Story = () => {
  return (
    <motion.section
      id="story"
      className="mt-20 grid gap-12 rounded-3xl bg-white/70 p-10 shadow-glass backdrop-blur-xs transition duration-500 dark:bg-white/10 md:grid-cols-[1.1fr_0.9fr] md:p-14"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="space-y-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/50 dark:text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our atelier
        </motion.span>
        <motion.h2
          className="font-display text-3xl text-brand-charcoal dark:text-white sm:text-4xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Crafted in a sunlit Williamsburg studio by artists who speak bloom fluently
        </motion.h2>
        <motion.p
          className="text-base text-brand-charcoal/70 dark:text-white/70"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Bloomify launched with a mission to design florals that feel like modern art pieces—refined yet untamed. Our team sketches every composition, sources stems at dawn, and hand-delivers each story with care.
        </motion.p>
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="rounded-2xl bg-white/80 p-6 text-sm shadow-sm dark:bg-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-display text-xl text-brand-charcoal dark:text-white">Mindful sourcing</h3>
            <p className="mt-3 text-brand-charcoal/70 dark:text-white/70">
              We collaborate with regenerative farms and urban growers to champion slow floristry.
            </p>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-white/80 p-6 text-sm shadow-sm dark:bg-white/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-display text-xl text-brand-charcoal dark:text-white">Art direction</h3>
            <p className="mt-3 text-brand-charcoal/70 dark:text-white/70">
              Every collection includes palettes, mood boards, and styling notes for seamless gifting.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
          alt="Inside the Bloomify studio"
          className="h-64 w-full rounded-3xl object-cover shadow-glass"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        />
        <div className="flex flex-col gap-6">
          <motion.img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80"
            alt="Florist arranging flowers"
            className="h-40 w-full rounded-3xl object-cover shadow-glass"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="flex flex-1 flex-col justify-between rounded-3xl bg-brand-petal/40 p-6 text-brand-charcoal shadow-sm dark:bg-brand-moss/30 dark:text-white"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-sm">
              "Our approach balances structural florals with loose garden movement—every arrangement feels cinematic and deeply personal."
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em]">Creative Director — Ava Bloom</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
