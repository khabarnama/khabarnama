import Link from 'next/link'
import SVGArrow from './../SVG/SVGArrow'

export default function ServicesWidget({ services, isLink = true }) {
  const template = (services) => {
    let bgColor = (index) => {
      switch (index) {
        case 0:
          return 'bg-gray-100'
        case 1:
          return 'bg-gray-300'
        case 2:
          return 'bg-gray-600 text-white'

        default:
          return 'bg-gray-100'
      }
    }
    return services.map((service, index) => {
      return (
        <div
          key={service.id}
          className={` ${bgColor(
            index
          )} col-span-1 sm:col-span-4 p-8 flex flex-col justify-between flex-1`}
        >
          {isLink ? (
            <Link href={`/${service.slug}`}>
              <a aria-label='Services' className='hover:underline'>
                <h3
                  className='font-bold uppercase text-2xl'
                  dangerouslySetInnerHTML={{ __html: service.title.rendered }}
                />
              </a>
            </Link>
          ) : (
            <h3
              className='font-bold uppercase text-2xl'
              dangerouslySetInnerHTML={{ __html: service.title.rendered }}
            />
          )}
          <div className='mt-6'>
            <div
              className={` ${index <= 1 ? 'text-gray-700' : 'text-gray-200'} mb-2 line-clamp-3`}
              dangerouslySetInnerHTML={{ __html: service.excerpt.rendered }}
            />
            {isLink && (
              <Link href={`/${service.slug}`}>
                <a
                  aria-label='Project'
                  className='font-semibold hover:underline flex items-center group'
                >
                  <span className='mr-2 group-hover:mr-3'>find more </span>
                  <SVGArrow classes={`w-4 ${index > 1 && 'text-white'} `} />
                </a>
              </Link>
            )}
          </div>
        </div>
      )
    })
  }
  return template(services)
}
