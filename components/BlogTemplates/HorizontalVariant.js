import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function HorizontalVariant({ blogs, classes }) {
  var dateFormat = require('dateformat')

  const First = ({ blog_pack }) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='sm:col-span-6 lg:col-span-5'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='blog link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={blog_pack.blog._embedded['wp:featuredmedia'][0].source_url}
                classes={classes.imageClasses}
                blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                placeholder='blur'
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`${classes.imageClasses} w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className='lg:pl-16'>
            {blog_pack.cats.map((cat) => {
              return (
                <div className='ml-1' key={cat.id}>
                  <Link href={`/category/${cat.slug}`}>
                    <a
                      aria-label='category'
                      className='text-xs text-indigo-600 uppercase font-medium mb-1 flex items-center hover:text-gray-900 dark:hover:text-gray-100 transition duration-500 ease-in-out'
                    >
                      {cat.name}
                    </a>
                  </Link>
                </div>
              )
            })}
            <Link href={`/blog/${blog_pack.blog.slug}`}>
              <a aria-label='blog link'>
                <h1
                  className='line-clamp-2 h-14 text-gray-900 dark:text-gray-200 font-bold text-lg mb-2 hover:text-indigo-600 dark:hover:text-indigo-600 transition duration-500 ease-in-out'
                  dangerouslySetInnerHTML={{ __html: blog_pack.blog.title.rendered }}
                />
              </a>
            </Link>
            <div
              className='line-clamp-3 text-gray-600 text-xs mt-2'
              dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
            />
          </div>
        </div>
      </div>
    )
  }
  const Last = ({ blog_pack }) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='sm:col-span-12 lg:col-span-3'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='blog link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
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
              <div className={`${classes.imageClasses} w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className=''>
            {blog_pack.cats.map((cat) => {
              return (
                <div className='ml-1' key={cat.id}>
                  <Link href={`/category/${cat.slug}`}>
                    <a
                      aria-label='category'
                      className='text-xs text-indigo-600 uppercase mb-1 font-medium flex items-center hover:text-gray-900 dark:hover:text-gray-100 transition duration-500 ease-in-out'
                    >
                      {cat.name}
                    </a>
                  </Link>
                </div>
              )
            })}
            <Link href={`/blog/${blog_pack.blog.slug}`}>
              <a aria-label='blog link'>
                <h1
                  className='text-gray-900 dark:text-gray-200 font-bold text-lg mb-2 hover:text-indigo-600 dark:hover:text-indigo-600 transition duration-500 ease-in-out'
                  dangerouslySetInnerHTML={{ __html: blog_pack.blog.title.rendered }}
                />
              </a>
            </Link>
            <div
              className='line-clamp-2 text-gray-600 text-xs mt-2'
              dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
            />
          </div>
        </div>
      </div>
    )
  }
  const Default = ({ blog_pack }) => {
    return (
      <div
        key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
        className='flex items-start gap-2'
      >
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='blog link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={
                  blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes
                    .aleteia_cecilia_top_ten
                    ? blog_pack.blog._embedded['wp:featuredmedia'][0].media_details.sizes
                        .aleteia_cecilia_top_ten.source_url
                    : blog_pack.blog._embedded['wp:featuredmedia'][0].source_url
                }
                classes={`w-20 h-20`}
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`w-20 h-20 bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='text-sm'>
          <p className='text-gray-600 text-xs mb-1'>
            {dateFormat(blog_pack.blog.date, 'mediumDate')}
          </p>
          <Link href={`/blog/${blog_pack.blog.slug}`}>
            <a aria-label='blog link'>
              <h1
                className='text-gray-900 dark:text-gray-100 font-semibold hover:text-indigo-600 dark:hover:text-indigo-600 leading-none transition duration-500 ease-in-out'
                dangerouslySetInnerHTML={{ __html: blog_pack.blog.title.rendered }}
              />
            </a>
          </Link>
        </div>
      </div>
    )
  }

  const middleBlogs = blogs.slice(1, -1)

  return (
    <>
      {
        <First
          key={blogs[0].blog.id + Math.random().toString(36).substring(7)}
          blog_pack={blogs[0]}
        />
      }
      {
        <div
          key={blogs[1].blog.id + Math.random().toString(36).substring(7)}
          className='sm:col-span-6 lg:col-span-4 flex flex-col justify-between gap-2'
        >
          {middleBlogs.map((blog_pack) => {
            return (
              <Default
                key={blog_pack.blog.id + Math.random().toString(36).substring(7)}
                blog_pack={blog_pack}
              />
            )
          })}
        </div>
      }
      {
        <Last
          key={blogs[5].blog.id + Math.random().toString(36).substring(7)}
          blog_pack={blogs[5]}
        />
      }
    </>
  )
}
