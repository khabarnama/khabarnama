import { useInfiniteQuery, useQueryClient } from 'react-query'
import { useState, useEffect } from 'react'
import BlogLoader from './skeleton/BlogLoader'
import SmallLoader from './skeleton/SmallLoader'
import Link from 'next/link'

const CategoryLink = ({ category }) => {
  return (
    <Link key={category.id} href={`/blog/category/${category.slug}`}>
      <a className='inline-block p-3 bg-gray-50 hover:bg-gray-800 hover:text-white relative flex gap-2'>
        <span>{category.name}</span>
        <span className='rounded-md bg-gray-700 text-white text-xs p-1 inline-block'>
          {category.count}
        </span>
      </a>
    </Link>
  )
}

export default function InfiniteCategories() {
  const [page, setPage] = useState(1)
  const [totalpages, setTotalpages] = useState(1)

  const queryClient = new useQueryClient()

  useEffect(() => {
    return async () => {
      await queryClient.prefetchInfiniteQuery(
        'categorieslist',
        () =>
          fetch(
            `https://old.khabarnama.net/wp-json/wp/v2/categories?order=desc&orderby=count&_fields=id,slug,name,count&per_page=100&page=${
              page + 1
            }`
          ).then((res) => res.json()),
        { keepPreviousData: true }
      )
    }
  }, [page])

  const fetchCategories = async () => {
    const res = await fetch(
      `https://old.khabarnama.net/wp-json/wp/v2/categories?order=desc&orderby=count&_fields=id,slug,name,count&per_page=100&page=` +
        (page == null ? 1 : page)
    )
    const totalPages = res.headers.get('X-WP-TotalPages')
    const posts = res.json()
    setPage(page + 1)
    setTotalpages(totalPages)
    return posts
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    status,
    isRefetching
  } = useInfiniteQuery('categorieslist', fetchCategories, {
    getNextPageParam: (lastPage) => {
      return page < totalpages ? page + 1 : undefined
    },
    keepPreviousData: true
  })

  // console.log('IS REFETCHING: ', isRefetching)
  // console.log('DATA: ', data)
  // console.log('isFetchingNextPage: ', isFetchingNextPage)

  return isLoading ? (
    <BlogLoader className='z-0 pl-5 md:pl-0 pr-5 w-full' />
  ) : status === 'error' ? (
    <p className='z-0 my-5 text-center text-indigo-800 font-semibold'>Error: {error.message}</p>
  ) : (
    <div className='z-0 relative'>
      {isRefetching && (
        <div className='flex flex-col items-center justify-center gap-2 text-semibold'>
          <div className='w-14 flex items-center justify-center'>
            <SmallLoader />
            <SmallLoader />
            <SmallLoader />
          </div>
        </div>
      )}
      <div className='p-5 flex flex-wrap items-center justify-start gap-2'>
        {data.pages.map((post, i) =>
          post.map((postitem, i) => <CategoryLink category={postitem} />)
        )}
      </div>
      <div className='flex items-center justify-center my-5'>
        <button
          className='rounded-full text-sm md:text-base px-6 py-2 bg-indigo-700 text-white hover:bg-indigo-800'
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'منتظر باشید...'
            : hasNextPage
            ? 'بارگزاری بیشتر'
            : 'بیشتر موجود نیست!'}
        </button>
      </div>
    </div>
  )
}
