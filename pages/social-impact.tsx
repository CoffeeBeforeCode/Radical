import Layout, { Block, Grid, PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function SocialImpact() {
  return (
    <Layout
      title="Social Impact - Leadership Beyond the Workplace"
      description="Demonstrating leadership in the community domain through mentoring over 1,000 unemployed individuals in entrepreneurship. Five domains of integrated leadership: Self, Work, Community, Family, Friendship."
      canonical="/social-impact"
    >
     {/* HERO SECTION - Fixed Structure */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          {/* Headline First - Separate */}
          <div className="max-w-4xl space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl font-bold leading-tight text-[#1A365D] md:text-5xl lg:text-6xl">
              Leadership beyond the <span className="text-[#F96E1E]">workplace</span>
            </h1>
          </div>
          
          {/* Text Box + Image Grid */}
          <div className="w-full mt-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                {/* Text Box - 3/4 width */}
                <div className="md:col-span-3 rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px] md:min-h-[250px]">
                  <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                    Leadership is not a hat we put on.<br />
                    It&apos;s a way we show up; everywhere.
                  </p>
                </div>
                
                {/* Image Box - 1/4 width - NO BORDER */}
                <div className="md:col-span-1 rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                  <img
                    src="/Radical/images/Social-Impact-Bubble.png"
                    alt="Where do you show up as a leader when no one's watching?"
                    className="w-full h-auto object-contain max-w-full max-h-[150px] md:max-h-[200px]"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTAs - Completely Outside */}
          <div className="mx-auto max-w-7xl mt-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
              >
                Explore integrated leadership →
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

      {/* FULL-WIDTH FIVE DOMAINS BLOCK - Dark Blue Background */}
      <section className="w-full bg-[#1A365D] py-8 md:py-12">
        <PageLayout>
          <div className="text-center mb-6">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight mb-4">
              The Five Domains of Intentional Leadership
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mx-auto max-w-3xl">
              Authentic leadership integrates across every context. These five domains represent where leadership lives and grows.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden">
            <img
              src="/Radical/images/The-Five-Domains-of-Intentional-Leadership.png"
              alt="The Five Domains of Intentional Leadership: Self, Work, Community, Family, Friendship"
              className="w-full h-auto object-contain max-h-[60vh]"
            />
          </div>
        </PageLayout>
      </section>

      {/* Philosophy Block */}
      <Block spacing="default">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight">
              Authentic leadership integrates
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                The executives I work with often discover that their greatest leadership challenges
                aren&apos;t technical or strategic; they&apos;re about integration.
              </p>
              <p>
                How do you show up with the same values and presence whether you&apos;re
                in the boardroom, at the dinner table, or in your community?
              </p>
              <p className="text-[#7E2D40] font-medium">
                Leadership that works is leadership that&apos;s lived everywhere.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Community Leadership - Story Block */}
      <Block background="navy" spacing="spacious">
        <PageLayout>
          <Grid columns={2} className="items-center gap-12">
            <div className="space-y-6">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight">
                Demonstrating leadership in the community domain
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                As part of my belief in the five domains of intentional leadership,
                I&apos;ve chosen to actively lead within the community domain by mentoring
                over 1,000 unemployed individuals seeking to create their own employment
                opportunities through entrepreneurship.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                This isn&apos;t about giving back; it&apos;s about showing up as a leader
                where leadership is needed most.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8">
              <h3 className="mb-6 text-xl font-semibold text-[#1A365D]">
                Five Business Fundamentals Framework
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#F96E1E] pl-4">
                  <h4 className="font-medium text-[#1A365D]">Value Creation</h4>
                  <p className="text-sm text-gray-600">
                    Developing products or services that people genuinely want or need
                  </p>
                </div>
                <div className="border-l-4 border-[#F96E1E] pl-4">
                  <h4 className="font-medium text-[#1A365D]">Marketing</h4>
                  <p className="text-sm text-gray-600">
                    Building awareness, establishing trust and credibility, generating interest
                  </p>
                </div>
                <div className="border-l-4 border-[#F96E1E] pl-4">
                  <h4 className="font-medium text-[#1A365D]">Sales</h4>
                  <p className="text-sm text-gray-600">
                    Converting interest into purchasing decisions that benefit both parties
                  </p>
                </div>
                <div className="border-l-4 border-[#F96E1E] pl-4">
                  <h4 className="font-medium text-[#1A365D]">Value Delivery</h4>
                  <p className="text-sm text-gray-600">
                    Ensuring consistent delivery and cultivating customer satisfaction
                  </p>
                </div>
                <div className="border-l-4 border-[#F96E1E] pl-4">
                  <h4 className="font-medium text-[#1A365D]">Finance</h4>
                  <p className="text-sm text-gray-600">
                    Establishing sustainable financial models for continued growth
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Adapted from Josh Kaufman&apos;s Personal MBA framework
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Impact & Economics Block */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center mb-12">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight">
              Economic impact through leadership demonstration
            </h2>
          </div>
          <Grid columns={3} className="gap-8">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-[#1A365D]">Sustainable Employment</h3>
              <p className="text-gray-700 leading-relaxed">
                Creating local employment opportunities that build community resilience 
                and economic independence
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-[#1A365D]">Entrepreneurial Capabilities</h3>
              <p className="text-gray-700 leading-relaxed">
                Building business thinking and self-reliance within communities, 
                one conversation at a time
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-[#1A365D]">Economic Resilience</h3>
              <p className="text-gray-700 leading-relaxed">
                Developing pathways to self-employment that create stability 
                beyond traditional employment models
              </p>
            </div>
          </Grid>
        </PageLayout>
      </Block>

      {/* Call & Response Block - Photography Testimonial */}
      <Block spacing="spacious">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            <Grid columns={2} className="items-center gap-12">
              <div className="space-y-6">
                <div className="aspect-square rounded-lg bg-[#F96E1E] p-6 flex items-center justify-center">
                  <p className="text-white text-lg font-medium text-center leading-relaxed">
                    &ldquo;How do I lead when it&apos;s not about work?&rdquo;
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 font-medium">
                    Leadership shouldn&apos;t just be a workplace thing
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative rounded-lg bg-white p-8 shadow-lg border-l-4 border-[#7A9A7F]">
                  <div className="absolute -left-1 -top-2 text-4xl font-['Waiting_for_the_Sunrise'] text-[#7A9A7F]">&ldquo;</div>
                  
                  <div className="pl-8 space-y-4">
                    <p className="text-lg italic leading-relaxed text-gray-700">
                      It&apos;s always so good to have my meetings with Phillip and hear some more pearls of wisdom from him.
                    </p>
                    
                    <p className="text-lg italic leading-relaxed text-gray-700">
                      Whenever I am in need of some inspiration, coaching or just a general shake up, 
                      he never fails to make my jaw drop with his insights and advice.
                    </p>
                    
                    <p className="text-lg italic leading-relaxed text-gray-700">
                      I can&apos;t imagine my business being what it is today without his input and guidance.
                    </p>
                  </div>
                  <div className="text-right mt-6">
                    <p className="font-medium text-[#7A9A7F] not-italic">
                      Business Owner
                    </p>
                    <p className="text-sm text-[#7A9A7F]/80 not-italic">
                      Photography
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </div>
        </PageLayout>
      </Block>

      {/* Integration Philosophy Block */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight">
              Leadership without walls
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The leaders I most respect don&apos;t have a &lsquo;work self&rsquo; and a &lsquo;home self&rsquo;.
                They have one self, lived with intention across every context.
              </p>
              <p>
                They bring the same curiosity to a difficult conversation with their teenager
                as they do to a challenging board meeting. The same presence to a community
                project as they bring to a strategic planning session.
              </p>
              <p className="text-[#7E2D40] font-medium">
                This integration isn&apos;t about perfection. It&apos;s about authenticity.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Reflection Prompt Block */}
      <Block background="navy" spacing="spacious">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight">
              Where leadership really lives
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                Where do you show up as a leader; when no one&apos;s watching?
              </p>
              <p>
                What&apos;s one circle in your life that&apos;s asking for more intention?
              </p>
              <p className="text-[#D4B86A] font-medium">
                The strongest leaders I know don&apos;t compartmentalise their integrity.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F96E1E] text-white text-lg font-medium rounded transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
              >
                Explore your leadership impact
              </Link>
              <p className="mt-4 text-sm text-white/70">
                Let&apos;s talk about leadership that works everywhere.
              </p>
            </div>
          </div>
        </PageLayout>
      </Block>

      {/* Cross-Domain Learning Block */}
      <Block spacing="default">
        <PageLayout>
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight">
                Cross-domain leadership transfer
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                What we learn in one domain strengthens leadership across all domains
              </p>
            </div>
            <Grid columns={2} className="gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#1A365D]">From Community to Boardroom</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#F96E1E]">→</span>
                    Listening to understand, not to fix
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#F96E1E]">→</span>
                    Creating space for others to find their own solutions
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#F96E1E]">→</span>
                    Building capability rather than dependence
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#F96E1E]">→</span>
                    Leading through presence, not position
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#1A365D]">From Boardroom to Community</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#7A9A7F]">✓</span>
                    Strategic thinking applied to social challenges
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#7A9A7F]">✓</span>
                    Systems perspective on community development
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#7A9A7F]">✓</span>
                    Goal clarity and outcome measurement
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 text-[#7A9A7F]">✓</span>
                    Structured approaches to complex problems
                  </li>
                </ul>
              </div>
            </Grid>
          </div>
        </PageLayout>
      </Block>

      {/* Closing CTA Block */}
      <Block background="navy" spacing="default">
        <PageLayout>
          <div className="text-center space-y-8">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-white leading-tight">
              Ready to explore integrated leadership?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/90 leading-relaxed">
              These five domains come alive in conversation; not as theories to understand, 
              but as contexts for authentic leadership practice.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F96E1E] text-white text-lg font-medium rounded transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
              >
                Let&apos;s begin
              </Link>
            </div>
            <p className="text-sm text-white/60">
              No templates. No prescriptions.<br />
              Just space to see what&apos;s really there.
            </p>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
