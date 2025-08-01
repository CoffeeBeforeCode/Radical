import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function TheWork() {
  return (
    <Layout
      title="The Work - Phillip Collins"
      description="Professional leadership coaching for senior executives. Reducing interference through embodied perception and the Leadership Equation."
      canonical="/the-work"
    >
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
              The work beneath the work.
            </h1>
            
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                Most senior leaders already have the <span className="text-[#F96E1E] font-semibold">potential</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                What gets in their way isn&apos;t lack of capability—it&apos;s the interference that blocks natural leadership excellence.
              </p>
              
              <p className="text-base leading-relaxed text-gray-600">
                Through embodied perception and precise observation, I help global executives identify and reduce what&apos;s truly getting in their way.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Leadership Equation Section */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center space-y-8">
            <div className="font-['Waiting_for_the_Sunrise'] text-6xl font-bold text-white md:text-8xl">
              PE = PO - I
            </div>
            <div className="text-xl text-gray-300 md:text-2xl">
              Performance = Potential - Interference
            </div>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200">
              Rather than adding more techniques, we identify and reduce what&apos;s interfering with leadership excellence that&apos;s already present.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* Three Methodologies */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Three Core Methodologies
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Frameworks developed through 10,000+ hours of coaching senior executives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="mb-4 text-xl font-semibold text-[#7E2D40]">Values Constellation Mapping</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Physical mapping exercises that externalise internal values conflicts. Leaders discover unexpected relationships and hierarchies.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="mb-4 text-xl font-semibold text-[#7E2D40]">Embodied Perception</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Accessing the body&apos;s intelligence to detect subtle interference patterns before they become performance blocks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="mb-4 text-xl font-semibold text-[#7E2D40]">Sitting With Tension</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Building capacity to hold complex tensions without rushing to resolution. Developing emotional flexibility to navigate wisely.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Professional Testimonials */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Professional Transformation
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-[#F8F5EB] p-8 rounded-lg">
                <blockquote className="mb-4 text-lg leading-relaxed text-gray-700">
                  &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
                </blockquote>
                <cite className="text-base font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
              </div>
              
              <div className="bg-[#F8F5EB] p-8 rounded-lg">
                <blockquote className="mb-4 text-lg leading-relaxed text-gray-700">
                  &ldquo;My team and I have never had such honest conversations until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team.&rdquo;
                </blockquote>
                <cite className="text-base font-medium text-[#1A365D]">Country Head, Telecommunications</cite>
              </div>
              
              <div className="bg-[#F8F5EB] p-8 rounded-lg">
                <blockquote className="mb-4 text-lg leading-relaxed text-gray-700">
                  &ldquo;I have been surprised at how comfortable it has felt being stretched through this coaching process. The stretch has become an additional approach rather than replacing who I am.&rdquo;
                </blockquote>
                <cite className="text-base font-medium text-[#1A365D]">Chief Financial Officer, Housing &amp; Community Development</cite>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              Ready to explore what&apos;s getting in your way?
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white">
              Professional coaching partnerships for senior executives who need space to explore the internal challenges that external performance demands don&apos;t address.
            </p>
            
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-orange-100">
                Initial conversation: 90 minutes to map your leadership context and explore whether the approach fits your needs.
              </p>
              <p className="text-base leading-relaxed text-orange-100">
                Ongoing partnership: Monthly 90-minute sessions with email support between meetings.
              </p>
            </div>
            
            <div className="pt-6">
              <a 
                href="mailto:phillip@phillip-collins.com" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A365D] text-lg font-medium rounded transition-colors hover:bg-gray-100"
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
