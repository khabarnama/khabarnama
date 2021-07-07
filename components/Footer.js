import Link from 'next/link'

export default function Footer({
  bottomLeft,
  bottomRight,
  topLeft,
  topRight,
  topRight2,
  bottomRight2,
  footerAddress
}) {
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
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>
            {bottomLeft.name}
          </span>
          {bottomLeft.items.map((item) => {
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
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>
            {bottomRight.name}
          </span>
          {bottomRight.items.map((item) => {
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
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>
            {bottomRight2.name}
          </span>
          {bottomRight2.items.map((item) => {
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
        <a href='#' className='text-8xl font-bold text-white'>
          IAP
        </a>
        <div className='mb-10'>
          {footerAddress.items.map((item) => {
            return (
              <Link key={item.id} href={`${item.url.replace('https://iap.af/', '')}`}>
                <a
                  aria-label='Footer Link'
                  className='my-2 block text-gray-300 font-medium hover:text-white'
                >
                  {item.title}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
