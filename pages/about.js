import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Footer from '../components/Footer'
import Link from 'next/link'
import CTAWrapper from '../components/widgetTemplates/ctaWrapper'
import ProjectsWrapper from '../components/widgetTemplates/projectsWrapper'
import React, { useState } from 'react'
import SVGYoutube from './../components/SVG/SVGYoutube'
import ImageComponentity from './../components/ImageComponentity'
import YoutubeEmbed from './../components/youtubeEmbed'

function About({
  page,
  question,
  category,
  projects,
  aboutOne,
  aboutTwo,
  topLeft,
  topRight,
  topRight2
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
      <Head>
        {ReactHtmlParser(page.yoast_head)}
        <link rel='stylesheet' href='/style.css' />
        <link rel='stylesheet' href='/theme.css' />
      </Head>
      <div className='max-w-screen-xl mx-auto my-8 relative p-5'>
        <div className='grid grid-cols-1 lg:grid-cols-12 items-start gap-8 relative'>
          <div className='hidden lg:inline-block col-span-1 lg:col-span-3 sticky top-0'>
            <div className='border bg-white p-8 mb-8'>
              <h3 className='mb-3 text-2xl block uppercase text-gray-900 font-bold'>
                {aboutOne.name}
              </h3>
              <ul className='list-disc ml-8'>
                {aboutOne.items.map((item) => {
                  return (
                    <li>
                      <Link
                        key={item.id}
                        href={`${
                          item.url.startsWith('http')
                            ? item.url
                            : '/${item.url.replace("https://iap.af/", "")}'
                        }`}
                      >
                        <a
                          target={`${item.url.startsWith('http') ? '_blank' : '_self'}`}
                          aria-label='Link'
                          className='my-1 block text-gray-600 font-medium hover:text-gray-900 hover:underline'
                        >
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='border bg-white p-8 mb-8'>
              <h3 className='mb-3 text-2xl block uppercase text-gray-900 font-bold'>
                {aboutTwo.name}
              </h3>
              <ul className='list-disc ml-8'>
                {aboutTwo.items.map((item) => {
                  return (
                    <li>
                      <Link
                        key={item.id}
                        href={`${
                          item.url.startsWith('http')
                            ? item.url
                            : '/${item.url.replace("https://iap.af/", "")}'
                        }`}
                      >
                        <a
                          target={`${item.url.startsWith('http') ? '_blank' : '_self'}`}
                          aria-label='Link'
                          className='my-1 block text-gray-600 font-medium hover:text-gray-900 hover:underline'
                        >
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-9'>
            <div className='mb-8 bg-white border'>
              <div className=''>
                <div className='relative' style={{ height: '33rem' }}>
                  {video ? (
                    <YoutubeEmbed embedId={page.featuredvideo[0]} />
                  ) : page.featured_media != 0 && page.featured_media != null ? (
                    <ImageComponentity
                      src={
                        page._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url
                      }
                      classes={'h-full bg-gray-300 filter grayscale'}
                      alt={page.title.rendered}
                    />
                  ) : (
                    <div className='sm:h-full bg-gray-300' />
                  )}
                  {!video && (
                    <div
                      className='rounded bg-white w-16 h-12 absolute inset-y-2/4 inset-x-2/4 transform -translate-y-1/2 -translate-x-1/2'
                      onClick={() => setVideo(true)}
                    >
                      <SVGYoutube classes='cursor-pointer text-red-600 h-20 w-20 absolute inset-y-2/4 inset-x-2/4 transform -translate-y-1/2 -translate-x-1/2' />
                    </div>
                  )}
                </div>
                <div className='p-10'>
                  <article
                    className='text-gray-600  list-margin'
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectsWrapper category={category} projects={projects} />

        <CTAWrapper cta={question} />
      </div>
      <Footer topRight={topRight} topLeft={topLeft} topRight2={topRight2} />
    </>
  )
}

export async function getStaticProps() {
  let args = '_embed=true'

  const pageRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/13?${args}`)
  const page = await pageRes.json()

  const questionRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/10027?${args}`)
  const question = await questionRes.json()

  const categoryRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/categories/109?${args}`)
  const category = await categoryRes.json()

  const projectsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/posts?${args}&categories=109`
  )
  const projects = await projectsRes.json()

  const aboutOneRes = await fetch(`${process.env.MENU_URL}/locations/about-one`)
  const aboutOne = await aboutOneRes.json()

  const aboutTwoRes = await fetch(`${process.env.MENU_URL}/locations/about-two`)
  const aboutTwo = await aboutTwoRes.json()

  const topLeftRes = await fetch(`${process.env.MENU_URL}/locations/footer-topleft`)
  const topLeft = await topLeftRes.json()

  const toprightRes = await fetch(`${process.env.MENU_URL}/locations/footer-topright`)
  const topRight = await toprightRes.json()

  const topright2Res = await fetch(`${process.env.MENU_URL}/locations/footer-topright2`)
  const topRight2 = await topright2Res.json()

  return {
    props: {
      page,
      question,
      category,
      projects,
      aboutOne,
      aboutTwo,
      topLeft,
      topRight,
      topRight2
    },
    revalidate: 1
  }
}

export default About
