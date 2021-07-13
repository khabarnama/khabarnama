import React from 'react'
import Head from 'next/head'
import ServicesWidget from './../components/widgetTemplates/services'
import HeroImagedWidget from './../components/widgetTemplates/heroImaged'
import ProjectsWidget from './../components/widgetTemplates/projects'
import TeamWidget from './../components/widgetTemplates/team'
import ClientImagedWidget from './../components/widgetTemplates/clientImaged'
import ProductsWidget from './../components/widgetTemplates/products'
import WebHostingWidget from './../components/widgetTemplates/webhosting'
import Footer from './../components/Footer'

export default function Blog({
  clients,
  projects,
  services,
  products,
  about,
  hosting,
  team,
  topLeft,
  topRight,
  topRight2,
  bottomRight,
  bottomRight2,
  bottomLeft,
  footerAddress
}) {
  return (
    <>
      <Head>
        <title>IAP - Technology & Media Services</title>
        <meta
          name='description'
          content='IAP is a reputable technology-driven consulting company staffed with highly skilled and experienced professionals in the field of Information Technology and Digital Marketing'
        />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />

        <meta property='og:title' content='IAP - Technology & Media Services' />
        <meta
          property='og:description'
          content='IAP is a reputable technology-driven consulting company staffed with highly skilled and experienced professionals in the field of Information Technology and Digital Marketing'
        />
        <meta
          property='og:image'
          content='https://iap.af/wp-content/uploads/2021/07/9M5A3275.jpg'
        />
        <meta
          name='twitter:image'
          content='https://iap.af/wp-content/uploads/2021/07/9M5A3275.jpg'
        />
        <meta name='twitter:image:alt' content='iap.af' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:url' content='https://iap.af/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='IAP' />
      </Head>
      <div className='max-w-screen-2xl mx-auto p-5'>
        <div
          className={`grid grid-cols-1 sm:grid-cols-12 gap-5 lg:gap-0 items-stretch justify-stretch`}
        >
          <div className='order-1 sm:order-2 lg:order-1 col-span-1 sm:col-span-6 lg:col-span-3 flex flex-col justify-between'>
            <ServicesWidget services={services} />
          </div>
          <HeroImagedWidget about={about} />
          <ProjectsWidget projects={projects} />
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-12 gap-5 lg:gap-0 items-stretch justify-stretch`}
        >
          <TeamWidget team={team} />
          <div className='order-5 col-span-1 sm:col-span-12 lg:col-span-9 bg-indigo-500'>
            <ClientImagedWidget clients={clients} />
            <WebHostingWidget hosting={hosting} />
            <ProductsWidget products={products} />
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
  const clientsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/clients?${args}`)
  const clients = await clientsRes.json()

  const projectsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?${args}&per_page=5`)
  const projects = await projectsRes.json()

  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/products?${args}&per_page=2&order=asc`
  )
  const products = await productsRes.json()

  const aboutRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/13?${args}`)
  const about = await aboutRes.json()

  const teamRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/awsm_team_member?${args}&per_page=4&orderby=id&order=asc`
  )
  const team = await teamRes.json()

  const hostingRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/2403?${args}`)
  const hosting = await hostingRes.json()

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

  const servicesRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/pages?${args}&per_page=3&categories=97&orderby=title&order=desc`
  )
  const services = await servicesRes.json()

  return {
    props: {
      clients,
      projects,
      services,
      products,
      about,
      hosting,
      team,
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
