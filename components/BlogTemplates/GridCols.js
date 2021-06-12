import ImageComponentity from '../ImageComponentity'
import SVGCategory from '../SVG/SVGCategory'
import SVGClock from '../SVG/SVGClock'
import Link from 'next/link'

export default function GridCols({ blogs, classes }) {
  const template = (blog_pack) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='infinite-loader-item rounded overflow-hidden flex flex-col justify-start'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='Blog post Image'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media != null ? (
              <ImageComponentity
                src={
                  blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                    ? blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                        .source_url
                    : blog_pack.blog._embedded['wp:featuredmedia'][0].source_url
                }
                classes={classes.imageClasses}
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`${classes.imageClasses} bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='mt-2'>
          <Link href={`/blog/${blog_pack.blog.slug}`}>
            <a
              aria-label='Blog post'
              className='dark:text-gray-50 dark:hover:text-indigo-600 hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2'
            >
              <h1 className='text-md font-semibold line-clamp-2 h-12 mb-2'>
                {blog_pack.blog.title.rendered}
              </h1>
            </a>
          </Link>
          <div className='py-5 text-sm font-regular text-gray-900 dark:text-gray-300 flex justify-between items-center'>
            <span className='mr-3 flex flex-row gap-1 items-center'>
              <SVGClock />
              <span className='ml-1'>{blog_pack.blog.date}</span>
            </span>
            <span className='flex flex-row gap-1 items-center hover:text-indigo-600 dark:hover:text-indigo-600 transition duration-500 ease-in-out'>
              <SVGCategory />
              {blog_pack.cats.map((cat) => {
                return (
                  <div className='ml-1' key={cat.id}>
                    <Link href={`/category/${cat.slug}`}>
                      <a aria-label='Category'>{cat.name}</a>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div>
        </div>
        <hr />
      </div>
    )
  }
  return blogs.map((blog_pack) => {
    return template(blog_pack)
  })
}
