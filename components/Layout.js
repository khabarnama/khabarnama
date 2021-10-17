import HeaderClassic from './HeaderClassic'
import LatestStories from './LatestStories'
import SVGHome from './../components/SVG/SVGHome'
import Footer from './Footer'
import SVGWork from './../components/SVG/SVGWork'
import SVGLifestyle from './../components/SVG/SVGLifestyle'
import SVGStar from './../components/SVG/SVGStar'
import SVGUnlock from './../components/SVG/SVGUnlock'
import SVGHeart from './../components/SVG/SVGHeart'
import SVGDiscovery from './../components/SVG/SVGDiscovery'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <div className='py-4 lg:px-4 flex flex-col lg:gap-5'>
      <HeaderClassic />
      <div className='main grid grid-cols-12 justify-between'>
        <div className='col-span-12 lg:col-span-9 flex'>
          <div className='hidden lg:relative z-50 lg:inline-block lg:w-72 lg:flex-none lg:border-l border-gray-100'>
            <div className='lg:sticky lg:top-0 lg:p-8 lg:pt-0 lg:pl-1'>
              <ul className='navigationbar lg:my-5 border-y flex flex-row justify-around lg:flex-col text-md'>
                <li>
                  <Link href='/'>
                    <a
                      className={`${
                        router.pathname == '/' ? 'text-semibold' : ''
                      } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                    >
                      <SVGHome />
                      <span className='mr-2 hidden lg:inline-block'>صفحه نخست</span>
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
                      <span className='mr-2 hidden lg:inline-block'>کسب و کار</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/blog/category/lifestyle'>
                    <a
                      className={`${
                        router.pathname == '/blog.category/lifestyle' ? 'text-semibold' : ''
                      } flex items-center hover:text-indigo-800 p-3 lg:px-5 lg:py-3 hover:bg-indigo-50 transition duration-300 ease-in-out rounded-full`}
                    >
                      <SVGLifestyle />
                      <span className='mr-2 hidden lg:inline-block'>سبک زندگی</span>
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
                      <span className='mr-2 hidden lg:inline-block'>موفقیت</span>
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
                      <span className='mr-2 hidden lg:inline-block'>سلامتی</span>
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
                      <span className='mr-2 hidden lg:inline-block'>سفر و گردشگری</span>
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
                      <span className='mr-2 hidden lg:inline-block'>برترین ها</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <div className='mr-4 hidden lg:inline-block'>
                <button className='text-center px-7 py-3 bg-indigo-800 text-white rounded-full shadow-md hover:bg-red-800 transition duration-300 ease-in-out'>
                  مشاهده آرشیف
                </button>
              </div>
              <Footer />
            </div>
          </div>
          <div className='flex-grow flex flex-col'>{children}</div>
        </div>

        <div className='hidden lg:block relative col-span-3 pl-5 scrollbar-hide h-screen overflow-y-scroll sticky top-0'>
          <LatestStories key={'lateststories'} />
          <div className='border-b border-gray-100 py-5 mb-2'>
            <h1 className='uppercase font-semibold mb-3'>تبلیغات</h1>
            <img className='w-full' src='https://paikaftab.com/wp-content/uploads/2021/09/Ad.png' />
          </div>
        </div>
      </div>
    </div>
  )
}
