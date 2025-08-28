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
  const contentDir = path.join(process.cwd(), 'content', 'perspectives')
  
  try {
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
    // If content directory doesn't exist yet, return empty paths
    return {
      paths: [],
      fallback: false
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const contentDir = path.join(process.cwd(), 'content', 'perspectives')
  const filePath = path.join(contentDir, `${slug}.md`)
  
  try {
    const fileContents = await fs.readFile(filePath, 'utf8')
    
    // Parse frontmatter and content
    const { data: frontmatter, content: markdownContent } = matter(fileContents)
    
    // Process markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(markdownContent)
    
    const post = {
      slug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      category: frontmatter.category,
      readTime: frontmatter.readTime,
      publishDate: frontmatter.publishDate,
      content: processedContent.toString()
    }

    return {
      props: {
        post
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}

export default BlogPost
