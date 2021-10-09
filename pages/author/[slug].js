import { useRouter } from 'next/router'
import Infiniteblog from '../../components/Infiniteblog'
import ResponsiveArticle from '../../components/skeleton/ResponsiveArticle'
import { NextSeo } from 'next-seo'

function Author({ author }) {
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
      {author.length === 0 ? (
        <h1 className='pr-5'>نویسنده مورد نظر موجود نیست!</h1>
      ) : (
        <>
          {author.yoast_head_json && (
            <NextSeo
              title={author.yoast_head_json.og_title}
              description={author.yoast_head_json.og_description}
              canonical={`https://khabarnama.net/author/${author.slug}`}
              noindex='index'
              nofollow='follow'
              robotsProps={{
                maxSnippet: author.yoast_head_json.robots['max-snippet'],
                maxImagePreview: author.yoast_head_json.robots['max-image-preview'],
                maxVideoPreview: author.yoast_head_json.robots['max-video-preview']
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
                title: author.yoast_head_json.og_title,
                url: `https://khabarnama.net/author/${author.slug}`,
                locale: author.yoast_head_json.og_locale,
                site_name: author.yoast_head_json.og_site_name,
                type: 'profile',
                profile: {
                  firstName: author.name,
                  username: author.slug
                },
                images: [
                  {
                    url: author.yoast_head_json.og_image.url,
                    alt: author.yoast_head_json.og_title
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
              <span className='font-medium'>نویسنده: </span>
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
  authors.forEach((author) => {
    slugs.push({ params: { slug: author.slug } })
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
