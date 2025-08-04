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
          <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="font-['Waiting_for_the_Sunrise'] mb-6 text-4xl leading-tight text-slate-900 md:text-6xl lg:text-7xl">
                Well, this is interesting.
              </h1>
              <div className="mb-8 bg-tangerine p-6 text-white">
                <p className="text-xl font-medium leading-relaxed md:text-2xl">
                  You've stumbled into the digital equivalent of a dead end. 
                  The page you're looking for doesn't exist.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:col-span-4 lg:justify-end">
              <div className="flex size-32 items-center justify-center rounded-full bg-cream">
                <span className="text-4xl">🧭</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* What Gets in Your Way */}
            <div className="bg-navy p-8 text-white">
              <h2 className="font-['Waiting_for_the_Sunrise'] mb-4 text-2xl md:text-3xl">
                What's getting in your way?
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                Perhaps you're looking for something specific. Or maybe you followed a link that's no longer there.
              </p>
              <p className="font-medium text-cream">
                Either way, this feels like interference worth reducing.
              </p>
            </div>

            {/* Navigation Options */}
            <div className="bg-cream p-8">
              <h3 className="font-['Waiting_for_the_Sunrise'] mb-6 text-2xl text-slate-900">
                Let's get you back on track
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="font-medium text-navy underline decoration-tangerine transition-colors hover:text-tangerine">
                    Home → The Leadership Equation
                  </a>
                </li>
                <li>
                  <a href="/this-is-personal" className="font-medium text-navy underline decoration-tangerine transition-colors hover:text-tangerine">
                    This is Personal → My story
                  </a>
                </li>
                <li>
                  <a href="/at-work" className="font-medium text-navy underline decoration-tangerine transition-colors hover:text-tangerine">
                    At Work → Professional coaching
                  </a>
                </li>
                <li>
                  <a href="/social-impact" className="font-medium text-navy underline decoration-tangerine transition-colors hover:text-tangerine">
                    Social Impact → Beyond the workplace
                  </a>
                </li>
              </ul>
            </div>

            {/* Reflection Section */}
            <div className="bg-tangerine p-8 text-white">
              <h3 className="font-['Waiting_for_the_Sunrise'] mb-4 text-xl md:text-2xl">
                A moment to pause
              </h3>
              <p className="mb-4 text-lg leading-relaxed">
                Sometimes getting lost leads to something more valuable than what we were originally seeking.
              </p>
              <p className="font-medium">
                What if this detour is exactly what you needed?
              </p>
            </div>
          </div>

          {/* Leadership Equation Connection */}
          <div className="mb-16 bg-slate-50 p-8 md:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] mb-6 text-3xl text-slate-900 md:text-4xl">
                PE = PO - I
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-slate-700">
                Your performance equals your potential minus interference. Right now, this missing page might feel like interference. But what if we used this moment differently?
              </p>
              <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold text-slate-900">Potential (PO):</h4>
                  <p className="text-slate-700">
                    You were seeking something specific, which shows intentionality and purpose in your exploration.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold text-slate-900">Interference (I):</h4>
                  <p className="text-slate-700">
                    A broken link or mistyped URL created an obstacle between you and your intended destination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Now Section */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-['Waiting_for_the_Sunrise'] mb-6 text-3xl text-slate-900 md:text-4xl">
                So, what now?
              </h2>
              <p className="mb-6 text-xl leading-relaxed text-slate-700">
                You could simply navigate away. Or you could take a moment to notice what this moment reveals about how you handle unexpected obstacles.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                In leadership, as in life, it's rarely about the detour itself. It's about how we respond when things don't go according to plan.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-navy p-6 text-white">
                <p className="mb-4 text-lg">
                  If you were looking for something specific and can't find it, I'm happy to help.
                </p>
                <a 
                  href="mailto:phillip@phillip-collins.com" 
                  className="font-medium text-tangerine underline decoration-tangerine transition-colors hover:text-cream"
                >
                  phillip@phillip-collins.com
                </a>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="inline-block bg-cream p-8">
                <h3 className="font-['Waiting_for_the_Sunrise'] mb-4 text-2xl text-slate-900">
                  Leadership is a practice
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-slate-700">
                  Not a destination.
                </p>
                <p className="text-slate-600">
                  Even when we end up somewhere we didn't plan to be, we can choose how to respond with intention and authenticity.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-16 border-t border-slate-200 pt-8 text-center">
            <p className="text-sm text-slate-500">
              <em>Sometimes the most profound insights come from the paths we never intended to take.</em>
            </p>
          </div>

        </PageLayout>
      </section>
    </Layout>
  )
}
