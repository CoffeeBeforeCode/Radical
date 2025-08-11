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
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 mb-16">
            <div className="lg:col-span-8">
              <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl mb-6">
                Well, this is interesting.
              </h1>
              <div className="bg-[#F96E1E] p-6 text-white mb-8">
                <p className="text-xl font-medium leading-relaxed md:text-2xl">
                  You've stumbled into the digital equivalent of a dead end. 
                  The page you're looking for doesn't exist.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-[#F8F5EB] rounded-full flex items-center justify-center w-32 h-32">
                <span className="text-4xl">🧭</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            
            {/* What Gets in Your Way */}
            <div className="bg-[#1A365D] p-8 text-white">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-2xl md:text-3xl mb-4">
                What's getting in your way?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Perhaps you're looking for something specific. Or maybe you followed a link that's no longer there.
              </p>
              <p className="font-medium text-[#F8F5EB]">
                Either way, this feels like interference worth reducing.
              </p>
            </div>

            {/* Navigation Options */}
            <div className="bg-[#F8F5EB] p-8">
              <h3 className="font-['Waiting_for_the_Sunrise'] text-2xl text-[#1A365D] mb-6">
                Let's get you back on track
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-[#1A365D] hover:text-[#F96E1E] font-medium underline decoration-[#F96E1E] transition-colors">
                    Home → The Leadership Equation
                  </a>
                </li>
                <li>
                  <a href="/this-is-personal" className="text-[#1A365D] hover:text-[#F96E1E] font-medium underline decoration-[#F96E1E] transition-colors">
                    This is Personal → My story
                  </a>
                </li>
                <li>
                  <a href="/at-work" className="text-[#1A365D] hover:text-[#F96E1E] font-medium underline decoration-[#F96E1E] transition-colors">
                    At Work → Professional coaching
                  </a>
                </li>
                <li>
                  <a href="/social-impact" className="text-[#1A365D] hover:text-[#F96E1E] font-medium underline decoration-[#F96E1E] transition-colors">
                    Social Impact → Beyond the workplace
                  </a>
                </li>
              </ul>
            </div>

            {/* Reflection Section */}
            <div className="bg-[#F96E1E] p-8 text-white">
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
            <div className="text-center mx-auto max-w-4xl">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] mb-6">
                PE = PO - I
              </h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                Your performance equals your potential minus interference. Right now, this missing page might feel like interference. But what if we used this moment differently?
              </p>
              <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-[#1A365D] mb-3">Potential (PO):</h4>
                  <p className="text-gray-700">
                    You were seeking something specific, which shows intentionality and purpose in your exploration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A365D] mb-3">Interference (I):</h4>
                  <p className="text-gray-700">
                    A broken link or mistyped URL created an obstacle between you and your intended destination.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Now Section */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] mb-6">
                So, what now?
              </h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                You could simply navigate away. Or you could take a moment to notice what this moment reveals about how you handle unexpected obstacles.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                In leadership, as in life, it's rarely about the detour itself. It's about how we respond when things don't go according to plan.
              </p>
              
              {/* Contact CTA */}
              <div className="bg-[#1A365D] p-6 text-white">
                <p className="text-lg mb-4">
                  If you were looking for something specific and can't find it, I'm happy to help.
                </p>
                <a 
                  href="mailto:phillip@phillip-collins.com" 
                  className="text-[#F96E1E] hover:text-[#F8F5EB] font-medium underline decoration-[#F96E1E] transition-colors"
                >
                  phillip@phillip-collins.com
                </a>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="bg-[#F8F5EB] p-8 inline-block">
                <h3 className="font-['Waiting_for_the_Sunrise'] text-2xl text-[#1A365D] mb-4">
                  Leadership is a practice
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  Not a destination.
                </p>
                <p className="text-gray-600">
                  Even when we end up somewhere we didn't plan to be, we can choose how to respond with intention and authenticity.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="border-t border-gray-200 pt-8 mt-16 text-center">
            <p className="text-sm text-gray-500">
              <em>Sometimes the most profound insights come from the paths we never intended to take.</em>
            </p>
          </div>

        </PageLayout>
      </section>
    </Layout>
  )
}
