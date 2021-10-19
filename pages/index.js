import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Infiniteblog from './../components/Infiniteblog'
import ImageComponentity from './../components/ImageComponentity'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { dehydrate, QueryClient } from 'react-query'

function Index() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <NextSeo
        title='رسانه ای برای نسل به هم پیوسته!'
        description='خبرنامه رسانه‌ای برای بازتاب رویدادها، وقایع و اتفاقات از طریق آنلاین است. این رسانه با گزارش‌های تحلیلی-تحقیقی خود در راستای ارائه روایت واقعی ایجاد شده است.'
        canonical='https://khabarnama.net'
        titleTemplate='خبرنامه | %s'
        robotsProps={{
          maxSnippet: 'max-snippet:-1',
          maxImagePreview: 'max-image-preview:large',
          maxVideoPreview: 'max-video-preview:-1'
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/icons/logo-dark.png'
          },
          {
            rel: 'apple-touch-icon',
            href: '/icons/logo-dark.png',
            sizes: '76x76'
          },
          {
            rel: 'manifest',
            href: '/manifest.json'
          }
        ]}
        openGraph={{
          title: 'خبرنامه | رسانه ای برای نسل به هم پیوسته',
          description:
            "'خبرنامه رسانه‌ای برای بازتاب رویدادها، وقایع و اتفاقات از طریق آنلاین است. این رسانه با گزارش‌های تحلیلی-تحقیقی خود در راستای ارائه روایت واقعی ایجاد شده است.'",
          url: `https://khabarnama.net/`,
          type: 'website',
          locale: 'fa_IR',
          site_name: 'خبرنامه',
          images: [
            {
              url: '/icons/seoindex.png',
              width: 1200,
              height: 630,
              alt: 'خبرنامه'
            }
          ]
        }}
        twitter={{
          handle: '@khabarnamaaf',
          site: '@khabarnamaaf',
          cardType: 'summary_large_image'
        }}
      />
      <div className='ad p-5 hover:bg-purple-50 dark:hover:bg-gray-900'>
        <Link href='https://codenawis.com/'>
          <a target='_blank' rel='noopener'>
            <ImageComponentity
              src='https://old.khabarnama.net/wp-content/uploads/2021/10/ads.png'
              classes={'w-full h-10 sm:h-16 md:h-28'}
              alt='CodeNawis - website design and development'
              title='CodeNawis - website design and development'
            />
          </a>
        </Link>
      </div>
      <Infiniteblog key={'projects'} />
    </>
  )
}

const fetchProjects = async () => {
  const res = await fetch(`https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true`)
  const posts = res.json()
  return posts
}

const fetchKhabarnama = async () => {
  const res = await fetch(`https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&author=86`)
  const posts = res.json()
  return posts
}
const fetchTop = async () => {
  const res = await fetch(
    `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&categories=9154`
  )
  const posts = res.json()
  return posts
}
const fetchTrip = async () => {
  const res = await fetch(
    `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&categories=9153`
  )
  const posts = res.json()
  return posts
}
const fetchHealth = async () => {
  const res = await fetch(
    `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&categories=9152`
  )
  const posts = res.json()
  return posts
}
const fetchSuccess = async () => {
  const res = await fetch(
    `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&categories=9151`
  )
  const posts = res.json()
  return posts
}
const fetchLifestyle = async () => {
  const res = await fetch(
    `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&categories=9150`
  )
  const posts = res.json()
  return posts
}
const fetchWork = async () => {
  const res = await fetch(
    `https://old.khabarnama.net/wp-json/wp/v2/posts?_embed=true&categories=9149`
  )
  const posts = res.json()
  return posts
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('lateststories', fetchProjects)
  await queryClient.prefetchInfiniteQuery('projects', fetchProjects)
  await queryClient.prefetchInfiniteQuery('author86', fetchKhabarnama)
  await queryClient.prefetchInfiniteQuery('categories9154', fetchTop)
  await queryClient.prefetchInfiniteQuery('categories9153', fetchTrip)
  await queryClient.prefetchInfiniteQuery('categories9152', fetchHealth)
  await queryClient.prefetchInfiniteQuery('categories9151', fetchSuccess)
  await queryClient.prefetchInfiniteQuery('categories9150', fetchLifestyle)
  await queryClient.prefetchInfiniteQuery('categories9149', fetchWork)

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
    revalidate: 86400
  }
}

export default Index
