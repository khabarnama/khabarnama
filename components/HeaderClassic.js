import { withRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import SVGCross from './SVG/SVGCross'
import SVGBurgernav from './SVG/SVGBurgernav'
import ImageComponentity from './ImageComponentity'
import Populartags from './Populartags'
import SearchForm from './SearchForm'

import SVGHome from './../components/SVG/SVGHome'
import SVGWork from './../components/SVG/SVGWork'
import SVGLifestyle from './../components/SVG/SVGLifestyle'
import SVGStar from './../components/SVG/SVGStar'
import SVGUnlock from './../components/SVG/SVGUnlock'
import SVGHeart from './../components/SVG/SVGHeart'
import SVGDiscovery from './../components/SVG/SVGDiscovery'

import { useTheme } from 'next-themes'
import SVGSun from './SVG/SVGSun'
import SVGMoon from './SVG/SVGMoon'
import { useRouter } from 'next/router'

function HeaderClassic() {
  const router = useRouter()

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
      <header className='pb-2 px-2 sm:px-4 lg:px-8 lg:border-b border-gray-100 lg:mb-2'>
        <section className='max-w-screen-2xl mx-auto'>
          <div className='flex flex-col items-start lg:flex-row lg:gap-5 lg:items-center'>
            <div className='flex w-full lg:w-64 justify-between items-center'>
              <div className='mr-4 w-52 lg:w-64 flex-none'>
                <Link href='/'>
                  <a>
                    <ImageComponentity
                      src={theme == 'dark' ? '/icons/logo.png' : '/icons/logo-dark.png'}
                      classes='h-16 w-24'
                    />
                  </a>
                </Link>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='hidden md:inline-block lg:hidden'></div>
                <div onClick={switchTheme} className='inline-block lg:hidden cursor-pointer'>
                  {theme === 'dark' ? <SVGSun /> : <SVGMoon />}
                </div>
                <button
                  aria-label='navbar-mobile'
                  onClick={() => setDisplay(!display)}
                  className='lg:hidden z-50  whitespace-no-wrap w-10 h-10 flex items-center justify-center p-3 rounded-full text-indigo-800 dark:text-white active:text-indigo-800 transition ease-in-out duration-150'
                >
                  {display ? <SVGCross /> : <SVGBurgernav />}
                </button>
              </div>
            </div>
            <div className='px-4 lg:px-0 flex-grow'>
              <div className='flex flex-col lg:flex-row items-center justify-between text-gray-500 hover:text-gray-600 transition-colors duration-200 w-full py-2'>
                <div className='hidden lg:inline-block'></div>
                <div className='flex overflow-scroll scrollbar-hide'>
                  <div class='hidden sm:flex'>
                    <Populartags />
                  </div>
                </div>
                <div
                  onClick={switchTheme}
                  className='cursor-pointer hidden lg:inline-block darkmode rounded-full bg-gray-50 p-5 ml-3'
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
                            src={theme == 'dark' ? '/icons/logo.png' : '/icons/logo-dark.png'}
                            classes='h-16 w-24'
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
                            <a
                              className={`${
                                router.pathname == '/' ? 'text-semibold' : ''
                              } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                            >
                              <SVGHome />
                              <span className='mr-2 '>صفحه نخست</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog/category/work'>
                            <a
                              className={`${
                                router.pathname == '/blog/category/work' ? 'text-semibold' : ''
                              } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                            >
                              <SVGWork />
                              <span className='mr-2 '>کسب و کار</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog/category/lifestyle'>
                            <a
                              className={`${
                                router.pathname == '/blog/category/lifestyle' ? 'text-semibold' : ''
                              } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                            >
                              <SVGLifestyle />
                              <span className='mr-2'>سبک زندگی</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog/category/success'>
                            <a
                              className={`${
                                router.pathname == '/blog/category/success' ? 'text-semibold' : ''
                              } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                            >
                              <SVGUnlock />
                              <span className='mr-2'>موفقیت</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog/category/health'>
                            <a
                              className={`${
                                router.pathname == '/blog/category/health' ? 'text-semibold' : ''
                              } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                            >
                              <SVGHeart />
                              <span className='mr-2'>سلامتی</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog/category/trip'>
                            <a
                              className={`${
                                router.pathname == '/blog/category/trip' ? 'text-semibold' : ''
                              } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                            >
                              <SVGDiscovery />
                              <span className='mr-2'>سفر و گردشگری</span>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blog/category/top'>
                            <a
                              className={`${
                                router.pathname == '/blog/category/top' ? 'text-semibold' : ''
                              } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                            >
                              <SVGStar />
                              <span className='mr-2'>برترین ها</span>
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
