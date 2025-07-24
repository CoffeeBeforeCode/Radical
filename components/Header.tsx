/**
 * Header Component - Phillip Collins Global Leadership Coach
 * 
 * Purpose: Primary navigation component that breaks consultant template conventions
 * through contrarian menu ordering and authentic brand expression. Prioritizes
 * philosophy before services and humanity before business.
 * 
 * Design Philosophy:
 * - Contrarian navigation order: This is Personal → At Home → The Work → Social Impact → Insights → Contact
 * - Philosophy before services, humanity before business
 * - LinkedIn prominence reflecting professional networking focus
 * - Hand-drawn underline effects for authentic touch
 * - Clean, confident presentation without unnecessary complexity
 * 
 * Key Features:
 * - Sticky positioning for executive-friendly navigation
 * - Hand-drawn SVG underlines for current page indication
 * - Mobile hamburger menu with same authentic personality
 * - Social media prominence in header (LinkedIn focus)
 * - Responsive design optimized for multi-device executive usage
 * 
 * Brand Alignment:
 * - Uses observant sage-caregiver positioning
 * - Tangerine (#F96E1E) accents for hand-drawn elements
 * - Navy (#1A365D) for primary text and authority
 * - Authentic over polished, substance over style
 */

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  // Contrarian navigation order - Philosophy before services, humanity before business
  // This ordering immediately signals that this is not a template-based consultant website
  const navigationItems = [
    { href: '/this-is-personal', label: 'This is Personal' },
    { href: '/at-home', label: 'At Home' },
    { href: '/the-work', label: 'The Work' },
    { href: '/social-impact', label: 'Social Impact' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' }
  ]

  /**
   * Active state detection for navigation highlighting
   * Handles both exact matches and path prefixes for nested routes
   */
  const isActive = (href: string) => {
    if (href === '/' && router.asPath === '/') return true
    return router.asPath === href || router.asPath.startsWith(href + '/')
  }

  /**
   * Mobile menu toggle with accessibility considerations
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#1A365D]/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          
          {/* 
            Logo/Brand Section
            Simple text-based approach emphasizing name and positioning
            Links to homepage with proper accessibility labeling
          */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group flex flex-col"
              aria-label="Phillip Collins Global Leadership Coach - Return to homepage"
            >
              <span className="font-['Waiting_for_the_Sunrise'] text-2xl text-[#1A365D] transition-colors duration-300 group-hover:text-[#7E2D40]">
                Phillip Collins
              </span>
              <span className="text-sm font-medium text-[#4A4A4A] -mt-1">
                Global Leadership Coach
              </span>
            </Link>
          </div>

          {/* 
            Desktop Navigation
            Hidden on mobile, revealed on medium screens and above
            Uses hand-drawn underline effects for authentic touch
          */}
          <div className="hidden md:flex md:items-center md:space-x-8 lg:space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 text-base font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-[#1A365D]'
                    : 'text-[#4A4A4A] hover:text-[#1A365D]'
                }`}
              >
                {item.label}
                
                {/* 
                  Hand-drawn underline effect using SVG data URL
                  Appears for active pages and on hover
                  Tangerine color for dopamine accent effect
                */}
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

          {/* 
            Social Media Links - Desktop
            LinkedIn prominence reflecting professional networking focus
            Positioned in header for immediate visibility
          */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="https://linkedin.com/in/GlobalLeadershipCoach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A4A4A] hover:text-[#1A365D] transition-colors duration-300"
              aria-label="LinkedIn - Connect with Phillip Collins"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="https://twitter.com/PhillipCollins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A4A4A] hover:text-[#1A365D] transition-colors duration-300"
              aria-label="Twitter - Follow Phillip Collins"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/PhillipCollins"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A4A4A] hover:text-[#1A365D] transition-colors duration-300"
              aria-label="Instagram - Follow Phillip Collins"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.017 0C8.396 0 7.936.011 6.624.058 5.31.105 4.427.277 3.642.525a6.706 6.706 0 00-2.36 1.527A6.706 6.706 0 00-.193 3.89c-.249.784-.42 1.667-.468 2.98C-.058 7.936-.047 8.396-.047 12.017c0 3.622.011 4.082.058 5.394.048 1.312.22 2.195.468 2.98a6.706 6.706 0 001.527 2.36 6.706 6.706 0 002.36 1.527c.785.249 1.668.42 2.98.468 1.312.047 1.772.058 5.394.058 3.622 0 4.082-.011 5.394-.058 1.312-.048 2.195-.22 2.98-.468a6.706 6.706 0 002.36-1.527 6.706 6.706 0 001.527-2.36c.249-.785.42-1.668.468-2.98.047-1.312.058-1.772.058-5.394 0-3.622-.011-4.082-.058-5.394-.048-1.312-.22-2.195-.468-2.98a6.706 6.706 0 00-1.527-2.36A6.706 6.706 0 0020.5.525c-.785-.249-1.668-.42-2.98-.468C16.208.011 15.748 0 12.017 0zM12.017 2.168c3.551 0 3.977.01 5.375.056 1.298.059 2.003.275 2.472.458a4.132 4.132 0 011.534.998 4.132 4.132 0 01.998 1.534c.183.469.399 1.174.458 2.472.046 1.398.056 1.824.056 5.375 0 3.551-.01 3.977-.056 5.375-.059 1.298-.275 2.003-.458 2.472a4.132 4.132 0 01-.998 1.534 4.132 4.132 0 01-1.534.998c-.469.183-1.174.399-2.472.458-1.398.046-1.824.056-5.375.056-3.551 0-3.977-.01-5.375-.056-1.298-.059-2.003-.275-2.472-.458a4.132 4.132 0 01-1.534-.998 4.132 4.132 0 01-.998-1.534c-.183-.469-.399-1.174-.458-2.472-.046-1.398-.056-1.824-.056-5.375 0-3.551.01-3.977.056-5.375.059-1.298.275-2.003.458-2.472a4.132 4.132 0 01.998-1.534 4.132 4.132 0 011.534-.998c.469-.183 1.174-.399 2.472-.458 1.398-.046 1.824-.056 5.375-.056z" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4.011 4.011 0 110-8.022 4.011 4.011 0 010 8.022z" clipRule="evenodd"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>
          </div>

          {/* 
            Mobile Menu Button
            Hamburger icon that transforms to X when open
            Includes proper accessibility attributes
          */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1A365D] transition-colors hover:bg-[#F8F5EB] hover:text-[#7E2D40] focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''}`}
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

        {/* 
          Mobile Navigation Menu
          Slides down from header with same authentic personality
          Includes social media links and proper touch targets
        */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 border-t border-[#1A365D]/10 py-4">
            
            {/* Mobile navigation items with enhanced touch targets */}
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative block p-3 text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-[#F8F5EB] text-[#1A365D]'
                    : 'text-[#4A4A4A] hover:bg-[#F8F5EB]/50 hover:text-[#1A365D]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  
                  {/* Mobile active indicator with hand-drawn style */}
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

            {/* Mobile social media links */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-[#1A365D]/10 mt-4">
              <a
                href="https://linkedin.com/in/GlobalLeadershipCoach"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A4A4A] hover:text-[#1A365D] transition-colors duration-300"
                aria-label="LinkedIn - Connect with Phillip Collins"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://twitter.com/PhillipCollins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A4A4A] hover:text-[#1A365D] transition-colors duration-300"
                aria-label="Twitter - Follow Phillip Collins"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com/PhillipCollins"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A4A4A] hover:text-[#1A365D] transition-colors duration-300"
                aria-label="Instagram - Follow Phillip Collins"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.936.011 6.624.058 5.31.105 4.427.277 3.642.525a6.706 6.706 0 00-2.36 1.527A6.706 6.706 0 00-.193 3.89c-.249.784-.42 1.667-.468 2.98C-.058 7.936-.047 8.396-.047 12.017c0 3.622.011 4.082.058 5.394.048 1.312.22 2.195.468 2.98a6.706 6.706 0 001.527 2.36 6.706 6.706 0 002.36 1.527c.785.249 1.668.42 2.98.468 1.312.047 1.772.058 5.394.058 3.622 0 4.082-.011 5.394-.058 1.312-.048 2.195-.22 2.98-.468a6.706 6.706 0 002.36-1.527 6.706 6.706 0 001.527-2.36c.249-.785.42-1.668.468-2.98.047-1.312.058-1.772.058-5.394 0-3.622-.011-4.082-.058-5.394-.048-1.312-.22-2.195-.468-2.98a6.706 6.706 0 00-1.527-2.36A6.706 6.706 0 0020.5.525c-.785-.249-1.668-.42-2.98-.468C16.208.011 15.748 0 12.017 0zM12.017 2.168c3.551 0 3.977.01 5.375.056 1.298.059 2.003.275 2.472.458a4.132 4.132 0 011.534.998 4.132 4.132 0 01.998 1.534c.183.469.399 1.174.458 2.472.046 1.398.056 1.824.056 5.375 0 3.551-.01 3.977-.056 5.375-.059 1.298-.275 2.003-.458 2.472a4.132 4.132 0 01-.998 1.534 4.132 4.132 0 01-1.534.998c-.469.183-1.174.399-2.472.458-1.398.046-1.824.056-5.375.056-3.551 0-3.977-.01-5.375-.056-1.298-.059-2.003-.275-2.472-.458a4.132 4.132 0 01-1.534-.998 4.132 4.132 0 01-.998-1.534c-.183-.469-.399-1.174-.458-2.472-.046-1.398-.056-1.824-.056-5.375 0-3.551.01-3.977.056-5.375.059-1.298.275-2.003.458-2.472a4.132 4.132 0 01.998-1.534 4.132 4.132 0 011.534-.998c.469-.183 1.174-.399 2.472-.458 1.398-.046 1.824-.056 5.375-.056z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4.011 4.011 0 110-8.022 4.011 4.011 0 010 8.022z" clipRule="evenodd"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
