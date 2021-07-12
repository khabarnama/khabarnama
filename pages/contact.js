import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Footer from '../components/Footer'
import CTAWrapper from '../components/widgetTemplates/ctaWrapper'
import SVGArrow from './../components/SVG/SVGArrow'
import Link from 'next/link'

function Contact({
  page,
  question,
  contacts,
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8'>
          {contacts.map((contact) => {
            return (
              <div className='p-8 bg-white border mb-8'>
                <h3
                  className='font-bold uppercase text-2xl'
                  dangerouslySetInnerHTML={{ __html: contact.title.rendered }}
                />
                <div className='mt-6'>
                  <div
                    className={`text-gray-600 mb-2 line-clamp-3`}
                    dangerouslySetInnerHTML={{ __html: contact.excerpt.rendered }}
                  />
                  <Link href={`${contact.url[0]}`}>
                    <a
                      target='_blank'
                      aria-label='contact'
                      className='font-semibold hover:underline flex items-center group'
                    >
                      <span className='mr-2 group-hover:mr-3'>{contact.urllabel[0]}</span>
                      <SVGArrow classes={`w-4`} />
                    </a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

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

  const contactsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/contacts?${args}`)
  const contacts = await contactsRes.json()

  const questionRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/10027?${args}`)
  const question = await questionRes.json()

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
      contacts,
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

export default Contact
