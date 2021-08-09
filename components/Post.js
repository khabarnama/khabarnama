import ImageComponentity from './ImageComponentity'
import Link from 'next/link'
import SVGClock from './../components/SVG/SVGClock'
import SVGCategory from './../components/SVG/SVGCategory'
import SVGTag from './../components/SVG/SVGTag'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share'

function Post({ post }) {
  var dateFormat = require('dateformat')

  return (
    <>
      <div
        id={post.id}
        className='blog hover:bg-purple-50 hover:bg-purple-50 overflow-hidden flex flex-col mx-auto px-5'
      >
        <div className='flex flex-col gap-3 p-7 pb-3'>
          <Link href={`/blog/${post.slug}`}>
            <a className='font-semibold text-xl md:text-2xl inline-block hover:text-red-700 transition duration-500 ease-in-out inline-block mb-2'>
              <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </a>
          </Link>
          <div className='flex justify-between'>
            {post._embedded.author.slug && (
              <div className='w-64 flex items-center'>
                <Link href={`/author/${post._embedded.author.slug}`}>
                  <a>
                    <ImageComponentity
                      classes='w-10 h-10 rounded-full mr-2'
                      src={
                        post._embedded.author.avatar_urls
                          ? post._embedded.author.avatar_urls['96']
                          : 'https://secure.gravatar.com/avatar/5ba47e3ab322d98712c8147821ede32a?s=4896&d=mm&r=g'
                      }
                      alt={`Author: ` + post._embedded.author.name}
                    />
                  </a>
                </Link>
                <div className='text-xs'>
                  <Link href={`/author/${post._embedded.author.slug}`}>
                    <a className='text-gray-900 font-semibold leading-none text-sm hover:text-red-700'>
                      {post._embedded.author.name}
                    </a>
                  </Link>
                  <p className='text-gray-600 text-xs'>{`@` + post._embedded.author.slug}</p>
                </div>
              </div>
            )}
            <div className='share flex gap-2 items-center text-gray-600'>
              <TwitterShareButton url={`https://reporterly.net/blog/${post.slug}`}>
                <TwitterIcon size={24} round={false} />
              </TwitterShareButton>
              <LinkedinShareButton url={`https://reporterly.net/blog/${post.slug}`}>
                <LinkedinIcon size={24} round={false} />
              </LinkedinShareButton>
              <FacebookShareButton url={`https://reporterly.net/blog/${post.slug}`}>
                <FacebookIcon size={24} round={false} />
              </FacebookShareButton>
            </div>
          </div>
        </div>
        <div className='relative'>
          {post.featured_media != 0 && post.featured_media != null && (
            <ImageComponentity
              src={post._embedded['wp:featuredmedia'][0].source_url}
              classes={'h-72 bg-gray-300 rounded-xl overflow-hidden'}
              alt={post.title.rendered}
            />
          )}
        </div>
        <div className='p-7 pb-5 border-b border-gray-100'>
          <div
            className='text-gray-700 text-base leading-8'
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <div className='text-sm font-regular text-gray-900 flex mt-4 flex items-center justify-between'>
            <div className='flex'>
              <span className='mr-5 flex flex-row items-center'>
                <SVGClock />
                <span className='ml-1'>{dateFormat(post.date_gmt, 'mmm dS')}</span>
              </span>
              {post._embedded['wp:term'].map((termArray) =>
                termArray.map(
                  (term, index) =>
                    index < 3 && (
                      <Link
                        href={
                          (term.taxonomy == 'category' ? '/category' : '/tag') + `/${term.slug}`
                        }
                      >
                        <a className='mr-3 flex items-center hover:text-red-700'>
                          {term.taxonomy == 'category' ? <SVGCategory /> : <SVGTag />}
                          <span className='ml-1' dangerouslySetInnerHTML={{ __html: term.name }} />
                        </a>
                      </Link>
                    )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
