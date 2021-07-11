import Link from 'next/link'

export default function CTAWrapper({ cta }) {
  return (
    <div id={cta.slug} className='text-left p-10 bg-white'>
      <h3
        className='font-bold uppercase text-3xl'
        dangerouslySetInnerHTML={{ __html: cta.title.rendered }}
      />
      <div className='grid grid-cols-1 sm:grid-cols-12 items-center mt-3 text-gray-600'>
        <div
          className='grid-cols-1 sm:col-span-10'
          dangerouslySetInnerHTML={{ __html: cta.excerpt.rendered }}
        />
        <Link href={cta.website[0]}>
          <a
            aria-label='link'
            rel='noreferrer'
            target='_blank'
            className='col-span-1 sm:col-span-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700'
          >
            {cta.website[0]}
          </a>
        </Link>
      </div>
    </div>
  )
}
