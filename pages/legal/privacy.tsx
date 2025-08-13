import Layout, { PageLayout } from '../../components/Layout'

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="How personal data is collected, used, and protected on this website. Your privacy rights and how to exercise them."
      canonical="/legal/privacy"
    >
      {/* Hero Section */}
      <section className="w-full bg-[#1A365D] py-16 md:py-24">
        <PageLayout>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl font-['Waiting_for_the_Sunrise']">
              Privacy Policy
            </h1>
            <p className="text-xl text-[#F8F5EB] leading-relaxed">
              How your personal data is collected, used, and protected. Your privacy rights and how to exercise them.
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
            
            {/* Data Controller */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Who is responsible for your <span className="text-[#F96E1E]">data</span>?
              </h2>
              <div className="rounded-lg bg-[#F8F5EB] p-6">
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong>Phillip Collins</strong> is the data controller for personal data collected through this website 
                    and related coaching services.
                  </p>
                  <div className="text-base">
                    <p><strong>Contact details:</strong></p>
                    <ul className="mt-2 space-y-1">
                      <li><strong>Email:</strong> datacontroller@phillipcollins.com</li>
                      <li><strong>Website:</strong> www.phillipcollins.com/contact</li>
                      <li><strong>Business address:</strong> United Kingdom</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* What Data is Collected */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                What personal data is <span className="text-[#F96E1E]">collected</span>?
              </h2>
              
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Information You Provide */}
                  <div className="rounded-lg bg-white border border-[#1A365D]/10 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                      Information You Provide
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>Personal data is collected when you:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Complete contact forms</li>
                        <li>Subscribe to insights or updates</li>
                        <li>Request coaching consultations</li>
                        <li>Send enquiries via email</li>
                        <li>Book meetings or calls</li>
                      </ul>
                      <div className="mt-4 text-sm">
                        <strong>This may include:</strong> Name, email address, telephone number, 
                        company name, job title, coaching requirements, and any information shared in enquiries.
                      </div>
                    </div>
                  </div>

                  {/* Automatically Collected */}
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                      Automatically Collected
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <p>Technical data is automatically collected when you visit the website:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring websites</li>
                      </ul>
                      <div className="mt-4 text-sm">
                        <strong>Purpose:</strong> Website analytics, security, and performance optimisation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How Data is Used */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                How is your data <span className="text-[#F96E1E]">used</span>?
              </h2>
              
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                  {/* Essential Communications */}
                  <div className="rounded-lg bg-[#7E2D40] p-6 text-white">
                    <h3 className="mb-4 text-lg font-semibold text-[#F96E1E]">
                      Essential Communications
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Legal basis:</strong> Contract & Legitimate Interest</p>
                      <ul className="list-disc pl-5 space-y-1 mt-3">
                        <li>Responding to enquiries</li>
                        <li>Arranging consultations</li>
                        <li>Providing coaching services</li>
                        <li>Processing bookings</li>
                      </ul>
                    </div>
                  </div>

                  {/* Service Improvement */}
                  <div className="rounded-lg bg-white border border-[#1A365D]/10 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-[#1A365D]">
                      Service Improvement
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Legal basis:</strong> Legitimate Interest</p>
                      <ul className="list-disc pl-5 space-y-1 mt-3">
                        <li>Website analytics</li>
                        <li>Content optimisation</li>
                        <li>Technical performance</li>
                        <li>User experience enhancement</li>
                      </ul>
                    </div>
                  </div>

                  {/* Marketing Communications */}
                  <div className="rounded-lg bg-[#F8F5EB] p-6">
                    <h3 className="mb-4 text-lg font-semibold text-[#1A365D]">
                      Marketing Communications
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Legal basis:</strong> Consent</p>
                      <ul className="list-disc pl-5 space-y-1 mt-3">
                        <li>Insights and articles</li>
                        <li>Industry updates</li>
                        <li>Event invitations</li>
                        <li>Service announcements</li>
                      </ul>
                      <p className="mt-3 text-xs italic">Opt-out available at any time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                When is data <span className="text-[#F96E1E]">shared</span>?
              </h2>
              
              <div className="rounded-lg bg-[#F8F5EB] p-6">
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg font-medium text-[#1A365D]">
                    Personal data is not sold, rented, or shared with third parties for their marketing purposes.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#1A365D] mb-2">Limited sharing occurs with:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Service providers:</strong> Website hosting, email delivery, analytics tools, 
                          and scheduling platforms (under strict data processing agreements)
                        </li>
                        <li>
                          <strong>Legal requirements:</strong> When required by law, court order, 
                          or regulatory authority
                        </li>
                        <li>
                          <strong>Business protection:</strong> To protect rights, property, 
                          or safety (in exceptional circumstances)
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded border border-[#1A365D]/10">
                      <h4 className="font-semibold text-[#1A365D] mb-2">Third-party services include:</h4>
                      <div className="grid gap-2 md:grid-cols-2 text-sm">
                        <div>• Google Analytics (website analytics)</div>
                        <div>• Email delivery platforms</div>
                        <div>• Website hosting providers</div>
                        <div>• Calendar and scheduling tools</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Storage */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                How is your data <span className="text-[#F96E1E]">stored</span>?
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white border border-[#1A365D]/10 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                    Security Measures
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Appropriate technical and organisational measures protect your personal data:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure hosting with reputable providers</li>
                      <li>Regular security updates and monitoring</li>
                      <li>Access controls and authentication</li>
                      <li>Regular backups and disaster recovery</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-[#F8F5EB] p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                    Retention Periods
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>Personal data is kept only as long as necessary:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li><strong>Enquiries:</strong> 2 years from last contact</li>
                      <li><strong>Active clients:</strong> Duration of relationship + 7 years</li>
                      <li><strong>Marketing consent:</strong> Until withdrawn</li>
                      <li><strong>Website analytics:</strong> 26 months maximum</li>
                      <li><strong>Legal compliance:</strong> As required by law</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Your <span className="text-[#F96E1E]">privacy rights</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Under UK data protection law, you have important rights regarding your personal data:
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-[#F8F5EB] p-4">
                    <h4 className="font-semibold text-[#1A365D] mb-2">Access</h4>
                    <p className="text-sm text-gray-700">Request a copy of personal data held about you</p>
                  </div>
                  
                  <div className="rounded-lg bg-white border border-[#1A365D]/10 p-4">
                    <h4 className="font-semibold text-[#1A365D] mb-2">Rectification</h4>
                    <p className="text-sm text-gray-700">Correct inaccurate or incomplete information</p>
                  </div>
                  
                  <div className="rounded-lg bg-[#F8F5EB] p-4">
                    <h4 className="font-semibold text-[#1A365D] mb-2">Erasure</h4>
                    <p className="text-sm text-gray-700">Request deletion of personal data in certain circumstances</p>
                  </div>
                  
                  <div className="rounded-lg bg-white border border-[#1A365D]/10 p-4">
                    <h4 className="font-semibold text-[#1A365D] mb-2">Restriction</h4>
                    <p className="text-sm text-gray-700">Limit processing of personal data in specific situations</p>
                  </div>
                  
                  <div className="rounded-lg bg-[#F8F5EB] p-4">
                    <h4 className="font-semibold text-[#1A365D] mb-2">Portability</h4>
                    <p className="text-sm text-gray-700">Receive personal data in a structured, machine-readable format</p>
                  </div>
                  
                  <div className="rounded-lg bg-white border border-[#1A365D]/10 p-4">
                    <h4 className="font-semibold text-[#1A365D] mb-2">Objection</h4>
                    <p className="text-sm text-gray-700">Object to processing based on legitimate interests</p>
                  </div>
                </div>

                <div className="rounded-lg bg-[#7E2D40] p-6 text-white">
                  <h3 className="mb-4 text-lg font-semibold">
                    Exercising Your Rights
                  </h3>
                  <div className="space-y-3">
                    <p>To exercise any of these rights, contact us using the details at the top of this policy.</p>
                    <p className="text-sm">
                      <strong>Response time:</strong> Requests will be responded to within one month. 
                      Identity verification may be required for security purposes.
                    </p>
                    <p className="text-sm">
                      <strong>No cost:</strong> Exercising your rights is generally free, 
                      unless requests are manifestly unfounded or excessive.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                International <span className="text-[#F96E1E]">data transfers</span>
              </h2>
              
              <div className="rounded-lg bg-[#F8F5EB] p-6">
                <div className="space-y-4 text-gray-700">
                  <p>
                    Some service providers may process personal data outside the UK. 
                    When this occurs, appropriate safeguards ensure your data remains protected:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Adequacy decisions:</strong> Transfers to countries recognised 
                      by the UK as providing adequate protection
                    </li>
                    <li>
                      <strong>Standard contractual clauses:</strong> Legal contracts ensuring 
                      equivalent protection standards
                    </li>
                    <li>
                      <strong>Certification schemes:</strong> Providers certified under 
                      recognised data protection frameworks
                    </li>
                  </ul>
                  
                  <p className="text-sm italic">
                    Details of specific safeguards can be requested using the contact information above.
                  </p>
                </div>
              </div>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#1A365D]">
                Making a <span className="text-[#F96E1E]">complaint</span>
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white border border-[#1A365D]/10 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                    Contact Us First
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      If you have concerns about how your personal data is handled, 
                      please contact us directly. Most issues can be resolved quickly.
                    </p>
                    <div className="text-sm">
                      <p><strong>Email:</strong> hello@phillip-collins.com</p>
                      <p><strong>Response time:</strong> Within 48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#F8F5EB] p-6">
                  <h3 className="mb-4 text-xl font-semibold text-[#1A365D]">
                    Regulatory Authority
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      You have the right to complain to the Information Commissioner&apos;s Office (ICO) 
                      if you remain unsatisfied.
                    </p>
                    <div className="text-sm">
                      <p><strong>Website:</strong> www.ico.org.uk</p>
                      <p><strong>Telephone:</strong> 0303 123 1113</p>
                      <p><strong>Post:</strong> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates and Contact */}
            <div className="rounded-lg bg-[#1A365D] p-8 text-white">
              <h2 className="mb-6 text-3xl font-bold">
                Policy <span className="text-[#F96E1E]">updates</span> and contact
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#F96E1E]">
                    Changes to This Policy
                  </h3>
                  <p className="text-sm text-[#F8F5EB] mb-4">
                    This privacy policy may be updated periodically to reflect changes in data processing practices, 
                    legal requirements, or service improvements. Significant changes will be communicated through 
                    appropriate channels.
                  </p>
                  <p className="text-xs text-[#F8F5EB]/80">
                    The current version is always available at this web address with the date of last revision clearly marked.
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#F96E1E]">
                    Get in Touch
                  </h3>
                  <p className="text-sm text-[#F8F5EB] mb-4">
                    Questions about this privacy policy or data processing practices 
                    can be directed through the contact details below.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> hello@phillip-collins.com</p>
                    <p><strong>Website:</strong> www.phillip-collins.com/contact</p>
                    <p><strong>Response time:</strong> Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </PageLayout>
      </section>
    </Layout>
  )
}
