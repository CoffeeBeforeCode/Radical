import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function ThisIsPersonal() {
  return (
    <Layout
      title="This is Personal - Phillip Collins"
      description="The personal journey from &apos;sensitive boy&apos; to global leadership coach. How perceived weakness became developed strength over 30 years of intentional development."
      canonical="/this-is-personal"
    >
      {/* HERO SECTION - White background with personal opening */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Main headline - spans 3 columns */}
            <div className="md:col-span-3">
              <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
                This is <span className="text-[#F96E1E]">personal</span>.
              </h1>
              
              <div className="mt-8 space-y-6">
                <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                  I&apos;ve spent three decades working with leaders across the globe.<br />
                  What stays with me isn&apos;t their titles.<br />
                  It&apos;s their <strong>turning points</strong>.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-600">
                  Their questions. Their internal contradictions.<br />
                  The moment they stopped performing leadership<br />
                  and started <em>living</em> it.
                </p>
                
                <div className="rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6">
                  <p className="text-lg font-medium leading-relaxed text-[#1A365D]">
                    That&apos;s where I do my best work —<br />
                    not in the certainty, but in the search.
                  </p>
                </div>
              </div>
            </div>

            {/* Bubble image */}
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4 flex items-center justify-center">
              <img
                src="/images/Bubble-personal-1.png"
                alt="Personal leadership reflection"
                className="size-full object-contain"
              />
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - The Sensitive Boy Story */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              From weakness to <span className="text-[#F96E1E]">superpower</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur md:col-span-2">
              <div className="space-y-6 text-white">
                <p className="text-lg leading-relaxed">
                  As a child, I was described as a <strong>&ldquo;sensitive boy.&rdquo;</strong> For twenty years, 
                  I received this as a weakness — a belief I carried that shaped how I saw myself 
                  and moved through the world.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Twenty years ago, I recognised that what I had always experienced as a limitation 
                  was, in fact, something to embrace and develop.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#F96E1E] p-6 text-white md:col-span-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What others called sensitivity...</h3>
                <div className="space-y-3">
                  <p className="text-white/90">
                    • Heightened capacity for embodied perception
                  </p>
                  <p className="text-white/90">
                    • Ability to sense what others miss
                  </p>
                  <p className="text-white/90">
                    • Perception of micro-muscle movements
                  </p>
                  <p className="text-white/90">
                    • Recognition of energetic shifts
                  </p>
                  <p className="text-white/90">
                    • Understanding unspoken dynamics
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white/5 p-6 backdrop-blur md:col-span-4">
              <div className="text-center">
                <p className="text-xl font-medium leading-relaxed text-[#F96E1E]">
                  In the subsequent two decades, I&apos;ve developed this into what many call 
                  my &lsquo;superpower&rsquo; — though I dislike the phrase.<br />
                  <span className="text-white">It&apos;s simply how I work.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-[#F96E1E] p-8">
            <p className="text-center text-xl font-semibold leading-relaxed text-white">
              This personal transformation — from perceived weakness to developed strength —<br />
              is the heart of every coaching conversation I have.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - How I Coach / Philosophy */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="md:col-span-2">
              <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                A quiet <span className="text-[#F96E1E]">lens</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  I don&apos;t push. I don&apos;t prescribe. I observe, then invite.<br />
                  What&apos;s said — and unsaid.<br />
                  What&apos;s felt — but not yet named.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  I blend the strategic with the emotional,<br />
                  the measurable with the intuitive,<br />
                  the urgent with the important.
                </p>
              </div>
            </div>

            <div className="space-y-4 md:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#1A365D]">My role</h3>
                <p className="text-gray-600">
                  Help leaders find not just what to do, but how to be — 
                  with presence, dignity, and trust.
                </p>
              </div>
              
              <div className="rounded-lg bg-[#1A365D] p-6 text-white">
                <h3 className="mb-3 text-lg font-bold">Their discovery</h3>
                <p className="text-white/90">
                  Authentic leadership that emerges from within rather than 
                  change imposed from without.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - Why I'm Here */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-12 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              Why I'm here
            </h2>
            
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-6 text-left">
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <p className="text-lg text-gray-700">
                      Because leadership is hard — especially when you care.
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <p className="text-lg text-gray-700">
                      Because strategy means nothing if you're not sleeping well.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <p className="text-lg text-gray-700">
                      Because authenticity isn&apos;t a tactic — it&apos;s a tension.
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-[#F96E1E] p-6">
                    <p className="text-lg font-medium text-white">
                      Because the best leaders don&apos;t need fixing — they need space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Values Integration */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              What <span className="text-[#F96E1E]">guides</span> me
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
              These aren&apos;t aspirational values. They&apos;re lived principles<br />
              that shape every conversation, every decision, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-3xl">🎯</div>
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Wisdom</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Applied through discernment, not just knowledge.
              </p>
            </div>

            <div className="rounded-lg bg-[#1A365D] p-6 text-center text-white">
              <div className="mb-4 text-3xl">🔒</div>
              <h3 className="mb-3 text-lg font-bold">Integrity</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Lived, not performed. The foundation of trust.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-3xl">🪞</div>
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Self-respect</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The origin of every healthy boundary.
              </p>
            </div>

            <div className="rounded-lg bg-[#F96E1E] p-6 text-center text-white">
              <div className="mb-4 text-3xl">📈</div>
              <h3 className="mb-3 text-lg font-bold">Personal Development</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Not a badge, but a way of life.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 text-3xl">🕊️</div>
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Freedom</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To think, question, and choose consciously.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Global Experience */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
                A global <span className="text-[#F96E1E]">perspective</span>
              </h2>
              
              <div className="space-y-6 text-white">
                <p className="text-lg leading-relaxed">
                  My coaching partnerships have spanned diverse contexts and cultures, 
                  allowing me to work with senior leaders across continents and industries.
                </p>
                
                <p className="text-lg leading-relaxed text-white/90">
                  This global experience has deepened my understanding of leadership 
                  challenges across different cultural contexts, enriching each coaching 
                  partnership whilst maintaining focus on your unique journey.
                </p>
              </div>
            </div>

            <div className="aspect-square flex items-center justify-center rounded-lg bg-[#F96E1E] p-4">
              <img
                src="/images/Bubble-personal-2.png"
                alt="Global leadership perspective"
                className="size-full object-contain"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <h3 className="mb-4 text-xl font-bold text-[#F96E1E]">Core Regions</h3>
              <div className="space-y-2 text-white/90">
                <p>• Europe (UK, Ireland, France, Belgium, Netherlands)</p>
                <p>• Middle East (UAE, Saudi Arabia, Israel)</p>
                <p>• Americas (USA, Argentina, Brazil)</p>
                <p>• Asia & Pacific (India, Singapore)</p>
              </div>
            </div>

            <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
              <h3 className="mb-4 text-xl font-bold text-[#F96E1E]">Primary Industries</h3>
              <div className="space-y-2 text-white/90">
                <p>• Technology & Digital Innovation</p>
                <p>• Healthcare & Life Sciences</p>
                <p>• Financial Services & Banking</p>
                <p>• Manufacturing & Engineering</p>
                <p>• Government & Public Sector</p>
              </div>
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">The Inner Game of Tennis</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Timothy Gallwey&apos;s performance equation (PE = PO - I) became the foundation 
                of my Leadership Equation — reducing interference rather than forcing performance.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">The 7 Habits of Highly Effective People</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Stephen Covey&apos;s &ldquo;Begin with the End in Mind&rdquo; framework, particularly the funeral 
                scenario across life domains, shaped my multi-domain leadership philosophy.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">Transitions</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                William Bridges&apos; distinction between external change and internal transition 
                informs how I support leaders through major life shifts.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">True North</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Bill George&apos;s authentic leadership framework reinforced my belief 
                that leadership development is fundamentally about self-discovery.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">Best Practice in Performance Coaching</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Carol Wilson&apos;s seven principles of coaching provide the ethical and 
                methodological foundation for my non-directive approach.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">The Four Agreements</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Don Miguel Ruiz&apos;s principles for personal freedom translate directly 
                into leadership authenticity and self-respect.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - Learning Journey */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                The learning never stops
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="rounded-lg bg-[#F8F5EB] p-6 md:col-span-3">
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    My dedication to coaching and leadership development spans over three decades. 
                    In 1991, I attended my first Coach as Leader training programme, which fundamentally 
                    shaped how I showed up every day, particularly during the various turnaround missions 
                    I led throughout my career.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Throughout my journey, I&apos;ve sought learning from original thought leaders to continuously 
                    enhance my approach. I&apos;ve trained directly with John Grinder, co-creator of 
                    Neuro Linguistic Programming, and completed Seth Godin&apos;s altMBA programme.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    My development has also included deeper exploration of Emotional Intelligence through 
                    Reuven Bar-On&apos;s work, as well as Gestalt approaches, Clean Language, and 
                    Rational Emotive Behaviour Therapy (REBT).
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-lg bg-[#1A365D] p-4 text-white">
                  <div className="text-2xl font-bold">1991</div>
                  <p className="text-sm text-white/80">First Coach as Leader training</p>
                </div>
                
                <div className="rounded-lg bg-[#F96E1E] p-4 text-white">
                  <div className="text-2xl font-bold">2016</div>
                  <p className="text-sm text-white/80">Seth Godin&apos;s altMBA</p>
                </div>
                
                <div className="rounded-lg bg-[#1A365D] p-4 text-white">
                  <div className="text-2xl font-bold">30+</div>
                  <p className="text-sm text-white/80">Years of development</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-[#F96E1E] p-8 text-center">
              <p className="text-xl font-semibold leading-relaxed text-white">
                This continuous learning enriches the perspective I bring to our coaching partnership<br />
                whilst maintaining focus on your unique journey and objectives.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Personal Quote */}
      <section className="w-full bg-[#1A365D] py-12 md:py-16">
        <PageLayout>
          <div className="text-center">
            <blockquote className="mx-auto max-w-4xl">
              <p className="font-['Waiting_for_the_Sunrise'] text-2xl font-light leading-relaxed text-white md:text-3xl">
                &ldquo;I&apos;ve learned that the most powerful shifts don&apos;t happen in the spotlight.
              </p>
              <p className="font-['Waiting_for_the_Sunrise'] text-2xl font-light leading-relaxed text-white md:text-3xl">
                They happen in quiet spaces, with honest questions, and just enough courage.&rdquo;
              </p>
              <footer className="mt-8 text-[#F96E1E] font-medium">
                — Phillip Collins
              </footer>
            </blockquote>
          </div>
        </PageLayout>
      </section>

      {/* TANGERINE STRIPE - Closing CTA */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">
              Ready to begin?
            </h2>
            
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90">
              This personal journey informs every coaching conversation.<br />
              If something here resonates, let&apos;s explore what&apos;s possible for you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#F96E1E] transition-colors hover:bg-gray-100"
              >
                Let&apos;s Talk →
              </Link>
              <Link
                href="/the-work"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#F96E1E]"
              >
                The Work
              </Link>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
