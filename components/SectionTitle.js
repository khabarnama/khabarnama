import Link from 'next/link'
import SVGNewspaper from './SVG/SVGNewspaper'
import SVGAuthor from './SVG/SVGAuthor'
import SVGSearch from './SVG/SVGSearch'

export default function SectionTitle({ widget, classes, type_url }) {
  const svg = (type) => {
    switch (type) {
      case 'categories':
        return <SVGNewspaper classes='h-6 mr-3' />
      case 'tags':
        return <SVGSearch classes='h-5 mr-3' />
      case 'author':
        return <SVGAuthor classes='h-6 mr-3' />

      default:
        return <SVGNewspaper classes='h-6 mr-3' />
    }
  }

  const link = widget.slug ? `/${type_url}/${widget.slug}` : ''

  return (
    <>
      <div className={`border-b mb-5 flex justify-between text-sm ${classes && classes}`}>
        <Link href={link} disable={link != ''}>
          <a className='text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase font-semibold'>
            {widget.type && svg(widget.type)}
            {widget.title}
          </a>
        </Link>
        {widget.type ? (
          <Link href={link}>
            <a>See All</a>
          </Link>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
