import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'Story', href: '#story' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-gradient-to-r from-white/80 via-white/75 to-white/80 backdrop-blur-xs transition-all duration-500 shadow-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-petal/70 text-brand-charcoal shadow-glass">
            <span className="text-lg font-semibold">B</span>
          </div>
          <span className="font-display text-2xl tracking-tight">Bloomify</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.25em] text-brand-charcoal/80 lg:flex">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-brand-meadow">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-meadow text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-brand-meadow/90">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-brand-charcoal shadow-sm">
              3
            </span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 text-brand-charcoal shadow-sm transition hover:-translate-y-0.5 hover:shadow-glass lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/30 bg-white/70 backdrop-blur-xs lg:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6 text-center">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-charcoal/80 transition hover:text-brand-meadow"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
