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
            
            <p className="text-lg leading-relaxed text-gray-600">
              Most leaders already have the potential they need. The question is: 
              what&apos;s the interference? Through <Link href="/perspectives/the-leadership-equation-unlocking-performance" className="text-[#F96E1E] hover:underline">Leadership Equation</Link> frameworks and <Link href="/perspectives/embodied-perception-the-intelligence-beyond-thought" className="text-[#F96E1E] hover:underline">embodied perception</Link> approaches, 
              I help senior leaders develop <Link href="/perspectives/leadership-as-a-lifelong-practice-beyond-the-workplace" className="text-[#F96E1E] hover:underline">leadership as practice</Link> rather than performance.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600">
              Want to explore what&apos;s possible? Learn more about <Link href="/the-work" className="text-[#F96E1E] hover:underline">my coaching approach</Link> and 
              how I work with leaders across Europe, Middle East, Americas, and Asia Pacific.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Who I Work With */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-[#1A365D] md:text-4xl">
              Who I Work With
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed text-gray-700">
              <p>
                <strong>Senior Leaders</strong> who are committed to their own development and 
                recognise that sustainable performance comes from addressing root causes, 
                not just symptoms.
              </p>
              
              <p>
                <strong>Country, Regional, and Global Heads</strong> navigating the complexity 
                of leading across cultures, time zones, and organisational structures while 
                staying true to their values and vision.
              </p>
              
              <p>
                <strong>Emerging Leaders</strong> stepping into bigger roles who want to build 
                authentic leadership from the inside out, rather than adopting someone else&apos;s 
                template.
              </p>
              
              <p className="text-xl font-medium text-[#1A365D] pt-8">
                Geography matters less than commitment.<br />
                I work with leaders across four continents.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* DARK BLUE STRIPE - How It Works */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
              How It Works
            </h2>
            
            <div className="space-y-8">
              <div className="rounded-lg bg-white p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#1A365D]">Individual Leadership Coaching</h3>
                  <div className="flex items-center rounded-full bg-[#F96E1E] px-4 py-2">
                    <span className="text-sm font-bold text-white">CORE OFFERING</span>
                  </div>
                </div>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  For <strong>Country Heads, Regional Leaders, Global Executives</strong> and other 
                  senior leaders who want to develop their leadership capacity through practical, 
                  evidence-based approaches that honour who you are whilst expanding what&apos;s possible.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monthly 90-minute coaching sessions (face-to-face or online)</li>
                  <li>• Between-session support via WhatsApp</li>
                  <li>• Access to frameworks and tools</li>
                  <li>• Minimum 6-month commitment</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#1A365D]">Emerging Leadership Development</h3>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  For high-potential leaders stepping into senior roles who want to build 
                  authentic leadership from the inside out.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Identity and values-based development</li>
                  <li>• Cross-domain leadership practice</li>
                  <li>• Sustainable performance frameworks</li>
                  <li>• 12-month development programme</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#1A365D]">Leadership Restoration</h3>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  For experienced leaders rebuilding confidence after setbacks, transitions, 
                  or challenging periods.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rebuilding leadership confidence</li>
                  <li>• Processing difficult experiences</li>
                  <li>• Renewed sense of purpose and direction</li>
                  <li>• Flexible duration based on needs</li>
                </ul>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - Social Proof */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-3xl font-bold text-[#1A365D] md:text-4xl">
              What People Say
            </h2>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-8">
                <div className="relative rounded-lg bg-[#F8F5EB] p-6 shadow-sm border-l-4 border-[#F96E1E]">
                  <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                  <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                    Phillip is a brilliant coach. He has a unique ability to ask the right questions at the right time and create the space for genuine insight and growth.
                  </p>
                  <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                    Senior Leader<br />
                    UK Civil Service
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                    <img
                      src="/images/Bubble-3.png"
                      alt="Leadership confidence and self-belief"
                      className="size-full object-contain"
                    />
                  </div>
                  
                  <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                    <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                    <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                      I have got my confidence back and my self-belief. The coaching has been transformational.
                    </p>
                    <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                      Country Head<br />
                      Manufacturing
                    </div>
                  </div>
                </div>
                
                <div className="relative rounded-lg bg-[#F8F5EB] p-6 shadow-sm border-l-4 border-[#F96E1E]">
                  <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                  <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                    Working with Phillip has enabled me to see patterns in my leadership that I hadn&apos;t noticed before and make significant shifts in how I show up.
                  </p>
                  <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                    Regional Head<br />
                    Financial Services
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-8">
                <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                  <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                  <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                    The progress I have made has been enormous. Phillip&apos;s approach helped me understand myself better and develop new ways of leading that feel authentic and effective.
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
            
          {/* Four-panel grid */}
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Panel 1: Leadership Equation */}
            <div className="bg-[#F8F5EB] rounded-lg p-6 border-l-4 border-[#F96E1E]">
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">The Leadership Equation</h3>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-[#1A365D] mb-2">PE = PO - I</div>
                <div className="text-sm text-gray-600">Performance = Potential - Interference</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Most leaders already have the potential they need. The question is: what&apos;s creating interference? 
                This simple equation shifts focus from adding more skills to removing what&apos;s getting in the way.
              </p>
            </div>
            
            {/* Panel 2: Embodied Perception */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#F96E1E] shadow-sm">
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Embodied Perception</h3>
              <div className="flex justify-center mb-4">
                <img
                  src="/images/embodied-awareness.png"
                  alt="Embodied awareness illustration"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your body knows things your mind hasn&apos;t figured out yet. Learning to read these signals - 
                tension, energy, intuition - creates access to intelligence beyond analytical thinking.
              </p>
            </div>
            
            {/* Panel 3: Leadership as Practice */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#F96E1E] shadow-sm">
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Leadership as Practice</h3>
              <div className="flex justify-center mb-4">
                <img
                  src="/images/practice-not-destination.png"
                  alt="Practice not destination illustration"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Leadership isn&apos;t a destination you reach; it&apos;s a practice you return to. 
                This shifts the focus from achieving perfection to developing capacity - 
                across all domains of life, not just work.
              </p>
            </div>
            
            {/* Panel 4: Values in Transition */}
            <div className="bg-[#F8F5EB] rounded-lg p-6 border-l-4 border-[#F96E1E]">
              <h3 className="text-xl font-bold text-[#1A365D] mb-4">Values in Transition</h3>
              <div className="flex justify-center mb-4">
                <img
                  src="/images/values-constellation.png"
                  alt="Values constellation illustration"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                What matters most evolves as we grow. Rather than clinging to old values or rushing 
                to new ones, there&apos;s wisdom in sitting with the tension and letting new priorities emerge naturally.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Ready to explore what&apos;s possible?
            </h2>
            
            <p className="mb-8 text-xl leading-relaxed">
              Whether you&apos;re facing a specific challenge or sensing there&apos;s more available 
              to you as a leader, let&apos;s start with a conversation.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-[#e55d0c] hover:shadow-lg"
              >
                Get in Touch
              </Link>
              
              <p className="text-sm text-gray-300">
                No lengthy forms. No pressure. Just an honest conversation about where you are 
                and where you want to go.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
