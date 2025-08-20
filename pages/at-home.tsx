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
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl leading-tight text-[#1A365D] md:text-5xl lg:text-6xl font-bold">
              Leadership as <span className="text-[#F96E1E]">practice</span>.
            </h1>
          </div>
          
          {/* Text Box + Image Grid - Following This is Personal pattern */}
          <div className="w-full mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Text Box - 3/4 width */}
                <div className="md:col-span-3 flex min-h-[200px] items-center rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 md:min-h-[250px]">
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    In the kitchen.<br />
                    With Gracie.<br />
                    In the <strong>ordinary moments</strong>.<br />
                    This is where I practice what I explore with clients:<br />
                    <strong>Working with what is</strong>.
                  </p>
                </div>
                
                {/* Image Box - 1/4 width */}
                <div className="md:col-span-1 flex min-h-[200px] items-center justify-center rounded-lg bg-white p-6 md:min-h-[250px]">
                  <img
                    src="/images/Bubble-36.png"
                    alt="I know I'm capable of more"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="max-w-4xl mt-8">
            <div className="flex flex-wrap justify-start gap-4">
              <Link
                href="/the-work"
                className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg text-white transition-colors hover:bg-[#E55A1A] font-semibold"
              >
                Explore the work
              </Link>
              <Link
                href="/this-is-personal"
                className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white font-semibold"
              >
                This is personal
              </Link>
            </div>
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

      {/* WHITE SECTION - Leadership Quote & CTA */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl text-[#1A365D] md:text-4xl font-bold">
                Ready to <span className="text-[#F96E1E]">explore</span>?
              </h2>
              
              <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-700">
                Leadership development that honours who you already are.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/the-work"
                className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg text-white transition-colors hover:bg-[#E55A1A] font-semibold"
              >
                Explore the work
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white font-semibold"
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
