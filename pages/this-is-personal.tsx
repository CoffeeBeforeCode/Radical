import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function ThisIsPersonal() {
  return (
    <Layout
      title="This is Personal - Phillip Collins"
      description="The personal journey from 'sensitive boy' to global leadership coach. How perceived weakness became developed strength over 30 years of intentional development."
      canonical="/this-is-personal"
    >
      {/* HERO SECTION - Fixed Structure */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          {/* Headline First - Separate */}
          <div className="max-w-4xl space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
              This is <span className="text-[#F96E1E]">personal</span>.
            </h1>
          </div>
          
          {/* Text Box + Image Grid */}
          <div className="w-full mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Text Box - 3/4 width */}
                <div className="md:col-span-3 rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px] md:min-h-[250px]">
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    With over 10,000 hours of working with leaders across the globe.<br />
                    What stays with me isn&apos;t their titles.<br />
                    It&apos;s their <strong>turning points</strong>.
                  </p>
                </div>
                
                {/* Image Box - 1/4 width - NO BORDER */}
                <div className="md:col-span-1 rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/images/embodied-perception.png"
                    alt="Personal leadership reflection"
                    className="size-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Content */}
          <div className="max-w-4xl space-y-8 mt-8">
            <p className="text-lg leading-relaxed text-gray-600">
              Their questions. Their internal contradictions.<br />
              The moment they stopped performing leadership and started <em>living</em> it.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              That&apos;s where I do my best work.<br />
              Not in the certainty, but in the search.
            </p>
          </div>
          
          {/* CTAs - Completely Outside */}
          <div className="mx-auto max-w-7xl mt-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
              >
                Let&apos;s Talk →
              </Link>
              <Link
                href="/the-work"
                className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white"
              >
                The Work
              </Link>
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
                  In childhood, I was described as a <strong>&ldquo;sensitive child.&rdquo;</strong> For years, 
                  I received this as a weakness. A belief I carried that shaped how I saw myself 
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
                  my &lsquo;superpower&rsquo;, though I dislike the phrase.<br />
                  <span className="text-white">It&apos;s simply how I work.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-lg bg-[#F96E1E] p-8">
            <p className="text-center text-xl font-semibold leading-relaxed text-white">
              This personal transformation, from perceived weakness to developed strength,<br />
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
                  What&apos;s said and unsaid.<br />
                  What&apos;s felt, and not yet named.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700">
                  I blend the strategic with the emotional,<br />
                  the measurable with the intuitive,<br />
                  the pressing with the timeless.
                </p>
              </div>
            </div>
            <div className="space-y-4 md:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-[#1A365D]">My role</h3>
                <p className="text-gray-600">
                  Help leaders find not just what to do, but how to be. 
                  With presence, dignity, and trust.
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
              Why I&apos;m here
            </h2>
            
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-6 text-left">
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <p className="text-lg text-gray-700">
                      Because leadership is hard, especially when you care.
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <p className="text-lg text-gray-700">
                      Because strategy means nothing if you&apos;re not sleeping well.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6 text-left">
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <p className="text-lg text-gray-700">
                      Because authenticity isn&apos;t a tactic. It&apos;s a tension.
                    </p>
                  </div>
                  
                  <div className="rounded-lg bg-[#F96E1E] p-6">
                    <p className="text-lg font-medium text-white">
                      Because the best leaders don&apos;t need fixing. They need space.
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
            <div className="rounded-lg bg-white p-6 text-center shadow-sm flex flex-col justify-center items-center aspect-square">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Wisdom</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Applied through discernment, not just knowledge.
              </p>
            </div>
            <div className="rounded-lg bg-[#1A365D] p-6 text-center text-white flex flex-col justify-center items-center aspect-square">
              <h3 className="mb-3 text-lg font-bold">Integrity</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Lived, not performed. The foundation of trust.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm flex flex-col justify-center items-center aspect-square">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Self-respect</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The origin of every healthy boundary.
              </p>
            </div>
            <div className="rounded-lg bg-[#F96E1E] p-6 text-center text-white flex flex-col justify-center items-center aspect-square">
              <h3 className="mb-3 text-lg font-bold">Personal Development</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Not a badge, but a way of life.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 text-center shadow-sm flex flex-col justify-center items-center aspect-square">
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
                src="/images/global-perspective.png"
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
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.amazon.co.uk/Inner-Game-Tennis-ultimate-performance/dp/1035047926" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/inner-game-tennis-cover.jpg"
                    alt="The Inner Game of Tennis book cover"
                    className="h-16 w-12 rounded object-cover shadow-sm"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">
                  <a 
                    href="https://www.amazon.co.uk/Inner-Game-Tennis-ultimate-performance/dp/1035047926" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    The Inner Game of Tennis
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Timothy Gallwey&apos;s performance equation (PE = PO - I) became the foundation 
                  of my Leadership Equation. Reducing interference rather than forcing performance.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.amazon.co.uk/Parallax-See-Yourself-New-Understanding-ebook/dp/B07923Z8X2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/The-Parallax-cover.jpg"
                    alt="The Parallax book cover"
                    className="h-16 w-12 rounded object-cover shadow-sm"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">
                  <a 
                    href="https://www.amazon.co.uk/Parallax-See-Yourself-New-Understanding-ebook/dp/B07923Z8X2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    The Parallax
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Donald R. Rickert&apos;s exploration of shifting perspective to see familiar situations 
                  differently. Integration of multiple viewpoints for deeper understanding.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.amazon.co.uk/Transitions-40th-Anniversary-Making-Changes/dp/0738285404" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/Transitions-cover.jpg"
                    alt="Transitions book cover"
                    className="h-16 w-12 rounded object-cover shadow-sm"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">
                  <a 
                    href="https://www.amazon.co.uk/Transitions-40th-Anniversary-Making-Changes/dp/0738285404" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Transitions
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  William Bridges&apos; distinction between external change and internal transition 
                  informs how I support leaders through major life shifts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.paulineroseclance.com/impostor_phenomenon.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/The-Imposter-Phenomenon.jpg"
                    alt="The Imposter Phenomenon book cover"
                    className="h-16 w-12 rounded object-cover shadow-sm"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">
                  <a 
                    href="https://www.paulineroseclance.com/impostor_phenomenon.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    The Imposter Phenomenon
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Dr. Pauline Rose Clance&apos;s groundbreaking work on imposter syndrome has deeply 
                  influenced how I help leaders recognize and work with their internal narratives 
                  around competence and belonging.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.amazon.co.uk/Best-Practice-Performance-Coaching-Professionals/dp/0749450827" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/performance-coaching-cover.jpg"
                    alt="Best Practice in Performance Coaching book cover"
                    className="h-16 w-12 rounded object-cover shadow-sm"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">
                  <a 
                    href="https://www.amazon.co.uk/Best-Practice-Performance-Coaching-Professionals/dp/0749450827" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Best Practice in Performance Coaching
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Carol Wilson&apos;s seven principles of coaching provide the ethical and 
                  methodological foundation for my non-directive approach.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm">
              <div className="flex-shrink-0">
                <a 
                  href="https://www.amazon.co.uk/Four-Agreements-Practical-Personal-Freedom/dp/1878424319" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/four-agreements-cover.jpg"
                    alt="The Four Agreements book cover"
                    className="h-16 w-12 rounded object-cover shadow-sm"
                  />
                </a>
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-lg font-bold text-[#F96E1E]">
                  <a 
                    href="https://www.amazon.co.uk/Four-Agreements-Practical-Personal-Freedom/dp/1878424319" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    The Four Agreements
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Don Miguel Ruiz&apos;s principles for personal freedom translate directly 
                  into leadership authenticity and self-respect.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE STRIPE - Learning Journey */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              The learning never stops
            </h2>
          </div>
          
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      Reuven Bar-On&apos;s work, as well as Gestalt approaches, Clean Language, 
                      Cognitive Behavioural Therapy, and Rational Emotive Behaviour Therapy (REBT).
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-[#1A365D] p-6 text-white md:col-span-1">
                  <div className="flex h-full items-center justify-center">
                    <img
                      src="/images/Learning-Journey.png"
                      alt="Learning journey timeline"
                      className="size-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 rounded-lg bg-[#F96E1E] p-8 text-center">
            <p className="text-xl font-semibold leading-relaxed text-white">
              This continuous learning enriches the perspective I bring to our coaching partnership<br />
              whilst maintaining focus on your unique journey and objectives.
            </p>
          </div>
        </PageLayout>
      </section>



      {/* DARK BLUE STRIPE - Featured Leadership Quote */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <p className="font-['Waiting_for_the_Sunrise'] text-2xl leading-relaxed text-white md:text-3xl font-bold">
              &ldquo;Leadership isn&apos;t a <span className="text-[#F96E1E]">thing</span> I do at work.<br />
              It&apos;s the person I&apos;ve chosen to become.&rdquo;
            </p>
          </div>
        </PageLayout>
      </section>

 {/* CREAM STRIPE - Working with what is */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl text-[#1A365D] md:text-4xl font-bold">
                Working with <span className="text-[#F96E1E]">what is</span>
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-700">
                In the kitchen, like in my work, I start with what&apos;s here. 
                The ingredients that are present. The conditions as they are.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                I embrace the everlasting meal principle: the notes of the last meal 
                inform the notes of the next. Nothing wasted. Everything connected.
              </p>
              
              <p className="text-base leading-relaxed text-gray-600">
                Cooking is a language of love. It&apos;s also practice in presence, 
                in responding to what emerges rather than forcing what isn&apos;t there.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="max-w-sm rounded-lg bg-[#F8F5EB] p-8 text-center">
                <img
                  src="/images/Bubble-33.png"
                  alt="Working with what is"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE SECTION - Gracie + Featured Quote */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="order-2 flex items-center justify-center md:order-1">
              <div className="max-w-sm rounded-lg bg-white p-8 text-center">
                <img
                  src="/images/Bubble-34.png"
                  alt="Lessons with Gracie"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            <div className="order-1 space-y-6 md:order-2">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl text-[#1A365D] md:text-4xl font-bold">
                Lessons with <span className="text-[#F96E1E]">Gracie</span>
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Gracie, our English Pointer, reminds me daily that training is practice. 
                Continuing practice.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Supporting her to work with her natural drives. Building her capacity 
                for impulse control. In emotional intelligence terms, it&apos;s about 
                developing self-regulation.
              </p>
              
              <p className="text-base leading-relaxed text-gray-600">
                The same principles apply when I support leaders: 
                understanding your natural patterns, building capacity 
                for different responses, practising new ways of being.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Why Practice Matters More Than Perfection */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl text-white md:text-4xl font-bold">
                Why <span className="text-[#F96E1E]">practice</span> matters more than perfection
              </h2>
              
              <p className="text-lg leading-relaxed text-white">
                Perfection is a construct. It doesn&apos;t exist in reality.
              </p>
              
              <p className="text-lg leading-relaxed text-white">
                Practice is about reality testing - what&apos;s actually here, 
                what&apos;s actually happening, what&apos;s actually needed.
              </p>
              
              <p className="text-lg leading-relaxed text-white">
                When we stop chasing something that was never real, 
                we can work with what is.
              </p>
              
              <p className="text-base leading-relaxed text-white/90">
                Leadership happens in the moment. That&apos;s where our 
                capacity to respond lives.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="max-w-sm rounded-lg bg-[#1A365D] p-8 text-center">
                <img
                  src="/images/Bubble-37.png"
                  alt="What if we simply worked with what is?"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Testimonial */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <img
                src="/images/Bubble-35.png"
                alt="I keep second guessing myself"
                className="mx-auto max-w-xs h-auto object-contain"
              />
            </div>
            
            <div className="mb-12 text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] mb-6 text-3xl text-[#1A365D] md:text-4xl font-bold">
                What if I trusted my own <span className="text-[#F96E1E]">judgement</span>?
              </h2>
            </div>
            
            <div className="rounded-lg border-l-4 border-[#F96E1E] bg-white p-8 shadow-sm">
              <p className="mb-6 text-lg leading-relaxed text-gray-700 italic">
                &ldquo;Working with Phillip helped me realise that I&apos;d been seeking external validation 
                for decisions I was perfectly capable of making myself. The question became: 
                what if I trusted my own judgement? That shift changed everything.&rdquo;
              </p>
              <div className="text-sm text-gray-600">
                — Senior Executive, Global Technology Company
              </div>
            </div>
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
