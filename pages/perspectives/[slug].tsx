import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout, { PageLayout } from '../../components/Layout'

interface BlogPostProps {
  post: {
    slug: string
    title: string
    excerpt: string
    category: string
    readTime: string
    publishDate: string
    content: string
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      canonical={`/perspectives/${post.slug}`}
    >
      {/* Hero Section */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="/perspectives"
                className="font-medium text-[#D4B86A] transition-colors hover:text-white"
              >
                ← Back to Perspectives
              </Link>
              <span className="inline-block rounded-full bg-[#F96E1E] px-3 py-1 text-sm font-medium text-white">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-[&apos;Waiting_for_the_Sunrise&apos;] text-3xl leading-tight text-white md:text-5xl">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
              <time>
                {new Date(post.publishDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}
              </time>
              <span>{post.readTime}</span>
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Article Content */}
      <section className="w-full bg-white py-16">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto max-w-none prose-headings:font-[&apos;Waiting_for_the_Sunrise&apos;] prose-headings:text-[#1A365D] prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-p:text-gray-700 prose-strong:text-[#7E2D40] prose-a:text-[#F96E1E] hover:prose-a:text-[#E55A1A]">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#F8F5EB] py-16">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-[&apos;Waiting_for_the_Sunrise&apos;] text-3xl text-[#1A365D] md:text-4xl">
              Ready to explore <span className="text-[#F96E1E]">your</span> leadership development?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              These perspectives emerge from real coaching conversations. 
              Let&apos;s explore what&apos;s getting in your way.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-[#F96E1E] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E55A1A] focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
            >
              Start the conversation
            </Link>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = [
    'leadership-equation',
    'leadership-as-practice', 
    'values-evolution',
    'values-in-motion'
  ]

  const paths = slugs.map((slug) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  // Blog post content
  const blogPosts: { [key: string]: any } = {
    'leadership-equation': {
      slug: 'leadership-equation',
      title: 'The Leadership Equation: Unlocking Performance by Reducing Interference',
      excerpt: 'Leadership development traditionally focuses on adding more skills, more knowledge, more techniques. Yet what if the most impactful approach isn&apos;t about adding, but removing?',
      category: 'Leadership Equation',
      readTime: '8 min read',
      publishDate: '2025-08-19',
      content: `
        <div class="space-y-8">
          <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">Leadership development traditionally focuses on adding: more skills, more knowledge, more techniques. Yet what if the most impactful approach isn&apos;t about adding, but removing? What if the difference between good and exceptional leadership isn&apos;t what we lack, but what gets in our way?</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#D4B86A]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Key Takeaway</h3>
            <p class="text-gray-700">The Leadership Equation (PE = PO - I) suggests that most leaders already possess remarkable potential. What limits performance isn&apos;t lack of capability, but the presence of interference.</p>
          </div>

          <p>The Leadership Equation offers a different perspective: <span class="text-[#F96E1E] font-semibold">Performance Equals Potential minus Interference (PE = PO - I)</span>. This deceptively simple formula suggests that most leaders already possess remarkable potential.</p>

          <p>What limits their performance isn&apos;t a lack of capability, but the presence of interference—or as I often call it in my coaching practice, their &ldquo;stuff.&rdquo;</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border border-[#D4B86A]">
            <div class="pt-2">
              <p class="text-lg italic text-[#1A365D] text-center">
                &ldquo;Everyone thinks I&apos;ve got this sorted... but I&apos;m not sure I do.&rdquo;
              </p>
              <div class="text-center mt-3">
                <span class="text-sm text-gray-600">[Internal narrative: The gap between external perception and private uncertainty]</span>
              </div>
            </div>
          </div>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2><strong>The Power of Reduction</strong></h2>
          
          <p>This approach transforms how we think about leadership development. Rather than constantly pushing for more performance through additional pressure or techniques, we create space for inherent excellence to emerge by identifying and reducing what&apos;s getting in the way.</p>

          <div class="my-8 bg-gradient-to-r from-[#F8F5EB] to-white p-1 rounded-lg">
            <div class="bg-white p-6 rounded-lg">
              <blockquote class="text-xl italic text-[#1A365D] text-center">
                &ldquo;This perspective speaks to what many senior leaders experience privately: carrying the quiet loneliness at the top whilst projecting confidence in public forums.&rdquo;
              </blockquote>
            </div>
          </div>

          <p>The Leadership Equation offers a framework for addressing this gap between external perception and internal experience.</p>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2><strong>Understanding Interference: What Gets in Our Way</strong></h2>

          <p>Before we can reduce interference, we must understand what it looks like. Through my coaching practice, I&apos;ve observed several recurring forms that affect leaders:</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Inner Dialogue</h3>
              <p class="text-gray-700">The moment-to-moment self-talk running through our minds: imposter syndrome, perfectionism, comparison thinking.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Environmental Blockers</h3>
              <p class="text-gray-700">External factors like toxic team dynamics, organisational silos, excessive administrative burdens.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Unhelpful Narratives</h3>
              <p class="text-gray-700">Deeper storylines about who we are: &ldquo;I must always have the answer,&rdquo; &ldquo;I&apos;m not strategic enough.&rdquo;</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Competing Commitments</h3>
              <p class="text-gray-700">Unconscious commitments that conflict with stated goals: wanting visibility while avoiding scrutiny.</p>
            </div>
          </div>

          <div class="my-8 rounded-lg bg-[#1A365D] text-white p-6">
            <h3 class="text-[#F96E1E] font-semibold mb-3">Critical Insight</h3>
            <p class="text-white">Interference patterns developed for good reasons—they were attempts to create safety, success, or belonging in specific contexts. When we can appreciate that our interference once served us, we can release it with gratitude rather than fighting against it.</p>
          </div>

          <h2><strong>From Theory to Practice: A Hypothetical Example</strong></h2>

          <p>Let&apos;s examine how the Leadership Equation might play out in actual leadership contexts. Consider a leader who, despite exceptional strategic thinking and technical expertise, finds their team experiencing burnout while key projects fall behind.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">Through coaching work, such a leader might discover that their fear of being seen as incompetent is driving them to micromanage their team and take on excessive work themselves.</p>
          </div>

          <p>This fear (their &lsquo;interference&rsquo;) could be preventing their natural leadership potential from emerging.</p>

          <p>This creates the psychological safety necessary for genuine change.</p>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2><strong>A Practical Framework for Reducing Interference</strong></h2>

          <p>How do we practically apply the Leadership Equation? Here&apos;s a framework I&apos;ve developed through my coaching practice:</p>

          <div class="space-y-6 my-8">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">1</span>
                Awareness Building
              </h3>
              <p class="text-gray-700">Begin by developing awareness of your interference patterns. What situations consistently trigger stress or suboptimal performance? What stories do you tell yourself during challenging moments?</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">2</span>
                Pattern Recognition
              </h3>
              <p class="text-gray-700">Notice recurring themes in your interference. Do you default to controlling behaviour when feeling uncertain? Do you avoid difficult conversations to maintain harmony?</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">3</span>
                Gentle Experimentation
              </h3>
              <p class="text-gray-700">Once you&apos;ve identified interference patterns, experiment with small changes. If you tend to micromanage, try delegating one small task completely.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">4</span>
                Integration and Reflection
              </h3>
              <p class="text-gray-700">Regular reflection helps embed new patterns. What happened when you reduced your usual interference? How did it feel to lead with less &lsquo;stuff&rsquo; getting in your way?</p>
            </div>
          </div>

          <div class="my-8 bg-gradient-to-r from-[#F8F5EB] to-white p-1 rounded-lg">
            <div class="bg-white p-6 rounded-lg">
              <blockquote class="text-xl italic text-[#1A365D] text-center">
                &ldquo;I often work with clients to develop what I call <span class="font-semibold">interference awareness</span>—the capacity to notice when you&apos;re operating from interference rather than potential.&rdquo;
              </blockquote>
            </div>
          </div>

          <h2><strong>The Role of Self-Compassion</strong></h2>

          <p>Perhaps the most important aspect of working with the Leadership Equation is approaching your interference with self-compassion rather than self-criticism. Our interference patterns developed for good reasons, and recognising this allows us to work with them more skillfully.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#F96E1E]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Remember This</h3>
            <p class="text-gray-700">The goal isn&apos;t to eliminate all interference—that&apos;s neither possible nor desirable. The goal is to develop the awareness and tools to notice when interference is limiting your effectiveness and to have choices about how to respond.</p>
          </div>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2><strong>Conclusion: The Ongoing Practice</strong></h2>

          <div class="my-8 rounded-lg bg-[#1A365D] text-white p-8">
            <h3 class="text-[#D4B86A] font-semibold mb-4">The Formula for Transformation</h3>
            <div class="text-center">
              <p class="text-2xl font-bold mb-4">Performance = Potential - Interference</p>
              <p class="text-lg">The practice is lifelong. The results can be transformational.</p>
            </div>
          </div>

          <p>The Leadership Equation offers a refreshing alternative to the endless pursuit of more skills and techniques. By focusing on what we need to remove rather than what we need to add, we create space for our inherent leadership potential to emerge.</p>

          <p>Leadership development through the Leadership Equation isn&apos;t about perfection; it&apos;s about progress. It&apos;s about creating a sustainable practice of identifying and reducing whatever gets in the way of our authentic leadership expression.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#F96E1E]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Reflection Question</h3>
            <p class="text-gray-700 italic">What&apos;s one piece of interference you&apos;ve noticed in your own leadership? What would become possible if you could reduce it by just 10%?</p>
          </div>
        </div>
      `
    },
    'leadership-as-practice': {
      slug: 'leadership-as-practice',
      title: 'Leadership as a Lifelong Practice: Beyond the Workplace',
      excerpt: 'True leadership isn&apos;t confined to job titles or organisational charts. It&apos;s a practice that extends across every domain of our lives—how we lead ourselves, our families, our friendship circles, and our communities.',
      category: 'Leadership Practice',
      readTime: '10 min read',
      publishDate: '2025-08-15',
      content: `
        <div class="space-y-8">
          <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">When we think about leadership development, the conversation typically centres on workplace contexts: managing teams, driving results, navigating organisational politics. Yet this narrow focus misses something fundamental about how leadership actually develops and manifests in human experience.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#D4B86A]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Key Insight</h3>
            <p class="text-gray-700">True leadership isn&apos;t confined to job titles or organisational charts. It&apos;s a practice that extends across every domain of our lives—how we lead ourselves, our families, our friendship circles, and our communities.</p>
          </div>

          <p>This perspective transforms leadership from something we achieve to something we continuously develop. Rather than viewing leadership as a destination marked by promotion or position, we can understand it as a lifelong practice that evolves through different contexts and life stages.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border border-[#D4B86A]">
            <div class="pt-2">
              <p class="text-lg italic text-[#1A365D] text-center">
                &ldquo;I&apos;m confident leading my team at work... so why do I feel lost when my teenager challenges me?&rdquo;
              </p>
              <div class="text-center mt-3">
                <span class="text-sm text-gray-600">[Internal narrative: The humbling realisation that leadership skills don&apos;t automatically transfer across life domains]</span>
              </div>
            </div>
          </div>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2><strong>The Five Domains of Leadership Practice</strong></h2>

          <p>Consider Stephen Covey&apos;s powerful exercise from <em>The 7 Habits of Highly Effective People</em>: imagining your own funeral and the eulogies that would be given by representatives from four different domains of your life—work, family, friendship circles, and community. This scenario reveals an uncomfortable truth: we might excel as leaders in our professional lives whilst struggling to lead effectively in our personal relationships, or vice versa.</p>

          <p>I&apos;ve expanded Covey&apos;s four domains to include a fifth: <strong>leading ourselves</strong>. This becomes the foundation from which all other leadership practice emerges.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">1. Self-Leadership</h3>
              <p class="text-gray-700">Managing our internal dialogue, emotions, and personal development. This includes self-awareness, emotional regulation, and conscious choice-making.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">2. Workplace Leadership</h3>
              <p class="text-gray-700">Leading teams, managing up and across, driving results, and navigating organisational dynamics with integrity and effectiveness.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">3. Family Leadership</h3>
              <p class="text-gray-700">Creating healthy family dynamics, parenting with intention, and modelling the values we want to see in our children and partners.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">4. Friendship Leadership</h3>
              <p class="text-gray-700">Being the kind of friend who brings out the best in others, initiating meaningful connections, and maintaining relationships through life&apos;s changes.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6 md:col-span-2">
              <h3 class="text-[#1A365D] font-semibold mb-3">5. Community Leadership</h3>
              <p class="text-gray-700">Contributing to the broader community, whether through formal roles, volunteer work, or simply being a positive presence in our neighbourhoods and social circles.</p>
            </div>
          </div>

          <h2><strong>The Cross-Domain Transfer Challenge</strong></h2>

          <p>One of the most fascinating aspects of leadership practice is how skills and insights transfer—or fail to transfer—between these domains. A CEO who excels at stakeholder management might struggle with family dynamics during adolescence. A parent who naturally creates psychological safety at home might find themselves micromanaging at work.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">The most authentic and sustainable leadership emerges when we integrate our practice across all these domains, recognising that each context offers unique opportunities for growth and insight.</p>
          </div>

          <h2><strong>Practice vs. Perfection</strong></h2>

          <p>Viewing leadership as a practice rather than a position fundamentally changes how we approach development. Practice implies:</p>

          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Consistency over intensity</strong> - Regular, sustainable engagement rather than sporadic bursts of effort</li>
            <li><strong>Growth mindset</strong> - Embracing mistakes and setbacks as learning opportunities</li>
            <li><strong>Long-term perspective</strong> - Understanding that mastery develops over years and decades, not months</li>
            <li><strong>Contextual adaptation</strong> - Recognising that effective leadership looks different in different situations</li>
            <li><strong>Lifelong learning</strong> - Remaining curious and open to new insights regardless of experience level</li>
          </ul>

          <div class="my-8 bg-gradient-to-r from-[#F8F5EB] to-white p-1 rounded-lg">
            <div class="bg-white p-6 rounded-lg">
              <blockquote class="text-xl italic text-[#1A365D] text-center">
                &ldquo;Leadership practice means showing up consistently, not perfectly. It&apos;s about intention, attention, and the willingness to keep learning.&rdquo;
              </blockquote>
            </div>
          </div>

          <h2><strong>Practical Approaches to Cross-Domain Development</strong></h2>

          <p>How do we practically develop leadership across multiple life domains? Here are some approaches I&apos;ve found effective in my coaching practice:</p>

          <div class="space-y-6 my-8">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Regular Reflection Practice</h3>
              <p class="text-gray-700">Weekly or monthly reflection on leadership challenges and successes across all five domains. What patterns emerge? Where are you growing? Where do you need to focus?</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Cross-Domain Learning</h3>
              <p class="text-gray-700">Deliberately seeking to apply insights from one domain to another. How might your family leadership skills inform your approach to team conflicts? How could your workplace communication enhance your friendships?</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Values Integration</h3>
              <p class="text-gray-700">Identifying core values that can guide decision-making across all domains, whilst remaining flexible about how these values manifest in different contexts.</p>
            </div>
          </div>

          <h2><strong>Conclusion: The Integrated Leader</strong></h2>

          <p>Leadership as a lifelong practice invites us to embrace both humility and ambition. We recognise that there&apos;s always more to learn whilst celebrating the growth we&apos;ve already achieved. We understand that leading effectively requires different approaches in different contexts whilst maintaining authentic consistency in our core values and intentions.</p>

          <p>When we view leadership as a practice rather than a position, we create space for continuous development that honours both our achievements and our ongoing journey. This perspective transforms challenges into learning opportunities and setbacks into stepping stones.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#F96E1E]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Reflection Questions</h3>
            <ul class="text-gray-700 space-y-2">
              <li>• In which domain of leadership do you feel most confident? Which feels most challenging?</li>
              <li>• What leadership insights from one area of your life could benefit another?</li>
              <li>• How might viewing leadership as practice rather than position change your approach to development?</li>
            </ul>
          </div>
        </div>
      `
    },
    'values-evolution': {
      slug: 'values-evolution',
      title: 'Navigating Values Evolution Through Leadership Transitions',
      excerpt: 'One of the most overlooked aspects of leadership development is how our core values evolve during significant life transitions. We tend to treat values as fixed principles—yet they naturally shift as we grow.',
      category: 'Values Evolution',
      readTime: '12 min read',
      publishDate: '2025-08-10',
      content: `
        <div class="space-y-8">
          <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">One of the most overlooked aspects of leadership development is how our core values evolve during significant life transitions. We tend to treat values as fixed principles—unchanging guideposts that should remain constant throughout our careers and lives. Yet in my coaching practice, I&apos;ve observed that major transitions often catalyse profound shifts in what matters most to us.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#D4B86A]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Central Truth</h3>
            <p class="text-gray-700">Values evolution isn&apos;t a sign of inconsistency or weakness—it&apos;s a natural response to changing life circumstances and evolving self-awareness. When we fail to recognise these shifts, they can create significant interference in our Leadership Equation.</p>
          </div>

          <p>Consider this: the ambitious executive who prioritised achievement and recognition in their thirties may find themselves valuing work-life integration and meaningful relationships after becoming a parent. The military officer who lived by service and duty might discover that family security takes precedence after transitioning to civilian life.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border border-[#D4B86A]">
            <div class="pt-2">
              <p class="text-lg italic text-[#1A365D] text-center">
                &ldquo;I used to be so driven... now I question whether any of this really matters. Have I lost my edge?&rdquo;
              </p>
              <div class="text-center mt-3">
                <span class="text-sm text-gray-600">[Internal narrative: Confusion and self-doubt when evolving values conflict with established identity]</span>
              </div>
            </div>
          </div>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2><strong>Understanding Values Evolution: The Hidden Leadership Challenge</strong></h2>

          <p>Values evolution presents a unique challenge for leaders because it often occurs beneath conscious awareness. Unlike skill development or knowledge acquisition, which we can observe and measure, values shifts tend to emerge gradually through our responses to new experiences and changing life circumstances.</p>

          <h3><strong>The Myth of Fixed Values</strong></h3>

          <p>Many leadership development approaches treat values as constants to be discovered and then applied consistently. This perspective assumes that once we identify our core values, perhaps through a workshop or assessment, we can rely on them to guide decision-making indefinitely.</p>

          <p>My experience suggests otherwise. Values evolve constantly through life transitions: marriage, parenthood, career changes, health challenges, geographic moves, and countless other experiences that reshape our understanding of what matters most.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">The values hierarchy that served us in our twenties may require conscious recalibration as we navigate our forties. This isn&apos;t a flaw in the human system—it&apos;s a feature.</p>
          </div>

          <h2><strong>Common Transition Points That Trigger Values Evolution</strong></h2>

          <p>Certain life transitions consistently create opportunities for values evolution. Understanding these patterns can help leaders anticipate and navigate changes more consciously:</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Career Transitions</h3>
              <p class="text-gray-700">Promotions, industry changes, entrepreneurship, or retirement often reveal evolved priorities around autonomy, impact, and legacy.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Life Stage Changes</h3>
              <p class="text-gray-700">Marriage, parenthood, children leaving home, or caring for aging parents frequently shift values around family, security, and personal time.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Health Challenges</h3>
              <p class="text-gray-700">Personal or family health crises often elevate values around wellbeing, presence, and meaningful relationships whilst diminishing focus on achievement.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">Global Events</h3>
              <p class="text-gray-700">Economic downturns, pandemics, or social upheaval can dramatically reshape priorities around security, community, and social responsibility.</p>
            </div>
          </div>

          <h2><strong>The Physiology of Values Conflict</strong></h2>

          <p>When our evolved values conflict with established patterns or external expectations, we often experience this tension somatically—in our bodies—before we understand it cognitively. Leaders might notice:</p>

          <ul class="list-disc pl-6 space-y-2 text-gray-700 my-6">
            <li>Persistent fatigue despite adequate rest</li>
            <li>Difficulty making decisions that previously felt straightforward</li>
            <li>Increased irritability or emotional reactivity</li>
            <li>Physical tension or unexplained anxiety</li>
            <li>Loss of enthusiasm for previously motivating activities</li>
          </ul>

          <p>These somatic signals often indicate that our values system is recalibrating, even when we haven&apos;t consciously recognised the shift.</p>

          <h2><strong>Practical Tools for Values Integration</strong></h2>

          <p>Successfully navigating values evolution requires both awareness and practical tools for integration. Here are approaches I&apos;ve found effective in my coaching practice:</p>

          <div class="space-y-6 my-8">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">1</span>
                Values Constellation Mapping
              </h3>
              <p class="text-gray-700">Visualise your values as a constellation where different values can be &lsquo;brighter&rsquo; (more prominent) at different times without disappearing entirely. This external representation helps reduce internal conflict.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">2</span>
                Temporal Values Mapping
              </h3>
              <p class="text-gray-700">Track how your values hierarchy has shifted over 5-10 year periods. This historical perspective normalises change and provides insight into your evolution patterns.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">3</span>
                Stakeholder Communication
              </h3>
              <p class="text-gray-700">Develop language to communicate values evolution to key stakeholders without suggesting fundamental identity change. Focus on enhanced effectiveness rather than diminished commitment.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">4</span>
                Decision-Making Integration
              </h3>
              <p class="text-gray-700">Create frameworks that honour both evolved and established values when facing important decisions. Often, apparent conflicts can be resolved through creative integration.</p>
            </div>
          </div>

          <div class="my-8 bg-gradient-to-r from-[#F8F5EB] to-white p-1 rounded-lg">
            <div class="bg-white p-6 rounded-lg">
              <blockquote class="text-xl italic text-[#1A365D] text-center">
                &ldquo;Values evolution isn&apos;t weakness—it&apos;s the kind of conscious leadership our complex world desperately needs.&rdquo;
              </blockquote>
            </div>
          </div>

          <h2><strong>Creating Space for Others&apos; Values Evolution</strong></h2>

          <p>As leaders develop consciousness about their own values evolution, they often become more attuned to similar processes in others. This awareness creates opportunities to support team members, family members, and colleagues through their own transitions.</p>

          <p>This support might involve creating safe spaces for others to explore their evolving priorities, sharing experiences of your own values integration journey, modelling acceptance of others&apos; changing priorities, and providing patience during others&apos; transition periods.</p>

          <h2><strong>Conclusion: Embracing Values Evolution as Leadership Strength</strong></h2>

          <p>Throughout this exploration of values evolution in leadership transitions, we&apos;ve seen how what might initially feel like uncertainty or inconsistency can actually become a source of enhanced authenticity, effectiveness, and satisfaction.</p>

          <p>The leaders who navigate these transitions most successfully don&apos;t fight against changing priorities. They learn to embrace values evolution as a natural and valuable aspect of leadership development.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">What distinguishes effective leaders isn&apos;t the absence of values evolution; it&apos;s the consciousness with which they navigate these changes.</p>
          </div>

          <p>Rather than allowing values shifts to create confusion or interference, conscious leaders develop the capacity to recognise, explore, and integrate evolving priorities with intention and wisdom. This transforms values evolution from a potential source of instability into a competitive advantage.</p>

          <p>Remember that values evolution represents your continued engagement with growth, your responsiveness to changing life circumstances, and your commitment to leading from authenticity rather than habit. The practice of conscious values evolution continues throughout our leadership journey, offering ongoing opportunities for enhanced authenticity, effectiveness, and contribution.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#F96E1E]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Reflection Questions</h3>
            <ul class="text-gray-700 space-y-2">
              <li>• How have your core values shifted over the past five years? What triggered these changes?</li>
              <li>• Where do you notice tension between your evolved values and established patterns or expectations?</li>
              <li>• How might embracing values evolution enhance rather than diminish your leadership effectiveness?</li>
            </ul>
          </div>
        </div>
      `
    },
    'values-in-motion': {
      slug: 'values-in-motion',
      title: 'Values in Motion: Making the Invisible Visible Through Constellation Work',
      excerpt: 'Values conflicts often remain invisible precisely because they&apos;re internal. When competing priorities swirl around in our minds, they can feel overwhelming and abstract. Constellation mapping makes the invisible visible.',
      category: 'Constellation Work',
      readTime: '9 min read',
      publishDate: '2025-08-05',
      content: `
        <div class="space-y-8">
          <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">I&apos;m always surprised by how many leaders struggle to describe their values conflicts in clear terms. They know something feels &ldquo;off&rdquo; about a decision, but they can&apos;t quite articulate what&apos;s creating the tension. That&apos;s where Values Constellation Mapping comes in.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#D4B86A]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">The Challenge</h3>
            <p class="text-gray-700">Values conflicts often remain invisible precisely because they&apos;re internal. When competing priorities swirl around in our minds, they can feel overwhelming and abstract. We sense the tension, but we can&apos;t quite grasp where it&apos;s coming from or how to work with it.</p>
          </div>

          <p>It&apos;s one of my favourite coaching techniques, particularly because I&apos;m a fan of in-person work where we can use physical space to explore complex internal dynamics. Like many things for me, I&apos;ve learned that what we can&apos;t see clearly, we can&apos;t address effectively.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border border-[#D4B86A]">
            <div class="pt-2">
              <p class="text-lg italic text-[#1A365D] text-center">
                &ldquo;I know this decision matters, but I can&apos;t figure out why it feels so difficult...&rdquo;
              </p>
              <div class="text-center mt-3">
                <span class="text-sm text-gray-600">[Internal narrative: The frustration of sensing tension without understanding its source]</span>
              </div>
            </div>
          </div>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2><strong>The Problem with Internal Processing</strong></h2>

          <p>The interference these conflicts create in our decision-making often stems not from the values themselves, but from our inability to understand how they&apos;re relating to each other in specific contexts. When competing priorities swirl around in our minds, they can feel overwhelming and abstract.</p>

          <h2><strong>Making the Abstract Tangible</strong></h2>

          <p>In my coaching practice, I approach Values Constellation Mapping as a physical or visual exercise. We might use post-it notes, objects, or even position ourselves in different parts of the room to represent different values in relation to a particular decision.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">1</span>
                Identify the Decision
              </h3>
              <p class="text-gray-700">We begin by identifying the specific decision or situation creating values tension.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">2</span>
                Name the Values
              </h3>
              <p class="text-gray-700">Then we name the relevant values involved in this context.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">3</span>
                Create Physical Representations
              </h3>
              <p class="text-gray-700">I ask the leader to create physical representations for each value and position them spatially in relation to the decision and each other.</p>
            </div>
            
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">4</span>
                Explore the Relationships
              </h3>
              <p class="text-gray-700">What emerges next is where the real work begins—observing the relationships and tensions between values.</p>
            </div>
          </div>

          <h2><strong>Questions That Illuminate</strong></h2>

          <p>I find that certain questions consistently reveal important insights during constellation work:</p>

          <ul class="list-disc pl-6 space-y-2 text-gray-700 my-6">
            <li>&ldquo;Which values feel closest to this decision? Which seem furthest away?&rdquo;</li>
            <li>&ldquo;What do you notice about the distance between these two values?&rdquo;</li>
            <li>&ldquo;What happens if you move this value closer to the decision?&rdquo;</li>
            <li>&ldquo;Which values seem to naturally cluster together?&rdquo;</li>
          </ul>

          <p>These aren&apos;t rhetorical questions. I&apos;m genuinely curious about what the leader observes when they can literally see the relationships between their competing priorities.</p>

          <h2><strong>The Power of Spatial Intelligence</strong></h2>

          <p>The spatial element is crucial. When we can physically see the distance between competing values, or notice how certain priorities cluster together whilst others remain isolated, insights emerge that might remain hidden in purely verbal discussions.</p>

          <div class="my-8 bg-gradient-to-r from-[#F8F5EB] to-white p-1 rounded-lg">
            <div class="bg-white p-6 rounded-lg">
              <blockquote class="text-xl italic text-[#1A365D] text-center">
                &ldquo;I remember working with a regional director who was facing a career opportunity requiring international relocation. Through constellation mapping, we externalised the values in tension.&rdquo;
              </blockquote>
            </div>
          </div>

          <p>Career advancement positioned close to the opportunity, family stability positioned far from it, adventure and growth somewhere in between. Through physically moving these representations, he discovered that family stability and community connection were more important to him than he had consciously realised.</p>

          <p>The constellation revealed that whilst the opportunity offered career and financial benefits, it would require compromising values that had become more central to his identity since becoming a father.</p>

          <h2><strong>Beyond Problem-Solving</strong></h2>

          <p>Can I share an observation? Sometimes the most important outcome isn&apos;t necessarily resolving the conflict but learning to sit with the tension in a way that allows for better decision-making.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">My role as a coach isn&apos;t to make the trade-offs easier but to help leaders build the emotional and cognitive flexibility to navigate them wisely.</p>
          </div>

          <p>The constellation work creates space for that flexibility to develop. It&apos;s not just cognitive—this work accesses embodied intelligence that often provides earlier warning signals than our cognitive awareness.</p>

          <h2><strong>The Embodied Dimension</strong></h2>

          <p>What I&apos;ve learned is that this work isn&apos;t just cognitive. One client described it this way: &ldquo;Every time I made decisions based on what I thought should matter to me, I felt this tightness in my chest. It was like my body was telling me something my mind hadn&apos;t yet acknowledged.&rdquo;</p>

          <p>When we externalise values conflicts through constellation work, we&apos;re often accessing this physical knowing that might otherwise remain unconscious.</p>

          <h2><strong>Practical Applications</strong></h2>

          <p>The methodology adapts to different contexts:</p>

          <div class="space-y-4 my-8">
            <div class="border-l-4 border-[#F96E1E] pl-6">
              <h3 class="text-[#1A365D] font-semibold mb-2">Team Settings</h3>
              <p class="text-gray-700">Mapping collective values and identifying areas of alignment or tension.</p>
            </div>
            
            <div class="border-l-4 border-[#F96E1E] pl-6">
              <h3 class="text-[#1A365D] font-semibold mb-2">Strategic Planning</h3>
              <p class="text-gray-700">Exploring organisational values in relation to different strategic options.</p>
            </div>
            
            <div class="border-l-4 border-[#F96E1E] pl-6">
              <h3 class="text-[#1A365D] font-semibold mb-2">Career Decisions</h3>
              <p class="text-gray-700">Examining how different opportunities align with personal priorities.</p>
            </div>
          </div>

          <p>The key is creating safe space for authentic exploration rather than rushing to resolution. Sometimes a leader needs to experiment with repositioning elements several times before patterns become clear.</p>

          <h2><strong>When Complexity Becomes Clarity</strong></h2>

          <p>I find that leaders who engage with this process often discover unexpected relationships between their values. They notice which priorities naturally support each other and which create genuine tension that needs conscious navigation.</p>

          <p>Beyond that, they develop what I think of as &ldquo;both/and&rdquo; leadership capability. Instead of rushing to choose between competing priorities, they learn to hold multiple perspectives simultaneously.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">This connects directly to what emotional intelligence research shows us about decision-making. Problem Solving, Reality Testing, and Impulse Control are all enhanced when we develop the capacity to work skillfully with complexity.</p>
          </div>

          <h2><strong>Conclusion: The Space Between Knowing and Action</strong></h2>

          <p>Values in Motion isn&apos;t about finding perfect answers. It&apos;s about developing the capacity to work consciously with the tensions that shape our leadership decisions.</p>

          <p>When leaders can see their values conflicts externalised, they gain perspective and agency that&apos;s often unavailable when wrestling with abstract concerns. They can experiment with different arrangements, test various approaches, and develop solutions that honour the complexity of their authentic priorities.</p>

          <p>Most importantly, they learn to trust the process of conscious decision-making rather than defaulting to reactive patterns when values compete for attention.</p>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#F96E1E]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Reflection Questions</h3>
            <ul class="text-gray-700 space-y-2">
              <li>• What decision are you currently facing where you sense values tension but can&apos;t quite articulate it?</li>
              <li>• How might externalising this conflict help you see patterns you haven&apos;t recognised?</li>
              <li>• What would become possible if you could work more skillfully with competing priorities?</li>
            </ul>
          </div>
        </div>
      `
    }
  }

  const postData = blogPosts[slug]

  if (!postData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: postData
    }
  }
}

export default BlogPost
