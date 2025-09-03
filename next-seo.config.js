/**
 * Default SEO configuration for Phillip Collins - Global Leadership Coach
 * @type {import('next-seo/lib/types').NextSeoProps}
 **/
const config = {
  // Default title template - will be used if no title is provided
  titleTemplate: '%s | Phillip Collins',
  defaultTitle: 'Phillip Collins | Global Leadership Coach',
  
  // Default description for pages that don't specify one
  description: 'Global Leadership Coach specializing in reducing interference through embodied perception. Working with senior executives across Europe, Middle East, Americas, and Asia Pacific.',
  
  // Default OpenGraph configuration
  openGraph: {
    type: 'website',
    locale: 'en_GB', // UK English to match brand voice
    url: 'https://phillip-collins.com', // Update with your actual domain
    siteName: 'Phillip Collins | Global Leadership Coach',
    title: 'Phillip Collins | Global Leadership Coach',
    description: 'Global Leadership Coach specializing in reducing interference through embodied perception. Working with senior executives across Europe, Middle East, Americas, and Asia Pacific.',
    images: [
      {
        url: 'https://phillip-collins.com/images/og-default.jpg', // Update with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Phillip Collins - Global Leadership Coach specializing in reducing interference',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter configuration
  twitter: {
    handle: '@PhillipCollinsCoach', // Update with your actual Twitter handle if you have one
    site: '@PhillipCollinsCoach',
    cardType: 'summary_large_image',
  },
  
  // Additional meta tags
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Phillip Collins'
    },
    {
      name: 'publisher', 
      content: 'Phillip Collins'
    },
    {
      httpEquiv: 'content-language',
      content: 'en-GB'
    },
    {
      name: 'geo.region',
      content: 'GB'
    },
    {
      name: 'geo.placename', 
      content: 'United Kingdom'
    },
    {
      name: 'copyright',
      content: '© 2025 Phillip Collins. Reducing interference since 2011.'
    },
    {
      name: 'theme-color',
      content: '#1A365D' // Deep Navy from brand palette
    }
  ],
  
  // Additional link tags
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ],
  
  // Structured data for the organization
  additionalSchema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Phillip Collins Global Leadership Coach',
      url: 'https://phillip-collins.com',
      logo: 'https://phillip-collins.com/images/logo.png',
      sameAs: [
        'https://linkedin.com/in/GlobalLeadershipCoach'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Professional Services',
        areaServed: ['Europe', 'Middle East', 'Americas', 'Asia Pacific'],
        availableLanguage: 'English'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Global Leadership Coaching',
      provider: {
        '@type': 'Person',
        name: 'Phillip Collins'
      },
      serviceType: 'Executive Coaching',
      areaServed: ['Europe', 'Middle East', 'Americas', 'Asia Pacific'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Leadership Coaching Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Leadership Coaching',
              description: 'Executive coaching focused on reducing interference through embodied perception'
            }
          },
          {
            '@type': 'Offer', 
            itemOffered: {
              '@type': 'Service',
              name: 'Leadership Development',
              description: 'Emerging leadership development for authentic growth'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service', 
              name: 'Leadership Restoration',
              description: 'Supporting leaders through transitions and confidence rebuilding'
            }
          }
        ]
      }
    }
  ]
}

export default config
