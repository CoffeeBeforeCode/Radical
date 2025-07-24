/**
 * Layout Component - Phillip Collins Global Leadership Coach
 * 
 * Purpose: Master layout component providing the structural foundation for the entire
 * website. Implements grid-first, color-driven section architecture that breaks
 * consultant template conventions through bold design choices and authentic content.
 * 
 * Design Philosophy: 
 * - Grid-based block architecture inspired by modern asymmetric design
 * - Color-driven sections using strategic dopamine accents
 * - Mobile-first responsive with special consideration for executive multi-monitor setups
 * - Breakthrough quality over template safety
 * 
 * Key Features:
 * - Comprehensive SEO meta tag management with UK English
 * - Structured data for leadership coaching context
 * - Block/section component system for consistent grid layouts
 * - Responsive grid patterns that adapt across devices
 * - Accessibility-first implementation with proper ARIA labels
 * 
 * Color Strategy:
 * - Primary colors (60%): Navy (#1A365D), Burgundy (#7E2D40), Charcoal (#4A4A4A)
 * - Secondary colors (30%): Sage (#7A9A7F), Gold (#D4B86A), Stone Blue (#6B89A8)
 * - Dopamine accents (10%): Tangerine (#F96E1E), Terracotta (#C26A4E), Cream (#F8F5EB)
 */
