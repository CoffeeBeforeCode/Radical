import Layout, { PageLayout } from '../components/Layout'
import { useState } from 'react'

// Declare EmailJS type for window object
declare global {
  interface Window {
    emailjs: any
  }
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    const formData = new FormData(e.target as HTMLFormElement)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      message: formData.get('message'),
      reply_to: formData.get('email')
    }

    try {
      // Load EmailJS if not already loaded
      if (!window.emailjs) {
        await new Promise((resolve) => {
          const script = document.createElement('script')
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
          script.onload = resolve
          document.head.appendChild(script)
        })
        window.emailjs.init('tG7Y3vGW0jUiMvbFU')
      }

      await window.emailjs.send('service_dh7i0rg', 'template_kvgtgdt', templateParams)
      
      setFormStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout
      title="Contact - Phillip Collins"
      description="Get in touch with Phillip Collins for professional leadership coaching"
      canonical="/contact"
    >
      {/* CONTACT FORM - Navy Background with All Key Information */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl">
            
            {/* Contact Box with All Information */}
            <div className="rounded-lg bg-white p-8 md:p-10">
              
              {/* Key Message Inside Contact Box */}
              <div className="mb-8 text-center">
                <h2 className="mb-4 font-['Waiting_for_the_Sunrise'] text-2xl font-bold text-[#1A365D] md:text-3xl">
                  Ready to explore what&apos;s getting in <span className="text-[#F96E1E]">your</span> way?
                </h2>
                
                <h3 className="mb-6 font-['Waiting_for_the_Sunrise'] text-2xl font-bold text-[#1A365D] md:text-3xl">
                  Let&apos;s begin
                </h3>
                
                <p className="text-sm text-gray-600">
                  Professional coaching partnerships for senior executives navigating complex leadership challenges. 
                  Based in the UK, working globally with leaders who know there&apos;s more.
                </p>
              </div>

              {/* Simple Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6" id="contactForm">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1A365D] mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20 disabled:opacity-50"
                    placeholder="How shall I address you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1A365D] mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-[#1A365D] mb-2">
                    Your current role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20 disabled:opacity-50"
                    placeholder="CEO, Director, VP of..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1A365D] mb-2">
                    What&apos;s on your mind?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#F96E1E] focus:outline-none focus:ring-2 focus:ring-[#F96E1E]/20 disabled:opacity-50"
                    placeholder="What's getting in your way? What patterns are you noticing? What would exploration look like for you?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-[#F96E1E] px-6 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#E55A1A] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F96E1E] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Begin the conversation'}
                  </button>
                </div>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="text-sm text-green-800">
                      <strong>Message sent successfully!</strong> I'll be in touch soon.
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="text-sm text-red-800">
                      <strong>Something went wrong.</strong> Please try again or email me directly at hello@phillipcollins.com
                    </div>
                  </div>
                )}
              </form>

              <div className="pt-6 text-center">
                <p className="text-sm text-gray-500">
                  No templates. No prescriptions.<br />
                  Just space to see what&apos;s really there.
                </p>
              </div>
            </div>
          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
