import Link from 'next/link'
import ImageComponentity from './../ImageComponentity'
import YoutubeEmbed from './../youtubeEmbed'
import React, { useState } from 'react'

export default function HeroImagedWidget({ about }) {
  const [video, setVideo] = useState(false)
  const template = (about) => {
    return (
      <div className='order-2 sm:order-1 lg:order-2 col-span-1 sm:col-span-12 lg:col-span-6 bg-gray-100 text-center'>
        <div className='bg-gray-400 relative' style={{ height: '29.45rem' }}>
          {video ? (
            <YoutubeEmbed embedId={about.featuredvideo[0]} />
          ) : about.featured_media != 0 && about.featured_media != null ? (
            <ImageComponentity
              src={about._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
              classes={'h-full bg-gray-300 filter grayscale'}
              alt={about.title.rendered}
            />
          ) : (
            <div className='sm:h-full bg-gray-300' />
          )}
          {!video && (
            <div
              className='cursor-pointer bg-gray-900 h-24 w-24 rounded-full absolute inset-y-2/4 inset-x-2/4 transform -translate-y-1/2 -translate-x-1/2'
              onClick={() => setVideo(true)}
            />
          )}
        </div>
        <Link href={`/${about.slug}`}>
          <a aria-label='about iap' className='hover:underline'>
            <h3 className='font-bold uppercase text-3xl p-4 sm:w-4/5 mx-auto my-5 sm:mt-8'>
              IAP IS A reliable technology and media partner.
            </h3>
          </a>
        </Link>
      </div>
    )
  }
  return template(about)
}
