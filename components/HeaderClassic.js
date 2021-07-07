import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import SVGCross from './SVG/SVGCross'
import SVGBurgernav from './SVG/SVGBurgernav'
import ImageComponentity from './ImageComponentity'

function HeaderClassic({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Company', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Products', href: '/products' },
    { text: 'Contact Us', href: '/#contact' },
    {
      text: 'Dropdown',
      href: '#',
      dropdown: [
        { text: 'Item', href: '/item' },
        { text: 'Item short', href: '/item2' },
        { text: 'Item tooo long', href: '/item3' },
        { text: 'Item popo', href: '/item4' }
      ]
    }
  ]

  const [display, setDisplay] = useState(false)

  // console.log('LOGO URL: ', process.env.LOGO_URL)

  return (
    <>
      <header className='max-w-screen-2xl mx-auto p-5 pb-0 sm:mt-4 flex items-center justify-between relative'>
        <ImageComponentity
          src='https://iap.af/wp-content/uploads/2021/06/IAP-Landscape-Transparent.png'
          classes='h-12 w-52 sm:h-16 sm:w-72'
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
                <div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll'>
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
                          return nav.href != '#' ? (
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
                          ) : (
                            <li key={index} className='dropdown inline-block relative'>
                              <button className='block text-sm px-5 py-2 font-light flex gap-1'>
                                <span className='mr-1'>{nav.text}</span>
                                <svg
                                  className='fill-current h-4 w-4'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 20 20'
                                >
                                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                                </svg>
                              </button>
                              <ul className='dropdown-menu block text-gray-700 pt-1 pl-3'>
                                {nav.dropdown.map((nav, index) => {
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
                            </li>
                          )
                        })}
                      </ul>
                      <ul className='grid gap-3 mt-10'>
                        <li>
                          <Link href='https://iap.af/wp-content/uploads/2021/06/2021-Corporate-Profile.pdf'>
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

        <div className='hidden lg:flex flex-col gap-2 items-center justify-between'>
          <div className='text-gray-600 font-semibold py-2 block'>
            <Link href='https://iap.af/wp-content/uploads/2021/06/2021-Corporate-Profile.pdf'>
              <a aria-label='corporate profile' className='hover:underline'>
                Download Our Corporate profile
              </a>
            </Link>
          </div>
          <ul className='flex flex-row gap-1 border-t-2 border-gray-600'>
            {navs.map((nav, index) => {
              return nav.href != '#' ? (
                <li className='flex items-center justify-center' key={index}>
                  <Link href={nav.href}>
                    <a
                      className={`py-2 px-5 font-semibold border-gray-600 border-0 hover:border-b-4 focus:outline-none ${
                        router.pathname == nav.href
                          ? 'border-t-4 border-gray-600 hover:text-gray-700'
                          : 'text-gray-700 hover:text-gray-500'
                      }`}
                      aria-label='nav link'
                    >
                      {nav.text}
                    </a>
                  </Link>
                </li>
              ) : (
                <li
                  key={index}
                  className='dropdown flex items-center justify-center inline-block relative group'
                >
                  <button className='block px-5 py-2 font-semibold text-gray-700 hover:text-gray-500 flex items-center gap-1'>
                    <span className='mr-1'>{nav.text}</span>
                    <svg
                      className='fill-current h-4 w-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
                    </svg>
                  </button>
                  <ul className='dropdown-menu hidden group-hover:block absolute left-0 top-0 bg-gray-600 text-white mt-10 z-10'>
                    {nav.dropdown.map((nav, index) => {
                      return (
                        <li key={index}>
                          <Link href={nav.href}>
                            <a
                              className={`block text-sm px-5 py-2 font-light hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                                router.pathname == nav.href
                                  ? 'bg-gray-600 text-white hover:text-gray-700'
                                  : 'text-white hover:text-gray-500'
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
                </li>
              )
            })}
          </ul>
        </div>

        <div className='h-16 w-72 hidden lg:flex items-center'>
          <span className='mr-2'>
            <ImageComponentity
              src='https://iapcorporate.com/wp-content/uploads/2018/08/conversations-4872_af60b258-251e-41af-b238-dfb706d7b3d4.svg'
              classes={'w-12 h-12'}
            />
          </span>
          <div className='flex flex-col items-center'>
            <span className='mb-1 font-semibold text-gray-600'>Have any questions?</span>
            <Link href='tel:+93729444427'>
              <a aria-label='telephone' className='hover:underline'>
                <b>Call:</b> 0729 4444 27
              </a>
            </Link>
          </div>
        </div>

        <span className='md:hidden z-10 flex items-center justify-center gap-1'>
          <button
            aria-label='navbar-mobile'
            onClick={() => setDisplay(!display)}
            className='whitespace-no-wrap w-12 h-12 flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150'
          >
            {display ? <SVGCross /> : <SVGBurgernav />}
          </button>
        </span>
      </header>
    </>
  )
}
export default withRouter(HeaderClassic)
