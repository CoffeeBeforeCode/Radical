import Layout, { PageLayout } from '../components/Layout'

export default function Custom404() {
  return (
    <Layout
      title="Page Not Found - Phillip Collins"
      description="The page you're looking for doesn't exist"
      canonical="/404"
      noIndex={true}
    >
      {/* FULL-WIDTH HERO - Accounts for header */}
      <section className="relative w-full min-h-screen bg-white pt-20">
        <div className="flex min-h-[calc(100vh-5rem)] items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              {/* Hero Content */}
              <div className="max-w-4xl space-y-8">
                <h1 className="font-['Waiting_for_the_Sunrise'] text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl">
                  Well, this is<br />
                  <span className="font-light italic text-[#F96E1E]">interesting.</span>
                </h1>
                
                <p className="text-lg leading-relaxed text-gray-600">
                  You've stumbled into the digital equivalent of a dead end.<br />
                  The page you're looking for doesn't exist.<br />
                  But what if this detour is exactly what you needed?
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/"
                    className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
                  >
                    Home → Leadership Equation
                  </a>
                  <a
                    href="/this-is-personal"
                    className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white"
                  >
                    This is Personal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT GETS IN YOUR WAY */}
      <section className="w-full bg-[#F8F5EB] py-12 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-[#1A365D] md:text-4xl">
              What gets in your <span className="text-[#F96E1E]">way</span>?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              Perhaps you're looking for something specific. Or maybe you followed a link that's no longer there.
              Either way, this feels like interference worth reducing.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP EQUATION */}
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
                Even when we end up somewhere we didn't <span className="text-[#F96E1E]">plan</span> to be.
              </h2>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">PE</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Performance</h3>
                  <p className="text-sm text-white/80">How we respond to obstacles</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">PO</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Potential</h3>
                  <p className="text-sm text-white/80">Your capacity for growth</p>
                </div>
                
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur">
                  <div className="mb-3 font-['Waiting_for_the_Sunrise'] text-3xl font-bold text-white md:text-4xl">I</div>
                  <h3 className="mb-2 text-lg font-semibold text-white">Interference</h3>
                  <p className="text-sm text-white/80">What's in the way</p>
                </div>
              </div>
              
              <div className="rounded-lg bg-[#F96E1E] p-6">
                <h3 className="mb-3 text-lg font-bold text-white">Right now, this missing page might feel like interference.</h3>
                <p className="font-medium text-white">
                  But what if we used this moment differently? What if getting lost led to something more valuable than what you were originally seeking?
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* NAVIGATION OPTIONS */}
      <section className="w-full bg-white py-12 md:py-16">
        <PageLayout>
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#1A365D] md:text-4xl">
              Let's get you back on track
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-700 leading-relaxed">
              In leadership, as in life, it's rarely about the detour itself. It's about how we respond when things don't go according to plan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-[#F8F5EB] p-6">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Home</h3>
              <p className="mb-4 text-gray-700 text-sm">The Leadership Equation and core philosophy</p>
              <a href="/" className="text-[#F96E1E] hover:text-[#1A365D] font-medium underline decoration-[#F96E1E] transition-colors">
                Explore →
              </a>
            </div>
            
            <div className="rounded-lg bg-[#F8F5EB] p-6">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">This is Personal</h3>
              <p className="mb-4 text-gray-700 text-sm">My story and authentic approach to leadership</p>
              <a href="/this-is-personal" className="text-[#F96E1E] hover:text-[#1A365D] font-medium underline decoration-[#F96E1E] transition-colors">
                My Story →
              </a>
            </div>
            
            <div className="rounded-lg bg-[#F8F5EB] p-6">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">At Work</h3>
              <p className="mb-4 text-gray-700 text-sm">Professional coaching for senior executives</p>
              <a href="/at-work" className="text-[#F96E1E] hover:text-[#1A365D] font-medium underline decoration-[#F96E1E] transition-colors">
                The Work →
              </a>
            </div>
            
            <div className="rounded-lg bg-[#F8F5EB] p-6">
              <h3 className="mb-3 text-lg font-bold text-[#1A365D]">Social Impact</h3>
              <p className="mb-4 text-gray-700 text-sm">Leadership beyond the workplace</p>
              <a href="/social-impact" className="text-[#F96E1E] hover:text-[#1A365D] font-medium underline decoration-[#F96E1E] transition-colors">
                Beyond Work →
              </a>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* FINAL MESSAGE */}
      <section className="w-full bg-[#F96E1E] py-16 md:py-24">
        <PageLayout>
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Leadership is a practice.
            </h2>
            
            <div className="mx-auto mb-6 max-w-2xl rounded-lg bg-white p-6">
              <p className="text-xl font-medium leading-relaxed text-[#1A365D]">
                Not a destination.<br />
                Even when we end up somewhere we didn't plan to be, we can choose how to respond with <strong>intention</strong> and <strong>authenticity</strong>.
              </p>
            </div>
            
            <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-white/90">
              If you were looking for something specific and can't find it, I'm happy to help.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:phillip@phillip-collins.com"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#F96E1E] transition-colors hover:bg-gray-100"
              >
                phillip@phillip-collins.com
              </a>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-white/70">
                <em>Sometimes the most profound insights come from the paths we never intended to take.</em>
              </p>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
