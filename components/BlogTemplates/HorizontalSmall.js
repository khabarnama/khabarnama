import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function HorizontalSmall({ blogs, classes }) {
  const template = (blog_pack) => {
    return (
      <div key={blog_pack.blog.id} className='flex flex-col justify-between border-b'>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='heading'>
            <h1
              aria-label='heading'
              className='line-clamp-3 h-12 text-gray-900 dark:text-gray-200 font-semibold hover:text-indigo-600 dark:hover:text-indigo-600 transition duration-500 ease-in-out'
            >
              {blog_pack.blog.title.rendered}
            </h1>
          </a>
        </Link>
        <div className='flex items-between justify-between my-3'>
          <div className='text-xs w-2/3 flex flex-col justify-between'>
            <div
              className='text-gray-400 line-clamp-3 h-12'
              dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
            />
            <span className='text-gray-600 text-xs'>{blog_pack.blog.date}</span>
          </div>
          <Link href={`/blog/${blog_pack.blog.slug}`}>
            <a aria-label='image' className='inline-block ml-2'>
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
        </div>
      </div>
    )
  }
  return blogs.map((blog_pack) => {
    return template(blog_pack)
  })
}
