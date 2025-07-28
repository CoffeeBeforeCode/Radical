/**
 * FIXED: Full-Width Hero Section
 * Your current index with ONLY the hero section made truly full-width
 * Everything else remains exactly as you have it
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
      {/* FIXED: FULL-WIDTH HERO - No PageLayout wrapper */}
      <section className="w-full min-h-screen bg-white flex items-center">
        {/* Direct container without PageLayout constraint */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Main Hero Content - 3/5 Asymmetric */}
            <div className="space-y-6 lg:col-span-3">
              <h1 className="text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl">
                Not a title.<br />
                Not a goal.<br />
                <span className="font-light italic text-[#F96E1E]">A practice.</span>
              </h1>
              
              <div className="rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6">
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
                  The Work
                </Link>
              </div>
            </div>

            {/* EQ Square Sidebar - 2/5 */}
            <div className="space-y-4 lg:col-span-2">
              <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &ldquo;What&apos;s the story I tell myself about who I am; is it still true?&rdquo;
                </p>
              </div>
              
              <div className="aspect-square rounded-lg bg-[#1A365D] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &ldquo;What helps me choose well, especially when it&apos;s hard?&rdquo;
                </p>
              </div>
              
              <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &ldquo;What do I reach for when things feel too much?&rdquo;
                </p>
              </div>

              <div className="aspect-square rounded-lg bg-[#1A365D] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &ldquo;Where do I feel most connected; what helps make that happen?&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL YOUR EXISTING SECTIONS BELOW - UNCHANGED */}
      {/* NAVY STRIPE - Leadership Equation */}
      <section className="w-full bg-[#1A365D] py-8 md:py-12">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            {/* Equation Display - 1/3 */}
            <div className="text-center">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <div className="mb-4 font-mono text-5xl font-bold text-[#F96E1E] md:text-6xl">
                  PE = PO - I
                </div>
                <p className="text-lg font-semibold text-white">
                  The Leadership Equation
                </p>
              </div>
            </div>

            {/* Explanation - 2/3 Asymmetric */}
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Most leaders already have the <span className="text-[#F96E1E]">potential</span>.
              </h2>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <div className="mb-2 text-xl text-[#F96E1E]">PE</div>
                  <h3 className="mb-2 font-semibold text-white">Performance</h3>
                  <p className="text-sm text-white/80">Observable results and impact</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <div className="mb-2 text-xl text-white">PO</div>
                  <h3 className="mb-2 font-semibold text-white">Potential</h3>
                  <p className="text-sm text-white/80">Innate capabilities within you</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                  <div className="mb-2 text-xl text-[#F96E1E]">I</div>
                  <h3 className="mb-2 font-semibold text-white">Interference</h3>
                  <p className="text-sm text-white/80">The &ldquo;stuff&rdquo; getting in your way</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#F96E1E] p-4">
                <p className="font-medium text-white">
                  When we reduce what&apos;s in the way, performance naturally rises to meet potential.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Interference Examples in Boxy Grid */}
      <section className="w-full bg-[#F8F5EB] py-8 md:py-12">
        <PageLayout>
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              What gets in your way?
            </h2>
            <p className="max-w-3xl text-lg text-gray-600">
              Everyone has their &ldquo;stuff.&rdquo; The question is whether dealing with it now 
              is the best use of your energy.
            </p>
          </div>

          {/* Aga-Style Boxy Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Large Block - Inner Dialogue */}
            <div className="rounded-lg bg-[#1A365D] p-6 text-white shadow-lg md:col-span-2">
              <div className="mb-4 text-3xl">🧠</div>
              <h3 className="mb-4 text-xl font-bold">Inner Dialogue</h3>
              <div className="space-y-3">
                <p className="text-white/90">
                  &ldquo;I don&apos;t really belong at this level.&rdquo;
                </p>
                <p className="text-white/90">
                  &ldquo;Anything less than flawless is failure.&rdquo;
                </p>
                <p className="text-sm text-white/80">
                  That internal commentary creating doubt where there should be confidence.
                </p>
              </div>
            </div>

            {/* EQ Square */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;What would it take to let more of the real me come through?&rdquo;
              </p>
            </div>

            {/* Competing Values */}
            <div className="rounded-lg border-l-4 border-[#F96E1E] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">⚖️</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Competing Values</h3>
              <p className="text-sm text-gray-600">
                Autonomy vs belonging. Care vs performance. Values pulling different directions.
              </p>
            </div>

            {/* Environmental Blockers */}
            <div className="rounded-lg border-l-4 border-[#1A365D] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">🌪️</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Environmental Blockers</h3>
              <p className="text-sm text-gray-600">
                Toxic team dynamics, silos, excessive admin that drains energy.
              </p>
            </div>

            {/* Unhelpful Narratives - Large Block */}
            <div className="rounded-lg bg-[#F96E1E] p-6 text-white md:col-span-2">
              <div className="mb-4 text-3xl">📖</div>
              <h3 className="mb-4 text-xl font-bold">Unhelpful Narratives</h3>
              <div className="space-y-2">
                <p className="text-white/90">&ldquo;I must always have the answer.&rdquo;</p>
                <p className="text-white/90">&ldquo;If I slow down, I&apos;ll fall behind.&rdquo;</p>
                <p className="text-white/90">&ldquo;I&apos;m not strategic enough.&rdquo;</p>
              </div>
            </div>

            {/* Another EQ Square */}
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;Am I trusting my own judgement, or waiting for a green light?&rdquo;
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - Approach Frameworks with EQ Squares */}
      <section className="w-full bg-white py-8 md:py-12">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              How I see it
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              I work in frameworks — but never formulas. These are tools I return to often: 
              not as answers, but as invitations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {/* Framework Block */}
            <div className="rounded-lg bg-[#F8F5EB] p-4 text-center md:col-span-2">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#1A365D] text-xl text-white">👁️</div>
              <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Observation First</h3>
              <p className="text-xs text-gray-600">
                We start by noticing patterns, dynamics, friction before we move.
              </p>
            </div>

            {/* EQ Square */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;Can I name what I&apos;m really feeling, underneath it all?&rdquo;
              </p>
            </div>

            {/* Framework Block */}
            <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#F96E1E] text-xl text-white">🎯</div>
              <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Embodied Perception</h3>
              <p className="text-xs text-gray-600">
                You lead with head, heart, and gut. We work with all three.
              </p>
            </div>

            {/* Framework Block - Large */}
            <div className="rounded-lg bg-[#F8F5EB] p-4 text-center md:col-span-2">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#1A365D] text-xl text-white">🔄</div>
              <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Values in Motion</h3>
              <p className="text-xs text-gray-600">
                We surface what really matters — not just what sounds good. Through constellation work, we make visible the tensions and alignments that shape every decision.
              </p>
            </div>

            {/* Framework Block */}
            <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#F96E1E] text-xl text-white">⚖️</div>
              <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Sitting with Tension</h3>
              <p className="text-xs text-gray-600">
                Some tensions aren&apos;t meant to be solved, but understood.
              </p>
            </div>

            {/* EQ Square */}
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;How do I handle it when plans change?&rdquo;
              </p>
            </div>

            {/* Framework Block */}
            <div className="rounded-lg bg-[#F8F5EB] p-4 text-center">
              <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#1A365D] text-xl text-white">✨</div>
              <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Reducing Interference</h3>
              <p className="text-xs text-gray-600">
                When interference clears, performance meets potential.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Real Testimonials Mixed Layout */}
      <section className="w-full bg-[#1A365D] py-8 md:py-12">
        <PageLayout>
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Reflections from leaders
          </h2>

          {/* Asymmetric Testimonial Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Large Testimonial */}
            <div className="rounded-lg bg-white p-6 shadow-lg md:col-span-2">
              <div className="absolute -ml-1 -mt-2 text-4xl text-[#1A365D]">&ldquo;</div>
              <p className="mb-4 pl-6 text-lg font-medium italic leading-relaxed text-[#1A365D]">
                My team and I have never had such honest conversations with each other, 
                until I started working with Phillip. His ability to create a safe space 
                where challenging topics can be discussed has transformed how we operate 
                as a leadership team.
              </p>
              <div className="pl-6 text-right">
                <div className="font-semibold text-[#1A365D]">Country Head</div>
                <div className="text-sm text-gray-600">Telecommunications</div>
              </div>
            </div>

            {/* Stacked Content */}
            <div className="space-y-4">
              {/* EQ Square */}
              <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &ldquo;What am I still hopeful about, even if I don&apos;t say it out loud?&rdquo;
                </p>
              </div>

              {/* Small Testimonial */}
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur">
                <p className="mb-3 text-sm italic text-white">
                  &ldquo;I have been surprised at how comfortable it has felt being stretched. 
                  The stretch has become an additional approach rather than replacing who I am.&rdquo;
                </p>
                <div className="text-xs font-medium text-[#F96E1E]">
                  CFO, Housing & Community
                </div>
              </div>
            </div>

            {/* Another testimonial */}
            <div className="rounded-lg bg-white p-4 shadow">
              <div className="absolute -ml-1 -mt-2 text-3xl text-[#1A365D]">&ldquo;</div>
              <p className="mb-3 pl-4 text-sm italic leading-relaxed text-[#1A365D]">
                Phillip is one of the most talented and experienced professionals I have ever met. 
                He is completely trustworthy and has an extremely high level of integrity.
              </p>
              <div className="pl-4 text-right">
                <div className="text-xs font-semibold text-[#1A365D]">Senior Civil-Servant</div>
                <div className="text-xs text-gray-600">Government</div>
              </div>
            </div>

            {/* Recovery testimonial */}
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur md:col-span-2">
              <p className="mb-3 text-sm italic text-white">
                &ldquo;Mentally, I am so pleased I arrived at this point with your coaching 
                for which I am so grateful. I have got my confidence back and my self-belief 
                which had waned back when we first met.&rdquo;
              </p>
              <div className="text-xs font-medium text-[#F96E1E]">
                Country Head, Manufacturing
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* TANGERINE STRIPE - Bold CTA Finish */}
      <section className="w-full bg-[#F96E1E] py-8 md:py-12">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5">
            {/* Main CTA Content - 3/5 */}
            <div className="lg:col-span-3">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                This is your leadership.
              </h2>
              
              <div className="mb-6 rounded-lg bg-white p-6">
                <p className="text-xl font-medium leading-relaxed text-[#1A365D]">
                  You don&apos;t need a louder voice.<br />
                  You need a clearer signal.<br />
                  And a safe enough space to hear it.
                </p>
              </div>

              <p className="mb-6 text-lg text-white/90">
                If something here resonates, let&apos;s explore what&apos;s possible. 
                No funnel. No pressure. Just a human conversation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#F96E1E] transition-colors hover:bg-gray-100"
                >
                  Let&apos;s Explore Together →
                </Link>
                <Link
                  href="/this-is-personal"
                  className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#F96E1E]"
                >
                  This is Personal
                </Link>
              </div>
            </div>

            {/* Closing EQ Squares - 2/5 */}
            <div className="space-y-4 lg:col-span-2">
              <div className="aspect-square rounded-lg bg-white p-4">
                <div className="mb-2 text-2xl text-[#F96E1E]">💭</div>
                <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Ready to begin?</h3>
                <p className="text-xs text-gray-600">
                  Every transformation begins with a single, honest conversation.
                </p>
              </div>

              <div className="aspect-square rounded-lg bg-[#1A365D] p-4 text-white">
                <p className="text-sm font-medium italic">
                  &ldquo;Leadership is a <strong>practice</strong>, not a destination&rdquo;
                </p>
              </div>

              <div className="aspect-square rounded-lg bg-white/20 p-4 text-white backdrop-blur">
                <div className="mb-2 text-2xl">🌱</div>
                <p className="text-xs font-medium">
                  Creating space for what wants to emerge
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
