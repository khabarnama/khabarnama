import ImageComponentity from '../ImageComponentity'

export default function PageWrapper({ page }) {
  return (
    <div id={page.slug} className='mb-8 bg-white border'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 p-10'>
        <div className='col-span-1 lg:col-span-8'>
          <h3
            className='font-bold uppercase text-3xl mb-4'
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />

          <div className='text-gray-600'>
            We are one of the pioneers in providing web hosting services in Afghanistan with over
            400 active clients.
            <br />
            <br />
            IAP has been offering its customers reliable and secure web hosting services since 2005
            (previously under NETLINKS Ltd’s leadership). We are one of the pioneers in web hosting
            services in Afghanistan and we take pride in hosting a number of critical and important
            websites in Afghanistan.
          </div>
        </div>
        {page.featured_media != 0 && page.featured_media != null ? (
          <ImageComponentity
            src={page._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
            classes={'col-span-1 lg:col-span-4 bg-gray-300 filter grayscale'}
            alt={page.title.rendered}
          />
        ) : (
          <div className='col-span-1 lg:col-span-4 bg-gray-300'></div>
        )}
      </div>
    </div>
  )
}
