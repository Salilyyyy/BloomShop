import { useEffect, useMemo, useState } from 'react'
import './App.css'

const categories = [
  {
    name: 'Bouquets',
    description: 'Curated seasonal arrangements bursting with color.',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Roses',
    description: 'Elegant roses in every hue, perfect for romance.',
    image:
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Gifts',
    description: 'Thoughtful add-ons from candles to artisan chocolates.',
    image:
      'https://images.unsplash.com/photo-1511288599965-1c7a0ed0e6ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Plants',
    description: 'Long-lasting greenery to refresh any space.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80',
  },
]

const featuredProducts = [
  {
    name: 'Sunset Serenade',
    price: '$68',
    image:
      'https://images.unsplash.com/photo-1438109491414-7198515b166b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Blush Romance',
    price: '$54',
    image:
      'https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Garden Party',
    price: '$82',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Evergreen Grace',
    price: '$74',
    image:
      'https://images.unsplash.com/photo-1448932252197-d19750584e56?auto=format&fit=crop&w=800&q=80',
  },
]

const testimonials = [
  {
    quote:
      'Bloomify exceeded my expectations! The bouquet arrived fresh, artfully arranged, and filled my home with joy for over a week.',
    name: 'Sophie Williams',
    title: 'Event Planner',
  },
  {
    quote:
      'Their team handled floral décor for our boutique hotel and the result was breathtaking. Guests still ask who we use.',
    name: 'Marcus Chen',
    title: 'Hotel Manager',
  },
  {
    quote:
      'I love the curated gift sets. They make it so easy to send something meaningful to clients and friends alike.',
    name: 'Layla Ahmed',
    title: 'Interior Stylist',
  },
]

const blogPosts = [
  {
    title: 'Caring for Cut Flowers That Last',
    excerpt:
      'Simple, stylist-approved techniques to extend the life of your blooms and keep them camera-ready.',
    image:
      'https://images.unsplash.com/photo-1470049384172-927891aadf5d?auto=format&fit=crop&w=800&q=80',
    date: 'Oct 18, 2025',
  },
  {
    title: 'The Secret Language of Roses',
    excerpt:
      'Discover the meaning behind rose colors so you can send the perfect message every time.',
    image:
      'https://images.unsplash.com/photo-1498821154944-1f377652e90b?auto=format&fit=crop&w=800&q=80',
    date: 'Sep 29, 2025',
  },
  {
    title: 'Styling Dinner Parties with Florals',
    excerpt:
      'Layer textures, heights, and fragrances to build a tablescape your guests will remember.',
    image:
      'https://images.unsplash.com/photo-1515008736326-244709992bc1?auto=format&fit=crop&w=800&q=80',
    date: 'Sep 02, 2025',
  },
]

