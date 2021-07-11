import Link from 'next/link'
import ImageComponentity from './../ImageComponentity'

export default function ProjectsWrapper({ category, projects }) {
  return (
    <div id={category.slug} className='text-left mb-8 p-10 bg-white'>
      <h3
        className='font-bold uppercase text-3xl'
        dangerouslySetInnerHTML={{ __html: category.name }}
      />
      <div
        className='mt-3 text-gray-600'
        dangerouslySetInnerHTML={{ __html: category.description }}
      />
      {projects.map((project, index) => {
        return (
          <div className='grid grid-cols-1 md:grid-cols-12 mt-10'>
            {project.featured_media != 0 && project.featured_media != null && (
              <ImageComponentity
                src={
                  project._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large
                    .source_url
                }
                classes={'col-span-1 md:col-span-4 rounded-sm mr-10'}
                alt={project.title.rendered}
              />
            )}
            <div className='col-span-1 md:col-span-8 text-left mt-1'>
              <div className='mb-4 text-gray-500'>
                <div
                  className='mt-2 leading-6'
                  dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
                />
                <div className=' mt-5'>
                  <Link href={`/projects/${project.slug}`}>
                    <a className='hover:text-gray-900 hover:underline'>
                      <h6
                        className='font-medium leading-none text-gray-900 mb-2'
                        dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                      />
                    </a>
                  </Link>
                  <Link href={`${project.link[0]}`}>
                    <a
                      className='hover:text-gray-900 hover:underline'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {project.link[0]}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
