import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'next-themes'

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// https://medium.com/@SandeepDinesh/eliminating-next-js-isr-builds-with-client-side-rendering-2c30ee198831
// If a page navigation takes longer than 100ms to complete, abort the SPA routing and do a full page refresh.

Router.onRouteChangeStart = (url) => {
  if (url !== window.location.pathname) {
    window.routeTimeout = setTimeout(() => (window.location = url), 5000)
    NProgress.start()
  }
}
Router.onRouteChangeComplete = () => {
  clearTimeout(window.routeTimeout)
  NProgress.done()
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
