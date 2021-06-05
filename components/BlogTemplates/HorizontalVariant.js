import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function HorizontalVariant({ blogs, section }) {
  const First = ({ blog_pack }) => {
    return (
      <div className='sm:col-span-6 lg:col-span-5'>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='blog link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={blog_pack.blog._embedded['wp:featuredmedia'][0].source_url}
                classes={section.imageClasses}
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`${section.heightClass} w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className='lg:pl-16'>
            {blog_pack.cats.map((cat) => {
              return (
                <div className='ml-1' key={cat.id}>
                  <Link href={`/category/${cat.slug}`}>
                    <a
                      aria-label='category'
                      className='text-xs text-indigo-600 uppercase font-medium mb-1 flex items-center hover:text-gray-900 transition duration-500 ease-in-out'
                    >
                      {cat.name}
                    </a>
                  </Link>
                </div>
              )
            })}
            <Link href={`/blog/${blog_pack.blog.slug}`}>
              <a
                aria-label='blog link'
                className='line-clamp-2 h-14 text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out'
              >
                {blog_pack.blog.title.rendered}
              </a>
            </Link>
            <p
              className='line-clamp-3 text-gray-700 text-xs mt-2'
              dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
            />
          </div>
        </div>
      </div>
    )
  }
  const Last = ({ blog_pack }) => {
    return (
      <div className='sm:col-span-12 lg:col-span-3'>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='blog link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={blog_pack.blog._embedded['wp:featuredmedia'][0].source_url}
                classes={section.imageClasses}
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`${section.heightClass} w-full bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className=''>
            {blog_pack.cats.map((cat) => {
              return (
                <div className='ml-1' key={cat.id}>
                  <Link href={`/category/${cat.slug}`}>
                    <a
                      aria-label='category'
                      className='text-xs text-indigo-600 uppercase mb-1 font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out'
                    >
                      {cat.name}
                    </a>
                  </Link>
                </div>
              )
            })}
            <Link href={`/blog/${blog_pack.blog.slug}`}>
              <a
                aria-label='blog link'
                className='text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out'
              >
                {blog_pack.blog.title.rendered}
              </a>
            </Link>
            <p
              className='line-clamp-2 text-gray-700 text-xs mt-2'
              dangerouslySetInnerHTML={{ __html: blog_pack.blog.excerpt.rendered }}
            />
          </div>
        </div>
      </div>
    )
  }
  const Default = ({ blog_pack }) => {
    return (
      <div className='flex items-start gap-2'>
        <Link href={`/blog/${blog_pack.blog.slug}`}>
          <a aria-label='blog link'>
            {blog_pack.blog.featured_media != 0 && blog_pack.blog.featured_media ? (
              <ImageComponentity
                src={blog_pack.blog._embedded['wp:featuredmedia'][0].source_url}
                classes={`w-20 h-20`}
                alt={blog_pack.blog.title.rendered}
              />
            ) : (
              <div className={`w-20 h-20 bg-gray-100`}></div>
            )}
          </a>
        </Link>
        <div className='text-sm'>
          <p className='text-gray-600 text-xs'>{blog_pack.blog.date}</p>
          <Link href={`/blog/${blog_pack.blog.slug}`}>
            <a
              aria-label='blog link'
              className='text-gray-900 font-medium hover:text-indigo-600 leading-none'
            >
              {blog_pack.blog.title.rendered}
            </a>
          </Link>
        </div>
      </div>
    )
  }

  const middleBlogs = blogs.slice(1, -1)

  return (
    <>
      {<First key={blogs[0].blog.id} blog_pack={blogs[0]} />}
      {
        <div
          key={blogs[1].blog.id}
          className='sm:col-span-6 lg:col-span-4 flex flex-col justify-between'
        >
          {middleBlogs.map((blog_pack) => {
            return <Default key={blog_pack.blog.id} blog_pack={blog_pack} />
          })}
        </div>
      }
      {<Last key={blogs[5].blog.id} blog_pack={blogs[5]} />}
    </>
  )
}
