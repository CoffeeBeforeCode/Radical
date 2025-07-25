/**
 * Breakthrough Homepage - Phillip Collins Global Leadership Coach
 * 
 * Purpose: AGGRESSIVE grid-based homepage that BREAKS consultant template conventions
 * through bold color blocking, asymmetric layouts, and authentic box-driven architecture.
 * 
 * Design Revolution:
 * - BOXY grid architecture inspired by Aga Szostek's breakthrough approach
 * - Color-driven sections creating dramatic visual rhythm
 * - Strategic dopamine colors (tangerine/terracotta) for high emotional impact
 * - Asymmetric layouts that signal confidence over template safety
 * - EQ-i question bubbles for engaging visual elements
 * - Hand-drawn underline effects and authentic testimonial blocks
 * 
 * Anti-Template Strategy:
 * - No centered everything - aggressive asymmetric grids
 * - Bold color blocking over safe white space
 * - Genuine client testimonials in styled boxes
 * - Strategic typography with proper font handling
 * - Breakthrough quality that executives instantly recognize
 * 
 * Target Audience: Sophisticated executives who dismiss template mediocrity instantly
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
      {/* HERO REVOLUTION - Typography-First, No Template Safety */}
      <Block background="white" spacing="default">
        <PageLayout>
          {/* Asymmetric hero layout - left-aligned power statement */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[70vh]">
            <div className="lg:col-span-2 space-y-8">
              {/* Massive serif headline - breaking size conventions */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-[#1A365D] tracking-tight">
                Not a title.<br />
                Not a goal.<br />
                <span className="text-[#F96E1E] font-light italic">A practice.</span>
              </h1>
              
              <div className="bg-[#F8F5EB] p-8 rounded-lg border-l-8 border-[#7E2D40]">
                <p className="text-2xl md:text-3xl font-light text-[#1A365D] leading-relaxed">
                  The strongest leaders I know don't arrive — they <strong>return</strong>.<br />
                  Again and again. To their values. Their vision. Their self.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#F96E1E] text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-xl hover:bg-[#E55A1A] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Begin Here →
                </Link>
                <Link
                  href="/the-work"
                  className="inline-flex items-center justify-center border-2 border-[#1A365D] bg-transparent px-12 py-6 text-xl font-semibold text-[#1A365D] rounded-lg transition-all duration-300 hover:bg-[#1A365D] hover:text-white"
                >
                  Explore the Work
                </Link>
              </div>
            </div>

            {/* Right side - EQ-i floating bubbles for visual impact */}
            <div className="relative lg:col-span-1">
              {/* Large central statement bubble */}
              <div className="bg-[#7E2D40] text-white p-8 rounded-3xl shadow-2xl mb-6 transform rotate-2">
                <p className="text-lg font-medium italic">
                  &quot;I create the space for that return — to what matters, what&apos;s emerging, and what&apos;s getting in the way.&quot;
                </p>
              </div>
              
              {/* Floating EQ-i question bubbles */}
              <div className="absolute -top-4 -right-8 bg-[#7A9A7F] text-white p-4 rounded-2xl shadow-lg transform -rotate-12 max-w-xs">
                <p className="text-sm italic">                  &quot;What&apos;s the story I tell myself about who I am?&quot;</p>
              </div>
              
              <div className="absolute -bottom-6 -left-4 bg-[#F96E1E] text-white p-4 rounded-2xl shadow-lg transform rotate-6 max-w-xs">
                <p className="text-sm italic">                &quot;What helps me choose well when it&apos;s hard?&quot;</p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* LEADERSHIP EQUATION - Bold Feature Box */}
      <Block background="navy" spacing="spacious">
        <PageLayout>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Equation Visual - Takes 2 columns */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <div className="bg-white/10 p-12 rounded-2xl backdrop-blur">
                <div className="text-8xl md:text-9xl text-[#D4B86A] font-bold mb-4 font-mono tracking-wider">
                  PE = PO - I
                </div>
                <p className="text-[#D4B86A] text-xl font-medium">
                  The Leadership Equation
                </p>
              </div>
            </div>

            {/* Explanation - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Most leaders already have the <span className="text-[#F96E1E]">potential</span>.
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="text-3xl text-[#F96E1E] mb-3">PE</div>
                  <h3 className="font-semibold text-white mb-2">Performance</h3>
                  <p className="text-white/80 text-sm">The observable results and impact you create</p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-3xl text-[#D4B86A] mb-3">PO</div>
                  <h3 className="font-semibold text-white mb-2">Potential</h3>
                  <p className="text-white/80 text-sm">Your innate capabilities and possibilities</p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-3xl text-[#F96E1E] mb-3">I</div>
                  <h3 className="font-semibold text-white mb-2">Interference</h3>
                  <p className="text-white/80 text-sm">                The &quot;stuff&quot; that gets in your way</p>
                </div>
              </div>

              <div className="bg-[#F96E1E] text-white p-6 rounded-lg">
                <p className="text-lg font-medium">
                  What limits performance isn't lack of capability — it's the presence of interference. 
                  When we reduce what's in the way, performance naturally rises to meet potential.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* INTERFERENCE EXAMPLES - Aggressive Box Grid */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">
              What gets in your way?
            </h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl">
              Everyone has their &quot;stuff.&quot; The question is whether dealing with it now 
              is the best use of your energy.
            </p>
          </div>

          {/* Asymmetric grid of interference types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large featured box */}
            <div className="md:col-span-2 lg:col-span-1 bg-[#7E2D40] text-white p-8 rounded-2xl shadow-xl">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Inner Dialogue</h3>
              <p className="text-white/90 mb-4">
                The voice of imposter syndrome:                   &quot;I don&apos;t really belong at this level.&quot;
              </p>
              <p className="text-white/90 mb-4">
                Perfectionism:                 &quot;Anything less than flawless is failure.&quot;
              </p>
              <p className="text-white/80 text-sm">
                That internal commentary running through your mind, creating doubt where there should be confidence.
              </p>
            </div>

            {/* Stacked smaller boxes */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#F96E1E]">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Competing Values</h3>
                <p className="text-[#4A4A4A] text-sm">
                  Autonomy versus belonging. Care versus performance. 
                  Values pulling in different directions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#7A9A7F]">
                <div className="text-3xl mb-3">🌪️</div>
                <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Environmental Blockers</h3>
                <p className="text-[#4A4A4A] text-sm">
                  Toxic team dynamics, silos, excessive admin burdens 
                  that drain your energy.
                </p>
              </div>
            </div>

            {/* Third column with quote */}
            <div className="bg-[#1A365D] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">
              <div className="text-6xl text-[#D4B86A] mb-4">"</div>
              <p className="text-lg italic mb-4">
                Working with Phillip is like walking through fog and suddenly seeing the sun break through. 
                You may have had the answer all along, but now you can see it.
              </p>
              <div className="text-[#D4B86A] text-sm font-medium">
                Regional Director, Technology
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* APPROACH SHOWCASE - Five Column Bold Grid */}
      <Block background="white" spacing="default">
        <PageLayout>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A365D] mb-6">
              How I see it
            </h2>
            <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto">
              I work in frameworks — but never formulas. These are tools I return to often: 
              not as answers, but as invitations.
            </p>
          </div>

          {/* Bold 5-column approach grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-[#F8F5EB] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7A9A7F] text-2xl text-white">👁️</div>
              <h3 className="font-bold text-[#1A365D] mb-3">Observation First</h3>
              <p className="text-sm text-[#4A4A4A]">
                We start by noticing. Patterns, dynamics, friction. Before we move, we understand.
              </p>
            </div>

            <div className="bg-[#F8F5EB] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F96E1E] text-2xl text-white">🎯</div>
              <h3 className="font-bold text-[#1A365D] mb-3">Embodied Perception</h3>
              <p className="text-sm text-[#4A4A4A]">
                You lead with your head, heart, and gut.                 We&apos;ll work with all three.
              </p>
            </div>

            <div className="bg-[#F8F5EB] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7E2D40] text-2xl text-white">🔄</div>
              <h3 className="font-bold text-[#1A365D] mb-3">Values in Motion</h3>
              <p className="text-sm text-[#4A4A4A]">
                We surface what really matters — not just what sounds good.
              </p>
            </div>

            <div className="bg-[#F8F5EB] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4B86A] text-2xl text-white">⚖️</div>
              <h3 className="font-bold text-[#1A365D] mb-3">Sitting with Tension</h3>
              <p className="text-sm text-[#4A4A4A]">
                Some tensions aren't meant to be solved.                 They&apos;re meant to be understood.
              </p>
            </div>

            <div className="bg-[#F8F5EB] p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A365D] text-2xl text-white">✨</div>
              <h3 className="font-bold text-[#1A365D] mb-3">Reducing Interference</h3>
              <p className="text-sm text-[#4A4A4A]">
                When interference clears, performance meets potential.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* TESTIMONIALS - Bold Box Architecture */}
      <Block background="burgundy" spacing="default">
        <PageLayout>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Reflections from leaders
          </h2>

          {/* Asymmetric testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large featured testimonial */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
              <div className="text-6xl text-[#7E2D40] mb-4">&quot;</div>
              <p className="text-xl text-[#1A365D] italic leading-relaxed mb-6">
                My team and I have never had such honest conversations with each other, 
                until I started working with Phillip. His ability to create a safe space 
                where challenging topics can be discussed has transformed how we operate 
                as a leadership team.
              </p>
              <div className="flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7E2D40] font-bold text-white">
                  CH
                </div>
                <div>
                  <div className="font-semibold text-[#7E2D40]">Country Head</div>
                  <div className="text-sm text-[#4A4A4A]">Telecommunications</div>
                </div>
              </div>
            </div>

            {/* Stacked smaller testimonials */}
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <p className="text-white italic mb-4">
                  &quot;I have been surprised at how comfortable it has felt being stretched. 
                  Expanding my capabilities while preserving my authentic self."
                </p>
                <div className="text-[#D4B86A] text-sm font-medium">
                  CFO, Housing & Community
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl backdrop-blur">
                <p className="text-white italic mb-4">
                  &quot;He has the ability to swiftly and accurately pinpoint areas for development. 
                  Completely trustworthy with extremely high integrity."
                </p>
                <div className="text-[#D4B86A] text-sm font-medium">
                  Senior Civil-Servant, Government
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* GLOBAL REACH - Split Visual Treatment */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                A <span className="text-[#F96E1E]">global</span> perspective
              </h2>
              <p className="mb-8 text-xl text-white/90">
                My coaching partnerships span diverse contexts and cultures, working with 
                senior leaders across continents and industries.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="text-3xl text-[#D4B86A] mb-3">🌍</div>
                  <h3 className="text-white font-semibold mb-2">4 Regions</h3>
                  <p className="text-white/80 text-sm">Europe, Middle East, Americas, Asia Pacific</p>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-3xl text-[#D4B86A] mb-3">🏢</div>
                  <h3 className="text-white font-semibold mb-2">5 Industries</h3>
                  <p className="text-white/80 text-sm">Technology, Healthcare, Finance, Manufacturing, Government</p>
                </div>
              </div>
            </div>

            {/* Regional breakdown in boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#F96E1E] p-6 text-white">
                <h4 className="font-bold mb-3">Europe</h4>
                <ul className="text-sm space-y-1">
                  <li>• UK, Ireland</li>
                  <li>• France, Belgium</li>
                  <li>• Netherlands</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#7A9A7F] p-6 text-white">
                <h4 className="font-bold mb-3">Middle East</h4>
                <ul className="text-sm space-y-1">
                  <li>• UAE, Saudi Arabia</li>
                  <li>• Israel</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#D4B86A] p-6 text-white">
                <h4 className="font-bold mb-3">Americas</h4>
                <ul className="text-sm space-y-1">
                  <li>• USA</li>
                  <li>• Argentina, Brazil</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#7E2D40] p-6 text-white">
                <h4 className="font-bold mb-3">Asia Pacific</h4>
                <ul className="text-sm space-y-1">
                  <li>• India</li>
                  <li>• Singapore</li>
                </ul>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* CLOSING CTA - Bold Asymmetric Treatment */}
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 items-center">
            {/* Large statement - 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl">
                This is your leadership.
              </h2>
              
              <div className="mb-8 rounded-2xl border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-8">
                <p className="text-2xl text-[#1A365D] leading-relaxed">
                You don&apos;t need a louder voice.<br />
                  You need a clearer signal.<br />
                  And a safe enough space to hear it.
                </p>
              </div>

              <p className="mb-8 text-lg text-[#4A4A4A]">
                If something here resonates, let&apos;s explore what&apos;s possible. 
                No funnel. No pressure. Just a human conversation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#F96E1E] text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-xl hover:bg-[#E55A1A] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Let&apos;s Explore Together →
                </Link>
                <Link
                  href="/this-is-personal"
                  className="inline-flex items-center justify-center border-2 border-[#7E2D40] bg-transparent px-12 py-6 text-xl font-semibold text-[#7E2D40] rounded-lg transition-all duration-300 hover:bg-[#7E2D40] hover:text-white"
                >
                  This is Personal
                </Link>
              </div>
            </div>

            {/* CTA box - 1 column */}
            <div className="rounded-2xl bg-[#1A365D] p-8 text-center text-white shadow-2xl">
              <div className="text-5xl text-[#D4B86A] mb-4">💭</div>
              <h3 className="text-xl font-bold mb-4">Ready to begin?</h3>
              <p className="text-white/90 mb-6">
                Every transformation begins with a single, honest conversation.
              </p>
              <div className="bg-[#F96E1E] text-white p-4 rounded-lg">
                <p className="font-medium">
                  Leadership is a <strong>practice</strong>, not a destination
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
