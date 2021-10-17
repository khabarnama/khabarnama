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
    return <BlogLoader class='w-full' />
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
        <div className='flex flex-col gap-3 md:p-7 pb-3'>
          <h1
            className='font-semibold text-xl md:text-2xl inline-block inline-block mb-2'
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className='flex justify-between'>
            {post._embedded.author[0].slug && (
              <div className='flex items-center'>
                <Link href={`/blog/author/${post._embedded.author[0].slug}`}>
                  <a>
                    <ImageComponentity
                      classes='w-10 h-10 rounded-full overflow-hidden ml-2'
                      src={
                        post._embedded.author[0].avatar_urls
                          ? encodeURI(post._embedded.author[0].avatar_urls['96'])
                          : 'https://secure.gravatar.com/avatar/5ba47e3ab322d98712c8147821ede32a?s=4896&d=mm&r=g'
                      }
                      alt={`نویسنده: ` + post._embedded.author[0].name}
                    />
                  </a>
                </Link>
                <div className='text-xs'>
                  <Link href={`/blog/author/${post._embedded.author[0].slug}`}>
                    <a className='text-gray-900 font-semibold leading-none text-sm hover:text-indigo-800'>
                      {post._embedded.author[0].name}
                    </a>
                  </Link>
                  <p className='text-gray-600 text-xs'>{`@` + post._embedded.author[0].slug}</p>
                </div>
              </div>
            )}
            <div className='share flex gap-2 items-center text-gray-600'>
              <TwitterShareButton url={`https://khabarnama.net/${post.slug}`}>
                <TwitterIcon size={24} round={false} />
              </TwitterShareButton>
              <LinkedinShareButton url={`https://khabarnama.net/${post.slug}`}>
                <LinkedinIcon size={24} round={false} />
              </LinkedinShareButton>
              <FacebookShareButton url={`https://khabarnama.net/${post.slug}`}>
                <FacebookIcon size={24} round={false} />
              </FacebookShareButton>
            </div>
          </div>
        </div>
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
          <div className='text-xs md:text-sm font-regular text-gray-900 flex mt-4 flex items-center justify-between'>
            <div className='w-full flex overflow-scroll scrollbar-hide'>
              <span className='ml-5 flex flex-row items-center'>
                <SVGClock />
                <span className='mr-1'>{moment(post.date_gmt).locale('fa').format('DD MMMM')}</span>
              </span>
              {post._embedded['wp:term']?.map((termArray) =>
                termArray.map(
                  (term, index) =>
                    index < 2 && (
                      <Link
                        href={
                          '/blog' +
                          (term.taxonomy == 'category' ? '/category' : '/tag') +
                          `/${term.slug}`
                        }
                      >
                        <a
                          className={`mr-1 sm:mr-3 ${
                            index == 1 ? 'hidden sm:flex' : 'flex'
                          } flex-none items-center hover:text-indigo-800`}
                        >
                          {term.taxonomy == 'category' ? (
                            <SVGLifestyle classes='h-5' />
                          ) : (
                            <SVGTag />
                          )}
                          <span className='mr-1' dangerouslySetInnerHTML={{ __html: term.name }} />
                        </a>
                      </Link>
                    )
                )
              )}
            </div>
          </div>
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
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  let args = '_embed=true'
  const { slug } = params

  const pageRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/pages?${args}&slug=${encodeURI(slug)}`
  )
  const page = await pageRes.json()
  const post = page[0]

  return {
    props: {
      post
    }
  }
}

export default Page
