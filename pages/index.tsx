import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Global Leadership Coach"
      description="Creating space for leaders to see what gets in their way, reduce interference, and unlock their natural potential. Working with executives across Europe, Middle East, Americas, and Asia Pacific."
      canonical="/"
    >
      {/* HERO SECTION - Fixed Structure */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          {/* Headline First - Separate */}
          <div className="max-w-4xl space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
              Your Leadership.<br />
              A Role?<br />
              A Title?<br />
              <span className="font-light italic text-[#F96E1E]">A Practice!</span>
            </h1>
          </div>
          
          {/* Text Box + Image Grid */}
          <div className="w-full mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Text Box - 3/4 width */}
                <div className="md:col-span-3 rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px] md:min-h-[250px]">
                  <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                    The strongest leaders I know don&apos;t arrive; they <strong>return</strong>.<br />
                    Again and again.<br />
                    To their <strong>values</strong>.<br />
                    Their <strong>vision</strong>.<br />
                    Their <strong>self</strong>.
                  </p>
                </div>
                
                {/* Image Box - 1/4 width - NO BORDER */}
                <div className="md:col-span-1 rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/images/whats-the-story.png"
                    alt="What's the story I tell myself about who I am; is it still true?"
                    className="w-full h-auto object-contain max-w-full max-h-[150px] md:max-h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Content */}
          <div className="max-w-4xl space-y-8 mt-8">
            <p className="text-lg leading-relaxed text-gray-600">
              I create the space for that return; to what matters, what&apos;s emerging, 
              and what&apos;s getting in the way.<br />
              Not louder.<br />
              Just wiser.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* TESTIMONIALS GRID - Navy Stripe */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="font-['Waiting_for_the_Sunrise'] mb-6 text-3xl font-bold text-white md:text-4xl">
              What they discovered
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-4.png"
                  alt="Nobody talks about their struggles at this level"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  My team and I have never had such honest conversations with each other, until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Telecommunications
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-5.png"
                  alt="Handling change and flexibility"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  Phillip provides tailor-made support and adapts to your individual needs with a very professional and flexible approach.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Engineering
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - How I See It - REDESIGNED */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-32 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-30"></div>
            
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
                How I see it
            </h2>
            
            <div className="mx-auto max-w-4xl mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    I work in frameworks but never formulas. These are tools I return to often: 
                    not as answers, but as <span className="font-semibold text-[#F96E1E]">invitations</span>.
                </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-[#F8F5EB] p-6 space-y-4">
              <h3 className="font-['Waiting_for_the_Sunrise'] text-xl font-bold text-[#1A365D]">
                Leadership Equation
              </h3>
              <p className="text-gray-700">
                PE = PO - I. Performance equals potential minus interference. 
                What&apos;s getting in your way?
              </p>
            </div>
            
            <div className="rounded-lg bg-[#F8F5EB] p-6 space-y-4">
              <h3 className="font-['Waiting_for_the_Sunrise'] text-xl font-bold text-[#1A365D]">
                Embodied Perception
              </h3>
              <p className="text-gray-700">
                How we see shapes how we lead. Shifting perspective creates new possibilities for action.
              </p>
            </div>
            
            <div className="rounded-lg bg-[#F8F5EB] p-6 space-y-4">
              <h3 className="font-['Waiting_for_the_Sunrise'] text-xl font-bold text-[#1A365D]">
                Values Integration
              </h3>
              <p className="text-gray-700">
                Leadership aligned with personal values creates sustainable performance and authentic influence.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* BURGUNDY STRIPE - Call to Action */}
      <section className="w-full bg-[#7E2D40] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl text-white md:text-4xl font-bold">
                Ready to explore what&apos;s getting in your way?
              </h2>
              
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/80">
                Leadership development that honours who you already are.<br />
                Let&apos;s explore what&apos;s emerging for you.
              </p>
            </div>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-[#F96E1E] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E55A1A] focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
            >
              Start the conversation
            </Link>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
