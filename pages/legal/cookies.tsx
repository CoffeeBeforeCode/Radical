import Layout, { PageLayout } from '../../components/Layout'

export default function CookiesPolicy() {
  return (
    <Layout
      title="Cookie Policy"
      description="How Phillip Collins uses cookies on this website to improve your experience and understand how you interact with our content."
      canonical="/legal/cookies"
    >
      {/* Hero Section */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl font-['Waiting_for_the_Sunrise']">
              Cookie Policy
            </h1>
            <p className="text-xl text-[#F8F5EB] leading-relaxed">
              How we use cookies to improve your experience and understand how you interact with our content.
            </p>
            <div className="mt-8 text-sm text-[#F8F5EB]/80">
              Last updated: August 2025
            </div>
          </div>
        </PageLayout>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                What are <span className="text-[#F96E1E]">cookies</span>?
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p>
                  At Phillip Collins Leadership Coaching, we use cookies to enhance your browsing experience, 
                  understand how you interact with our content, and improve our services.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Types of <span className="text-[#F96E1E]">cookies</span> we use
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                {/* Essential Cookies */}
                <div className="rounded-lg bg-[#F8F5EB] p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                    Essential Cookies
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      These cookies are necessary for the website to function properly. 
                      They enable basic functions like page navigation and access to secure areas.
                    </p>
                    <div className="text-sm">
                      <strong>Examples:</strong>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>Session management</li>
                        <li>Security tokens</li>
                        <li>Cookie consent preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="rounded-lg bg-white border border-[#1A365D]/10 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                    Analytics Cookies
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      These cookies help us understand how visitors interact with our website 
                      by collecting and reporting information anonymously.
                    </p>
                    <div className="text-sm">
                      <strong>Examples:</strong>
                      <ul className="mt-2 list-disc pl-5 space-y-1">
                        <li>Page views and session duration</li>
                        <li>Traffic sources</li>
                        <li>Content engagement metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specific Cookies */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Specific cookies on <span className="text-[#F96E1E]">this website</span>
              </h2>
              
              <div className="overflow-x-auto rounded-lg border border-[#1A365D]/10">
                <table className="w-full">
                  <thead className="bg-[#1A365D] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Cookie Name</th>
                      <th className="px-6 py-4 text-left">Purpose</th>
                      <th className="px-6 py-4 text-left">Duration</th>
                      <th className="px-6 py-4 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A365D]/10">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">pc-cookie-consent</td>
                      <td className="px-6 py-4">Stores your cookie preferences</td>
                      <td className="px-6 py-4">1 year</td>
                      <td className="px-6 py-4">Essential</td>
                    </tr>
                    <tr className="bg-[#F8F5EB]">
                      <td className="px-6 py-4 font-medium">_ga</td>
                      <td className="px-6 py-4">Google Analytics - distinguishes unique users</td>
                      <td className="px-6 py-4">2 years</td>
                      <td className="px-6 py-4">Analytics</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">_ga_*</td>
                      <td className="px-6 py-4">Google Analytics - session data</td>
                      <td className="px-6 py-4">2 years</td>
                      <td className="px-6 py-4">Analytics</td>
                    </tr>
                    <tr className="bg-[#F8F5EB]">
                      <td className="px-6 py-4 font-medium">_gid</td>
                      <td className="px-6 py-4">Google Analytics - daily activity tracking</td>
                      <td className="px-6 py-4">24 hours</td>
                      <td className="px-6 py-4">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Managing your <span className="text-[#F96E1E]">cookie preferences</span>
              </h2>
              
              <div className="space-y-6">
                <div className="rounded-lg bg-[#7E2D40] p-6 text-white">
                  <h3 className="mb-4 text-xl font-semibold">
                    On this website
                  </h3>
                  <p className="mb-4">
                    You can change your cookie preferences at any time by clicking the button below. 
                    This will re-display the cookie consent banner, allowing you to update your choices.
                  </p>
                  <button 
                    className="rounded-lg bg-[#F96E1E] px-6 py-3 font-medium text-white hover:bg-[#E55A0F] transition-colors"
                    onClick={() => {
                      localStorage.removeItem('pc-cookie-consent');
                      window.location.reload();
                    }}
                  >
                    Change Cookie Preferences
                  </button>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                      Browser Settings
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        You can also control cookies through your browser settings. 
                        Most browsers allow you to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Block all cookies</li>
                        <li>Block third-party cookies</li>
                        <li>Delete cookies when you close your browser</li>
                        <li>Get notified when cookies are set</li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg bg-white border border-[#1A365D]/10 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                      Third-Party Tools
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        You can opt out of Google Analytics tracking by using:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <a 
                            href="https://tools.google.com/dlpage/gaoptout" 
                            className="text-[#F96E1E] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Google Analytics Opt-out Browser Add-on
                          </a>
                        </li>
                        <li>Browser plugins that block tracking</li>
                        <li>Privacy-focused browsers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact of Blocking */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Impact of <span className="text-[#F96E1E]">blocking cookies</span>
              </h2>
              
              <div className="rounded-lg bg-[#F8F5EB] p-6">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Essential cookies:</strong> Blocking these may prevent the website from working properly. 
                    You may experience issues with contact forms, navigation, or security features.
                  </p>
                  <p>
                    <strong>Analytics cookies:</strong> Blocking these will not affect your browsing experience, 
                    but it will prevent us from understanding how visitors use our site and improving our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Basis */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Legal basis for <span className="text-[#F96E1E]">cookie use</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Under UK data protection law (UK GDPR) and the Privacy and Electronic Communications Regulations (PECR), 
                  we need your consent to use non-essential cookies.
                </p>
                <p>
                  Essential cookies are necessary for the legitimate operation of our website and do not require consent. 
                  All other cookies require your explicit consent, which we obtain through our cookie banner.
                </p>
              </div>
            </div>

            {/* Contact and Updates */}
            <div className="rounded-lg bg-[#1A365D] p-8 text-white">
              <h2 className="mb-6 text-3xl font-bold">
                Questions about <span className="text-[#F96E1E]">cookies</span>?
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-[#F8F5EB]">
                    If you have any questions about our use of cookies or this policy, 
                    please don&apos;t hesitate to contact us.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> hello@phillip-collins.com</p>
                    <p><strong>Website:</strong> www.phillip-collins.com/contact</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#F96E1E]">
                    Policy Updates
                  </h3>
                  <p className="text-sm text-[#F8F5EB]">
                    We may update this cookie policy from time to time to reflect changes in technology, 
                    legislation, or our business practices. The current version is always available at 
                    this web address with the date of last revision clearly marked.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
