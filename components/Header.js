import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import SVGCross from './SVG/SVGCross'
import SVGBurgernav from './SVG/SVGBurgernav'
import ImageComponentity from './ImageComponentity'

function Header({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Company', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Products', href: '/products' },
    { text: 'Contact Us', href: '/#contact' }
  ]

  const [display, setDisplay] = useState(false)

  // console.log('LOGO URL: ', process.env.LOGO_URL)

  return (
    <>
      <header className='max-w-screen-2xl mx-auto p-5 sm:my-5 sm:mb-2 flex items-end justify-between relative'>
        <ImageComponentity
          src='https://iap.af/wp-content/uploads/2021/06/IAP-Landscape-Transparent.png'
          classes='h-16 w-72'
        />
        <div
          className={`z-10 ${display ? 'fixed' : 'hidden'} inset-0 overflow-hidden`}
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
                <div className='h-full flex flex-col py-6 bg-white dark:bg-gray-700 shadow-xl overflow-y-scroll'>
                  <div className='px-4 sm:px-6'>
                    <ImageComponentity
                      src='https://iap.af/wp-content/uploads/2021/06/IAP-Landscape-Transparent.png'
                      classes='h-16 w-72'
                    />
                  </div>
                  <div className='mt-6 relative flex-1 px-4 sm:px-6'>
                    <div className='absolute inset-0 px-4 sm:px-6'>
                      <ul className='grid gap-3'>
                        {navs.map((nav, index) => {
                          return (
                            <li key={index}>
                              <Link href={nav.href}>
                                <a
                                  className={`block text-sm px-5 py-2 font-light hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                                    router.pathname == nav.href
                                      ? 'bg-gray-600 text-white hover:text-gray-700'
                                      : 'text-gray-700'
                                  }`}
                                  aria-label='nav link'
                                >
                                  {nav.text}
                                </a>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                      <ul className='grid gap-3 mt-10'>
                        <li>
                          <Link
                            prefetch={true}
                            href='https://iap.af/wp-content/uploads/2021/06/2021-Corporate-Profile.pdf'
                          >
                            <a aria-label='corporate profile' className='underline'>
                              Download Our Corporate profile
                            </a>
                          </Link>
                        </li>
                        <li>
                          <span>
                            Have any questions?{' '}
                            <Link href='tel:+93729444427'>
                              <a aria-label='telephone' className='underline'>
                                0729 4444 27
                              </a>
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 items-stretch justify-center'>
          <div class='text-xs text-white bg-gray-600 px-3 py-2 hidden sm:flex justify-between items-center'>
            <Link
              prefetch={true}
              href='https://iap.af/wp-content/uploads/2021/06/2021-Corporate-Profile.pdf'
            >
              <a aria-label='corporate profile' className='underline'>
                Download Our Corporate profile
              </a>
            </Link>
            <span>|</span>
            <span>
              Have any questions?{' '}
              <Link href='tel:+93729444427'>
                <a aria-label='telephone' className='underline'>
                  0729 4444 27
                </a>
              </Link>
            </span>
          </div>
          <ul className='hidden sm:flex flex-row gap-1'>
            {navs.map((nav, index) => {
              return (
                <li key={index}>
                  <Link href={nav.href}>
                    <a
                      className={`py-2 px-5 text-sm font-semibold border-gray-600 border-0 hover:border-b-4 focus:outline-none ${
                        router.pathname == nav.href
                          ? 'border-b-4 border-gray-600 hover:text-gray-700'
                          : 'text-gray-700'
                      }`}
                      aria-label='nav link'
                    >
                      {nav.text}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
          <span className='flex items-center justify-center gap-1'>
            <button
              aria-label='navbar-mobile'
              onClick={() => setDisplay(!display)}
              className='sm:hidden z-10 whitespace-no-wrap fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150'
            >
              {display ? <SVGCross /> : <SVGBurgernav />}
            </button>
          </span>
        </div>
      </header>
    </>
  )
}
export default withRouter(Header)
