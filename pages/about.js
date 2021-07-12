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
  topLeft,
  topRight,
  topRight2,
  bottomRight,
  bottomRight2,
  bottomLeft,
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
      <Head>{ReactHtmlParser(page.yoast_head)}</Head>
      <div className='max-w-screen-xl mx-auto my-8 relative'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-start gap-8'>
          <div className='grid grid-cols-1 gap-8 col-span-1 lg:col-span-3'>
            <div className='border bg-white p-8'>
              <h3 className='mb-3 text-3xl block uppercase text-gray-900 font-bold'>
                {topLeft.name}
              </h3>
              <ul className='list-disc ml-8'>
                {topRight.items.map((item) => {
                  return (
                    <li>
                      <Link key={item.id} href={`/${item.url.replace('https://iap.af/', '')}`}>
                        <a
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
            <div className='border bg-white p-8'>
              <h3 className='mb-3 text-3xl block uppercase text-gray-900 font-bold'>
                {topLeft.name}
              </h3>
              <ul className='list-disc ml-8'>
                {topRight.items.map((item) => {
                  return (
                    <li>
                      <Link key={item.id} href={`/${item.url.replace('https://iap.af/', '')}`}>
                        <a
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
                <div className='bg-gray-400 relative' style={{ height: '33rem' }}>
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
                  <h3 className='font-bold text-3xl mb-4'>
                    We provide solutions powered by the latest and the best Technology.
                  </h3>
                  <div className='text-gray-600'>
                    Intellectual Applications & Products (IAP) is a reputable technology-driven
                    consulting company staffed with highly skilled and experienced professionals in
                    the field of Information Technology and Digital Marketing. We champion
                    innovative technology, providing turnkey technology and media solutions to both
                    the private and non-private sectors in Afghanistan. At IAP, the focus is on
                    solving real-life problems using two key technologies that can bring a
                    revolution in the tech-industry: Blockchain and Artificial Intelligence. Our
                    partnerships involve some of the world’s well-known names in the technology
                    industry including Microsoft, Cisco, Palo Alto, Dell, Polycom and Zoho. Our
                    customer-centric approach has enabled us to grow rapidly and become a trusted
                    partner to large enterprises as well as the government such as; the Ministry of
                    Economy, Roshan Telecom, the First Microfinance Bank, Geneva Call, Colombo Plan,
                    Tetra Tech and AECOM. Some of our past performance include:
                    <br />
                    <br />
                    IAP has been offering its customers reliable and secure web hosting services
                    since 2005 (previously under NETLINKS Ltd’s leadership). We are one of the
                    pioneers in web hosting services in Afghanistan and we take pride in hosting a
                    number of critical and important websites in Afghanistan.
                  </div>
                </div>
                <div className='col-span-1 lg:col-span-4 bg-gray-300'></div>
              </div>
            </div>
          </div>
        </div>

        <ProjectsWrapper category={category} projects={projects} />

        <CTAWrapper cta={question} />
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

  return {
    props: {
      page,
      question,
      category,
      projects,
      topLeft,
      topRight,
      topRight2,
      bottomLeft,
      bottomRight,
      bottomRight2,
      footerAddress
    },
    revalidate: 1
  }
}

export default About
