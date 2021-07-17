import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'
import React, { useState } from 'react'
import SVGArrow from './../SVG/SVGArrow'

export default function TeamWidget({ team }) {
  const CarouselSlide = ({ index, activeIndex, slide }) => {
    return (
      <li className={`${index == activeIndex ? 'block' : 'hidden'}`}>
        {slide.featured_media != 0 && slide.featured_media != null ? (
          <ImageComponentity
            src={
              slide._embedded['wp:featuredmedia'][0].media_details.sizes.awsm_team
                ? slide._embedded['wp:featuredmedia'][0].media_details.sizes.awsm_team.source_url
                : slide._embedded['wp:featuredmedia'][0].source_url
            }
            classes={'sm:h-96 bg-gray-300'}
            alt={slide.title.rendered}
          />
        ) : (
          <div className='sm:h-96 bg-gray-300' />
        )}
        <div className='px-8 pt-8 pb-3 flex flex-col justify-between'>
          <span className='uppercase text-xs mb-1'>{slide.designation[0]}</span>
          <Link href={`/team#${slide.slug}`}>
            <a
              aria-label='Team member'
              className='font-semibold hover:underline flex items-center group'
            >
              <h3
                className='font-bold uppercase text-2xl'
                dangerouslySetInnerHTML={{ __html: slide.title.rendered }}
              />
            </a>
          </Link>
          <div className='mt-2'>
            <div
              className='text-gray-700 mb-2 line-clamp-4'
              dangerouslySetInnerHTML={{
                __html: slide.excerpt ? slide.excerpt[0] : slide.content.rendered
              }}
            />
          </div>
        </div>
      </li>
    )
  }

  // Carousel wrapper component
  const Carousel = ({ slides }) => {
    const [active, setActive] = useState(0)

    const goToPrevSlide = () => {
      let index = active
      let slidesLength = slides.length

      if (index < 1) {
        index = slidesLength
      }

      --index

      setActive(index)
    }

    const goToNextSlide = () => {
      let index = active
      let slidesLength = slides.length - 1

      if (index === slidesLength) {
        index = -1
      }

      ++index

      setActive(index)
    }

    return (
      <div className='hidden lg:inline-block order-4 col-span-1 sm:col-span-6 lg:col-span-3 bg-gray-100'>
        <div className='p-8 py-9'>
          <Link href='/team'>
            <a aria-label='link'>
              <h3 className='uppercase font-bold text-2xl'>Core Team</h3>
            </a>
          </Link>
        </div>
        <ul className='carousel__slides'>
          {slides.map((slide, index) => (
            <CarouselSlide key={index} index={index} activeIndex={active} slide={slide} />
          ))}
        </ul>
        <div className='mx-8 flex justify-between items-center'>
          <span
            onClick={() => goToPrevSlide()}
            className='bg-gray-900 py-1 px-4 text-white group cursor-pointer flex items-center'
          >
            <SVGArrow classes={'w-4 text-white mr-2 group-hover:-ml-1 transform rotate-180'} />{' '}
            <span>Prev</span>
          </span>
          <span
            onClick={() => goToNextSlide()}
            className='bg-gray-900 py-1 px-4 text-white group cursor-pointer flex items-center'
          >
            <span>Next</span>
            <SVGArrow classes={'w-4 text-white ml-2 group-hover:-mr-1'} />
          </span>
        </div>
      </div>
    )
  }
  return <Carousel slides={team} />
}
