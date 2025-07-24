import Layout, { Block, PageLayout } from '../components/Layout'

export default function ThisIsPersonal() {
  return (
    <Layout
      title="This is Personal"
      description="The personal journey and philosophy behind Phillip Collins's leadership coaching approach."
      canonical="/this-is-personal"
    >
      <Block background="white" spacing="spacious">
        <PageLayout>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1A365D] mb-8">
              This is <span className="font-['Waiting_for_the_Sunrise'] text-[#F96E1E]">personal</span>.
            </h1>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Coming soon - The personal journey and philosophy that shapes every coaching conversation.
            </p>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
