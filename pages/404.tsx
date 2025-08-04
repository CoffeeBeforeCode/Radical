import Layout, { PageLayout } from '../components/Layout'

export default function Custom404() {
  return (
    <Layout
      title="Page Not Found - Phillip Collins"
      description="The page you're looking for doesn't exist"
      canonical="/404"
      noIndex={true}
    >
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-8">
              <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-tight mb-6">
                Well, this is interesting.
              </h1>
              <div className="bg-tangerine text-white p-6 mb-8">
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  You've stumbled into the digital equivalent of a dead end. 
                  The page you're looking for doesn't exist.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-32 h-32 bg-cream rounded-full flex items-center justify-center">
                <span className="text-4xl">🧭</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* What Gets in Your Way */}
            <div className="bg-navy text-white p-8">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-2xl md:text-3xl mb-4">
                What's getting in your way?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Perhaps you're looking for something specific. Or maybe you followed a link that's no longer there.
              </p>
              <p className="text-cream font-medium">
                Either way, this feels like interference worth reducing.
              </p>
            </div>

            {/* Navigation Options */}
            <div className="bg-cream p-8">
              <h3 className="font-['Waiting_for_the_Sunrise'] text-2xl text-slate-900 mb-6">
                Let's get you back on track
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-navy hover:text-tangerine font-medium underline decoration-tangerine transition-colors">
                    Home → The Leadership Equation
                  </a>
                </li>
                <li>
                  <a href="/this-is-personal" className="text-navy hover:text-tangerine font-medium underline decoration-tangerine transition-colors">
                    This is Personal → My story
                  </a>
                </li>
                <li>
                  <a href="/at-work" className="text-navy hover:text-tangerine font-medium underline decoration-tangerine transition-colors">
                    At Work → Professional coaching
                  </a>
                </li>
                <li>
                  <a href="/social-impact" className="text-navy hover:text-tangerine font-medium underline decoration-tangerine transition-colors">
                    Social Impact → Beyond the workplace
                  </a>
                </li>
              </ul>
            </div>

            {/* Reflection Section */}
            <div className="bg-tangerine text-white p-8">
              <h3 className="font-['Waiting_for_the_Sunrise'] text-xl md:text-2xl mb-4">
                A moment to pause
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                Sometimes getting lost leads to something more valuable than what we were originally seeking.
              </p>
              <p className="font-medium">
                What if this detour is exactly what you needed?
              </p>
            </div>
          </div>

          {/* Leadership Equation Connection */}
          <div className="bg-slate-50 p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-slate-900 mb-6">
                PE = PO - I
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                Your performance equals your potential minus interference. Right now, this missing page might feel like interference. But what if we used this moment differently?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Potential (PO):</h4>
                  <p className="text-slate-700">
                    You were seeking something specific, which shows intentionality and purpose in your exploration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Interference (I):</h4>
                  <p className="text-slate-700">
                    A broken link or mistyped URL created an obstacle between you and your intended destination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Now Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-slate-900 mb-6">
                So, what now?
              </h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                You could simply navigate away. Or you could take a moment to notice what this moment reveals about how you handle unexpected obstacles.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                In leadership, as in life, it's rarely about the detour itself. It's about how we respond when things don't go according to plan.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-navy text-white p-6">
                <p className="text-lg mb-4">
                  If you were looking for something specific and can't find it, I'm happy to help.
                </p>
                <a 
                  href="mailto:phillip@phillip-collins.com" 
                  className="text-tangerine hover:text-cream font-medium underline decoration-tangerine transition-colors"
                >
                  phillip@phillip-collins.com
                </a>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="bg-cream p-8 inline-block">
                <h3 className="font-['Waiting_for_the_Sunrise'] text-2xl text-slate-900 mb-4">
                  Leadership is a practice
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Not a destination.
                </p>
                <p className="text-slate-600">
                  Even when we end up somewhere we didn't plan to be, we can choose how to respond with intention and authenticity.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-16 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 text-sm">
              <em>Sometimes the most profound insights come from the paths we never intended to take.</em>
            </p>
          </div>

        </PageLayout>
      </section>
    </Layout>
  )
}
