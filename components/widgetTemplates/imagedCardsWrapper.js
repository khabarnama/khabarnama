import ImageComponentity from './../ImageComponentity'

export default function ImagedCardsWrapper({ id, title, gridClasses, items }) {
  return (
    <div id={id} className='text-left mb-8 p-10 bg-white'>
      <h3 className='font-bold uppercase text-3xl'>{title}</h3>

      <div className={gridClasses ?? 'grid grid-cols-1 sm:grid-cols-12 gap-8 mt-8'}>
        {items.map((item, index) => (
          <div className='col-span-1 sm:col-span-6 md:col-span-3'>
            {item.featured_media != 0 && item.featured_media != null && (
              <ImageComponentity
                src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url}
                classes={'h-52 bg-gray-300'}
                alt={item.title.rendered}
              />
            )}
            <div
              class='h-12 flex justify-center items-center bg-gray-100'
              dangerouslySetInnerHTML={{ __html: item.title.rendered }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
