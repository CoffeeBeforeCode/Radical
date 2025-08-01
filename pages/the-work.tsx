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
                  The work beneath the work.
                </h1>
                
                <div className="max-w-3xl space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    The real shift in leadership doesn&apos;t happen when we do something new.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                    It happens when we see something new.
                  </p>
                  <p className="text-xl font-medium text-[#1A365D] md:text-2xl">
                    And begin to lead from there.
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
                        What gets in their way isn&apos;t lack of capability—<br />
                        it&apos;s the interference that blocks<br />
                        natural leadership <strong>excellence</strong>.
                      </p>
                    </div>
                    
                    <div className="rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px] border border-gray-200">
                      <img
                        src="/images/you-eqi.png"
                        alt="Am I trusting my own judgement, or waiting for a green light?"
                        className="w-full h-auto object-contain max-w-full max-h-[150px] md:max-h-[200px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTAs - Index Page Pattern */}
              <div className="max-w-4xl space-y-8 mt-8">
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="mailto:phillip@phillip-collins.com"
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
                How I see it
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
                <div className="mb-6 text-center text-4xl text-[#D4B86A]">⚖</div>
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

      {/* CALL & RESPONSE - Cream Section */}
      <section className="w-full bg-[#F8F5EB] py-12 md:py-16">
        <PageLayout>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* The Call - Internal Struggle */}
            <div className="space-y-6">
              <div className="aspect-square max-w-64 rounded-lg bg-[#F96E1E] p-8">
                <p className="text-center text-lg font-medium leading-relaxed text-white">
                  &ldquo;Anything less than flawless is failure&rdquo;
                </p>
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                The internal pressure that drives excellence... and exhaustion.
              </p>
            </div>
            
            {/* The Response - Social Proof */}
            <div className="space-y-6">
              <blockquote className="rounded-lg bg-white p-8 text-lg leading-relaxed text-gray-700">
                &ldquo;The feedback was that I&apos;ve made an enormous amount of progress and have proven my ability to get repeatedly great results for the company. Thank you for all your help getting me here. It&apos;s been a journey.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">C-suite Member, Technology</cite>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* TESTIMONIAL - White Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-lg bg-gray-50 p-8">
              <blockquote className="mb-4 text-lg leading-relaxed text-gray-700">
                &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* FINAL CTA - Tangerine Section */}
      <section className="w-full bg-[#F96E1E] py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold leading-tight text-white md:text-4xl">
              What would change if you could reduce the interference?
            </h2>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white">
              Professional coaching partnerships for senior executives who recognise that leadership development is an inside job.
            </p>
            
            <div className="mt-8">
              <Link
                href="mailto:phillip@phillip-collins.com"
                className="inline-flex items-center justify-center rounded bg-white px-8 py-4 text-lg font-medium text-[#1A365D] transition-colors hover:bg-gray-100"
              >
                phillip@phillip-collins.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
