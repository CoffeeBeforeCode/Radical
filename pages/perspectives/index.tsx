import { useState } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout, { PageLayout } from '../../components/Layout'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  featured: boolean
}

interface PerspectivesIndexProps {
  posts: BlogPost[]
}

const PerspectivesIndex: React.FC<PerspectivesIndexProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // Extract unique categories from posts
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))]
  
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)
    
  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <Layout
      title="Perspectives"
      description="Explore leadership insights, frameworks, and perspectives from global leadership coach Phillip Collins. Discover the Leadership Equation, values evolution, and embodied perception in leadership development."
      canonical="/perspectives"
    >
      {/* Hero Section */}
      <section className="bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h1 className="font-['Waiting_for_the_Sunrise'] text-4xl leading-tight text-white md:text-6xl">
              Perspectives
            </h1>
            <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
              Insights from the practice of leadership coaching
            </p>
            <div className="mx-auto h-1 w-24 bg-[#F96E1E]" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='96' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2c8-1 16 1 24 0s16-1 24 0 16 1 24 0 16-1 24 0' stroke='%23F96E1E' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '96px 4px',
                backgroundRepeat: 'repeat-x'
              }}
            />
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80">
              These perspectives emerge from real coaching conversations, client breakthroughs, 
              and the ongoing practice of leadership development across cultures and contexts.
            </p>
          </div>
        </PageLayout>
      </section>

      {/* Category Filter */}
      <section className="bg-[#F8F5EB] py-8">
        <PageLayout>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#F96E1E] text-white'
                    : 'bg-white text-[#1A365D] hover:bg-[#1A365D] hover:text-white'
                }`}
              >
                {category === 'all' ? 'All Perspectives' : category}
              </button>
            ))}
          </div>
        </PageLayout>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && featuredPosts.length > 0 && (
        <section className="py-16">
          <PageLayout>
            <h2 className="mb-12 text-center font-['Waiting_for_the_Sunrise'] text-3xl text-[#1A365D] md:text-4xl">
              Featured Perspectives
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/perspectives/${post.slug}`}>
                    <div className="overflow-hidden rounded-lg bg-white border-2 border-[#F96E1E] shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <div className="p-8">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block rounded-full bg-[#F96E1E] px-3 py-1 text-sm font-medium text-white">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        
                        <h3 className="mb-4 font-['Waiting_for_the_Sunrise'] text-2xl leading-tight text-[#1A365D] transition-colors duration-300 group-hover:text-[#F96E1E] md:text-3xl">
                          {post.title}
                        </h3>
                        
                        <p className="mb-6 leading-relaxed text-gray-700">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <time className="text-sm text-gray-500">
                            {new Date(post.publishDate).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long', 
                              year: 'numeric'
                            })}
                          </time>
                          <span className="font-medium text-[#F96E1E] group-hover:underline">
                            Read more →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </PageLayout>
        </section>
      )}

      {/* All Posts Grid */}
      <section className={`py-16 ${selectedCategory === 'all' ? 'bg-[#F8F5EB]' : ''}`}>
        <PageLayout>          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(selectedCategory === 'all' ? regularPosts : filteredPosts).map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/perspectives/${post.slug}`}>
                  <div className="flex h-full flex-col overflow-hidden rounded-lg bg-[#1A365D] shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <div className="flex h-full flex-col p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="inline-block rounded-full bg-[#D4B86A] px-3 py-1 text-sm font-medium text-[#1A365D]">
                          {post.category}
                        </span>
                        <span className="text-sm text-white/60">{post.readTime}</span>
                      </div>
                      
                      <h3 className="mb-3 font-['Waiting_for_the_Sunrise'] text-xl leading-tight text-[#F96E1E] transition-colors duration-300 group-hover:text-white md:text-2xl">
                        {post.title}
                      </h3>
                      
                      <p className="mb-4 grow leading-relaxed text-white/80">
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <time className="text-sm text-white/60">
                          {new Date(post.publishDate).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </time>
                        <span className="font-medium text-[#F96E1E] group-hover:text-white group-hover:underline">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </PageLayout>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1A365D] py-16">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl leading-tight text-white md:text-4xl">
              Ready to explore your leadership development?
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
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

export const getStaticProps: GetStaticProps = async () => {
  const contentDir = path.join(process.cwd(), 'content', 'perspectives')
  
  try {
    const fileNames = await fs.readdir(contentDir)
    const markdownFiles = fileNames.filter(name => name.endsWith('.md'))
    
    const posts = await Promise.all(
      markdownFiles.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const filePath = path.join(contentDir, fileName)
        const fileContents = await fs.readFile(filePath, 'utf8')
        const { data: frontmatter } = matter(fileContents)
        
        return {
          slug,
          title: frontmatter.title,
          excerpt: frontmatter.excerpt,
          category: frontmatter.category,
          readTime: frontmatter.readTime,
          publishDate: frontmatter.publishDate,
          featured: frontmatter.featured || false
        }
      })
    )
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    
    return {
      props: {
        posts
      }
    }
  } catch (error) {
    // If content directory doesn't exist yet, return empty array
    return {
      props: {
        posts: []
      }
    }
  }
}

export default PerspectivesIndex
