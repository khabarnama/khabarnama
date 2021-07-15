import react, { useState } from 'react'
import ImageComponentity from '../ImageComponentity'

export default function TeamPage({ team }) {
  const [expanded, setExpanded] = useState(false)

  const template = (team) => {
    return (
      <>
        {team.featured_media != 0 && team.featured_media != null ? (
          <ImageComponentity
            src={team._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
            classes={'h-72 bg-gray-300 col-span-1 md:col-span-3 filter grayscale'}
            alt={team.title.rendered}
          />
        ) : (
          <div className='col-span-1 md:col-span-3 h-72 bg-gray-300' />
        )}
        <div className=' col-span-1 md:col-span-9 text-left mt-1'>
          <div className='text-gray-600'>
            <div className='text-xs'>
              <div
                className='uppercase font-medium mb-1'
                dangerouslySetInnerHTML={{ __html: team.designation[0] }}
              />
              <h4
                className='text-2xl font-semibold leading-none text-gray-600'
                dangerouslySetInnerHTML={{ __html: team.title.rendered }}
              />
            </div>
            <div
              className={`mt-3 text-base leading-6 ${expanded ? '' : 'line-clamp-6 h-48 overflow-hidden'} `}
              dangerouslySetInnerHTML={{ __html: team.content.rendered }}
            />
            <div
              onClick={() => setExpanded(!expanded)}
              className='border rounded-md p-3 cursor-pointer font-semibold mt-5 block flex items-center justify-center gap-2'
            >
              {expanded ? 'Show less...' : 'Show more...'}
            </div>
          </div>
        </div>
      </>
    )
  }
  return template(team)
}
