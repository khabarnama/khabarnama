import { useRouter } from 'next/router'
import Infiniteblog from '../../components/Infiniteblog'
import ResponsiveArticle from '../../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Category({ category }) {
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
      {category.length === 0 ? (
        <h1 className='pl-5'>NO POSTS WITH THIS CATEGORY</h1>
      ) : (
        <>
          <Head>
            {ReactHtmlParser(
              category[0].yoast_head.replace('https://aleteia.org', 'https://reporterly.net')
            )}
          </Head>
          <header className='px-5'>
            <h1 className='text-xl font-semibold mb-2'>
              <span className='font-medium'>Category: </span>
              {category[0].name}
            </h1>
            <article dangerouslySetInnerHTML={{ __html: category[0].description }} />
            <hr className='my-4' />
          </header>
          <Infiniteblog type='categories' type_id={category[0].id} />
        </>
      )}
    </>
  )
}

export default Category

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/categories?order=desc&orderby=count`)
  const categories = await res.json()

  const slugs = []
  categories.forEach((category) => {
    slugs.push({ params: { slug: category.slug } })
  })

  return {
    paths: slugs,
    fallback: true
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/categories?slug=${slug}`)
  const category = await res.json()

  // Pass post data to the page via props
  return {
    props: { category }
  }
}
