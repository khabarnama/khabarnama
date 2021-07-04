export default function Footer() {
  return (
    <section className='bg-gray-600 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12'>
      <div className='p-5 text-sm col-span-1 lg:col-span-3'>
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>MEDIA SERVICES</span>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Branding
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            videography
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            photography
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Media Management
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            TV commercial video
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Documentary
          </a>
        </div>
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>TECH SERVICES</span>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Software Development
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Networking Services
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Web and Email Hosting
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Web Development
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Mobile App Development
          </a>
        </div>
      </div>
      <div className='p-5 text-sm col-span-1 md:col-span-3'>
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>TECH SERVICES</span>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Software Development
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Networking Services
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Web and Email Hosting
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Web Development
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Mobile App Development
          </a>
        </div>
        <div className='mb-10'>
          <span className='mb-3 block uppercase text-gray-100 font-semibold'>MEDIA SERVICES</span>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Branding
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            videography
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            photography
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Media Management
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            TV commercial video
          </a>
          <a className='my-1 block text-gray-300 font-medium' href='/#'>
            Documentary
          </a>
        </div>
      </div>
      <div className='p-5 text-sm col-span-1 md:col-span-6'>
        <a href='#' className='text-8xl font-bold text-white'>
          IAP
        </a>
        <p className='tex-sm text-gray-100'>
          House #5, Koche Cinema Barikot,
          <br />
          Dehmazang, Kabul, Afghanistan.
        </p>
        <form className='mt-5'>
          <div className='sm:flex justify-between gap-3'>
            <div className='w-full md:w-1/2 mb-3 md:mb-0'>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-first-name'
                type='text'
                placeholder='Jane'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-email'
                type='email'
                placeholder='********@*****.**'
              />
            </div>
          </div>

          <div className='flex flex-wrap mb-6'>
            <div className='w-full'>
              <textarea
                rows='7'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                placeholder='Message'
              ></textarea>
            </div>
            <div className='flex justify-end w-full'>
              <button
                className='shadow bg-gray-900 hover:bg-gray-100 focus:shadow-outline focus:outline-none text-white hover:text-black font-semibold py-2 px-6 uppercase'
                type='submit'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
