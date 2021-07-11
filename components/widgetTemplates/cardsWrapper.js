import ServicesWidget from './services'

export default function CardsWrapper({ id, title, desc = [], gridClasses, services, isLink }) {
  return (
    <div id={id} className='text-left mb-8 p-10 bg-white'>
      <h3 className='font-bold uppercase text-3xl'>{title}</h3>
      {desc.length > 0 ? (
        <div className='mt-3 text-gray-600' dangerouslySetInnerHTML={{ __html: desc[0] }} />
      ) : (
        ''
      )}
      <div className={gridClasses ?? 'grid grid-cols-1 sm:grid-cols-12 mt-8'}>
        <ServicesWidget services={services} isLink={isLink} />
      </div>
    </div>
  )
}
