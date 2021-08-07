import { useRouter } from 'next/router'
import ResponsiveArticle from '../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Blog({ page }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <Head>{ReactHtmlParser(page[0].yoast_head)}</Head>
      <div dangerouslySetInnerHTML={{ __html: page[0].content.rendered }} />
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`https://aleteia.org/wp-json/wp/v2/posts`)
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

  const pageRes = await fetch(`https://aleteia.org/wp-json/wp/v2/posts?${args}&slug=${slug}`)
  const page = await pageRes.json()

  return {
    props: {
      page
    }
    // revalidate: 1
  }
}

export default Blog
