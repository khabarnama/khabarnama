import { useRouter } from 'next/router'
import BlogLoader from './../components/skeleton/BlogLoader'
import ImageComponentity from './../components/ImageComponentity'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'
import SVGClock from './../components/SVG/SVGClock'
import SVGTag from './../components/SVG/SVGTag'
import SVGLifestyle from './../components/SVG/SVGLifestyle'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import moment from 'moment'
import 'moment/locale/fa'

function Page({ post }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <BlogLoader className='w-full' />
  }

  return (
    <>
      {post.yoast_head_json && (
        <NextSeo
          title={post.title.rendered}
          description={post.yoast_head_json.og_description}
          canonical={`https://khabarnama.net/${post.slug}`}
          titleTemplate='خبرنامه | %s'
          robotsProps={{
            maxSnippet: post.yoast_head_json.robots['max-snippet'],
            maxImagePreview: post.yoast_head_json.robots['max-image-preview'],
            maxVideoPreview: post.yoast_head_json.robots['max-video-preview']
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
            title: post.yoast_head_json.og_title,
            description: post.yoast_head_json.og_description,
            url: `https://khabarnama.net/${post.slug}`,
            type: post.yoast_head_json.og_type,
            locale: post.yoast_head_json.og_locale,
            site_name: post.yoast_head_json.og_site_name,
            article: {
              publishedTime: post.yoast_head_json.article_published_time,
              section: 'News',
              authors: [post.yoast_head_json.article_author]
            },
            images: [
              {
                url: post.yoast_head_json.og_image
                  ? post.yoast_head_json.og_image[0].url
                  : '/icons/seoindex.png',
                width: post.yoast_head_json.og_image
                  ? post.yoast_head_json.og_image[0].width
                  : 1200,
                height: post.yoast_head_json.og_image
                  ? post.yoast_head_json.og_image[0].height
                  : 630,
                alt: post.yoast_head_json.og_title
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
      <div id={post.id} className='blog flex flex-col mx-auto px-5'>
        <div className='relative'>
          {post.featured_media != 0 && post.featured_media != null && (
            <ImageComponentity
              src={encodeURI(post._embedded['wp:featuredmedia'][0].source_url)}
              classes={'h-48 md:h-96 bg-gray-300 rounded-xl overflow-hidden'}
              alt={post.title.rendered}
            />
          )}
        </div>
        <div className='sm:p-7 pb-5 border-b border-gray-100'>
          <div
            className='text-gray-700 leading-8 single_content'
            dangerouslySetInnerHTML={{
              __html: post.content.rendered.replace('old.khabarnama', 'khabarnama')
            }}
          />
        </div>
      </div>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages`)
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
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  let args = '_embed=true'
  const { slug } = params

  const pageRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/pages?${args}&slug=${encodeURI(slug)}`
  )
  const page = await pageRes.json()
  if (!page) {
    return {
      notFound: true
    }
  }
  const post = page[0]

  return {
    props: {
      post
    }
  }
}

export default Page
