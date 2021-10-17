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
        <Link href='https://f45training.af/'>
          <a target='_blank' rel='noopener'>
            <ImageComponentity
              src='https://www.etilaatroz.com/wp-content/uploads/2020/11/F45-fitness-training-afghanistan.jpg'
              classes={'w-full h-24'}
              alt='Advertisement Fitness'
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

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('lateststories', fetchProjects)
  await queryClient.prefetchInfiniteQuery('projects', fetchProjects)

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
    revalidate: 86400
  }
}

export default Index
