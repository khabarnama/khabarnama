import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function About() {
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
            <div className=''>
              <div
                class='bg-gray-400 bg-cover flex justify-center items-center'
                style={{ height: '31rem' }}
              >
                <div class='bg-gray-900 h-24 w-24 rounded-full'></div>
              </div>
              <div className='p-10'>
                <h3 className='font-bold text-3xl mb-4'>
                  We provide solutions powered by the latest and the best Technology.
                </h3>
                <div className='text-gray-600'>
                  Intellectual Applications & Products (IAP) is a reputable technology-driven
                  consulting company staffed with highly skilled and experienced professionals in
                  the field of Information Technology and Digital Marketing. We champion innovative
                  technology, providing turnkey technology and media solutions to both the private
                  and non-private sectors in Afghanistan. At IAP, the focus is on solving real-life
                  problems using two key technologies that can bring a revolution in the
                  tech-industry: Blockchain and Artificial Intelligence. Our partnerships involve
                  some of the world’s well-known names in the technology industry including
                  Microsoft, Cisco, Palo Alto, Dell, Polycom and Zoho. Our customer-centric approach
                  has enabled us to grow rapidly and become a trusted partner to large enterprises
                  as well as the government such as; the Ministry of Economy, Roshan Telecom, the
                  First Microfinance Bank, Geneva Call, Colombo Plan, Tetra Tech and AECOM. Some of
                  our past performance include:
                  <br />
                  <br />
                  IAP has been offering its customers reliable and secure web hosting services since
                  2005 (previously under NETLINKS Ltd’s leadership). We are one of the pioneers in
                  web hosting services in Afghanistan and we take pride in hosting a number of
                  critical and important websites in Afghanistan.
                </div>
              </div>
              <div className='col-span-1 lg:col-span-4 bg-gray-300'></div>
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

export default About
