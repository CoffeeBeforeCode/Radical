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
          <div className="min-h-screen grid items-center">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="space-y-8 lg:col-span-2">
                {/* Massive serif headline - breaking size conventions */}
                <h1 className="font-bold leading-none tracking-tight text-[#1A365D] text-6xl md:text-8xl lg:text-9xl">
                  Not a title.<br />
                  Not a goal.<br />
                  <span className="font-light italic text-[#F96E1E]">A practice.</span>
                </h1>
                
                <div className="rounded-lg border-l-8 border-[#7E2D40] bg-[#F8F5EB] p-8">
                  <p className="font-light leading-relaxed text-[#1A365D] text-2xl md:text-3xl">
                    The strongest leaders I know don&apos;t arrive — they <strong>return</strong>.<br />
                    Again and again. To their values. Their vision. Their self.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#F96E1E] px-12 py-6 font-semibold text-white text-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#E55A1A] hover:shadow-2xl"
                  >
                    Begin Here →
                  </Link>
                  <Link
                    href="/the-work"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-[#1A365D] bg-transparent px-12 py-6 font-semibold text-[#1A365D] text-xl transition-all duration-300 hover:bg-[#1A365D] hover:text-white"
                  >
                    Explore the Work
                  </Link>
                </div>
              </div>

              {/* Right side - EQ-i floating bubbles for visual impact */}
              <div className="relative lg:col-span-1">
                {/* Large central statement bubble */}
                <div className="mb-6 rotate-2 rounded-3xl bg-[#7E2D40] p-8 text-white shadow-2xl">
                  <p className="font-medium italic text-lg">
                    &quot;I create the space for that return — to what matters, what&apos;s emerging, and what&apos;s getting in the way.&quot;
                  </p>
                </div>
                
                {/* Floating EQ-i question bubbles */}
                <div className="absolute -right-8 -top-4 max-w-xs -rotate-12 rounded-2xl bg-[#7A9A7F] p-4 text-white shadow-lg">
                  <p className="italic text-sm">&quot;What&apos;s the story I tell myself about who I am?&quot;</p>
                </div>
                
                <div className="absolute -bottom-6 -left-4 max-w-xs rotate-6 rounded-2xl bg-[#F96E1E] p-4 text-white shadow-lg">
                  <p className="italic text-sm">&quot;What helps me choose well when it&apos;s hard?&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* LEADERSHIP EQUATION - Bold Feature Box */}
      <Block background="navy" spacing="spacious">
        <PageLayout>
          <div className="grid items-center gap-12 grid-cols-1 lg:grid-cols-5">
            {/* Equation Visual - Takes 2 columns */}
            <div className="text-center lg:col-span-2 lg:text-left">
              <div className="rounded-2xl bg-white/10 p-12 backdrop-blur">
                <div className="mb-4 font-bold font-mono tracking-wider text-[#D4B86A] text-8xl md:text-9xl">
                  PE = PO - I
                </div>
                <p className="font-medium text-[#D4B86A] text-xl">
                  The Leadership Equation
                </p>
              </div>
            </div>

            {/* Explanation - Takes 3 columns */}
            <div className="space-y-8 lg:col-span-3">
              <h2 className="font-bold leading-tight text-white text-4xl md:text-5xl">
                Most leaders already have the <span className="text-[#F96E1E]">potential</span>.
              </h2>
              
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-[#F96E1E] text-3xl">PE</div>
                  <h3 className="mb-2 font-semibold text-white">Performance</h3>
                  <p className="text-white/80 text-sm">The observable results and impact you create</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-[#D4B86A] text-3xl">PO</div>
                  <h3 className="mb-2 font-semibold text-white">Potential</h3>
                  <p className="text-white/80 text-sm">Your innate capabilities and possibilities</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-[#F96E1E] text-3xl">I</div>
                  <h3 className="mb-2 font-semibold text-white">Interference</h3>
                  <p className="text-white/80 text-sm">The &quot;stuff&quot; that gets in your way</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#F96E1E] p-6 text-white">
                <p className="font-medium text-lg">
                  What limits performance isn&apos;t lack of capability — it&apos;s the presence of interference. 
                  When we reduce what&apos;s in the way, performance naturally rises to meet potential.
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
            <h2 className="mb-6 font-bold text-[#1A365D] text-4xl md:text-5xl">
              What gets in your way?
            </h2>
            <p className="max-w-3xl text-[#4A4A4A] text-xl">
              Everyone has their &quot;stuff.&quot; The question is whether dealing with it now 
              is the best use of your energy.
            </p>
          </div>

          {/* Simplified grid to avoid complex ordering issues */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Large featured box */}
            <div className="rounded-2xl bg-[#7E2D40] p-8 text-white shadow-xl md:col-span-2">
              <div className="mb-4 text-5xl">🧠</div>
              <h3 className="mb-4 font-bold text-2xl">Inner Dialogue</h3>
              <p className="mb-4 text-white/90">
                The voice of imposter syndrome: &quot;I don&apos;t really belong at this level.&quot;
              </p>
              <p className="mb-4 text-white/90">
                Perfectionism: &quot;Anything less than flawless is failure.&quot;
              </p>
              <p className="text-white/80 text-sm">
                That internal commentary running through your mind, creating doubt where there should be confidence.
              </p>
            </div>

            {/* Third column with quote and stacked boxes */}
            <div className="space-y-6">
              <div className="rounded-xl border-l-4 border-[#F96E1E] bg-white p-6 shadow-lg">
                <div className="mb-3 text-3xl">⚖️</div>
                <h3 className="mb-2 font-semibold text-[#1A365D] text-xl">Competing Values</h3>
                <p className="text-[#4A4A4A] text-sm">
                  Autonomy versus belonging. Care versus performance. 
                  Values pulling in different directions.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-[#7A9A7F] bg-white p-6 shadow-lg">
                <div className="mb-3 text-3xl">🌪️</div>
                <h3 className="mb-2 font-semibold text-[#1A365D] text-xl">Environmental Blockers</h3>
                <p className="text-[#4A4A4A] text-sm">
                  Toxic team dynamics, silos, excessive admin burdens 
                  that drain your energy.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* APPROACH SHOWCASE - Five Column Bold Grid */}
      <Block background="white" spacing="default">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-bold text-[#1A365D] text-4xl md:text-5xl">
              How I see it
            </h2>
            <p className="mx-auto max-w-3xl text-[#4A4A4A] text-xl">
              I work in frameworks — but never formulas. These are tools I return to often: 
              not as answers, but as invitations.
            </p>
          </div>

          {/* Simplified 5-column grid */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7A9A7F] text-white text-2xl">👁️</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Observation First</h3>
              <p className="text-[#4A4A4A] text-sm">
                We start by noticing. Patterns, dynamics, friction. Before we move, we understand.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F96E1E] text-white text-2xl">🎯</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Embodied Perception</h3>
              <p className="text-[#4A4A4A] text-sm">
                You lead with your head, heart, and gut. We&apos;ll work with all three.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7E2D40] text-white text-2xl">🔄</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Values in Motion</h3>
              <p className="text-[#4A4A4A] text-sm">
                We surface what really matters — not just what sounds good.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4B86A] text-white text-2xl">⚖️</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Sitting with Tension</h3>
              <p className="text-[#4A4A4A] text-sm">
                Some tensions aren&apos;t meant to be solved. They&apos;re meant to be understood.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A365D] text-white text-2xl">✨</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Reducing Interference</h3>
              <p className="text-[#4A4A4A] text-sm">
                When interference clears, performance meets potential.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* TESTIMONIALS - Bold Box Architecture */}
      <Block background="burgundy" spacing="default">
        <PageLayout>
          <h2 className="mb-12 text-center font-bold text-white text-4xl md:text-5xl">
            Reflections from leaders
          </h2>

          {/* Simplified testimonial grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {/* Large featured testimonial */}
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="mb-4 text-[#7E2D40] text-6xl">&quot;</div>
              <p className="mb-6 font-medium italic leading-relaxed text-[#1A365D] text-xl">
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
                  <div className="text-[#4A4A4A] text-sm">Telecommunications</div>
                </div>
              </div>
            </div>

            {/* Stacked smaller testimonials */}
            <div className="space-y-6">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <p className="mb-4 italic text-white">
                  &quot;I have been surprised at how comfortable it has felt being stretched. 
                  Expanding my capabilities while preserving my authentic self.&quot;
                </p>
                <div className="font-medium text-[#D4B86A] text-sm">
                  CFO, Housing & Community
                </div>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <p className="mb-4 italic text-white">
                  &quot;He has the ability to swiftly and accurately pinpoint areas for development. 
                  Completely trustworthy with extremely high integrity.&quot;
                </p>
                <div className="font-medium text-[#D4B86A] text-sm">
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
          <div className="grid items-center gap-12 grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-bold text-white text-4xl md:text-5xl">
                A <span className="text-[#F96E1E]">global</span> perspective
              </h2>
              <p className="mb-8 text-white/90 text-xl">
                My coaching partnerships span diverse contexts and cultures, working with 
                senior leaders across continents and industries.
              </p>
              
              <div className="grid gap-6 grid-cols-2">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-[#D4B86A] text-3xl">🌍</div>
                  <h3 className="mb-2 font-semibold text-white">4 Regions</h3>
                  <p className="text-white/80 text-sm">Europe, Middle East, Americas, Asia Pacific</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-[#D4B86A] text-3xl">🏢</div>
                  <h3 className="mb-2 font-semibold text-white">5 Industries</h3>
                  <p className="text-white/80 text-sm">Technology, Healthcare, Finance, Manufacturing, Government</p>
                </div>
              </div>
            </div>

            {/* Regional breakdown in boxes */}
            <div className="grid gap-4 grid-cols-2">
              <div className="rounded-xl bg-[#F96E1E] p-6 text-white">
                <h4 className="mb-3 font-bold">Europe</h4>
                <ul className="space-y-1 text-sm">
                  <li>• UK, Ireland</li>
                  <li>• France, Belgium</li>
                  <li>• Netherlands</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#7A9A7F] p-6 text-white">
                <h4 className="mb-3 font-bold">Middle East</h4>
                <ul className="space-y-1 text-sm">
                  <li>• UAE, Saudi Arabia</li>
                  <li>• Israel</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#D4B86A] p-6 text-white">
                <h4 className="mb-3 font-bold">Americas</h4>
                <ul className="space-y-1 text-sm">
                  <li>• USA</li>
                  <li>• Argentina, Brazil</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#7E2D40] p-6 text-white">
                <h4 className="mb-3 font-bold">Asia Pacific</h4>
                <ul className="space-y-1 text-sm">
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
          <div className="grid items-center gap-12 grid-cols-1 lg:grid-cols-3">
            {/* Large statement - 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 font-bold leading-tight text-[#1A365D] text-5xl md:text-6xl">
                This is your leadership.
              </h2>
              
              <div className="mb-8 rounded-2xl border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-8">
                <p className="leading-relaxed text-[#1A365D] text-2xl">
                  You don&apos;t need a louder voice.<br />
                  You need a clearer signal.<br />
                  And a safe enough space to hear it.
                </p>
              </div>

              <p className="mb-8 text-[#4A4A4A] text-lg">
                If something here resonates, let&apos;s explore what&apos;s possible. 
                No funnel. No pressure. Just a human conversation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#F96E1E] px-12 py-6 font-semibold text-white text-xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#E55A1A] hover:shadow-2xl"
                >
                  Let&apos;s Explore Together →
                </Link>
                <Link
                  href="/this-is-personal"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-[#7E2D40] bg-transparent px-12 py-6 font-semibold text-[#7E2D40] text-xl transition-all duration-300 hover:bg-[#7E2D40] hover:text-white"
                >
                  This is Personal
                </Link>
              </div>
            </div>

            {/* CTA box - 1 column */}
            <div className="rounded-2xl bg-[#1A365D] p-8 text-center text-white shadow-2xl">
              <div className="mb-4 text-[#D4B86A] text-5xl">💭</div>
              <h3 className="mb-4 font-bold text-xl">Ready to begin?</h3>
              <p className="mb-6 text-white/90">
                Every transformation begins with a single, honest conversation.
              </p>
              <div className="rounded-lg bg-[#F96E1E] p-4 text-white">
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
