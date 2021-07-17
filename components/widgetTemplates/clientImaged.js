import ImageComponentity from '../ImageComponentity'

export default function ClientsImagedWidget({ clients }) {
  const template = (clients) => {
    return (
      <div className='bg-white lg:px-12 p-8'>
        <h3 className='font-bold uppercase text-2xl mb-4'>MAJOR CLIENTS</h3>
        <div className='grid grid-cols-3 lg:flex flex-row items-center justify-between gap-5 overflow-x-auto'>
          {clients.map((client) => {
            return (
              <ImageComponentity
                key={client.id}
                classes='w-16 h-16 sm:w-24 sm:h-20'
                src={client._embedded['wp:featuredmedia'][0].source_url}
              />
            )
          })}
        </div>
      </div>
    )
  }
  return template(clients)
}
