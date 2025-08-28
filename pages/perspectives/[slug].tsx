import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
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
    featured?: boolean
  }
}

// Custom components for MDX-style functionality
const EQiBlock: React.FC<{ question: string; color?: 'tangerine' | 'navy' | 'sage' }> = ({ 
  question, 
  color = 'tangerine' 
}) => {
  const bgColors = {
    tangerine: 'bg-[#F96E1E]',
    navy: 'bg-[#1A365D]', 
    sage: 'bg-[#7A9A7F]'
  }
  
  return (
    <div className={`aspect-square ${bgColors[color]} p-4 rounded-lg my-6 flex items-center justify-center`}>
      <p className="text-white text-sm font-medium text-center leading-relaxed">
        "{question}"
      </p>
    </div>
  )
}

const KeyPointsBox: React.FC<{ title?: string; children: React.ReactNode }> = ({ 
  title = "Key Insight", 
  children 
}) => {
  return (
    <div className="border-l-4 border-[#F96E1E] bg-[#F8F5EB] p-6 my-8 rounded-r-lg">
      <h4 className="font-['Waiting_for_the_Sunrise'] text-lg text-[#1A365D] mb-3">
        {title}
      </h4>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  )
}

const TestimonialBlock: React.FC<{ quote: string; attribution: string }> = ({ 
  quote, 
  attribution 
}) => {
  return (
    <blockquote className="border-l-4 border-[#D4B86A] bg-white p-6 my-8 rounded-r-lg shadow-sm">
      <p className="text-lg italic text-gray-700 mb-3">
        "{quote}"
      </p>
      <cite className="text-sm font-medium text-[#1A365D] not-italic">
        — {attribution}
      </cite>
    </blockquote>
  )
}

const EquationBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#1A365D] text-white p-8 my-8 rounded-lg text-center">
      <div className="font-['Waiting_for_the_Sunrise'] text-2xl md:text-3xl">
        {children}
      </div>
    </div>
  )
}

