import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Footer from '../components/Footer'
import CTAWrapper from '../components/widgetTemplates/ctaWrapper'
import SVGArrow from './../components/SVG/SVGArrow'
import Link from 'next/link'

function Contact({ page, question, contacts, topLeft, topRight, topRight2 }) {
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
             <div className="p-8 bg-white mb-8">
                <h3 className="font-bold uppercase text-2xl">Get Directions</h3>
                <div className="mt-6">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13151.043195450231!2d69.149493!3d34.508948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb514444c5852f82!2sIAP%20%7C%20Technology%20%26%20Media%20Services%20in%20Afghanistan!5e0!3m2!1sen!2s!4v1626241954751!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                </div>
             </div>
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
      <Footer topRight={topRight} topLeft={topLeft} topRight2={topRight2} />
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

  const toprightRes = await fetch(`${process.env.MENU_URL}/locations/footer-topright`)
  const topRight = await toprightRes.json()

  const topright2Res = await fetch(`${process.env.MENU_URL}/locations/footer-topright2`)
  const topRight2 = await topright2Res.json()

  return {
    props: {
      page,
      question,
      contacts,
      topLeft,
      topRight,
      topRight2
    },
    revalidate: 1
  }
}

export default Contact
