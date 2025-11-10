import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Collections } from './components/Collections'
import { FeaturedProducts } from './components/FeaturedProducts'
import { ProductsList } from './components/ProductsList'
import { Story } from './components/Story'
import { Membership } from './components/Membership'
import { Journal } from './components/Journal'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-moss via-brand-petal to-brand-moss">
      <Header />
      <main className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
          <Hero />
          <Highlights />
          <Collections />
          <FeaturedProducts />
          <ProductsList />
          <Story />
          <Membership />
          <Journal />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
