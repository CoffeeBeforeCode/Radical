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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
            {/* Main Content - 2/3 Aggressive Asymmetric */}
            <div className="space-y-6 lg:col-span-2">
              <h1 className="text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl">
                Not a title.<br />
                Not a goal.<br />
                <span className="text-[#F96E1E] font-light italic">A practice.</span>
              </h1>
              
              <div className="bg-[#F8F5EB] border-l-8 border-[#7E2D40] p-6 rounded-lg">
                <p className="text-xl font-medium text-[#1A365D] md:text-2xl leading-relaxed">
                  The strongest leaders I know don&apos;t arrive — they <strong>return</strong>.<br />
                  Again and again. To their values. Their vision. Their self.
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                I create the space for that return — to what matters, what&apos;s emerging, 
                and what&apos;s getting in the way. Not louder. Just wiser.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#F96E1E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E55A1A] transition-colors"
                >
                  Begin Here →
                </Link>
                <Link
                  href="/the-work"
                  className="border-2 border-[#1A365D] text-[#1A365D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1A365D] hover:text-white transition-colors"
                >
                  Explore the Work
                </Link>
              </div>
            </div>

            {/* EQ-i Square Blocks Sidebar - 1/3 */}
            <div className="space-y-4 lg:col-span-1">
              <div className="aspect-square bg-[#F96E1E] p-4 rounded-lg text-white">
                <p className="text-sm font-medium italic">
                  "What's the story I tell myself about who I am; is it still true?"
                </p>
              </div>
              
              <div className="aspect-square bg-[#7A9A7F] p-4 rounded-lg text-white">
                <p className="text-sm font-medium italic">
                  "What helps me choose well, especially when it's hard?"
                </p>
              </div>
              
              <div className="aspect-square bg-[#7E2D40] p-4 rounded-lg text-white">
                <p className="text-sm font-medium italic">
                  "What do I reach for when things feel too much?"
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* LEADERSHIP EQUATION - Bold Dense Feature */}
      <Block background="navy" spacing="compact">
        <PageLayout>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center py-8">
            {/* Equation Display - 2/5 */}
            <div className="text-center lg:col-span-2">
              <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur">
                <div className="text-6xl font-bold font-mono text-[#D4B86A] mb-4 md:text-7xl">
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
                  <div className="text-2xl text-[#F96E1E] mb-2">PE</div>
                  <h3 className="font-semibold text-white mb-2">Performance</h3>
                  <p className="text-sm text-white text-opacity-80">Observable results and impact</p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
                  <div className="text-2xl text-[#D4B86A] mb-2">PO</div>
                  <h3 className="font-semibold text-white mb-2">Potential</h3>
                  <p className="text-sm text-white text-opacity-80">Innate capabilities within you</p>
                </div>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
                  <div className="text-2xl text-[#F96E1E] mb-2">I</div>
                  <h3 className="font-semibold text-white mb-2">Interference</h3>
                  <p className="text-sm text-white text-opacity-80">The "stuff" getting in your way</p>
                </div>
              </div>

              <div className="bg-[#F96E1E] p-6 rounded-lg">
                <p className="text-white font-medium">
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
              <h2 className="text-3xl font-bold text-[#1A365D] mb-4 md:text-4xl">
                What gets in your way?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Everyone has their "stuff." The question is whether dealing with it now 
                is the best use of your energy.
              </p>
            </div>

            {/* Asymmetric Dense Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Card - Inner Dialogue */}
              <div className="bg-[#7E2D40] p-6 rounded-xl text-white shadow-lg md:col-span-2">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-4">Inner Dialogue</h3>
                <div className="space-y-3">
                  <p className="text-white text-opacity-90">
                    The voice of imposter syndrome: "I don&apos;t really belong at this level."
                  </p>
                  <p className="text-white text-opacity-90">
                    Perfectionism: "Anything less than flawless is failure."
                  </p>
                  <p className="text-sm text-white text-opacity-80">
                    That internal commentary creating doubt where there should be confidence.
                  </p>
                </div>
              </div>

              {/* Stacked Smaller Cards */}
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-[#F96E1E] p-4 rounded-lg shadow">
                  <div className="text-2xl mb-2">⚖️</div>
                  <h3 className="font-semibold text-[#1A365D] mb-2">Competing Values</h3>
                  <p className="text-sm text-gray-600">
                    Autonomy vs belonging. Care vs performance. Values pulling different directions.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#7A9A7F] p-4 rounded-lg shadow">
                  <div className="text-2xl mb-2">🌪️</div>
                  <h3 className="font-semibold text-[#1A365D] mb-2">Environmental Blockers</h3>
                  <p className="text-sm text-gray-600">
                    Toxic team dynamics, silos, excessive admin that drains energy.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-[#D4B86A] p-4 rounded-lg shadow">
                  <div className="text-2xl mb-2">📖</div>
                  <h3 className="font-semibold text-[#1A365D] mb-2">Unhelpful Narratives</h3>
                  <p className="text-sm text-gray-600">
                    "I must always have the answer." "If I slow down, I'll fall behind."
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
              <h2 className="text-3xl font-bold text-[#1A365D] mb-4 md:text-4xl">
                How I see it
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I work in frameworks — but never formulas. These are tools I return to often: 
                not as answers, but as invitations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-[#F8F5EB] p-4 rounded-lg text-center">
                <div className="bg-[#7A9A7F] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl">👁️</div>
                <h3 className="font-bold text-[#1A365D] mb-2 text-sm">Observation First</h3>
                <p className="text-xs text-gray-600">
                  We start by noticing patterns, dynamics, friction before we move.
                </p>
              </div>

              <div className="bg-[#F8F5EB] p-4 rounded-lg text-center">
                <div className="bg-[#F96E1E] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl">🎯</div>
                <h3 className="font-bold text-[#1A365D] mb-2 text-sm">Embodied Perception</h3>
                <p className="text-xs text-gray-600">
                  You lead with head, heart, and gut. We work with all three.
                </p>
              </div>

              <div className="bg-[#F8F5EB] p-4 rounded-lg text-center">
                <div className="bg-[#7E2D40] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl">🔄</div>
                <h3 className="font-bold text-[#1A365D] mb-2 text-sm">Values in Motion</h3>
                <p className="text-xs text-gray-600">
                  We surface what really matters — not just what sounds good.
                </p>
              </div>

              <div className="bg-[#F8F5EB] p-4 rounded-lg text-center">
                <div className="bg-[#D4B86A] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl">⚖️</div>
                <h3 className="font-bold text-[#1A365D] mb-2 text-sm">Sitting with Tension</h3>
                <p className="text-xs text-gray-600">
                  Some tensions aren&apos;t meant to be solved, but understood.
                </p>
              </div>

              <div className="bg-[#F8F5EB] p-4 rounded-lg text-center">
                <div className="bg-[#1A365D] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl">✨</div>
                <h3 className="font-bold text-[#1A365D] mb-2 text-sm">Reducing Interference</h3>
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-4xl">
              Reflections from leaders
            </h2>

            {/* Asymmetric Grid: Large + Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Large Testimonial - 2/3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg lg:col-span-2">
                <div className="text-5xl text-[#7E2D40] absolute -mt-2 -ml-1">"</div>
                <p className="text-lg font-medium italic leading-relaxed text-[#1A365D] pl-6 mb-4">
                  My team and I have never had such honest conversations with each other, 
                  until I started working with Phillip. His ability to create a safe space 
                  where challenging topics can be discussed has transformed how we operate 
                  as a leadership team.
                </p>
                <div className="flex items-center pl-6">
                  <div className="bg-[#7E2D40] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3 text-sm">
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
                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
                  <p className="text-white italic mb-3 text-sm">
                    "I have been surprised at how comfortable it has felt being stretched. 
                    The stretch has become an additional approach rather than replacing who I am."
                  </p>
                  <div className="text-xs font-medium text-[#D4B86A]">
                    CFO, Housing & Community
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
                  <p className="text-white italic mb-3 text-sm">
                    "He is completely trustworthy and has an extremely high level of integrity, 
                    acute business insight and many years of diverse experience to draw upon."
                  </p>
                  <div className="text-xs font-medium text-[#D4B86A]">
                    Senior Civil-Servant, Government
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur">
                  <p className="text-white italic mb-3 text-sm">
                    "I have got my confidence back and my self-belief which had waned 
                    back when we first met."
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 md:text-4xl">
                A <span className="text-[#F96E1E]">global</span> perspective
              </h2>
              <p className="text-lg text-white text-opacity-90 mb-6">
                My coaching partnerships span diverse contexts and cultures, working with 
                senior leaders across continents and industries.
              </p>
              
              {/* EQ-i Squares for Global Context */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#F96E1E] p-4 rounded-lg text-white flex items-center justify-center text-center">
                  <div>
                    <div className="text-2xl mb-2">🌍</div>
                    <div className="text-sm font-medium">4 Continents</div>
                  </div>
                </div>
                <div className="aspect-square bg-[#7A9A7F] p-4 rounded-lg text-white flex items-center justify-center text-center">
                  <div>
                    <div className="text-2xl mb-2">🏢</div>
                    <div className="text-sm font-medium">5 Major Industries</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color-Coded Regional Blocks */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#F96E1E] p-4 rounded-lg text-white">
                <h4 className="font-bold mb-2">Europe</h4>
                <ul className="text-sm space-y-1">
                  <li>• UK, Ireland</li>
                  <li>• France, Belgium</li>
                  <li>• Netherlands</li>
                </ul>
              </div>
              
              <div className="bg-[#7A9A7F] p-4 rounded-lg text-white">
                <h4 className="font-bold mb-2">Middle East</h4>
                <ul className="text-sm space-y-1">
                  <li>• UAE, Saudi Arabia</li>
                  <li>• Israel</li>
                </ul>
              </div>
              
              <div className="bg-[#D4B86A] p-4 rounded-lg text-white">
                <h4 className="font-bold mb-2">Americas</h4>
                <ul className="text-sm space-y-1">
                  <li>• USA</li>
                  <li>• Argentina, Brazil</li>
                </ul>
              </div>
              
              <div className="bg-[#7E2D40] p-4 rounded-lg text-white">
                <h4 className="font-bold mb-2">Asia Pacific</h4>
                <ul className="text-sm space-y-1">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-8">
            {/* Main Content - 2/3 Asymmetric */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-[#1A365D] mb-6 md:text-5xl">
                This is your leadership.
              </h2>
              
              <div className="bg-[#F8F5EB] border-l-8 border-[#F96E1E] p-6 rounded-lg mb-6">
                <p className="text-xl text-[#1A365D] leading-relaxed">
                  You don&apos;t need a louder voice.<br />
                  You need a clearer signal.<br />
                  And a safe enough space to hear it.
                </p>
              </div>

              <p className="text-lg text-gray-600 mb-6">
                If something here resonates, let&apos;s explore what&apos;s possible. 
                No funnel. No pressure. Just a human conversation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-[#F96E1E] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E55A1A] transition-colors"
                >
                  Let&apos;s Explore Together →
                </Link>
                <Link
                  href="/this-is-personal"
                  className="border-2 border-[#7E2D40] text-[#7E2D40] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#7E2D40] hover:text-white transition-colors"
                >
                  This is Personal
                </Link>
              </div>
            </div>

            {/* CTA Side Block - 1/3 */}
            <div className="bg-[#1A365D] p-6 rounded-xl text-center text-white">
              <div className="text-4xl text-[#D4B86A] mb-4">💭</div>
              <h3 className="text-lg font-bold text-white mb-4">Ready to begin?</h3>
              <p className="text-white text-opacity-90 mb-6 text-sm">
                Every transformation begins with a single, honest conversation.
              </p>
              <div className="bg-[#F96E1E] p-4 rounded-lg">
                <p className="font-medium text-white text-sm">
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
