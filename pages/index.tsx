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
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[#1A365D] md:text-7xl">
              Not a title. Not a goal.{' '}
              <span className="font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">
                A practice.
              </span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-xl font-light text-[#4A4A4A] md:text-2xl">
              (Leadership, redefined.)
            </p>

            <div className="mx-auto max-w-4xl space-y-6 pt-8">
              <p className="text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                The strongest leaders I know don't arrive — they return.<br />
                Again and again. To their values. Their vision. Their self.
              </p>
              
              <p className="text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                I create the space for that return —<br />
                to what matters, what's emerging, and what's getting in the way.
              </p>
              
              <p className="text-xl font-semibold text-[#7E2D40] md:text-2xl">
                Not louder. Just wiser.
              </p>
            </div>

            {/* Primary CTA - Tangerine for high impact */}
            <div className="pt-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#F96E1E] px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E55A1A] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/50"
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
              <h2 className="text-3xl font-bold leading-tight text-[#1A365D] md:text-4xl">
                You already know what leadership demands.
              </h2>
              <p className="text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                You&apos;re not here for more noise. Or another five-step model.<br />
                You&apos;re here because something deeper is asking to be seen.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                I coach global leaders at the intersection of strategic clarity and emotional wisdom.
              </p>
              <p className="text-lg leading-relaxed text-[#4A4A4A]">
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
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1A365D] md:text-4xl">
              The Leadership Equation
            </h2>
            <div className="mb-8 font-['Waiting_for_the_Sunrise'] text-6xl text-[#7E2D40] md:text-8xl">
              PE = PO - I
            </div>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
              <strong className="text-[#1A365D]">Performance</strong> equals{' '}
              <strong className="text-[#1A365D]">Potential</strong> minus{' '}
              <strong className="text-[#7E2D40]">Interference</strong>.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4A4A4A]">
              Most leaders already possess remarkable potential. What limits their performance 
              isn&apos;t a lack of capability, but the presence of{' '}
              <span className="font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">interference</span> — 
              or as I often call it, their &apos;stuff.&apos;
            </p>
          </div>

          {/* Framework Examples - 3 Column Grid */}
          <Grid columns={3}>
            <div className="rounded-lg bg-[#F8F5EB] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl">🧠</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">Inner Dialogue</h3>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                The voice of imposter syndrome, perfectionism, or comparison thinking 
                that creates mental interference.
              </p>
            </div>
            
            <div className="rounded-lg bg-[#F8F5EB] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl">⚖️</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">Competing Values</h3>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
                Deeply held values that pull in different directions, creating decision paralysis 
                or internal conflict.
              </p>
            </div>
            
            <div className="rounded-lg bg-[#F8F5EB] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 text-4xl">🌪️</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">Environmental Blockers</h3>
              <p className="text-sm leading-relaxed text-[#4A4A4A]">
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
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl leading-tight text-white md:text-4xl">
              How I see it
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              I work in frameworks — but never formulas.<br />
              What you&apos;ll see here are tools I return to often with leaders:<br />
              not as answers, but as invitations.
            </p>
          </div>

          {/* Five Key Approaches - 5 Column Grid */}
          <Grid columns={5}>
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">👁️</div>
              <h3 className="text-lg font-semibold text-white">Observation before Intervention</h3>
              <p className="text-sm text-white/80">
                We start by noticing. Patterns, dynamics, friction. 
                Before we move, we understand.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">🎯</div>
              <h3 className="text-lg font-semibold text-white">
                <span className="font-['Waiting_for_the_Sunrise']">Embodied</span> Perception
              </h3>
              <p className="text-sm text-white/80">
                You lead with your head, heart, and gut. 
                We&apos;ll work with all three.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">🔄</div>
              <h3 className="text-lg font-semibold text-white">Values in Motion</h3>
              <p className="text-sm text-white/80">
                We surface what really matters — 
                not just what sounds good.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">⚖️</div>
              <h3 className="text-lg font-semibold text-white">Sitting with Tension</h3>
              <p className="text-sm text-white/80">
                Some tensions aren&apos;t meant to be solved. 
                They&apos;re meant to be understood.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
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
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1A365D] md:text-4xl">
              Reflections from leaders
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#4A4A4A]">
              This work isn&apos;t loud. It doesn&apos;t need to be.<br />
              It resonates when you&apos;re ready to hear yourself more clearly.
            </p>
          </div>

          {/* Genuine Testimonials - 2 Column Grid */}
          <Grid columns={2}>
            {/* Testimonial 1 */}
            <div className="relative rounded-lg bg-white p-8 shadow-sm">
              <div className="absolute left-4 top-4 text-5xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">
                &quot;
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
                &quot;
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
                &quot;
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
                &quot;
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
              <div className="absolute left-1/4 top-0 -translate-x-1/2">
                <div className="max-w-xs rounded-2xl bg-[#7A9A7F] p-4 text-white shadow-lg">
                  <p className="text-sm italic">
                    &quot;What&apos;s the story I tell myself about who I am; is it still true?&quot;
                  </p>
                </div>
              </div>
              
              <div className="absolute right-1/4 top-20 translate-x-1/2">
                <div className="max-w-xs rounded-2xl bg-[#F96E1E] p-4 text-white shadow-lg">
                  <p className="text-sm italic">
                    &quot;What helps me choose well, especially when it&apos;s hard?&quot;
                  </p>
                </div>
              </div>
              
              <div className="absolute left-1/3 top-40">
                <div className="max-w-xs rounded-2xl bg-[#D4B86A] p-4 text-white shadow-lg">
                  <p className="text-sm italic">
                    &quot;Where do I feel most connected; what helps make that happen?&quot;
                  </p>
                </div>
              </div>

            {/* Central content with adequate spacing for bubbles */}
            <div className="py-32 text-center">
              <p className="mx-auto max-w-2xl text-xl font-light text-[#4A4A4A] md:text-2xl">
                The questions that matter aren&apos;t about what you should do.<br />
                They&apos;re about who you&apos;re becoming.
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
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                A <span className="font-['Waiting_for_the_Sunrise'] text-[#D4B86A]">global</span> perspective
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                My coaching partnerships span diverse contexts and cultures, 
                working with senior leaders across continents and industries.
              </p>
              <p className="leading-relaxed text-white/80">
                This global experience deepens my understanding of leadership challenges 
                across different cultural contexts, enriching each partnership while 
                maintaining focus on your unique journey.
              </p>
            </div>
            
            <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold text-[#D4B86A]">Core Regions</h3>
              <ul className="mb-6 space-y-2 text-sm text-white/90">
                <li>• Europe (UK, Ireland, France, Belgium, Netherlands)</li>
                <li>• Middle East (UAE, Saudi Arabia, Israel)</li>
                <li>• Americas (USA, Argentina, Brazil)</li>
                <li>• Asia & Pacific (India, Singapore)</li>
              </ul>
              
              <h3 className="mb-4 text-xl font-semibold text-[#D4B86A]">Primary Industries</h3>
              <ul className="space-y-2 text-sm text-white/90">
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
          <div className="space-y-8 text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#1A365D] md:text-4xl">
              This is your leadership.
            </h2>
            
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
                You don&apos;t need a louder voice.<br />
                You need a clearer signal.<br />
                And a safe enough space to hear it.
              </p>
              
              <p className="text-lg leading-relaxed text-[#4A4A4A]">
                If something here resonates, let&apos;s explore what&apos;s possible.
              </p>
            </div>

            {/* Primary CTA with supporting text */}
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#F96E1E] px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E55A1A] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/50"
              >
                Let&apos;s explore together
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
