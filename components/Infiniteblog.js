import { useInfiniteQuery, useQueryClient } from 'react-query'
import { useState, useEffect } from 'react'
import Post from './Post'
import ResponsiveArticle from './skeleton/ResponsiveArticle'

export default function Infinteblog({ type, type_id }) {
  let args = ''
  if (type && type_id) {
    args = `&${type}=${type_id}`
  }
  const [page, setPage] = useState(1)
  const [totalpages, setTotalpages] = useState(1)

  const queryClient = new useQueryClient()

  useEffect(() => {
    return async () => {
      await queryClient.prefetchInfiniteQuery('projects', () =>
        fetch(`https://khabarnama.net/wp-json/wp/v2/posts?_embed=true&per_page=4${args}`).then(
          (res) => res.json()
        )
      )
    }
  }, [])

  const fetchProjects = async ({ pageParam = page }) => {
    const res = await fetch(
      `https://khabarnama.net/wp-json/wp/v2/posts?_embed=true${args}&per_page=2&page=` +
        pageParam
    )
    const totalPages = res.headers.get('X-WP-TotalPages')
    const posts = res.json()
    setPage(page + 1)
    setTotalpages(totalPages)
    return posts
  }

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery('projects', fetchProjects, {
      getNextPageParam: (lastPage) => {
        return page < totalpages ? page + 1 : undefined
      }
    })

  return status === 'loading' ? (
    <ResponsiveArticle className='pr-5' />
  ) : status === 'error' ? (
    <p className='my-5 text-center text-red-800 font-semibold'>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((post, i) => post.map((postitem, i) => <Post post={postitem} />))}
      <div className='flex items-center justify-center my-5'>
        <button
          className='rounded-full text-sm md:text-base px-6 py-2 bg-red-800 text-white hover:bg-red-700'
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}
