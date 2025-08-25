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
                    The strongest leaders I know don&apos;t arrive; they <span className="text-[#F96E1E]">return</span>.<br />
                    Again and again.<br />
                    To their <span className="text-[#F96E1E]">values</span>.<br />
                    Their <span className="text-[#F96E1E]">vision</span>.<br />
                    Their <span className="text-[#F96E1E]">self</span>.
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
              I create the space for that <span className="text-[#F96E1E]">return</span>; to what matters, what&apos;s emerging, 
              and what&apos;s getting in the way.<br />
              Not louder.<br />
              Just wiser.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* THE QUIET QUESTIONS */}
      <section className="w-full bg-white py-12 md:py-16">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              The quiet questions
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              What&apos;s already there, waiting for the safe space to be spoken out loud and truly be heard.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
              <img
                src="/images/Bubble-1.png"
                alt="Self-perception reflection"
                className="size-full object-contain"
              />
            </div>
            
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-2.png"
                alt="Connection and relationships"
                className="size-full object-contain"
              />
            </div>
            <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
              <img
                src="/images/Bubble-3.png"
                alt="Authentic self-expression"
                className="size-full object-contain"
              />
            </div>
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-4.png"
                alt="Decision-making and judgment"
                className="size-full object-contain"
              />
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Leadership Equation */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <div className="mb-4 font-['Waiting_for_the_Sunrise'] text-5xl font-bold text-[#F96E1E] md:text-6xl">
                  PE = PO - I
                </div>
                <p className="text-lg font-semibold text-white">
                  The Leadership Equation
                </p>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Most leaders already have the <span className="text-[#F96E1E]">potential</span>.
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                Performance equals potential minus <span className="text-[#F96E1E]">interference</span>. 
                The question isn&apos;t whether you have what it takes. 
                The question is: what&apos;s getting in your way?
              </p>
              <p className="text-base leading-relaxed text-white/80">
                My work is helping you see it, understand it, and reduce it. 
                Not through more training or new techniques, but by removing 
                what doesn&apos;t need to be there.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - What Gets in Your Way Grid */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              What gets in your way?
            </h2>
            <p className="mx-auto max-w-4xl text-lg text-gray-700 leading-relaxed">
              The patterns that create <span className="text-[#F96E1E]">interference</span> between who you are and how you lead.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
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
                  Phillip provides tailor-made support and adapts to your individual needs with a very professional and flexible approach. Fantastic experience!
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Engineering
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
                  Phillip provides tailor-made support and adapts to your individual needs with a very professional and flexible approach. Fantastic experience!
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Engineering
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
                  Phillip provides tailor-made support and adapts to your individual needs with a very professional and flexible approach. Fantastic experience!
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
            
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                How I see it
            </h2>
            
            <div className="mx-auto max-w-4xl mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    I work in <span className="text-[#F96E1E]">frameworks</span> but never formulas. These are tools I return to often: 
                    not as answers, but as <span className="font-semibold text-[#F96E1E]">invitations</span>.
                </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[#1A365D]/10 p-6 hover:border-[#F96E1E] transition-colors bg-white">
              <div className="mb-4 text-3xl">🗺️</div>
              <h3 className="mb-3 text-xl font-semibold text-[#1A365D]">Values Constellation</h3>
              <p className="text-gray-600 leading-relaxed">
                Not what you should value, but what you actually do. And how that shows up 
                when the pressure is on.
              </p>
            </div>
            
            <div className="rounded-lg border border-[#1A365D]/10 p-6 hover:border-[#F96E1E] transition-colors bg-white">
              <div className="mb-4 text-3xl">🎯</div>
              <h3 className="mb-3 text-xl font-semibold text-[#1A365D]">Embodied Perception</h3>
              <p className="text-gray-600 leading-relaxed">
                Your body knows things your mind hasn&apos;t figured out yet. Learning to 
                trust that wisdom in leadership moments.
              </p>
            </div>
            
            <div className="rounded-lg border border-[#1A365D]/10 p-6 hover:border-[#F96E1E] transition-colors bg-white">
              <div className="mb-4 text-3xl">⚖️</div>
              <h3 className="mb-3 text-xl font-semibold text-[#1A365D]">Sitting With Tension</h3>
              <p className="text-gray-600 leading-relaxed">
                Not every tension needs to be resolved immediately. Some need to be 
                held, explored, and allowed to teach us.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* TESTIMONIAL SHOWCASE - Different formats */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              The leaders I work with
            </h2>
            <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
              What happens when you create space for honest conversation about what&apos;s really going on.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-4">
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
                  Phillip provides tailor-made support and adapts to your individual needs with a very professional and flexible approach. Fantastic experience!
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Engineering
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  Phillip is one of the most talented and experienced professionals I have ever met. His ability to swiftly and accurately pinpoint areas for my development, combined with his integrity and business insight, makes him invaluable.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Senior Leader<br />
                  Civil Service
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* TANGERINE STRIPE - CTA */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              This is your leadership.
            </h2>
            
            <div className="mx-auto mb-6 max-w-2xl rounded-lg bg-white p-6">
              <p className="text-xl font-medium leading-relaxed text-[#1A365D]">
                You don&apos;t need a <strong>louder</strong> voice.<br />
                You need a <strong>clearer</strong> signal.<br />
                And a safe enough space to <strong>hear</strong> it.
              </p>
            </div>
            <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-white/90">
              If something here resonates, let&apos;s explore what&apos;s possible.<br />
              No funnel.<br />
              No pressure.<br />
              Just a human conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#F96E1E] transition-colors hover:bg-gray-100"
              >
                Let&apos;s Explore Together →
              </Link>
              <Link
                href="/this-is-personal"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#F96E1E]"
              >
                This is Personal
              </Link>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
