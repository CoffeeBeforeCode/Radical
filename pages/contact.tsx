import Layout, { PageLayout } from '../components/Layout'

export default function Contact() {
  return (
    <Layout
      title="Contact - Phillip Collins"
      description="Get in touch with Phillip Collins for professional leadership coaching"
      canonical="/contact"
    >
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 font-['Waiting_for_the_Sunrise'] text-4xl font-bold text-[#1A365D] md:text-6xl">
              Let&apos;s begin
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-[#1A365D] md:text-2xl">
              The strongest leaders I know don&apos;t arrive — they <strong>return</strong>.<br />
              Again and again.<br />
              To their <strong>values</strong>.<br />
              Their <strong>vision</strong>.<br />
              Their <strong>self</strong>.
            </p>

            <p className="text-lg text-gray-600">
              No templates. No prescriptions.<br />
              Just space to see what&apos;s really there.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* Contact Details - Navy */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              Ready to explore what&apos;s getting in your way?
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed text-white/90">
              Professional coaching partnerships for senior executives navigating complex leadership challenges. 
              Based in the UK, working globally with leaders who know there&apos;s more.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">Email</h3>
                <a 
                  href="mailto:phillip@phillipcollins.com" 
                  className="text-lg text-[#F96E1E] hover:text-white transition-colors"
                >
                  phillip@phillipcollins.com
                </a>
              </div>
              
              <div>
                <h3 className="mb-2 text-xl font-medium text-white">LinkedIn</h3>
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
        </PageLayout>
      </section>

      {/* What to Expect - Cream */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl text-center">
              What happens next?
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#F96E1E] pl-6">
                <h3 className="mb-2 text-xl font-semibold text-[#1A365D]">Initial Conversation</h3>
                <p className="leading-relaxed text-gray-700">
                  We start with a 30-minute conversation to explore whether my approach aligns with what you&apos;re looking for. 
                  This isn&apos;t a sales call — it&apos;s a mutual exploration of fit.
                </p>
              </div>

              <div className="border-l-4 border-[#1A365D] pl-6">
                <h3 className="mb-2 text-xl font-semibold text-[#1A365D]">Partnership Design</h3>
                <p className="leading-relaxed text-gray-700">
                  If we decide to work together, we design a coaching partnership that fits your context, 
                  challenges, and aspirations. Every engagement is bespoke.
                </p>
              </div>

              <div className="border-l-4 border-[#7A9A7F] pl-6">
                <h3 className="mb-2 text-xl font-semibold text-[#1A365D]">Ongoing Partnership</h3>
                <p className="leading-relaxed text-gray-700">
                  Regular sessions combine strategic conversation, embodied perception, and practical application. 
                  The Leadership Equation provides structure whilst remaining responsive to your emerging needs.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Global Reach - White */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl text-center">
              Global reach, local <span className="text-[#F96E1E]">presence</span>
            </h2>
            
            <p className="mb-8 text-center text-lg leading-relaxed text-gray-700">
              Based in the United Kingdom, working with senior leaders across Europe, 
              the Middle East, Americas, and Asia Pacific. Virtual and in-person sessions available.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-[#F8F5EB] p-4">
                <h3 className="mb-1 font-medium text-[#1A365D]">Europe</h3>
                <p className="text-sm text-gray-600">UK, Ireland, Netherlands, Germany, Switzerland</p>
              </div>
              
              <div className="rounded-lg bg-[#F8F5EB] p-4">
                <h3 className="mb-1 font-medium text-[#1A365D]">Americas</h3>
                <p className="text-sm text-gray-600">United States, Canada, Mexico</p>
              </div>
              
              <div className="rounded-lg bg-[#F8F5EB] p-4">
                <h3 className="mb-1 font-medium text-[#1A365D]">Middle East</h3>
                <p className="text-sm text-gray-600">UAE, Saudi Arabia, Qatar</p>
              </div>
              
              <div className="rounded-lg bg-[#F8F5EB] p-4">
                <h3 className="mb-1 font-medium text-[#1A365D]">Asia Pacific</h3>
                <p className="text-sm text-gray-600">Singapore, Australia, Hong Kong</p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Testimonial - Cream */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="mb-4 text-xl leading-relaxed text-[#1A365D] italic">
              &ldquo;Phillip is one of the most talented and experienced professionals I have ever met. 
              His ability to swiftly and accurately pinpoint areas for development, combined with complete 
              trustworthiness and acute business insight, makes him invaluable.&rdquo;
            </blockquote>
            <cite className="text-base font-medium text-gray-600">Senior Civil Servant, Government</cite>
          </div>
        </PageLayout>
      </section>

      {/* TANGERINE STRIPE - Final CTA */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              The conversation starts here
            </h2>
            
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90">
              Professional leadership coaching for executives who know there&apos;s more to discover 
              about their potential and impact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:phillip@phillipcollins.com"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#F96E1E] transition-colors hover:bg-gray-100"
              >
                Send an email
              </a>
              <a
                href="https://www.linkedin.com/in/philliprcollins"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#F96E1E]"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
