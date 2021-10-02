import { useRouter } from 'next/router'
import Infiniteblog from '../../components/Infiniteblog'
import ResponsiveArticle from '../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Search({ search }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return (
      <div className='pr-5'>
        <ResponsiveArticle />
      </div>
    )
  }

  return (
    <>
      {search.length === 0 ? (
        <h1 className='pr-5'>موجود نیست!</h1>
      ) : (
        <>
          <Head>
            {ReactHtmlParser(search[0].yoast_head.replace('subhekabul.com', 'khabarnama.net'))}
          </Head>
          <header className='px-5'>
            <h1 className='text-xl font-semibold mb-2'>
              <span className='font-medium'>نتایج جستجو برای: </span>
              {search[0].name}
            </h1>
            <article dangerouslySetInnerHTML={{ __html: search[0].description }} />
            <hr className='my-4' />
          </header>
          <Infiniteblog type='search' type_id={search[0].id} />
        </>
      )}
    </>
  )
}

export default Search

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts`)
  const posts = await res.json()

  const slugs = []
  posts.forEach((post) => {
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?search=${slug}&_embed=true`)
  const search = await res.json()

  return {
    props: { search }
  }
}
