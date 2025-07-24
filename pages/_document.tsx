/**
 * _document.tsx - HTML Document Foundation
 * 
 * Purpose: Core HTML document structure for Phillip Collins Global Leadership Coach website.
 * Establishes font loading, meta tags, SEO foundations, and performance optimizations
 * that support the breakthrough grid-based design system.
 * 
 * Design Philosophy: Technical excellence supporting authentic brand presentation.
 * No template conventions - every element serves the observant sage-caregiver positioning.
 * 
 * Key Features:
 * - Optimized Google Fonts loading with font-display: swap
 * - Comprehensive SEO meta tags with UK English focus
 * - Schema.org structured data for leadership coaching authority
 * - Performance optimizations for executive audience expectations
 * - Security headers and accessibility foundations
 * 
 * Brand Integration:
 * - Global Leadership Coach positioning in meta data
 * - UK English language conventions throughout
 * - Professional service schema for coaching expertise
 * - Geographic targeting for UK base with global reach
 */

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en-GB">
      <Head>
        {/* 
          PERFORMANCE OPTIMIZATIONS
          Preconnect to Google Fonts and establish DNS connections early
          for faster loading of critical typography assets
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* 
          TYPOGRAPHY FOUNDATION
          Google Fonts optimized loading with font-display: swap for better performance.
          Selective font loading - only weights actually used in design system:
          - Waiting for the Sunrise: Hand-written emphasis font (selective use only)
          - Inter: Primary sans-serif for body text and navigation
          
          Note: "Waiting for the Sunrise" used sparingly - 2-3 words per page maximum
          for key concepts like "practice," "interference," "authentic"
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Waiting+for+the+Sunrise&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* 
          PERFORMANCE: Preload critical font files
          Waiting for the Sunrise is the signature brand font, so preload for fastest rendering
        */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/waitingforthesunrise/v16/WBL1rFvOYl9CEv2i1mO6KUW8RKWJ2zoXoz5JsYZQ9h_ZYk5Mew.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        
        {/* 
          FAVICON SYSTEM
          Professional favicons that work across all devices and contexts.
          Uses theme color matching the Deep Navy Blue (#1A365D) from brand palette.
        */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* 
          THEME AND BRANDING
          Theme color matches Deep Navy Blue from brand palette
          Creates cohesive experience in browser UI
        */}
        <meta name="theme-color" content="#1A365D" />
        <meta name="msapplication-TileColor" content="#1A365D" />
        
        {/* 
          SEO FOUNDATION TAGS
          Core meta tags that establish authority and professionalism.
          UK English language setting aligns with brand voice guidelines.
        */}
        <meta name="author" content="Phillip Collins" />
        <meta name="publisher" content="Phillip Collins" />
        <meta httpEquiv="content-language" content="en-GB" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* 
          GEOGRAPHIC AND BUSINESS CONTEXT
          UK base with global reach - aligns with "Based in the UK, working globally 
          across Europe, Middle East, Americas, and Asia Pacific" brand messaging
        */}
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        
        {/* 
          PERFORMANCE AND SECURITY
          DNS prefetch for faster resource loading
          Security headers for professional credibility
        */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* 
          CORE BUSINESS KEYWORDS
          Primary focus areas for search engine authority building.
          Emphasizes global reach, emotional intelligence, and unique methodologies.
        */}
        <meta name="keywords" content="global leadership coach, executive coaching UK, leadership development, emotional intelligence training, cross-cultural leadership, leadership equation, embodied perception, values constellation mapping, senior executive coaching, international leadership development" />
        
        {/* 
          COPYRIGHT AND OWNERSHIP
          Maintains brand personality with "Reducing interference since 2011" tagline
          that reflects both experience and core methodology
        */}
        <meta name="copyright" content="© 2025 Phillip Collins. Reducing interference since 2011." />
        
        {/* 
          STRUCTURED DATA: ORGANIZATION SCHEMA
          Establishes Phillip Collins as authoritative leadership coaching organization.
          Includes geographic service areas and core specializations.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Phillip Collins Global Leadership Coach',
              description: 'Global Leadership Coach specializing in executive coaching, emotional intelligence, and cross-cultural leadership development through the Leadership Equation methodology',
              url: 'https://phillip-collins.com',
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
                {
                  '@type': 'Place',
                  name: 'Europe'
                },
                {
                  '@type': 'Place',
                  name: 'Middle East'
                },
                {
                  '@type': 'Place',
                  name: 'Americas'
                },
                {
                  '@type': 'Place',
                  name: 'Asia Pacific'
                }
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
        
        {/* 
          STRUCTURED DATA: PROFESSIONAL SERVICE SCHEMA
          Establishes coaching services with geographic reach and specializations.
          Emphasizes unique methodologies: Leadership Equation and embodied perception.
        */}
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
                'United Kingdom',
                'Ireland',
                'France',
                'Belgium',
                'Netherlands',
                'United Arab Emirates',
                'Saudi Arabia',
                'Israel',
                'United States',
                'Argentina',
                'Brazil',
                'India',
                'Singapore'
              ],
              serviceType: 'Executive Coaching',
              audience: {
                '@type': 'Audience',
                name: 'Senior Executives and Global Leaders'
              }
            })
          }}
        />
        
        {/* 
          STRUCTURED DATA: PERSON SCHEMA
          Establishes Phillip Collins' professional authority and expertise areas.
          Includes key methodologies and educational background that differentiate approach.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Phillip Collins',
              jobTitle: 'Global Leadership Coach',
              description: 'Leadership coach specializing in reducing interference through embodied perception and emotional intelligence',
              url: 'https://phillip-collins.com',
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
        
        {/* 
          SOCIAL MEDIA DEFAULTS
          Open Graph and Twitter Card defaults that can be overridden by individual pages.
          Maintains professional leadership coaching context across all social sharing.
        */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Phillip Collins | Global Leadership Coach" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@PhillipCollins" />
        
        {/* 
          MOBILE OPTIMIZATION
          Viewport optimization for mobile-first design approach.
          Ensures grid-based layout works effectively across all device types.
        */}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      
      {/* 
        BODY STYLING
        Antialiased class ensures crisp font rendering across all browsers.
        Sets foundation for grid-based design system and color-driven sections.
      */}
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
