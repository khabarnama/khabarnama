import { useRouter } from 'next/router'
import ResponsiveArticle from '../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'

function Test({ page }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          id='elementor-icons-css'
          href='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.11.0'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-animations-css'
          href='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.2.5'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-frontend-css'
          href='https://ctechnical.solutions/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.2.5'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-post-44-css'
          href='https://ctechnical.solutions/wp-content/uploads/elementor/css/post-44.css?ver=1624818641'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-global-css'
          href='https://ctechnical.solutions/wp-content/uploads/elementor/css/global.css?ver=1624818641'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-post-129-css'
          href='https://ctechnical.solutions/wp-content/uploads/elementor/css/post-129.css?ver=1626564832'
          type='text/css'
          media='all'
        />
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.2.5'
          id='elementor-webpack-runtime-js'
        ></script>
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.2.5'
          id='elementor-frontend-modules-js'
        ></script>
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2'
          id='elementor-waypoints-js'
        ></script>
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=5.3.6'
          id='swiper-js'
        ></script>
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/share-link/share-link.min.js?ver=3.2.5'
          id='share-link-js'
        ></script>
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.8.1'
          id='elementor-dialog-js'
        ></script>
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.2.5'
          id='elementor-frontend-js'
        ></script>
        <script
          type='text/javascript'
          src='https://ctechnical.solutions/wp-content/plugins/elementor/assets/js/preloaded-modules.min.js?ver=3.2.5'
          id='preloaded-modules-js'
        ></script>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </>
  )
}

export async function getStaticProps() {
  let args = '_embed=true'

  //   const pageRes = await fetch(`https://ctechnical.solutions/wp-json/wp/v2/pages/129?${args}`)
  const pageRes = await fetch(`https://ctechnical.solutions/wp-json/wp/v2/pages/133?${args}`)
  const page = await pageRes.json()

  return {
    props: {
      page
    },
    revalidate: 1
  }
}

export default Test
