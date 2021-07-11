import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Technology() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <div className='max-w-screen-xl mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 relative'>
        <div className='col-span-1 lg:col-span-3 sticky top-0'>
          <div className='bg-white shadow-md p-10 mb-8'>
            <h3 className='font-bold uppercase text-3xl mb-4'>Company</h3>
            <ul className='list-disc ml-10 text-gray-600'>
              <li>
                <a href='#' className='hover:underline'>
                  About IAP
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Core Team
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Download Corporate Profile
                </a>
              </li>
            </ul>
          </div>
          <div className='bg-white shadow-md p-10 mb-8'>
            <h3 className='font-bold uppercase text-3xl mb-4'>Tech Services</h3>
            <ul className='list-disc ml-10 text-gray-600'>
              <li>
                <a href='#' className='hover:underline'>
                  Corporate Websites
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Custom Web Apps
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Custom Mobile Apps
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-span-1 lg:col-span-9'>
          <div className='mb-8 bg-white border'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 p-10'>
              <div className='col-span-1 lg:col-span-8'>
                <h3 className='font-bold uppercase text-3xl mb-4'>Technology Services</h3>
                <div className='text-gray-600'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                  <br />
                  <br />
                  It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software.
                </div>
              </div>
              <div className='col-span-1 lg:col-span-4 bg-gray-300'></div>
            </div>
          </div>

          <div id='software-development' className='text-left mb-8 p-10 bg-white'>
            <h3 className='font-bold uppercase text-3xl'>Software Development</h3>
            <div className='mt-3 text-gray-600 mb-10'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-12'>
              <div className='bg-gray-100 col-span-1 sm:col-span-4 p-8 flex flex-col items-stretch'>
                <a href='#' className='hover:underline'>
                  <h3 className='font-bold uppercase text-2xl'>Corporate Website</h3>
                </a>
                <div className='mt-3'>
                  <p className='text-gray-700 mb-2 '>
                    Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the
                    industry's standard dummy...
                  </p>
                  <a href='#' className='font-semibold hover:underline'>
                    find more -
                  </a>
                </div>
              </div>
              <div className='bg-gray-300 col-span-1 sm:col-span-4 p-8 flex flex-col justify-between'>
                <a href='#' className='hover:underline'>
                  <h3 className='font-bold uppercase text-2xl'>Custom Web Apps</h3>
                </a>
                <div className='mt-3'>
                  <p className='text-gray-700 mb-2 '>
                    Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the
                    industry's standard dummy...
                  </p>
                  <a href='#' className='font-semibold hover:underline'>
                    find more -
                  </a>
                </div>
              </div>
              <div className='bg-gray-600 col-span-1 sm:col-span-4 p-8 flex flex-col justify-between text-white'>
                <a href='#' className='hover:underline'>
                  <h3 className='font-bold uppercase text-2xl'>Custom Mobile Apps</h3>
                </a>
                <div className='mt-3'>
                  <p className='text-gray-300 mb-2 '>
                    Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the
                    industry's standard dummy...
                  </p>
                  <a href='#' className='font-semibold hover:underline'>
                    find more -
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id='key-projects' className='text-left p-10 bg-white'>
            <h3 className='font-bold uppercase text-3xl'>Key Projects</h3>
            <div className='mt-3 text-gray-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>

            <div className='sm:flex items-start mt-10'>
              <img
                className='w-48 h-full rounded-sm mr-10'
                src='https://tailwindcss.com/img/card-left.jpg'
                alt='Avatar of Jonathan Reinink'
              />
              <div className='text-left mt-1'>
                <div className='mb-4 text-gray-500'>
                  <p className='mt-2 text-base leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
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

            <div className='sm:flex items-start mt-10'>
              <img
                className='w-48 h-full rounded-sm mr-10'
                src='https://tailwindcss.com/img/card-left.jpg'
                alt='Avatar of Jonathan Reinink'
              />
              <div className='text-left mt-1'>
                <div className='mb-4 text-gray-500'>
                  <p className='mt-2 text-base leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology
