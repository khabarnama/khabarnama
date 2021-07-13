import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Footer from '../components/Footer'
import CardsWrapper from '../components/widgetTemplates/cardsWrapper'
import ImagedCardsWrapper from '../components/widgetTemplates/imagedCardsWrapper'
import PageWrapper from '../components/widgetTemplates/pageWrapper'
import CTAWrapper from '../components/widgetTemplates/ctaWrapper'

function Media({ page, services, digitalPage, digitals, question, topLeft, topRight, topRight2 }) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <Head>{ReactHtmlParser(page.yoast_head)}</Head>

      <div className='max-w-screen-xl mx-auto my-8 relative p-5'>
        <PageWrapper page={page} isImage={false} />

        <ImagedCardsWrapper
          id={'in-a-glimpse'}
          title={'In a glimpse'}
          gridClasses={'grid grid-cols-1 sm:grid-cols-12 mt-8 gap-8'}
          items={services}
        />

        <PageWrapper page={digitalPage} />

        <CardsWrapper
          id={'what-do-you-get'}
          title={'What do you get?'}
          gridClasses={'grid grid-cols-1 sm:grid-cols-12 gap-8 mt-8'}
          services={digitals}
          isLink={false}
        />

        <CTAWrapper cta={question} />
      </div>
      <Footer topRight={topRight} topLeft={topLeft} topRight2={topRight2} />
    </>
  )
}

export async function getStaticProps() {
  let args = '_embed=true'

  const pageRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/709?${args}`)
  const page = await pageRes.json()

  const digitalPageRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/2229?${args}`)
  const digitalPage = await digitalPageRes.json()

  const questionRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/10027?${args}`)
  const question = await questionRes.json()

  const digitalsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/digitalservices?${args}`)
  const digitals = await digitalsRes.json()

  const servicesRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/mediaservices?${args}`)
  const services = await servicesRes.json()

  const topLeftRes = await fetch(`${process.env.MENU_URL}/locations/footer-topleft`)
  const topLeft = await topLeftRes.json()

  const toprightRes = await fetch(`${process.env.MENU_URL}/locations/footer-topright`)
  const topRight = await toprightRes.json()

  const topright2Res = await fetch(`${process.env.MENU_URL}/locations/footer-topright2`)
  const topRight2 = await topright2Res.json()

  return {
    props: {
      page,
      digitals,
      services,
      digitalPage,
      question,
      topLeft,
      topRight,
      topRight2
    },
    revalidate: 1
  }
}

export default Media
