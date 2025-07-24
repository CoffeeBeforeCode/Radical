import Layout, { Block, PageLayout } from '../components/Layout'

export default function AtHome() {
  return (
    <Layout
      title="At Home"
      description="Where leadership lives - exploring values in action beyond the workplace."
      canonical="/at-home"
    >
      <Block background="cream" spacing="spacious">
        <PageLayout>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1A365D] mb-8">
              Where leadership <span className="font-['Waiting_for_the_Sunrise'] text-[#7E2D40]">lives</span> too
            </h1>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Coming soon - Cooking, Gracie, and the values that shape leadership practice in everyday life.
            </p>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
