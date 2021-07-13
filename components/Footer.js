import Link from 'next/link'
import ImageComponentity from './../components/ImageComponentity'

export default function Footer({ topLeft, topRight, topRight2, footerAddress }) {
  return (
    <section className='bg-gray-600 p-8 grid sm:grid-cols-12'>
      <div className='p-5 col-span-1 sm:col-span-6 lg:col-span-3'>
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>{topLeft.name}</span>
          {topLeft.items.map((item) => {
            return (
              <Link key={item.id} href={`/${item.url.replace('https://iap.af/', '')}`}>
                <a
                  aria-label='Footer Link'
                  className='my-1 block text-gray-300 font-medium hover:text-white'
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
      <div className='p-5 col-span-1 sm:col-span-6 lg:col-span-3'>
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>{topRight.name}</span>
          {topRight.items.map((item) => {
            return (
              <Link key={item.id} href={`/${item.url.replace('https://iap.af/', '')}`}>
                <a
                  aria-label='Footer Link'
                  className='my-1 block text-gray-300 font-medium hover:text-white'
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
      <div className='p-5 col-span-1 sm:col-span-6 lg:col-span-3'>
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>{topRight2.name}</span>
          {topRight2.items.map((item) => {
            return (
              <Link key={item.id} href={`/${item.url.replace('https://iap.af/', '')}`}>
                <a
                  aria-label='Footer Link'
                  className='my-1 block text-gray-300 font-medium hover:text-white'
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
      <div className='p-5 col-span-1 sm:col-span-6 lg:col-span-3'>
        <a aria-label='logo' className='text-8xl font-bold text-white'>
          <img
            src='https://iap.af/wp-content/uploads/2021/07/IAP-Square-White-e1626172672699.png'
            className='mb-4'
            style={{ height: '133px', width: '130px' }}
            alt={'IAP LOGO'}
          />
        </a>
      </div>
    </section>
  )
}