import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  canonical?: string
  noIndex?: boolean
  ogImage?: string
  className?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  canonical,
  noIndex = false,
  ogImage,
  className = ''
}) => {
  // Default meta values with UK English and leadership coaching focus
  const defaultTitle = 'Phillip Collins | Global Leadership Coach'
  const defaultDescription = 'Global Leadership Coach specialising in reducing interference through embodied perception. Working with senior executives across Europe, Middle East, Americas, and Asia Pacific.'
  const baseUrl = 'https://phillip-collins.com'

  // Construct SEO-optimized meta content
  const fullTitle = title ? `${title} | Phillip Collins` : defaultTitle
  const metaDescription = description || defaultDescription
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl
  const ogImageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/images/og-default.png`

  return (
    <>
      <Head>
        {/* Primary Meta Tags - UK English throughout */}
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Canonical URL for SEO */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Robots directive */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Open Graph / Facebook - Executive audience sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={`${fullTitle} - Leadership coaching and development`} />
        <meta property="og:site_name" content="Phillip Collins | Global Leadership Coach" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter Card - Professional networking */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={ogImageUrl} />
        <meta property="twitter:image:alt" content={`${fullTitle} - Leadership coaching and development`} />
        
        {/* Additional SEO Meta - UK/International context */}
        <meta name="author" content="Phillip Collins" />
        <meta name="publisher" content="Phillip Collins" />
        <meta httpEquiv="content-language" content="en-GB" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        
        {/* Keywords - Leadership coaching focus */}
        <meta name="keywords" content="global leadership coach, executive coaching UK, leadership development, emotional intelligence training, cross-cultural leadership, leadership equation, embodied perception, values constellation mapping, senior executive coaching, international leadership development" />
        
        {/* Structured Data for Leadership Coaching Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Phillip Collins Global Leadership Coach',
              description: 'Global Leadership Coach specialising in executive coaching, emotional intelligence, and cross-cultural leadership development',
              url: baseUrl,
              sameAs: [
                'https://linkedin.com/in/GlobalLeadershipCoach'
              ],
              founder: {
                '@type': 'Person',
                name: 'Phillip Collins',
                jobTitle: 'Global Leadership Coach',
                description: 'Executive coach with three decades of experience working with senior leaders across continents and industries'
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'GB'
              },
              areaServed: [
                { '@type': 'Place', name: 'Europe' },
                { '@type': 'Place', name: 'Middle East' },
                { '@type': 'Place', name: 'Americas' },
                { '@type': 'Place', name: 'Asia Pacific' }
              ],
              serviceType: [
                'Executive Coaching',
                'Leadership Development',
                'Emotional Intelligence Training',
                'Cross-Cultural Leadership'
              ]
            })
          }}
        />
        
        {/* Structured Data for Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Global Leadership Coaching',
              description: 'Executive coaching services focusing on the Leadership Equation (PE = PO - I) and embodied perception methodology',
              provider: {
                '@type': 'Person',
                name: 'Phillip Collins'
              },
              areaServed: [
                'United Kingdom', 'Ireland', 'France', 'Belgium', 'Netherlands',
                'United Arab Emirates', 'Saudi Arabia', 'Israel',
                'United States', 'Argentina', 'Brazil',
                'India', 'Singapore'
              ],
              serviceType: 'Executive Coaching',
              audience: {
                '@type': 'Audience',
                name: 'Senior Executives and Global Leaders'
              }
            })
          }}
        />
        
        {/* Person Schema for Phillip Collins */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Phillip Collins',
              jobTitle: 'Global Leadership Coach',
              description: 'Leadership coach specialising in reducing interference through embodied perception and emotional intelligence',
              url: baseUrl,
              sameAs: [
                'https://linkedin.com/in/GlobalLeadershipCoach'
              ],
              knowsAbout: [
                'Leadership Development',
                'Executive Coaching', 
                'Emotional Intelligence',
                'Cross-Cultural Leadership',
                'The Leadership Equation',
                'Embodied Perception',
                'Values Constellation Mapping'
              ],
              alumniOf: [
                'Seth Godin altMBA Programme',
                'John Grinder NLP Training'
              ]
            })
          }}
        />
      </Head>

      {/* Main layout structure with grid-first architecture */}
      <div className={`relative flex min-h-screen flex-col ${className}`}>
        {/* 
          Header: Sticky positioning for executive-friendly navigation
          Contains contrarian menu order (philosophy before services)
        */}
        <Header />
        
        {/* 
          Main content area: Flex-grow ensures footer positioning
          Grid-based section architecture enables color-driven design
        */}
        <main className="flex flex-1 flex-col">
          {children}
        </main>
        
        {/* 
          Footer placeholder: Can be added later when Footer component is ready
          For now, simple footer content inline
        */}
        <footer className="bg-[#1A365D] text-white">
          <div className="mx-auto max-w-7xl px-4 py-8 text-center">
            <p className="font-['Waiting_for_the_Sunrise'] text-xl text-[#D4B86A]">
              Leadership is a <strong>practice</strong>, not a destination
            </p>
            <p className="mt-4 text-sm text-white/60">
              © {new Date().getFullYear()} Phillip Collins. Reducing interference since 2011.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout

/**
 * Block Component - Content Section Wrapper
 * 
 * Purpose: Standardised container for grid-based content sections that enables
 * the color-driven design system. Each block represents a distinct content area
 * with its own background treatment and spacing.
 * 
 * Background Options:
 * - white: Default clean background
 * - cream: Warm background for breathing space (#F8F5EB)
 * - navy: Authority sections with white text (#1A365D)
 * - burgundy: Emotional intelligence content (#7E2D40)
 * 
 * Spacing Options:
 * - compact: Reduced padding for tighter sections
 * - default: Standard section spacing
 * - spacious: Extended padding for important content
 */
export const Block: React.FC<{
  children: ReactNode
  background?: 'white' | 'cream' | 'navy' | 'burgundy'
  spacing?: 'compact' | 'default' | 'spacious'
  className?: string
}> = ({
  children,
  background = 'white',
  spacing = 'default',
  className = ''
}) => {
  // Spacing calculations for different content densities
  const spacingClasses = {
    compact: 'py-12 md:py-16',
    default: 'py-16 md:py-24',
    spacious: 'py-20 md:py-32'
  }

  // Background color system aligned with brand palette
  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-[#F8F5EB]',
    navy: 'bg-[#1A365D] text-white',
    burgundy: 'bg-[#7E2D40] text-white'
  }

  return (
    <section className={`${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

/**
 * Grid Component - Responsive Grid System
 * 
 * Purpose: Flexible grid system that adapts content layouts across devices
 * while maintaining visual hierarchy and readability for executive audiences.
 * 
 * Column Options:
 * - 1: Full-width content (statements, heroes)
 * - 2: Balanced layouts (text + image, testimonials)
 * - 3: Feature groupings (frameworks, services)
 * - 5: Distributed concepts (values, principles)
 * - asymmetric: 2/3 + 1/3 emphasis layout
 * 
 * Responsive Behaviour:
 * - Mobile: All grids stack to single column for touch interaction
 * - Tablet: Limited grid expansion maintaining readability
 * - Desktop Landscape: Full grid system for wide screens
 * - Desktop Portrait: Adjusted proportions for multi-monitor setups
 */
export const Grid: React.FC<{
  children: ReactNode
  columns?: 1 | 2 | 3 | 5 | 'asymmetric'
  className?: string
}> = ({
  children,
  columns = 2,
  className = ''
}) => {
  // Grid class generation based on column requirements
  const getGridClass = () => {
    switch (columns) {
      case 1:
        return 'grid grid-cols-1 gap-6 md:gap-8'
      case 2:
        return 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'
      case 3:
        return 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'
      case 5:
        return 'grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5'
      case 'asymmetric':
        return 'grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'
      default:
        return 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'
    }
  }

  return (
    <div className={`${getGridClass()} ${className}`}>
      {children}
    </div>
  )
}

/**
 * PageLayout Component - Content Container
 * 
 * Purpose: Consistent content container that maintains optimal reading widths
 * and provides appropriate padding across all device sizes. Ensures content
 * remains readable and scannable for executive audiences.
 * 
 * Features:
 * - Maximum width constraint for readability
 * - Responsive padding that scales with screen size
 * - Centered alignment with overflow handling
 * - Typography-optimised line lengths
 */
export const PageLayout: React.FC<{
  children: ReactNode
  className?: string
}> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
