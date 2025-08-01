import { useState } from 'react'
import Image from 'next/image'

export default function TheWorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Component would go here */}
      
      {/* Hero Section - White Background */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Main Hero Content */}
            <div className="p-6 md:col-span-2 md:p-8">
              <h1 className="mb-6 font-['Waiting_for_the_Sunrise'] text-4xl md:text-6xl font-bold leading-tight text-[#1A365D]">
                The work beneath the work
              </h1>
              <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-700">
                Most senior leaders already have the <span className="text-[#F96E1E] font-semibold">potential</span>. 
                What gets in their way isn&apos;t lack of capability—it&apos;s the interference that blocks natural leadership excellence.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Through embodied perception and precise observation, I help global executives identify and reduce what&apos;s truly getting in their way.
              </p>
            </div>
            
            {/* EQ Question Bubble */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4">
              <p className="text-sm font-medium leading-relaxed text-white">
                &ldquo;What&apos;s the story I tell myself about who I am as a leader; is it still true?&rdquo;
              </p>
            </div>
            
            {/* Supporting Block */}
            <div className="bg-[#F8F5EB] p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#1A365D]">For Senior Executives</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Country heads, regional directors, and C-suite leaders who need space to explore the internal challenges that external performance demands don&apos;t address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Equation Section - Navy Background */}
      <section className="w-full bg-[#1A365D] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Equation Block */}
            <div className="p-6 md:col-span-2 md:p-8">
              <div className="mb-6 text-center">
                <div className="font-['Waiting_for_the_Sunrise'] text-6xl md:text-8xl font-bold text-white">
                  PE = PO - I
                </div>
                <div className="mt-4 text-xl md:text-2xl text-gray-300">
                  Performance = Potential - Interference
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-gray-200">
                Most leaders aren&apos;t missing skills or strategies. They&apos;re carrying interference—limiting beliefs, environmental pressures, values conflicts—that blocks their natural capabilities.
              </p>
            </div>
            
            {/* EQ Question */}
            <div className="aspect-square rounded-lg bg-[#7A9A7F] p-4">
              <p className="text-sm font-medium leading-relaxed text-white">
                &ldquo;What would it take to let more of the real me come through in my leadership?&rdquo;
              </p>
            </div>
            
            {/* Framework Explanation */}
            <div className="bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#1A365D]">The Framework</h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Rather than adding more techniques, we identify and reduce what&apos;s interfering with leadership excellence that&apos;s already present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Frameworks Section - Cream Background */}
      <section className="w-full bg-[#F8F5EB] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-[#1A365D]">
              Three Core Methodologies
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Frameworks developed through 10,000+ hours of coaching senior executives across cultures and industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Values Constellation */}
            <div className="bg-white p-6 md:col-span-2">
              <h3 className="mb-4 text-xl font-semibold text-[#7E2D40]">Values Constellation Mapping</h3>
              <p className="mb-4 text-base leading-relaxed text-gray-700">
                Physical mapping exercises that externalise internal values conflicts. Leaders place their values in relation to specific decisions, discovering unexpected relationships and hierarchies.
              </p>
              <p className="text-sm text-gray-600">
                &ldquo;Which values feel closest to this decision? Which are in tension? What shifts when you adjust the positioning?&rdquo;
              </p>
            </div>
            
            {/* EQ Block */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4">
              <p className="text-sm font-medium leading-relaxed text-white">
                &ldquo;Where do I feel most connected; what helps make that happen?&rdquo;
              </p>
            </div>
            
            {/* Embodied Perception */}
            <div className="bg-[#1A365D] p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Embodied Perception</h3>
              <p className="text-sm leading-relaxed text-gray-200">
                Accessing the body&apos;s intelligence to detect subtle interference patterns before they become performance blocks.
              </p>
            </div>
            
            {/* Sitting With Tension */}
            <div className="md:col-span-2 bg-white p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#7E2D40]">Sitting With Tension</h3>
              <p className="text-base leading-relaxed text-gray-700">
                Building capacity to hold complex tensions without rushing to resolution. The most important outcome isn&apos;t resolving conflict but developing emotional flexibility to navigate wisely.
              </p>
            </div>
            
            {/* EQ Block 2 */}
            <div className="aspect-square rounded-lg bg-[#7A9A7F] p-4">
              <p className="text-sm font-medium leading-relaxed text-white">
                &ldquo;What helps me choose well, especially when it&apos;s hard?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call & Response Section - White Background */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-[#1A365D]">
              The Internal Leadership Challenge
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Internal Struggle 1 */}
            <div className="bg-[#F8F5EB] p-6 md:col-span-2">
              <h3 className="mb-4 font-['Waiting_for_the_Sunrise'] text-lg font-semibold text-[#7E2D40]">
                &ldquo;Everyone thinks I&apos;ve got this sorted—but I&apos;m not sure I do.&rdquo;
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                The quiet loneliness at the top, carrying uncertainty whilst projecting confidence in public forums.
              </p>
            </div>
            
            {/* Testimonial Response */}
            <div className="md:col-span-2 border-l-4 border-[#F96E1E] bg-white p-6">
              <blockquote className="mb-4 text-base leading-relaxed text-gray-700">
                &ldquo;Phillip is one of the most talented professionals I have ever met. His ability to swiftly and accurately pinpoint areas for development, combined with complete trustworthiness and acute business insight, makes him invaluable.&rdquo;
              </blockquote>
              <cite className="text-sm font-medium text-[#1A365D]">Senior Civil Servant, Government</cite>
            </div>
            
            {/* Internal Struggle 2 */}
            <div className="md:col-span-2 bg-[#F8F5EB] p-6">
              <h3 className="mb-4 font-['Waiting_for_the_Sunrise'] text-lg font-semibold text-[#7E2D40]">
                &ldquo;I keep micromanaging even though I know it&apos;s counterproductive.&rdquo;
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Fear of being seen as incompetent driving behaviours that create the very problems we&apos;re trying to avoid.
              </p>
            </div>
            
            {/* Testimonial Response 2 */}
            <div className="md:col-span-2 border-l-4 border-[#F96E1E] bg-white p-6">
              <blockquote className="mb-4 text-base leading-relaxed text-gray-700">
                &ldquo;My team and I have never had such honest conversations until I started working with Phillip. His ability to create a safe space where challenging topics can be discussed has transformed how we operate as a leadership team.&rdquo;
              </blockquote>
              <cite className="text-sm font-medium text-[#1A365D]">Country Head, Telecommunications</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Navy Background */}
      <section className="w-full bg-[#1A365D] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-3 p-6 md:p-8">
              <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-white">
                How the Coaching Actually Works
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#F96E1E]">Observation Before Intervention</h3>
                  <p className="text-base leading-relaxed text-gray-200">
                    We begin by mapping what&apos;s actually happening—the patterns, tensions, and interference currently operating in your leadership context. No assumptions, just precise attention to what is.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#F96E1E]">Embodied Intelligence</h3>
                  <p className="text-base leading-relaxed text-gray-200">
                    Your body often knows what your mind hasn&apos;t yet recognised. Through embodied perception, we access information that cognitive analysis alone can&apos;t reach.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#F96E1E]">Interference Reduction</h3>
                  <p className="text-base leading-relaxed text-gray-200">
                    Rather than adding more techniques, we identify and reduce what&apos;s blocking natural excellence. When interference decreases, performance naturally rises to meet potential.
                  </p>
                </div>
              </div>
            </div>
            
            {/* EQ Question */}
            <div className="aspect-square rounded-lg bg-[#F96E1E] p-4">
              <p className="text-sm font-medium leading-relaxed text-white">
                &ldquo;What do I reach for when things feel too much?&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Outcomes Section - Cream Background */}
      <section className="w-full bg-[#F8F5EB] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-[#1A365D]">
              Professional Transformation Results
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Specific outcomes from senior leadership coaching partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Outcome 1 */}
            <div className="bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#1A365D]">Regional Director</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Reduced team burnout and project delays by addressing micromanagement driven by imposter fears. Team performance improved whilst personal stress decreased.
              </p>
              <div className="text-xs text-[#F96E1E] font-medium">Manufacturing Sector</div>
            </div>
            
            {/* Outcome 2 */}
            <div className="bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#1A365D]">C-Suite Technology Leader</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                &ldquo;Made enormous progress and proven ability to get repeatedly great results for the company. It&apos;s been a journey.&rdquo;
              </p>
              <div className="text-xs text-[#F96E1E] font-medium">Technology Sector</div>
            </div>
            
            {/* EQ Question */}
            <div className="aspect-square rounded-lg bg-[#1A365D] p-4">
              <p className="text-sm font-medium leading-relaxed text-white">
                &ldquo;What becomes possible when I stop questioning whether I deserve to be in the room?&rdquo;
              </p>
            </div>
            
            {/* Outcome 3 */}
            <div className="bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#1A365D]">Chief Financial Officer</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                &ldquo;Surprised at how comfortable it has felt being stretched. The stretch has become additional approach rather than replacing who I am.&rdquo;
              </p>
              <div className="text-xs text-[#F96E1E] font-medium">Housing & Community Development</div>
            </div>
            
            {/* Authority Testimonial */}
            <div className="md:col-span-2 bg-[#1A365D] p-6">
              <blockquote className="mb-4 text-base leading-relaxed text-white">
                &ldquo;His experience at the highest level makes him incisive, honest and invaluable. Completely trustworthy with extremely high integrity, acute business insight and many years of diverse experience to draw upon.&rdquo;
              </blockquote>
              <cite className="text-sm font-medium text-[#F96E1E]">Senior Civil Servant, Government</cite>
            </div>
            
            {/* Country Head Results */}
            <div className="md:col-span-2 bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#1A365D]">Multiple Country Heads</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Confidence restoration, team transformation, and self-empowerment through values clarification and interference reduction across engineering and manufacturing contexts.
              </p>
              <div className="text-xs text-[#F96E1E] font-medium">Global Engineering & Manufacturing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Context Section - White Background */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-3 p-6">
              <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-[#1A365D]">
                Boardroom to Breakthrough
              </h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700">
                  Senior leadership coaching that translates directly to boardroom presence, team dynamics, and strategic decision-making under pressure.
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  The work explores how internal patterns show up in professional contexts: perfectionism affecting delegation, values conflicts undermining authentic communication, and embodied stress patterns influencing executive presence.
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Through Values Constellation work, leaders discover how competing priorities actually serve different aspects of their authentic leadership. Through Embodied Perception, they develop early-warning systems for when stress begins affecting performance.
                </p>
              </div>
            </div>
            
            {/* Professional Results Block */}
            <div className="bg-[#F8F5EB] p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1A365D]">Professional Results</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Enhanced team leadership through honest conversation</li>
                <li>• Improved delegation without micromanagement</li>
                <li>• Confident decision-making under pressure</li>
                <li>• Authentic executive presence</li>
                <li>• Strategic thinking without analysis paralysis</li>
                <li>• Values-aligned leadership choices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Testimonial Section - Navy Background */}
      <section className="w-full bg-[#1A365D] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-2 bg-white p-6">
              <blockquote className="mb-4 text-lg leading-relaxed text-gray-700">
                &ldquo;Phillip has the ability to uncover challenges that leaders may not even be aware of. He listens deeply without rushing to &lsquo;fix&rsquo; the client, giving people space to work through their own challenges and tap into their innate resourcefulness.&rdquo;
              </blockquote>
              <cite className="text-base font-medium text-[#1A365D]">Senior Leader, Civil Service</cite>
            </div>
            
            {/* Integration Approach */}
            <div className="md:col-span-2 p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Integration Question</h3>
              <p className="mb-4 font-['Waiting_for_the_Sunrise'] text-lg leading-relaxed text-[#F96E1E]">
                &ldquo;What would leadership look like if I truly believed I belonged here?&rdquo;
              </p>
              <p className="text-base leading-relaxed text-gray-200">
                Imposter syndrome dissolves when we remember: we weren&apos;t chosen by accident. The work explores what becomes possible when leaders trust their own judgement as much as others clearly do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Action Section - Tangerine Background */}
      <section className="w-full bg-[#F96E1E] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-3 p-6">
              <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl font-bold text-white">
                Ready to explore what&apos;s getting in your way?
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white">
                Professional coaching partnerships for senior executives who need space to explore the internal challenges that external performance demands don&apos;t address.
              </p>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-orange-100">
                  Initial conversation: 90 minutes to map your leadership context and explore whether the approach fits your needs.
                </p>
                <p className="text-base leading-relaxed text-orange-100">
                  Ongoing partnership: Monthly 90-minute sessions with email support between meetings.
                </p>
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-4 text-lg font-semibold text-[#1A365D]">Start the Conversation</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Email to explore whether this approach fits your current leadership context.
              </p>
              <a 
                href="mailto:phillip@phillip-collins.com" 
                className="inline-block w-full rounded bg-[#1A365D] px-4 py-3 text-center font-medium text-white transition-colors duration-300 hover:bg-[#2A4A6B]"
              >Waiting_for_the_Sunrise']">
                Ready to explore what&apos;s getting in your way?
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white">
                Professional coaching partnerships for senior executives who need space to explore the internal challenges that external performance demands don&apos;t address.
              </p>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-orange-100">
                  Initial conversation: 90 minutes to map your leadership context and explore whether the approach fits your needs.
                </p>
                <p className="text-base leading-relaxed text-orange-100">
                  Ongoing partnership: Monthly 90-minute sessions with email support between meetings.
                </p>
              </div>
            </div>
            
            {/* Contact CTA */}
            <div className="bg-white p-6 rounded-lg">
              <h3 className="mb-4 text-lg font-semibold text-[#1A365D]">Start the Conversation</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-700">
                Email to explore whether this approach fits your current leadership context.
              </p>
              <a 
                href="mailto:phillip@phillip-collins.com" 
                className="inline-block w-full bg-[#1A365D] py-3 px-4 text-center text-white font-medium rounded hover:bg-[#2A4A6B] transition-colors duration-300"
              >
                phillip@phillip-collins.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component would go here */}
    </div>
  )
}
