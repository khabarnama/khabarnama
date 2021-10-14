import { useRouter } from 'next/router'
import Infiniteblog from './../../../../components/Infiniteblog'
import ResponsiveArticle from './../../../../components/skeleton/ResponsiveArticle'
import { NextSeo } from 'next-seo'

function Category({ category }) {
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
      {category.length === 0 ? (
        <h1 className='pr-5'>موجود نیست!</h1>
      ) : (
        <>
          {category.yoast_head_json && (
            <NextSeo
              title={category.yoast_head_json.og_title}
              description={category.yoast_head_json.og_description}
              canonical={`https://khabarnama.net/blog/category/${category.slug}`}
              noindex='index'
              nofollow='follow'
              robotsProps={{
                maxSnippet: category.yoast_head_json.robots['max-snippet'],
                maxImagePreview: category.yoast_head_json.robots['max-image-preview'],
                maxVideoPreview: category.yoast_head_json.robots['max-video-preview']
              }}
              additionalLinkTags={[
                {
                  rel: 'icon',
                  href: '/icons/logo-dark.png'
                },
                {
                  rel: 'apple-touch-icon',
                  href: '/icons/logo-dark.png',
                  sizes: '76x76'
                },
                {
                  rel: 'manifest',
                  href: '/manifest.json'
                }
              ]}
              openGraph={{
                title: category.yoast_head_json.og_title,
                description: category.yoast_head_json.og_description,
                url: `https://khabarnama.net/blog/category/${category.slug}`,
                type: category.yoast_head_json.og_type,
                locale: category.yoast_head_json.og_locale,
                site_name: category.yoast_head_json.og_site_name,
                images: [
                  {
                    url: '/icons/seoindex.png',
                    width: 1200,
                    height: 630,
                    alt: category.yoast_head_json.og_title
                  }
                ]
              }}
              twitter={{
                handle: '@khabarnamaaf',
                site: '@khabarnamaaf',
                cardType: 'summary_large_image'
              }}
            />
          )}
          <header className='px-5'>
            <h1 className='text-xl font-semibold mb-2'>
              <span className='font-medium'>کتگوری: </span>
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/categories?slug=${encodeURI(slug)}`)
  const category = await res.json()

  // Pass post data to the page via props
  return {
    props: { category }
  }
}
