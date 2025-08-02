import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  // Contrarian navigation order - Philosophy before services, humanity before business
  const navigationItems = [
    { href: '/this-is-personal', label: 'This is Personal' },
    { href: '/at-home', label: 'At Home' },
    { href: '/the-work', label: 'The Work' },
    { href: '/social-impact', label: 'Social Impact' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' }
  ]

  const isActive = (href: string) => {
    if (href === '/' && router.asPath === '/') return true
    return router.asPath === href || router.asPath.startsWith(href + '/')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="pc-header sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#1A365D]/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand with Avatar */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Circular Avatar Image */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#1A365D]/10 group-hover:ring-[#F96E1E]/50 transition-all duration-300">
                <img
                  src="/images/Phillip-Collins-Global-Leadership-Coach-Avatar.png"
                  alt="Phillip Collins - Global Leadership Coach"
                  className="h-full w-full object-cover"
                  width="40"
                  height="40"
                />
              </div>
              
              {/* Brand Text - OPTION 1: Show on all devices */}
              <div className="block">
                <div className="text-lg font-semibold text-[#1A365D] group-hover:text-[#F96E1E] transition-colors duration-300">
                  Phillip Collins
                </div>
                <div className="text-sm text-gray-600">
                  Global Leadership Coach
                </div>
              </div>

              {/* OPTION 2: Responsive text sizing - uncomment this and comment out Option 1
              <div className="block">
                <div className="text-base sm:text-lg font-semibold text-[#1A365D] group-hover:text-[#F96E1E] transition-colors duration-300">
                  Phillip Collins
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Global Leadership Coach
                </div>
              </div>
              */}

              {/* OPTION 3: Compact mobile version - uncomment this and comment out Option 1
              <div className="block">
                <div className="text-base sm:text-lg font-semibold text-[#1A365D] group-hover:text-[#F96E1E] transition-colors duration-300">
                  Phillip Collins
                </div>
                <div className="text-xs sm:text-sm text-gray-600 sm:block hidden">
                  Global Leadership Coach
                </div>
                <div className="text-xs text-gray-600 sm:hidden block">
                  Leadership Coach
                </div>
              </div>
              */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex lg:space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-base font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-[#1A365D]'
                    : 'text-gray-700 hover:text-[#1A365D]'
                }`}
              >
                {item.label}
                
                {/* Hand-drawn underline effect */}
                <span
                  className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2c6-1 12 1 18 0s12-1 18 0 12 1 18 0' stroke='%23F96E1E' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 4px',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'center'
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1A365D] transition-colors hover:bg-[#F8F5EB] hover:text-[#7E2D40] focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {/* Hamburger icon */}
              <svg
                className={`size-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 border-t border-[#1A365D]/10 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative block p-3 text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#F8F5EB] text-[#1A365D]'
                    : 'text-gray-700 hover:bg-[#F8F5EB]/50 hover:text-[#1A365D]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  
                  {/* Mobile active indicator */}
                  {isActive(item.href) && (
                    <div
                      className="h-2 w-8"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4c3-1 6 1 9 0s6-1 9 0 6 1 9 0' stroke='%23F96E1E' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                        backgroundSize: '32px 8px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header