function PostSmall({ post }) {
  return (
    <>
      <a id={post.id} href='#' className='hover:text-red-800'>
        <li
          className='relative pl-6 pb-2 pt-2 transition duration-300 ease-in-out'
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </a>
    </>
  )
}

export default PostSmall
