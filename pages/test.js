import { useRouter } from 'next/router'
import ResponsiveArticle from './../components/skeleton/ResponsiveArticle'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

function Test() {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <ResponsiveArticle />
  }

  return (
    <>
      <div class='max-w-screen-xl mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8'>
        <div class='col-span-1 lg:col-span-3 bg-white shadow-md'></div>
        <div class='col-span-1 lg:col-span-9'>
          <div class='mb-8 bg-white border'>
            <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 p-10'>
              <div class='col-span-1 lg:col-span-8'>
                <h3 class='font-bold uppercase text-3xl mb-4'>Technology Services</h3>
                <div class='text-gray-600'>
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
              <div class='col-span-1 lg:col-span-4 bg-gray-300'></div>
            </div>
          </div>

          <div id='software-development' class='text-left mb-8 p-10 bg-white'>
            <h3 class='font-bold uppercase text-3xl'>Software Development</h3>
            <div class='mt-3 text-gray-600 mb-10'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>

            <div class='grid grid-cols-1 sm:grid-cols-12'>
              <div class='bg-gray-100 col-span-1 sm:col-span-4 p-8 flex flex-col items-stretch'>
                <a href='#' class='hover:underline'>
                  <h3 class='font-bold uppercase text-2xl'>Corporate Website</h3>
                </a>
                <div class='mt-3'>
                  <p class='text-gray-700 mb-2 '>
                    Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the
                    industry's standard dummy...
                  </p>
                  <a href='#' class='font-semibold hover:underline'>
                    find more -
                  </a>
                </div>
              </div>
              <div class='bg-gray-300 col-span-1 sm:col-span-4 p-8 flex flex-col justify-between'>
                <a href='#' class='hover:underline'>
                  <h3 class='font-bold uppercase text-2xl'>Custom Web Apps</h3>
                </a>
                <div class='mt-3'>
                  <p class='text-gray-700 mb-2 '>
                    Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the
                    industry's standard dummy...
                  </p>
                  <a href='#' class='font-semibold hover:underline'>
                    find more -
                  </a>
                </div>
              </div>
              <div class='bg-gray-600 col-span-1 sm:col-span-4 p-8 flex flex-col justify-between text-white'>
                <a href='#' class='hover:underline'>
                  <h3 class='font-bold uppercase text-2xl'>Custom Mobile Apps</h3>
                </a>
                <div class='mt-3'>
                  <p class='text-gray-300 mb-2 '>
                    Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has been the
                    industry's standard dummy...
                  </p>
                  <a href='#' class='font-semibold hover:underline'>
                    find more -
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id='key-projects' class='text-left p-10 bg-white'>
            <h3 class='font-bold uppercase text-3xl'>Key Projects</h3>
            <div class='mt-3 text-gray-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>

            <div class='mt-10'>
              <div class='grid grid-cols-12 items-start gap-5'>
                <div class='image col-span-2 h-32 w-32 rounded-full bg-gray-300'></div>
                <div class='col-span-10'>
                  <a href='#' class='hover:underline'>
                    <h3 class='font-semibold text-md uppercase'>Wasalpay</h3>
                  </a>
                  <div class=''>
                    <p class='text-gray-600'>
                      IAP implemented a world-class Visa Application and Processing System for the
                      Afghan Embassy in Washington, D.C. The system automates everything from
                      application submission to evaluation, and finally, visa issuance. It is fully
                      automated and has already eliminated multiple SOPs that required manual data
                      entries at the embassy. The system is currently live and being used by the
                      Afghan Embassy in the U.S. – www.afgvisa.com Afghanistan / USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='mt-10'>
              <div class='grid grid-cols-12 items-start gap-5'>
                <div class='image col-span-2 h-32 w-32 rounded-full bg-gray-300'></div>
                <div class='col-span-10'>
                  <a href='#' class='hover:underline'>
                    <h3 class='font-semibold text-md uppercase'>Wasalpay</h3>
                  </a>
                  <div class=''>
                    <p class='text-gray-600'>
                      IAP implemented a world-class Visa Application and Processing System for the
                      Afghan Embassy in Washington, D.C. The system automates everything from
                      application submission to evaluation, and finally, visa issuance. It is fully
                      automated and has already eliminated multiple SOPs that required manual data
                      entries at the embassy. The system is currently live and being used by the
                      Afghan Embassy in the U.S. – www.afgvisa.com Afghanistan / USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class='mt-10'>
              <div class='grid grid-cols-12 items-start gap-5'>
                <div class='image col-span-2 h-32 w-32 rounded-full bg-gray-300'></div>
                <div class='col-span-10'>
                  <a href='#' class='hover:underline'>
                    <h3 class='font-semibold text-md uppercase'>Wasalpay</h3>
                  </a>
                  <div class=''>
                    <p class='text-gray-600'>
                      IAP implemented a world-class Visa Application and Processing System for the
                      Afghan Embassy in Washington, D.C. The system automates everything from
                      application submission to evaluation, and finally, visa issuance. It is fully
                      automated and has already eliminated multiple SOPs that required manual data
                      entries at the embassy. The system is currently live and being used by the
                      Afghan Embassy in the U.S. – www.afgvisa.com Afghanistan / USA
                    </p>
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

export default Test
