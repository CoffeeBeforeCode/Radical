import Link from 'next/link'
import Layout, { Block, Grid, PageLayout } from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section - Full impact opening */}
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="text-center space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold text-[#1A365D] md:text-6xl">
              Let&apos;s begin
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[#1A365D] md:text-2xl">
              The strongest leaders I know don&apos;t arrive — they <strong>return</strong>.<br />
              Again and again.<br />
              To their <strong>values</strong>.<br />
              Their <strong>vision</strong>.<br />
              Their <strong>self</strong>.
            </p>

            <div className="pt-8">
              <p className="text-lg text-gray-600">
                No templates. No prescriptions.<br />
                Just space to see what&apos;s really there.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Contact Methods - Navy stripe with confidence */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <Grid columns={3}>
            {/* Primary Contact - Main email */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
                Ready to explore what&apos;s getting in your way?
              </h2>
              
              <p className="text-lg leading-relaxed text-white/90">
                Professional coaching partnerships for senior executives navigating complex leadership challenges. 
                Based in the UK, working globally with leaders who know there&apos;s more.
              </p>

              <div className="space-y-4">
                <div className="text-white">
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <a 
                    href="mailto:phillip@phillipcollins.com" 
                    className="text-lg text-[#F96E1E] hover:text-white transition-colors"
                  >
                    phillip@phillipcollins.com
                  </a>
                </div>
                
                <div className="text-white">
                  <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/philliprcollins" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#F96E1E] hover:text-white transition-colors"
                  >
                    /in/philliprcollins
                  </a>
                </div>
              </div>
            </div>

            {/* EQ Question Block */}
            <div className="aspect-square bg-[#F96E1E] p-4 rounded-lg flex items-center justify-center">
              <p className="text-white text-sm font-medium text-center leading-relaxed">
                &ldquo;What would leadership look like if I truly believed I belonged here?&rdquo;
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* What to Expect - Cream background for warmth */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <Grid columns={3}>
            {/* Main content block */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                What happens next?
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#F96E1E] pl-6">
                  <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Initial Conversation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We start with a 30-minute conversation to explore whether my approach aligns with what you&apos;re looking for. 
                    This isn&apos;t a sales call — it&apos;s a mutual exploration of fit.
                  </p>
                </div>

                <div className="border-l-4 border-[#1A365D] pl-6">
                  <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Partnership Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If we decide to work together, we design a coaching partnership that fits your context, 
                    challenges, and aspirations. Every engagement is bespoke.
                  </p>
                </div>

                <div className="border-l-4 border-[#7A9A7F] pl-6">
                  <h3 className="text-xl font-semibold text-[#1A365D] mb-2">Ongoing Partnership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Regular sessions combine strategic conversation, embodied perception, and practical application. 
                    The Leadership Equation provides structure whilst remaining responsive to your emerging needs.
                  </p>
                </div>
              </div>
            </div>

            {/* EQ Question Block */}
            <div className="aspect-square bg-[#7A9A7F] p-4 rounded-lg flex items-center justify-center">
              <p className="text-white text-sm font-medium text-center leading-relaxed">
                &ldquo;What helps me choose well, especially when it&apos;s hard?&rdquo;
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Geographic Reach - White section with clean layout */}
      <Block background="white" spacing="default">
        <PageLayout>
          <Grid columns={2}>
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Global reach, local <span className="text-[#F96E1E]">presence</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in the United Kingdom, working with senior leaders across Europe, 
                the Middle East, Americas, and Asia Pacific. Virtual and in-person sessions available.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#F8F5EB] p-4 rounded-lg">
                  <h3 className="font-medium text-[#1A365D] mb-1">Europe</h3>
                  <p className="text-sm text-gray-600">UK, Ireland, Netherlands, Germany, Switzerland</p>
                </div>
                
                <div className="bg-[#F8F5EB] p-4 rounded-lg">
                  <h3 className="font-medium text-[#1A365D] mb-1">Americas</h3>
                  <p className="text-sm text-gray-600">United States, Canada, Mexico</p>
                </div>
                
                <div className="bg-[#F8F5EB] p-4 rounded-lg">
                  <h3 className="font-medium text-[#1A365D] mb-1">Middle East</h3>
                  <p className="text-sm text-gray-600">UAE, Saudi Arabia, Qatar</p>
                </div>
                
                <div className="bg-[#F8F5EB] p-4 rounded-lg">
                  <h3 className="font-medium text-[#1A365D] mb-1">Asia Pacific</h3>
                  <p className="text-sm text-gray-600">Singapore, Australia, Hong Kong</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#1A365D] p-6 rounded-lg text-white">
                <h3 className="text-xl font-medium mb-4">Time zones that work</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  Flexible scheduling across multiple time zones to accommodate senior executive calendars. 
                  Early morning, late evening, and weekend sessions available.
                </p>
                <div className="text-[#F96E1E] text-sm">
                  <strong>UK Base:</strong> GMT/BST<br />
                  <strong>Coverage:</strong> EST to GST
                </div>
              </div>

              <div className="aspect-square bg-[#F96E1E] p-4 rounded-lg flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center leading-relaxed">
                  &ldquo;Where do I feel most connected; what helps make that happen?&rdquo;
                </p>
              </div>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Client Testimonial - Brief social proof */}
      <Block background="cream" spacing="compact">
        <PageLayout>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl italic text-[#1A365D] leading-relaxed mb-4">
              &ldquo;Phillip is one of the most talented and experienced professionals I have ever met. 
              His ability to swiftly and accurately pinpoint areas for development, combined with complete 
              trustworthiness and acute business insight, makes him invaluable.&rdquo;
            </blockquote>
            <cite className="text-base font-medium text-gray-600">Senior Civil Servant, Government</cite>
          </div>
        </PageLayout>
      </Block>

      {/* Final CTA - Tangerine stripe for impact */}
      <Block background="tangerine" spacing="default">
        <PageLayout>
          <div className="text-center space-y-6">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              The conversation starts here
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white">
              Professional leadership coaching for executives who know there&apos;s more to discover 
              about their potential and impact.
            </p>
            
            <div className="pt-4 space-y-4">
              <a 
                href="mailto:phillip@phillipcollins.com" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A365D] text-lg font-medium rounded transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5"
              >
                Send an email
              </a>
              
              <p className="text-sm text-white/80">
                Or connect on <a href="https://www.linkedin.com/in/philliprcollins" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">LinkedIn</a>
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
