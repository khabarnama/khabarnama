import Link from 'next/link'

export default function Footer() {
  return (
    <div className='text-xs p-5 flex flex-col items-start gap-2 md:gap-4 text-gray-900 '>
      <div className='flex gap-2'>
        <Link href='/about-us'>
          <a className='hover:underline'>درباره ما</a>
        </Link>
        <Link href='/تماس-باما'>
          <a className='hover:underline'>تماس باما</a>
        </Link>
      </div>
      <p className='font-semibold'>
        {new Date().getFullYear()} © تمام حقوق مادی و معنوی این وب سایت برای خبرنامه محفوظ می‌باشد
      </p>
    </div>
  )
}
