import { useRouter } from 'next/router'
import Infiniteblog from '../../components/Infiniteblog'
import ResponsiveArticle from '../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Author({ author }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div className='pl-5'>
        <ResponsiveArticle />
      </div>
    )
  }

  return (
    <>
      {author.length === 0 ? (
        <h1 className='pl-5'>NO SUCH USER FOUND</h1>
      ) : (
        <>
          <Head>
            {ReactHtmlParser(
              author[0].yoast_head.replace('https://aleteia.org', 'https://reporterly.net')
            )}
          </Head>
          <header className='px-5'>
            <h1 className='text-xl font-semibold mb-2'>
              <span className='font-medium'>Author: </span>
              {author[0].name}
            </h1>
            <article dangerouslySetInnerHTML={{ __html: author[0].description }} />
            <hr className='my-4' />
          </header>
          <Infiniteblog type='author' type_id={author[0].id} />
        </>
      )}
    </>
  )
}

export default Author

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/users`)
  const authors = await res.json()

  const slugs = []
  authors.forEach((post) => {
    slugs.push({ params: { slug: post.slug } })
  })

  return {
    paths: slugs,
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/users?slug=${slug}&_embed=true`)
  const author = await res.json()

  return {
    props: { author }
  }
}
