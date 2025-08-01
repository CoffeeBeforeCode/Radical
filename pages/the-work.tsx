import Layout, { PageLayout } from '../components/Layout'

export default function TheWork() {
  return (
    <Layout
      title="The Work - Phillip Collins"
      description="Professional leadership coaching for senior executives. The work beneath the work."
      canonical="/the-work"
    >
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
              The work beneath the work.
            </h1>
            
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                Most senior leaders already have the <span className="font-semibold text-[#F96E1E]">potential</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600">
                What gets in their way isn&apos;t lack of capability—it&apos;s the interference that blocks natural leadership excellence.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Leadership Equation */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="space-y-8 text-center">
            <div className="font-['Waiting_for_the_Sunrise'] text-6xl font-bold leading-none text-white md:text-8xl">
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

      {/* Methodology */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Three Core Methodologies
              </h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4 rounded-lg bg-white p-6">
                <h3 className="text-xl font-semibold text-[#1A365D]">Values Constellation Mapping</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Understanding how your core values create interference patterns when they conflict or compete for attention in leadership decisions.
                </p>
              </div>
              
              <div className="space-y-4 rounded-lg bg-white p-6">
                <h3 className="text-xl font-semibold text-[#1A365D]">Embodied Perception</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Precise observation of how leadership challenges show up in your body, thoughts, and emotional patterns before they impact performance.
                </p>
              </div>
              
              <div className="space-y-4 rounded-lg bg-white p-6">
                <h3 className="text-xl font-semibold text-[#1A365D]">Sitting With Tension</h3>
                <p className="text-base leading-relaxed text-gray-700">
                  Building capacity to remain present and effective in difficult conversations and high-stakes decisions without reactive patterns.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Testimonial */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-lg bg-gray-50 p-8">
              <blockquote className="mb-4 text-lg leading-relaxed text-gray-700">
                &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
            </div>
            
            <div className="rounded-lg bg-gray-50 p-8">
              <blockquote className="mb-4 text-lg leading-relaxed text-gray-700">
                &ldquo;Working with Phillip was transformational. His approach helped me understand the deeper patterns affecting my leadership effectiveness. The results were immediate and lasting.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Country Head, Global Technology Company</cite>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Integration Question */}
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