// Function to process content and replace component syntax
const processContent = (content: string): string => {
  let processedContent = content

  // Replace EQiBlock syntax
  processedContent = processedContent.replace(
    /<EQiBlock\s+question="([^"]+)"\s*(?:color="([^"]+)")?\s*\/>/g,
    (match, question, color = 'tangerine') => {
      const bgColors = {
        tangerine: 'bg-[#F96E1E]',
        navy: 'bg-[#1A365D]',
        sage: 'bg-[#7A9A7F]'
      }
      return `<div class="aspect-square ${bgColors[color as keyof typeof bgColors]} p-4 rounded-lg my-6 flex items-center justify-center"><p class="text-white text-sm font-medium text-center leading-relaxed">"${question}"</p></div>`
    }
  )

  // Replace KeyPointsBox syntax
  processedContent = processedContent.replace(
    /<KeyPointsBox(?:\s+title="([^"]+)")?\s*>(.*?)<\/KeyPointsBox>/gs,
    (match, title = 'Key Insight', content) => {
      return `<div class="border-l-4 border-[#F96E1E] bg-[#F8F5EB] p-6 my-8 rounded-r-lg"><h4 class="font-['Waiting_for_the_Sunrise'] text-lg text-[#1A365D] mb-3">${title}</h4><div class="text-gray-700 leading-relaxed">${content.trim()}</div></div>`
    }
  )

  // Replace TestimonialBlock syntax
  processedContent = processedContent.replace(
    /<TestimonialBlock\s+quote="([^"]+)"\s+attribution="([^"]+)"\s*\/>/g,
    (match, quote, attribution) => {
      return `<blockquote class="border-l-4 border-[#D4B86A] bg-white p-6 my-8 rounded-r-lg shadow-sm"><p class="text-lg italic text-gray-700 mb-3">"${quote}"</p><cite class="text-sm font-medium text-[#1A365D] not-italic">— ${attribution}</cite></blockquote>`
    }
  )

  // Replace EquationBlock syntax
  processedContent = processedContent.replace(
    /<EquationBlock>(.*?)<\/EquationBlock>/gs,
    (match, content) => {
      return `<div class="bg-[#1A365D] text-white p-8 my-8 rounded-lg text-center"><div class="font-['Waiting_for_the_Sunrise'] text-2xl md:text-3xl">${content.trim()}</div></div>`
    }
  )

  return processedContent
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
            
            <h1 className="font-['Waiting_for_the_Sunrise'] text-3xl leading-tight text-white md:text-5xl">
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
            <div className="prose prose-lg mx-auto max-w-none prose-headings:font-['Waiting_for_the_Sunrise'] prose-headings:text-[#1A365D] prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-p:text-gray-700 prose-strong:text-[#F96E1E] prose-a:text-[#F96E1E] hover:prose-a:text-[#E55A1A]">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-[#F8F5EB] py-16">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-['Waiting_for_the_Sunrise'] text-3xl text-[#1A365D] md:text-4xl">
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
  try {
    const contentDir = path.join(process.cwd(), 'content', 'perspectives')
    const fileNames = await fs.readdir(contentDir)
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'))
    
    const paths = markdownFiles.map(fileName => ({
      params: { slug: fileName.replace(/\.md$/, '') }
    }))

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    // Fallback to current slugs if content directory doesn't exist yet
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
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  try {
    // Try to read from markdown file first
    const contentDir = path.join(process.cwd(), 'content', 'perspectives')
    const filePath = path.join(contentDir, `${slug}.md`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    
    // Parse frontmatter and content
    const { data: frontmatter, content: markdownContent } = matter(fileContents)
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(markdownContent)
    
    // Process custom components
    const finalContent = processContent(processedContent.toString())
    
    const post = {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      readTime: frontmatter.readTime,
      publishDate: frontmatter.publishDate,
      content: finalContent,
      featured: frontmatter.featured || false
    }

    return {
      props: {
        post
      }
    }
  } catch (error) {
    // Fallback to hard-coded content if markdown file doesn't exist
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
            <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">Leadership development traditionally focuses on adding: more skills, more knowledge, more techniques. Yet what if the most impactful approach isn&apos;t about adding, but removing?</p>
            
            <h2>The Leadership Equation</h2>
            <div class="bg-[#1A365D] text-white p-8 my-8 rounded-lg text-center">
              <div class="font-['Waiting_for_the_Sunrise'] text-2xl md:text-3xl">
                Performance = Potential - Interference
              </div>
            </div>
            
            <p>This simple equation challenges conventional thinking about leadership development. Most programmes assume leaders need more: more frameworks, more tools, more strategies. Yet in twenty years of coaching senior executives, I&apos;ve observed that breakthrough performance rarely comes from adding complexity.</p>
            
            <p>Instead, it emerges when leaders identify and reduce the <strong>interference</strong> that prevents their natural potential from flowing freely.</p>
          </div>
        `
      },
      'leadership-as-practice': {
        slug: 'leadership-as-practice',
        title: 'Leadership as a Lifelong Practice: Beyond the Workplace',
        excerpt: 'Most leadership development focuses exclusively on workplace contexts. Yet the leaders I most respect demonstrate a remarkable quality: they bring the same intentionality, presence, and values to every domain of their lives.',
        category: 'Embodied Perception',
        readTime: '10 min read',
        publishDate: '2025-08-18',
        content: `
          <div class="space-y-8">
            <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">Most leadership development focuses exclusively on workplace contexts. Yet the leaders I most respect demonstrate a remarkable quality: they bring the same intentionality, presence, and values to every domain of their lives.</p>
            
            <h2>Beyond the Office</h2>
            <p>Leadership isn&apos;t a role you step into at 9am and step out of at 6pm. It&apos;s a practice—a way of being that extends across all contexts of life.</p>
            
            <p>The executives who create the most sustainable impact understand this intuitively. They lead their families with the same values that guide their teams. They approach community involvement with the same intentionality they bring to strategic decisions.</p>
          </div>
        `
      },
      'values-evolution': {
        slug: 'values-evolution',
        title: 'Navigating Values Evolution Through Leadership Transitions',
        excerpt: 'One of the most overlooked aspects of leadership development is how our core values evolve during significant life transitions.',
        category: 'Values Evolution',
        readTime: '12 min read',
        publishDate: '2025-08-17',
        content: `
          <div class="space-y-8">
            <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">One of the most overlooked aspects of leadership development is how our core values evolve during significant life transitions. We tend to treat values as fixed principles, yet major transitions often catalyse profound shifts in what matters most to us.</p>
            
            <h2>Values in Motion</h2>
            <p>During my own transition from corporate leadership to coaching, I discovered something uncomfortable: the values that had served me brilliantly in one context felt constraining in another.</p>
          </div>
        `
      },
      'internal-narratives': {
        slug: 'internal-narratives',
        title: 'The Power of Internal Narratives in Leadership Identity',
        excerpt: 'Every leader carries an internal narrator—a voice that provides running commentary on their experiences, interprets events, and shapes their responses to challenges.',
        category: 'Cross-Cultural Intelligence',
        readTime: '9 min read',
        publishDate: '2025-08-16',
        content: `
          <div class="space-y-8">
            <p class="text-xl leading-relaxed text-gray-800 border-l-4 border-[#F96E1E] pl-6">Every leader carries an internal narrator—a voice that provides running commentary on their experiences, interprets events, and shapes their responses to challenges. These internal narratives profoundly influence our leadership presence and effectiveness.</p>
            
            <h2>The Voice in Your Head</h2>
            <p>Most of us are so accustomed to our internal narrator that we rarely question its reliability or helpfulness. Yet this voice shapes how we interpret feedback, navigate uncertainty, and respond to setbacks.</p>
          </div>
        `
      }
    }

    const post = blogPosts[slug]
    
    if (!post) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        post
      }
    }
  }
}

export default BlogPost
