import HeaderClassic from './HeaderClassic'
import LatestStories from './LatestStories'
import SVGHome from './../components/SVG/SVGHome'
import SVGNotification from './../components/SVG/SVGNotification'
import SVGSecurity from './SVG/SVGSecurity'
import SVGPeace from './SVG/SVGPeace'
import SVGSpeech from './SVG/SVGSpeech'
import SVGEconomy from './SVG/SVGEconomy'
import SVGWomensymbol from './SVG/SVGWomensymbol'
import SVGMosque from './SVG/SVGMosque'
import SVGTv from './SVG/SVGTv'
import SVGHospital from './SVG/SVGHospital'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className='bg-white py-4 md:px-4 flex flex-col md:gap-5'>
      <HeaderClassic />
      <div className='main grid grid-cols-12 justify-between'>
        <div className='col-span-12 md:col-span-9 flex'>
          <div className='hidden md:relative bg-white z-50 md:inline-block md:w-72 md:flex-none md:border-r border-gray-100'>
            <div className='md:sticky md:top-0 bg-white md:p-8 md:pt-0 md:pr-1'>
              <ul className='navigationbar md:my-5 border-y flex flex-row justify-around md:flex-col text-md'>
                <li>
                  <Link href='/'>
                    <a className='text-red-800 hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full font-semibold flex items-center'>
                      <SVGHome />
                      <span className='ml-2 hidden md:inline-block'>Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGNotification />
                      <span className='ml-2 hidden md:inline-block'>Latest Stories</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGSecurity />
                      <span className='ml-2 hidden md:inline-block'>Security Trends</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGPeace />
                      <span className='ml-2 hidden md:inline-block'>Peace Developments</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGSpeech />
                      <span className='ml-2 hidden md:inline-block'>Political Dynamics</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGEconomy />
                      <span className='ml-2 hidden md:inline-block'>Economic Situation</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGWomensymbol />
                      <span className='ml-2 hidden md:inline-block'>Women Rights</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGMosque />
                      <span className='ml-2 hidden md:inline-block'>Ethnic and Religious</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGTv />
                      <span className='ml-2 hidden md:inline-block'>Media Status</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 md:px-5 md:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGHospital />
                      <span className='ml-2 hidden md:inline-block'>Humanitarian Issues</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <div className='ml-4 hidden md:inline-block'>
                <button className='text-center px-7 py-3 bg-red-700 text-white rounded-full shadow-md hover:bg-red-800 transition duration-300 ease-in-out'>
                  See Archives
                </button>
              </div>
            </div>
          </div>
          <div className='flex-grow flex flex-col'>{children}</div>
        </div>

        <div className='hidden md:block relative col-span-3 bg-white pr-5 scrollbar-hide h-screen overflow-y-scroll sticky top-0'>
          <LatestStories />
          <div className='border-b border-gray-100 py-5 mb-2'>
            <h1 className='uppercase font-semibold mb-3'>ADS</h1>
            <img
              className='w-full'
              src='https://paikaftab.com/wp-content/uploads/2021/06/banner-1.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
