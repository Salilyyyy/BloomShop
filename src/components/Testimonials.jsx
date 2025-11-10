import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import testimonials from '../content/testimonials'

export const Testimonials = () => {
  const testimonialsData = testimonials || []
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    if (testimonialsData.length > 0) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)
      }, 6000)

      return () => clearInterval(interval)
    }
  }, [testimonialsData.length])

  const currentTestimonial = useMemo(
    () => testimonialsData[activeTestimonial] || {},
    [activeTestimonial, testimonialsData],
  )

  return (
    <motion.section
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-charcoal/50 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Kind words
      </motion.p>
      <motion.h2
        className="mt-2 font-display text-3xl text-brand-charcoal  sm:text-4xl"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Bloom lovers on their floral stories
      </motion.h2>

      <motion.div
        className="relative mt-12 rounded-3xl border border-white/40 bg-white/70 p-10 shadow-glass backdrop-blur-xs transition dark:border-white/10 dark:bg-white/10"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          key={activeTestimonial}
          className="text-xl leading-relaxed text-brand-charcoal/90 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          "{currentTestimonial.quote}"
        </motion.p>
        <motion.div
          key={`info-${activeTestimonial}`}
          className="mt-6 space-y-1 text-brand-charcoal "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="font-display text-2xl">{currentTestimonial.name}</p>
          <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/50 ">
            {currentTestimonial.title}
          </p>
        </motion.div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonialsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`h-2.5 rounded-full transition ${
                activeTestimonial === index
                  ? 'w-10 bg-brand-moss dark:bg-brand-petal'
                  : 'w-3 bg-brand-charcoal/20 dark:bg-white/25'
              }`}
              aria-label={`Show testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
