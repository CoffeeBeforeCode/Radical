/**
 * Header Component - Breakthrough Leadership Coaching Navigation
 * 
 * Purpose: Creates a contrarian navigation experience that immediately signals this
 * is not a template-based consultant website. Implements philosophy-before-services
 * ordering with authentic hand-drawn underline effects.
 * 
 * Design Approach: 
 * - Sticky positioning for executive-friendly navigation
 * - Contrarian menu order (humanity before business)
 * - Hand-drawn SVG underlines for authentic touch
 * - Social media prominence with LinkedIn focus
 * - Mobile hamburger with same personality
 * 
 * Key Features:
 * - Custom SVG underline animations for active/hover states
 * - 'Waiting for the Sunrise' font for selective branding
 * - Tangerine (#F96E1E) accent color for hand-drawn elements
 * - Mobile-first responsive design with touch-friendly interactions
 * - Semantic HTML structure for accessibility
 * 
 * Technical Notes:
 * - Uses useRouter for active state detection
 * - Implements backdrop-blur for modern glass effect
 * - SVG underlines are procedurally generated for organic feel
 * - ARIA labels for screen reader accessibility
 * - UK English spelling throughout
 */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  // Contrarian navigation order: Philosophy before services, humanity before business
  // This immediately signals we're different from template-based consultant websites
  const navigationItems = [
    { href: '/this-is-personal', label: 'This is Personal', description: 'Philosophy & origin story' },
    { href: '/at-home', label: 'At Home', description: 'Values in living' },
    { href: '/the-work', label: 'The Work', description: 'Approach & frameworks' },
    { href: '/social-impact', label: 'Social Impact', description: 'Leadership beyond workplace' },
    { href: '/insights', label: 'Insights', description: 'Writing & reflection' },
    { href: '/contact', label: 'Contact', description: 'Let\'s begin' }
  ]

  // Social media links with LinkedIn prominence for executive audience
  const socialLinks: Array<{
    href: string
    label: string
    icon: IconType
    primary: boolean
  }> = [
    { 
      href: 'https://linkedin.com/in/GlobalLeadershipCoach', 
      label: 'LinkedIn',
      icon: 'linkedin',
      primary: true // LinkedIn gets visual prominence
    },
    { 
      href: 'https://twitter.com/PhillipCollins', 
      label: 'Twitter',
      icon: 'twitter',
      primary: false
    },
    { 
      href: 'https://instagram.com/phillip.collins.coach', 
      label: 'Instagram',
      icon: 'instagram',
      primary: false
    }
  ]

  /**
   * Active state detection for navigation items
   * Handles both exact matches and nested routes for proper highlighting
   */
  const isActive = (href: string): boolean => {
    if (href === '/' && router.asPath === '/') return true
    if (href !== '/') {
      return router.asPath === href || router.asPath.startsWith(href + '/')
    }
    return false
  }

  /**
   * Scroll detection for header backdrop effect
   * Adds subtle transparency and blur when scrolled for modern feel
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Mobile menu toggle with body scroll lock
   * Prevents background scrolling when mobile menu is open
   */
  const toggleMenu = () => {
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    
    // Prevent body scroll when menu is open (mobile UX improvement)
    if (newState) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  /**
   * Close menu on navigation (mobile UX)
   * Automatically closes mobile menu when user navigates
   */
  const handleNavigation = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white'
        }
      `}
    >
      {/* Main header container with responsive padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between lg:h-20">
          
          {/* Brand/Logo Section */}
          <div className="flex items-center space-x-3">
            <Link 
              href="/"
              className="group flex items-center space-x-3 transition-opacity duration-200 hover:opacity-80"
              aria-label="Phillip Collins Global Leadership Coach - Return to homepage"
            >
              {/* Brand Icon/Monogram - Placeholder for future logo */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white lg:h-12 lg:w-12">
                <span className="text-lg font-semibold lg:text-xl">PC</span>
              </div>
              
              {/* Brand Text with Strategic Font Usage */}
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-slate-900 lg:text-xl">
                  Phillip Collins
                </h1>
                <p className="text-sm text-slate-600 lg:text-base">
                  Global Leadership Coach
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            
            {/* Main Navigation Links */}
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative py-2 text-base font-medium transition-colors duration-200
                    ${isActive(item.href)
                      ? 'text-slate-900'
                      : 'text-slate-700 hover:text-slate-900'
                    }
                  `}
                  title={item.description}
                >
                  {item.label}
                  
                  {/* Hand-drawn underline effect using custom SVG */}
                  <span
                    className={`
                      absolute -bottom-1 left-1/2 h-1 -translate-x-1/2 transition-all duration-300
                      ${isActive(item.href) ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
                    `}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4c6-1 12 1 18 0s12-1 18 0 12 1 18 0' stroke='%23F96E1E' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundSize: '60px 8px',
                      backgroundRepeat: 'repeat-x',
                      backgroundPosition: 'center'
                    }}
                  />
                </Link>
              ))}
            </div>

            {/* Social Media Links with LinkedIn Prominence */}
            <div className="ml-6 flex items-center space-x-4 border-l border-gray-200 pl-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    transition-colors duration-200
                    ${social.primary 
                      ? 'text-slate-900 hover:text-amber-600' // LinkedIn prominence
                      : 'text-slate-600 hover:text-slate-900'
                    }
                  `}
                  aria-label={`${social.label} - opens in new window`}
                >
                  <SocialIcon icon={social.icon} size={social.primary ? 20 : 18} />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 lg:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {/* Animated hamburger icon */}
            <div className="relative h-6 w-6">
              <span
                className={`
                  absolute left-0 top-1 h-0.5 w-6 transform bg-current transition-all duration-200
                  ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
                `}
              />
              <span
                className={`
                  absolute left-0 top-3 h-0.5 w-6 bg-current transition-all duration-200
                  ${isMenuOpen ? 'opacity-0' : ''}
                `}
              />
              <span
                className={`
                  absolute left-0 top-5 h-0.5 w-6 transform bg-current transition-all duration-200
                  ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                `}
              />
            </div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="border-t border-gray-100 py-4">
            
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavigation}
                  className={`
                    group flex items-center justify-between rounded-md px-3 py-3 text-base font-medium transition-all duration-200
                    ${isActive(item.href)
                      ? 'bg-orange-50 text-slate-900'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  <span>{item.label}</span>
                  
                  {/* Mobile active indicator */}
                  {isActive(item.href) && (
                    <div
                      className="h-2 w-8 opacity-80"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 4c3-1 6 1 9 0s6-1 9 0 6 1 9 0' stroke='%23F96E1E' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundSize: '32px 8px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="px-3 text-sm font-medium text-slate-500 mb-3">Connect</p>
              <div className="flex items-center space-x-6 px-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center space-x-2 text-sm transition-colors duration-200
                      ${social.primary 
                        ? 'text-slate-900 hover:text-amber-600' 
                        : 'text-slate-600 hover:text-slate-900'
                      }
                    `}
                    aria-label={`${social.label} - opens in new window`}
                  >
                    <SocialIcon icon={social.icon} size={16} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/**
 * Social Media Icon Component
 * 
 * Purpose: Renders SVG icons for social media links with consistent styling
 * and proper accessibility attributes.
 * 
 * Features:
 * - Scalable SVG icons
 * - Consistent stroke width and styling
 * - Optimised for readability at different sizes
 */

// Define the valid icon types for type safety
type IconType = 'linkedin' | 'twitter' | 'instagram'

interface SocialIconProps {
  icon: IconType
  size: number
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, size }) => {
  const iconPaths: Record<IconType, string> = {
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    twitter: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
    instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={iconPaths[icon]} fill={icon === 'instagram' || icon === 'linkedin' ? 'currentColor' : 'none'} />
    </svg>
  )
}

export default Header
