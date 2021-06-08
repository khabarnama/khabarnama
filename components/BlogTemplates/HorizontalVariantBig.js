import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function HorizontalVariantBig({ blogs, classes }) {
  const First = ({ blog_pack }) => {
    return (
      <div className='sm:col-span-6 lg:col-span-9'>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={blog_pack.blog._embedded['wp:featuredmedia'][0].source_url}
                classes='h-52 lg:h-96'
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`h-52 lg:h-96 w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='mt-3 text-center bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className=''>
            <a
              aria-label='link'
              className='text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out'
            >
              Election
            </a>
            <Link href={`/blog/${blog_pack.blog.slug}`}>
              <a
                aria-label='link'
                className='block text-gray-900 font-bold text-2xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out'
              >
                {blog_pack.blog.title.rendered}
              </a>
            </Link>
            <div
              className='text-gray-700 text-base mt-2 mx-5 sm:mx-10 line-clamp-2'
              dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
            />
          </div>
        </div>
      </div>
    )
  }

  const Default = ({ blog_pack }) => {
    return (
      <div className='mb-2'>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={blog_pack.blog._embedded['wp:featuredmedia'][0].source_url}
                classes={classes.imageClasses}
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`${classes.imageClasses} w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a
            aria-label='link'
            className='line-clamp-2 text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out'
          >
            {blog_pack.blog.title.rendered}
          </a>
        </Link>
      </div>
    )
  }

  const middleBlogs = blogs.slice(1)

  return (
    <>
      {<First key={blogs[0].blog.id} blog_pack={blogs[0]} />}
      {
        <div
          key={blogs[1].blog.id}
          className='sm:col-span-12 lg:col-span-3 flex flex-col justify-between'
        >
          {middleBlogs.map((blog_pack) => {
            return <Default key={blog_pack.blog.id} blog_pack={blog_pack} />
          })}
        </div>
      }
    </>
  )
}
