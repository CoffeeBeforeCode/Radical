/**
 * Footer Component - Phillip Collins Global Leadership Coach
 * 
 * Purpose: Brand-reinforcing footer that emphasizes social presence, geographic reach,
 * and the signature philosophy statement. Designed to build credibility and provide
 * clear pathways for executive connections while maintaining personality over corporate polish.
 * 
 * Key Brand Elements:
 * - Signature statement: "Leadership is a practice, not a destination" - now prominently at top
 * - LinkedIn prominence with icon (GlobalLeadershipCoach URL emphasis)
 * - Twitter/X social presence
 * - Geographic credibility across four continents
 * - Personality-driven copyright with coaching inception date
 * - Legal section with Cookie Policy and Privacy Policy links
 * 
 * Design Approach:
 * - Tangerine background (#F96E1E) for signature statement prominence
 * - Navy background for authority and contrast
 * - Gold accent colors for wisdom and premium positioning
 * - Clean grid layout that works across all device sizes
 * - Social links with proper accessibility labels and icons
 * 
 * Executive Audience Considerations:
 * - Clear contact pathways for business inquiries
 * - Professional social media emphasis (LinkedIn and Twitter)
 * - Geographic scope that matches global executive contexts
 * - Sophisticated color treatment that avoids consultant template clichés
 */

import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer>
      {/* Signature statement - prominent top positioning with cream background */}
      <div className="bg-[#F8F5EB] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-['Waiting_for_the_Sunrise'] text-xl md:text-2xl text-[#F96E1E]">
            Leadership is a <strong>practice</strong>, not a destination
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#1A365D] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Brand and descriptive text */}
            <div>
              <h3 className="font-['Waiting_for_the_Sunrise'] text-2xl text-[#D4B86A]">
                Phillip Collins
              </h3>
              <p className="text-sm text-[#D4B86A]/80 mb-4">
                Global Leadership Coach
              </p>
              
              {/* Expanded descriptive text */}
              <div className="text-white/70 space-y-3">
                <p className="text-sm leading-relaxed">
                  My coaching partnerships have spanned diverse contexts and cultures, allowing me to work with senior leaders across continents and industries.
                </p>
                
                <p className="text-sm leading-relaxed">
                  This breadth of experience has shown me that leadership challenges are remarkably consistent, regardless of geography or sector.
                </p>
                
                <p className="text-sm leading-relaxed">
                  What varies is the cultural context, the organisational systems, and the specific nature of the interference that prevents leaders from accessing their full potential.
                </p>
              </div>
            </div>

            {/* Geographic Reach */}
            <div>
              <h4 className="text-lg font-semibold text-[#D4B86A] mb-4">
                Global Reach
              </h4>
              
              <div className="space-y-3 text-sm text-white/70">
                <div>
                  <span className="font-medium text-white">Europe</span>
                  <p>United Kingdom, Germany, Netherlands, Switzerland</p>
                </div>
                
                <div>
                  <span className="font-medium text-white">Middle East</span>
                  <p>UAE, Saudi Arabia, Qatar</p>
                </div>
                
                <div>
                  <span className="font-medium text-white">Americas</span>
                  <p>United States, Canada, Mexico</p>
                </div>
                
                <div>
                  <span className="font-medium text-white">Asia Pacific</span>
                  <p>Singapore, Australia, Hong Kong</p>
                </div>
              </div>
            </div>

            {/* Connect and Legal sections */}
            <div className="space-y-8">
              {/* Connect section */}
              <div>
                <h4 className="text-lg font-semibold text-[#D4B86A] mb-4">
                  Connect
                </h4>
                
                <div className="space-y-3">
                  {/* LinkedIn - prominent positioning */}
                  <div className="flex items-center space-x-3">
                    <svg className="size-5 text-[#D4B86A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a 
                      href="https://linkedin.com/in/GlobalLeadershipCoach" 
                      className="text-white hover:text-[#D4B86A] transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with Phillip Collins on LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </div>
                  
                  {/* Twitter/X */}
                  <div className="flex items-center space-x-3">
                    <svg className="size-5 text-[#D4B86A]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <a 
                      href="https://twitter.com/PhillipCollins" 
                      className="text-white hover:text-[#D4B86A] transition-colors text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Phillip Collins on Twitter"
                    >
                      Twitter
                    </a>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <svg className="size-5 text-[#D4B86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a 
                      href="mailto:hello@phillip-collins.com" 
                      className="text-white hover:text-[#D4B86A] transition-colors text-sm"
                      aria-label="Email Phillip Collins"
                    >
                      hello@phillip-collins.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Legal section */}
              <div>
                <h4 className="text-lg font-semibold text-[#D4B86A] mb-4">
                  Legal
                </h4>
                
                <div className="space-y-2">
                  <div>
                    <Link 
                      href="/legal/cookies"
                      className="text-white hover:text-[#D4B86A] transition-colors text-sm block"
                    >
                      Cookie Policy
                    </Link>
                  </div>
                  
                  <div>
                    <Link 
                      href="/legal/privacy"
                      className="text-white hover:text-[#D4B86A] transition-colors text-sm block"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
              <div className="text-center text-sm text-white/70 sm:text-left">
                <p>
                  © {currentYear} Phillip Collins. All rights reserved.
                </p>
                <p className="mt-1">
                  Coaching partnerships since 2018
                </p>
              </div>
              
              <div className="text-center text-sm text-white/70 sm:text-right">
                <p>
                  Global Leadership Coach
                </p>
                <p className="mt-1">
                  Registered in England & Wales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
