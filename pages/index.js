import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Infiniteblog from './../components/Infiniteblog'
import ImageComponentity from './../components/ImageComponentity'
import Link from 'next/link'
import Head from 'next/head'
function Index() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <Head>
        <title>خبرنامه</title>
        <meta
          name='description'
          itemprop='description'
          content='خبرنامه رسانه‌ای برای بازتاب رویدادها، وقایع و اتفاقات از طریق آنلاین است. این رسانه با گزارش‌های تحلیلی-تحقیقی خود در راستای ارائه روایت واقعی ایجاد شده است.'
        />

        <meta name='keywords' itemprop='keywords' content='Afghanistan, khabarnama, خبرنامه' />

        <link rel='canonical' href='http://khabarnama.net/' />
        <meta property='og:title' content='رسانه‌ای برای نسل به هم‌پیوسته' />
        <meta property='og:url' content='http://khabarnama.net/' />
        <meta
          property='og:image'
          content='http://khabarnama.net/wp-content/uploads/2016/02/logo.jpg'
        />
        <meta property='og:site_name' content='خبرنامه' />
        <meta
          property='og:description'
          content='خبرنامه رسانه‌ای برای بازتاب رویدادها، وقایع و اتفاقات از طریق آنلاین است. این رسانه با گزارش‌های تحلیلی-تحقیقی خود در راستای ارائه روایت واقعی ایجاد شده است.'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='رسانه‌ای برای نسل به هم‌پیوسته' />
        <meta
          name='twitter:description'
          content='خبرنامه رسانه‌ای برای بازتاب رویدادها، وقایع و اتفاقات از طریق آنلاین است. این رسانه با گزارش‌های تحلیلی-تحقیقی خود در راستای ارائه روایت واقعی ایجاد شده است.'
        />
        <meta
          name='twitter:image'
          content='http://khabarnama.net/wp-content/uploads/2016/02/logo.jpg'
        />
        <meta
          itemprop='image'
          content='http://khabarnama.net/wp-content/uploads/2016/02/logo.jpg'
        />
      </Head>
      <div className='ad p-5 hover:bg-purple-50 dark:hover:bg-gray-900'>
        <Link href='https://f45training.af/'>
          <a target='_blank'>
            <ImageComponentity
              src='https://www.etilaatroz.com/wp-content/uploads/2020/11/F45-fitness-training-afghanistan.jpg'
              classes={'w-full'}
              alt='Advertisement Fitness'
            />
          </a>
        </Link>
      </div>
      <Infiniteblog />
    </>
  )
}

export default Index
