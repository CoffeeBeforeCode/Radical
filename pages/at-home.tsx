import Layout, { Block, Grid, PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function AtHome() {
  return (
    <Layout 
      title="At Home - Phillip Collins Leadership Coaching"
      description="Where leadership lives too - in the kitchen, with Gracie, and in ordinary moments. Leadership isn't performance; it's a way of showing up everywhere."
      canonical="/at-home"
    >
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Main headline - spans 3 columns */}
            <div className="md:col-span-3">
              <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
                Where leadership <span className="text-[#F96E1E]">lives too</span>
              </h1>
              
              <div className="mt-8 space-y-6">
                <div className="rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px]">
                  <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                    Leadership isn&apos;t something we switch on and off.<br />
                    It lives in the <strong>kitchen</strong>.<br />
                    In <strong>conversation</strong>.<br />
                    In the <strong>ordinary</strong>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bubble image placeholder - single column */}
            <div className="flex justify-center mt-8">
              <div className="aspect-square w-full max-w-[200px] rounded-lg bg-[#1A365D] flex items-center justify-center">
                <div className="text-6xl text-white">🏠</div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/the-work"
              className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
            >
              Explore the work
            </Link>
            <Link
              href="/this-is-personal"
              className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white"
            >
              This is personal
            </Link>
          </div>
        </PageLayout>
      </section>

      {/* Cooking as Leadership Practice */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight mb-6">
              Cooking as leadership practice
            </h2>
          </div>
          
          <Grid columns={2} className="items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Cooking is one of the ways I express care.<br />
                Presence meets creativity.<br />
                Flavour meets intuition.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                It&apos;s where nourishment becomes connection.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                In the kitchen, I practice the same principles I bring to coaching:
                attention to subtle signals, respect for timing, and trust in the process.
                Whether I&apos;m adjusting seasoning or creating space for a client&apos;s insight,
                it&apos;s about being present to what&apos;s emerging.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex size-32 items-center justify-center rounded-full bg-[#7E2D40] text-6xl text-white md:size-40">
                🍳
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">
                &ldquo;Good food, like good coaching,<br />
                happens when you pay attention.&rdquo;
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Lessons from Gracie */}
      <Block spacing="default">
        <PageLayout>
          <Grid columns={2} className="items-center">
            <div className="text-center">
              <div className="inline-flex size-32 items-center justify-center rounded-full bg-[#1A365D] text-6xl text-white md:size-40">
                🐾
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">
                &ldquo;Alert, sensitive,<br />
                and fully herself.&rdquo;
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight">
                Lessons from Gracie
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our English Pointer, Gracie, is alert, sensitive, and fully herself.<br />
                She reminds me how to pay attention &mdash; and when to rest.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                There&apos;s something about her presence that mirrors what I hope to bring to coaching:
                complete attention without agenda, sensitivity without overwhelm,
                and the wisdom to know when stillness serves better than action.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                She&apos;s taught me that the best leadership often looks like quiet watchfulness,
                followed by precise, purposeful movement when it matters most.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Business Fascination */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center">
            <div className="mx-auto max-w-4xl space-y-8">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight">
                Still fascinated
              </h2>
              
              <div className="mx-auto max-w-2xl space-y-6">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  I&apos;ve always been drawn to the psychology of business.<br />
                  Structure, rhythm, complexity.
                </p>
                
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  It&apos;s not separate from my coaching &mdash; it&apos;s part of what makes it work.
                </p>
                
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  The same curiosity that led me into turnaround leadership and fractional CEO work
                  informs how I approach individual coaching. Systems thinking. Pattern recognition.
                  Understanding how seemingly separate elements influence each other.
                </p>
                
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  Whether it&apos;s diagnosing why a team isn&apos;t functioning or why a leader feels stuck,
                  I&apos;m always looking for the underlying dynamics that create the surface symptoms.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Values in Living */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center mb-16">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight mb-6">
              Values in living
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
              How my core values show up in ordinary moments
            </p>
          </div>
          
          <Grid columns={5}>
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#7E2D40]">🧭</div>
              <h3 className="text-lg font-semibold text-[#1A365D]">Wisdom</h3>
              <p className="text-sm text-gray-600">
                Choosing ingredients mindfully,
                listening to what Gracie notices,
                learning from every business pattern.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#7E2D40]">🪞</div>
              <h3 className="text-lg font-semibold text-[#1A365D]">Integrity</h3>
              <p className="text-sm text-gray-600">
                Cooking with care even when no one&apos;s watching,
                being honest about what I don&apos;t know.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#7E2D40]">💝</div>
              <h3 className="text-lg font-semibold text-[#1A365D]">Self-respect</h3>
              <p className="text-sm text-gray-600">
                Setting boundaries around rest,
                honouring my sensitivity as strength.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#7E2D40]">🌱</div>
              <h3 className="text-lg font-semibold text-[#1A365D]">Personal Development</h3>
              <p className="text-sm text-gray-600">
                Every meal is practice,
                every business challenge teaches,
                every moment with Gracie reveals.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-3xl text-[#7E2D40]">🕊</div>
              <h3 className="text-lg font-semibold text-[#1A365D]">Freedom</h3>
              <p className="text-sm text-gray-600">
                To cook what nourishes,
                to rest when needed,
                to question what others accept.
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Personal Philosophy */}
      <Block spacing="default">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight">
              Where it all connects
            </h2>
            
            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The sensitivity that once made me different now helps me notice
                what others miss in boardrooms and coaching conversations.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The love of business systems helps me understand the complex dynamics
                my clients navigate every day.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The care I put into cooking mirrors the attention I bring to creating
                space for someone else&apos;s growth.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                And Gracie? She reminds me that presence isn&apos;t about performance.
                It&apos;s about being fully where you are, attending to what matters,
                and trusting your instincts about when to move and when to be still.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Call & Response */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center">
            <div className="mx-auto max-w-4xl space-y-12">
              <div className="space-y-6">
                <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight">
                  &ldquo;What if I trusted my own judgment?&rdquo;
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                  The question that changes everything about how we lead.
                </p>
              </div>
              
              <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <p className="text-lg text-white/90 italic leading-relaxed">
                    &ldquo;I feel I have come a long way since we started to speak and feel far more self-empowered thanks to your intervention for which I am grateful.&rdquo;
                  </p>
                  <div className="text-right">
                    <p className="text-sm font-medium text-white/70">
                      Country Head, Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Personal Quote */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <div className="mx-auto max-w-3xl space-y-8">
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
                &ldquo;Leadership isn&apos;t the thing I do at work.<br />
                It&apos;s the person I&apos;ve chosen to become.&rdquo;
              </p>
              <div className="text-right">
                <p className="text-lg font-medium text-white/90">
                  &mdash; Phillip Collins
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Closing CTA */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center">
            <div className="mx-auto max-w-2xl space-y-8">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight">
                Ready to explore?
              </h2>
              <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                Leadership development that honours who you already are.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/the-work"
                  className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#1A365D]"
                >
                  Explore frameworks
                </Link>
              </div>
            </div>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
