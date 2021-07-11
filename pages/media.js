import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Media() {
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
            <div className='p-10'>
              <h3 className='font-bold uppercase text-3xl mb-4'>Design & Production</h3>
              <div className='text-gray-600'>
                Our goal is to make your goal look good with our Graphic Design and Branding
                Services.
                <br />
                <br />
                We take the core of your business and take it to a whole new level of
                importance—unrestricted by convention. Our passionate design team and brand
                strategists employ extraordinary marketing research skills to create a unique
                identity for your company. We apply our visual knowledge—into visual solutions. Logo
                design, marketing collateral, multimedia presentations, product packaging, indoor
                and outdoor signage, story books, billboards, and much more.
                <br /> <br />
                IAP distinctly creates and implements flawless business branding solutions needed to
                get your company to the very top of its game.
              </div>
            </div>
          </div>

          <div id='software-development' className='text-left mb-8 p-10 bg-white'>
            <h3 className='font-bold uppercase text-3xl'>Media Services</h3>

            <div className='grid grid-cols-1 sm:grid-cols-12 gap-8 mt-8'>
              <div className='col-span-1 sm:col-span-4'>
                <div className='w-full h-48 bg-gray-300'></div>
                <div class='h-12 flex justify-center items-center border'>Production</div>
              </div>
              <div className='col-span-1 sm:col-span-4'>
                <div className='w-full h-48 bg-gray-300'></div>
                <div class='h-12 flex justify-center items-center border'>Production</div>
              </div>
              <div className='col-span-1 sm:col-span-4'>
                <div className='w-full h-48 bg-gray-300'></div>
                <div class='h-12 flex justify-center items-center border'>Production</div>
              </div>
              <div className='col-span-1 sm:col-span-4'>
                <div className='w-full h-48 bg-gray-300'></div>
                <div class='h-12 flex justify-center items-center border'>Production</div>
              </div>
              <div className='col-span-1 sm:col-span-4'>
                <div className='w-full h-48 bg-gray-300'></div>
                <div class='h-12 flex justify-center items-center border'>Production</div>
              </div>
              <div className='col-span-1 sm:col-span-4'>
                <div className='w-full h-48 bg-gray-300'></div>
                <div class='h-12 flex justify-center items-center border'>Production</div>
              </div>
            </div>
          </div>

          <div id='key-projects' className='text-left p-10 bg-white mb-8'>
            <h3 className='font-bold uppercase text-3xl'>Print & Distribution </h3>
            <div className='grid-cols-1 sm:col-span-10 mt-3 text-gray-600'>
              We understand that printing high quality materials in Afghanistan is one of the
              impossibles. In order to make it happen, we have partnered up with top of the line
              printing companies in Istanbul, Turkey and Karachi, Pakistan. Our partnerships do not
              only help us provide top-notch printing services but a high-quality service with a
              very low cost. Our Print & Distribution services include shipment from Turkey &
              Pakistan and delivery to your premises.
            </div>
            <a
              aria-label='Project'
              className='font-semibold hover:underline flex items-center group mt-2'
            >
              <span className='mr-2 group-hover:mr-3'>Get a free consultation - </span>
            </a>
          </div>

          <div className='mb-8 bg-white border'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 p-10'>
              <div className='col-span-1 lg:col-span-8'>
                <h3 className='font-bold uppercase text-3xl mb-4'>Digital Marketing</h3>
                <div className='text-gray-600'>
                  IAP is a one-stop digital marketing agency that provides businesses with the best
                  consulting services in Branding, Video Production, Content Marketing, Social Media
                  Marketing, Website Analytics, Digital Advertising, and more. We help transition
                  businesses from traditional marketing methodologies to digital making sure the
                  advertisement is delivered to the right audience at the right time.
                  <br />
                  <br />
                  It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software.
                </div>
              </div>
              <div className='col-span-1 lg:col-span-4 bg-gray-300'></div>
            </div>
          </div>

          <div id='key-projects' className='text-left p-10 bg-white'>
            <h3 className='font-bold uppercase text-3xl'>What do you get?</h3>

            <div className='sm:flex items-start mt-10'>
              <img
                className='w-48 h-full rounded-sm mr-10'
                src='https://tailwindcss.com/img/card-left.jpg'
                alt='Avatar of Jonathan Reinink'
              />
              <div className='text-left mt-1'>
                <div className='mb-4 text-gray-500'>
                  <div className='text-md mb-5 mt-2'>
                    <a
                      href='#'
                      className='font-semibold leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out'
                    >
                      Content Writer
                    </a>
                  </div>
                  <p className='text-base leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
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
                  <div className='text-md mb-5 mt-2'>
                    <a
                      href='#'
                      className='font-semibold leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out'
                    >
                      Content Writer
                    </a>
                  </div>
                  <p className='text-base leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
                    nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                    Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='key-projects' className='text-left p-10 bg-white mt-8'>
            <h3 className='font-bold uppercase text-3xl'>Got more questions?</h3>
            <div className='grid grid-cols-1 sm:grid-cols-12 items-center mt-3 text-gray-600'>
              <div className='grid-cols-1 sm:col-span-9'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <a
                href='#'
                class='col-span-1 sm:col-span-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700'
              >
                +93766 070 070
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Media
