import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import Footer from './../components/Footer'
import TeamPage from './../components/widgetTemplates/teampage'

function Team({
  page,
  teams,
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
        <div className=' p-10 bg-white border shadow-md mt-8'>
          <h3
            className='font-bold uppercase text-3xl mb-4'
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
          <div
            className='text-gray-600'
            dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-8 mt-8'>
          {teams.map((team, index) => {
            return index == 0 ? (
              <div className='bg-white border p-10 shadow-md col-span-1 sm:col-span-12 grid grid-cols-1 md:grid-cols-12 items-start gap-8'>
                <TeamPage team={team} />
              </div>
            ) : (
              <div className='bg-white border p-10 shadow-md col-span-1 lg:col-span-6 grid grid-cols-1 md:grid-cols-12 gap-5'>
                <TeamPage team={team} />
              </div>
            )
          })}
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

  const pageRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/688?${args}`)
  const page = await pageRes.json()

  const teamRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/awsm_team_member?${args}&per_page=20&orderby=id&order=asc`
  )
  const teams = await teamRes.json()

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
      teams,
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

export default Team
