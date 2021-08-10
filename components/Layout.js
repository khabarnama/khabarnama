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
import { useTheme } from 'next-themes'
import { useState } from 'react'

export default function Layout({ children }) {
  return (
    <div className='py-4 lg:px-4 flex flex-col lg:gap-5'>
      <HeaderClassic />
      <div className='main grid grid-cols-12 justify-between'>
        <div className='col-span-12 lg:col-span-9 flex'>
          <div className='hidden lg:relative z-50 lg:inline-block lg:w-72 lg:flex-none lg:border-r border-gray-100'>
            <div className='lg:sticky lg:top-0 lg:p-8 lg:pt-0 lg:pr-1'>
              <ul className='navigationbar lg:my-5 border-y flex flex-row justify-around lg:flex-col text-md'>
                <li>
                  <Link href='/'>
                    <a className='text-red-800 hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full font-semibold flex items-center'>
                      <SVGHome />
                      <span className='ml-2 hidden lg:inline-block'>Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGNotification />
                      <span className='ml-2 hidden lg:inline-block'>Latest Stories</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGSecurity />
                      <span className='ml-2 hidden lg:inline-block'>Security Trends</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGPeace />
                      <span className='ml-2 hidden lg:inline-block'>Peace Developments</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGSpeech />
                      <span className='ml-2 hidden lg:inline-block'>Political Dynamics</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGEconomy />
                      <span className='ml-2 hidden lg:inline-block'>Economic Situation</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGWomensymbol />
                      <span className='ml-2 hidden lg:inline-block'>Women Rights</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGMosque />
                      <span className='ml-2 hidden lg:inline-block'>Ethnic and Religious</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGTv />
                      <span className='ml-2 hidden lg:inline-block'>Media Status</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/category/latest-stories'>
                    <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                      <SVGHospital />
                      <span className='ml-2 hidden lg:inline-block'>Humanitarian Issues</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <div className='ml-4 hidden lg:inline-block'>
                <button className='text-center px-7 py-3 bg-red-700 text-white rounded-full shadow-md hover:bg-red-800 transition duration-300 ease-in-out'>
                  See Archives
                </button>
              </div>
            </div>
          </div>
          <div className='flex-grow flex flex-col'>{children}</div>
        </div>

        <div className='hidden lg:block relative col-span-3 pr-5 scrollbar-hide h-screen overflow-y-scroll sticky top-0'>
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
