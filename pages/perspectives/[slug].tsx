import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

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
    <>
      <Head>
        <title>{post.title} | Perspectives | Phillip Collins</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`leadership coaching, ${post.category.toLowerCase()}, executive coaching, ${post.slug.replace('-', ' ')}`} />
      </Head>

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#1A365D] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6 text-center">
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
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto max-w-none prose-headings:font-[&apos;Waiting_for_the_Sunrise&apos;] prose-headings:text-[#1A365D] prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-p:text-gray-700 prose-strong:text-[#7E2D40] prose-a:text-[#F96E1E] hover:prose-a:text-[#E55A1A]">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-gray-200 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href="/perspectives"
                className="inline-flex items-center justify-center rounded bg-[#1A365D] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2A4A6B] focus:outline-none focus:ring-2 focus:ring-[#1A365D] focus:ring-offset-2"
              >
                ← Back to All Perspectives
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#F8F5EB] py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-6 font-[&apos;Waiting_for_the_Sunrise&apos;] text-3xl text-[#1A365D] md:text-4xl">
              Ready to explore your leadership development?
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
        </section>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = [
    'leadership-equation',
    'leadership-as-practice', 
    'values-evolution',
    'internal-narratives'
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
      excerpt: 'Leadership development traditionally focuses on adding more skills, more knowledge, more techniques. Yet what if the most impactful approach isn&apos;t about adding, but removing? The Leadership Equation offers a different perspective: Performance Equals Potential minus Interference.',
      category: 'Leadership Equation',
      readTime: '8 min read',
      publishDate: '2025-08-19',
      content: `
        <p class="text-xl leading-relaxed text-gray-800 mb-8">Leadership development traditionally focuses on adding: more skills, more knowledge, more techniques. Yet what if the most impactful approach isn't about adding, but removing? What if the difference between good and exceptional leadership isn't what we lack, but what gets in our way?</p>

        <p>The Leadership Equation offers a different perspective: <strong>Performance Equals Potential minus Interference (PE = PO - I)</strong>. This deceptively simple formula suggests that most leaders already possess remarkable potential. What limits their performance isn't a lack of capability, but the presence of interference—or as I often call it in my coaching practice, their "stuff."</p>

        <p>This approach transforms how we think about leadership development. Rather than constantly pushing for more performance through additional pressure or techniques, we create space for inherent excellence to emerge by identifying and reducing what's getting in the way.</p>

        <p>This perspective speaks to what many senior leaders experience privately: carrying the quiet loneliness at the top whilst projecting confidence in public forums. As one regional director confided, 'Everyone thinks I've got this sorted—but I'm not sure I do.' The Leadership Equation offers a framework for addressing this gap between external perception and internal experience.</p>

        <h2>From Theory to Practice: A Real-World Example</h2>

        <p>Let's examine how the Leadership Equation can play out in actual leadership contexts. Consider a Regional Director I worked with recently. Despite his exceptional strategic thinking and technical expertise, his team was experiencing burnout, and key projects were falling behind. Traditional leadership development might have focused on giving him new management techniques or stronger delegation skills. Instead, we explored what was interfering with his underlying leadership capabilities.</p>

        <p>Through our work together, we discovered that his fear of being seen as incompetent was driving him to micromanage his team and take on excessive work himself. This fear—his 'interference'—was preventing his natural leadership potential from emerging. Once he recognised this pattern and developed strategies to reduce the interference, his team's performance improved dramatically, not because he learned new skills, but because he removed what was getting in his way.</p>

        <h2>Common Forms of Leadership Interference</h2>

        <p>In my coaching practice, I've observed several recurring patterns of interference that limit leadership effectiveness:</p>

        <h3>The Perfectionist Trap</h3>
        <p>Leaders who demand flawless execution from themselves and others, creating paralysis and team anxiety rather than excellence. This interference manifests as endless revision cycles, reluctance to delegate, and teams that become risk-averse because they fear making mistakes.</p>

        <h3>The People-Pleasing Pattern</h3>
        <p>Executives who struggle to make difficult decisions because they fear disappointing stakeholders, leading to delayed action and unclear direction. This creates confusion in teams who need clear guidance and decisive leadership.</p>

        <h3>The Control Complex</h3>
        <p>Leaders who believe they must manage every detail personally, preventing team growth and creating bottlenecks. This interference stems from believing that delegation equals abdication of responsibility.</p>

        <h3>The Imposter Narrative</h3>
        <p>High-achieving leaders who secretly fear being exposed as frauds, leading to overcompensation and inauthentic behaviour. This creates exhausting cycles of proving worth rather than creating value.</p>

        <h3>The Perfectionism-Performance Paradox</h3>
        <p>The belief that higher standards automatically lead to better results, when in reality, excessive perfectionism often decreases performance by creating paralysis and team anxiety.</p>

        <h2>The Origins of Interference</h2>

        <p>Understanding where interference comes from helps us approach it with compassion rather than judgment. Most interference patterns develop as survival strategies that once served us well:</p>

        <ul>
          <li><strong>Early success patterns:</strong> Behaviours that brought recognition in previous roles may become limiting in new contexts</li>
          <li><strong>Organisational culture:</strong> Environments that reward certain behaviours can reinforce interference patterns</li>
          <li><strong>Transition stress:</strong> Major changes often amplify existing interference patterns</li>
          <li><strong>Identity attachment:</strong> When our sense of self becomes tied to specific ways of leading, we resist change</li>
        </ul>

        <h2>Practical Approaches to Reducing Interference</h2>

        <p>The Leadership Equation isn't just a philosophical framework—it provides practical pathways for development:</p>

        <h3>1. Interference Identification</h3>
        <p>Begin by observing your patterns without judgment. What situations consistently trigger stress or suboptimal performance? What stories do you tell yourself during challenging moments? What physical sensations accompany difficult leadership decisions?</p>

        <p>I often work with clients to develop what I call "interference awareness"—the capacity to notice when you're operating from interference rather than potential. This awareness creates the possibility for choice.</p>

        <h3>2. Pattern Recognition</h3>
        <p>Notice recurring themes in your interference. Do you default to controlling behaviour when feeling uncertain? Do you avoid difficult conversations to maintain harmony? Do you take on excessive work to prove your worth?</p>

        <p>One executive I worked with realised that every time he felt uncertain about a decision, he would gather more data—even when he had sufficient information to act. This data-gathering had become a form of interference that delayed important decisions.</p>

        <h3>3. Gentle Experimentation</h3>
        <p>Once you've identified interference patterns, experiment with small changes. If you tend to micromanage, try delegating one small task completely. If you avoid difficult conversations, practice having one low-stakes honest discussion.</p>

        <p>The key is starting small. Dramatic attempts to eliminate interference often create more interference through self-judgment and frustration.</p>

        <h3>4. Integration and Reflection</h3>
        <p>Regular reflection helps embed new patterns. What happened when you reduced your usual interference? What did you notice about your team's response? How did it feel to lead with less 'stuff' getting in your way?</p>

        <h2>The Role of Self-Compassion</h2>

        <p>Perhaps the most important aspect of working with the Leadership Equation is approaching your interference with self-compassion rather than self-criticism. Interference patterns developed for good reasons—they were attempts to create safety, success, or belonging in specific contexts.</p>

        <p>When we can appreciate that our interference once served us, we can release it with gratitude rather than fighting against it. This creates the psychological safety necessary for genuine change.</p>

        <h2>The Ripple Effect of Reduced Interference</h2>

        <p>When leaders reduce their interference, the impact extends far beyond individual performance. Teams experience greater psychological safety, innovation increases, and organisational culture shifts toward authenticity and trust. The leader's willingness to acknowledge and address their own 'stuff' gives others permission to do the same.</p>

        <p>I've observed that organisations where leaders practice the Leadership Equation develop cultures of continuous learning rather than defensive perfectionism. People become more willing to acknowledge challenges, seek support, and experiment with new approaches.</p>

        <h2>Leadership Equation in Practice: A Five-Stage Process</h2>

        <p>In my coaching practice, I've found that working with the Leadership Equation typically follows five stages:</p>

        <h3>Stage 1: Awareness (Noticing Patterns)</h3>
        <p>Leaders begin to recognise when they're operating from interference rather than potential. This stage requires developing what I call "neutral observation"—noticing patterns without immediately trying to fix them.</p>

        <h3>Stage 2: Understanding (Exploring Origins)</h3>
        <p>We explore where interference patterns come from, approaching them with curiosity rather than judgment. Understanding the positive intention behind interference creates space for change.</p>

        <h3>Stage 3: Choice (Creating Space)</h3>
        <p>As awareness develops, leaders begin to notice the moment of choice between operating from interference or potential. This is where conscious leadership begins.</p>

        <h3>Stage 4: Experimentation (Small Changes)</h3>
        <p>Leaders begin making small experiments in reducing interference, learning what works in their specific context and relationships.</p>

        <h3>Stage 5: Integration (New Practice)</h3>
        <p>New patterns become embedded through consistent practice and reflection. Leaders develop confidence in their ability to recognise and reduce interference as it arises.</p>

        <h2>When the Leadership Equation Becomes Personal</h2>

        <p>One of the most powerful aspects of the Leadership Equation is recognising that our "stuff" isn't just professional—it's deeply personal. The interference patterns that limit our leadership effectiveness often show up in our relationships, parenting, and community involvement.</p>

        <p>This recognition creates an opportunity for integrated development. As we reduce interference in one domain of our lives, we often find it easier to address similar patterns in other areas. Leadership development becomes personal development, and vice versa.</p>

        <h2>Conclusion: The Ongoing Practice</h2>

        <p>The Leadership Equation offers a refreshing alternative to the endless pursuit of more skills and techniques. By focusing on what we need to remove rather than what we need to add, we create space for our inherent leadership potential to emerge. This approach requires courage—the courage to acknowledge our interference patterns and experiment with new ways of being.</p>

        <p>Leadership development through the Leadership Equation isn't about perfection; it's about progress. It's about creating a sustainable practice of identifying and reducing whatever gets in the way of our authentic leadership expression. In my experience, this creates not only better leaders but more fulfilled human beings.</p>

        <p>The formula is simple: <strong>Performance = Potential - Interference</strong>. The practice is lifelong. The results—for leaders, teams, and organisations—can be transformational.</p>

        <p><em>What's one piece of interference you've noticed in your own leadership? What would become possible if you could reduce it by just 10%?</em></p>
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
