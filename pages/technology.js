import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Footer from '../components/Footer'
import CardsWrapper from '../components/widgetTemplates/cardsWrapper'
import PageWrapper from '../components/widgetTemplates/pageWrapper'
import CTAWrapper from '../components/widgetTemplates/ctaWrapper'
import ProjectsWrapper from '../components/widgetTemplates/projectsWrapper'

function Technology({
  page,
  question,
  software,
  softwares,
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
        <CardsWrapper
          id={software.slug}
          title={software.title.rendered}
          desc={[software.excerpt.rendered]}
          gridClasses={'grid grid-cols-1 sm:grid-cols-12 mt-8'}
          services={softwares}
          isLink={false}
        />

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

  const pageRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/711?${args}`)
  const page = await pageRes.json()

  const questionRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/10027?${args}`)
  const question = await questionRes.json()

  const softwareRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/9694?${args}`)
  const software = await softwareRes.json()

  const softwaresRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/softwareservices?${args}`)
  const softwares = await softwaresRes.json()

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
      software,
      softwares,
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

export default Technology
