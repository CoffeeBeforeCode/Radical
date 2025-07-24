import Layout, { Block, PageLayout } from '../components/Layout'

export default function SocialImpact() {
  return (
    <Layout
      title="Social Impact"
      description="Leadership beyond the workplace - community mentoring and the five domains of intentional leadership."
      canonical="/social-impact"
    >
      <Block background="navy" spacing="spacious">
        <PageLayout>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Leadership beyond the <span className="font-['Waiting_for_the_Sunrise'] text-[#D4B86A]">workplace</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Coming soon - Community mentoring, entrepreneurship support, and leadership across five domains of life.
            </p>
          </div>
        </PageLayout>
      </Block>
    </Layout>
  )
}
