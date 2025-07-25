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
          <div className="min-h-screen grid items-center">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
              <div className="space-y-8 lg:col-span-2">
                <h1 className="text-6xl font-bold leading-none tracking-tight text-[#1A365D] md:text-8xl lg:text-9xl">
                  Not a title.<br />
                  Not a goal.<br />
                  <span className="text-[#F96E1E] font-light italic">A practice.</span>
                </h1>
                
                <div className="rounded-lg border-l-8 border-[#7E2D40] bg-[#F8F5EB] p-8">
                  <p className="text-2xl font-light leading-relaxed text-[#1A365D] md:text-3xl">
                    The strongest leaders I know don&apos;t arrive — they <strong>return</strong>.<br />
                    Again and again. To their values. Their vision. Their self.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#F96E1E] px-12 py-6 text-xl font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#E55A1A] hover:shadow-2xl"
                  >
                    Begin Here →
                  </Link>
                  <Link
                    href="/the-work"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-[#1A365D] bg-transparent px-12 py-6 text-xl font-semibold text-[#1A365D] transition-all duration-300 hover:bg-[#1A365D] hover:text-white"
                  >
                    Explore the Work
                  </Link>
                </div>
              </div>

              <div className="relative lg:col-span-1">
                <div className="mb-6 rotate-2 rounded-3xl bg-[#7E2D40] p-8 text-white shadow-2xl">
                  <p className="text-lg font-medium italic">
                    &quot;I create the space for that return — to what matters, what&apos;s emerging, and what&apos;s getting in the way.&quot;
                  </p>
                </div>
                
                <div className="absolute -right-8 -top-4 max-w-xs -rotate-12 rounded-2xl bg-[#7A9A7F] p-4 text-white shadow-lg">
                  <p className="text-sm italic">&quot;What&apos;s the story I tell myself about who I am?&quot;</p>
                </div>
                
                <div className="absolute -bottom-6 -left-4 max-w-xs rotate-6 rounded-2xl bg-[#F96E1E] p-4 text-white shadow-lg">
                  <p className="text-sm italic">&quot;What helps me choose well when it&apos;s hard?&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* LEADERSHIP EQUATION - Bold Feature Box */}
      <Block background="navy" spacing="spacious">
        <PageLayout>
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-5">
            <div className="text-center lg:col-span-2 lg:text-left">
              <div className="rounded-2xl bg-white/10 p-12 backdrop-blur">
                <div className="mb-4 text-8xl font-bold font-mono tracking-wider text-[#D4B86A] md:text-9xl">
                  PE = PO - I
                </div>
                <p className="text-xl font-medium text-[#D4B86A]">
                  The Leadership Equation
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-3">
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Most leaders already have the <span className="text-[#F96E1E]">potential</span>.
              </h2>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-3xl text-[#F96E1E]">PE</div>
                  <h3 className="mb-2 font-semibold text-white">Performance</h3>
                  <p className="text-sm text-white/80">The observable results and impact you create</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-3xl text-[#D4B86A]">PO</div>
                  <h3 className="mb-2 font-semibold text-white">Potential</h3>
                  <p className="text-sm text-white/80">Your innate capabilities and possibilities</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-3xl text-[#F96E1E]">I</div>
                  <h3 className="mb-2 font-semibold text-white">Interference</h3>
                  <p className="text-sm text-white/80">The &quot;stuff&quot; that gets in your way</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#F96E1E] p-6 text-white">
                <p className="text-lg font-medium">
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
            <h2 className="mb-6 text-4xl font-bold text-[#1A365D] md:text-5xl">
              What gets in your way?
            </h2>
            <p className="max-w-3xl text-xl text-[#4A4A4A]">
              Everyone has their &quot;stuff.&quot; The question is whether dealing with it now 
              is the best use of your energy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[#7E2D40] p-8 text-white shadow-xl md:col-span-2">
              <div className="mb-4 text-5xl">🧠</div>
              <h3 className="mb-4 text-2xl font-bold">Inner Dialogue</h3>
              <p className="mb-4 text-white/90">
                The voice of imposter syndrome: &quot;I don&apos;t really belong at this level.&quot;
              </p>
              <p className="mb-4 text-white/90">
                Perfectionism: &quot;Anything less than flawless is failure.&quot;
              </p>
              <p className="text-sm text-white/80">
                That internal commentary running through your mind, creating doubt where there should be confidence.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border-l-4 border-[#F96E1E] bg-white p-6 shadow-lg">
                <div className="mb-3 text-3xl">⚖️</div>
                <h3 className="mb-2 text-xl font-semibold text-[#1A365D]">Competing Values</h3>
                <p className="text-sm text-[#4A4A4A]">
                  Autonomy versus belonging. Care versus performance. 
                  Values pulling in different directions.
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-[#7A9A7F] bg-white p-6 shadow-lg">
                <div className="mb-3 text-3xl">🌪️</div>
                <h3 className="mb-2 text-xl font-semibold text-[#1A365D]">Environmental Blockers</h3>
                <p className="text-sm text-[#4A4A4A]">
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
            <h2 className="mb-6 text-4xl font-bold text-[#1A365D] md:text-5xl">
              How I see it
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-[#4A4A4A]">
              I work in frameworks — but never formulas. These are tools I return to often: 
              not as answers, but as invitations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7A9A7F] text-2xl text-white">👁️</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Observation First</h3>
              <p className="text-sm text-[#4A4A4A]">
                We start by noticing. Patterns, dynamics, friction. Before we move, we understand.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F96E1E] text-2xl text-white">🎯</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Embodied Perception</h3>
              <p className="text-sm text-[#4A4A4A]">
                You lead with your head, heart, and gut. We&apos;ll work with all three.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7E2D40] text-2xl text-white">🔄</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Values in Motion</h3>
              <p className="text-sm text-[#4A4A4A]">
                We surface what really matters — not just what sounds good.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4B86A] text-2xl text-white">⚖️</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Sitting with Tension</h3>
              <p className="text-sm text-[#4A4A4A]">
                Some tensions aren&apos;t meant to be solved. They&apos;re meant to be understood.
              </p>
            </div>

            <div className="rounded-xl bg-[#F8F5EB] p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A365D] text-2xl text-white">✨</div>
              <h3 className="mb-3 font-bold text-[#1A365D]">Reducing Interference</h3>
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
          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Reflections from leaders
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <div className="mb-4 text-6xl text-[#7E2D40]">&quot;</div>
              <p className="mb-6 text-xl font-medium italic leading-relaxed text-[#1A365D]">
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

            <div className="space-y-6">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <p className="mb-4 text-white italic">
                  &quot;I have been surprised at how comfortable it has felt being stretched. 
                  Expanding my capabilities while preserving my authentic self.&quot;
                </p>
                <div className="text-sm font-medium text-[#D4B86A]">
                  CFO, Housing & Community
                </div>
              </div>

              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <p className="mb-4 text-white italic">
                  &quot;He has the ability to swiftly and accurately pinpoint areas for development. 
                  Completely trustworthy with extremely high integrity.&quot;
                </p>
                <div className="text-sm font-medium text-[#D4B86A]">
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
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
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
                  <div className="mb-3 text-3xl text-[#D4B86A]">🌍</div>
                  <h3 className="mb-2 font-semibold text-white">4 Regions</h3>
                  <p className="text-sm text-white/80">Europe, Middle East, Americas, Asia Pacific</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 text-3xl text-[#D4B86A]">🏢</div>
                  <h3 className="mb-2 font-semibold text-white">5 Industries</h3>
                  <p className="text-sm text-white/80">Technology, Healthcare, Finance, Manufacturing, Government</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#F96E1E] p-6 text-white">
                <h4 className="mb-3 font-bold text-white">Europe</h4>
                <ul className="space-y-1 text-sm">
                  <li>• UK, Ireland</li>
                  <li>• France, Belgium</li>
                  <li>• Netherlands</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#7A9A7F] p-6 text-white">
                <h4 className="mb-3 font-bold text-white">Middle East</h4>
                <ul className="space-y-1 text-sm">
                  <li>• UAE, Saudi Arabia</li>
                  <li>• Israel</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#D4B86A] p-6 text-white">
                <h4 className="mb-3 font-bold text-white">Americas</h4>
                <ul className="space-y-1 text-sm">
                  <li>• USA</li>
                  <li>• Argentina, Brazil</li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-[#7E2D40] p-6 text-white">
                <h4 className="mb-3 font-bold text-white">Asia Pacific</h4>
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
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl">
                This is your leadership.
              </h2>
              
              <div className="mb-8 rounded-2xl border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-8">
                <p className="text-2xl leading-relaxed text-[#1A365D]">
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
                  className="inline-flex items-center justify-center rounded-lg bg-[#F96E1E] px-12 py-6 text-xl font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#E55A1A] hover:shadow-2xl"
                >
                  Let&apos;s Explore Together →
                </Link>
                <Link
                  href="/this-is-personal"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-[#7E2D40] bg-transparent px-12 py-6 text-xl font-semibold text-[#7E2D40] transition-all duration-300 hover:bg-[#7E2D40] hover:text-white"
                >
                  This is Personal
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-[#1A365D] p-8 text-center text-white shadow-2xl">
              <div className="mb-4 text-5xl text-[#D4B86A]">💭</div>
              <h3 className="mb-4 text-xl font-bold text-white">Ready to begin?</h3>
              <p className="mb-6 text-white/90">
                Every transformation begins with a single, honest conversation.
              </p>
              <div className="rounded-lg bg-[#F96E1E] p-4 text-white">
                <p className="font-medium text-white">
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
