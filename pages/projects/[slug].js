import { useRouter } from 'next/router'
import ResponsiveArticle from './../../components/skeleton/ResponsiveArticle'
import ImageComponentity from './../../components/ImageComponentity'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import React, { useState } from 'react'
import SVGYoutube from './../../components/SVG/SVGYoutube'
import YoutubeEmbed from './../../components/youtubeEmbed'
import Footer from './../../components/Footer'

function Post({
  post,
  topLeft,
  topRight,
  topRight2,
  bottomLeft,
  bottomRight,
  bottomRight2,
  footerAddress
}) {
  const router = useRouter()
  const [video, setVideo] = useState(false)

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      {post === null ? (
        <h1>Not found</h1>
      ) : (
        <>
          <Head>
            {ReactHtmlParser(post.yoast_head)}
            <link rel='stylesheet' href='/style.css' />
            <link rel='stylesheet' href='/theme.css' />
          </Head>
          <div className='max-w-screen-lg mx-auto p-5'>
            <Head>{ReactHtmlParser(post[0].yoast_head)}</Head>
            <div className='my-8 bg-white border list-margin'>
              <div className=''>
                <div className='relative'>
                  {video ? (
                    <YoutubeEmbed embedId={post[0].featuredvideo[0]} />
                  ) : (
                    post[0].featured_media != 0 &&
                    post[0].featured_media != null && (
                      <ImageComponentity
                        src={
                          post[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
                            ? post[0]._embedded['wp:featuredmedia'][0].media_details.sizes.large
                                .source_url
                            : post[0]._embedded['wp:featuredmedia'][0].source_url
                        }
                        classes={' h-33rem bg-gray-300 filter grayscale'}
                        alt={post[0].title.rendered}
                      />
                    )
                  )}
                  {!video && post[0].featuredvideo && (
                    <div
                      className='rounded bg-white w-16 h-12 absolute inset-y-2/4 inset-x-2/4 transform -translate-y-1/2 -translate-x-1/2'
                      onClick={() => setVideo(true)}
                    >
                      <SVGYoutube classes='cursor-pointer text-red-600 h-20 w-20 absolute inset-y-2/4 inset-x-2/4 transform -translate-y-1/2 -translate-x-1/2' />
                    </div>
                  )}
                </div>
                <div className='p-10'>
                  <h1
                    className='font-bold text-3xl mb-4'
                    dangerouslySetInnerHTML={{ __html: post[0].title.rendered }}
                  />
                  <article
                    className='text-gray-600'
                    dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer
            topRight={topRight}
            topLeft={topLeft}
            bottomLeft={bottomLeft}
            bottomRight={bottomRight}
            bottomRight2={bottomRight2}
            topRight2={topRight2}
            footerAddress={footerAddress}
          />
        </>
      )}
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

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the page `id`.
  // If the route is like /pages/1, then params.id is 1
  const { slug } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?_embed=true&slug=${slug}`)
  const post = await res.json()

  const topLeftRes = await fetch(`${process.env.MENU_URL}/locations/footer-topleft`)
  const topLeft = await topLeftRes.json()

  const bottomleftRes = await fetch(`${process.env.MENU_URL}/locations/footer-bottomleft`)
  const bottomLeft = await bottomleftRes.json()

  const toprightRes = await fetch(`${process.env.MENU_URL}/locations/footer-topright`)
  const topRight = await toprightRes.json()

  const topright2Res = await fetch(`${process.env.MENU_URL}/locations/footer-topright2`)
  const topRight2 = await topright2Res.json()

  const bottomrightRes = await fetch(`${process.env.MENU_URL}/locations/footer-bottomright`)
  const bottomRight = await bottomrightRes.json()

  const bottomright2Res = await fetch(`${process.env.MENU_URL}/locations/footer-bottomright2`)
  const bottomRight2 = await bottomright2Res.json()

  const footeraddressres = await fetch(`${process.env.MENU_URL}/locations/footer-address`)
  const footerAddress = await footeraddressres.json()

  // Pass page data to the page via props
  return {
    props: {
      post,
      topLeft,
      topRight,
      topRight2,
      bottomLeft,
      bottomRight,
      bottomRight2,
      footerAddress
    },
    // Re-generate the page at most once per second
    // if a request comes in
    revalidate: 1
  }
}

export default Post
