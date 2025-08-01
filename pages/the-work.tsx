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
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1A365D]">
              The work beneath the work.
            </h1>
            
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
                Most senior leaders already have the <span className="text-[#F96E1E] font-semibold">potential</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                What gets in their way isn&apos;t lack of capability—it&apos;s the interference that blocks natural leadership excellence.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Leadership Equation Section */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center space-y-8">
            <div className="font-['Waiting_for_the_Sunrise'] text-6xl md:text-8xl font-bold text-white">
              PE = PO - I
            </div>
            <div className="text-xl md:text-2xl text-gray-300">
              Performance = Potential - Interference
            </div>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200">
              Rather than adding more techniques, we identify and reduce what&apos;s interfering with leadership excellence that&apos;s already present.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-[#1A365D]">
                Professional Transformation
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg">
                <blockquote className="text-lg leading-relaxed text-gray-700 mb-4">
                  &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
                </blockquote>
                <cite className="text-base font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
              </div>
              
              <div className="bg-white p-8 rounded-lg">
                <blockquote className="text-lg leading-relaxed text-gray-700 mb-4">
                  &ldquo;My team and I have never had such honest conversations until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team.&rdquo;
                </blockquote>
                <cite className="text-base font-medium text-[#1A365D]">Country Head, Telecommunications</cite>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-white">
              Ready to explore what&apos;s getting in your way?
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg text-white leading-relaxed">
              Professional coaching partnerships for senior executives.
            </p>
            
            <div className="pt-4">
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
