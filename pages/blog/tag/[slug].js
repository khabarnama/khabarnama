import { useRouter } from 'next/router'
import Infiniteblog from './../../../components/Infiniteblog'
import ResponsiveArticle from './../../../components/skeleton/ResponsiveArticle'

function Tag({ tag }) {
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
      {tag.length === 0 ? (
        <h1 className='pr-5'>موجود نیست!</h1>
      ) : (
        <>
          {tag.yoast_head_json && (
            <NextSeo
              title={tag.yoast_head_json.og_title}
              description={tag.yoast_head_json.og_description}
              canonical={`https://khabarnama.net/blog/tag/${tag.slug}`}
              robotsProps={{
                maxSnippet: tag.yoast_head_json.robots['max-snippet'],
                maxImagePreview: tag.yoast_head_json.robots['max-image-preview'],
                maxVideoPreview: tag.yoast_head_json.robots['max-video-preview']
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
                title: tag.yoast_head_json.og_title,
                description: tag.yoast_head_json.og_description,
                url: `https://khabarnama.net/blog/tag/${tag.slug}`,
                type: tag.yoast_head_json.og_type,
                locale: tag.yoast_head_json.og_locale,
                site_name: tag.yoast_head_json.og_site_name,
                images: [
                  {
                    url: '/icons/seoindex.png',
                    width: 1200,
                    height: 630,
                    alt: tag.yoast_head_json.og_title
                  }
                ]
              }}
              twitter={{
                handle: '@khabarnamaaf',
                site: '@khabarnamaaf',
                cardType: 'summary_large_image'
              }}
              facebook={{
                appId: '213017455829104'
              }}
            />
          )}
          <header className='px-5'>
            <h1 className='text-xl font-semibold mb-2'>
              <span className='font-medium'>هشتگ: </span>
              {tag[0].name}
            </h1>
            <article dangerouslySetInnerHTML={{ __html: tag[0].description }} />
            <hr className='my-4' />
          </header>
          <Infiniteblog key={`tags${tag[0].id}`} type='tags' type_id={tag[0].id} />
        </>
      )}
    </>
  )
}

export default Tag

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/tags?order=desc&orderby=count`)
  const tags = await res.json()

  const slugs = []
  tags.forEach((tag) => {
    slugs.push({ params: { slug: tag.slug } })
  })

  return {
    paths: slugs,
    fallback: 'blocking'
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { slug } = params
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/tags?slug=${encodeURI(slug)}`)
  const tag = await res.json()
  if (!tag) {
    return {
      notFound: true
    }
  }
  // Pass post data to the page via props
  return {
    props: { tag }
  }
}
