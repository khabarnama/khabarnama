import Link from 'next/link'

export default function ProjectsWidget({ projects }) {
  var dateFormat = require('dateformat')
  const template = (projects) => {
    return (
      <div className='order-3 col-span-1 sm:col-span-6 lg:col-span-3 bg-gray-600 text-white p-8 flex flex-col justify-between'>
        <h3 className='uppercase font-bold text-2xl mb-4'>Latest Projects</h3>

        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              className={`h-28 ${index < 4 ? 'border-b border-gray-500 mb-2 ' : ''}`}
            >
              <span className='text-xs text-gray-100'>
                {dateFormat(project.date, 'mediumDate')}
              </span>
              <h2>
                <Link href={`/projects/${project.slug}`}>
                  <a
                    aria-label='Project'
                    className='text-white hover:underline text-lg font-semibold'
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
