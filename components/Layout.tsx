import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

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
  // Default meta values
  const defaultTitle = 'Phillip Collins | Global Leadership Coach'
  const defaultDescription = 'Global Leadership Coach specializing in reducing interference through embodied perception. Working with senior executives across Europe, Middle East, Americas, and Asia Pacific.'
  const baseUrl = 'https://phillip-collins.com'

  // Construct full title
  const fullTitle = title ? `${title} | Phillip Collins` : defaultTitle
  const metaDescription = description || defaultDescription
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl
  const ogImageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/images/og-default.png`

  return (
    <>
      {/* Primary Meta Tags */}
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Robots */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={`${fullTitle} - Leadership coaching and development`} />
        <meta property="og:site_name" content="Phillip Collins | Global Leadership Coach" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={ogImageUrl} />
        <meta property="twitter:image:alt" content={`${fullTitle} - Leadership coaching and development`} />
        
        {/* Additional SEO Meta */}
        <meta name="author" content="Phillip Collins" />
        <meta name="publisher" content="Phillip Collins" />
        <meta httpEquiv="content-language" content="en-GB" />
        
        {/* Structured Data for WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: fullTitle,
              description: metaDescription,
              url: canonicalUrl,
              inLanguage: 'en-GB',
              isPartOf: {
                '@type': 'WebSite',
                name: 'Phillip Collins | Global Leadership Coach',
                url: baseUrl
              },
              about: {
                '@type': 'Thing',
                name: 'Leadership Coaching',
                description: 'Executive coaching and leadership development services'
              },
              author: {
                '@type': 'Person',
                name: 'Phillip Collins',
                jobTitle: 'Global Leadership Coach'
              }
            })
          }}
        />
      </Head>
      
      <div className={`relative flex min-h-screen flex-col ${className}`}>
        {/* Header with sticky positioning */}
        <Header />
        
        {/* Main content area with flex-grow for footer positioning */}
        <main className="flex flex-1 flex-col bg-white">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default Layout

// Additional utility component for page-specific layout variants
export const PageLayout: React.FC<{ 
  children: ReactNode 
  className?: string 
}> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

// Block wrapper component for consistent spacing
export const Block: React.FC<{
  children: ReactNode
  background?: 'white' | 'cream' | 'navy' | 'burgundy'
  spacing?: 'compact' | 'default' | 'spacious'
  className?: string
}> = ({ children, background = 'white', spacing = 'default', className = '' }) => {
  return (
    <section className={`${
      spacing === 'compact' ? 'py-12 md:py-16' : 
      spacing === 'spacious' ? 'py-20 md:py-32' : 
      'py-16 md:py-24'
    } ${
      background === 'cream' ? 'bg-[#F8F5EB]' : 
      background === 'navy' ? 'bg-[#1A365D] text-white' : 
      background === 'burgundy' ? 'bg-[#7E2D40] text-white' : 
      'bg-white'
    } ${className}`}>
      <PageLayout>
        {children}
      </PageLayout>
    </section>
  )
}

// Grid wrapper component
export const Grid: React.FC<{
  children: ReactNode
  columns?: 1 | 2 | 3 | 5 | 'asymmetric'
  className?: string
}> = ({ children, columns = 2, className = '' }) => {
  const getGridClass = () => {
    if (columns === 'asymmetric') return 'grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'
    if (columns === 1) return 'grid grid-cols-1 gap-6 md:gap-8'
    if (columns === 2) return 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'
    if (columns === 3) return 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'
    if (columns === 5) return 'grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5'
    return 'grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'
  }

  return (
    <div className={`${getGridClass()} ${className}`}>
      {children}
    </div>
  )
}
