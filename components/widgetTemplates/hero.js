import Link from 'next/link'
import YoutubeEmbed from './../youtubeEmbed'

export default function HeroWidget({ about }) {
  const template = (about) => {
    return (
      <div className='order-2 sm:order-1 lg:order-2 col-span-1 sm:col-span-12 lg:col-span-6 bg-gray-100 text-center'>
        <YoutubeEmbed embedId={about.featuredvideo[0]} />
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
