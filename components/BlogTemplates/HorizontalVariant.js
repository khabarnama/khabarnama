import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'

export default function HorizontalVariant({ blogs, section }) {
  const First = ({ blog_pack }) => {
    return (
      <div className='sm:col-span-6 lg:col-span-5'>
        <a aria-label='blog link'>
          <div
            className='h-56 bg-cover text-center overflow-hidden bg-gray-100'
            title='Woman holding a mug'
          ></div>
        </a>
        <div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className='lg:pl-16'>
            <a
              aria-label='blog link'
              className='text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out'
            >
              Fashion
            </a>
            <a
              aria-label='blog link'
              className='text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out'
            >
              The perfect summer sweater that you can wear!{' '}
            </a>
            <p className='text-gray-700 text-xs mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
              Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    )
  }
  const Last = ({ blog_pack }) => {
    return (
      <div className='sm:col-span-12 lg:col-span-3'>
        <a aria-label='blog link'>
          <div
            className='h-56 bg-cover text-center overflow-hidden bg-gray-100'
            title='Woman holding a mug'
          ></div>
        </a>
        <div className='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
          <div className=''>
            <a
              aria-label='blog link'
              className='text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out'
            >
              Fashion
            </a>
            <a
              aria-label='blog link'
              className='text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out'
            >
              The perfect summer sweater that you can wear!{' '}
            </a>
            <p className='text-gray-700 text-xs mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    )
  }
  const Default = ({ blog_pack }) => {
    return (
      <div className='flex items-start mb-3 pb-3'>
        <a aria-label='blog link' className='inline-block mr-3'>
          <div className='w-20 h-20 bg-cover bg-center bg-gray-100'></div>
        </a>
        <div className='text-sm'>
          <p className='text-gray-600 text-xs'>Aug 18</p>
          <a
            aria-label='blog link'
            className='text-gray-900 font-medium hover:text-indigo-600 leading-none'
          >
            Cristiano Ronaldo of Juventus FC looks dejected during the...
          </a>
        </div>
      </div>
    )
  }

  const middleBlogs = blogs.slice(1, -1)

  return (
    <>
      {<First key={blogs[0].blog.id} blog_pack={blogs[0]} />}
      {
        <div key={blogs[1].blog.id} className='sm:col-span-6 lg:col-span-4'>
          {middleBlogs.map((blog_pack) => {
            return <Default key={blog_pack.blog.id} blog_pack={blog_pack} />
          })}
        </div>
      }
      {<Last key={blogs[5].blog.id} blog_pack={blogs[5]} />}
    </>
  )
}
