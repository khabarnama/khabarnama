import Link from 'next/link'
import SVGArrow from './../SVG/SVGArrow'

export default function WebHostingWidget({ hosting }) {
  const template = (hosting) => {
    return (
      <div className='bg-gray-600 grid grid-cols-1 lg:grid-cols-12'>
        <div className='p-12 col-span-1 lg:col-span-8 text-white'>
          <h3 className='font-bold uppercase text-3xl'>
            16 YEARS IN WEB HOSTING & DOMAIN REGISTRATION.
          </h3>
          <div className='mt-6'>
            <div
              className='text-gray-300 line-clamp-3 mb-2'
              dangerouslySetInnerHTML={{ __html: hosting.excerpt.rendered }}
            />
            <Link href={`/${hosting.slug}`}>
              <a
                aria-label='WebHosting Page'
                className='font-semibold hover:underline flex items-center group'
              >
                <span className='mr-2 group-hover:mr-3'>Contact Us</span>
                <SVGArrow classes='text-white w-5' />
              </a>
            </Link>
          </div>
        </div>
        <div className='bg-gray-100 col-span-1 lg:col-span-4 h-72'>
          {hosting.featured_media != 0 && hosting.featured_media != null && (
            <ImageComponentity
              src={hosting._embedded['wp:featuredmedia'][0].source_url}
              alt={hosting.title.rendered}
            />
          )}
        </div>
      </div>
    )
  }
  return template(hosting)
}
