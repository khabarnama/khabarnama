import ImageComponentity from '../ImageComponentity'
import Link from 'next/link'

export default function ClientsWidget({ clients }) {
  const template = (clients) => {
    return (
      <div className='bg-white lg:px-12 py-8'>
        <h3 className='font-bold uppercase text-2xl mb-4'>MAJOR CLIENTS</h3>
        <div className='grid grid-cols-3 lg:flex flex-row items-center justify-between gap-5 overflow-x-auto'>
          {clients.map((client) => {
            return (
              <div
                key={client.id}
                className='w-32 h-20 bg-contain bg-no-repeat bg-center'
                style={{
                  backgroundImage: `url(${client._embedded['wp:featuredmedia'][0].source_url})`
                }}
              ></div>
            )
          })}
        </div>
      </div>
    )
  }
  return template(clients)
}
