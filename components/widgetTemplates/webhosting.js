import Link from 'next/link'
import SVGArrow from './../SVG/SVGArrow'
import ImageComponentity from '../ImageComponentity'

export default function WebHostingWidget({ hosting }) {
  const template = (hosting) => {
    return (
      <div className='bg-gray-600 grid grid-cols-1 sm:grid-cols-12'>
        <div className='p-8 sm:p-12 col-span-1 sm:col-span-8 text-white'>
          <h3 className='font-bold uppercase text-2xl lg:text-3xl'>
            16 YEARS IN WEB HOSTING & DOMAIN REGISTRATION.
          </h3>
          <div className='mt-6'>
            <div
              className='text-gray-300 line-clamp-3 mb-2'
              dangerouslySetInnerHTML={{ __html: hosting.excerpt.rendered }}
            />
            <Link href={`/technology#${hosting.slug}`}>
              <a
                aria-label='WebHosting Page'
                className='font-semibold hover:underline flex items-center group'
              >
                <span className='mr-2 group-hover:mr-3'>Read more</span>
                <SVGArrow classes='text-white w-5' />
              </a>
            </Link>
          </div>
        </div>
        <div className='bg-gray-100 col-span-1 sm:col-span-4 h-full'>
          {hosting.featured_media != 0 && hosting.featured_media != null && (
            <ImageComponentity
              src={hosting._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
              classes={'h-full filter grayscale'}
              alt={hosting.title.rendered}
            />
          )}
        </div>
      </div>
    )
  }
  return template(hosting)
}
