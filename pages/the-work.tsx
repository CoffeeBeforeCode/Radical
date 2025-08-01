import Layout, { Block, Grid, PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function TheWork() {
  return (
    <Layout
      title="The Work - Phillip Collins"
      description="Professional leadership coaching for senior executives. Reducing interference through embodied perception, Values Constellation mapping, and the Leadership Equation."
      canonical="/the-work"
    >
      {/* Hero Block */}
      <Block spacing="default">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1A365D]">
              The work beneath the work.
            </h1>
            
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                Most senior leaders already have the <span className="text-[#F96E1E] font-semibold">potential</span>.
              </p>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                What gets in their way isn&apos;t lack of capability—it&apos;s the interference that blocks natural leadership excellence.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Through embodied perception and precise observation, I help global executives identify and reduce what&apos;s truly getting in their way.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Leadership Equation Block */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="font-['Waiting_for_the_Sunrise'] text-6xl md:text-7xl lg:text-8xl font-bold text-white">
                PE = PO - I
              </div>
              <div className="text-xl md:text-2xl text-gray-300">
                Performance = Potential - Interference
              </div>
            </div>
            
            <div className="mx-auto max-w-3xl space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                Most leaders aren&apos;t missing skills or strategies. They&apos;re carrying interference—limiting beliefs, environmental pressures, values conflicts—that blocks their natural capabilities.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Rather than adding more techniques, we identify and reduce what&apos;s interfering with leadership excellence that&apos;s already present.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Three Core Frameworks */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-[#1A365D] leading-tight mb-6">
              Three Core Methodologies
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              Frameworks developed through 10,000+ hours of coaching senior executives across cultures and industries.
            </p>
          </div>
          
          <Grid columns={3}>
            <div className="bg-white rounded-lg border border-[#1A365D]/10 p-6 text-center transition-all duration-300 hover:border-[#F96E1E] hover:-translate-y-0.5">
              <div className="mb-6 text-3xl font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">PE = PO - I</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">The Leadership Equation</h3>
              <p className="text-gray-600">
                Performance equals Potential minus Interference.
                When we reduce the stuff that gets in your way,
                your natural leadership emerges.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-[#1A365D]/10 p-6 text-center transition-all duration-300 hover:border-[#F96E1E] hover:-translate-y-0.5">
              <div className="mb-6 text-4xl text-[#7A9A7F]">◯ ◯ ◯</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">Values in Motion</h3>
              <p className="text-gray-600">
                Mapping what truly matters through constellation work.
                Making visible the tensions and alignments that
                shape every leadership decision.
              </p>
            </div>
            
            <div className="bg-white rounded-lg border border-[#1A365D]/10 p-6 text-center transition-all duration-300 hover:border-[#F96E1E] hover:-translate-y-0.5">
              <div className="mb-6 text-4xl text-[#D4B86A]">⚖</div>
              <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">Sitting With Tension</h3>
              <p className="text-gray-600">
                Some tensions aren&apos;t meant to be solved.
                They&apos;re meant to be understood.
                Emotional discernment over reaction.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* The Work Beneath The Work */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight mb-6">
              The work beneath the work
            </h2>
          </div>
          
          <Grid columns={5}>
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#D4B86A]">👁</div>
              <h3 className="text-lg font-semibold text-white">Observation before Intervention</h3>
              <p className="text-sm text-white/80">
                We start by noticing.
                What&apos;s actually happening, not what we think is happening.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#F96E1E]">🎯</div>
              <h3 className="text-lg font-semibold text-white">Interference Mapping</h3>
              <p className="text-sm text-white/80">
                What&apos;s getting in your way?
                Internal patterns, environmental pressures, values conflicts.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#7A9A7F]">🌱</div>
              <h3 className="text-lg font-semibold text-white">Embodied Perception</h3>
              <p className="text-sm text-white/80">
                Your body knows before your mind catches up.
                Accessing information beyond cognitive analysis.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#D4B86A]">⚖</div>
              <h3 className="text-lg font-semibold text-white">Values Constellation</h3>
              <p className="text-sm text-white/80">
                Making visible the competing priorities
                that shape every decision you make.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#F96E1E]">🔄</div>
              <h3 className="text-lg font-semibold text-white">Integration</h3>
              <p className="text-sm text-white/80">
                How insights become embodied practice.
                Sustainable change that sticks.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Client Testimonials */}
      <Block spacing="default">
        <PageLayout>
          <div className="text-center mb-12">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-[#1A365D]">
              Professional Transformation
            </h2>
          </div>
          
          <Grid columns={2}>
            <div className="space-y-6 bg-[#F8F5EB] p-8 rounded-lg">
              <blockquote className="text-lg leading-relaxed text-gray-700">
                &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
            </div>
            
            <div className="space-y-6 bg-[#F8F5EB] p-8 rounded-lg">
              <blockquote className="text-lg leading-relaxed text-gray-700">
                &ldquo;My team and I have never had such honest conversations until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Country Head, Telecommunications</cite>
            </div>
            
            <div className="space-y-6 bg-white p-8 rounded-lg border border-[#1A365D]/10">
              <blockquote className="text-lg leading-relaxed text-gray-700">
                &ldquo;I have been surprised at how comfortable it has felt being stretched through this coaching process. The stretch has become an additional approach rather than replacing who I am.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Chief Financial Officer, Housing & Community Development</cite>
            </div>
            
            <div className="space-y-6 bg-white p-8 rounded-lg border border-[#1A365D]/10">
              <blockquote className="text-lg leading-relaxed text-gray-700">
                &ldquo;The feedback was that I&apos;ve made enormous progress and proven my ability to get repeatedly great results for the company. Thank you for all your help getting me here. It&apos;s been a journey.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">C-suite Member, Technology</cite>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Integration Question */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="text-xl font-semibold text-white">Integration Question</h2>
            <p className="font-['Waiting_for_the_Sunrise'] text-2xl md:text-3xl leading-relaxed text-[#F96E1E]">
              &ldquo;What would leadership look like if I truly believed I belonged here?&rdquo;
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-200">
              Imposter syndrome dissolves when we remember: we weren&apos;t chosen by accident. The work explores what becomes possible when leaders trust their own judgement as much as others clearly do.
            </p>
          </div>
        </PageLayout>
      </Block>

      {/* Ready to Begin */}
      <Block spacing="default" className="bg-[#F96E1E]">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-white">
              Ready to explore what&apos;s getting in your way?
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-white leading-relaxed">
              Professional coaching partnerships for senior executives who need space to explore the internal challenges that external performance demands don&apos;t address.
            </p>
            
            <div className="mx-auto max-w-2xl space-y-4 text-orange-100">
              <p className="text-base leading-relaxed">
                Initial conversation: 90 minutes to map your leadership context and explore whether the approach fits your needs.
              </p>
              <p className="text-base leading-relaxed">
                Ongoing partnership: Monthly 90-minute sessions with email support between meetings.
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href="mailto:phillip@phillip-collins.com" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A365D] text-lg font-medium rounded transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#F96E1E]"
              >
                phillip@phillip-collins.com
              </a>
            </div>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
