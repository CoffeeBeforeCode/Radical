/**
 * Homepage Component - Phillip Collins Global Leadership Coach
 * 
 * Purpose: Breakthrough leadership coaching homepage that breaks template conventions
 * through bold grid-based architecture, authentic content presentation, and strategic
 * dopamine color implementation.
 * 
 * Design Approach: 
 * - Color-driven sections creating visual rhythm and emotional engagement
 * - Grid-first architecture with asymmetric layouts for visual interest
 * - Strategic tangerine accents (10% rule) for high-impact CTAs
 * - Authentic testimonials from real clients with full attribution
 * - EQ-i question bubbles for engaging visual elements
 * 
 * Brand Positioning: Observant sage-caregiver who creates space for transformation
 * rather than pushing solutions. Anti-template approach signals confidence and
 * original thinking to sophisticated executive audience.
 * 
 * Key Features:
 * - Hero section with large serif typography establishing practice-based philosophy
 * - Leadership Equation (PE = PO - I) prominently featured
 * - Genuine client testimonials in styled blocks
 * - Strategic use of "Waiting for the Sunrise" font for emphasis only
 * - Mobile-first responsive design optimized for executive multi-device usage
 */

import Layout, { Block, Grid, PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Global Leadership Coach"
      description="Creating space for leaders to see what gets in their way, reduce interference, and unlock their natural potential. Working with executives across Europe, Middle East, Americas, and Asia Pacific."
      canonical="/"
    >
      {/* Hero Block - Full Width Leadership Philosophy */}
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="text-center">
            {/* Main headline using serif font for authority, not Waiting for the Sunrise */}
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A365D] leading-tight mb-6">
              Not a title. Not a goal.{' '}
              <span className="font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">
                A practice.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#4A4A4A] font-light mb-8 max-w-3xl mx-auto">
              (Leadership, redefined.)
            </p>

            <div className="mx-auto max-w-4xl space-y-6 pt-8">
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                The strongest leaders I know don't arrive — they return.<br />
                Again and again. To their values. Their vision. Their self.
              </p>
              
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                I create the space for that return —<br />
                to what matters, what's emerging, and what's getting in the way.
              </p>
              
              <p className="text-xl md:text-2xl text-[#7E2D40] font-semibold">
                Not louder. Just wiser.
              </p>
            </div>

            {/* Primary CTA - Tangerine for high impact */}
            <div className="pt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#F96E1E] text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-1 focus:outline-none focus:ring-3 focus:ring-[#F96E1E] focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              >
                Begin here
              </Link>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Orientation Block - 2 Column Grid with Cream Background */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <Grid columns={2} className="items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] leading-tight">
                You already know what leadership demands.
              </h2>
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                You're not here for more noise. Or another five-step model.<br />
                You're here because something deeper is asking to be seen.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                I coach global leaders at the intersection of strategic clarity and emotional wisdom.
              </p>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                Together, we look beneath performance to the patterns that shape it — 
                the unseen dynamics, unspoken tensions, and quiet truths that make or break leadership.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* The Leadership Equation - Featured Framework */}
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] leading-tight mb-6">
              The Leadership Equation
            </h2>
            <div className="font-['Waiting_for_the_Sunrise'] text-6xl md:text-8xl text-[#7E2D40] mb-8">
              PE = PO - I
            </div>
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-[#4A4A4A] leading-relaxed mb-8">
              <strong className="text-[#1A365D]">Performance</strong> equals{' '}
              <strong className="text-[#1A365D]">Potential</strong> minus{' '}
              <strong className="text-[#7E2D40]">Interference</strong>.
            </p>
            <p className="mx-auto max-w-2xl text-lg text-[#4A4A4A] leading-relaxed">
              Most leaders already possess remarkable potential. What limits their performance 
              isn't a lack of capability, but the presence of{' '}
              <span className="font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">interference</span> — 
              or as I often call it, their 'stuff.'
            </p>
          </div>

          {/* Framework Examples - 3 Column Grid */}
          <Grid columns={3}>
            <div className="bg-[#F8F5EB] rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-[#1A365D] mb-4">Inner Dialogue</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                The voice of imposter syndrome, perfectionism, or comparison thinking 
                that creates mental interference.
              </p>
            </div>
            
            <div className="bg-[#F8F5EB] rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-[#1A365D] mb-4">Competing Values</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                Deeply held values that pull in different directions, creating decision paralysis 
                or internal conflict.
              </p>
            </div>
            
            <div className="bg-[#F8F5EB] rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🌪️</div>
              <h3 className="text-xl font-semibold text-[#1A365D] mb-4">Environmental Blockers</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                Toxic team dynamics, organisational silos, or excessive administrative burdens 
                that drain energy.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Approach Overview - Navy Background for Authority */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight mb-6">
              How I see it
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/90 leading-relaxed">
              I work in frameworks — but never formulas.<br />
              What you'll see here are tools I return to often with leaders:<br />
              not as answers, but as invitations.
            </p>
          </div>

          {/* Five Key Approaches - 5 Column Grid */}
          <Grid columns={5}>
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#D4B86A]">👁️</div>
              <h3 className="text-lg font-semibold text-white">Observation before Intervention</h3>
              <p className="text-sm text-white/80">
                We start by noticing. Patterns, dynamics, friction. 
                Before we move, we understand.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#D4B86A]">🎯</div>
              <h3 className="text-lg font-semibold text-white">
                <span className="font-['Waiting_for_the_Sunrise']">Embodied</span> Perception
              </h3>
              <p className="text-sm text-white/80">
                You lead with your head, heart, and gut. 
                We'll work with all three.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#D4B86A]">🔄</div>
              <h3 className="text-lg font-semibold text-white">Values in Motion</h3>
              <p className="text-sm text-white/80">
                We surface what really matters — 
                not just what sounds good.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#D4B86A]">⚖️</div>
              <h3 className="text-lg font-semibold text-white">Sitting with Tension</h3>
              <p className="text-sm text-white/80">
                Some tensions aren't meant to be solved. 
                They're meant to be understood.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#D4B86A]">✨</div>
              <h3 className="text-lg font-semibold text-white">Reducing Interference</h3>
              <p className="text-sm text-white/80">
                When interference clears, 
                performance meets potential.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Authentic Testimonials - Cream Background */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] leading-tight mb-6">
              Reflections from leaders
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[#4A4A4A] leading-relaxed">
              This work isn't loud. It doesn't need to be.<br />
              It resonates when you're ready to hear yourself more clearly.
            </p>
          </div>

          {/* Genuine Testimonials - 2 Column Grid */}
          <Grid columns={2}>
            {/* Testimonial 1 */}
            <div className="relative rounded-lg bg-white p-8 shadow-sm">
              <div className="absolute left-4 top-4 text-5xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">
                "
              </div>
              <div className="mb-6 pl-8 text-lg leading-relaxed italic">
                My team and I have never had such honest conversations with each other, 
                until I started working with Phillip. His ability to create a safe space 
                where challenging topics can be discussed has transformed how we operate 
                as a leadership team.
              </div>
              <div className="text-right text-sm font-semibold text-[#7E2D40] not-italic">
                Country Head<br />
                Telecommunications
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative rounded-lg bg-white p-8 shadow-sm">
              <div className="absolute left-4 top-4 text-5xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">
                "
              </div>
              <div className="mb-6 pl-8 text-lg leading-relaxed italic">
                I have been surprised at how comfortable it has felt being stretched 
                through this coaching process. The stretch has become an additional approach 
                rather than replacing who I am; expanding my capabilities while preserving 
                my authentic self.
              </div>
              <div className="text-right text-sm font-semibold text-[#7E2D40] not-italic">
                Chief Financial Officer<br />
                Housing and Community Development
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative rounded-lg bg-white p-8 shadow-sm">
              <div className="absolute left-4 top-4 text-5xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">
                "
              </div>
              <div className="mb-6 pl-8 text-lg leading-relaxed italic">
                Phillip is one of the most talented and experienced professionals I have ever met. 
                His ability to swiftly and accurately pinpoint areas for development, combined with 
                his extremely high level of integrity and acute business insight, makes him invaluable.
              </div>
              <div className="text-right text-sm font-semibold text-[#7E2D40] not-italic">
                Senior Civil-Servant<br />
                Government
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="relative rounded-lg bg-white p-8 shadow-sm">
              <div className="absolute left-4 top-4 text-5xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">
                "
              </div>
              <div className="mb-6 pl-8 text-lg leading-relaxed italic">
                Phillip is a brilliant coach. He has the ability to uncover challenges 
                that I may not even be aware of. He gives space to work through challenges 
                by asking pertinent questions and helps tap into innate resourcefulness.
              </div>
              <div className="text-right text-sm font-semibold text-[#7E2D40] not-italic">
                Senior Leader<br />
                Civil Service
              </div>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* EQ-i Question Bubbles Section - Visual Interest */}
      <Block background="white" spacing="compact">
        <PageLayout>
          <div className="relative">
            {/* Scattered EQ-i question bubbles for visual engagement */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
              <div className="bg-[#7A9A7F] text-white p-4 rounded-2xl max-w-xs shadow-lg">
                <p className="text-sm italic">
                  "What's the story I tell myself about who I am; is it still true?"
                </p>
              </div>
            </div>
            
            <div className="absolute top-20 right-1/4 transform translate-x-1/2">
              <div className="bg-[#F96E1E] text-white p-4 rounded-2xl max-w-xs shadow-lg">
                <p className="text-sm italic">
                  "What helps me choose well, especially when it's hard?"
                </p>
              </div>
            </div>
            
            <div className="absolute top-40 left-1/3">
              <div className="bg-[#D4B86A] text-white p-4 rounded-2xl max-w-xs shadow-lg">
                <p className="text-sm italic">
                  "Where do I feel most connected; what helps make that happen?"
                </p>
              </div>
            </div>

            {/* Central content with adequate spacing for bubbles */}
            <div className="text-center py-32">
              <p className="text-xl md:text-2xl text-[#4A4A4A] font-light max-w-2xl mx-auto">
                The questions that matter aren't about what you should do.<br />
                They're about who you're becoming.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Global Experience Block - Burgundy Background */}
      <Block background="burgundy" spacing="default">
        <PageLayout>
          <Grid columns={2} className="items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                A <span className="font-['Waiting_for_the_Sunrise'] text-[#D4B86A]">global</span> perspective
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                My coaching partnerships span diverse contexts and cultures, 
                working with senior leaders across continents and industries.
              </p>
              <p className="text-white/80 leading-relaxed">
                This global experience deepens my understanding of leadership challenges 
                across different cultural contexts, enriching each partnership while 
                maintaining focus on your unique journey.
              </p>
            </div>
            
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-[#D4B86A] mb-4">Core Regions</h3>
              <ul className="space-y-2 text-white/90 text-sm mb-6">
                <li>• Europe (UK, Ireland, France, Belgium, Netherlands)</li>
                <li>• Middle East (UAE, Saudi Arabia, Israel)</li>
                <li>• Americas (USA, Argentina, Brazil)</li>
                <li>• Asia & Pacific (India, Singapore)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-[#D4B86A] mb-4">Primary Industries</h3>
              <ul className="space-y-2 text-white/90 text-sm">
                <li>• Technology & Digital Innovation</li>
                <li>• Healthcare & Life Sciences</li>
                <li>• Financial Services & Banking</li>
                <li>• Manufacturing & Engineering</li>
                <li>• Government & Public Sector</li>
              </ul>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Closing CTA Block - White Background for Clean Finish */}
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] leading-tight">
              This is your leadership.
            </h2>
            
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                You don't need a louder voice.<br />
                You need a clearer signal.<br />
                And a safe enough space to hear it.
              </p>
              
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                If something here resonates, let's explore what's possible.
              </p>
            </div>

            {/* Primary CTA with supporting text */}
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#F96E1E] text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-1 focus:outline-none focus:ring-3 focus:ring-[#F96E1E] focus:ring-opacity-50 shadow-lg hover:shadow-xl"
              >
                Let's explore together
              </Link>
              <p className="mt-4 text-sm text-[#4A4A4A]">
                No funnel. No pressure.<br />
                Just a human conversation.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
