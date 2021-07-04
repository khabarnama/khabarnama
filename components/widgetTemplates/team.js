import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function TeamWidget() {
  const template = () => {
    return (
      <div className='order-4 col-span-1 sm:col-span-6 lg:col-span-3 bg-gray-100'>
        <div className='p-8'>
          <h3 className='uppercase font-bold text-2xl'>Core Team</h3>
        </div>
        <img
          src='https://iap.af/wp-content/uploads/2020/04/Shershah_2.jpeg'
          className='sm:h-96 bg-gray-300 filter grayscale'
        />
        <div className='p-8 flex flex-col justify-between'>
          <span className='uppercase text-xs mb-1'>president</span>
          <h3 className='font-bold uppercase text-2xl'>Sher Shah Rahim</h3>
          <div className='mt-6'>
            <p className='text-gray-700 mb-2 '>
              IAP's leadership team has a long history of success in technology, business
              management, and franchising.
            </p>
          </div>
        </div>
      </div>
    )
  }
  return template()
}
