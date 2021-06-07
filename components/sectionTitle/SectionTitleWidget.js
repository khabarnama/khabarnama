import Link from 'next/link'
import SVGNewspaper from './../SVG/SVGNewspaper'

export default function SectionTitleWidget({ widget, classes }) {
  return (
    <>
      <div className={`border-b mb-5 text-sm ${classes && classes}`}>
        <h1 className='text-indigo-600 flex items-center pb-2 mb-2 pr-2 border-b-2 border-indigo-600 uppercase font-semibold'>
          <SVGNewspaper />
          {widget.title}
        </h1>
        <p className='text-xs text-gray-500 max-w-1/2'>{widget.desc}</p>
      </div>
    </>
  )
}
