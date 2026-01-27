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
                    src="/Images/whats-the-story.png"
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
          {/* CTAs - Completely Outside */}
          <div className="mx-auto max-w-7xl mt-8 px-4 sm:px-6 lg:px-8">
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
        </PageLayout>
      </section>
      {/* LEADERSHIP AS PRACTICE */}
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
      {/* THE QUIET QUESTIONS */}
      <section className="w-full bg-white py-12 md:py-16">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              The quiet questions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              What&apos;s already there, waiting for the safe space to be spoken out loud and truly be heard.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
              <img
                src="/Images/Bubble-1.png"
                alt="Self-perception reflection"
                className="size-full object-contain"
              />
            </div>
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
              <img
                src="/Images/Bubble-2.png"
                alt="Connection and relationships"
                className="size-full object-contain"
              />
            </div>
            <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
              <img
                src="/Images/Bubble-3.png"
                alt="Authentic self-expression"
                className="size-full object-contain"
              />
            </div>
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
              <img
                src="/Images/Bubble-4.png"
                alt="Decision-making and judgment"
                className="size-full object-contain"
              />
            </div>
          </div>
        </PageLayout>
      </section>
      {/* NAVY STRIPE - Leadership Equation */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
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
                  <p className="text-sm text-white/80">The stuff getting in your way</p>
                </div>
              </div>
              <div className="rounded-lg bg-[#F96E1E] p-6">
                <h3 className="mb-3 text-lg font-bold text-white">What gets in the way?</h3>
                <div className="space-y-2 text-sm text-white/90">
                  <p><strong>Conflicting values:</strong> Autonomy vs belonging, care vs performance</p>
                  <p><strong>Environmental blockers:</strong> Toxic team dynamics, silos, excessive admin</p>
                  <p><strong>Unhelpful narratives:</strong> I must always have the answer, I&apos;m not strategic enough</p>
                  <p><strong>Inner dialogue:</strong> The voice creating doubt where there should be confidence</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20">
                  <p className="font-medium text-white">
                    When we reduce what&apos;s in the way, performance naturally rises to meet potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
      {/* CREAM STRIPE - Call & Response */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8">
            <h2 className="mb-4 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              What gets in your <span className="text-[#F96E1E]">way</span>?
            </h2>
            <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
              The internal conversations that create interference, and the leaders who have found their way through.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/Images/Call-self-doubt.png"
                  alt="Internal struggle with belonging"
                  className="size-full object-contain"
                />
              </div>
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  I have got my confidence back and my self-belief which had waned back when we first met.
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
                  src="/Images/Call-authority-burden.png"
                  alt="Leadership pressure and expectations"
                  className="size-full object-contain"
                />
              </div>
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  My team and I have never had such honest conversations with each other, until I started working with Phillip.
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
                  src="/Images/Bubble-5.png"
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
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                How I see it
            </h2>
            <div className="mx-auto max-w-4xl mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    I work in frameworks but never formulas. These are tools I return to often: 
                    not as answers, but as <span className="font-semibold text-[#F96E1E]">invitations</span>.
                </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-2 relative rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-full min-h-[280px] p-8 flex items-center justify-center bg-[#1A365D]">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white tracking-wide mb-4">Observation First</h3>
                        <p className="text-white/90 text-base leading-relaxed">
                            We start by noticing patterns, dynamics, friction before we move. 
                            Sometimes the most important insights arise in the silence between words.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden bg-[#F8F5EB] rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F96E1E] to-[#1A365D]"></div>
                <div className="h-full flex flex-col">
                    <div className="aspect-square rounded-lg bg-[#F8F5EB] p-3 mb-4 flex items-center justify-center">
                        <img
                            src="/Images/Bubble-8.png"
                            alt="Embodied perception"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A365D] mb-3">Embodied Perception</h3>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                        You lead with head, heart, and gut. We work with all three.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden bg-[#F8F5EB] rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F96E1E] to-[#1A365D]"></div>
                <div className="h-full flex flex-col">
                    <div className="aspect-square rounded-lg bg-[#1A365D] p-3 mb-4 flex items-center justify-center">
                        <img
                            src="/Images/Bubble-9.png"
                            alt="Values in motion"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A365D] mb-3">Values in Motion</h3>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                        Mapping what truly matters through constellation work.
                    </p>
                </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden bg-[#1A365D] rounded-lg p-6 text-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center h-full">
                    <div className="flex-shrink-0 mr-6">
                        <img
                            src="/Images/Bubble-10.png"
                            alt="Sitting with tension"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold mb-3">Sitting with Tension</h3>
                        <p className="text-white/90 leading-relaxed">
                            Some tensions aren&apos;t meant to be solved. They&apos;re meant to be understood. 
                            Emotional discernment over reaction.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 relative overflow-hidden bg-[#F96E1E] rounded-lg p-6 text-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white to-[#1A365D] opacity-30"></div>
                <div className="flex items-center h-full">
                    <div className="w-full">
                        <h3 className="text-xl font-bold text-white mb-3">Framework Philosophy</h3>
                        <p className="text-white/90 leading-relaxed">
                            These approaches have emerged from thousands of hours of working with leaders who think deeply and act thoughtfully.
                        </p>
                    </div>
                </div>
            </div>
          </div>
          <div className="mt-16 text-center">
              <div className="relative inline-block max-w-3xl p-8 rounded-xl bg-[#F96E1E] transform hover:scale-105 transition-all duration-300"
                   style={{boxShadow: '0 8px 25px rgba(26, 54, 93, 0.15), 0 3px 10px rgba(249, 110, 30, 0.1)'}}>
                  <p className="font-['Waiting_for_the_Sunrise'] text-xl leading-relaxed text-white font-medium">
                      &ldquo;The most powerful questions aren&apos;t the ones we ask ourselves. 
                      They&apos;re the ones we finally allow ourselves to hear.&rdquo;
                  </p>
              </div>
          </div>
        </PageLayout>
      </section>
      {/* NAVY STRIPE - Global Reach */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center mb-12">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              Global perspective, personal connection
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/90 leading-relaxed">
              My coaching partnerships span diverse contexts and cultures, working with senior leaders across continents and industries.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/Images/europe.png"
                  alt="Europe"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">UK, Ireland, France, Belgium, Switzerland, Netherlands, Sweden</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/Images/asia.png"
                  alt="Asia"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">UAE, Saudi Arabia, Israel, India, Singapore</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/Images/north-america.png"
                  alt="North America"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">USA, Canada, Caribbean</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/Images/south-america.png"
                  alt="South America"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">Argentina, Brazil, Chile</p>
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
      {/* TANGERINE STRIPE - CTA */}
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
