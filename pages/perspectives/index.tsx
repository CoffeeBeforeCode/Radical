import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

  // Blog posts come from props now
  const blogPosts = posts

  const categories = ['all', 'Leadership Equation', 'Embodied Perception', 'Cross-Cultural Intelligence', 'Values Evolution']

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      <Head>
        <title>Perspectives | Phillip Collins - Global Leadership Coach</title>
        <meta 
          name="description" 
          content="Explore leadership insights, frameworks, and perspectives from global leadership coach Phillip Collins. Discover the Leadership Equation, values evolution, and embodied perception in leadership development." 
        />
        <meta name="keywords" content="leadership coaching, executive coaching, leadership development, emotional intelligence, global leadership" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#1A365D] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-[#F8F5EB] py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          </div>
        </section>

        {/* Featured Posts */}
        {selectedCategory === 'all' && featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-12 text-center font-['Waiting_for_the_Sunrise'] text-3xl text-[#1A365D] md:text-4xl">
                Featured Perspectives
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {featuredPosts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/perspectives/${post.slug}`}>
                      <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
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
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className={`py-16 ${selectedCategory === 'all' ? 'bg-[#F8F5EB]' : ''}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {selectedCategory === 'all' && (
              <h2 className="mb-12 text-center font-['Waiting_for_the_Sunrise'] text-3xl text-[#1A365D] md:text-4xl">
                All Perspectives
              </h2>
            )}
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(selectedCategory === 'all' ? regularPosts : filteredPosts).map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/perspectives/${post.slug}`}>
                    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                      <div className="flex h-full flex-col p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="inline-block rounded-full bg-[#D4B86A] px-3 py-1 text-sm font-medium text-[#1A365D]">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        
                        <h3 className="mb-3 font-['Waiting_for_the_Sunrise'] text-xl leading-tight text-[#1A365D] transition-colors duration-300 group-hover:text-[#F96E1E] md:text-2xl">
                          {post.title}
                        </h3>
                        
                        <p className="mb-4 flex-grow leading-relaxed text-gray-600">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <time className="text-sm text-gray-500">
                            {new Date(post.publishDate).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </time>
                          <span className="font-medium text-[#F96E1E] group-hover:underline">
                            Read →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#1A365D] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <h2 className="font-['Waiting_for_the_Sunrise'] text-3xl leading-tight text-white md:text-4xl">
                Ready to explore your leadership development?
              </h2>
              <p className="text-lg leading-relaxed text-white/80">
                These perspectives emerge from real coaching conversations. 
                Let's explore what's getting in your way.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded bg-[#F96E1E] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E55A1A] focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2"
              >
                Start the conversation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// File-based blog post scanning
export const getStaticProps: GetStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), 'pages/perspectives/posts')
  
  // Check if posts directory exists, if not create empty array
  let posts: BlogPost[] = []
  
  try {
    const filenames = fs.readdirSync(postsDirectory)
    const markdownFiles = filenames.filter(name => name.endsWith('.md'))
    
    posts = markdownFiles.map(filename => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug: filename.replace('.md', ''),
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        category: data.category || 'Uncategorized',
        readTime: data.readTime || '5 min read',
        publishDate: data.publishDate || new Date().toISOString().split('T')[0],
        featured: data.featured || false
      }
    })
    
    // Sort by publish date (newest first)
    posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  } catch (error) {
    // Posts directory doesn't exist yet, return empty array
    console.log('Posts directory not found, returning empty array')
  }
  
  return {
    props: {
      posts
    }
  }
}

export default PerspectivesIndex
