import Link from 'next/link'
import ImageComponentity from './../ImageComponentity'
import YoutubeEmbed from './../youtubeEmbed'
import SVGYoutube from './../SVG/SVGYoutube'
import React, { useState } from 'react'

export default function HeroImagedWidget({ about }) {
  const [video, setVideo] = useState(false)
  const template = (about) => {
    return (
      <div className='order-2 sm:order-1 lg:order-2 col-span-1 sm:col-span-12 lg:col-span-6 bg-gray-100 text-center pb-5 sm:pb-0'>
        <div className='bg-gray-400 relative' style={{ height: '29.45rem' }}>
          {video ? (
            <YoutubeEmbed embedId={about.featuredvideo[0]} />
          ) : about.featured_media != 0 && about.featured_media != null ? (
            <ImageComponentity
              src={
                about._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url
              }
              classes={'h-full bg-gray-300'}
              alt={about.title.rendered}
            />
          ) : (
            <div className='sm:h-full bg-gray-300' />
          )}
          {!video && (
            <div
              className='rounded bg-white w-16 h-12 absolute inset-y-2/4 inset-x-2/4 transform -translate-y-1/2 -translate-x-1/2'
              onClick={() => setVideo(true)}
            >
              <SVGYoutube classes='cursor-pointer text-red-600 h-20 w-20 absolute inset-y-2/4 inset-x-2/4 transform -translate-y-1/2 -translate-x-1/2' />
            </div>
          )}
        </div>
        <Link href={`/${about.slug}`}>
          <a aria-label='about iap' className='hover:underline'>
            <h3 className='font-bold uppercase text-2xl p-4 px-5 my-2 sm:mt-5'>
              IAP is a technology-driven consulting firm in Afghanistan
            </h3>
          </a>
        </Link>
        <div
          className={`text-gray-700 sm:mb-6 lg:mb-2 line-clamp-4 px-5`}
          dangerouslySetInnerHTML={{ __html: about.excerpt.rendered }}
        />
      </div>
    )
  }
  return template(about)
}
