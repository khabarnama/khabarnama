import { useRouter } from 'next/router'
import ResponsiveArticle from '../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Webhosting() {
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
                <h3 className='font-bold uppercase text-3xl mb-4'>Web Hosting</h3>
                <div className='text-gray-600'>
                  We are one of the pioneers in providing web hosting services in Afghanistan with
                  over 400 active clients.
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

          <div id='software-development' className='text-left mb-8 p-10 bg-white'>
            <h3 className='font-bold uppercase text-3xl'>What do you get?</h3>

            <div className='grid grid-cols-1 sm:grid-cols-12 mt-8'>
              <div className='bg-gray-100 col-span-1 sm:col-span-4 p-8 flex flex-col items-stretch'>
                <a href='#' className='hover:underline'>
                  <h3 className='font-bold uppercase text-2xl'>Data Migration</h3>
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
                  <h3 className='font-bold uppercase text-2xl'>DDoS Protection</h3>
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
                  <h3 className='font-bold uppercase text-2xl'>Cloud Backup</h3>
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
            <h3 className='font-bold uppercase text-3xl'>Pricing Packages</h3>
            <div className='grid grid-cols-1 sm:grid-cols-12 items-center mt-3 text-gray-600'>
              <div className='grid-cols-1 sm:col-span-10'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <a
                href='#'
                class='col-span-1 sm:col-span-2 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700'
              >
                Web.af
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Webhosting
