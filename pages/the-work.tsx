import Layout from '../components/Layout'

export default function TheWork() {
  return (
    <Layout
      title="The Work - Phillip Collins"
      description="Professional leadership coaching for senior executives."
      canonical="/the-work"
    >
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-8 text-4xl font-bold text-gray-900">
            The Work
          </h1>
          <p className="text-lg text-gray-600">
            Professional leadership coaching for senior executives.
          </p>
        </div>
      </section>
    </Layout>
  )
}
