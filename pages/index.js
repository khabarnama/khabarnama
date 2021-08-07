import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import { useInfiniteQuery } from 'react-query'
import react, { useState } from 'react'
import Post from './../components/Post'

function Projects() {
  const [page, setPage] = useState(1)
  const [totalpages, setTotalpages] = useState(1)

  const fetchProjects = async ({ pageParam = page }) => {
    const res = await fetch(
      'http://reporterly.net/wp-json/wp/v2/posts?_embed=true&per_page=2&page=' + pageParam
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
    <ResponsiveArticle />
  ) : status === 'error' ? (
    <p className='my-5 text-center text-red-800 font-semibold'>Error: {error.message}</p>
  ) : (
    <>
      {data.pages.map((post, i) => post.map((postitem, i) => <Post post={postitem} />))}
      <div className='flex items-center justify-center my-5'>
        <button
          className='rounded-full px-4 py-2 bg-red-800 text-white hover:bg-red-700'
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

function Index() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <div className='ad p-5 hover:bg-purple-50'>
        <a href='#' target='_blank'>
          <img
            src='https://www.etilaatroz.com/wp-content/uploads/2020/11/F45-fitness-training-afghanistan.jpg'
            className='w-full'
          />
        </a>
      </div>
      <Projects />
    </>
  )
}

export default Index
