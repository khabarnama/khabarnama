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
          <div className='sm:flex items-start mt-10'>
            <img
              className='w-48 h-full rounded-sm mr-10'
              src='https://tailwindcss.com/img/card-left.jpg'
              alt='Avatar of Jonathan Reinink'
            />
            <div className='text-left mt-1'>
              <div className='mb-4 text-gray-500'>
                <div
                  className='mt-2 text-base leading-6'
                  dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
                />
                <div className='text-sm mt-5'>
                  <a
                    href='#'
                    className='font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out'
                  >
                    Wasalpay
                  </a>
                  <p>wasalpay.com</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
