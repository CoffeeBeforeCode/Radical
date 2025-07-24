import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import 'tailwindcss/tailwind.css'


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = (
      _url: string,
      { _shallow }: { _shallow?: boolean }
    ) => {
      // Placeholder for future route tracking
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App
