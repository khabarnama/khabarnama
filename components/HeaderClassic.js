import { withRouter } from 'next/router'
import Link from 'next/link'
import SVGCross from './SVG/SVGCross'
import SVGBurgernav from './SVG/SVGBurgernav'
import ImageComponentity from './ImageComponentity'
import Populartags from './Populartags'
import SearchForm from './SearchForm'

function HeaderClassic() {
  return (
    <>
      <header className='bg-white p-4 md:px-8 md:border-b border-gray-100 md:mb-2'>
        <section className='max-w-screen-2xl mx-auto'>
          <div className='flex flex-col items-start md:flex-row md:gap-5 md:items-center'>
            <div className='w-64 flex-none'>
              <Link href='/'>
                <a>
                  <ImageComponentity
                    src='https://reporterly.net/wp-content/themes/sharks/assets/images/logo.png'
                    classes='h-10'
                  />
                </a>
              </Link>
            </div>
            <div className='flex-grow'>
              <div className='flex flex-col md:flex-row items-center justify-between space-x-3 sm:space-x-4 text-gray-500 hover:text-gray-600 transition-colors duration-200 w-full py-2'>
                <SearchForm />
                <div class='flex gap-2 overflow-scroll scrollbar-hide'>
                  <span class='sm:hidden text-xs text-red-800 font-semibold'>Trending: </span>
                  <Populartags />
                </div>
                <div className='hidden md:inline-block darkmode rounded-full bg-gray-50 p-5 mr-3'>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                    enableBackground='new 0 0 512 512'
                  >
                    <g>
                      <g>
                        <path d='m256,432.3c-11.3,0-20.4,9.1-20.4,20.4v27.9c0,11.3 9.1,20.4 20.4,20.4s20.4-9.1 20.4-20.4v-27.9c0-11.3-9.1-20.4-20.4-20.4z' />
                        <path d='m256,102.5c-84.6,0-153.5,68.8-153.5,153.5 0,84.6 68.8,153.5 153.5,153.5 84.6,0 153.5-68.8 153.5-153.5 0-84.6-68.9-153.5-153.5-153.5zm0,266.1c-62.1,0-112.6-50.5-112.6-112.6 0-62.1 50.5-112.6 112.6-112.6s112.6,50.5 112.6,112.6c0,62.1-50.5,112.6-112.6,112.6z' />
                        <path d='M256,79.7c11.3,0,20.4-9.1,20.4-20.4V31.4c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v27.9    C235.6,70.6,244.7,79.7,256,79.7z' />
                        <path d='m480.6,235.6h-27.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h27.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4z' />
                        <path d='m59.3,235.6h-27.9c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h27.9c11.3,0 20.4-9.1 20.4-20.4 1.42109e-14-11.3-9.1-20.4-20.4-20.4z' />
                        <path d='m409.5,131.4l19.7-19.7c8-8 8-20.9 0-28.9-8-8-20.9-8-28.9,0l-19.7,19.7c-8,8-8,20.9 0,28.9s20.9,7.9 28.9,0z' />
                        <path d='m102.5,380.6l-19.7,19.7c-8,8-8,20.9 0,28.9 8,8 20.9,8 28.9,0l19.7-19.7c8-8 8-20.9 0-28.9s-20.9-7.9-28.9,0z' />
                        <path d='m409.5,380.6c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l19.7,19.7c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-19.7-19.7z' />
                        <path d='m102.5,131.4c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-19.7-19.7c-8-8-20.9-8-28.9,0-8,8-8,20.9 0,28.9l19.7,19.7z' />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  )
}
export default withRouter(HeaderClassic)
