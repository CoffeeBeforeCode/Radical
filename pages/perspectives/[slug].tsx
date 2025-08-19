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
        <p>Leadership development traditionally focuses on adding: more skills, more knowledge, more techniques. Yet what if the most impactful approach isn&apos;t about adding, but removing?</p>
        
        <p>The Leadership Equation offers a different perspective: <strong>Performance Equals Potential minus Interference (PE = PO - I)</strong>. This deceptively simple formula suggests that most leaders already possess remarkable potential.</p>
        
        <p>What limits their performance isn&apos;t a lack of capability, but the presence of interference—or as I often call it in my coaching practice, their &ldquo;stuff.&rdquo;</p>
        
        <h2>The Power of Reduction</h2>
        
        <p>This approach transforms how we think about leadership development. Rather than constantly pushing for more performance through additional pressure or techniques, we create space for inherent excellence to emerge by identifying and reducing what&apos;s getting in the way.</p>
        
        <p>As one regional director confided, &lsquo;Everyone thinks I&apos;ve got this sorted—but I&apos;m not sure I do.&rsquo; The Leadership Equation offers a framework for addressing this gap between external perception and internal experience.</p>
        
        <h2>Common Forms of Interference</h2>
        
        <p>In my coaching practice, I&apos;ve observed several recurring patterns:</p>
        
        <ul>
          <li><strong>The Perfectionist Trap:</strong> Demanding flawless execution, creating paralysis rather than excellence</li>
          <li><strong>The Control Complex:</strong> Believing you must manage every detail personally</li>
          <li><strong>The Imposter Narrative:</strong> Secretly fearing being exposed as inadequate</li>
          <li><strong>The People-Pleasing Pattern:</strong> Struggling with difficult decisions to avoid disappointment</li>
        </ul>
        
        <h2>Practical Application</h2>
        
        <p>The Leadership Equation provides practical pathways for development:</p>
        
        <ol>
          <li><strong>Interference Identification:</strong> Observe your patterns without judgment</li>
          <li><strong>Pattern Recognition:</strong> Notice recurring themes in your behaviour</li>
          <li><strong>Gentle Experimentation:</strong> Make small changes to reduce interference</li>
          <li><strong>Integration and Reflection:</strong> Embed new patterns through regular reflection</li>
        </ol>
        
        <p>The formula is simple: <strong>Performance = Potential - Interference</strong>. The practice is lifelong. The results can be transformational.</p>
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
