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
                  day: 'numeric',
                  month: 'long',
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
                <span class="text-sm text-gray-600">[Image placeholder: Speech bubble representing internal thoughts]</span>
              </div>
            </div>
          </div>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2>The Power of Reduction</h2>
          
          <p>This approach transforms how we think about leadership development. Rather than constantly pushing for more performance through additional pressure or techniques, we create space for inherent excellence to emerge by identifying and reducing what&apos;s getting in the way.</p>

          <p>This perspective speaks to what many senior leaders experience privately: carrying the quiet loneliness at the top whilst projecting confidence in public forums. The Leadership Equation offers a framework for addressing this gap between external perception and internal experience.</p>

          <h2>From Theory to Practice: A Hypothetical Example</h2>

          <p>Let&apos;s examine how the Leadership Equation might play out in actual leadership contexts. Consider a leader who, despite exceptional strategic thinking and technical expertise, finds their team experiencing burnout while key projects fall behind.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">Through coaching work, such a leader might discover that their fear of being seen as incompetent is driving them to micromanage their team and take on excessive work themselves.</p>
          </div>

          <p>This fear (their &lsquo;interference&rsquo;) could be preventing their natural leadership potential from emerging. Once they recognise this pattern and develop strategies to reduce the interference, their team&apos;s performance might improve dramatically, not because they learned new skills, but because they removed what was getting in their way.</p>

          <div class="my-8 h-px bg-gradient-to-r from-transparent via-[#D4B86A] to-transparent"></div>

          <h2>Common Forms of Leadership Interference</h2>
          
          <p>In my coaching practice, I&apos;ve observed several recurring patterns of interference that limit leadership effectiveness:</p>

          <div class="my-8 grid gap-6 md:grid-cols-2">
            <div class="rounded-lg bg-[#F8F5EB] p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">The Perfectionist Trap</h3>
              <p class="text-sm text-gray-700">Leaders who demand flawless execution from themselves and others, creating paralysis and team anxiety rather than excellence.</p>
            </div>
            
            <div class="rounded-lg bg-[#F8F5EB] p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">The Control Complex</h3>
              <p class="text-sm text-gray-700">Leaders who believe they must manage every detail personally, preventing team growth and creating bottlenecks.</p>
            </div>
            
            <div class="rounded-lg bg-[#F8F5EB] p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">The Imposter Narrative</h3>
              <p class="text-sm text-gray-700">High-achieving leaders who secretly fear being exposed as frauds, leading to overcompensation and inauthentic behaviour.</p>
            </div>
            
            <div class="rounded-lg bg-[#F8F5EB] p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3">The People-Pleasing Pattern</h3>
              <p class="text-sm text-gray-700">Executives who struggle to make difficult decisions because they fear disappointing stakeholders.</p>
            </div>
          </div>

          <h2>Practical Approaches to Reducing Interference</h2>

          <div class="my-8 rounded-lg bg-[#F8F5EB] p-6 border-l-4 border-[#D4B86A]">
            <h3 class="text-lg font-semibold text-[#1A365D] mb-3">Key Takeaway</h3>
            <p class="text-gray-700">The Leadership Equation isn&apos;t just a philosophical framework—it provides practical pathways for development through four key stages.</p>
          </div>

          <p>The Leadership Equation provides practical pathways for development:</p>

          <div class="my-8 space-y-6">
            <div class="border border-[#D4B86A] rounded-lg p-6">
              <h3 class="text-[#1A365D] font-semibold mb-3 flex items-center">
                <span class="inline-block w-8 h-8 bg-[#F96E1E] text-white rounded-full text-sm font-bold flex items-center justify-center mr-3">1</span>
                Interference Identification
              </h3>
              <p class="text-gray-700">Begin by observing your patterns without judgment. What situations consistently trigger stress or suboptimal performance? What stories do you tell yourself during challenging moments?</p>
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

          <p>Perhaps the most important aspect of working with the Leadership Equation is approaching your interference with self-compassion rather than self-criticism. Interference patterns developed for good reasons—they were attempts to create safety, success, or belonging in specific contexts.</p>

          <div class="my-6 border-l-4 border-[#F96E1E] pl-6 py-2">
            <p class="text-lg text-[#1A365D] font-medium">When we can appreciate that our interference once served us, we can release it with gratitude rather than fighting against it.</p>
          </div>

          <p>This creates the psychological safety necessary for genuine change.</p>

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
