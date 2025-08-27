import Layout, { PageLayout } from '../components/Layout'

export default function Contact() {
  return (
    <Layout
      title="Contact - Phillip Collins"
      description="Get in touch with Phillip Collins for professional leadership coaching"
      canonical="/contact"
    >
      {/* CONTACT FORM - Navy Background with All Key Information */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            
            {/* Contact Box with All Information */}
            <div className="rounded-lg bg-white p-8 md:p-10">
              
              {/* Key Message Inside Contact Box */}
              <div className="mb-8 text-center">
                <h2 className="mb-4 font-['Waiting_for_the_Sunrise'] text-2xl font-bold text-[#1A365D] md:text-3xl">
                  Ready to explore what&apos;s getting in <span className="text-[#F96E1E]">your</span> way?
                </h2>
                
                <h3 className="mb-4 font-['Waiting_for_the_Sunrise'] text-2xl font-bold text-[#1A365D] md:text-3xl">
                  Let&apos;s begin
                </h3>
                
                <p className="mb-4 text-base leading-relaxed text-[#1A365D]">
                  The strongest leaders I know don&apos;t arrive — they <strong>return</strong>.<br />
                  Again and again. To their values, vision, and self.
                </p>
                
                <p className="text-sm text-gray-600 mb-6">
                  Professional coaching partnerships for senior executives navigating complex leadership challenges. 
                  Based in the UK, working globally with leaders who know there&apos;s more.
                </p>
              </div>

              {/* Microsoft Forms Embed */}
              <div className="w-full">
                <div className="relative overflow-hidden rounded-lg border border-gray-200">
                  <iframe 
                    width="100%" 
                    height="600" 
                    src="https://forms.office.com/e/8PvAhj0b0g?embed=true" 
                    frameBorder={0} 
                    marginWidth={0} 
                    marginHeight={0} 
                    style={{border: 'none', maxWidth: '100%', maxHeight: '100vh'}} 
                    allowFullScreen 
                    allow="microphone; camera">
                  </iframe>
                </div>
              </div>

              <div className="pt-6 text-center">
                <p className="text-sm text-gray-500">
                  No templates. No prescriptions.<br />
                  Just space to see what&apos;s really there.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
