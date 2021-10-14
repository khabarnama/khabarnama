import Link from 'next/link'

function PostSmall({ post }) {
  let date = post.date_gmt.split('-')
  let year = date[0]
  let month = date[1]
  let day = date[2].substr(0, 1)
  return (
    <Link href={`/blog/${year}/${month}/${day}/${post.slug}`}>
      <a
        id={post.id}
        className='dark:text-gray-400 dark:hover:text-indigo-800 hover:text-indigo-800'
      >
        <li
          className='relative pr-6 pb-2 pt-2 transition duration-300 ease-in-out'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </a>
    </Link>
  )
}

export default PostSmall
