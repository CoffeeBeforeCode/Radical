import Layout, { Block, Grid, PageLayout } from '../components/Layout'
import Link from 'next/link'

export default function SocialImpact() {
  return (
    <Layout
      title="Social Impact - Leadership Beyond the Workplace"
      description="Demonstrating leadership in the community domain through mentoring over 1,000 unemployed individuals in entrepreneurship. Five domains of integrated leadership: Self, Work, Community, Family, Friendship."
      canonical="/social-impact"
    >
      {/* Hero Block - Leadership Beyond the Workplace */}
      <Block spacing="spacious">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl md:text-6xl text-[#1A365D] leading-tight">
              Leadership beyond the workplace
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Leadership is not a hat we put on.<br />
              It&apos;s a way we show up &mdash; everywhere.
            </p>
          </div>
        </PageLayout>
      </Block>

      {/* Five Domains - Ring Style Layout */}
      <Block background="cream" spacing="spacious">
        <PageLayout>
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight mb-6">
                The Five Domains of Intentional Leadership
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mx-auto max-w-3xl">
                Authentic leadership integrates across every context. These five domains represent where leadership lives and grows.
              </p>
            </div>

            {/* Central Hub */}
            <div className="text-center mb-12">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#1A365D] text-center md:h-40 md:w-40">
                <div className="text-white">
                  <div className="font-['Waiting_for_the_Sunrise'] text-2xl md:text-3xl">You</div>
                  <div className="text-sm font-medium">at the centre</div>
                </div>
              </div>
            </div>

            {/* Five Domains Grid */}
            <Grid columns={5} className="gap-6 md:gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#7E2D40] text-2xl text-white md:h-24 md:w-24 md:text-3xl">
                  🧘‍♂️
                </div>
                <h3 className="font-['Waiting_for_the_Sunrise'] text-xl text-[#7E2D40] md:text-2xl">Self</h3>
                <p className="text-sm text-gray-600">
                  The origin of all leadership
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A365D] text-2xl text-white md:h-24 md:w-24 md:text-3xl">
                  💼
                </div>
                <h3 className="font-['Waiting_for_the_Sunrise'] text-xl text-[#1A365D] md:text-2xl">Work</h3>
                <p className="text-sm text-gray-600">
                  Influence beyond authority
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#7A9A7F] text-2xl text-white md:h-24 md:w-24 md:text-3xl">
                  🌍
                </div>
                <h3 className="font-['Waiting_for_the_Sunrise'] text-xl text-[#7A9A7F] md:text-2xl">Community</h3>
                <p className="text-sm text-gray-600">
                  Belonging, not broadcasting
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#D4B86A] text-2xl text-white md:h-24 md:w-24 md:text-3xl">
                  👨‍👩‍👧‍👦
                </div>
                <h3 className="font-['Waiting_for_the_Sunrise'] text-xl text-[#D4B86A] md:text-2xl">Family</h3>
                <p className="text-sm text-gray-600">
                  Presence before perfection
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F96E1E] text-2xl text-white md:h-24 md:w-24 md:text-3xl">
                  🤝
                </div>
                <h3 className="font-['Waiting_for_the_Sunrise'] text-xl text-[#F96E1E] md:text-2xl">Friendship</h3>
                <p className="text-sm text-gray-600">
                  Mutuality over performance
                </p>
              </div>
            </Grid>
          </div>
        </PageLayout>
      </Block>

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
                aren&apos;t technical or strategic &mdash; they&apos;re about integration.
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
                This isn&apos;t about giving back &mdash; it&apos;s about showing up as a leader
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
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#7A9A7F] text-2xl text-white">
                💼
              </div>
              <h3 className="text-xl font-semibold text-[#1A365D]">Sustainable Employment</h3>
              <p className="text-gray-700 leading-relaxed">
                Creating local employment opportunities that build community resilience 
                and economic independence
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4B86A] text-2xl text-white">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-[#1A365D]">Entrepreneurial Capabilities</h3>
              <p className="text-gray-700 leading-relaxed">
                Building business thinking and self-reliance within communities, 
                one conversation at a time
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F96E1E] text-2xl text-white">
                🌱
              </div>
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
                Where do you show up as a leader &mdash; when no one&apos;s watching?
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

      {/* Results & Impact Metrics */}
      <Block background="cream" spacing="default">
        <PageLayout>
          <div className="text-center space-y-12">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl md:text-4xl text-[#1A365D] leading-tight">
              Leadership impact measured
            </h2>

            <Grid columns={3} className="gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-[#F96E1E]">1,000+</div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Individuals Mentored</h3>
                <p className="text-gray-600">
                  Unemployed individuals supported in creating employment opportunities
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-[#7A9A7F]">5</div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Business Fundamentals</h3>
                <p className="text-gray-600">
                  Core framework areas providing structured entrepreneurship support
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-[#D4B86A]">15+</div>
                <h3 className="text-lg font-semibold text-[#1A365D]">Years Active</h3>
                <p className="text-gray-600">
                  Sustained community leadership demonstration across multiple contexts
                </p>
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
              These five domains come alive in conversation &mdash; not as theories to understand, 
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
