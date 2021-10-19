import { useRouter } from 'next/router'
import BlogLoader from './../components/skeleton/BlogLoader'
import InfiniteCategories from './../components/InfiniteCategories'
import { dehydrate, QueryClient } from 'react-query'

function Archive() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <BlogLoader className='w-full' />
  }

  return <InfiniteCategories key={'categorieslist'} />
}

const fetchCategories = async () => {
  const res = await fetch(
    `https://old.khabarnama.net/wp-json/wp/v2/categories?order=desc&orderby=count&_fields=id,slug,name,count&per_page=100&page=1`
  )
  const categories = res.json()
  return categories
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery('categorieslist', fetchCategories)

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    }
  }
}

export default Archive
