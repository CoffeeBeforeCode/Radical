import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout
      title="Global Leadership Coach"
      description="Executive coaching partnerships with senior leaders across Europe, Middle East, Americas, and Asia Pacific using the Leadership Equation: PE = PO - I."
      canonical="/"
    >
      {/* HERO SECTION - White background with personal opening */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Portrait Column */}
            <div className="order-2 md:order-1">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/Phillip-Collins-Portrait.jpg"
                  alt="Phillip Collins - Global Leadership Coach"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 md:order-2">
              <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
                Hello! <span className="text-[#F96E1E]">I&apos;m Phillip Collins</span>
              </h1>
              
              <div className="mt-8 space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                  My coaching partnerships have spanned diverse contexts and cultures, allowing me to work with senior leaders across continents and industries. This global experience has deepened my understanding of leadership challenges across different cultural contexts.
                </p>

                {/* Coloured Box */}
                <div className="rounded-lg bg-[#7E2D40] p-6 text-white">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-[#D4B86A]">Core Regions</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Europe (UK, Ireland, France, Belgium, Holland)</li>
                        <li>• Middle East (UAE, Saudi Arabia, Israel)</li>
                        <li>• Americas (USA, Argentina, Brazil)</li>
                        <li>• Asia &amp; Pacific (India, Singapore)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-[#D4B86A]">Primary Industries</h3>
                      <p className="mb-3 text-sm">I&apos;ve worked with executives across major industries including:</p>
                      <ul className="space-y-2 text-sm">
                        <li>• Technology &amp; Digital Innovation</li>
                        <li>• Healthcare &amp; Life Sciences</li>
                        <li>• Financial Services &amp; Banking</li>
                        <li>• Manufacturing &amp; Engineering</li>
                        <li>• Government &amp; Public Sector</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-gray-600">
                  Within these broad industries, I&apos;ve partnered with leaders across numerous sectors - too many to list here, ranging from early-stage startups to established multinationals.
                </p>

                <p className="text-lg leading-relaxed text-gray-600">
                  This breadth of experience enriches each coaching partnership while maintaining focus on your unique context and objectives.
                </p>

                {/* Signature */}
                <div className="pt-6">
                  <p className="font-['Yesteryear'] text-2xl text-[#DD9933]">Phillip Collins</p>
                  
                  {/* Social Icons */}
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-[#1A365D] hover:text-[#F96E1E]">
                      <span className="sr-only">LinkedIn</span>
                      <svg                       className="size-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-[#1A365D] hover:text-[#F96E1E]">
                      <span className="sr-only">X</span>
                      <svg                       className="size-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-[#1A365D] hover:text-[#F96E1E]">
                      <span className="sr-only">Instagram</span>
                      <svg                       className="size-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.295C4.198 14.81 3.652 13.531 3.652 12c0-1.531.546-2.809 1.474-3.693.875-.805 2.026-1.295 3.323-1.295 1.297 0 2.448.49 3.323 1.295.928.884 1.474 2.162 1.474 3.693 0 1.531-.546 2.81-1.474 3.693-.875.805-2.026 1.295-3.323 1.295zm7.068-7.405h-1.829v1.829h1.829v-1.829zm0-1.219h-1.829V6.535h1.829v1.829z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* FULL WIDTH CTA */}
      <section className="w-full bg-[#F96E1E] py-12">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Curious about your leadership equation?
            </h2>
            <Link 
              href="/contact" 
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#F96E1E] transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              Let&apos;s explore together
            </Link>
          </div>
        </PageLayout>
      </section>

      {/* WHY PEOPLE NEED A LEADERSHIP COACH */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              Why People need a <span className="text-[#F96E1E]">Leadership Coach</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-[#7E2D40] p-6 text-center text-white">
              <div className="mb-4 text-3xl">🎯</div>
              <h4 className="mb-4 text-xl font-semibold">The Leadership Equation</h4>
              <p className="text-sm leading-relaxed">
                                  I help executives apply the PE=PO-I equation in their specific context. When we reduce interference—all the &ldquo;stuff&rdquo; that gets in your way—your performance naturally rises to meet your potential. Our coaching partnership creates space for you to identify what&apos;s limiting your effectiveness and develop strategies that work for you.
              </p>
            </div>

            <div className="rounded-lg bg-[#1A365D] p-6 text-center text-white">
              <div className="mb-4 text-3xl">🌍</div>
              <h4 className="mb-4 text-xl font-semibold">Cross-Cultural Intelligence</h4>
              <p className="text-sm leading-relaxed">
                My coaching partnerships have spanned diverse contexts across Europe, the Middle East, Americas, and Asia. This global experience has deepened my understanding of leadership challenges across different cultural contexts, allowing you to navigate the complexities of leading across boundaries with strategic clarity.
              </p>
            </div>

            <div className="rounded-lg bg-[#F96E1E] p-6 text-center text-white">
              <div className="mb-4 text-3xl">❤️</div>
              <h4 className="mb-4 text-xl font-semibold">Emotional Intelligence</h4>
              <p className="text-sm leading-relaxed">
                Leadership effectiveness is profoundly influenced by emotional intelligence. Through our partnership, you&apos;ll develop greater self-awareness, emotional regulation, and the ability to create psychological safety for your teams while maintaining authentic authority.
              </p>
            </div>

            <div className="rounded-lg bg-[#D4B86A] p-6 text-center text-white">
              <div className="mb-4 text-3xl">⚖️</div>
              <h4 className="mb-4 text-xl font-semibold">Values Alignment</h4>
              <p className="text-sm leading-relaxed">
                True leadership effectiveness emerges when your actions align with your deepest values. Our work together helps you identify and embody your core principles, creating consistency between who you are and how you lead, resulting in more authentic and sustainable leadership.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Global Reach */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Global perspective, personal connection
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-white/90 leading-relaxed">
              My coaching partnerships span diverse contexts and cultures, working with senior leaders across continents and industries.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/images/europe.png"
                  alt="Europe"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">UK, Ireland, France, Belgium, Switzerland, Netherlands, Sweden</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/images/asia.png"
                  alt="Asia"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">UAE, Saudi Arabia, Israel, India, Singapore</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/images/north-america.png"
                  alt="North America"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">USA, Canada</p>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <div className="mb-4 flex justify-center">
                <img
                  src="/images/south-america.png"
                  alt="South America"
                  className="size-20 object-contain"
                />
              </div>
              <p className="text-sm text-white/80 text-center">Argentina, Brazil, Chile</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="mx-auto max-w-2xl rounded-lg bg-[#F96E1E] p-6">
              <p className="text-lg font-medium text-white">
                This global experience deepens my understanding of leadership challenges across different cultural contexts, enriching each coaching partnership while maintaining focus on your unique journey.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* TANGERINE STRIPE - CTA */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              This is your leadership equation.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              Ready to reduce the interference and unlock your potential?
            </p>
            <Link 
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#F96E1E] transition-all hover:bg-gray-50 hover:shadow-lg"
            >
              Start the conversation
            </Link>
          </div>
        </PageLayout>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1A365D] md:text-4xl">
              What leaders say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Real feedback from senior executives across industries and continents.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-square rounded-lg bg-white p-4 flex items-center justify-center shadow-sm">
                <img
                  src="/images/Bubble-1.png"
                  alt="Leadership development and growth"
                  className="size-full object-contain"
                />
              </div>
              
              <div className="relative rounded-lg bg-white p-6 shadow-sm border-l-4 border-[#F96E1E]">
                <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">&ldquo;</div>
                <p className="mb-4 pl-6 text-base leading-relaxed italic text-gray-800">
                  When you feel like you&apos;re not listening anymore. That&apos;s when the real questions begin. They&apos;re the ones we finally allow ourselves to hear.
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#F8F5EB] p-6">
              <div className="mb-4 text-center">
                <img
                  src="/images/Bubble-6.png"
                  alt="The Leadership Equation"
                  className="mx-auto h-16 w-16 object-contain"
                />
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-[#1A365D]">The Leadership Equation</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                PE = PO - I. Performance equals Potential minus Interference. Simple to state, profound to live.
              </p>
            </div>

            <div className="rounded-lg bg-[#F8F5EB] p-6">
              <div className="mb-4 text-center">
                <img
                  src="/images/Bubble-2.png"
                  alt="Values Constellation"
                  className="mx-auto h-16 w-16 object-contain"
                />
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-[#1A365D]">Values Constellation</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                Your values don&apos;t exist in isolation. They form constellations that guide decisions when logic isn&apos;t enough.
              </p>
            </div>

            <div className="rounded-lg bg-[#F8F5EB] p-6">
              <div className="mb-4 text-center">
                <img
                  src="/images/Bubble-3.png"
                  alt="Embodied Perception"
                  className="mx-auto h-16 w-16 object-contain"
                />
              </div>
              <h3 className="mb-3 text-center text-lg font-bold text-[#1A365D]">Embodied Perception</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                What you notice first tells you about yourself. What you avoid noticing tells you even more.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Foundational Learning */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              Books that shaped my thinking
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
              My approach has been shaped by key works that have influenced how I think about 
              leadership development, human potential, and meaningful change.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">The Inner Game of Tennis</h3>
              <p className="mb-3 text-sm font-medium text-[#F96E1E]">Timothy Gallwey</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                The foundation of performance coaching. Gallwey&apos;s insights about reducing interference 
                between mind and body remain revolutionary.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Whispering in the Wind</h3>
              <p className="mb-3 text-sm font-medium text-[#F96E1E]">John Grinder & Carmen Bostic St. Clair</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Advanced NLP principles that deepened my understanding of how language shapes 
                perception and possibilities.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">The Work</h3>
              <p className="mb-3 text-sm font-medium text-[#F96E1E]">Byron Katie</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Four simple questions that cut through assumption and story to reveal what&apos;s 
                actually true in any situation.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
