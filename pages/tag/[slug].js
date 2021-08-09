import { useRouter } from 'next/router'
import Infiniteblog from './../../components/Infiniteblog'
import ResponsiveArticle from './../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Tag({ tag }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div className="pl-5"><ResponsiveArticle /></div>
  }

  return (
      <>
    {tag.length === 0 ? (
        <h1 className="pl-5">NO POSTS WITH THIS TAG</h1>
      ) : (
        <>
            <Head>{ReactHtmlParser(tag[0].yoast_head.replace("https://aleteia.org", "https://reporterly.vercel.app"))}</Head>
            <header className="px-5">
                <h1 className='text-xl font-bold uppercase mb-2'>{tag[0].name}</h1>
                <article dangerouslySetInnerHTML={{ __html: tag[0].description }} />
                <hr className='my-4' />
            </header>
            <Infiniteblog type='tags' type_id={tag[0].id} /> 
        </>
      )}
      </>
  )
}

export default Tag

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`https://aleteia.org/wp-json/wp/v2/tags?order=desc&orderby=count`)
  const tags = await res.json()

  const slugs = []
  tags.forEach((tag) => {
    slugs.push({ params: { slug: tag.slug } })
  })

  return {
    paths: slugs,
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { slug } = params
  const res = await fetch(`https://aleteia.org/wp-json/wp/v2/tags?slug=${slug}`)
  const tag = await res.json()

  // Pass post data to the page via props
  return {
    props: { tag }
  }
}