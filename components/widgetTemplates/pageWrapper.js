import ImageComponentity from '../ImageComponentity'

export default function PageWrapper({ page, isImage = true }) {
  return (
    <div id={page.slug} className='mb-8 bg-white border'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 p-10'>
        <div className={`col-span-1 ${isImage ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
          <h3
            className='font-bold uppercase text-3xl mb-4'
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />

          <article
            className='text-gray-600 list-margin'
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </div>
        {isImage && page.featured_media != 0 && page.featured_media != null && (
          <ImageComponentity
            src={page._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
            classes={'col-span-1 lg:col-span-4 bg-gray-300'}
            alt={page.title.rendered}
          />
        )}
      </div>
    </div>
  )
}
