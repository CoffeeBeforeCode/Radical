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
  // For now, we&apos;ll define the available slugs manually
  // This matches the slugs in your index.tsx file
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

  // This is where we&apos;ll fetch the actual blog content
  // For now, we&apos;ll return a placeholder
  const postData = {
    slug,
    title: 'Blog Post Title',
    excerpt: 'This is a placeholder excerpt.',
    category: 'Leadership Equation',
    readTime: '8 min read',
    publishDate: '2025-01-15',
    content: '<h2>Coming Soon</h2><p>This blog post content will be added next.</p>'
  }

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
