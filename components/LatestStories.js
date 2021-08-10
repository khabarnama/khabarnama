import PostSmall from './PostSmall'
import { useQuery, useQueryClient } from 'react-query'
import NotificationLoader from './skeleton/NotificationLoader'
import { useEffect } from 'react'

function LatestStories() {
  const { isLoading, error, data } = useQuery('lateststories', () =>
    fetch('https://aleteia.org/wp-json/wp/v2/posts').then((res) => res.json())
  )

  const queryClient = new useQueryClient()

  useEffect(() => {
    return async () => {
      await queryClient.prefetchQuery('lateststories', () =>
        fetch('https://aleteia.org/wp-json/wp/v2/posts').then((res) => res.json())
      )
    }
  }, [])

  if (isLoading) return <NotificationLoader />

  if (error)
    return <p className='text-red-800 font-semibold'>'An error has occurred: ' + error.message</p>
  return (
    <>
      <div className='border-b border-gray-100 py-5 ml-2 mb-2'>
        <h1 className='uppercase font-semibold mb-3'>Latest Stories</h1>
        <ul className='newsfeed text-gray-600'>
          {data.map((post) => (
            <PostSmall post={post} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default LatestStories
