import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
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
          href='https://ctechnical.solutions/wp-content/uploads/elementor/css/post-44.css?ver=1627192824'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-global-css'
          href='https://ctechnical.solutions/wp-content/uploads/elementor/css/global.css?ver=1627195897'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-icons-shared-0-css'
          href='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.1'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          id='elementor-icons-fa-solid-css'
          href='https://ctechnical.solutions/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.1'
          type='text/css'
          media='all'
        />

        <link
          rel='stylesheet'
          id={`elementor-post-${page[0].id}-css`}
          href={`https://ctechnical.solutions/wp-content/uploads/elementor/css/post-${page[0].id}.css`}
          type='text/css'
          media='all'
        />
        <script type='text/javascript' src='/js/jquery.js'></script>
        <script type='text/javascript' src='/js/jquerymigrate.js'></script>
        <script type='text/javascript' src='/js/elementorwebpackruntime.js'></script>
        <script type='text/javascript' src='/js/frontendmodules.js'></script>
        <script type='text/javascript' src='/js/waypoints.js'></script>
        <script type='text/javascript' src='/js/jquerycore.js'></script>
        <script type='text/javascript' src='/js/swiper.js'></script>
        <script type='text/javascript' src='/js/sharelink.js'></script>
        <script type='text/javascript' src='/js/dialog.js'></script>
        <script type='text/javascript' src='/js/frontend.js'></script>
        <script type='text/javascript' src='/js/preloadedmodules.js'></script>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: page[0].content.rendered }} />
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`https://ctechnical.solutions/wp-json/wp/v2/pages?slug=test-test`)
  const posts = await res.json()

  const slugs = []
  posts.forEach((post) => {
    slugs.push({ params: { slug: post.slug } })
  })

  return {
    // Only `/pages/1` and `/pages/2` are generated at build time
    paths: slugs,
    // Enable statically generating additional pages
    // For example: `/pages/3`
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  let args = '_embed=true'
  const { slug } = params

  const pageRes = await fetch(
    `https://ctechnical.solutions/wp-json/wp/v2/pages?${args}&slug=${slug}`
  )
  const page = await pageRes.json()

  return {
    props: {
      page
    },
    revalidate: 1
  }
}

export default Test
