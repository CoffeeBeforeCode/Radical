import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout
      title="Global Leadership Coach"
      description="Creating space for leaders to see what gets in their way, reduce interference, and unlock their natural potential. Working with executives across Europe, Middle East, Americas, and Asia Pacific."
      canonical="/"
    >
      {/* FULL-WIDTH HERO - Accounts for header */}
      <section className="relative w-full min-h-screen bg-white pt-20">
        <div className="flex min-h-[calc(100vh-5rem)] items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* Hero Content - NO SIDEBAR */}
              <div className="max-w-4xl space-y-8">
                <h1 className="font-['Waiting_for_the_Sunrise'] text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl">
                  Your Leadership.<br />
                  A Role?<br />
                  A Title?<br />
                  <span className="font-light italic text-[#F96E1E]">A Practice!</span>
                </h1>
              </div>
              
              {/* FULL WIDTH Quote + EQ Square - Perfect sequence */}
              <div className="w-full mt-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-4 items-stretch">
                    <div className="rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 md:col-span-3 h-full flex items-center">
                      <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                        The strongest leaders I know don&apos;t arrive; they <strong>return</strong>.<br />
                        Again and again.<br />
                        To their <strong>values</strong>.<br />
                        Their <strong>vision</strong>.<br />
                        Their <strong>self</strong>.
                      </p>
                    </div>
                    
                    {/* EQ Square - 25% width */}
                    <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white flex items-center justify-center md:col-span-1">
                      <p className="text-sm font-medium italic text-center">
                        &ldquo;What&apos;s the story I tell myself about who I am; is it still true?&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rest of hero content */}
              <div className="max-w-4xl space-y-8 mt-8">
                <p className="text-lg leading-relaxed text-gray-600">
                  I create the space for that return; to what matters, what&apos;s emerging, 
                  and what&apos;s getting in the way.<br />
                  Not louder.<br />
                  Just wiser.
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
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP AS PRACTICE - Philosophy Section */}
      <section className="w-full bg-[#F8F5EB] py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              Leadership is a <span className="text-[#F96E1E]">practice</span>, not a destination.
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              Like yoga. Like meditation. Something you return to daily with intention, 
              not something you achieve once and forget.
            </p>
          </div>
        </div>
      </section>

      {/* COMPACT EQ SQUARES SECTION - Only 4 squares */}
      <section className="w-full bg-white py-12 md:py-16">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              Questions that matter
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              These aren&apos;t interview questions. They&apos;re invitations to notice 
              what&apos;s already there, waiting&nbsp;to&nbsp;be&nbsp;seen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* FIRST IMAGE - Replace first EQ square with bubble-1.png */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 flex items-center justify-center relative">
              <Image
                src="/images/bubble-1.png"
                alt="Leadership reflection bubble"
                width={200}
                height={200}
                className="object-contain w-full h-full p-2"
                unoptimized
              />
            </div>
            
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;Where do I feel most connected; what helps make that happen?&rdquo;
              </p>
            </div>

            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;What would it take to let more of the real me come through?&rdquo;
              </p>
            </div>

            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;Am I trusting my own judgement, or waiting for a green light?&rdquo;
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Leadership Equation */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            {/* Equation Display - 1/3 */}
            <div className="text-center">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <div className="mb-4 font-['Waiting_for_the_Sunrise'] text-5xl font-bold text-[#F96E1E] md:text-6xl">
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
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">PE</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Performance</h3>
                  <p className="text-sm text-white/80">Observable results and impact</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">PO</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Potential</h3>
                  <p className="text-sm text-white/80">Innate capabilities within you</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">I</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Interference</h3>
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

      {/* CREAM STRIPE - Interference Examples with Distributed EQ */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              What gets in your <span className="text-[#F96E1E]">way</span>?
            </h2>
            <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
              Everyone has their &ldquo;stuff.&rdquo; The question is whether dealing with it now 
              is the best use&nbsp;of&nbsp;your&nbsp;energy.
            </p>
          </div>

          {/* Aga-Style Boxy Grid with EQ Square */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Large Block - Inner Dialogue */}
            <div className="rounded-lg bg-[#1A365D] p-6 text-white shadow-lg md:col-span-2 lg:col-span-2">
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

            {/* EQ Square - Distributed */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 text-white">
              <p className="text-sm font-medium italic">
                &ldquo;How do I handle it when plans change?&rdquo;
              </p>
            </div>

            {/* Standard block */}
            <div className="rounded-lg border-l-4 border-[#F96E1E] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">⚖️</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Competing Values</h3>
              <p className="text-sm text-gray-600">
                Autonomy vs belonging. Care vs performance. Values pulling different directions.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-[#1A365D] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">🌪️</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Environmental Blockers</h3>
              <p className="text-sm text-gray-600">
                Toxic team dynamics, silos, excessive admin that drains energy.
              </p>
            </div>

            {/* Unhelpful Narratives - Large Block */}
            <div className="rounded-lg bg-[#F96E1E] p-6 text-white md:col-span-2 lg:col-span-2">
              <div className="mb-4 text-3xl">📖</div>
              <h3 className="mb-4 text-xl font-bold">Unhelpful Narratives</h3>
              <div className="space-y-2">
                <p className="text-white/90">&ldquo;I must always have the answer.&rdquo;</p>
                <p className="text-white/90">&ldquo;If I slow down, I&apos;ll fall behind.&rdquo;</p>
                <p className="text-white/90">&ldquo;I&apos;m not strategic enough.&rdquo;</p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - Approach Frameworks with EQ Integration */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              How I see it
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700">
              I work in frameworks — but never formulas. These are tools I return to often: 
              not as answers, but as <span className="font-semibold text-[#F96E1E]">invitations</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-[#F8F5EB] p-6 md:col-span-2 lg:col-span-2">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-[#1A365D] text-xl text-white">👁️</div>
                <h3 className="text-lg font-bold text-[#1A365D]">Observation First</h3>
              </div>
              <p className="text-gray-700">
                We start by noticing patterns, dynamics, friction before we move. 
                Sometimes the most important insights arise in the silence between words.
              </p>
            </div>

            {/* SECOND IMAGE - Replace EQ square with test-image.png */}
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center relative">
              <Image
                src="/images/test-image.png"
                alt="Leadership coaching reflection"
                width={200}
                height={200}
                className="object-contain w-full h-full p-2"
                unoptimized
              />
            </div>

            <div className="rounded-lg bg-[#F8F5EB] p-4">
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#F96E1E] text-lg text-white">🎯</div>
              <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Embodied Perception</h3>
              <p className="text-xs text-gray-600">
                You lead with head, heart, and gut. We work with all three.
              </p>
            </div>

            <div className="rounded-lg bg-[#F8F5EB] p-4">
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#1A365D] text-lg text-white">🔄</div>
              <h3 className="mb-2 text-sm font-bold text-[#1A365D]">Values in Motion</h3>
              <p className="text-xs text-gray-600">
                Mapping what truly matters through constellation work.
              </p>
            </div>

            <div className="rounded-lg bg-[#1A365D] p-6 text-white md:col-span-2 lg:col-span-2">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex size-12 items-center justify-center rounded-full bg-[#F96E1E] text-xl text-white">⚖️</div>
                <h3 className="text-lg font-bold">Sitting with Tension</h3>
              </div>
              <p className="text-white/90">
                Some tensions aren&apos;t meant to be solved. They&apos;re meant to be understood. 
                Emotional discernment over reaction.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Testimonials */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              Leaders reflect
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              This work isn&apos;t loud. It doesn&apos;t need to be.<br />
              It resonates when you&apos;re ready to hear yourself more clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative rounded-lg bg-white p-6 shadow-sm">
              <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">&ldquo;</div>
              <p className="mb-4 pl-6 text-lg leading-relaxed italic">
                My team and I have never had such honest conversations with each other, until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team.
              </p>
              <div className="text-right text-sm font-medium text-[#7E2D40] not-italic">
                Country Head<br />
                Telecommunications
              </div>
            </div>

            <div className="relative rounded-lg bg-white p-6 shadow-sm">
              <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">&ldquo;</div>
              <p className="mb-4 pl-6 text-lg leading-relaxed italic">
                I have been surprised at how comfortable it has felt being stretched through this coaching process. The stretch has become an additional approach rather than replacing who I am; expanding my capabilities while preserving my authentic self.
              </p>
              <div className="text-right text-sm font-medium text-[#7E2D40] not-italic">
                Chief Financial Officer<br />
                Housing and Community Development
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Global Reach */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Global perspective, personal connection
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/90 leading-relaxed">
              My coaching partnerships span diverse contexts and cultures, working with senior leaders across continents and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-3 text-2xl">🇪🇺</div>
              <h3 className="mb-2 font-semibold text-white">Europe</h3>
              <p className="text-sm text-white/80">UK, Ireland, France, Belgium, Netherlands</p>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-3 text-2xl">🕌</div>
              <h3 className="mb-2 font-semibold text-white">Middle East</h3>
              <p className="text-sm text-white/80">UAE, Saudi Arabia, Israel</p>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-3 text-2xl">🌎</div>
              <h3 className="mb-2 font-semibold text-white">Americas</h3>
              <p className="text-sm text-white/80">USA, Argentina, Brazil</p>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-3 text-2xl">🏯</div>
              <h3 className="mb-2 font-semibold text-white">Asia Pacific</h3>
              <p className="text-sm text-white/80">India, Singapore</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="mx-auto max-w-2xl rounded-lg bg-[#F96E1E] p-6">
              <p className="text-lg font-medium text-white">
                This global experience deepens my understanding of leadership challenges across different cultural contexts, enriching each coaching partnership while maintaining focus on your unique journey.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* TANGERINE STRIPE - Bold CTA Finish */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              This is your leadership.
            </h2>
            
            <div className="mx-auto mb-6 max-w-2xl rounded-lg bg-white p-6">
              <p className="text-xl font-medium leading-relaxed text-[#1A365D]">
                You don&apos;t need a <strong>louder</strong> voice.<br />
                You need a <strong>clearer</strong> signal.<br />
                And a safe enough space to <strong>hear</strong> it.
              </p>
            </div>

            <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-white/90">
              If something here resonates, let&apos;s explore what&apos;s possible.<br />
              No funnel.<br />
              No pressure.<br />
              Just a human conversation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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
        </PageLayout>
      </section>
    </Layout>
  )
}
