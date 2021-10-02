import Link from 'next/link'

function PostSmall({ post }) {
  return (
    <Link href={`/${post.slug}`}>
      <a id={post.id} className='dark:text-gray-400 dark:hover:text-red-600 hover:text-red-800'>
        <li
          className='relative pr-6 pb-2 pt-2 transition duration-300 ease-in-out'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </a>
    </Link>
  )
}

export default PostSmall
