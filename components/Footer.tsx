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
            
            {/* COLUMN 1 - Brand and descriptive text (ORIGINAL - RETAINED) */}
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
                  Whether working with emerging leaders finding their voice or seasoned executives navigating complex transitions, the focus remains the same: reducing interference to unlock potential.
                </p>
              </div>
            </div>

            {/* COLUMN 2 - Navigation links (ORIGINAL - RESTORED) */}
            <div>
              <h4 className="text-lg font-semibold text-[#D4B86A]">Navigate</h4>
              <div className="mt-4 space-y-2">
                <Link href="/this-is-personal" className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200">
                  This is Personal
                </Link>
                <Link href="/at-home" className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200">
                  At Home
                </Link>
                <Link href="/the-work" className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200">
                  The Work
                </Link>
                <Link href="/social-impact" className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200">
                  Social Impact
                </Link>
                <Link href="/insights" className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200">
                  Insights
                </Link>
                <Link href="/contact" className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200">
                  Contact
                </Link>
              </div>
            </div>

            {/* COLUMN 3 - Connect section (ORIGINAL) + Legal section (ADDED) */}
            <div className="space-y-8">
              {/* Connect section (ORIGINAL - RETAINED) */}
              <div>
                <h4 className="text-lg font-semibold text-[#D4B86A]">Connect</h4>
                <div className="mt-4 space-y-3">
                  {/* LinkedIn with icon */}
                  <a 
                    href="https://www.linkedin.com/in/globalleadershipcoach/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/70 hover:text-[#D4B86A] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>GlobalLeadershipCoach</span>
                  </a>
                  
                  {/* Twitter/X with icon */}
                  <a 
                    href="https://x.com/phillipcollins" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-white/70 hover:text-[#D4B86A] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>@phillipcollins</span>
                  </a>
                </div>
              </div>

              {/* Legal section (NEW - ADDED) */}
              <div>
                <h4 className="text-lg font-semibold text-[#D4B86A]">Legal</h4>
                <div className="mt-4 space-y-2">
                  <Link 
                    href="/legal/cookies"
                    className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200"
                  >
                    Cookie Policy
                  </Link>
                  <Link 
                    href="/legal/privacy"
                    className="block text-white/70 hover:text-[#D4B86A] transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic credibility and copyright (ORIGINAL - RETAINED) */}
          <div className="mt-4 border-t border-white/10 pt-2">
            <div className="flex flex-col space-y-1 md:flex-row md:justify-between md:items-center md:space-y-0">
              <p className="text-sm text-white/60 text-center md:text-left">
                © {currentYear} Phillip Collins. Reducing interference since 2011.
              </p>
              <p className="text-sm text-white/60 text-center md:text-right">
                Based in the UK, working globally across Europe, Middle East, Americas, and Asia Pacific
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
