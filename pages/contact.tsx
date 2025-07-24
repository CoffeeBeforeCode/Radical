import Layout, { Block, PageLayout } from '../components/Layout'

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Connect with Phillip Collins - no funnel, no pressure, just a human conversation about leadership."
      canonical="/contact"
    >
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1A365D] mb-8">
              Ready to explore what's getting in your <span className="font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">way</span>?
            </h1>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-8">
              You won't be added to a funnel.<br />
              This is a human conversation.
            </p>
            <p className="text-base text-[#4A4A4A]">
              Contact form and conversation details coming soon.
            </p>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
