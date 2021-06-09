import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'
import SVGCategory from '../SVG/SVGCategory'
import SVGClock from '../SVG/SVGClock'

export default function GridCols2({ blogs, classes }) {
  const template = (blog_pack, index) => {
    return (
      <div
        key={blog_pack.blog.id}
        className={`flex flex-col justify-between gap-5 md:gap-10 sm:col-span-6 w-full ${
          index < 2 ? '' : 'md:col-span-6 lg:col-span-3'
        }`}
      >
        <div
          key={blog_pack.blog.id}
          className='infinite-loader-item rounded overflow-hidden flex flex-col justify-start'
        >
          <Link href={`/blog/${blog_pack.blog.slug}`}>
            <a aria-label='Blog post Image'>
              {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media != null ? (
                <ImageComponentity
                  src={blog_pack.blog._embedded['wp:featuredmedia'][0].source_url}
                  classes={index < 2 ? 'h-80' : classes.imageClasses}
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
            {index < 2 && (
              <div
                className='text-sm text-gray-400 line-clamp-3 h-16'
                dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
              />
            )}
            <div className='py-5 text-sm font-regular text-gray-900 dark:text-gray-300 flex justify-between items-center'>
              <span className='mr-3 flex flex-row gap-1 items-center'>
                <SVGClock />
                <span className='ml-1'>{blog_pack.blog.date}</span>
              </span>
              <span className='flex flex-row gap-1 items-center hover:text-indigo-600 dark:hover:text-indigo-600'>
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
      </div>
    )
  }

  return blogs.map((blog_pack, index) => {
    return template(blog_pack, index)
  })
}
