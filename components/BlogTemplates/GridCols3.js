import ImageComponentity from '../ImageComponentity'
import SVGCategory from '../SVG/SVGCategory'
import SVGClock from '../SVG/SVGClock'
import Link from 'next/link'

export default function GridCols3({ blogs, classes }) {
  const First3 = ({ blog_pack }) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='flex items-start justify-start gap-3 pb-2 border-b'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='image' className='inline-block ml-2'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={
                  blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes
                    .aleteia_cecilia_top_ten
                    ? blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes
                        .aleteia_cecilia_top_ten.source_url
                    : blog_pack.blog._embedded['wp:featuredmedia'][0].source_url
                }
                classes='w-24 h-24'
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`${classes.imageClasses} w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div>
          <span className='text-gray-400 text-xs mb-2'>{blog_pack.blog.date}</span>
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
        </div>
      </div>
    )
  }

  const Default = ({ blog_pack }) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='infinite-loader-item rounded overflow-hidden col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-start'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='Blog post Image'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media != null ? (
              <ImageComponentity
                src={
                  blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes.medium
                    ? blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes
                        .aleteia_cecilia_top_ten.source_url
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
    )
  }

  const first3Blogs = blogs.slice(0, 3)

  const middleBlogs = blogs.slice(3)

  return (
    <>
      {
        <div
          key={blogs[1].blog.id}
          className='col-span-12 lg:col-span-4 flex flex-col justify-between'
        >
          {first3Blogs.map((blog_pack) => {
            return (
              <First3
                key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
                blog_pack={blog_pack}
              />
            )
          })}
        </div>
      }
      {middleBlogs.map((blog_pack) => {
        return (
          <Default
            key={blogs[0].blog.id + Math.random().toString(36).substring(7)}
            blog_pack={blog_pack}
          />
        )
      })}
    </>
  )
}
