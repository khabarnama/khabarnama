import React from 'react'
import Head from 'next/head'
import ServicesWidget from './../components/widgetTemplates/services'
import HeroWidget from './../components/widgetTemplates/hero'
import ProjectsWidget from './../components/widgetTemplates/projects'
import TeamWidget from './../components/widgetTemplates/team'
import ClientsWidget from './../components/widgetTemplates/clients'
import ProductsWidget from './../components/widgetTemplates/products'
import WebHostingWidget from './../components/widgetTemplates/webhosting'

export default function Blog({ clients, projects, services, products, about, hosting, team }) {
  return (
    <>
      <Head>
        <title>Intellectual Applications & Products</title>
        <meta name='description' content='Componentity Team has made a WP-NEXTJS theme' />
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />

        <meta property='og:title' content='Componentity NextJs WP Theme' />
        <meta property='og:description' content='Componentity Team has made a WP-NEXTJS theme' />
        <meta property='og:image' content='/seoindex.png' />
        <meta name='twitter:image' content='/seoindex.png' />
        <meta name='twitter:image:alt' content='Componentity.com' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@componentity' />
        <meta name='twitter:creator' content='@componentity' />
        <meta property='og:url' content='http://theme-blog.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='Componentity' />
      </Head>
      <div className='max-w-screen-2xl mx-auto p-5'>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-5 lg:gap-0 items-stretch justify-stretch'>
          <ServicesWidget services={services} />
          <HeroWidget about={about} />
          <ProjectsWidget projects={projects} />
          <TeamWidget team={team} />
          <div className='order-5 col-span-1 sm:col-span-6 lg:col-span-9 bg-indigo-500'>
            <ClientsWidget clients={clients} />
            <WebHostingWidget hosting={hosting} />
            <ProductsWidget products={products} />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  let args = '_embed=true'
  const clientsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/clients?${args}`)
  const clients = await clientsRes.json()

  const projectsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts?${args}&per_page=5`)
  const projects = await projectsRes.json()

  const productsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/nproject?${args}&per_page=2`)
  const products = await productsRes.json()

  const aboutRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/13?${args}`)
  const about = await aboutRes.json()

  const teamRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/awsm_team_member?${args}&per_page=20`
  )
  const team = await teamRes.json()

  const hostingRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/pages/2403?${args}`)
  const hosting = await hostingRes.json()

  const servicesRes = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/pages?${args}&per_page=3&categories=97`
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
      team
    }
  }
}
