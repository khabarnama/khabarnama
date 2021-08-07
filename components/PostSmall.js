import Link from 'next/link'

function PostSmall({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a id={post.id} className='hover:text-red-800'>
        <li
          className='relative pl-6 pb-2 pt-2 transition duration-300 ease-in-out'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </a>
    </Link>
  )
}

export default PostSmall
