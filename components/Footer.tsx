/**
 * Footer Component - Phillip Collins Global Leadership Coach
 * 
 * Purpose: Brand-reinforcing footer that emphasizes social presence, geographic reach,
 * and the signature philosophy statement. Designed to build credibility and provide
 * clear pathways for executive connections while maintaining personality over corporate polish.
 * 
 * Key Brand Elements:
 * - Signature statement: "Leadership is a practice, not a destination"
 * - LinkedIn prominence (GlobalLeadershipCoach URL emphasis)
 * - Geographic credibility across four continents
 * - Personality-driven copyright with coaching inception date
 * 
 * Design Approach:
 * - Navy background for authority and contrast
 * - Gold accent colors for wisdom and premium positioning
 * - Clean grid layout that works across all device sizes
 * - Social links with proper accessibility labels
 * 
 * Executive Audience Considerations:
 * - Clear contact pathways for business inquiries
 * - Professional social media emphasis (LinkedIn over Twitter/Instagram)
 * - Geographic scope that matches global executive contexts
 * - Sophisticated color treatment that avoids consultant template clichés
 */

import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1A365D] text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Brand and signature statement */}
          <div>
            <h3 className="font-['Waiting_for_the_Sunrise'] text-2xl text-[#D4B86A]">
              Phillip Collins
            </h3>
            <p className="text-sm text-[#D4B86A]/80">
              Global Leadership Coach
            </p>
          </div>

          {/* Navigation links */}
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

          {/* Connect section with social emphasis */}
          <div>
            <h4 className="text-lg font-semibold text-[#D4B86A]">Connect</h4>
            <div className="mt-4">
              <a 
                href="https://linkedin.com/in/GlobalLeadershipCoach" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#D4B86A] transition-colors duration-200"
              >
                LinkedIn: GlobalLeadershipCoach
              </a>
            </div>
          </div>
        </div>

        {/* Signature statement - prominent positioning */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="font-['Waiting_for_the_Sunrise'] text-xl text-[#D4B86A]">
            Leadership is a <strong>practice</strong>, not a destination
          </p>
        </div>

        {/* Geographic credibility and copyright */}
        <div className="mt-4 border-t border-white/10 pt-4 text-center space-y-2">
          <p className="text-sm text-white/60">
            Based in the UK, working globally across Europe, Middle East, Americas, and Asia Pacific
          </p>
          <p className="text-sm text-white/60">
            © {currentYear} Phillip Collins. Reducing interference since 2011.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
