import Link from 'next/link'

export default function ProjectsWidget({ projects }) {
  var dateFormat = require('dateformat')
  const template = (projects) => {
    return (
      <div className='hidden lg:inline-block order-3 col-span-1 sm:col-span-6 lg:col-span-3 bg-gray-600 text-white p-8 flex flex-col justify-between'>
        <h3 className='uppercase font-bold text-2xl mb-4'>Latest Blog</h3>

        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              className={`${index < 4 ? 'border-b border-gray-500 mb-2 pb-2' : ' pb-2'}`}
            >
              <span className='text-sm text-white'>{dateFormat(project.date, 'mediumDate')}</span>
              <h2>
                <Link href={`/projects/${project.slug}`}>
                  <a
                    aria-label='Project'
                    className='text-white hover:underline text-lg font-semibold line-clamp-2'
                    dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                  />
                </Link>
              </h2>
            </div>
          )
        })}
      </div>
    )
  }
  return template(projects)
}
