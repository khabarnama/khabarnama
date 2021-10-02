import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import ImageComponentity from './../components/ImageComponentity'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'
import SVGClock from './../components/SVG/SVGClock'
import SVGTag from './../components/SVG/SVGTag'
import SVGCategory from './../components/SVG/SVGCategory'
import Link from 'next/link'

function Blog({ post }) {
  const router = useRouter()
  var dateFormat = require('dateformat')

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <Head>{post.yoast_head && ReactHtmlParser(post.yoast_head)}</Head>
      <div id={post.id} className='blog flex flex-col mx-auto px-5'>
        <div className='flex flex-col gap-3 md:p-7 pb-3'>
          <h1
            className='font-semibold text-xl md:text-2xl inline-block inline-block mb-2'
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className='flex justify-between'>
            {post._embedded.author[0].slug && (
              <div className='flex items-center'>
                <Link href={`/author/${post._embedded.author[0].slug}`}>
                  <a>
                    <ImageComponentity
                      classes='w-10 h-10 rounded-full overflow-hidden ml-2'
                      src={
                        post._embedded.author[0].avatar_urls
                          ? post._embedded.author[0].avatar_urls['96']
                          : 'https://secure.gravatar.com/avatar/5ba47e3ab322d98712c8147821ede32a?s=4896&d=mm&r=g'
                      }
                      alt={`نویسنده: ` + post._embedded.author[0].name}
                    />
                  </a>
                </Link>
                <div className='text-xs'>
                  <Link href={`/author/${post._embedded.author[0].slug}`}>
                    <a className='text-gray-900 font-semibold leading-none text-sm hover:text-red-700'>
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
              src={post._embedded['wp:featuredmedia'][0].source_url}
              classes={'h-48 md:h-72 bg-gray-300 rounded-xl overflow-hidden'}
              alt={post.title.rendered}
            />
          )}
        </div>
        <div className='sm:p-7 pb-5 border-b border-gray-100'>
          <div
            className='text-gray-700 text-base leading-8'
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
          <div className='text-xs md:text-sm font-regular text-gray-900 flex mt-4 flex items-center justify-between'>
            <div className='w-full flex overflow-scroll scrollbar-hide'>
              <span className='ml-5 flex flex-row items-center'>
                <SVGClock />
                <span className='mr-1'>{dateFormat(post.date_gmt, 'mmm dS')}</span>
              </span>
              {post._embedded['wp:term'].map((termArray) =>
                termArray.map(
                  (term, index) =>
                    index < 2 && (
                      <Link
                        href={
                          (term.taxonomy == 'category' ? '/category' : '/tag') + `/${term.slug}`
                        }
                      >
                        <a
                          className={`mr-1 sm:mr-3 ${
                            index == 1 ? 'hidden sm:flex' : 'flex'
                          } flex-none items-center hover:text-red-700`}
                        >
                          {term.taxonomy == 'category' ? <SVGCategory /> : <SVGTag />}
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts`)
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
    `${process.env.NEXT_PUBLIC_SITE_URL}/posts?${args}&slug=${encodeURI(slug)}`
  )
  const page = await pageRes.json()
  const post = page[0]

  return {
    props: {
      post
    }
  }
}

export default Blog
