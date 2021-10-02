import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Infiniteblog from './../components/Infiniteblog'

function Index() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <div className='ad p-5 hover:bg-purple-50 dark:hover:bg-gray-900'>
        <a href='#' target='_blank'>
          <img
            src='https://www.etilaatroz.com/wp-content/uploads/2020/11/F45-fitness-training-afghanistan.jpg'
            className='w-full'
          />
        </a>
      </div>
      <Infiniteblog />
    </>
  )
}

export default Index
