/**
 * Homepage Component - Phillip Collins Global Leadership Coach
 * 
 * Purpose: Breakthrough homepage that immediately signals this is not a template-based
 * consultant website. Uses authentic content, bold typography, and strategic color
 * implementation to create immediate differentiation.
 * 
 * Design Philosophy:
 * - Grid-first, color-driven sections with dopamine accents
 * - Typography-first hero (no generic hero image)
 * - Authentic testimonials from approved list only
 * - Strategic "Waiting for the Sunrise" font usage
 * - Philosophy before process, substance over style
 * 
 * Key Features:
 * - Hero section with breakthrough typography and authentic copy
 * - Frameworks section showcasing core methodologies
 * - Genuine testimonials in styled blocks
 * - EQ-i question bubbles for visual interest
 * - Strategic CTAs with tangerine dopamine color
 * 
 * Brand Alignment:
 * - Uses approved copy from foundation document
 * - Observant sage-caregiver positioning
 * - UK English throughout
 * - Pull-based rather than push-based messaging
 */

import Layout, { Block, Grid, PageLayout, TestimonialBlock, EQBubble } from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Global Leadership Coach"
      description="Creating space for leaders to see what gets in their way, reduce interference, and unlock their natural potential. Based in the UK, working globally."
      canonical="/"
    >
      {/* 
        Hero Block - Typography-First Approach
        No generic hero image - uses breakthrough typography and authentic copy
        Implements approved copy from foundation document
      */}
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A365D] sm:text-6xl md:text-7xl">
              Not a title. Not a goal. A{' '}
              <span className="font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">
                practice
              </span>
              .
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-[#4A4A4A] sm:text-xl">
              (Leadership, redefined.)
            </p>

            <div className="mx-auto max-w-2xl space-y-6 pt-8">
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                The strongest leaders I know don't arrive — they return.<br />
                Again and again. To their values. Their vision. Their self.
              </p>
              
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                I create the space for that return —<br />
                to what matters, what's emerging, and what's getting in the way.
              </p>
              
              <p className="text-xl md:text-2xl text-[#1A365D] font-medium">
                Not louder. Just wiser.
              </p>
            </div>

            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F96E1E] text-white text-lg font-medium rounded transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
              >
                Begin here
              </Link>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* 
        Frameworks Block - Core Methodologies
        Showcases key coaching frameworks with visual hierarchy
        Uses grid system for balanced presentation
      */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] leading-tight mb-6">
              How I see it
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
              I work in frameworks — but never formulas.<br />
              What you'll see here are tools I return to often with leaders:<br />
              not as answers, but as invitations.
            </p>
          </div>
          
          <Grid columns={3}>
            <div className="bg-white rounded-lg border border-[#1A365D]/10 p-6 text-center transition-all duration-300 hover:border-[#F96E1E] hover:-translate-y-0.5">
              <div className="mb-6 text-3xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">
                PE = PO - I
              </div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                The Leadership Equation
              </h3>
              <p className="text-[#4A4A4A]">
                Performance equals Potential minus Interference.
                When we reduce the stuff that gets in your way,
                your natural leadership emerges.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-[#1A365D]/10 p-6 text-center transition-all duration-300 hover:border-[#F96E1E] hover:-translate-y-0.5">
              <div className="mb-6 text-4xl text-[#7A9A7F]">◯ ◯ ◯</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                Values in Motion
              </h3>
              <p className="text-[#4A4A4A]">
                Mapping what truly matters through constellation work.
                Making visible the tensions and alignments that
                shape every leadership decision.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-[#1A365D]/10 p-6 text-center transition-all duration-300 hover:border-[#F96E1E] hover:-translate-y-0.5">
              <div className="mb-6 text-4xl text-[#D4B86A]">⚖</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                Sitting With Tension
              </h3>
              <p className="text-[#4A4A4A]">
                Some tensions aren't meant to be solved.
                They're meant to be understood.
                Emotional discernment over reaction.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* 
        EQ-i Questions Block - Visual Interest
        Scattered EQ-i questions as engaging visual elements
        Uses approved questions from foundation document
      */}
      <Block background="white" spacing="compact">
        <PageLayout>
          <div className="relative">
            {/* EQ Bubbles positioned strategically for visual interest */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
              <EQBubble 
                question="What's the story I tell myself about who I am; is it still true?"
                color="sage"
                size="small"
              />
            </div>
            
            <div className="absolute top-20 right-1/4 transform translate-x-1/2">
              <EQBubble 
                question="What would it take to let more of the real me come through?"
                color="tangerine"
                size="medium"
              />
            </div>
            
            <div className="absolute bottom-0 left-1/3">
              <EQBubble 
                question="What helps me choose well, especially when it's hard?"
                color="sage"
                size="small"
              />
            </div>
            
            {/* Central content with breathing space */}
            <div className="py-20 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">
                The work beneath the work
              </h2>
              <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                Leadership development happens in the spaces between thinking and feeling,
                between knowing and doing, between self and others.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* 
        Testimonials Block - Authentic Client Voices
        Uses only approved testimonials from foundation document
        Styled blocks for credibility and visual interest
      */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] leading-tight mb-6">
              Reflections from leaders
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4A4A4A] md:text-xl">
              This work isn't loud. It doesn't need to be.<br />
              It resonates when you're ready to hear yourself more clearly.
            </p>
          </div>
          
          <Grid columns={2}>
            <TestimonialBlock
              quote="My team and I have never had such honest conversations with each other, until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team."
              author=""
              role="Country Head"
              industry="Telecommunications"
            />
            
            <TestimonialBlock
              quote="I have been surprised at how comfortable it has felt being stretched through this coaching process. The stretch has become an additional approach rather than replacing who I am; expanding my capabilities while preserving my authentic self."
              author=""
              role="Chief Financial Officer"
              industry="Housing and Community Development"
            />
            
            <TestimonialBlock
              quote="Phillip is a brilliant coach. He has the ability to uncover the challenges that the coachee is struggling with, that they may not even be aware of. Part of his skill lies in his ability to listen deeply, without rushing into 'fix' the client."
              author=""
              role="Senior Leader"
              industry="Civil Service"
            />
            
            <TestimonialBlock
              quote="Mentally, I am so pleased I arrived at this point with your coaching for which I am so grateful. I have got my confidence back and my self-belief which had waned back when we first met."
              author=""
              role="Country Head"
              industry="Manufacturing"
            />
          </Grid>
        </PageLayout>
      </Block>

      {/* 
        Closing CTA Block - Confident Invitation
        No pressure, no funnel - authentic invitation to connect
        Uses tangerine dopamine color for action orientation
      */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to explore what's getting in your way?
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg text-white/90 leading-relaxed">
              This personal journey informs every coaching conversation.<br />
              If something here resonates, let's explore what's possible for you.
            </p>
            
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F96E1E] text-white text-lg font-medium rounded transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
              >
                Let's talk
              </Link>
            </div>
            
            <p className="text-sm text-white/60">
              No funnel. No pressure.<br />
              Just a human conversation.
            </p>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
