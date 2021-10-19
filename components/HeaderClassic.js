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
import SVGSearch from './../components/SVG/SVGSearch'
import SVGDiscovery from './../components/SVG/SVGDiscovery'

import { useTheme } from 'next-themes'
import SVGSun from './SVG/SVGSun'
import SVGMoon from './SVG/SVGMoon'
import { useRouter } from 'next/router'

function HeaderClassic() {
  const router = useRouter()

  const [display, setDisplay] = useState(false)
  const [search, setSearch] = useState(false)
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
      <header className='lg:border-b border-gray-100 mb-2 py-4'>
        <section className='grid grid-cols-12 justify-between'>
          <div className='col-span-12 sm:col-span-9 flex justify-between sm:justify-stretch items-center px-4'>
            <div className='w-52 lg:w-72 lg:pr-10'>
              <Link href='/'>
                <a>
                  <ImageComponentity
                    src={theme == 'dark' ? '/icons/logo.png' : '/icons/logo-dark.png'}
                    classes='h-16 w-24'
                  />
                </a>
              </Link>
            </div>
            <div className='flex gap-2 items-center justify-between'>
              <div
                onClick={switchTheme}
                className='inline-block lg:hidden cursor-pointer flex items-center justify-center'
              >
                {theme === 'dark' ? <SVGSun classes='h-6 text-gray-900' /> : <SVGMoon />}
              </div>
              <div
                onClick={() => setSearch(!search)}
                className='inline-block lg:hidden cursor-pointer flex items-center justify-center'
              >
                <SVGSearch />
              </div>
              <div
                onClick={() => setDisplay(!display)}
                className='inline-block lg:hidden cursor-pointer flex items-center justify-center'
              >
                {display ? <SVGCross /> : <SVGBurgernav />}
              </div>
            </div>
            <div className='flex-grow hidden sm:inline-block'>
              <SearchForm />
            </div>
          </div>
          <div className='hidden sm:flex col-span-3 gap-2 items-center justify-between px-4'>
            <div className='hidden sm:flex'>
              <Populartags />
            </div>
            <div
              onClick={switchTheme}
              className='cursor-pointer hidden lg:inline-block darkmode rounded-full bg-gray-50 p-5 ml-3'
            >
              {theme === 'dark' ? <SVGSun /> : <SVGMoon />}
            </div>
          </div>
        </section>
        <div className='block px-4 mt-2 sm:hidden'>{search && <SearchForm />}</div>

        <div
          className={`z-50 ${
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
                  <div className='px-4 flex items-center justify-between'>
                    <div className='w-52 lg:w-64 flex-none'>
                      <Link href='/'>
                        <a>
                          {theme == 'dark' ? (
                            <ImageComponentity src='/icons/logo.png' classes='h-16 w-24' />
                          ) : (
                            <ImageComponentity src='/icons/logo-dark.png' classes='h-16 w-24' />
                          )}
                        </a>
                      </Link>
                    </div>
                    <div
                      onClick={() => setDisplay(!display)}
                      className='inline-block lg:hidden cursor-pointer flex items-center justify-center'
                    >
                      {display ? <SVGCross /> : <SVGBurgernav />}
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
