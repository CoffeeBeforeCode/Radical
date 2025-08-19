import { useState } from 'react'
import Link from 'next/link'
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

const PerspectivesIndex: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // Blog posts data - add new posts here when you create them
  const blogPosts: BlogPost[] = [
    {
      slug: 'leadership-equation',
      title: 'The Leadership Equation: Unlocking Performance by Reducing Interference',
      excerpt: 'Leadership development traditionally focuses on adding more skills, more knowledge, more techniques. Yet what if the most impactful approach isn&apos;t about adding, but removing? The Leadership Equation offers a different perspective: Performance Equals Potential minus Interference.',
      category: 'Leadership Equation',
      readTime: '8 min read',
      publishDate: '2025-08-19',
      featured: true
    },
    {
      slug: 'leadership-as-practice',
      title: 'Leadership as a Lifelong Practice: Beyond the Workplace',
      excerpt: 'Most leadership development focuses exclusively on workplace contexts. Yet the leaders I most respect demonstrate a remarkable quality: they bring the same intentionality, presence, and values to every domain of their lives.',
      category: 'Embodied Perception',
      readTime: '10 min read',
      publishDate: '2025-08-18',
      featured: true
    },
    {
      slug: 'values-evolution',
      title: 'Navigating Values Evolution Through Leadership Transitions',
      excerpt: 'One of the most overlooked aspects of leadership development is how our core values evolve during significant life transitions. We tend to treat values as fixed principles, yet major transitions often catalyse profound shifts in what matters most to us.',
      category: 'Values Evolution',
      readTime: '12 min read',
      publishDate: '2025-08-17',
      featured: false
    },
    {
      slug: 'internal-narratives',
      title: 'The Power of Internal Narratives in Leadership Identity',
      excerpt: 'Every leader carries an internal narrator—a voice that provides running commentary on their experiences, interprets events, and shapes their responses to challenges. These internal narratives profoundly influence our leadership presence and effectiveness.',
      category: 'Cross-Cultural Intelligence',
      readTime: '9 min read',
      publishDate: '2025-08-16',
      featured: false
    }
  ]
  
  const categories = ['all', 'Leadership Equation', 'Embodied Perception', 'Cross-Cultural Intelligence', 'Values Evolution']
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)
    
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
          </PageLayout>
        </section>
      )}

      {/* All Posts Grid */}
      <section className={`py-16 ${selectedCategory === 'all' ? 'bg-[#F8F5EB]' : ''}`}>
        <PageLayout>
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

export default PerspectivesIndex
