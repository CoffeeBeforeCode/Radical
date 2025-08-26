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
          <div className="mx-auto max-w-2xl">
            
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
                
                <p className="text-sm text-gray-600">
                  Professional coaching partnerships for senior executives navigating complex leadership challenges. 
                  Based in the UK, working globally with leaders who know there&apos;s more.
                </p>
              </div>

              {/* Simple Contact Form */}
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A365D] mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20"
                    placeholder="How shall I address you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A365D] mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-[#1A365D] mb-2">
                    Your current role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20"
                    placeholder="CEO, Director, VP of..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A365D] mb-2">
                    What&apos;s on your mind?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20"
                    placeholder="What's getting in your way? What patterns are you noticing? What would exploration look like for you?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#F96E1E] px-6 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
                  >
                    Begin the conversation
                  </button>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-sm text-gray-500">
                    No templates. No prescriptions.<br />
                    Just space to see what&apos;s really there.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