function App() {
  const [isDark, setIsDark] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = useMemo(
    () => testimonials[activeTestimonial],
    [activeTestimonial],
  )

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark transition-colors duration-300 dark:bg-brand-dark dark:text-white">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,195,212,0.45),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(108,155,125,0.35),_transparent_65%)]" />

        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm transition border-b border-white/40 dark:bg-brand-dark/80 dark:border-white/5">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink/60 text-brand-dark shadow-soft dark:bg-brand-green/30 dark:text-white">
                <span className="text-lg font-semibold">B</span>
              </div>
              <span className="font-display text-2xl tracking-tight">Bloomify</span>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-brand-dark/80 dark:text-white/70 md:flex">
              <a className="transition hover:text-brand-green" href="#home">
                Home
              </a>
              <a className="transition hover:text-brand-green" href="#shop">
                Shop
              </a>
              <a className="transition hover:text-brand-green" href="#about">
                About
              </a>
              <a className="transition hover:text-brand-green" href="#blog">
                Blog
              </a>
              <a className="transition hover:text-brand-green" href="#contact">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-pink/40 bg-white/80 text-brand-dark shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-white/10 dark:bg-white/10 dark:text-white"
                aria-label="Toggle dark mode"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>

              <button className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white shadow-soft transition hover:-translate-y-0.5 dark:bg-brand-pink/70">
                <CartIcon />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-pink text-xs font-semibold text-brand-dark shadow">3</span>
              </button>
            </div>
          </div>
        </header>

        <main>
          <section id="home" className="relative isolate">
            <div
              className="relative flex min-h-[80vh] items-center overflow-hidden px-4 py-24 sm:px-6 lg:min-h-[90vh] lg:px-8"
            >
              <div
                className="absolute inset-0 -z-10 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=2000&q=80')",
                }}
              />
              <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white/90 via-white/70 to-white/90 dark:from-brand-dark/90 dark:via-brand-dark/80 dark:to-brand-dark/90" />

              <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
                <div className="max-w-2xl space-y-6">
                  <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green shadow-sm backdrop-blur dark:bg-white/10 dark:text-brand-pink">
                    Freshly curated florals delivered daily
                  </p>
                  <h1 className="font-display text-4xl leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl dark:text-white">
                    Brighten Your Day with Beautiful Blooms
                  </h1>
                  <p className="text-lg text-brand-dark/70 dark:text-white/70">
                    Discover handcrafted arrangements, lush plants, and thoughtful gifts designed to celebrate every moment. Bloomify makes gifting effortless with same-day delivery and bespoke floral artistry.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="#shop"
                      className="group inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green/90 dark:bg-brand-pink/80"
                    >
                      Shop Now
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <a
                      href="#about"
                      className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-green transition hover:border-brand-green hover:text-brand-green dark:border-white/20 dark:text-white"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
                    alt="Bloomify signature bouquet"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/80 px-5 py-4 text-sm font-semibold text-brand-dark shadow backdrop-blur dark:bg-brand-dark/70 dark:text-white">
                    Same-day delivery before 2PM
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="shop" className="relative py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green dark:text-brand-pink">
                    Shop by collection
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-brand-dark dark:text-white sm:text-4xl">
                    Curated florals for every celebration
                  </h2>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wide text-brand-green transition hover:text-brand-dark dark:text-brand-pink/90"
                >
                  View all products
                </a>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {categories.map((category) => (
                  <article
                    key={category.name}
                    className="group relative overflow-hidden rounded-3xl bg-white/70 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/5"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-44 w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="mt-6 space-y-3">
                      <h3 className="font-display text-2xl text-brand-dark dark:text-white">
                        {category.name}
                      </h3>
                      <p className="text-sm text-brand-dark/70 dark:text-white/60">
                        {category.description}
                      </p>
                      <button className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-green transition group-hover:gap-3 dark:text-brand-pink">
                        Explore
                        <span aria-hidden>→</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-20">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green dark:text-brand-pink">
                      Featured this week
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-brand-dark dark:text-white sm:text-4xl">
                      Bloomify best sellers
                    </h2>
                  </div>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                  {featuredProducts.map((product) => (
                    <article
                      key={product.name}
                      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/80 shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/5"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark shadow-sm dark:bg-brand-dark/70 dark:text-white">
                          Best Seller
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 p-6">
                        <div>
                          <h3 className="font-display text-2xl text-brand-dark dark:text-white">
                            {product.name}
                          </h3>
                          <p className="mt-2 text-sm text-brand-dark/70 dark:text-white/60">
                            Handcrafted arrangement featuring farm-direct blooms.
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-brand-green dark:text-brand-pink">
                            {product.price}
                          </span>
                          <button className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-brand-green/90 dark:bg-brand-pink/80">
                            <CartIcon className="h-4 w-4" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="relative py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green dark:text-brand-pink">
                    Our story
                  </p>
                  <h2 className="font-display text-3xl text-brand-dark dark:text-white sm:text-4xl">
                    Crafted with passion, guided by nature
                  </h2>
                  <p className="text-lg text-brand-dark/70 dark:text-white/70">
                    Bloomify began as a studio of floral artists dedicated to celebrating life’s most meaningful moments. From intimate celebrations to grand events, our team approaches each arrangement with an eye for detail and a love for storytelling through botanicals.
                  </p>
                  <p className="text-lg text-brand-dark/70 dark:text-white/70">
                    We partner with sustainable farms, support local growers, and source rare blooms from around the world. Every stem is handled with care, ensuring your arrangement arrives vibrant, long-lasting, and unforgettable.
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <p className="font-display text-4xl text-brand-green dark:text-brand-pink">12+</p>
                      <p className="text-sm uppercase tracking-wide text-brand-dark/60 dark:text-white/50">
                        Years of floral artistry
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-4xl text-brand-green dark:text-brand-pink">4.9</p>
                      <p className="text-sm uppercase tracking-wide text-brand-dark/60 dark:text-white/50">
                        Customer rating
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 -top-10 hidden h-32 w-32 rounded-full bg-brand-pink/60 blur-3xl sm:block" />
                  <div className="absolute -right-8 bottom-0 hidden h-28 w-28 rounded-full bg-brand-green/40 blur-3xl sm:block" />
                  <div className="relative grid gap-6 sm:grid-cols-2">
                    <img
                      src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"
                      alt="Bloomify floral studio"
                      className="h-72 w-full rounded-3xl object-cover shadow-soft"
                    />
                    <div className="space-y-6">
                      <img
                        src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80"
                        alt="Florist arranging flowers"
                        className="h-40 w-full rounded-3xl object-cover shadow-soft"
                      />
                      <div className="rounded-3xl bg-white/80 p-6 shadow-soft backdrop-blur dark:bg-white/5">
                        <p className="text-sm font-semibold uppercase tracking-wide text-brand-green dark:text-brand-pink">
                          Bloomify values
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-brand-dark/70 dark:text-white/70">
                          <li>• Sustainable sourcing & mindful packaging</li>
                          <li>• Bespoke designs guided by your story</li>
                          <li>• Dedicated floral concierge support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl bg-brand-green/10 p-10 shadow-soft dark:bg-white/5">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green dark:text-brand-pink">
                      Membership perks
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-brand-dark dark:text-white">
                      Join the Bloomify Circle
                    </h3>
                    <p className="mt-4 text-brand-dark/70 dark:text-white/70">
                      Become a member and receive exclusive drops, complimentary vase upgrades, and priority access to limited seasonal collections.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 rounded-full bg-brand-green px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green/90 dark:bg-brand-pink/80"
                  >
                    Join Now
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green dark:text-brand-pink">
                Words we cherish
              </p>
              <h2 className="mt-3 font-display text-3xl text-brand-dark dark:text-white sm:text-4xl">
                Testimonials from our bloom lovers
              </h2>

              <div className="relative mt-12">
                <div className="rounded-3xl bg-white/80 p-10 shadow-soft transition dark:bg-white/5">
                  <p className="text-xl italic leading-relaxed text-brand-dark dark:text-white">
                    “{currentTestimonial.quote}”
                  </p>
                  <div className="mt-8 text-brand-dark dark:text-white">
                    <p className="font-display text-2xl">{currentTestimonial.name}</p>
                    <p className="text-sm uppercase tracking-wide text-brand-dark/60 dark:text-white/40">
                      {currentTestimonial.title}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex justify-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition ${
                        activeTestimonial === index
                          ? 'w-10 bg-brand-green dark:bg-brand-pink'
                          : 'w-2.5 bg-brand-green/30 dark:bg-white/20'
                      }`}
                      aria-label={`Show testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="blog" className="relative py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green dark:text-brand-pink">
                    Bloomify journal
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-brand-dark dark:text-white sm:text-4xl">
                    Stories & floral inspiration
                  </h2>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold uppercase tracking-wide text-brand-green transition hover:text-brand-dark dark:text-brand-pink/90"
                >
                  Explore all articles
                </a>
              </div>

              <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((post) => (
                  <article
                    key={post.title}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/80 shadow-soft transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/5"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand-green dark:text-brand-pink">
                        {post.date}
                      </span>
                      <h3 className="font-display text-2xl text-brand-dark dark:text-white">
                        {post.title}
                      </h3>
                      <p className="text-sm text-brand-dark/70 dark:text-white/60">
                        {post.excerpt}
                      </p>
                      <a
                        href="#"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-green transition group-hover:gap-3 dark:text-brand-pink"
                      >
                        Read more
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer id="contact" className="relative border-t border-brand-dark/10 bg-white/80 py-16 text-brand-dark dark:border-white/10 dark:bg-brand-dark/80 dark:text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink/60 text-brand-dark shadow-soft dark:bg-brand-green/30 dark:text-white">
                    <span className="text-lg font-semibold">B</span>
                  </div>
                  <span className="font-display text-2xl">Bloomify</span>
                </div>
                <p className="mt-4 text-sm text-brand-dark/70 dark:text-white/60">
                  245 Bloom Street, Suite 02
                  <br />
                  Williamsburg, NY 11249
                </p>
                <p className="mt-4 text-sm text-brand-dark/70 dark:text-white/60">
                  hello@bloomify.com
                  <br />
                  (212) 555-0192
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
                <ul className="mt-4 space-y-2 text-sm text-brand-dark/70 dark:text-white/60">
                  <li>
                    <a className="transition hover:text-brand-green" href="#shop">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-brand-green" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-brand-green" href="#blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="transition hover:text-brand-green" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide">Follow Us</h4>
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
              </div>

      <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide">Stay in Bloom</h4>
                <p className="mt-4 text-sm text-brand-dark/70 dark:text-white/60">
                  Subscribe for floral tips, exclusive launches, and member-only offers.
                </p>
                <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-full border border-brand-dark/10 bg-white/90 px-5 py-3 text-sm outline-none transition focus:border-brand-green dark:border-white/10 dark:bg-white/10"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green/90 dark:bg-brand-pink/80"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 border-t border-brand-dark/10 pt-8 text-sm text-brand-dark/60 dark:border-white/10 dark:text-white/40">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <p>© {new Date().getFullYear()} Bloomify. All rights reserved.</p>
                <div className="flex gap-6">
                  <a className="transition hover:text-brand-green" href="#">
                    Privacy Policy
                  </a>
                  <a className="transition hover:text-brand-green" href="#">
                    Terms of Service
        </a>
      </div>
              </div>
            </div>
          </div>
        </footer>

        <button
          className="fixed bottom-6 right-6 flex items-center gap-3 rounded-full bg-brand-green px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-green/90 dark:bg-brand-pink/80"
        >
          <ChatIcon />
          Chat with us
        </button>
      </div>
    </div>
  )
}

const CartIcon = ({ className = 'h-5 w-5' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.8}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 4h2l2 12h10l2-8H7"
    />
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="17" cy="19" r="1.5" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.79A9 9 0 0 1 12.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21z"
    />
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2m-3.07-7.07l-1.41 1.41M6.34 17.66l-1.41 1.41" />
  </svg>
)

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-3.44-.67L4 19l.85-3.08A6.992 6.992 0 0 1 3 12c0-3.866 3.582-7 8-7s8 3.134 8 7z"
    />
  </svg>
)

const SocialIcon = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/10 text-brand-dark transition hover:border-brand-green hover:text-brand-green dark:border-white/20 dark:text-white dark:hover:border-brand-pink dark:hover:text-brand-pink"
  >
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      {children}
    </svg>
  </a>
)

export default App
