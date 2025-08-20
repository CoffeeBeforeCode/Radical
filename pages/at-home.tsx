import Layout, { PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function AtHome() {
  return (
    <Layout
      title="At Home - Phillip Collins Leadership Coaching"
      description="Leadership as practice - in the kitchen, with Gracie, and in ordinary moments. Working with what is, every day."
      canonical="/at-home"
    >
      {/* HERO SECTION - Following This is Personal structure */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          {/* Headline First */}
          <div className="max-w-4xl space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
              Leadership as <span className="text-[#F96E1E]">practice</span>.
            </h1>
          </div>
          
          {/* Text Box + Image Grid - Following This is Personal pattern */}
          <div className="w-full mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Text Box - 3/4 width */}
                <div className="md:col-span-3 rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px] md:min-h-[250px]">
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    In the kitchen. With Gracie. In the ordinary moments.<br />
                    This is where I practice what I teach:<br />
                    <strong>Working with what is</strong>.
                  </p>
                </div>
                
                {/* Image Box - 1/4 width */}
                <div className="md:col-span-1 rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                  <div className="text-6xl">🏠</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Context */}
          <div className="max-w-4xl space-y-8 mt-8">
            <p className="text-lg leading-relaxed text-gray-600">
              Leadership isn't something I switch on at work.<br />
              It's who I've chosen to become.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Working with what is */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Working with <span className="text-[#F96E1E]">what is</span>
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-700">
                In the kitchen, like in my work, I can only work with what's available. 
                The ingredients that are there. The conditions as they are.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                I embrace the everlasting meal principle: the notes of the last meal 
                inform the notes of the next. Nothing wasted. Everything connected.
              </p>
              
              <p className="text-base leading-relaxed text-gray-600">
                Cooking is a language of love. But it's also practice in presence, 
                in responding to what emerges rather than forcing what isn't there.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="rounded-lg bg-[#1A365D] p-8 text-center max-w-sm">
                <div className="text-6xl text-white mb-4">🍳</div>
                <p className="text-white text-lg italic">
                  "The ingredients teach you<br />
                  what they want to become."
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE SECTION - Gracie */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="rounded-lg bg-[#7E2D40] p-8 text-center max-w-sm">
                <div className="text-6xl text-white mb-4">🐾</div>
                <p className="text-white text-lg italic">
                  "Training never stops.<br />
                  It's always practice."
                </p>
              </div>
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Lessons with <span className="text-[#F96E1E]">Gracie</span>
              </h2>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Gracie, our English Pointer, reminds me daily that training is practice. 
                Continuing practice.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Supporting her to work with her natural drives. Building her capacity 
                for impulse control. In emotional intelligence terms, it's about 
                developing self-regulation.
              </p>
              
              <p className="text-base leading-relaxed text-gray-600">
                The same principles apply to leadership development: 
                understanding your natural patterns, building capacity 
                for different responses, practising new ways of being.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVY STRIPE - Still Fascinated */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="text-center mb-12">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl mb-6">
              Still <span className="text-[#F96E1E]">fascinated</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              By business systems. By how things connect. By the patterns 
              that create what we see on the surface.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6">
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">Systems thinking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                How seemingly separate elements influence each other. 
                Whether it's diagnosing why a team isn't functioning 
                or understanding why a leader feels stuck.
              </p>
            </div>
            
            <div className="rounded-lg bg-[#F96E1E] p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Pattern recognition</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                The underlying dynamics that create surface symptoms. 
                What's actually happening beneath what appears to be happening.
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-6">
              <h3 className="text-lg font-bold text-[#1A365D] mb-3">Connection points</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                How business challenges mirror personal challenges. 
                How leadership at work reflects leadership at home.
              </p>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* CREAM STRIPE - Testimonial */}
      <section className="w-full bg-[#F8F5EB] py-16 md:py-24">
        <PageLayout>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl mb-6">
                What if I trusted my own <span className="text-[#F96E1E]">judgement</span>?
              </h2>
            </div>
            
            <div className="rounded-lg bg-white p-8 shadow-sm border-l-4 border-[#F96E1E]">
              <p className="text-lg leading-relaxed text-gray-700 mb-6 italic">
                "Working with Phillip helped me realise that I'd been seeking external validation 
                for decisions I was perfectly capable of making myself. The question became: 
                what if I trusted my own judgement? That shift changed everything."
              </p>
              <div className="text-sm text-gray-600">
                — Senior Executive, Global Technology Company
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* WHITE SECTION - Leadership Quote & CTA */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
                Ready to <span className="text-[#F96E1E]">explore</span>?
              </h2>
              
              <p className="text-xl leading-relaxed text-gray-700 max-w-2xl mx-auto">
                Leadership development that honours who you already are.
              </p>
              
              <div className="rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#1A365D] max-w-2xl mx-auto">
                <p className="text-lg italic text-gray-700">
                  "Leadership isn't a thing I do at work.<br />
                  It's the person I've chosen to become."
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/the-work"
                className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
              >
                Explore the work
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
