/**
 * AGGRESSIVE Homepage - Phillip Collins Global Leadership Coach
 * 
 * BREAKTHROUGH DESIGN that DESTROYS consultant template conventions
 * through DENSE layout architecture, bold asymmetric grids, and strategic color blocking
 * 
 * Design Revolution:
 * - COMPRESSED Aga-inspired density vs. safe white space
 * - BOXY grid architecture with minimal padding  
 * - AGGRESSIVE asymmetric layouts (2/3 + 1/3, not centered)
 * - EQ-i square blocks as visual placeholders for future SVG bubbles
 * - BOLD color blocking that screams confidence over template safety
 * - REAL testimonials in styled asymmetric blocks
 * - PACKED content - more per screen than any consultant template
 */

import Layout, { Block, PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Global Leadership Coach"
      description="Creating space for leaders to see what gets in their way, reduce interference, and unlock their natural potential. Working with executives across Europe, Middle East, Americas, and Asia Pacific."
      canonical="/"
    >
      {/* HERO REVOLUTION - Dense Typography + EQ-i Squares */}
      <Block background="white" spacing="compact">
        <PageLayout>
          <div className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-3">
            {/* Main Content - 2/3 Aggressive Asymmetric */}
            <div className="space-y-6 lg:col-span-2">
              <h1 className="text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl">
                Not a title.<br />
                Not a goal.<br />
                <span className="font-light italic text-[#F96E1E]">A practice.</span>
              </h1>
              
              <div className="rounded-lg border-l-8 border-[#7E2D40] bg-[#F8F5EB] p-6">
                <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                  The strongest leaders I know don&apos;t arrive — they <strong>return</strong>.<br />
                  Again and again. To their values. Their vision. Their self.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-gray-600">
                I create the space for that return — to what matters, what&apos;s emerging, 
                and what&apos;s getting in the way. Not louder. Just wiser.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
                >
                  Begin Here →
                </Link>
                <Link
                  href="/the-work"
                  className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white"
                >
                  Explore the Work
                </Link>
              </div>
            </div>

            {/* EQ-i Square Blocks Sidebar - 1/3 */}
                          <div className="space-y-4 lg:col-span-1">
              <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &quot;What&apos;s the story I tell myself about who I am; is it still true?&quot;
                </p>
              </div>
              
              <div className="aspect-square rounded-lg bg-[#7A9A7F] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &quot;What helps me choose well, especially when it&apos;s hard?&quot;
                </p>
              </div>
              
              <div className="aspect-square rounded-lg bg-[#7E2D40] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &quot;What do I reach for when things feel too much?&quot;
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* LEADERSHIP EQUATION - Bold Dense Feature */}
      <Block background="navy" spacing="compact">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-6 py-8 lg:grid-cols-5">
            {/* Equation Display - 2/5 */}
            <div className="text-center lg:col-span-2">
              <div className="rounded-xl bg-white bg-opacity-10 p-8 backdrop-blur">
                <div className="mb-4 font-mono text-6xl font-bold text-[#D4B86A] md:text-7xl">
                  PE = PO - I
                </div>
                <p className="text-xl font-semibold text-[#D4B86A]">
                  The Leadership Equation
                </p>
              </div>
            </div>

            {/* Explanation - 3/5 Asymmetric */}
            <div className="space-y-6 lg:col-span-3">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Most leaders already have the <span className="text-[#F96E1E]">potential</span>.
              </h2>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur">
                  <div className="mb-2 text-2xl text-[#F96E1E]">PE</div>
                  <h3 className="mb-2 font-semibold text-white">Performance</h3>
                  <p className="text-sm text-white text-opacity-80">Observable results and impact</p>
                </div>
                
                <div className="rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur">
                  <div className="mb-2 text-2xl text-[#D4B86A]">PO</div>
                  <h3 className="mb-2 font-semibold text-white">Potential</h3>
                  <p className="text-sm text-white text-opacity-80">Innate capabilities within you</p>
                </div>
                
                <div className="rounded-lg bg-white bg-opacity-10 p-4 backdrop-blur">
                  <div className="mb-2 text-2xl text-[#F96E1E]">I</div>
                  <h3 className="mb-2 font-semibold text-white">Interference</h3>
                  <p className="text-sm text-white text-opacity-80">The "stuff" getting in your way</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#F96E1E] p-6">
                <p className="font-medium text-white">
                  When we reduce what&apos;s in the way, performance naturally rises to meet potential.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* INTERFERENCE EXAMPLES - Dense Varied-Size Cards */}
      <Block background="cream" spacing="compact">
        <PageLayout>
          <div className="py-8">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
                What gets in your way?
              </h2>
              <p className="max-w-3xl text-lg text-gray-600">
                Everyone has their "stuff." The question is whether dealing with it now 
                is the best use of your energy.
              </p>
            </div>

            {/* Asymmetric Dense Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Large Card - Inner Dialogue */}
              <div className="rounded-xl bg-[#7E2D40] p-6 text-white shadow-lg md:col-span-2">
                <div className="mb-4 text-4xl">🧠</div>
                <h3 className="mb-4 text-xl font-bold">Inner Dialogue</h3>
                <div className="space-y-3">
                  <p className="text-white/90">
                    The voice of imposter syndrome: &quot;I don&apos;t really belong at this level.&quot;
                  </p>
                  <p className="text-white/90">
                    Perfectionism: &quot;Anything less than flawless is failure.&quot;
                  </p>
                  <p className="text-sm text-white/80">
                    That internal commentary creating doubt where there should be confidence.
                  </p>
                </div>
              </div>

              {/* Stacked Smaller Cards */}
              <div className="space-y-4">
                <div className="rounded-lg border-l-4 border-[#F96E1E] bg-white p-4 shadow">
                  <div className="mb-2 text-2xl">⚖️</div>
                  <h3 className="mb-2 font-semibold text-[#1A365D]">Competing Values</h3>
                  <p className="text-sm text-gray-600">
                    Autonomy vs belonging. Care vs performance. Values pulling different directions.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-[#7A9A7F] bg-white p-4 shadow">
                  <div className="mb-2 text-2xl">🌪️</div>
                  <h3 className="mb-2 font-semibold text-[#1A365D]">Environmental Blockers</h3>
                  <p className="text-sm text-gray-600">
                    Toxic team dynamics, silos, excessive admin that drains energy.
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-[#D4B86A] bg-white p-4 shadow">
                  <div className="mb-2 text-2xl">📖</div>
                  <h3 className="mb-2 font-semibold text-[#1A365D]">Unhelpful Narratives</h3>
                  <p className="text-sm text-gray-600">
                    &quot;I must always have the answer.&quot; &quot;If I slow down, I&apos;ll fall behind.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* APPROACH SHOWCASE - Compressed 5-Column Grid */}
      <Block background="white" spacing="compact">
        <PageLayout>
          <div className="py-8">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
                How I see it
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                I work in frameworks — but never formulas. These are tools I return to often: 
                not as answers, but as invitations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
              <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#7A9A7F] text-xl text-white">👁️</div>
                <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Observation First</h3>
                <p className="text-xs text-gray-600">
                  We start by noticing patterns, dynamics, friction before we move.
                </p>
              </div>

              <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#F96E1E] text-xl text-white">🎯</div>
                <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Embodied Perception</h3>
                <p className="text-xs text-gray-600">
                  You lead with head, heart, and gut. We work with all three.
                </p>
              </div>

              <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#7E2D40] text-xl text-white">🔄</div>
                <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Values in Motion</h3>
                <p className="text-xs text-gray-600">
                  We surface what really matters — not just what sounds good.
                </p>
              </div>

              <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#D4B86A] text-xl text-white">⚖️</div>
                <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Sitting with Tension</h3>
                <p className="text-xs text-gray-600">
                  Some tensions aren&apos;t meant to be solved, but understood.
                </p>
              </div>

              <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#1A365D] text-xl text-white">✨</div>
                <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Reducing Interference</h3>
                <p className="text-xs text-gray-600">
                  When interference clears, performance meets potential.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* REAL TESTIMONIALS - Asymmetric Layout */}
      <Block background="burgundy" spacing="compact">
        <PageLayout>
          <div className="py-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
              Reflections from leaders
            </h2>

            {/* Asymmetric Grid: Large + Stack */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Large Testimonial - 2/3 */}
              <div className="rounded-xl bg-white p-6 shadow-lg lg:col-span-2">
                <div className="absolute -ml-1 -mt-2 text-5xl text-[#7E2D40]">&quot;</div>
                <p className="mb-4 pl-6 text-lg font-medium italic leading-relaxed text-[#1A365D]">
                  My team and I have never had such honest conversations with each other, 
                  until I started working with Phillip. His ability to create a safe space 
                  where challenging topics can be discussed has transformed how we operate 
                  as a leadership team.
                </p>
                <div className="flex items-center pl-6">
                  <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-[#7E2D40] text-sm font-bold text-white">
                    CH
                  </div>
                  <div>
                    <div className="font-semibold text-[#7E2D40]">Country Head</div>
                    <div className="text-sm text-gray-600">Telecommunications</div>
                  </div>
                </div>
              </div>

              {/* Stacked Smaller Testimonials - 1/3 */}
              <div className="space-y-4">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <p className="mb-3 text-sm italic text-white">
                    &quot;I have been surprised at how comfortable it has felt being stretched. 
                    The stretch has become an additional approach rather than replacing who I am.&quot;
                  </p>
                  <div className="text-xs font-medium text-[#D4B86A]">
                    CFO, Housing & Community
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <p className="mb-3 text-sm italic text-white">
                    &quot;He is completely trustworthy and has an extremely high level of integrity, 
                    acute business insight and many years of diverse experience to draw upon.&quot;
                  </p>
                  <div className="text-xs font-medium text-[#D4B86A]">
                    Senior Civil-Servant, Government
                  </div>
                </div>

                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <p className="mb-3 text-sm italic text-white">
                    &quot;I have got my confidence back and my self-belief which had waned 
                    back when we first met.&quot;
                  </p>
                  <div className="text-xs font-medium text-[#D4B86A]">
                    Country Head, Manufacturing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* GLOBAL REACH - Tight Regional Grid */}
      <Block background="navy" spacing="compact">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                A <span className="text-[#F96E1E]">global</span> perspective
              </h2>
              <p className="mb-6 text-lg text-white/90">
                My coaching partnerships span diverse contexts and cultures, working with 
                senior leaders across continents and industries.
              </p>
              
              {/* EQ-i Squares for Global Context */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex aspect-square items-center justify-center rounded-lg bg-[#F96E1E] p-4 text-center text-white">
                  <div>
                    <div className="mb-2 text-2xl">🌍</div>
                    <div className="text-sm font-medium">4 Continents</div>
                  </div>
                </div>
                <div className="flex aspect-square items-center justify-center rounded-lg bg-[#7A9A7F] p-4 text-center text-white">
                  <div>
                    <div className="mb-2 text-2xl">🏢</div>
                    <div className="text-sm font-medium">5 Major Industries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color-Coded Regional Blocks */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#F96E1E] p-4 text-white">
                <h4 className="mb-2 font-bold">Europe</h4>
                <ul className="space-y-1 text-sm">
                  <li>• UK, Ireland</li>
                  <li>• France, Belgium</li>
                  <li>• Netherlands</li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-[#7A9A7F] p-4 text-white">
                <h4 className="mb-2 font-bold">Middle East</h4>
                <ul className="space-y-1 text-sm">
                  <li>• UAE, Saudi Arabia</li>
                  <li>• Israel</li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-[#D4B86A] p-4 text-white">
                <h4 className="mb-2 font-bold">Americas</h4>
                <ul className="space-y-1 text-sm">
                  <li>• USA</li>
                  <li>• Argentina, Brazil</li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-[#7E2D40] p-4 text-white">
                <h4 className="mb-2 font-bold">Asia Pacific</h4>
                <ul className="space-y-1 text-sm">
                  <li>• India</li>
                  <li>• Singapore</li>
                </ul>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* CLOSING CTA - Bold Asymmetric */}
      <Block background="white" spacing="compact">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-3">
            {/* Main Content - 2/3 Asymmetric */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-4xl font-bold text-[#1A365D] md:text-5xl">
                This is your leadership.
              </h2>
              
              <div className="mb-6 rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6">
                <p className="text-xl leading-relaxed text-[#1A365D]">
                  You don&apos;t need a louder voice.<br />
                  You need a clearer signal.<br />
                  And a safe enough space to hear it.
                </p>
              </div>

              <p className="mb-6 text-lg text-gray-600">
                If something here resonates, let&apos;s explore what&apos;s possible. 
                No funnel. No pressure. Just a human conversation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
                >
                  Let&apos;s Explore Together →
                </Link>
                <Link
                  href="/this-is-personal"
                  className="rounded-lg border-2 border-[#7E2D40] px-8 py-4 text-lg font-semibold text-[#7E2D40] transition-colors hover:bg-[#7E2D40] hover:text-white"
                >
                  This is Personal
                </Link>
              </div>
            </div>

            {/* CTA Side Block - 1/3 */}
            <div className="rounded-xl bg-[#1A365D] p-6 text-center text-white">
              <div className="mb-4 text-4xl text-[#D4B86A]">💭</div>
              <h3 className="mb-4 text-lg font-bold text-white">Ready to begin?</h3>
              <p className="mb-6 text-sm text-white/90">
                Every transformation begins with a single, honest conversation.
              </p>
              <div className="rounded-lg bg-[#F96E1E] p-4">
                <p className="text-sm font-medium text-white">
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
