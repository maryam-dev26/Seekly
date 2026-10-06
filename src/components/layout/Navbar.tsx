import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Explore', to: '/explore' },
  { label: 'Topics', to: '/topics' },
  { label: 'About', to: '/about' },
  { label: 'Search', to: '/search' },
]

const linkClass = ({ isActive }: NavLinkRenderProps) =>
  `text-sm font-medium transition-colors hover:text-brand ${
    isActive ? 'text-brand underline decoration-2 underline-offset-8' : 'text-ink'
  }`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="border-b border-line">
      <nav aria-label="Main" className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" onClick={closeMenu} className="font-display text-2xl text-brand">
            Seekly
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink to={to} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle button */}
          <button
            type="button"
            className="p-2 text-ink md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {isOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile links */}
        {isOpen && (
          <ul id="mobile-menu" className="border-t border-line py-2 md:hidden">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={closeMenu}
                  className={(state) => `${linkClass(state)} block py-3`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Navbar