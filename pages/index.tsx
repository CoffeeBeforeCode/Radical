import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Global Leadership Coach"
      description="Creating space for leaders to see what gets in their way, reduce interference, and unlock their natural potential. Working with executives across Europe, Middle East, Americas, and Asia Pacific."
      canonical="/"
    >
      {/* HERO SECTION - Fixed Structure */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          {/* Headline First - Separate */}
          <div className="max-w-4xl space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
              Your Leadership.<br />
              A Role?<br />
              A Title?<br />
              <span className="font-light italic text-[#F96E1E]">A Practice!</span>
            </h1>
          </div>
          
          {/* Text Box + Image Grid */}
          <div className="w-full mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Text Box - 3/4 width */}
                <div className="md:col-span-3 rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px] md:min-h-[250px]">
                  <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                    The strongest leaders I know don&apos;t arrive; they <strong>return</strong>.<br />
                    Again and again.<br />
                    To their <strong>values</strong>.<br />
                    Their <strong>vision</strong>.<br />
                    Their <strong>self</strong>.
                  </p>
                </div>
                
                {/* Image Box - 1/4 width - NO BORDER */}
                <div className="md:col-span-1 rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/images/whats-the-story.png"
                    alt="What's the story I tell myself about who I am; is it still true?"
                    className="w-full h-auto object-contain max-w-full max-h-[150px] md:max-h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Content */}
          <div className="max-w-4xl space-y-8 mt-8">
            <p className="text-lg leading-relaxed text-gray-600">
              I create the space for that return; to what matters, what&apos;s emerging, 
              and what&apos;s getting in the way.<br />
              Not louder.<br />
              Just wiser.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Performance Equation - REDESIGNED */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
              The <a href="/perspectives/the-leadership-equation-unlocking-performance" className="text-[#F96E1E] hover:underline">Leadership Equation</a>
            </h2>
            <div className="mx-auto mb-8 max-w-2xl">
              <p className="text-xl font-['Waiting_for_the_Sunrise'] font-bold text-[#1A365D] md:text-2xl">
                Performance = Potential - Interference
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-gray-700">
                Most leaders already have the <span className="font-semibold">potential</span>.<br />
                What&apos;s getting in their way is <span className="font-semibold">interference</span>.<br />
                My work is seeing where that interference comes from.<br />
                And reducing it.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* BLUE STRIPE - What I Do - REDESIGNED */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              What I Do
            </h2>
            <div className="mx-auto max-w-4xl space-y-6 text-white">
              <p className="text-xl leading-relaxed">
                I work with leaders who have the desire and capacity for significant change,<br />
                but aren&apos;t seeing the impact they want to make.
              </p>
              <p className="text-lg leading-relaxed text-blue-200">
                Through <a href="/perspectives/embodied-perception-the-intelligence-beyond-thought" className="text-[#F96E1E] hover:underline">embodied perception</a> and <a href="/perspectives/leadership-as-a-lifelong-practice-beyond-the-workplace" className="text-[#F96E1E] hover:underline">leadership as practice</a>, I help you see what&apos;s 
                been difficult to see.<br />
                And then develop the strategies to work with it.
              </p>
              <div className="pt-4">
                <Link
                  href="/the-work"
                  className="inline-block rounded-lg bg-[#F96E1E] px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
                >
                  Explore <a href="/the-work" className="text-white hover:underline">my coaching approach</a>
                </Link>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* TESTIMONIALS - CREAM STRIPE */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
              What clients say
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-1.png"
                  alt="Self-awareness and emotional intelligence"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  This is a brilliant coach. Phillip's approach develops leaders not just functionally but personally. The impact goes way beyond the workplace.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Senior Leader<br />
                  Civil Service
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-2.png"
                  alt="Confidence and self-belief in leadership"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  I have got my confidence back and my self-belief. I am leading from a much more authentic place now.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Manufacturing
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-3.png"
                  alt="Leadership transformation and growth"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  The past eight months have seen enormous progress. Phillip has the perfect blend of business understanding and human insight.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  C-suite<br />
                  Technology
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-4.png"
                  alt="Personal and professional development"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  I have been surprised at how comfortable it has felt being stretched through this coaching process. Phillip understands business and has deep human insight.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Telecommunications
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-5.png"
                  alt="Handling change and flexibility"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  Phillip provides tailor-made support and adapts to your individual needs with a very professional and flexible approach.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Engineering
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - How I See It - REDESIGNED */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-32 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-30"></div>
            
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
                How I see it
            </h2>
            
            <div className="mx-auto max-w-4xl mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    I work in frameworks but never formulas. These are tools I return to often: 
                    not as answers, but as <span className="font-semibold text-[#F96E1E]">invitations</span>.
                </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column - Emotional Intelligence */}
            <div className="space-y-6">
              <div className="rounded-lg bg-[#F8F5EB] p-8 border-l-4 border-[#7E2D40]">
                <h3 className="mb-4 text-xl font-bold text-[#1A365D]">
                  Emotional Intelligence
                </h3>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Not just <em>understanding</em> your emotions, but developing the capacity to <strong>work with them</strong> as information rather than being driven by them.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>→ Self-awareness in the moment</p>
                  <p>→ Managing reactivity</p>
                  <p>→ Reading the emotional field of others</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#F8F5EB] p-8 border-l-4 border-[#7E2D40]">
                <h3 className="mb-4 text-xl font-bold text-[#1A365D]">
                  Cross-Cultural Intelligence
                </h3>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Leading across cultures requires more than cultural knowledge. It demands <strong>cultural humility</strong> and the ability to adapt your leadership style contextually.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>→ Recognising cultural assumptions</p>
                  <p>→ Adaptive communication styles</p>
                  <p>→ Building trust across difference</p>
                </div>
              </div>
            </div>

            {/* Right Column - Leadership Development */}
            <div className="space-y-6">
              <div className="rounded-lg bg-[#F8F5EB] p-8 border-l-4 border-[#7E2D40]">
                <h3 className="mb-4 text-xl font-bold text-[#1A365D]">
                  Leadership Development
                </h3>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Real development happens when we stop trying to <em>become</em> leaders and start <strong>returning</strong> to who we already are beneath the interference.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>→ Authentic leadership presence</p>
                  <p>→ Values-based decision making</p>
                  <p>→ Sustainable performance patterns</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#F8F5EB] p-8 border-l-4 border-[#7E2D40]">
                <h3 className="mb-4 text-xl font-bold text-[#1A365D]">
                  Executive Coaching
                </h3>
                <p className="mb-4 text-base leading-relaxed text-gray-700">
                  Not telling you what to do, but creating the conditions for you to see <strong>what you already know</strong> and haven&apos;t been able to access.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>→ Reducing interference to performance</p>
                  <p>→ Developing embodied awareness</p>
                  <p>→ Strategic thinking with emotional intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* BURGUNDY STRIPE - Personal Note - REDESIGNED */}
      <section className="w-full bg-[#7E2D40] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              A personal note
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I started this work because I was a sensitive boy who learned to see sensitivity as a weakness.<br />
                Until I discovered it was actually a <span className="font-semibold text-orange-300">superpower</span>.
              </p>
              <p className="text-xl font-['Waiting_for_the_Sunrise'] font-bold">
                The same interference that limits us<br />
                often holds our greatest strength.
              </p>
              <p className="text-pink-200">
                My work is helping you find yours.
              </p>
              <div className="pt-6">
                <Link
                  href="/this-is-personal"
                  className="inline-block rounded-lg border-2 border-orange-300 px-8 py-3 font-semibold text-orange-300 transition-colors hover:bg-orange-300 hover:text-[#7E2D40]"
                >
                  Read the full story
                </Link>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* FINAL CTA - WHITE STRIPE */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
              Ready to begin?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              If you&apos;re curious about reducing the interference that&apos;s getting in the way of your leadership,<br />
              let&apos;s have a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Get in touch
            </Link>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
