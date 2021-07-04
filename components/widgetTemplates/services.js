import Link from 'next/link'
import SVGArrow from './../SVG/SVGArrow'

export default function ServicesWidget({ services }) {
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
    return (
      <div className='order-1 sm:order-2 lg:order-1 col-span-1 sm:col-span-6 lg:col-span-3 flex flex-col justify-between'>
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              className={` ${bgColor(index)} p-8 flex flex-col justify-between flex-1`}
            >
              <Link href={`/${service.slug}`}>
                <a aria-label='Services' className='hover:underline'>
                  <h3
                    className='font-bold uppercase text-2xl'
                    dangerouslySetInnerHTML={{ __html: service.title.rendered }}
                  />
                </a>
              </Link>
              <div className='mt-6'>
                <div
                  className={` ${index <= 1 ? 'text-gray-700' : 'text-gray-200'} mb-2 line-clamp-3`}
                  dangerouslySetInnerHTML={{ __html: service.excerpt.rendered }}
                />
                <Link href={`/${service.slug}`}>
                  <a
                    aria-label='Project'
                    className='font-semibold hover:underline flex items-center group'
                  >
                    <span className='mr-2 group-hover:mr-3'>find more </span>
                    <SVGArrow classes={`w-4 ${index > 1 && 'text-white'} `} />
                  </a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return template(services)
}
