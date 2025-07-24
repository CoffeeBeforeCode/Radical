import Layout, { Block, PageLayout } from '../../components/Layout'

export default function Insights() {
  return (
    <Layout
      title="Insights"
      description="Thoughts on leadership development, emotional intelligence, and the practice of authentic leadership."
      canonical="/insights"
    >
      <Block background="cream" spacing="spacious">
        <PageLayout>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1A365D] mb-8">
              <span className="font-['Waiting_for_the_Sunrise'] text-[#7A9A7F]">Insights</span> and reflections
            </h1>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Coming soon - Thoughts on leadership development, emotional intelligence, and authentic leadership practice.
            </p>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
