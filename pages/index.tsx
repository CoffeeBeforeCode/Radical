import React from 'react'
import Link from 'next/link'

interface PageLayoutProps {
  children: React.ReactNode
}

interface LayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    {children}
  </div>
)

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-white">
    {children}
  </div>
)

export default function Homepage() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Leadership coaching for senior executives who think deeply and act thoughtfully
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 md:text-xl">
              Working with leaders who recognize that the challenges they face 
              require more than quick fixes and standard frameworks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Start a Conversation →
              </Link>
              <Link
                href="/the-work"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#1A365D]"
              >
                Explore the Work
              </Link>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - What Leaders Bring */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              What leaders bring to this work
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              They&apos;re not looking for another workshop or methodology. 
              They&apos;re invitations to notice 
              what&apos;s already there, waiting&nbsp;to&nbsp;be&nbsp;seen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* BUBBLE-1: Tangerine background */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-1.png"
                alt="Self-perception reflection"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* BUBBLE-2: Navy background */}
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-2.png"
                alt="Connection and relationships"
                className="w-full h-full object-contain"
              />
            </div>

            {/* BUBBLE-3: Tangerine background */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-3.png"
                alt="Authentic self-expression"
                className="w-full h-full object-contain"
              />
            </div>

            {/* BUBBLE-4: Navy background */}
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-4.png"
                alt="Decision-making and judgment"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Leadership Equation */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
            {/* Equation Display - 1/3 */}
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

            {/* Explanation - 2/3 Asymmetric */}
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Most leaders already have the <span className="text-[#F96E1E]">potential</span>.
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                The question is: what&apos;s getting in the way of accessing it consistently? 
                Usually, it&apos;s not a lack of capability. It&apos;s interference.
              </p>
              <p className="text-white/80">
                <strong className="text-[#F96E1E]">PE</strong> = Potential Expressed<br />
                <strong className="text-[#F96E1E]">PO</strong> = Potential Owned<br />
                <strong className="text-[#F96E1E]">I</strong> = Interference
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Internal Blocks */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              What creates interference
            </h2>
            <p className="max-w-4xl text-lg text-gray-700 leading-relaxed">
              Everyone has their &ldquo;stuff.&rdquo; The question is whether dealing with it now 
              is the best use&nbsp;of&nbsp;your&nbsp;energy.
            </p>
          </div>

          {/* Aga-Style Boxy Grid with Bubble-5 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Large Block - Inner Dialogue */}
            <div className="rounded-lg bg-[#1A365D] p-6 text-white shadow-lg md:col-span-2 lg:col-span-2">
              <div className="mb-4 text-3xl">🧠</div>
              <h3 className="mb-4 text-xl font-bold">Inner Dialogue</h3>
              <div className="space-y-3">
                <p className="text-white/90">
                  &ldquo;I don&apos;t really belong at this level.&rdquo;
                </p>
                <p className="text-white/90">
                  &ldquo;Anything less than flawless is failure.&rdquo;
                </p>
                <p className="text-sm text-white/80">
                  That internal commentary creating doubt where there should be confidence.
                </p>
              </div>
            </div>

            {/* BUBBLE-5: Distributed EQ Square */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-5.png"
                alt="Handling change and flexibility"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Standard block */}
            <div className="rounded-lg border-l-4 border-[#F96E1E] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">⚖️</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Competing Values</h3>
              <p className="text-sm text-gray-600">
                Autonomy vs belonging. Care vs performance. Values pulling different directions.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-[#1A365D] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">🌪️</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Environmental Blockers</h3>
              <p className="text-sm text-gray-600">
                Toxic team dynamics, silos, excessive admin that drains energy.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-[#F96E1E] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">🎭</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Role Identity</h3>
              <p className="text-sm text-gray-600">
                Who you are vs what your role demands. Finding authentic leadership voice.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-[#1A365D] bg-white p-4 shadow">
              <div className="mb-2 text-2xl">⏰</div>
              <h3 className="mb-2 font-semibold text-[#1A365D]">Time Pressure</h3>
              <p className="text-sm text-gray-600">
                Always moving, rarely reflecting. The urgency trap that prevents clarity.
              </p>
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

          {/* Revolutionary Grid Layout */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            
            {/* OBSERVATION FIRST - Large Immersive Card */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                {/* Background - Hand-drawn observation eye */}
                <div className="absolute inset-0">
                    <img
                        src="/images/observation-eye.png"
                        alt="Hand-drawn eye representing observation"
                        className="w-full h-full object-cover opacity-15"
                    />
                </div>
                
                {/* Observation Layer */}
                <div className="relative h-full min-h-[320px] p-8 flex flex-col justify-between"
                     style={{
                       background: `linear-gradient(135deg, 
                         rgba(26, 54, 93, 0.95) 0%, 
                         rgba(26, 54, 93, 0.85) 50%, 
                         rgba(249, 110, 30, 0.1) 100%)`
                     }}>
                    
                    {/* Top: Method Title */}
                    <div>
                        <div className="inline-flex items-center mb-4">
                            <div className="w-3 h-3 rounded-full bg-[#F96E1E] mr-3" 
                                 style={{animation: 'subtleFloat 6s ease-in-out infinite'}}></div>
                            <h3 className="text-2xl font-bold text-white tracking-wide">Observation First</h3>
                        </div>
                        
                        <p className="text-white/90 text-base leading-relaxed mb-6">
                            We start by noticing patterns, dynamics, friction before we move. 
                            Sometimes the most important insights arise in the silence between words.
                        </p>
                    </div>
                    
                    {/* Bottom: Visual Metaphor */}
                    <div className="flex justify-end">
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                            <div className="w-12 h-12 border-2 border-white/40 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-[#F96E1E] rounded-full" 
                                     style={{animation: 'pulse 2s ease-in-out infinite'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* EMBODIED PERCEPTION - Vertical Bubble Card */}
            <div className="relative overflow-hidden bg-[#F8F5EB] rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                 style={{boxShadow: '0 4px 6px rgba(26, 54, 93, 0.1), 0 1px 3px rgba(26, 54, 93, 0.08)'}}>
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F96E1E] to-[#1A365D]"></div>
                
                <div className="h-full flex flex-col">
                    {/* Hand-drawn body awareness icon */}
                    <div className="aspect-square rounded-lg bg-[#F96E1E] p-3 mb-4 flex items-center justify-center">
                        <img
                            src="/images/body-mind-heart.png"
                            alt="Hand-drawn figure showing head, heart, gut connection"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#1A365D] mb-3">Embodied Perception</h3>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                        You lead with head, heart, and gut. We work with all three.
                    </p>
                </div>
            </div>

            {/* VALUES IN MOTION - Vertical Bubble Card */}
            <div className="relative overflow-hidden bg-[#F8F5EB] rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                 style={{boxShadow: '0 4px 6px rgba(26, 54, 93, 0.1), 0 1px 3px rgba(26, 54, 93, 0.08)'}}>
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F96E1E] to-[#1A365D]"></div>
                
                <div className="h-full flex flex-col">
                    {/* Hand-drawn constellation map */}
                    <div className="aspect-square rounded-lg bg-[#1A365D] p-3 mb-4 flex items-center justify-center">
                        <img
                            src="/images/values-constellation.png"
                            alt="Hand-drawn constellation map of connected values"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#1A365D] mb-3">Values in Motion</h3>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                        Mapping what truly matters through constellation work.
                    </p>
                </div>
            </div>

            {/* SITTING WITH TENSION - Wide Dynamic Card */}
            <div className="md:col-span-2 relative overflow-hidden bg-[#1A365D] rounded-lg p-8 text-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg">
                {/* Background Texture - Abstract tension illustration */}
                <div className="absolute right-0 top-0 w-32 h-32 opacity-10">
                    <img
                        src="/images/tension-balance.png"
                        alt="Hand-drawn representation of balanced tension"
                        className="w-full h-full object-contain"
                    />
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mr-6">
                            <div className="w-16 h-16 rounded-lg bg-[#F96E1E] p-3 flex items-center justify-center">
                                <img
                                    src="/images/sitting-meditation.png"
                                    alt="Hand-drawn figure in contemplative pose"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-3">Sitting with Tension</h3>
                            <p className="text-white/90 leading-relaxed">
                                Some tensions aren&apos;t meant to be solved. They&apos;re meant to be understood. 
                                Emotional discernment over reaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* METHODOLOGY PHILOSOPHY - Organic Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#F8F5EB] to-white p-8 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg relative rounded-lg"
                 style={{
                   borderRadius: '12px 24px 12px 24px',
                   boxShadow: '0 4px 6px rgba(26, 54, 93, 0.1), 0 1px 3px rgba(26, 54, 93, 0.08)'
                 }}>
                
                {/* Floating Visual Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F96E1E]/20"
                     style={{animation: 'subtleFloat 6s ease-in-out infinite'}}></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-[#1A365D]/20"
                     style={{animation: 'subtleFloat 6s ease-in-out infinite', animationDelay: '2s'}}></div>
                
                <div className="relative z-10">
                    <div className="mb-6">
                        <div className="inline-flex items-center mb-4">
                            <div className="w-2 h-12 bg-gradient-to-b from-[#F96E1E] to-[#1A365D] rounded-full mr-4"></div>
                            <h3 className="text-xl font-bold text-[#1A365D]">Framework Philosophy</h3>
                        </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                        These approaches emerge from decades of working with leaders who think deeply and act thoughtfully.
                    </p>
                    
                    <p className="text-sm text-gray-600 italic">
                        Each framework adapts to your context, your challenges, your way of seeing the world.
                    </p>
                </div>
            </div>

          </div>
          
          {/* Closing Philosophical Statement */}
          <div className="mt-12 text-center">
              <div className="inline-block max-w-2xl p-6 rounded-lg bg-gradient-to-r from-[#F8F5EB] to-white"
                   style={{boxShadow: '0 4px 6px rgba(26, 54, 93, 0.1), 0 1px 3px rgba(26, 54, 93, 0.08)'}}>
                  <p className="text-gray-700 leading-relaxed italic">
                      &ldquo;The most powerful questions aren&apos;t the ones we ask ourselves. 
                      They&apos;re the ones we finally allow ourselves to hear.&rdquo;
                  </p>
              </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Testimonials */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              Leaders reflect
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              This work isn&apos;t loud. It doesn&apos;t need to be.<br />
              It resonates when you&apos;re ready to hear yourself more clearly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
                <img
                  src="/images/Bubble-6.png"
                  alt="Leadership transformation"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#1A365D]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#1A365D]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  My team and I have never had such honest conversations with each other, until I started working with Phillip.
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
                  src="/images/Bubble-1.png"
                  alt="Self-perception and confidence"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  Mentally, I am so pleased I arrived at this point with your coaching for which I am so grateful. I have got my confidence back.
                </p>
                <div className="text-right text-sm font-medium text-[#1A365D] not-italic">
                  Country Head<br />
                  Manufacturing
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

      {/* NAVY STRIPE - Call to Action */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Ready for a different conversation?
            </h2>
            
            <div className="mx-auto mb-8 max-w-2xl">
              <p className="text-lg text-white/90 leading-relaxed">
                This isn&apos;t about fixing what&apos;s broken.<br />
                It&apos;s about accessing what&apos;s already there.
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

      <style jsx>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </Layout>
  )
}
