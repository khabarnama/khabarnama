import { withRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import SVGCross from './SVG/SVGCross'
import SVGBurgernav from './SVG/SVGBurgernav'
import ImageComponentity from './ImageComponentity'
import Populartags from './Populartags'
import SearchForm from './SearchForm'

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

import { useTheme } from 'next-themes'
import SVGSun from './SVG/SVGSun'
import SVGMoon from './SVG/SVGMoon'

function HeaderClassic() {
  const [display, setDisplay] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }
  return (
    <>
      <header className=' p-4 lg:px-8 lg:border-b border-gray-100 lg:mb-2'>
        <section className='max-w-screen-2xl mx-auto'>
          <div className='flex flex-col items-start lg:flex-row lg:gap-5 lg:items-center'>
            <div className='flex w-full lg:w-64 justify-between items-center'>
              <div className='w-52 lg:w-64 flex-none'>
                <Link href='/'>
                  <a>
                    <ImageComponentity
                      src='https://reporterly.net/wp-content/themes/sharks/assets/images/logo.png'
                      classes='h-8 lg:h-10'
                    />
                  </a>
                </Link>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='hidden md:inline-block lg:hidden'>
                  <SearchForm />
                </div>
                <div onClick={switchTheme} className='inline-block lg:hidden cursor-pointer'>
                  {theme === 'dark' ? <SVGSun /> : <SVGMoon />}
                </div>
                <button
                  aria-label='navbar-mobile'
                  onClick={() => setDisplay(!display)}
                  className='lg:hidden z-50  whitespace-no-wrap w-10 h-10 flex items-center justify-center p-3 rounded-full text-red-800 dark:text-white active:text-red-800 transition ease-in-out duration-150'
                >
                  {display ? <SVGCross /> : <SVGBurgernav />}
                </button>
              </div>
            </div>
            <div className='flex-grow'>
              <div className='flex flex-col lg:flex-row items-center justify-between text-gray-500 hover:text-gray-600 transition-colors duration-200 w-full py-2'>
                <div className='hidden lg:inline-block'>
                  <SearchForm />
                </div>
                <div className='flex overflow-scroll scrollbar-hide'>
                  <span className='lg:hidden text-xs text-red-800 dark:text-red-600 font-semibold'>
                    Trending:
                  </span>
                  <Populartags />
                </div>
                <div
                  onClick={switchTheme}
                  className='cursor-pointer hidden lg:inline-block darkmode rounded-full bg-gray-50 p-5 mr-3'
                >
                  {theme === 'dark' ? <SVGSun /> : <SVGMoon />}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className={`z-10 ${
            display ? 'fixed' : 'hidden'
          } transition ease-in-out duration-300 inset-0 overflow-hidden`}
          aria-labelledby='slide-over-title'
          role='dialog'
          aria-modal='true'
        >
          <div className='absolute inset-0 overflow-hidden'>
            <div
              className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
              aria-hidden='true'
            ></div>

            <div className='fixed inset-y-0 left-0 pr-20 max-w-full flex'>
              <div className='relative w-screen max-w-md'>
                <div className='bg-white dark:bg-gray-500 h-full flex flex-col py-6  dark:bg-gray-700 shadow-xl overflow-y-scroll'>
                  <div className='px-4 sm:px-6'>
                    <div className='w-52 lg:w-64 flex-none'>
                      <Link href='/'>
                        <a>
                          <ImageComponentity
                            src='https://reporterly.net/wp-content/themes/sharks/assets/images/logo.png'
                            classes='h-8 lg:h-10'
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className='mt-6 relative flex-1 px-4 sm:px-6'>
                    <div className='absolute inset-0 px-4 sm:px-6'>
                      <ul className='navigationbar lg:my-5 border-y flex flex-col text-md'>
                        <li>
                          <Link href='/'>
                            <a className='text-red-800 dark:text-red-600 hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full font-semibold flex items-center'>
                              <SVGHome />
                              <span className='ml-2 '>Home</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGNotification />
                              <span className='ml-2 '>Latest Stories</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGSecurity />
                              <span className='ml-2 '>Security Trends</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGPeace />
                              <span className='ml-2 '>Peace Developments</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGSpeech />
                              <span className='ml-2 '>Political Dynamics</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGEconomy />
                              <span className='ml-2 '>Economic Situation</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGWomensymbol />
                              <span className='ml-2 '>Women Rights</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGMosque />
                              <span className='ml-2 '>Ethnic and Religious</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGTv />
                              <span className='ml-2 '>Media Status</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/category/latest-stories'>
                            <a className='flex items-center hover:text-red-700 p-3 lg:px-5 lg:py-3 hover:bg-red-50 transition duration-300 ease-in-out rounded-full'>
                              <SVGHospital />
                              <span className='ml-2 '>Humanitarian Issues</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default withRouter(HeaderClassic)
