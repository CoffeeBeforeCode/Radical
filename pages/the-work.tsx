import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function TheWork() {
  return (
    <Layout
      title="The Work - Phillip Collins"
      description="Professional leadership coaching for senior executives."
      canonical="/the-work"
    >
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
            </div>
          </div>
        </PageLayout>
      </section>

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

      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Professional Transformation
              </h2>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <blockquote className="text-lg leading-relaxed text-gray-700 mb-4">
                &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
            </div>
          </div>
        </PageLayout>
      </section>

      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              Ready to explore what&apos;s getting in your way?
            </h2>
            
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white">
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
