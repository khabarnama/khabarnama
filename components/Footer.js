import Link from 'next/link'

export default function Footer({ topLeft, topRight, topRight2 }) {
  return (
    <section className='text-lg sm:text-base bg-gray-600 p-8 grid sm:grid-cols-12'>
      <div className='p-5 col-span-1 sm:col-span-6 lg:col-span-3'>
        <div className='mb-5'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>{topLeft.name}</span>
          {topLeft.items.map((item) => {
            return (
              <Link
                key={item.id}
                href={`${
                  item.url.startsWith('mailto') || item.url.startsWith('tel')
                    ? item.url
                    : item.url.replace("https://admin.iap.af", "")
                }`}
              >
                <a
                  target={`${item.url.startsWith('https://admin.iap.af') ? '_self' : '_blank'}`}
                  rel="noreferrer"
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
        <div className='mb-5'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>{topRight.name}</span>
          {topRight.items.map((item) => {
            return (
              <Link
                key={item.id}
                href={`${
                  item.url.startsWith('mailto') || item.url.startsWith('tel')
                    ? item.url
                    : item.url.replace("https://admin.iap.af", "")
                }`}
              >
                <a
                  target={`${item.url.startsWith('https://admin.iap.af') ? '_self' : '_blank'}`}
                  rel="noreferrer"
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
      <div className='hidden lg:inline-block p-5 col-span-1 sm:col-span-6 lg:col-span-3'>
        <div className='mb-5'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>{topRight2.name}</span>
          {topRight2.items.map((item) => {
            return (
              <Link
                key={item.id}
                href={`${
                  item.url.startsWith('mailto') || item.url.startsWith('tel')
                    ? item.url
                    : item.url.replace("https://admin.iap.af", "")
                }`}
              >
                <a
                  target={`${item.url.startsWith('https://admin.iap.af') ? '_self' : '_blank'}`}
                  rel="noreferrer"
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
      <div className='hidden lg:inline-block p-5 col-span-1 sm:col-span-6 lg:col-span-3'>
        <img
            src='https://admin.iap.af/wp-content/uploads/2021/07/IAP-Square-White-e1626172672699.png'
            className='mb-4'
            style={{ height: '133px', width: '130px' }}
            alt={'IAP LOGO'}
          />
      </div>
    </section>
  )
}
