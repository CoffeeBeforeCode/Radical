import Layout, { Block, Grid, PageLayout } from '../components/Layout'

export default function TheWork() {
  return (
    <Layout
      title="The Work - Phillip Collins"
      description="Professional leadership coaching for senior executives. The work beneath the work."
      canonical="/the-work"
    >
      {/* FULL-WIDTH HERO - Matches Index Page Structure */}
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
                
                <div className="max-w-2xl space-y-4">
                  <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                    I work in frameworks — but never formulas.<br />
                    What you&apos;ll see here are tools I return to often with leaders:<br />
                    not as answers, but as invitations.
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
                      <div className="text-center space-y-4">
                        <div className="text-6xl">🤔</div>
                        <p className="text-lg font-medium leading-relaxed text-[#1A365D]">
                          &ldquo;Am I trusting my own judgement, or waiting for a green light?&rdquo;
                        </p>
                        <p className="text-sm text-gray-600">
                          Sometimes you already know; you just haven&apos;t backed yourself yet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Equation Block - Navy */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <Grid columns="asymmetric" className="items-center">
            <div className="space-y-8">
              <div className="font-['Waiting_for_the_Sunrise'] text-6xl font-bold leading-none text-white md:text-8xl">
                PE = PO - I
              </div>
              <div className="text-xl text-gray-300 md:text-2xl">
                Performance = Potential - Interference
              </div>
              <p className="max-w-3xl text-lg leading-relaxed text-gray-200">
                We don&apos;t push for more. We remove what&apos;s in the way.<br />
                Most leaders already possess remarkable potential.
              </p>
            </div>
            
            {/* Second Thought Bubble */}
            <div className="flex justify-center">
              <div className="aspect-square max-w-48 rounded-lg bg-[#7A9A7F] p-6">
                <p className="text-center text-sm font-medium leading-relaxed text-white">
                  &ldquo;I don&apos;t really belong at this level&rdquo;
                </p>
              </div>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Call & Response - Performance Perfectionism */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <Grid columns={2} className="items-center gap-12">
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
          </Grid>
        </PageLayout>
      </Block>

      {/* Frameworks - Dense Grid */}
      <Block spacing="default">
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
            
            <Grid columns={3}>
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
            </Grid>
          </div>
        </PageLayout>
      </Block>

      {/* The Work Beneath The Work - 5 Grid Dense */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="mb-16 text-center">
            <h2 className="font-['Waiting_for_the_Sunrise'] mb-6 text-3xl leading-tight text-white md:text-4xl">
              The work beneath the work
            </h2>
          </div>
          
          <Grid columns={5}>
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">👁</div>
              <h3 className="text-lg font-semibold text-white">Observation before Intervention</h3>
              <p className="text-sm text-white/80">
                We start by noticing what&apos;s actually happening, not what we think should be.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">🎯</div>
              <h3 className="text-lg font-semibold text-white">Precision over Prescription</h3>
              <p className="text-sm text-white/80">
                Instead of generic solutions, we identify your specific interference patterns.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">🌊</div>
              <h3 className="text-lg font-semibold text-white">Embodied Awareness</h3>
              <p className="text-sm text-white/80">
                Leadership lives in the body. We notice how challenges show up physically.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">⚖</div>
              <h3 className="text-lg font-semibold text-white">Tension as Teacher</h3>
              <p className="text-sm text-white/80">
                Some tensions hold wisdom. We learn to sit with them rather than rush to resolve.
              </p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="text-3xl text-[#D4B86A]">🔄</div>
              <h3 className="text-lg font-semibold text-white">Integration Practice</h3>
              <p className="text-sm text-white/80">
                New awareness becomes sustainable when practised in real leadership moments.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>
      {/* Call & Response - Strategic Inadequacy */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <Grid columns="asymmetric" className="items-center">
            {/* The Response - Social Proof First */}
            <div className="space-y-6">
              <blockquote className="rounded-lg bg-white p-8 text-lg leading-relaxed text-gray-700">
                &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
            </div>
            
            {/* The Call - Internal Struggle */}
            <div className="flex justify-center">
              <div className="aspect-square max-w-48 rounded-lg bg-[#7A9A7F] p-6">
                <p className="text-center text-sm font-medium leading-relaxed text-white">
                  &ldquo;Others seem to see the big picture clearer than I do&rdquo;
                </p>
              </div>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Scattered Thought Bubbles Section */}
      <Block spacing="default">
        <PageLayout>
          <Grid columns={3} className="gap-8">
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4">
              <p className="text-center text-sm font-medium leading-relaxed text-white">
                &ldquo;What helps me choose well, especially when it&apos;s hard?&rdquo;
              </p>
            </div>
            
            <div className="space-y-6 rounded-lg bg-gray-50 p-8">
              <h3 className="font-['Waiting_for_the_Sunrise'] text-2xl font-bold text-[#1A365D]">
                Interference patterns
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Self-doubt masquerading as humility. Perfectionism disguised as excellence. 
                The need to have all the answers when questions might serve better.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                We identify these patterns not to judge them, but to understand how they shape leadership choices.
              </p>
            </div>
            
            <div className="aspect-square rounded-lg bg-[#7A9A7F] p-4">
              <p className="text-center text-sm font-medium leading-relaxed text-white">
                &ldquo;What if I trusted my own judgement?&rdquo;
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Final CTA Section - Manual Tangerine */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold leading-tight text-white md:text-4xl">
              What would change if you could reduce the interference?
            </h2>
            
            <p className="text-lg leading-relaxed text-white">
              Professional coaching partnerships for senior executives who recognise that leadership development is an inside job.
            </p>
            
            <div className="pt-4">
              <a 
                href="mailto:phillip@phillip-collins.com" 
                className="inline-flex items-center justify-center rounded bg-white px-8 py-4 text-lg font-medium text-[#1A365D] transition-colors hover:bg-gray-100"
              >
                phillip@phillip-collins.com
              </a>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
