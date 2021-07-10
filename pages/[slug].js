import { useRouter } from 'next/router'
import ResponsiveArticle from './../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Page({ page }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      {page === null ? (
        <h1>Not found</h1>
      ) : (
        <div className='max-w-screen-xl mx-auto p-5'>
          <Head>
            <link
              rel='stylesheet'
              id='wp-block-library-css'
              href='/theme.css'
              type='text/css'
              media='all'
            />
            <link
              rel='stylesheet'
              id='wp-block-library-css'
              href='/style.css'
              type='text/css'
              media='all'
            />

            {ReactHtmlParser(page[0].yoast_head)}
          </Head>
          <article>{ReactHtmlParser(page[0].content.rendered)}</article>
        </div>
      )}
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages`)
  const pages = await res.json()

  const slugs = []
  pages.forEach((page) => {
    slugs.push({ params: { slug: page.slug } })
  })

  return {
    // Only `/pages/1` and `/pages/2` are generated at build time
    paths: slugs,
    // Enable statically generating additional pages
    // For example: `/pages/3`
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the page `id`.
  // If the route is like /pages/1, then params.id is 1
  const { slug } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?_embed=true&slug=${slug}`)
  const page = await res.json()

  // Pass page data to the page via props
  return {
    props: { page },
    // Re-generate the page at most once per second
    // if a request comes in
    revalidate: 1
  }
}

export default Page
