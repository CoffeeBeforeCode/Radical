import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'
export default function TheWork() {
  return (
    <Layout
      title="The Work - Phillip Collins"
      description="Professional leadership coaching for senior executives. The work beneath the work."
      canonical="/the-work"
    >
      {/* FULL-WIDTH HERO - Matches Index Structure */}
      <section className="relative w-full min-h-screen bg-white pt-20">
        <div className="flex min-h-[calc(100vh-5rem)] items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* Hero Content */}
              <div className="max-w-4xl space-y-8">
                <h1 className="font-['Waiting_for_the_Sunrise'] text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl">
                  The work <span className="text-[#F96E1E]">beneath</span> the work.
                </h1>
                
                <div className="max-w-3xl space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    The real shift in leadership doesn&apos;t begin with doing something different.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    It begins when something deeper rises to the surface.
                  </p>
                </div>
              </div>
              
              {/* Quote + Executive Question - Index Page Pattern */}
              <div className="w-full mt-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px] md:min-h-[250px]">
                      <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                        Most senior leaders already have the <strong>potential</strong>.<br />
                        What gets in their way isn&apos;t lack of capability;<br />
                        it&apos;s the interference that blocks<br />
                        natural leadership <strong>excellence</strong>.
                      </p>
                    </div>
                    
                    <div className="rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px] border border-gray-200">
                      <img
                        src="/images/Bubble-9.png"
                        alt="Am I trusting my own judgement, or waiting for a green light?"
                        className="w-full h-auto object-contain max-w-full max-h-[150px] md:max-h-[200px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTAs - Index Page Pattern */}
              <div className="max-w-4xl space-y-8 mt-8 mb-8 md:mb-12">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="mailto:phillip@phillipcollins.com"
                    className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
                  >
                    Begin here
                  </Link>
                  <Link
                    href="/this-is-personal"
                    className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white"
                  >
                    My approach
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* EQ-i IMAGE - Navy Section */}
      <section className="w-full bg-[#1A365D] py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl flex justify-center">
            <img
              src="/images/your-eqi.png"
              alt="EQ-i Leadership Assessment"
              className="w-full h-auto object-contain max-w-4xl"
            />
          </div>
        </div>
      </section>
      
      {/* FRAMEWORKS - White Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <PageLayout>
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                How I see <span className="text-[#F96E1E]">it</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">
                I work in frameworks — but never formulas.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4 rounded-lg border border-[#1A365D]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F96E1E]">
                <div className="mb-6 text-center text-3xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">PE = PO - I</div>
                <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">The Leadership Equation</h3>
                <p className="text-gray-600">
                  Performance equals Potential minus Interference.
                  When we reduce the stuff that gets in your way,
                  your natural leadership emerges.
                </p>
              </div>
              
              <div className="space-y-4 rounded-lg border border-[#1A365D]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F96E1E]">
                <div className="mb-6 text-center text-4xl text-[#7A9A7F]">◯ ◯ ◯</div>
                <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">Values in Motion</h3>
                <p className="text-gray-600">
                  Mapping what truly matters through constellation work.
                  Making visible the tensions and alignments that
                  shape every leadership decision.
                </p>
              </div>
              
              <div className="space-y-4 rounded-lg border border-[#1A365D]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F96E1E]">
                <div className="mb-6 flex items-center justify-center h-12">
                  <img
                    src="/images/Bubble-10.png"
                    alt="Sitting With Tension"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">Sitting With Tension</h3>
                <p className="text-gray-600">
                  Some tensions aren&apos;t meant to be solved.
                  They&apos;re meant to be understood.
                  Emotional discernment over reaction.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
      
      {/* NAVY STRIPE - Why Practice Matters More Than Perfection */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl text-white md:text-4xl font-bold">
                Why <span className="text-[#F96E1E]">practice</span> matters more than perfection
              </h2>
              
              <p className="text-lg leading-relaxed text-white">
                Perfection is a construct. It doesn&apos;t exist in reality.
              </p>
              
              <p className="text-lg leading-relaxed text-white">
                Practice is about reality testing - what&apos;s actually here, 
                what&apos;s actually happening, what&apos;s actually needed.
              </p>
              
              <p className="text-lg leading-relaxed text-white">
                When we stop chasing something that was never real, 
                we can work with what is.
              </p>
              
              <p className="text-base leading-relaxed text-white/90">
                Leadership happens in the moment. That&apos;s where our 
                capacity to respond lives.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="max-w-sm rounded-lg bg-[#1A365D] p-8 text-center">
                <img
                  src="/images/Bubble-37.png"
                  alt="What if we simply worked with what is?"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
      {/* CALL & RESPONSE - Cream Section */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8">
            <h2 className="mb-4 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              The internal pressure that drives <span className="text-[#F96E1E]">excellence</span>... and exhaustion.
            </h2>
            <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
              The internal conversations that create interference, and the leaders who have found their way through.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-32.png"
                  alt="I can't afford to make mistakes at this level"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  The feedback was that I&apos;ve made an enormous amount of progress and have proven my ability to get repeatedly great results for the company. Thank you for all your help getting me here. It&apos;s been a journey.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  C-suite Member<br />
                  Technology
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-31.png"
                  alt="Others seem to see the big picture clearer than I do"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Senior Civil Servant<br />
                  Government
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-30.png"
                  alt="Anything less than flawless is failure"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  I have been surprised at how comfortable it has felt being stretched through this coaching process. The stretch has become an additional approach rather than replacing who I am; expanding my capabilities while preserving my authentic self.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Chief Financial Officer<br />
                  Housing and Community Development
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
      
      {/* FINAL CTA - Tangerine Section */}
      <section className="w-full bg-[#F96E1E] py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold leading-tight text-white md:text-4xl">
              What would change if you could reduce the <span className="text-[#1A365D]">interference</span>?
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white">
              Professional coaching partnerships for senior executives who recognise that leadership development is an inside job.
            </p>
            
            <div className="mt-8">
              <Link
                href="mailto:phillip@phillipcollins.com"
                className="inline-flex items-center justify-center rounded bg-white px-8 py-4 text-lg font-medium text-[#1A365D] transition-colors hover:bg-gray-100"
              >
                Let&apos;s explore together
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
