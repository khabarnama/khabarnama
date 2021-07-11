import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Footer from '../components/Footer'
import ImageComponentity from '../components/ImageComponentity'
import ServicesWidget from '../components/widgetTemplates/services'
import Link from 'next/link'

function Webhosting({
  page,
  whys,
  web,
  topLeft,
  topRight,
  topRight2,
  bottomRight,
  bottomRight2,
  bottomLeft,
  footerAddress
}) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <Head>{ReactHtmlParser(page.yoast_head)}</Head>
      <div className='max-w-screen-xl mx-auto my-8 relative'>
        <div className='mb-8 bg-white border'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 p-10'>
            <div className='col-span-1 lg:col-span-8'>
              <h3
                className='font-bold uppercase text-3xl mb-4'
                dangerouslySetInnerHTML={{ __html: page.title.rendered }}
              />

              <div className='text-gray-600'>
                We are one of the pioneers in providing web hosting services in Afghanistan with
                over 400 active clients.
                <br />
                <br />
                IAP has been offering its customers reliable and secure web hosting services since
                2005 (previously under NETLINKS Ltd’s leadership). We are one of the pioneers in web
                hosting services in Afghanistan and we take pride in hosting a number of critical
                and important websites in Afghanistan.
              </div>
            </div>
            {page.featured_media != 0 && page.featured_media != null ? (
              <ImageComponentity
                src={page._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                classes={'col-span-1 lg:col-span-4 bg-gray-300 filter grayscale'}
                alt={page.title.rendered}
              />
            ) : (
              <div className='col-span-1 lg:col-span-4 bg-gray-300'></div>
            )}
          </div>
        </div>

        <div id='software-development' className='text-left mb-8 p-10 bg-white'>
          <h3 className='font-bold uppercase text-3xl'>What do you get?</h3>

          <div className='grid grid-cols-1 sm:grid-cols-12 mt-8'>
            <ServicesWidget services={whys} isLink={false} />
          </div>
        </div>

        <div id='key-projects' className='text-left p-10 bg-white'>
          <h3
            className='font-bold uppercase text-3xl'
            dangerouslySetInnerHTML={{ __html: web.title.rendered }}
          />
          <div className='grid grid-cols-1 sm:grid-cols-12 items-center mt-3 text-gray-600'>
            <div
              className='grid-cols-1 sm:col-span-10'
              dangerouslySetInnerHTML={{ __html: web.excerpt.rendered }}
            />
            <a
              href='#'
              className='col-span-1 sm:col-span-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700'
            >
              {web.website}
            </a>
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
  )
}

export async function getStaticProps() {
  let args = '_embed=true'

  const pageRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/2403?${args}`)
  const page = await pageRes.json()

  const webRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/10025?${args}`)
  const web = await webRes.json()

  const whysRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages?${args}&categories=106`)
  const whys = await whysRes.json()

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
      whys,
      web,
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

export default Webhosting
